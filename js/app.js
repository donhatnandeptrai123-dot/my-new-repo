/**
 * Ứng dụng Web Luyện & Ôn Tập Vật Lí 12 - THPT Hoàng Hoa Thám
 * Tổ Vật Lý (Chủ đề 1 đến Chủ đề 6)
 * Chế độ Thi thử tương tác: Làm sai tự động mở lời giải chi tiết và chú thích!
 */

(function() {
  'use strict';

  // State Management
  const state = {
    currentLesson: 0, // 0 = Tất cả bài
    currentType: 'all', // 'all', 'single_choice', 'true_false', 'short_answer', 'essay'
    filterHasImage: false,
    filterBookmarked: false,
    searchQuery: '',
    mode: localStorage.getItem('vatli12_mode') || 'practice', // 'practice' (mặc định) | 'study'
    userAnswers: JSON.parse(localStorage.getItem('vatli12_user_answers') || '{}'),
    bookmarks: new Set(JSON.parse(localStorage.getItem('vatli12_bookmarks') || '[]')),
    revealedSolutions: new Set(JSON.parse(localStorage.getItem('vatli12_revealed_solutions') || '[]'))
  };

  // Cache DOM elements
  const el = {
    lessonButtonsContainer: document.getElementById('lessonButtonsContainer'),
    typeFilterButtons: document.getElementById('typeFilterButtons'),
    filterHasImage: document.getElementById('filterHasImage'),
    filterBookmarked: document.getElementById('filterBookmarked'),
    searchInput: document.getElementById('searchInput'),
    questionsContainer: document.getElementById('questionsContainer'),
    emptyState: document.getElementById('emptyState'),
    clearFiltersBtn: document.getElementById('clearFiltersBtn'),
    displayCountInfo: document.getElementById('displayCountInfo'),
    totalQuestionsBadge: document.getElementById('totalQuestionsBadge'),
    expandAllSolutionsBtn: document.getElementById('expandAllSolutionsBtn'),
    modeStudyBtn: document.getElementById('modeStudyBtn'),
    modePracticeBtn: document.getElementById('modePracticeBtn'),
    practiceScoreCard: document.getElementById('practiceScoreCard'),
    scoreCorrect: document.getElementById('scoreCorrect'),
    scoreIncorrect: document.getElementById('scoreIncorrect'),
    scoreAnswered: document.getElementById('scoreAnswered'),
    scorePercentage: document.getElementById('scorePercentage'),
    scoreProgressBar: document.getElementById('scoreProgressBar'),
    resetScoreCardBtn: document.getElementById('resetScoreCardBtn'),
    resetPracticeBtn: document.getElementById('resetPracticeBtn'),
    openTheoryBtn: document.getElementById('openTheoryBtn'),
    theoryModal: document.getElementById('theoryModal'),
    closeTheoryModalBtn: document.getElementById('closeTheoryModalBtn'),
    theoryModalContent: document.getElementById('theoryModalContent'),
    imageModal: document.getElementById('imageModal'),
    closeImageModalBtn: document.getElementById('closeImageModalBtn'),
    imageModalImg: document.getElementById('imageModalImg'),
    imageModalTitle: document.getElementById('imageModalTitle'),
    imageModalCaption: document.getElementById('imageModalCaption'),
    imageModalDownloadBtn: document.getElementById('imageModalDownloadBtn'),
    toastNotification: document.getElementById('toastNotification'),
    toastIcon: document.getElementById('toastIcon'),
    toastMessage: document.getElementById('toastMessage')
  };

  // Toast Notification System
  let toastTimer = null;
  function showToast(msg, type = 'success') {
    if (!el.toastNotification) return;
    clearTimeout(toastTimer);
    el.toastMessage.textContent = msg;
    if (type === 'success') {
      el.toastIcon.className = 'fa-solid fa-circle-check text-emerald-400 text-base';
    } else if (type === 'error') {
      el.toastIcon.className = 'fa-solid fa-circle-xmark text-rose-400 text-base';
    } else if (type === 'info') {
      el.toastIcon.className = 'fa-solid fa-circle-info text-blue-400 text-base';
    } else if (type === 'warning') {
      el.toastIcon.className = 'fa-solid fa-triangle-exclamation text-amber-400 text-base';
    }
    el.toastNotification.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    el.toastNotification.classList.add('translate-y-0', 'opacity-100');
    toastTimer = setTimeout(() => {
      el.toastNotification.classList.remove('translate-y-0', 'opacity-100');
      el.toastNotification.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
    }, 2800);
  }

  // Initialize Application
  function init() {
    renderLessonButtons();
    bindEvents();
    updateModeUI();
    renderQuestions();
    updateFilterCounts();
    updateLiveScoreCard();
  }

  // Render Lesson Selector Buttons in Sidebar
  function renderLessonButtons() {
    const allQuestions = window.getAllQuestions();
    const totalCount = allQuestions.length;
    el.totalQuestionsBadge.textContent = `${totalCount} câu`;

    let html = `
      <button data-lesson="0" class="lesson-filter-btn w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition flex items-center justify-between ${state.currentLesson === 0 ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-100'}">
        <span class="flex items-center">
          <i class="fa-solid fa-layer-group mr-2.5 text-xs ${state.currentLesson === 0 ? 'text-white' : 'text-blue-600'}"></i>
          <span>Tất cả các bài (B1 - B6)</span>
        </span>
        <span class="text-xs px-2 py-0.5 rounded-full font-semibold ${state.currentLesson === 0 ? 'bg-white/20 text-white' : 'bg-slate-200/60 text-slate-600'}">${totalCount}</span>
      </button>
    `;

    window.LESSONS_INFO.forEach(lesson => {
      const isSelected = state.currentLesson === lesson.id;
      html += `
        <button data-lesson="${lesson.id}" class="lesson-filter-btn w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition flex items-center justify-between ${isSelected ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-100'}">
          <span class="flex items-center truncate pr-2">
            <i class="${lesson.icon} mr-2.5 text-xs ${isSelected ? 'text-white' : 'text-blue-500'}"></i>
            <span class="truncate">Bài ${lesson.id}: ${lesson.title.split(':')[1]?.trim() || lesson.title}</span>
          </span>
          <span class="text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0 ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-200/60 text-slate-600'}">${lesson.stats.total}</span>
        </button>
      `;
    });

    el.lessonButtonsContainer.innerHTML = html;

    el.lessonButtonsContainer.querySelectorAll('.lesson-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.currentLesson = parseInt(btn.dataset.lesson, 10);
        renderLessonButtons();
        renderQuestions();
        updateFilterCounts();
        updateLiveScoreCard();
      });
    });
  }

  // Update Type Filter Counts
  function updateFilterCounts() {
    const questions = getFilteredQuestions(false);

    const counts = {
      all: questions.length,
      single_choice: questions.filter(q => q.type === 'single_choice').length,
      true_false: questions.filter(q => q.type === 'true_false').length,
      short_answer: questions.filter(q => q.type === 'short_answer').length,
      essay: questions.filter(q => q.type === 'essay').length
    };

    document.getElementById('countTypeAll').textContent = counts.all;
    document.getElementById('countTypeSingle').textContent = counts.single_choice;
    document.getElementById('countTypeTF').textContent = counts.true_false;
    document.getElementById('countTypeShort').textContent = counts.short_answer;
    document.getElementById('countTypeEssay').textContent = counts.essay;
  }

  // Filter Logic
  function getFilteredQuestions(filterByType = true) {
    let list = window.getAllQuestions();

    if (state.currentLesson > 0) {
      list = list.filter(q => q.lessonId === state.currentLesson);
    }

    if (state.filterHasImage) {
      list = list.filter(q => !!q.image);
    }

    if (state.filterBookmarked) {
      list = list.filter(q => state.bookmarks.has(q.id));
    }

    if (state.searchQuery.trim()) {
      const qLower = state.searchQuery.toLowerCase().trim();
      list = list.filter(q => {
        const textMatch = q.question && q.question.toLowerCase().includes(qLower);
        const expMatch = q.explanation && q.explanation.toLowerCase().includes(qLower);
        const optMatch = q.options && q.options.some(opt => opt.toLowerCase().includes(qLower));
        const itemsMatch = q.items && q.items.some(it => it.statement.toLowerCase().includes(qLower));
        return textMatch || expMatch || optMatch || itemsMatch;
      });
    }

    if (filterByType && state.currentType !== 'all') {
      list = list.filter(q => q.type === state.currentType);
    }

    return list;
  }

  // Reset ALL practice data cleanly
  function resetAllPractice() {
    state.userAnswers = {};
    state.revealedSolutions.clear();
    localStorage.removeItem('vatli12_user_answers');
    localStorage.removeItem('vatli12_revealed_solutions');
    saveState();
    updateLiveScoreCard();
    renderQuestions();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('Đã làm mới toàn bộ bài làm! Bạn có thể bắt đầu thi lại từ đầu.', 'info');
  }

  // Reset a SINGLE question
  function resetSingleQuestion(qid) {
    delete state.userAnswers[qid];
    state.revealedSolutions.delete(qid);
    saveState();
    updateLiveScoreCard();
    renderQuestions();
  }

  // Save State to LocalStorage
  function saveState() {
    localStorage.setItem('vatli12_user_answers', JSON.stringify(state.userAnswers));
    localStorage.setItem('vatli12_mode', state.mode);
    localStorage.setItem('vatli12_revealed_solutions', JSON.stringify(Array.from(state.revealedSolutions)));
  }

  // Update Live Score Card
  function updateLiveScoreCard() {
    const list = getFilteredQuestions(true);
    let answeredCount = 0;
    let correctCount = 0;
    let incorrectCount = 0;

    list.forEach(q => {
      if (q.type === 'single_choice') {
        const ans = state.userAnswers[q.id];
        if (ans) {
          answeredCount++;
          if (ans === q.correctAnswer) {
            correctCount++;
          } else {
            incorrectCount++;
          }
        }
      } else if (q.type === 'true_false') {
        const ansObj = state.userAnswers[q.id] || {};
        q.items.forEach(it => {
          if (ansObj[it.subId] !== undefined) {
            answeredCount++;
            if (ansObj[it.subId] === it.correct) {
              correctCount++;
            } else {
              incorrectCount++;
            }
          }
        });
      } else if (q.type === 'short_answer') {
        const ans = state.userAnswers[q.id];
        if (ans) {
          answeredCount++;
          if (checkShortAnswer(ans, q.correctAnswer)) {
            correctCount++;
          } else {
            incorrectCount++;
          }
        }
      }
    });

    el.scoreAnswered.textContent = answeredCount;
    el.scoreCorrect.textContent = correctCount;
    el.scoreIncorrect.textContent = incorrectCount;

    const pct = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    el.scorePercentage.textContent = `${pct}%`;
    if (el.scoreProgressBar) {
      el.scoreProgressBar.style.width = `${pct}%`;
    }
  }

  // Render Questions Stream
  function renderQuestions() {
    const list = getFilteredQuestions(true);
    el.displayCountInfo.textContent = `Đang hiển thị ${list.length} câu hỏi`;

    if (list.length === 0) {
      el.questionsContainer.innerHTML = '';
      el.emptyState.classList.remove('hidden');
      return;
    }

    el.emptyState.classList.add('hidden');
    let html = '';

    list.forEach(q => {
      html += renderQuestionCard(q);
    });

    el.questionsContainer.innerHTML = html;

    // Render KaTeX formulas
    renderMath();

    // Bind interaction events for the rendered cards
    bindQuestionCardEvents();
  }

  // Render a Single Question Card HTML
  function renderQuestionCard(q) {
    const isBookmarked = state.bookmarks.has(q.id);
    const isStudy = state.mode === 'study';

    // Solution open condition:
    // In 'study' mode: always open.
    // In 'practice' mode: open IF explicitly revealed (e.g. when user answered WRONG or clicked view solution).
    const isSolutionOpen = isStudy || state.revealedSolutions.has(q.id);

    // Type badge color & label
    let typeBadge = '';
    if (q.type === 'single_choice') {
      typeBadge = '<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200"><i class="fa-solid fa-circle-dot mr-1"></i>Trắc nghiệm (4 LC)</span>';
    } else if (q.type === 'true_false') {
      typeBadge = '<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200"><i class="fa-solid fa-circle-half-stroke mr-1"></i>Đúng / Sai</span>';
    } else if (q.type === 'short_answer') {
      typeBadge = '<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200"><i class="fa-solid fa-font mr-1"></i>Trả lời ngắn</span>';
    } else if (q.type === 'essay') {
      typeBadge = '<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200"><i class="fa-solid fa-pen-ruler mr-1"></i>Tự luận</span>';
    }

    // Interactive Answer Section
    let answerInteractiveHtml = '';
    if (q.type === 'single_choice') {
      answerInteractiveHtml = renderSingleChoiceInteractive(q);
    } else if (q.type === 'true_false') {
      answerInteractiveHtml = renderTrueFalseInteractive(q);
    } else if (q.type === 'short_answer') {
      answerInteractiveHtml = renderShortAnswerInteractive(q);
    } else if (q.type === 'essay') {
      answerInteractiveHtml = renderEssayInteractive(q);
    }

    // Image comparison banner & Crop Image
    let imageCropHtml = '';
    if (q.image) {
      imageCropHtml = `
        <div class="my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-slate-600 flex items-center">
              <i class="fa-solid fa-chart-line mr-1.5 text-blue-600"></i>Hình ảnh / Đồ thị bài toán:
            </span>
            <button class="zoom-crop-btn text-xs text-blue-600 hover:text-blue-800 font-medium inline-flex items-center" data-src="${q.image}" data-title="${q.questionNumber}: Hình vẽ minh họa">
              <i class="fa-solid fa-magnifying-glass-plus mr-1"></i>Phóng to ảnh
            </button>
          </div>
          <div class="flex justify-center bg-white p-2 rounded-lg border border-slate-200/80 cursor-pointer zoom-crop-btn" data-src="${q.image}" data-title="${q.questionNumber}: Hình vẽ minh họa">
            <img src="${q.image}" alt="Hình minh họa" class="max-h-64 object-contain rounded transition hover:scale-[1.02]">
          </div>
        </div>
      `;
    }

    return `
      <div id="card-${q.id}" class="question-card bg-white rounded-2xl p-5 border border-slate-200 shadow-sm transition hover:shadow-md space-y-4" data-id="${q.id}">
        <!-- Card Header -->
        <div class="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-slate-100">
          <div class="flex items-center space-x-2 flex-wrap gap-1">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
              Bài ${q.lessonId}
            </span>
            ${typeBadge}
            <span class="text-xs font-medium text-slate-500">
              ${q.questionNumber}
            </span>
          </div>

          <div class="flex items-center space-x-2">
            <!-- Retry question button if answered in practice mode -->
            ${!isStudy && state.userAnswers[q.id] !== undefined ? `
              <button class="retry-q-btn inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold text-rose-600 hover:bg-rose-50 border border-rose-200 transition" data-qid="${q.id}" title="Làm lại câu này">
                <i class="fa-solid fa-rotate-left mr-1"></i>Làm lại câu này
              </button>
            ` : ''}

            <!-- Button to open original scanned booklet page -->
            <button class="view-page-btn inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-700 border border-slate-200 transition" 
              data-page="${q.page}" data-pageimg="${q.pageImage}" title="Xem ảnh gốc trang ${q.page} trong tài liệu">
              <i class="fa-solid fa-file-invoice mr-1 text-slate-400"></i>
              <span>Trang ${q.page}</span>
            </button>

            <!-- Bookmark Button -->
            <button class="bookmark-btn p-1.5 rounded-lg text-slate-400 hover:text-amber-500 hover:bg-amber-50 transition ${isBookmarked ? 'text-amber-500' : ''}" 
              data-id="${q.id}" title="${isBookmarked ? 'Bỏ đánh dấu' : 'Đánh dấu câu này'}">
              <i class="${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-star text-base"></i>
            </button>
          </div>
        </div>

        <!-- Question Body Text -->
        <div class="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
          ${formatMathText(q.question)}
        </div>

        <!-- Visual Image Crop (if available) -->
        ${imageCropHtml}

        <!-- Interactive Options / Input Area -->
        <div class="pt-1">
          ${answerInteractiveHtml}
        </div>

        <!-- Explanation & Notes Container -->
        <div class="pt-2">
          ${renderSolutionBox(q, isSolutionOpen)}
        </div>
      </div>
    `;
  }

  // Interactive Single Choice Options
  function renderSingleChoiceInteractive(q) {
    const isStudy = state.mode === 'study';
    const userAnswer = state.userAnswers[q.id];
    const isAnswered = userAnswer !== undefined;
    const isCorrect = isAnswered && (userAnswer === q.correctAnswer);

    let html = '<div class="grid grid-cols-1 gap-2">';
    q.options.forEach(opt => {
      const letter = opt.trim().charAt(0);
      let btnClasses = 'option-btn w-full text-left p-3 rounded-xl border text-sm transition flex items-start space-x-3 ';

      if (isStudy) {
        // Study mode: Always highlight correct answer
        if (letter === q.correctAnswer) {
          btnClasses += 'border-emerald-300 bg-emerald-50/80 text-emerald-900 font-bold';
        } else {
          btnClasses += 'border-slate-200 bg-white text-slate-700 opacity-80';
        }
      } else {
        // Practice / Quiz mode
        if (isAnswered) {
          if (letter === q.correctAnswer) {
            btnClasses += 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold ring-1 ring-emerald-400';
          } else if (userAnswer === letter) {
            btnClasses += 'border-rose-400 bg-rose-50 text-rose-900 font-bold animate-shake';
          } else {
            btnClasses += 'border-slate-200 bg-white opacity-50';
          }
        } else {
          // Not yet answered: Fresh clickable state
          btnClasses += 'border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/50 text-slate-700 cursor-pointer shadow-2xs';
        }
      }

      html += `
        <button class="${btnClasses}" data-qid="${q.id}" data-opt="${letter}" ${isStudy || isAnswered ? 'disabled' : ''}>
          <span class="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${
            isStudy && letter === q.correctAnswer
              ? 'bg-emerald-600 text-white'
              : isAnswered && letter === q.correctAnswer
              ? 'bg-emerald-600 text-white'
              : isAnswered && userAnswer === letter && !isCorrect
              ? 'bg-rose-600 text-white'
              : 'bg-slate-100 text-slate-700'
          }">
            ${letter}
          </span>
          <span class="flex-1">${formatMathText(opt.substring(2).trim())}</span>

          ${isStudy && letter === q.correctAnswer ? '<i class="fa-solid fa-circle-check text-emerald-600 text-base ml-2"></i>' : ''}
          ${isAnswered && letter === q.correctAnswer ? '<span class="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center"><i class="fa-solid fa-check mr-1"></i>Đáp án đúng</span>' : ''}
          ${isAnswered && userAnswer === letter && !isCorrect ? '<span class="text-xs font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full flex items-center"><i class="fa-solid fa-xmark mr-1"></i>Bạn đã chọn</span>' : ''}
        </button>
      `;
    });
    html += '</div>';

    // Immediate Alert Banner if answered incorrectly
    if (!isStudy && isAnswered && !isCorrect) {
      html += `
        <div class="mt-2.5 p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-center justify-between animate-slide-down">
          <div class="flex items-center space-x-2">
            <i class="fa-solid fa-triangle-exclamation text-rose-500 text-base"></i>
            <span>Bạn đã chọn <strong>${userAnswer}</strong> (Chưa đúng). Đáp án chính xác là <strong>${q.correctAnswer}</strong>. Lời giải chi tiết đã tự động mở dưới đây!</span>
          </div>
          <button class="retry-q-btn px-2.5 py-1 bg-white hover:bg-rose-100 text-rose-700 font-bold border border-rose-300 rounded-lg transition text-xs flex-shrink-0 ml-2" data-qid="${q.id}">
            <i class="fa-solid fa-rotate-left mr-1"></i>Thử lại
          </button>
        </div>
      `;
    } else if (!isStudy && isAnswered && isCorrect) {
      html += `
        <div class="mt-2.5 p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center justify-between animate-pop">
          <div class="flex items-center space-x-2">
            <i class="fa-solid fa-circle-check text-emerald-600 text-base"></i>
            <span><strong>Chính xác!</strong> Bạn đã chọn đúng phương án <strong>${q.correctAnswer}</strong>.</span>
          </div>
          <button class="toggle-solution-btn text-emerald-700 hover:text-emerald-900 font-bold underline text-xs" data-qid="${q.id}">
            Xem lại phương pháp
          </button>
        </div>
      `;
    }

    return html;
  }

  // Interactive True / False Options
  function renderTrueFalseInteractive(q) {
    const isStudy = state.mode === 'study';
    const userAnsObj = state.userAnswers[q.id] || {};

    let html = '<div class="space-y-2.5">';
    q.items.forEach(item => {
      const userChoice = userAnsObj[item.subId]; // true, false or undefined
      const isSubAnswered = userChoice !== undefined;
      const isSubCorrect = isSubAnswered && (userChoice === item.correct);

      html += `
        <div class="p-3 bg-slate-50/70 border border-slate-200/90 rounded-xl space-y-2">
          <div class="flex items-start justify-between gap-3 text-sm">
            <div class="flex items-start space-x-2">
              <span class="font-bold text-slate-700 uppercase">${item.subId})</span>
              <span class="text-slate-800">${formatMathText(item.statement)}</span>
            </div>

            <!-- T/F Buttons or Status -->
            <div class="flex items-center space-x-1.5 flex-shrink-0">
              ${isStudy ? `
                <span class="px-2.5 py-1 rounded-lg text-xs font-bold ${item.correct ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-rose-100 text-rose-800 border border-rose-300'}">
                  ${item.correct ? '<i class="fa-solid fa-check mr-1"></i>ĐÚNG' : '<i class="fa-solid fa-xmark mr-1"></i>SAI'}
                </span>
              ` : `
                <button class="tf-btn px-3 py-1 rounded-lg text-xs font-bold border transition ${
                  isSubAnswered && userChoice === true
                    ? (isSubCorrect ? 'bg-emerald-500 text-white border-emerald-600' : 'bg-rose-500 text-white border-rose-600 animate-shake')
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                }" data-qid="${q.id}" data-sub="${item.subId}" data-val="true">
                  Đúng
                </button>
                <button class="tf-btn px-3 py-1 rounded-lg text-xs font-bold border transition ${
                  isSubAnswered && userChoice === false
                    ? (isSubCorrect ? 'bg-emerald-500 text-white border-emerald-600' : 'bg-rose-500 text-white border-rose-600 animate-shake')
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                }" data-qid="${q.id}" data-sub="${item.subId}" data-val="false">
                  Sai
                </button>
                ${isSubAnswered ? `
                  <span class="text-xs ml-1 font-bold ${isSubCorrect ? 'text-emerald-600' : 'text-rose-600'}">
                    ${isSubCorrect ? '<i class="fa-solid fa-check"></i>' : `(ĐS: ${item.correct ? 'Đúng' : 'Sai'})`}
                  </span>
                ` : ''}
              `}
            </div>
          </div>

          <!-- Explanation for individual sub-item: shows in study mode OR when user chose wrong -->
          ${(isStudy || (isSubAnswered && !isSubCorrect) || state.revealedSolutions.has(q.id)) && item.explanation ? `
            <div class="text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200 pl-3 border-l-3 ${item.correct ? 'border-l-emerald-500' : 'border-l-rose-500'} animate-slide-down">
              <span class="font-bold ${item.correct ? 'text-emerald-700' : 'text-rose-700'}">Giải thích ý ${item.subId} (${item.correct ? 'Đúng' : 'Sai'}):</span> ${formatMathText(item.explanation)}
            </div>
          ` : ''}
        </div>
      `;
    });
    html += '</div>';
    return html;
  }

  // Interactive Short Answer
  function renderShortAnswerInteractive(q) {
    const isStudy = state.mode === 'study';
    const userAnswer = state.userAnswers[q.id] || '';
    const isAnswered = userAnswer.trim() !== '';
    const isCorrect = isAnswered && checkShortAnswer(userAnswer, q.correctAnswer);

    if (isStudy) {
      return `
        <div class="flex items-center space-x-3 p-3 bg-amber-50 border border-amber-200 rounded-xl">
          <div class="text-xs font-bold uppercase tracking-wider text-amber-800">Đáp án chính thức:</div>
          <div class="text-base font-bold text-amber-900 bg-white px-3 py-1 rounded-lg border border-amber-300 shadow-sm">
            ${formatMathText(q.correctAnswer)}
          </div>
        </div>
      `;
    }

    // Practice mode with Check Button & Instant Feedback
    return `
      <div class="space-y-2 p-3 bg-slate-50 border border-slate-200 rounded-xl">
        <div class="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <label class="text-xs font-bold text-slate-700 flex-shrink-0">Nhập đáp số của bạn:</label>
          <div class="flex items-center space-x-2 w-full sm:w-auto">
            <input type="text" class="short-answer-input flex-1 sm:w-44 px-3 py-1.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-slate-800"
              placeholder="Ví dụ: 167 hoặc 6,97" data-qid="${q.id}" value="${userAnswer}">
            <button class="check-short-btn px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg transition shadow-xs flex-shrink-0" data-qid="${q.id}">
              Kiểm tra
            </button>
            ${isAnswered ? `
              <button class="retry-q-btn p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition" data-qid="${q.id}" title="Nhập lại">
                <i class="fa-solid fa-rotate-left"></i>
              </button>
            ` : ''}
          </div>
        </div>

        ${isAnswered ? `
          <div class="pt-1 flex items-center justify-between text-xs animate-slide-down">
            ${isCorrect ? `
              <span class="font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-lg flex items-center">
                <i class="fa-solid fa-circle-check mr-1.5 text-emerald-600"></i>Chính xác! (${q.correctAnswer})
              </span>
            ` : `
              <span class="font-bold text-rose-700 bg-rose-100 px-2.5 py-1 rounded-lg flex items-center">
                <i class="fa-solid fa-circle-xmark mr-1.5 text-rose-600"></i>Chưa chính xác! Đáp số đúng: <strong>${q.correctAnswer}</strong>. Xem bài giải dưới đây:
              </span>
            `}
          </div>
        ` : ''}
      </div>
    `;
  }

  // Interactive Essay
  function renderEssayInteractive(q) {
    const isStudy = state.mode === 'study';
    const showAnswer = isStudy || state.revealedSolutions.has(q.id);

    if (!showAnswer) {
      return `
        <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-600">
          <span><i class="fa-solid fa-pencil mr-1.5 text-blue-500"></i>Tự luận: Bạn hãy tự giải ra nháp trước, sau đó bấm xem đáp số để đối chiếu.</span>
          <button class="toggle-solution-btn px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition shadow-xs flex-shrink-0" data-qid="${q.id}">
            <i class="fa-solid fa-eye mr-1"></i>Xem bài giải &amp; đáp số
          </button>
        </div>
      `;
    }

    return `
      <div class="p-3 bg-rose-50/60 border border-rose-200/80 rounded-xl flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <i class="fa-solid fa-flag-checkered text-rose-600"></i>
          <span class="text-xs font-bold text-rose-800 uppercase tracking-wide">Đáp số tài liệu:</span>
          <span class="text-sm font-bold text-slate-900 bg-white px-2.5 py-0.5 rounded-md border border-rose-200 shadow-xs">
            ${formatMathText(q.correctAnswer)}
          </span>
        </div>
      </div>
    `;
  }

  // Render Detailed Solution Box
  function renderSolutionBox(q, isOpen) {
    return `
      <div class="solution-container border-t border-slate-100 pt-3">
        <button class="toggle-solution-btn inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-800 transition py-1" data-qid="${q.id}">
          <i class="fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} mr-1.5 text-[10px]"></i>
          <span>${isOpen ? 'Thu gọn bài giải chi tiết' : 'Xem bài giải cặn kẽ &amp; chú thích'}</span>
        </button>

        <div id="solution-content-${q.id}" class="${isOpen ? 'block' : 'hidden'} mt-3 space-y-3 bg-slate-50/90 rounded-xl p-4 border border-slate-200 animate-slide-down">
          
          <!-- Detailed Steps -->
          <div>
            <div class="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center mb-1.5">
              <i class="fa-solid fa-calculator mr-1.5"></i>Bài giải chi tiết &amp; Phương pháp tính:
            </div>
            <div class="text-sm text-slate-800 whitespace-pre-line leading-relaxed font-normal bg-white p-3 rounded-lg border border-slate-200/70">
              ${formatMathText(q.explanation || q.solution || '')}
            </div>
          </div>

          <!-- Important Note / Pitfall -->
          ${q.notes ? `
            <div class="bg-amber-50/70 border border-amber-200/80 rounded-lg p-2.5 text-xs text-amber-900 flex items-start space-x-2">
              <i class="fa-solid fa-triangle-exclamation text-amber-600 mt-0.5 flex-shrink-0"></i>
              <div>
                <span class="font-bold">Lưu ý &amp; Chú thích quan trọng:</span> ${formatMathText(q.notes)}
              </div>
            </div>
          ` : ''}

          <!-- Original Scan Verification Pill -->
          <div class="flex items-center justify-between pt-1 border-t border-slate-200 text-xs text-slate-500">
            <span>Cơ sở đối chiếu: <strong>Trang ${q.page}</strong></span>
            <button class="view-page-btn text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center" data-page="${q.page}" data-pageimg="${q.pageImage}">
              <i class="fa-solid fa-magnifying-glass mr-1"></i>Mở ảnh chụp gốc trang ${q.page}
            </button>
          </div>

        </div>
      </div>
    `;
  }

  // Format Text for KaTeX Math Rendering
  function formatMathText(text) {
    if (!text) return '';
    return text;
  }

  // KaTeX Auto-Render Trigger
  function renderMath() {
    if (window.renderMathInElement) {
      window.renderMathInElement(el.questionsContainer, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\[', right: '\\]', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false }
        ],
        throwOnError: false
      });
    }
  }

  // Bind Events for Question Cards (options, toggles, bookmarks, modal)
  function bindQuestionCardEvents() {
    // 1. Single Choice Option Click (Instant Feedback & Auto-open solution on wrong)
    el.questionsContainer.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (state.mode === 'study') return;
        const qid = btn.dataset.qid;
        const opt = btn.dataset.opt;

        // Save user's answer
        state.userAnswers[qid] = opt;

        // Find question
        const allQuestions = window.getAllQuestions();
        const q = allQuestions.find(item => item.id === qid);

        if (q) {
          const isCorrect = (opt === q.correctAnswer);
          if (!isCorrect) {
            // AUTOMATICALLY OPEN SOLUTION WHEN WRONG!
            state.revealedSolutions.add(qid);
            showToast(`Bạn chọn ${opt} chưa đúng! Đã tự động mở lời giải chi tiết.`, 'warning');
          } else {
            showToast(`Chính xác! Đáp án đúng là ${opt}.`, 'success');
          }
        }

        saveState();
        updateLiveScoreCard();
        renderQuestions();
      });
    });

    // 2. True/False Button Click
    el.questionsContainer.querySelectorAll('.tf-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (state.mode === 'study') return;
        const qid = btn.dataset.qid;
        const sub = btn.dataset.sub;
        const val = btn.dataset.val === 'true';

        if (!state.userAnswers[qid]) state.userAnswers[qid] = {};
        state.userAnswers[qid][sub] = val;

        // Find question and sub-item
        const allQuestions = window.getAllQuestions();
        const q = allQuestions.find(item => item.id === qid);
        if (q && q.items) {
          const item = q.items.find(it => it.subId === sub);
          if (item && val !== item.correct) {
            showToast(`Ý ${sub} chưa chính xác! Lời giải thích đã mở bên dưới.`, 'warning');
          }
        }

        saveState();
        updateLiveScoreCard();
        renderQuestions();
      });
    });

    // 3. Short Answer Button Click or Enter Key
    el.questionsContainer.querySelectorAll('.check-short-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.dataset.qid;
        const input = el.questionsContainer.querySelector(`.short-answer-input[data-qid="${qid}"]`);
        if (input) {
          const val = input.value.trim();
          if (!val) {
            showToast('Vui lòng nhập đáp số trước khi kiểm tra!', 'warning');
            return;
          }
          state.userAnswers[qid] = val;

          const allQuestions = window.getAllQuestions();
          const q = allQuestions.find(item => item.id === qid);
          if (q) {
            if (!checkShortAnswer(val, q.correctAnswer)) {
              // Open solution when wrong
              state.revealedSolutions.add(qid);
              showToast('Chưa chính xác! Đã mở bài giải các bước tính bên dưới.', 'warning');
            } else {
              showToast('Chính xác! Kết quả hoàn toàn đúng.', 'success');
            }
          }

          saveState();
          updateLiveScoreCard();
          renderQuestions();
        }
      });
    });

    el.questionsContainer.querySelectorAll('.short-answer-input').forEach(input => {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const qid = input.dataset.qid;
          const checkBtn = el.questionsContainer.querySelector(`.check-short-btn[data-qid="${qid}"]`);
          if (checkBtn) checkBtn.click();
        }
      });
    });

    // 4. Retry Single Question Button
    el.questionsContainer.querySelectorAll('.retry-q-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const qid = btn.dataset.qid;
        resetSingleQuestion(qid);
        showToast('Đã làm mới câu hỏi này! Mời bạn chọn lại.', 'info');
      });
    });

    // 5. Bookmark Toggle
    el.questionsContainer.querySelectorAll('.bookmark-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.dataset.qid;
        if (state.bookmarks.has(qid)) {
          state.bookmarks.delete(qid);
        } else {
          state.bookmarks.add(qid);
        }
        localStorage.setItem('vatli12_bookmarks', JSON.stringify(Array.from(state.bookmarks)));
        renderQuestions();
      });
    });

    // 6. Solution Toggle
    el.questionsContainer.querySelectorAll('.toggle-solution-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.dataset.qid;
        if (state.revealedSolutions.has(qid)) {
          state.revealedSolutions.delete(qid);
        } else {
          state.revealedSolutions.add(qid);
        }
        saveState();
        renderQuestions();
      });
    });

    // 7. View Original Page Scan Modal
    el.questionsContainer.querySelectorAll('.view-page-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const page = btn.dataset.page;
        const pageImg = btn.dataset.pageimg;
        openImageModal(pageImg, `Ảnh chụp trang gốc: Trang ${page} • Tài liệu THPT Hoàng Hoa Thám`, `Đối chiếu trực tiếp với trang ${page} để kiểm tra đề bài và hình vẽ gốc.`);
      });
    });

    // 8. Zoom Crop Image
    el.questionsContainer.querySelectorAll('.zoom-crop-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const src = btn.dataset.src;
        const title = btn.dataset.title || 'Hình ảnh câu hỏi';
        openImageModal(src, title, 'Hình ảnh / Đồ thị được trích xuất từ tài liệu học tập.');
      });
    });
  }

  // Open Lightbox Image Modal
  function openImageModal(imgSrc, title, caption) {
    el.imageModalImg.src = imgSrc;
    el.imageModalTitle.textContent = title;
    el.imageModalCaption.textContent = caption;
    el.imageModalDownloadBtn.href = imgSrc;
    el.imageModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function closeImageModal() {
    el.imageModal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  // Open Theory & Formulas Modal (Multi-tab: 7 Master Problem Types, Lesson Summary, Unit Conversions & Pitfalls)
  function openTheoryModal(defaultTab = 'types') {
    let html = `
      <div class="space-y-4">
        <!-- Tab Navigation Buttons -->
        <div class="flex items-center space-x-2 border-b border-slate-200 pb-3 overflow-x-auto">
          <button id="theoryTabBtnTypes" class="theory-tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition cursor-pointer ${defaultTab === 'types' ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">
            <i class="fa-solid fa-wand-magic-sparkles"></i>
            <span>7 Dạng Bài & Công Thức Toàn Năng</span>
          </button>
          <button id="theoryTabBtnLessons" class="theory-tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition cursor-pointer ${defaultTab === 'lessons' ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">
            <i class="fa-solid fa-book-open"></i>
            <span>Tóm Tắt Từng Bài (Bài 1 - 6)</span>
          </button>
          <button id="theoryTabBtnUnits" class="theory-tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition cursor-pointer ${defaultTab === 'units' ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <span>Đổi Đơn Vị & Cạm Bẫy Đề Thi</span>
          </button>
        </div>

        <!-- TAB 1: 7 MASTER PROBLEM TYPES -->
        <div id="theoryTabContentTypes" class="${defaultTab === 'types' ? 'block' : 'hidden'} space-y-4">
          <div class="p-3.5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl text-xs sm:text-sm text-blue-900 leading-relaxed flex items-start space-x-2.5">
            <i class="fa-solid fa-star text-amber-500 mt-1 flex-shrink-0"></i>
            <div>
              <strong>Bí kíp giải mọi dạng bài tập (Bài 1 - Bài 6):</strong> Tổng hợp 7 dạng toán then chốt, thuật toán từng bước, công thức tổng quát và cạm bẫy hay gài trong đề thi.
            </div>
          </div>

          <div class="space-y-4">
            ${(window.MASTER_PROBLEM_TYPES || []).map(item => `
              <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3.5 hover:border-blue-300 transition">
                <div class="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div class="flex items-center space-x-2.5">
                    <div class="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                      <i class="${item.icon}"></i>
                    </div>
                    <div>
                      <h4 class="text-sm sm:text-base font-bold text-slate-900">${item.title}</h4>
                      <div class="text-xs text-blue-600 font-medium">${item.scope} &bull; ${item.badge}</div>
                    </div>
                  </div>
                  <span class="text-xs font-bold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                    Dạng ${item.id}
                  </span>
                </div>

                <!-- Formulas -->
                <div>
                  <div class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    <i class="fa-solid fa-square-root-variable mr-1 text-blue-600"></i>Hệ thống công thức cốt lõi:
                  </div>
                  <div class="grid grid-cols-1 gap-2">
                    ${item.formulas.map(f => `
                      <div class="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80">
                        <div class="text-xs font-semibold text-slate-600 mb-1">${f.name}:</div>
                        <div class="text-sm font-semibold text-blue-950 overflow-x-auto py-1">
                          $$${f.tex}$$
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>

                <!-- Algorithm / Steps -->
                <div>
                  <div class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    <i class="fa-solid fa-list-ol mr-1 text-emerald-600"></i>Phương pháp &amp; Thuật toán giải:
                  </div>
                  <ul class="space-y-1.5 text-xs sm:text-sm text-slate-700 bg-slate-50/70 p-3 rounded-xl border border-slate-200/60 leading-relaxed">
                    ${item.algorithm.map(step => `<li>${step}</li>`).join('')}
                  </ul>
                </div>

                <!-- Pitfall -->
                ${item.pitfalls ? `
                  <div class="p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start space-x-2">
                    <i class="fa-solid fa-triangle-exclamation text-amber-600 mt-0.5 flex-shrink-0"></i>
                    <div>
                      <span class="font-bold">Cạm bẫy đề thi:</span> ${item.pitfalls}
                    </div>
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- TAB 2: LESSON SUMMARIES -->
        <div id="theoryTabContentLessons" class="${defaultTab === 'lessons' ? 'block' : 'hidden'} space-y-4">
          ${window.LESSONS_INFO.map(lesson => `
            <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
              <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                <div class="flex items-center space-x-2.5">
                  <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                    <i class="${lesson.icon}"></i>
                  </div>
                  <div>
                    <h4 class="text-base font-bold text-slate-900">${lesson.title}</h4>
                    <div class="text-xs text-slate-500">${lesson.subtitle} (${lesson.pages})</div>
                  </div>
                </div>
                <span class="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg">
                  ${lesson.stats.total} câu hỏi
                </span>
              </div>

              <!-- Core Formulas -->
              <div>
                <div class="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
                  <i class="fa-solid fa-square-root-variable mr-1"></i>Công thức trọng tâm:
                </div>
                <div class="grid grid-cols-1 gap-2">
                  ${lesson.formulas.map(f => `
                    <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                      <div class="text-xs font-bold text-slate-700 mb-1">${f.name}:</div>
                      <div class="text-sm font-semibold text-blue-900 overflow-x-auto">
                        $$${f.formula}$$
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Theory Bullets -->
              <div>
                <div class="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  <i class="fa-solid fa-list-check mr-1"></i>Kiến thức cần ghi nhớ:
                </div>
                <ul class="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                  ${lesson.theory.map(t => `<li>${t}</li>`).join('')}
                </ul>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- TAB 3: UNIT CONVERSIONS & PITFALLS -->
        <div id="theoryTabContentUnits" class="${defaultTab === 'units' ? 'block' : 'hidden'} space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-3">
              <div class="flex items-center space-x-2 text-rose-600 font-bold text-sm border-b pb-2">
                <i class="fa-solid fa-scale-unbalanced-flip"></i>
                <span>Quy đổi Khối lượng &amp; Thể tích</span>
              </div>
              <ul class="text-xs sm:text-sm text-slate-700 space-y-2">
                <li>&bull; $1\\text{ tấn} = 1000\\text{ kg} = 10^6\\text{ g}$</li>
                <li>&bull; $1\\text{ g} = 10^{-3}\\text{ kg}$ (Trong $Q = mc\\Delta t$, bắt buộc $m$ phải là <strong>kg</strong>!)</li>
                <li>&bull; Nước: $V = 1\\text{ lít} = 1\\text{ dm}^3 = 10^{-3}\\text{ m}^3 \\iff m = 1\\text{ kg}$ ($D_{\\text{nước}} = 1000\\text{ kg/m}^3$)</li>
                <li>&bull; Rượu: $D_{\\text{rượu}} \\approx 800\\text{ kg/m}^3 \\implies 1\\text{ lít rượu} = 0{,}8\\text{ kg}$</li>
                <li>&bull; Thể tích: $1\\text{ cm}^3 = 10^{-6}\\text{ m}^3; \\quad 1\\text{ lít} = 10^{-3}\\text{ m}^3$</li>
              </ul>
            </div>

            <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-3">
              <div class="flex items-center space-x-2 text-amber-600 font-bold text-sm border-b pb-2">
                <i class="fa-solid fa-bolt-lightning"></i>
                <span>Quy đổi Năng lượng &amp; Công suất</span>
              </div>
              <ul class="text-xs sm:text-sm text-slate-700 space-y-2">
                <li>&bull; $1\\text{ kJ} = 1000\\text{ J} = 10^3\\text{ J}$</li>
                <li>&bull; $1\\text{ MJ} = 10^6\\text{ J}$</li>
                <li>&bull; $1\\text{ cal} = 4{,}186\\text{ J} \\approx 4{,}18\\text{ J}; \\quad 1\\text{ kcal} = 4186\\text{ J}$</li>
                <li>&bull; $1\\text{ kWh} = 1000\\text{ W} \\times 3600\\text{ s} = 3{,}6 \\times 10^6\\text{ J} = 3{,}6\\text{ MJ}$</li>
                <li>&bull; Thời gian: $1\\text{ phút} = 60\\text{ s}; \\quad 1\\text{ giờ} = 3600\\text{ s}$</li>
              </ul>
            </div>

            <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-3">
              <div class="flex items-center space-x-2 text-indigo-600 font-bold text-sm border-b pb-2">
                <i class="fa-solid fa-temperature-arrow-up"></i>
                <span>Nhiệt độ &amp; Áp suất</span>
              </div>
              <ul class="text-xs sm:text-sm text-slate-700 space-y-2">
                <li>&bull; $T(\\text{K}) = t(^{\\circ}\\text{C}) + 273{,}15$</li>
                <li>&bull; <strong>Độ tăng/giảm nhiệt độ:</strong> $\\Delta T(\\text{K}) = \\Delta t(^{\\circ}\\text{C})$ (Không cộng $273$!)</li>
                <li>&bull; $1\\text{ bar} = 10^5\\text{ Pa} = 10^5\\text{ N/m}^2$</li>
                <li>&bull; $1\\text{ atm} = 1{,}013 \\times 10^5\\text{ Pa}; \\quad 760\\text{ mmHg} = 1\\text{ atm}$</li>
                <li>&bull; Công chất khí $A' = p \\Delta V$ khi $p$ tính bằng $\\text{Pa}$, $\\Delta V$ tính bằng $\\text{m}^3$ thì $A'$ ra $\\text{J}$.</li>
              </ul>
            </div>

            <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-3">
              <div class="flex items-center space-x-2 text-emerald-600 font-bold text-sm border-b pb-2">
                <i class="fa-solid fa-circle-check"></i>
                <span>Thần Chú Ghi Nhớ Nhanh</span>
              </div>
              <ul class="text-xs sm:text-sm text-slate-700 space-y-2">
                <li>&bull; <strong>Dấu định luật I:</strong> Nhận thì DƯƠNG ($> 0$), Cho/Sinh thì ÂM ($< 0$).</li>
                <li>&bull; <strong>Nóng chảy / Hóa hơi:</strong> Nhiệt độ giữ NGUYÊN không đổi trong suốt quá trình!</li>
                <li>&bull; <strong>Hiệu suất $H$:</strong> Luôn lấy $Q_{\\text{ích}} = H \\times Q_{\\text{tp}}$ ($H \\le 100\\%$).</li>
                <li>&bull; <strong>Hao hụt khối lượng:</strong> $\\Delta m = \\frac{H \\cdot P \\cdot t}{L}$ (càng đun lâu, khối lượng bay hơi càng nhiều).</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    `;

    el.theoryModalContent.innerHTML = html;

    // Bind tab buttons
    const btnTypes = document.getElementById('theoryTabBtnTypes');
    const btnLessons = document.getElementById('theoryTabBtnLessons');
    const btnUnits = document.getElementById('theoryTabBtnUnits');
    const contentTypes = document.getElementById('theoryTabContentTypes');
    const contentLessons = document.getElementById('theoryTabContentLessons');
    const contentUnits = document.getElementById('theoryTabContentUnits');

    function switchTheoryTab(activeTab) {
      const tabs = [
        { btn: btnTypes, content: contentTypes, id: 'types' },
        { btn: btnLessons, content: contentLessons, id: 'lessons' },
        { btn: btnUnits, content: contentUnits, id: 'units' }
      ];
      tabs.forEach(t => {
        if (t.id === activeTab) {
          t.btn.className = 'theory-tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition cursor-pointer bg-blue-600 text-white shadow-sm';
          t.content.classList.remove('hidden');
          t.content.classList.add('block');
        } else {
          t.btn.className = 'theory-tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition cursor-pointer bg-slate-100 text-slate-600 hover:bg-slate-200';
          t.content.classList.remove('block');
          t.content.classList.add('hidden');
        }
      });
      // Render KaTeX for the switched tab
      if (window.renderMathInElement) {
        window.renderMathInElement(el.theoryModalContent, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '\\[', right: '\\]', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false }
          ],
          throwOnError: false
        });
      }
    }

    if (btnTypes) btnTypes.addEventListener('click', () => switchTheoryTab('types'));
    if (btnLessons) btnLessons.addEventListener('click', () => switchTheoryTab('lessons'));
    if (btnUnits) btnUnits.addEventListener('click', () => switchTheoryTab('units'));

    // Initial KaTeX render
    if (window.renderMathInElement) {
      window.renderMathInElement(el.theoryModalContent, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\[', right: '\\]', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false }
        ],
        throwOnError: false
      });
    }

    el.theoryModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function closeTheoryModal() {
    el.theoryModal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  // Check short answer approximation
  function checkShortAnswer(userVal, correctVal) {
    if (!userVal) return false;
    const cleanUser = userVal.toString().replace(/,/g, '.').replace(/[^0-9.-]/g, '');
    const cleanCorrect = correctVal.toString().replace(/,/g, '.').replace(/[^0-9.-]/g, '');
    if (cleanUser === cleanCorrect) return true;
    const numUser = parseFloat(cleanUser);
    const numCorrect = parseFloat(cleanCorrect);
    if (!isNaN(numUser) && !isNaN(numCorrect)) {
      return Math.abs(numUser - numCorrect) < 0.15;
    }
    return false;
  }

  // Mode Switcher UI
  function updateModeUI() {
    const isPractice = state.mode === 'practice';

    if (isPractice) {
      el.modePracticeBtn.className = 'inline-flex items-center px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition bg-blue-600 text-white shadow-sm';
      el.modeStudyBtn.className = 'inline-flex items-center px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition';
    } else {
      el.modeStudyBtn.className = 'inline-flex items-center px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition bg-blue-600 text-white shadow-sm';
      el.modePracticeBtn.className = 'inline-flex items-center px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition';
    }
  }

  // Bind Global UI Events
  function bindEvents() {
    // Mode toggles
    el.modePracticeBtn.addEventListener('click', () => {
      state.mode = 'practice';
      saveState();
      updateModeUI();
      renderQuestions();
      showToast('Chế độ Thi thử: Hãy bấm chọn đáp án. Làm sai sẽ tự động hiện lời giải!', 'info');
    });

    el.modeStudyBtn.addEventListener('click', () => {
      state.mode = 'study';
      saveState();
      updateModeUI();
      renderQuestions();
      showToast('Chế độ Đọc đáp án: Đã mở sẵn toàn bộ lời giải và đáp án.', 'info');
    });

    // Reset All Buttons (Header & Score Card)
    el.resetPracticeBtn.addEventListener('click', () => {
      resetAllPractice();
    });

    if (el.resetScoreCardBtn) {
      el.resetScoreCardBtn.addEventListener('click', () => {
        resetAllPractice();
      });
    }

    // Expand all solutions button
    let allExpanded = false;
    el.expandAllSolutionsBtn.addEventListener('click', () => {
      allExpanded = !allExpanded;
      const allQ = getFilteredQuestions(true);
      if (allExpanded) {
        allQ.forEach(q => state.revealedSolutions.add(q.id));
        el.expandAllSolutionsBtn.innerHTML = '<i class="fa-solid fa-angles-up mr-1"></i>Thu gọn hết lời giải';
      } else {
        state.revealedSolutions.clear();
        el.expandAllSolutionsBtn.innerHTML = '<i class="fa-solid fa-angles-down mr-1"></i>Mở hết lời giải';
      }
      saveState();
      renderQuestions();
    });

    // Type filter buttons
    el.typeFilterButtons.querySelectorAll('.type-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.currentType = btn.dataset.type;
        el.typeFilterButtons.querySelectorAll('.type-filter-btn').forEach(b => {
          b.className = 'type-filter-btn flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition';
        });
        btn.className = 'type-filter-btn flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200 transition';
        renderQuestions();
        updateLiveScoreCard();
      });
    });

    // Has image checkbox
    el.filterHasImage.addEventListener('change', () => {
      state.filterHasImage = el.filterHasImage.checked;
      renderQuestions();
      updateFilterCounts();
      updateLiveScoreCard();
    });

    // Bookmarked checkbox
    el.filterBookmarked.addEventListener('change', () => {
      state.filterBookmarked = el.filterBookmarked.checked;
      renderQuestions();
      updateFilterCounts();
      updateLiveScoreCard();
    });

    // Search input
    let searchTimeout = null;
    el.searchInput.addEventListener('input', () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        state.searchQuery = el.searchInput.value;
        renderQuestions();
        updateFilterCounts();
        updateLiveScoreCard();
      }, 250);
    });

    // Clear filters button
    el.clearFiltersBtn.addEventListener('click', () => {
      state.currentLesson = 0;
      state.currentType = 'all';
      state.filterHasImage = false;
      state.filterBookmarked = false;
      state.searchQuery = '';
      el.filterHasImage.checked = false;
      el.filterBookmarked.checked = false;
      el.searchInput.value = '';
      renderLessonButtons();
      renderQuestions();
      updateFilterCounts();
      updateLiveScoreCard();
    });

    // Modals
    el.openTheoryBtn.addEventListener('click', openTheoryModal);
    el.closeTheoryModalBtn.addEventListener('click', closeTheoryModal);
    el.theoryModal.addEventListener('click', (e) => {
      if (e.target === el.theoryModal) closeTheoryModal();
    });

    el.closeImageModalBtn.addEventListener('click', closeImageModal);
    el.imageModal.addEventListener('click', (e) => {
      if (e.target === el.imageModal) closeImageModal();
    });

    // ESC key close modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeImageModal();
        closeTheoryModal();
      }
    });
  }

  // Start app on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
