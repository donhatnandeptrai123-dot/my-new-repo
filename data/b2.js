const B2_DATA = {
  "id": 2,
  "code": "B2",
  "title": "Chủ đề 2: Thang nhiệt độ",
  "pages": [
    21,
    22,
    23,
    24,
    25,
    26,
    27
  ],
  "totalQuestions": 56,
  "questions": [
    {
      "id": "b2_tl_01",
      "lessonId": 2,
      "type": "essay",
      "page": 21,
      "pageImage": "images/pages/page_21.jpg",
      "questionNumber": "Câu 1",
      "section": "I. TỰ LUẬN",
      "question": "Cho T(K) = t(°C) + 273. Chuyển đổi nhiệt độ:\na) Từ thang Celsius sang thang Kelvin: 270°C; -270°C; 500°C.\nb) Từ thang Kelvin sang thang Celsius: 0 K; 500 K; 1000 K.",
      "correctAnswer": "a) 543 K; 3 K; 773 K.\nb) -273°C; 227°C; 727°C.",
      "image": null,
      "explanation": "Áp dụng công thức chuyển đổi:\n- Từ °C sang K: T(K) = t(°C) + 273\n  + Với t = 270°C => T = 270 + 273 = 543 K\n  + Với t = -270°C => T = -270 + 273 = 3 K\n  + Với t = 500°C => T = 500 + 273 = 773 K\n- Từ K sang °C: t(°C) = T(K) - 273\n  + Với T = 0 K => t = 0 - 273 = -273°C\n  + Với T = 500 K => t = 500 - 273 = 227°C\n  + Với T = 1000 K => t = 1000 - 273 = 727°C.",
      "solution": "Áp dụng công thức chuyển đổi:\n- Từ °C sang K: T(K) = t(°C) + 273\n  + Với t = 270°C => T = 270 + 273 = 543 K\n  + Với t = -270°C => T = -270 + 273 = 3 K\n  + Với t = 500°C => T = 500 + 273 = 773 K\n- Từ K sang °C: t(°C) = T(K) - 273\n  + Với T = 0 K => t = 0 - 273 = -273°C\n  + Với T = 500 K => t = 500 - 273 = 227°C\n  + Với T = 1000 K => t = 1000 - 273 = 727°C.",
      "notes": "Công thức chuyển đổi cơ bản giữa thang Celsius và Kelvin: T = t + 273."
    },
    {
      "id": "b2_tl_02",
      "lessonId": 2,
      "type": "essay",
      "page": 21,
      "pageImage": "images/pages/page_21.jpg",
      "questionNumber": "Câu 2",
      "section": "I. TỰ LUẬN",
      "question": "Thế giới từng ghi nhận sự thay đổi nhiệt độ rất lớn diễn ra ở South Dakota vào ngày 22/01/1943. Lúc 7h30 sáng, nhiệt độ ngoài trời là -20°C. Hai phút sau, nhiệt độ ngoài trời tăng lên đến 7,2°C. Xác định độ tăng nhiệt độ trung bình trong 2 phút đó theo đơn vị Kelvin/giây.",
      "correctAnswer": "0,227 K/s",
      "image": null,
      "explanation": "1. Độ biến thiên nhiệt độ trong thang Celsius:\n   Δt = t2 - t1 = 7,2 - (-20) = 27,2°C.\n2. Vì một độ chia trong thang Celsius bằng một độ chia trong thang Kelvin (ΔT = Δt) nên:\n   ΔT = 27,2 K.\n3. Thời gian biến thiên:\n   Δτ = 2 phút = 120 giây.\n4. Tốc độ tăng nhiệt độ trung bình mỗi giây:\n   v = ΔT / Δτ = 27,2 / 120 ≈ 0,2267 K/s ≈ 0,227 K/s.",
      "solution": "1. Độ biến thiên nhiệt độ trong thang Celsius:\n   Δt = t2 - t1 = 7,2 - (-20) = 27,2°C.\n2. Vì một độ chia trong thang Celsius bằng một độ chia trong thang Kelvin (ΔT = Δt) nên:\n   ΔT = 27,2 K.\n3. Thời gian biến thiên:\n   Δτ = 2 phút = 120 giây.\n4. Tốc độ tăng nhiệt độ trung bình mỗi giây:\n   v = ΔT / Δτ = 27,2 / 120 ≈ 0,2267 K/s ≈ 0,227 K/s.",
      "notes": "Lưu ý quan trọng: Độ biến thiên nhiệt độ ΔT (Kelvin) luôn bằng độ biến thiên nhiệt độ Δt (°C)."
    },
    {
      "id": "b2_tl_03",
      "lessonId": 2,
      "type": "essay",
      "page": 21,
      "pageImage": "images/pages/page_21.jpg",
      "questionNumber": "Câu 3",
      "section": "I. TỰ LUẬN",
      "question": "Gọi t°C là nhiệt độ trong thang nhiệt độ Celsius, T°F là nhiệt độ trong thang nhiệt độ Fahrenheit. Biểu thức liên hệ giữa chúng là T°F = 32 + 1,8.t(°C). Đo nhiệt độ cơ thể người bình thường là 37°C. Trong thang nhiệt độ Fahrenheit, nhiệt độ của cơ thể người theo thang đo Fahrenheit là bao nhiêu?",
      "correctAnswer": "98,6°F",
      "image": null,
      "explanation": "Thay t = 37°C vào biểu thức liên hệ giữa Fahrenheit và Celsius:\nT(°F) = 32 + 1,8 . 37 = 32 + 66,6 = 98,6°F.",
      "solution": "Thay t = 37°C vào biểu thức liên hệ giữa Fahrenheit và Celsius:\nT(°F) = 32 + 1,8 . 37 = 32 + 66,6 = 98,6°F.",
      "notes": "Thân nhiệt bình thường 37°C tương đương 98,6°F."
    },
    {
      "id": "b2_tl_04",
      "lessonId": 2,
      "type": "essay",
      "page": 21,
      "pageImage": "images/pages/page_21.jpg",
      "questionNumber": "Câu 4",
      "section": "I. TỰ LUẬN",
      "question": "Gọi t°C là nhiệt độ trong thang nhiệt độ Celsius, T°F là nhiệt độ trong thang nhiệt độ Fahrenheit. Biểu thức liên hệ giữa chúng là T°F = 32 + 1,8.t(°C). Trong thang nhiệt độ Fahrenheit, nhiệt độ của nước đang sôi là:",
      "correctAnswer": "212°F",
      "image": null,
      "explanation": "Nhiệt độ của nước đang sôi ở điều kiện tiêu chuẩn là t = 100°C.\nThay vào công thức:\nT(°F) = 32 + 1,8 . 100 = 32 + 180 = 212°F.",
      "solution": "Nhiệt độ của nước đang sôi ở điều kiện tiêu chuẩn là t = 100°C.\nThay vào công thức:\nT(°F) = 32 + 1,8 . 100 = 32 + 180 = 212°F.",
      "notes": "Hai mốc chuẩn của thang Fahrenheit: nước đá tan là 32°F, nước sôi là 212°F (cách nhau 180°F ứng với 100°C)."
    },
    {
      "id": "b2_tl_05",
      "lessonId": 2,
      "type": "essay",
      "page": 21,
      "pageImage": "images/pages/page_21.jpg",
      "questionNumber": "Câu 5",
      "section": "I. TỰ LUẬN",
      "question": "Để thuận tiện trong hoạt động kỹ thuật. Một xưởng cơ khí dùng một thang nhiệt độ riêng gọi là thang nhiệt độ Z có đơn vị °Z. Trong đó nhiệt độ của nước đang tan chảy ở áp suất tiêu chuẩn là -5°Z. Nhiệt độ sôi của nước là 105°Z.\na) Thiết lập biểu thức chuyển đổi từ thang nhiệt độ Celsius sang thang nhiệt độ Z.\nb) Nếu nhiệt độ trong thang nhiệt độ Z có giá trị 61°Z thì nhiệt độ thang nhiệt °C là bao nhiêu?\nc) Nhiệt độ trên than °C là bao nhiêu để chỉ số 2 thang nhiệt độ bằng nhau?",
      "correctAnswer": "a) t°Z = 1,1.t°C - 5\nb) 60°C\nc) 50°C",
      "image": null,
      "explanation": "a) Thiết lập hệ thức dạng bậc nhất: t(°Z) = a.t(°C) + b\n   - Khi t(°C) = 0°C (nước đá tan) => t(°Z) = -5°Z => b = -5\n   - Khi t(°C) = 100°C (nước sôi) => t(°Z) = 105°Z => 105 = a . 100 - 5 => 100a = 110 => a = 1,1\n   Vậy: t(°Z) = 1,1.t(°C) - 5\nb) Khi t(°Z) = 61°Z:\n   61 = 1,1.t(°C) - 5 => 1,1.t(°C) = 66 => t(°C) = 60°C\nc) Để hai thang chỉ cùng một giá trị số (t(°Z) = t(°C) = x):\n   x = 1,1x - 5 => 0,1x = 5 => x = 50°C.",
      "solution": "a) Thiết lập hệ thức dạng bậc nhất: t(°Z) = a.t(°C) + b\n   - Khi t(°C) = 0°C (nước đá tan) => t(°Z) = -5°Z => b = -5\n   - Khi t(°C) = 100°C (nước sôi) => t(°Z) = 105°Z => 105 = a . 100 - 5 => 100a = 110 => a = 1,1\n   Vậy: t(°Z) = 1,1.t(°C) - 5\nb) Khi t(°Z) = 61°Z:\n   61 = 1,1.t(°C) - 5 => 1,1.t(°C) = 66 => t(°C) = 60°C\nc) Để hai thang chỉ cùng một giá trị số (t(°Z) = t(°C) = x):\n   x = 1,1x - 5 => 0,1x = 5 => x = 50°C.",
      "notes": "Phương pháp giải bài toán thang nhiệt độ tự tạo: luôn xây dựng hàm bậc nhất y = ax + b dựa vào 2 điểm mốc (băng điểm và nhiệt độ sôi)."
    },
    {
      "id": "b2_tl_06",
      "lessonId": 2,
      "type": "essay",
      "page": 21,
      "pageImage": "images/pages/page_21.jpg",
      "questionNumber": "Câu 6",
      "section": "I. TỰ LUẬN",
      "question": "Một bản ghi chú khoa học cổ mô tả thang nhiệt độ gọi là Z. Trong đó băng điểm của nước là -15°Z và điểm sôi của nước là 65°Z.\na) Thiết lập biểu thức chuyển đổi từ thang nhiệt độ Celsius sang thang nhiệt độ Z.\nb) Nếu nhiệt độ trong thang nhiệt độ Z có giá trị 48°Z thì nhiệt độ thang nhiệt °C là bao nhiêu?\nc) Nhiệt độ trên than °C là bao nhiêu để chỉ số 2 thang nhiệt độ bằng nhau?",
      "correctAnswer": "a) t°Z = 0,8.t°C - 15\nb) 78,75°C\nc) -75°C",
      "image": null,
      "explanation": "a) Đặt t(°Z) = a.t(°C) + b\n   - Tại 0°C: t(°Z) = -15 => b = -15\n   - Tại 100°C: t(°Z) = 65 => 65 = 100a - 15 => 100a = 80 => a = 0,8\n   Biểu thức: t(°Z) = 0,8.t(°C) - 15\nb) Khi t(°Z) = 48°Z:\n   48 = 0,8.t(°C) - 15 => 0,8.t(°C) = 63 => t(°C) = 63 / 0,8 = 78,75°C\nc) Cho t(°Z) = t(°C) = x:\n   x = 0,8x - 15 => 0,2x = -15 => x = -75°C.",
      "solution": "a) Đặt t(°Z) = a.t(°C) + b\n   - Tại 0°C: t(°Z) = -15 => b = -15\n   - Tại 100°C: t(°Z) = 65 => 65 = 100a - 15 => 100a = 80 => a = 0,8\n   Biểu thức: t(°Z) = 0,8.t(°C) - 15\nb) Khi t(°Z) = 48°Z:\n   48 = 0,8.t(°C) - 15 => 0,8.t(°C) = 63 => t(°C) = 63 / 0,8 = 78,75°C\nc) Cho t(°Z) = t(°C) = x:\n   x = 0,8x - 15 => 0,2x = -15 => x = -75°C.",
      "notes": "Độ dốc a = (65 - (-15))/100 = 80/100 = 0,8."
    },
    {
      "id": "b2_tl_07",
      "lessonId": 2,
      "type": "essay",
      "page": 21,
      "pageImage": "images/pages/page_21.jpg",
      "questionNumber": "Câu 7",
      "section": "I. TỰ LUẬN",
      "question": "Giả sử một bạn học sinh tạo ra một nhiệt kế sử dụng một thang nhiệt độ mới cho riêng mình, gọi là nhiệt độ Z, có đơn vị là °Z. Trong đó nhiệt độ của nước đá đang tan ở 1atm là 10°Z và nhiệt độ nước đang sôi ở 1 atm là 150°Z.\na) Thiết lập biểu thức chuyển đổi nhiệt độ từ thang nhiệt độ Celsius sang nhiệt độ Z.\nb) Nếu dùng nhiệt kế mới này đo nhiệt độ một vật thì thấy giá trị 80°Z, nhiệt độ của vật trong thang nhiệt độ Celsius là bao nhiêu?\nc) Nhiệt độ của vật bằng bao nhiêu (theo thang nhiệt độ Celsius) để số chỉ trên hai thang nhiệt độ bằng nhau?",
      "correctAnswer": "a) t°Z = 1,4.t°C + 10\nb) 50°C\nc) -25°C",
      "image": null,
      "explanation": "a) Đặt t(°Z) = a.t(°C) + b\n   - Tại 0°C: t(°Z) = 10 => b = 10\n   - Tại 100°C: t(°Z) = 150 => 150 = 100a + 10 => 100a = 140 => a = 1,4\n   Biểu thức: t(°Z) = 1,4.t(°C) + 10\nb) Khi t(°Z) = 80°Z:\n   80 = 1,4.t(°C) + 10 => 1,4.t(°C) = 70 => t(°C) = 70 / 1,4 = 50°C\nc) Cho t(°Z) = t(°C) = x:\n   x = 1,4x + 10 => -0,4x = 10 => x = -25°C.",
      "solution": "a) Đặt t(°Z) = a.t(°C) + b\n   - Tại 0°C: t(°Z) = 10 => b = 10\n   - Tại 100°C: t(°Z) = 150 => 150 = 100a + 10 => 100a = 140 => a = 1,4\n   Biểu thức: t(°Z) = 1,4.t(°C) + 10\nb) Khi t(°Z) = 80°Z:\n   80 = 1,4.t(°C) + 10 => 1,4.t(°C) = 70 => t(°C) = 70 / 1,4 = 50°C\nc) Cho t(°Z) = t(°C) = x:\n   x = 1,4x + 10 => -0,4x = 10 => x = -25°C.",
      "notes": "Tương tự câu 5 và 6, củng cố kỹ năng lập hàm bậc nhất."
    },
    {
      "id": "b2_tl_08",
      "lessonId": 2,
      "type": "essay",
      "page": 21,
      "pageImage": "images/pages/page_21.jpg",
      "questionNumber": "Câu 8",
      "section": "I. TỰ LUẬN",
      "question": "Chiều dài của phần thuỷ ngân trong nhiệt kế là 2 cm ở 0°C và 22 cm ở 100°C. Chiều dài của phần thuỷ ngân sẽ là bao nhiêu cm nếu nhiệt độ là 40°C?",
      "correctAnswer": "10 cm",
      "image": "images/crops/b2_tl_c8_nhiet_ke.jpg",
      "explanation": "1. Giả sử chiều dài cột thủy ngân tỉ lệ bậc nhất với nhiệt độ: l = l0 + k.t\n   - Ở t = 0°C: l0 = 2 cm\n   - Ở t = 100°C: l = 22 cm => 22 = 2 + 100k => 100k = 20 => k = 0,2 cm/°C\n   Hệ thức chiều dài theo nhiệt độ: l = 2 + 0,2.t (cm)\n2. Tại nhiệt độ t = 40°C:\n   l = 2 + 0,2 . 40 = 2 + 8 = 10 cm.",
      "solution": "1. Giả sử chiều dài cột thủy ngân tỉ lệ bậc nhất với nhiệt độ: l = l0 + k.t\n   - Ở t = 0°C: l0 = 2 cm\n   - Ở t = 100°C: l = 22 cm => 22 = 2 + 100k => 100k = 20 => k = 0,2 cm/°C\n   Hệ thức chiều dài theo nhiệt độ: l = 2 + 0,2.t (cm)\n2. Tại nhiệt độ t = 40°C:\n   l = 2 + 0,2 . 40 = 2 + 8 = 10 cm.",
      "notes": "Nguyên lý giãn nở tuyến tính theo nhiệt độ của cột chất lỏng trong nhiệt kế."
    },
    {
      "id": "b2_tn_01",
      "lessonId": 2,
      "type": "single_choice",
      "page": 22,
      "pageImage": "images/pages/page_22.jpg",
      "questionNumber": "Câu 1",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Dụng cụ nào sau đây dùng để đo nhiệt độ?",
      "options": [
        "A. Cân đồng hồ.",
        "B. Nhiệt kế.",
        "C. Vôn kế.",
        "D. Tốc kế."
      ],
      "correctAnswer": "B",
      "image": null,
      "explanation": "Nhiệt kế là dụng cụ dùng để đo nhiệt độ của vật.",
      "notes": "Cân đo khối lượng, vôn kế đo hiệu điện thế, tốc kế đo vận tốc."
    },
    {
      "id": "b2_tn_02",
      "lessonId": 2,
      "type": "single_choice",
      "page": 22,
      "pageImage": "images/pages/page_22.jpg",
      "questionNumber": "Câu 2",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "'Độ không tuyệt đối' là nhiệt độ ứng với",
      "options": [
        "A. 0 K.",
        "B. 0 °C.",
        "C. 273 °C.",
        "D. 273 K."
      ],
      "correctAnswer": "A",
      "image": null,
      "explanation": "Độ không tuyệt đối (nhiệt độ thấp nhất theo lý thuyết) ứng với 0 Kelvin (0 K), tương đương -273,15°C.",
      "notes": "Ở 0 K, chuyển động nhiệt của phân tử triệt tiêu."
    },
    {
      "id": "b2_tn_03",
      "lessonId": 2,
      "type": "single_choice",
      "page": 22,
      "pageImage": "images/pages/page_22.jpg",
      "questionNumber": "Câu 3",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Nhiệt độ vào một ngày mùa hè ở Hà Nội là 35 °C. Nhiệt độ đó tương ứng với bao nhiêu độ F?",
      "options": [
        "A. 59 °F.",
        "B. 67 °F.",
        "C. 95 °F.",
        "D. 76 °F."
      ],
      "correctAnswer": "C",
      "image": null,
      "explanation": "T(°F) = 32 + 1,8 . 35 = 32 + 63 = 95°F.",
      "notes": "Công thức chuyển đổi: T(°F) = 32 + 1,8.t(°C)."
    },
    {
      "id": "b2_tn_04",
      "lessonId": 2,
      "type": "single_choice",
      "page": 22,
      "pageImage": "images/pages/page_22.jpg",
      "questionNumber": "Câu 4",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Giá trị nhiệt độ đo được theo thang nhiệt độ Kelvin là 293 K. Hỏi theo thang nhiệt độ Fahrenheit, nhiệt độ đó có giá trị là bao nhiêu?",
      "options": [
        "A. 20 °F.",
        "B. 100 °F.",
        "C. 68 °F.",
        "D. 261 °F."
      ],
      "correctAnswer": "C",
      "image": null,
      "explanation": "1. Đổi sang Celsius: t(°C) = 293 - 273 = 20°C.\n2. Đổi sang Fahrenheit: T(°F) = 32 + 1,8 . 20 = 32 + 36 = 68°F.",
      "notes": "Có thể đổi trung gian qua °C để tính nhanh."
    },
    {
      "id": "b2_tn_05",
      "lessonId": 2,
      "type": "single_choice",
      "page": 22,
      "pageImage": "images/pages/page_22.jpg",
      "questionNumber": "Câu 5",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "104 °F ứng với bao nhiêu K?",
      "options": [
        "A. 313 K.",
        "B. 298 K.",
        "C. 328 K.",
        "D. 260 °C."
      ],
      "correctAnswer": "A",
      "image": null,
      "explanation": "1. Đổi sang °C: t = (104 - 32) / 1,8 = 72 / 1,8 = 40°C.\n2. Đổi sang K: T = 40 + 273 = 313 K.",
      "notes": "Đơn vị K không có dấu độ (°)."
    },
    {
      "id": "b2_tn_06",
      "lessonId": 2,
      "type": "single_choice",
      "page": 22,
      "pageImage": "images/pages/page_22.jpg",
      "questionNumber": "Câu 6",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Ở nhiệt độ nào thì số đọc trên thang nhiệt độ Fa-ren-hai gấp đôi số đọc trên thang nhiệt độ Xen-xi-út?",
      "options": [
        "A. 160°C.",
        "B. 100 °C.",
        "C. 0 °C.",
        "D. 293 K."
      ],
      "correctAnswer": "A",
      "image": null,
      "explanation": "Theo đề bài: T(°F) = 2.t(°C).\nMà T(°F) = 32 + 1,8.t(°C) => 2t = 32 + 1,8t => 0,2t = 32 => t = 160°C.",
      "notes": "Kiểm tra: Tại 160°C thì T(°F) = 32 + 1,8.160 = 320°F = 2 x 160."
    },
    {
      "id": "b2_tn_07",
      "lessonId": 2,
      "type": "single_choice",
      "page": 22,
      "pageImage": "images/pages/page_22.jpg",
      "questionNumber": "Câu 7",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Nội dung nào đúng khi nói nhiệt độ của một vật đang nóng so sánh với nhiệt độ của một vật đang lạnh?",
      "options": [
        "A. Vật lạnh có nhiệt độ cao hơn nhiệt độ của vật nóng.",
        "B. Vật lạnh có nhiệt độ thấp hơn nhiệt độ của vật nóng.",
        "C. Vật lạnh có nhiệt độ bằng nhiệt độ của vật nóng.",
        "D. Vật nóng có nhiệt độ thấp hơn nhiệt độ của vật nóng."
      ],
      "correctAnswer": "B",
      "image": null,
      "explanation": "Theo định nghĩa về trạng thái nhiệt: vật có nhiệt độ cao hơn là vật nóng hơn, vật lạnh hơn có nhiệt độ thấp hơn.",
      "notes": "Khái niệm cảm giác nhiệt và nhiệt độ."
    },
    {
      "id": "b2_tn_08",
      "lessonId": 2,
      "type": "single_choice",
      "page": 22,
      "pageImage": "images/pages/page_22.jpg",
      "questionNumber": "Câu 8",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Cho hai vật có nhiệt độ khác nhau tiếp xúc với nhau. Nhiệt được truyền từ vật nào sang vật nào?",
      "options": [
        "A. Từ vật có khối lượng lớn hơn sang vật có khối lượng nhỏ hơn.",
        "B. Từ vật có nhiệt độ cao hơn sang vật có nhiệt độ thấp hơn.",
        "C. Từ vật có nhiệt năng lớn hơn sang vật có nhiệt năng nhỏ hơn.",
        "D. Từ vật ở trên cao sang vật ở dưới thấp."
      ],
      "correctAnswer": "B",
      "image": null,
      "explanation": "Nhiệt năng luôn tự truyền tự phát từ vật có nhiệt độ cao hơn sang vật có nhiệt độ thấp hơn cho đến khi đạt cân bằng nhiệt.",
      "notes": "Khối lượng và nhiệt năng không quyết định chiều truyền nhiệt, chỉ có nhiệt độ quyết định."
    },
    {
      "id": "b2_tn_09",
      "lessonId": 2,
      "type": "single_choice",
      "page": 22,
      "pageImage": "images/pages/page_22.jpg",
      "questionNumber": "Câu 9",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Câu nào sau đây nói về điều kiện truyền nhiệt giữa hai vật là đúng?",
      "options": [
        "A. Nhiệt không thể truyền từ vật có nhiệt năng nhỏ sang vật có nhiệt năng lớn hơn.",
        "B. Nhiệt không thể truyền giữa hai vật có nhiệt năng bằng nhau.",
        "C. Nhiệt chỉ có thể truyền từ vật có nhiệt năng lớn hơn sang vật có nhiệt năng nhỏ hơn.",
        "D. Nhiệt không thể tự truyền được từ vật có nhiệt độ thấp sang vật có nhiệt độ cao hơn."
      ],
      "correctAnswer": "D",
      "image": null,
      "explanation": "Theo nguyên lý II nhiệt động lực học: Nhiệt không thể tự động truyền từ vật có nhiệt độ thấp hơn sang vật có nhiệt độ cao hơn mà không có tác động từ bên ngoài.",
      "notes": "Khẳng định chuẩn xác nguyên lý truyền nhiệt tự phát."
    },
    {
      "id": "b2_tn_10",
      "lessonId": 2,
      "type": "single_choice",
      "page": 22,
      "pageImage": "images/pages/page_22.jpg",
      "questionNumber": "Câu 10",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Nhỏ một giọt nước đang sôi vào một cốc nước ấm thì nhiệt năng của giọt nước và nước trong cốc thay đổi như thế nào?",
      "options": [
        "A. Nhiệt năng của giọt nước tăng, của nước trong cốc giảm.",
        "B. Nhiệt năng của giọt nước giảm, của nước trong cốc tăng.",
        "C. Nhiệt năng của giọt nước và nước trong cốc đều giảm.",
        "D. Nhiệt năng của giọt nước và nước trong cốc đều tăng."
      ],
      "correctAnswer": "B",
      "image": null,
      "explanation": "Giọt nước đang sôi (100°C) có nhiệt độ cao hơn nước ấm trong cốc, nên nhiệt truyền từ giọt nước sang nước trong cốc. Do đó giọt nước tỏa nhiệt nên nhiệt năng giảm, nước trong cốc nhận nhiệt nên nhiệt năng tăng.",
      "notes": "Nhiệt lượng truyền đi làm tăng nhiệt năng của vật nhận và giảm nhiệt năng của vật tỏa."
    },
    {
      "id": "b2_tn_11",
      "lessonId": 2,
      "type": "single_choice",
      "page": 22,
      "pageImage": "images/pages/page_22.jpg",
      "questionNumber": "Câu 11",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Tính chất vật lí nào sau đây không được ứng dụng để chế tạo nhiệt kế?",
      "options": [
        "A. Sự phụ thuộc nhiệt độ vào điện trở của vật dẫn.",
        "B. Sự phụ thuộc nhiệt độ vào chất lỏng trong ống thuỷ tinh.",
        "C. Sự phụ thuộc nhiệt độ vào bước sóng điện từ.",
        "D. Sự phụ thuộc nhiệt độ vào khối lượng riêng của vật."
      ],
      "correctAnswer": "D",
      "image": null,
      "explanation": "Người ta chế tạo nhiệt kế dựa trên: sự nở vì nhiệt của chất lỏng (nhiệt kế thủy ngân, rượu), sự phụ thuộc của điện trở theo nhiệt độ (nhiệt kế điện trở), bức xạ hồng ngoại (nhiệt kế hồng ngoại). Không dùng sự phụ thuộc nhiệt độ vào khối lượng riêng để đo trực tiếp.",
      "notes": "Các nguyên lý hoạt động của các loại nhiệt kế hiện đại."
    },
    {
      "id": "b2_tn_12",
      "lessonId": 2,
      "type": "single_choice",
      "page": 22,
      "pageImage": "images/pages/page_22.jpg",
      "questionNumber": "Câu 12",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Kết luận nào dưới đây là không đúng với thang nhiệt độ Xen-xi-út?",
      "options": [
        "A. Kí hiệu của nhiệt độ là t.",
        "B. Chọn mốc nhiệt độ nước đá đang tan ở áp suất 1 atm là 0°C.",
        "C. 1°C tương ứng với 273 K.",
        "D. Đơn vị đo nhiệt độ là °C."
      ],
      "correctAnswer": "C",
      "image": null,
      "explanation": "Phát biểu C không đúng vì 1°C không tương ứng với 273 K (0°C mới tương ứng xấp xỉ 273 K, còn 1°C ứng với 274 K). Về độ lớn khoảng chia thì 1 khoảng chia 1°C bằng 1 khoảng chia 1 K (Δt = 1°C tương ứng ΔT = 1 K).",
      "notes": "Phân biệt giữa giá trị nhiệt độ tại một điểm và độ biến thiên nhiệt độ."
    },
    {
      "id": "b2_tn_13",
      "lessonId": 2,
      "type": "single_choice",
      "page": 22,
      "pageImage": "images/pages/page_22.jpg",
      "questionNumber": "Câu 13",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Khi nhiệt độ tuyệt đối tăng thêm 6K thì",
      "options": [
        "A. Nhiệt độ Xen-xi-út tăng thêm hơn 6°C.",
        "B. Nhiệt độ Xen-xi-út tăng thêm 279°C.",
        "C. Nhiệt độ Xen-xi-út tăng thêm 6°C.",
        "D. Nhiệt độ Xen-xi-út tăng thêm 267°C."
      ],
      "correctAnswer": "C",
      "image": null,
      "explanation": "Vì độ lớn của 1 độ Kelvin bằng đúng 1 độ Celsius nên khi nhiệt độ tuyệt đối tăng thêm bao nhiêu Kelvin thì nhiệt độ Celsius cũng tăng thêm bấy nhiêu độ Celsius: Δt = ΔT = 6°C.",
      "notes": "Quy tắc bất biến: ΔT(K) = Δt(°C)."
    },
    {
      "id": "b2_tn_14",
      "lessonId": 2,
      "type": "single_choice",
      "page": 23,
      "pageImage": "images/pages/page_23.jpg",
      "questionNumber": "Câu 14",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Nhiệt độ không tuyệt đối là nhiệt độ tại đó",
      "options": [
        "A. nước đông đặc thành đá.",
        "B. tất cả các chất khí hóa lỏng.",
        "C. chuyển động nhiệt phân tử hầu như dừng lại.",
        "D. tất cả các chất khí hóa rắn."
      ],
      "correctAnswer": "C",
      "image": null,
      "explanation": "Độ không tuyệt đối (0 K) là nhiệt độ lý thuyết mà tại đó động năng chuyển động nhiệt của các phân tử đạt cực tiểu (hầu như ngừng hẳn).",
      "notes": "Không thể làm lạnh một vật xuống dưới 0 K."
    },
    {
      "id": "b2_tn_15",
      "lessonId": 2,
      "type": "single_choice",
      "page": 23,
      "pageImage": "images/pages/page_23.jpg",
      "questionNumber": "Câu 15",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Liên hệ giữa nhiệt độ theo thang Ken-vin và nhiệt độ theo thang Xen-xi-út (khi làm tròn số) là",
      "options": [
        "A. T(K) = t(°C) + 273.",
        "B. T(K) = t(°C) - 273.",
        "C. T(K) = t(°C) / 273.",
        "D. T(K) = 273.t(°C)."
      ],
      "correctAnswer": "A",
      "image": null,
      "explanation": "Công thức liên hệ chuẩn: T(K) = t(°C) + 273,15, khi làm tròn số là T(K) = t(°C) + 273.",
      "notes": "Công thức cơ bản SGK Vật Lí 12."
    },
    {
      "id": "b2_tn_16",
      "lessonId": 2,
      "type": "single_choice",
      "page": 23,
      "pageImage": "images/pages/page_23.jpg",
      "questionNumber": "Câu 16",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Cách xác định nhiệt độ trong thang nhiệt độ Celsius là?",
      "options": [
        "A. Lấy nhiệt độ của nước khi đóng băng là (10°C) và nhiệt độ sôi của nước (100°C) làm chuẩn.",
        "B. Lấy nhiệt độ của nước khi đóng băng là (10 °C) và nhiệt độ sôi của nước (0°C) làm chuẩn.",
        "C. Lấy nhiệt độ của nước khi đóng băng là (0°C) và nhiệt độ sôi của nước (100°C) làm chuẩn.",
        "D. Lấy nhiệt độ của nước khi đóng băng là (100 °C) và nhiệt độ sôi của nước (10°C) làm chuẩn."
      ],
      "correctAnswer": "C",
      "image": null,
      "explanation": "Thang đo Celsius lấy mốc 0°C là nhiệt độ nóng chảy của nước đá tinh khiết và 100°C là nhiệt độ sôi của nước tinh khiết ở áp suất tiêu chuẩn 1 atm.",
      "notes": "Khoảng cách giữa 2 mốc chuẩn được chia thành 100 phần bằng nhau."
    },
    {
      "id": "b2_tn_17",
      "lessonId": 2,
      "type": "single_choice",
      "page": 23,
      "pageImage": "images/pages/page_23.jpg",
      "questionNumber": "Câu 17",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Theo thang nhiệt độ Celsius, từ nhiệt độ đông đặc đến nhiệt độ sôi của nước được chia thành",
      "options": [
        "A. 100 phần bằng nhau, mỗi phần ứng với 1°C.",
        "B. 100 phần bằng nhau, mỗi phần ứng với 1 K.",
        "C. 100 phần bằng nhau, mỗi phần ứng với 1°F.",
        "D. 10 phần bằng nhau, mỗi phần ứng với 1°C."
      ],
      "correctAnswer": "A",
      "image": null,
      "explanation": "Từ 0°C đến 100°C được chia làm 100 phần bằng nhau, mỗi phần ứng với 1 độ Celsius (1°C).",
      "notes": "Định nghĩa thang đo nhiệt độ bách phân."
    },
    {
      "id": "b2_tn_18",
      "lessonId": 2,
      "type": "single_choice",
      "page": 23,
      "pageImage": "images/pages/page_23.jpg",
      "questionNumber": "Câu 18",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Đơn vị đo nhiệt độ thường dùng ở Việt Nam là",
      "options": [
        "A. Độ Kelvin (kí hiệu K).",
        "B. Độ Celsius (kí hiệu °C).",
        "C. Độ Fahrenheit (kí hiệu °F).",
        "D. Độ Fahrenheit và độ Celsius."
      ],
      "correctAnswer": "B",
      "image": null,
      "explanation": "Ở Việt Nam trong đời sống hàng ngày và dự báo thời tiết, đơn vị đo nhiệt độ thông dụng là độ Celsius (°C).",
      "notes": "Trong nghiên cứu khoa học hệ SI dùng Kelvin (K)."
    },
    {
      "id": "b2_tn_19",
      "lessonId": 2,
      "type": "single_choice",
      "page": 23,
      "pageImage": "images/pages/page_23.jpg",
      "questionNumber": "Câu 19",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Điểm đóng băng và sôi của nước theo thang Kelvin là",
      "options": [
        "A. 0 K và 100 K.",
        "B. 273 K và 373 K.",
        "C. 73 K và 3 K.",
        "D. 32K và 212 K."
      ],
      "correctAnswer": "B",
      "image": null,
      "explanation": "Nước đá tan ở 0°C tương ứng 273 K; nước sôi ở 100°C tương ứng 373 K.",
      "notes": "32°F và 212°F là trong thang Fahrenheit."
    },
    {
      "id": "b2_tn_20",
      "lessonId": 2,
      "type": "single_choice",
      "page": 23,
      "pageImage": "images/pages/page_23.jpg",
      "questionNumber": "Câu 20",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Nêu khái niệm nhiệt độ không tuyệt đối?",
      "options": [
        "A. Nhiệt độ tại đó chuyển động nhiệt phân tử hầu như dừng lại.",
        "B. Nhiệt độ tại đó nước đông đặc thành đá.",
        "C. Nhiệt độ tại đó tất cả các chất khí hóa rắn.",
        "D. Nhiệt độ tại đó tất cả các chất khí hóa lỏng."
      ],
      "correctAnswer": "A",
      "image": null,
      "explanation": "Nhiệt độ không tuyệt đối là mốc nhiệt độ thấp nhất mà vật chất có thể đạt tới, tại đó toàn bộ chuyển động nhiệt của các hạt cấu tạo phân tử triệt tiêu.",
      "notes": "Tương ứng 0 K trên thang Kelvin."
    },
    {
      "id": "b2_tn_21",
      "lessonId": 2,
      "type": "single_choice",
      "page": 23,
      "pageImage": "images/pages/page_23.jpg",
      "questionNumber": "Câu 21",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Nhiệt kế là thiết bị dùng để đo?",
      "options": [
        "A. Chiều dài.",
        "B. Thể tích vật rắn.",
        "C. Nhiệt độ.",
        "D. Diện tích."
      ],
      "correctAnswer": "C",
      "image": null,
      "explanation": "Nhiệt kế là thiết bị chuyên dụng để đo nhiệt độ.",
      "notes": "Nhiệt kế = nhiệt + kế (đo)."
    },
    {
      "id": "b2_tn_22",
      "lessonId": 2,
      "type": "single_choice",
      "page": 23,
      "pageImage": "images/pages/page_23.jpg",
      "questionNumber": "Câu 22",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Nhiệt kế chất lỏng được chế tạo dựa trên nguyên tắc nào?",
      "options": [
        "A. Sự nở vì nhiệt của chất lỏng.",
        "B. Sự nở ra của chất lỏng khi nhiệt độ giảm.",
        "C. Sự co lại của chất lỏng khi nhiệt độ tăng.",
        "D. Sự nở của chất lỏng không phụ thuộc vào nhiệt độ."
      ],
      "correctAnswer": "A",
      "image": null,
      "explanation": "Nhiệt kế chất lỏng (thủy ngân, rượu, dầu) hoạt động dựa trên hiện tượng giãn nở vì nhiệt của chất lỏng: khi nóng lên chất lỏng nở ra dâng cao trong ống mao dẫn, khi lạnh đi co lại tụt xuống.",
      "notes": "Nguyên lý cảm ứng nhiệt cơ học phổ biến."
    },
    {
      "id": "b2_tn_23",
      "lessonId": 2,
      "type": "single_choice",
      "page": 23,
      "pageImage": "images/pages/page_23.jpg",
      "questionNumber": "Câu 23",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Nhiệt kế nào sau đây hoạt động dựa trên hiện tượng giãn nở vì nhiệt của chất lỏng?",
      "options": [
        "A. Nhiệt kế thuỷ ngân.",
        "B. Nhiệt kế kim loại.",
        "C. Nhiệt kế hồng ngoại.",
        "D. Nhiệt kế điện tử."
      ],
      "correctAnswer": "A",
      "image": null,
      "explanation": "Nhiệt kế thủy ngân dùng chất lỏng thủy ngân giãn nở trong ống mao quản thủy tinh.",
      "notes": "Nhiệt kế kim loại dựa trên sự nở của thanh lưỡng kim, điện tử dựa trên điện trở/bán dẫn, hồng ngoại dựa trên bức xạ."
    },
    {
      "id": "b2_tn_24",
      "lessonId": 2,
      "type": "single_choice",
      "page": 23,
      "pageImage": "images/pages/page_23.jpg",
      "questionNumber": "Câu 24",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Trong các nhiệt kế sau đây, em hãy chọn nhiệt kế phù hợp để đo nhiệt độ của nước sôi?",
      "options": [
        "A. Nhiệt kế y tế có thang chia độ từ 35°C đến 42 °C.",
        "B. Nhiệt kế rượu có thang chia độ từ -30°C đến 60°C.",
        "C. Nhiệt kế thuỷ ngân có thang chia độ từ -10°C đến 110°C.",
        "D. Nhiệt kế hồng ngoại có thang chia độ từ 30°C đến 45°C."
      ],
      "correctAnswer": "C",
      "image": null,
      "explanation": "Nước sôi ở 100°C. Thang đo của nhiệt kế phải bao trùm được giá trị 100°C. Chỉ có nhiệt kế thủy ngân (-10°C đến 110°C) là thỏa mãn.",
      "notes": "Quy tắc chọn nhiệt kế: GHĐ phải lớn hơn nhiệt độ cần đo."
    },
    {
      "id": "b2_tn_25",
      "lessonId": 2,
      "type": "single_choice",
      "page": 23,
      "pageImage": "images/pages/page_23.jpg",
      "questionNumber": "Câu 25",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Không thể dùng nhiệt kế rượu để đo nhiệt độ của hơi nước đang sôi vì",
      "options": [
        "A. rượu sôi ở nhiệt độ cao hơn 100°C.",
        "B. rượu sôi ở nhiệt độ thấp hơn 100°C.",
        "C. rượu đông đặc ở nhiệt độ thấp hơn 100°C.",
        "D. rượu đông đặc ở nhiệt độ thấp hơn 0°C."
      ],
      "correctAnswer": "B",
      "image": null,
      "explanation": "Rượu sôi ở khoảng 78,3°C (thấp hơn 100°C). Nếu đưa nhiệt kế rượu vào hơi nước đang sôi 100°C, rượu trong bầu sẽ sôi và bốc hơi làm nổ vỡ nhiệt kế.",
      "notes": "Giới hạn đo trên của nhiệt kế rượu thường chỉ khoảng 50-60°C."
    },
    {
      "id": "b2_tn_26",
      "lessonId": 2,
      "type": "single_choice",
      "page": 23,
      "pageImage": "images/pages/page_23.jpg",
      "questionNumber": "Câu 26",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Chọn câu sai? Nhiệt kế thuỷ ngân dùng để đo",
      "options": [
        "A. nhiệt độ của lò luyện kim đang hoạt động.",
        "B. nhiệt độ của nước đá đang tan.",
        "C. nhiệt độ khí quyển.",
        "D. nhiệt độ cơ thể người."
      ],
      "correctAnswer": "A",
      "image": null,
      "explanation": "Lò luyện kim đang hoạt động có nhiệt độ rất cao (trên 1000°C), trong khi thủy ngân sôi ở 357°C. Dùng nhiệt kế thủy ngân sẽ bị vỡ nổ ngay lập tức. Để đo nhiệt độ lò luyện kim người ta dùng nhiệt kế quang học hoặc cặp nhiệt điện.",
      "notes": "Phạm vi đo của nhiệt kế thủy ngân từ -39°C đến 357°C."
    },
    {
      "id": "b2_tn_27",
      "lessonId": 2,
      "type": "single_choice",
      "page": 24,
      "pageImage": "images/pages/page_24.jpg",
      "questionNumber": "Câu 27",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Giới hạn đo (GHĐ) và độ chia nhỏ nhất (ĐCNN) của nhiệt kế vẽ ở hình bên là",
      "options": [
        "A. 50°C và 1°C.",
        "B. 50°C và 2°C.",
        "C. Từ 20°C đến 50°C và 1°C.",
        "D. Từ -20°C đến 50°C và 2°C."
      ],
      "correctAnswer": "D",
      "image": "images/crops/b2_c27_nhiet_ke.jpg",
      "explanation": "Quan sát thang đo nhiệt kế ở hình bên:\n- Vạch thấp nhất là -20°C, vạch cao nhất là 50°C => GHĐ: từ -20°C đến 50°C.\n- Giữa vạch 0 và 10 có 5 khoảng chia => mỗi khoảng chia tương ứng 10 / 5 = 2°C => ĐCNN = 2°C.",
      "notes": "Cách đọc GHĐ và ĐCNN trên thang đo nhiệt kế thẳng đứng."
    },
    {
      "id": "b2_tn_28",
      "lessonId": 2,
      "type": "single_choice",
      "page": 24,
      "pageImage": "images/pages/page_24.jpg",
      "questionNumber": "Câu 28",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Một thang đo X lấy điểm băng là -10X, lấy điểm sôi là 90X. Nhiệt độ của một vật đọc được trên nhiệt kế Celsius là 40°C thì trên nhiệt kế X có nhiệt độ bằng",
      "options": [
        "A. 20 X.",
        "B. 30 X.",
        "C. 40 X.",
        "D. 50 X."
      ],
      "correctAnswer": "B",
      "image": null,
      "explanation": "1. Khoảng nhiệt độ giữa điểm sôi và điểm băng:\n   - Thang Celsius: 100 - 0 = 100°C.\n   - Thang X: 90 - (-10) = 100 X.\n   => Mỗi 1°C ứng với 1 X (hệ số tỉ lệ a = 1).\n2. Biểu thức chuyển đổi: t_X = -10 + 1 . t_C = t_C - 10.\n3. Với t_C = 40°C => t_X = 40 - 10 = 30 X.",
      "notes": "Khi khoảng chia hai thang bằng nhau thì chỉ cần dịch chuyển gốc tọa độ."
    },
    {
      "id": "b2_tn_29",
      "lessonId": 2,
      "type": "single_choice",
      "page": 24,
      "pageImage": "images/pages/page_24.jpg",
      "questionNumber": "Câu 29",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Giả sử có một thang nhiệt độ kí hiệu là Z. Nhiệt độ sôi của nước theo thang này là 60Z, điểm băng của nước là -15Z. Nhiệt độ của vật theo thang Fahrenheit (Fa-ren-hai) là bao nhiêu nếu thang Z là -96Z?",
      "options": [
        "A. -62,4 °F.",
        "B. 162,4 °F.",
        "C. -162,4 °F.",
        "D. 62,4 °F."
      ],
      "correctAnswer": "C",
      "image": null,
      "explanation": "1. Trong thang Z: điểm băng -15Z, điểm sôi 60Z => khoảng biến thiên = 60 - (-15) = 75 Z.\n2. Trong thang Fahrenheit: điểm băng 32°F, điểm sôi 212°F => khoảng biến thiên = 212 - 32 = 180°F.\n3. Mỗi 1 Z tương ứng với: 180 / 75 = 2,4°F.\n4. Nhiệt độ trong thang Fahrenheit khi thang Z là -96Z:\n   T_F = 32 + 2,4 . [t_Z - (-15)] = 32 + 2,4 . (-96 + 15) = 32 + 2,4 . (-81) = 32 - 194,4 = -162,4°F.",
      "notes": "Công thức tổng quát giữa 2 thang bất kỳ: (T - T_băng) / (T_sôi - T_băng) = hằng số."
    },
    {
      "id": "b2_tn_30",
      "lessonId": 2,
      "type": "single_choice",
      "page": 24,
      "pageImage": "images/pages/page_24.jpg",
      "questionNumber": "Câu 30",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Hình vẽ nào bên dưới phù hợp với trường hợp nhiệt kế 1 được đặt vào một cốc đựng nước nóng còn nhiệt kế 2 được đặt vào một cốc đựng nước lạnh?",
      "options": [
        "A. Hình H1.",
        "B. Hình H2.",
        "C. Hình H3.",
        "D. Hình H4."
      ],
      "correctAnswer": "B",
      "image": "images/crops/b2_c30_thi_nghiem_coc.jpg",
      "explanation": "Nhiệt kế 1 nhúng vào nước nóng thì chất lỏng nở nhiệt dâng lên cao trong ống nhiệt kế. Nhiệt kế 2 nhúng vào nước lạnh thì chất lỏng co lại hạ xuống thấp. Quan sát 4 hình:\n- Ở hình H2: cột chất lỏng ở nhiệt kế 1 dâng cao rõ rệt, còn ở nhiệt kế 2 cột chất lỏng ở mức thấp. Phù hợp hoàn toàn với đề bài.",
      "notes": "Cảm thụ trực quan mức dâng cột chất lỏng theo nhiệt độ."
    },
    {
      "id": "b2_tn_31",
      "lessonId": 2,
      "type": "single_choice",
      "page": 24,
      "pageImage": "images/pages/page_24.jpg",
      "questionNumber": "Câu 31",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Cho các bước như sau:\n(1) Thực hiện phép đo nhiệt độ.\n(2) Ước lượng nhiệt độ của vật.\n(3) Hiệu chỉnh nhiệt kế.\n(4) Lựa chọn nhiệt kế phù hợp.\n(5) Đọc và ghi kết quả đo.\nCác bước đúng khi thực hiện đo nhiệt độ của một vật là",
      "options": [
        "A. (2), (4), (3), (1), (5).",
        "B. (1), (4), (2), (3), (5).",
        "C. (1), (2), (3), (4), (5).",
        "D. (3), (2), (4), (1), (5)."
      ],
      "correctAnswer": "A",
      "image": null,
      "explanation": "Quy trình đo nhiệt độ chuẩn xác trong thực hành vật lý:\nBước 1: Ước lượng nhiệt độ của vật (2).\nBước 2: Chọn nhiệt kế có GHĐ và ĐCNN phù hợp (4).\nBước 3: Hiệu chỉnh nhiệt kế về vạch số 0 / chuẩn hóa (3).\nBước 4: Thực hiện phép đo (1).\nBước 5: Đọc và ghi kết quả đo đúng quy cách (5).",
      "notes": "Thứ tự logic: Ước lượng -> Chọn dụng cụ -> Hiệu chỉnh -> Đo -> Đọc kết quả."
    },
    {
      "id": "b2_tn_32",
      "lessonId": 2,
      "type": "single_choice",
      "page": 24,
      "pageImage": "images/pages/page_24.jpg",
      "questionNumber": "Câu 32",
      "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      "question": "Trong phạm vi từ 0°C đến 600°C thì điện trở của một dây platin (bạch kim) phụ thuộc vào nhiệt độ theo hệ thức: R = 10(1 + 2t + 4t^2) (t đo bằng °C, R đo bằng Ω). Nếu điện trở của dây bạch kim bằng 4210 Ω thì nhiệt độ của dây bạch kim bằng",
      "options": [
        "A. 4210 K.",
        "B. 10°C.",
        "C. 610°C.",
        "D. 610 K."
      ],
      "correctAnswer": "B",
      "image": null,
      "explanation": "Thay R = 4210 Ω vào hệ thức:\n10(1 + 2t + 4t^2) = 4210\n<=> 4t^2 + 2t + 1 = 421\n<=> 4t^2 + 2t - 420 = 0\n<=> 2t^2 + t - 210 = 0\nGiải phương trình bậc hai:\nΔ = 1^2 - 4 . 2 . (-210) = 1 + 1680 = 1681 = 41^2\n=> t = (-1 + 41) / (2 . 2) = 40 / 4 = 10°C (nhận vì 0 <= t <= 600°C)\nNghiệm âm t = (-1 - 41) / 4 = -10,5°C loại vì ngoài khoảng xác định.",
      "notes": "Nguyên tắc nhiệt kế điện trở: chuyển đổi sự biến thiên điện trở sang giá trị nhiệt độ."
    },
    {
      "id": "b2_tf_01",
      "lessonId": 2,
      "type": "true_false",
      "page": 25,
      "pageImage": "images/pages/page_25.jpg",
      "questionNumber": "Câu 1",
      "section": "III. CÂU TRẮC NGHIỆM ĐÚNG SAI",
      "question": "Bảng sau đây ghi sự thay đổi nhiệt độ của không khí theo thời gian dựa trên số liệu của một trạm khí tượng ở Hà Nội ghi được vào ngày mùa đông:\n| Thời gian (giờ) | 1 | 4 | 7 | 10 | 13 | 16 | 19 | 22 |\n| Nhiệt độ (°C) | 13 | 13 | 13 | 18 | 18 | 20 | 17 | 12 |\nHọc sinh hãy trả lời đúng hoặc sai cho các ý a) b) c) d):",
      "items": [
        {
          "label": "a",
          "text": "Nhiệt độ lúc 4 giờ là 13°C.",
          "correct": true,
          "explanation": "Đúng. Cột 4 giờ hiển thị giá trị nhiệt độ là 13°C."
        },
        {
          "label": "b",
          "text": "Nhiệt độ thấp nhất trong ngày là vào lúc 1 giờ.",
          "correct": false,
          "explanation": "Sai. Nhiệt độ thấp nhất trong bảng là 12°C vào lúc 22 giờ, lúc 1 giờ là 13°C."
        },
        {
          "label": "c",
          "text": "Nhiệt độ cao nhất trong ngày là vào lúc 16 giờ.",
          "correct": true,
          "explanation": "Đúng. Giá trị nhiệt độ cao nhất trong bảng là 20°C vào lúc 16 giờ."
        },
        {
          "label": "d",
          "text": "Độ chênh lệch nhiệt độ trong ngày lớn nhất là 6°C.",
          "correct": false,
          "explanation": "Sai. Độ chênh lệch nhiệt độ lớn nhất trong ngày là: t_max - t_min = 20 - 12 = 8°C (chứ không phải 6°C)."
        }
      ],
      "image": null,
      "explanation": "Xem chi tiết lời giải thích cho từng phát biểu a, b, c, d.",
      "notes": "Kỹ năng đọc và phân tích bảng số liệu khí tượng thời gian - nhiệt độ."
    },
    {
      "id": "b2_tf_02",
      "lessonId": 2,
      "type": "true_false",
      "page": 25,
      "pageImage": "images/pages/page_25.jpg",
      "questionNumber": "Câu 2",
      "section": "III. CÂU TRẮC NGHIỆM ĐÚNG SAI",
      "question": "Bảng dưới đây ghi tên các loại nhiệt kế và nhiệt độ ghi trên thang đo của chúng:\n- Thuỷ ngân: Từ -10°C đến 110°C\n- Rượu: Từ -30°C đến 60°C\n- Kim loại: Từ 0°C đến 400°C\n- Y tế: Từ 34°C đến 42°C\nHọc sinh hãy trả lời đúng hoặc sai cho các ý a) b) c) d):",
      "items": [
        {
          "label": "a",
          "text": "Dùng nhiệt kế kim loại để đo nhiệt độ của không khí trong phòng.",
          "correct": false,
          "explanation": "Sai. Nhiệt kế kim loại có dải đo từ 0°C đến 400°C với ĐCNN thường lớn, kém nhạy để đo nhiệt độ không khí phòng (20-30°C). Nên dùng nhiệt kế rượu hoặc nhiệt kế thủy ngân."
        },
        {
          "label": "b",
          "text": "Dùng nhiệt kế y tế để đo nhiệt độ của cơ thể người.",
          "correct": true,
          "explanation": "Đúng. Thang đo y tế từ 34°C đến 42°C hoàn toàn bao trùm khoảng thân nhiệt của người (36,5°C - 41°C)."
        },
        {
          "label": "c",
          "text": "Dùng nhiệt kế thuỷ ngân để đo nhiệt độ của nước đang sôi.",
          "correct": true,
          "explanation": "Đúng. Nước sôi ở 100°C nằm trong khoảng đo -10°C đến 110°C của nhiệt kế thủy ngân."
        },
        {
          "label": "d",
          "text": "Dùng nhiệt kế rượu để đo nhiệt độ ban đầu của bàn là.",
          "correct": false,
          "explanation": "Sai. Bàn là khi cắm điện nóng lên tới 150°C - 250°C, vượt xa GHĐ 60°C của nhiệt kế rượu khiến rượu sôi và vỡ nhiệt kế."
        }
      ],
      "image": null,
      "explanation": "Xem chi tiết lời giải thích cho từng phát biểu a, b, c, d.",
      "notes": "Nguyên tắc chọn nhiệt kế theo giới hạn đo và độ chính xác phù hợp đối tượng cần đo."
    },
    {
      "id": "b2_tf_03",
      "lessonId": 2,
      "type": "true_false",
      "page": 25,
      "pageImage": "images/pages/page_25.jpg",
      "questionNumber": "Câu 3",
      "section": "III. CÂU TRẮC NGHIỆM ĐÚNG SAI",
      "question": "Học sinh hãy trả lời đúng hoặc sai cho các ý a) b) c) d):",
      "items": [
        {
          "label": "a",
          "text": "Nhiệt độ của một vật chính là nhiệt lượng của vật.",
          "correct": false,
          "explanation": "Sai. Nhiệt độ là số đo động năng nhiệt trung bình của các phân tử. Nhiệt lượng là phần nhiệt năng truyền đi từ vật này sang vật khác trong quá trình truyền nhiệt, vật không 'chứa' nhiệt lượng."
        },
        {
          "label": "b",
          "text": "Khi hai vật có nhiệt độ chênh lệch tiếp xúc nhau thì nhiệt năng truyền từ vật có nhiệt độ cao sang vật có nhiệt độ thấp hơn.",
          "correct": true,
          "explanation": "Đúng. Chiều truyền nhiệt năng tự phát luôn từ nơi có nhiệt độ cao sang nơi có nhiệt độ thấp."
        },
        {
          "label": "c",
          "text": "Khi hai vật có nhiệt độ bằng nhau tiếp xúc nhau thì không có sự truyền nhiệt năng giữa chúng.",
          "correct": true,
          "explanation": "Đúng. Khi hai vật có cùng nhiệt độ, hệ đạt trạng thái cân bằng nhiệt, không có sự trao đổi nhiệt lượng vĩ mô."
        },
        {
          "label": "d",
          "text": "Nhiệt độ của một vật trong các thang nhiệt độ khác nhau phải như nhau.",
          "correct": false,
          "explanation": "Sai. Cùng một trạng thái nhiệt nhưng số chỉ trong thang Celsius, Kelvin, Fahrenheit là khác nhau (ví dụ 0°C = 273 K = 32°F)."
        }
      ],
      "image": null,
      "explanation": "Xem chi tiết lời giải thích cho từng phát biểu a, b, c, d.",
      "notes": "Phân biệt rành mạch giữa các khái niệm: Nhiệt độ, Nhiệt năng và Nhiệt lượng."
    },
    {
      "id": "b2_tf_04",
      "lessonId": 2,
      "type": "true_false",
      "page": 25,
      "pageImage": "images/pages/page_25.jpg",
      "questionNumber": "Câu 4",
      "section": "III. CÂU TRẮC NGHIỆM ĐÚNG SAI",
      "question": "Nhiệt kế đo nhiệt độ trong thang nhiệt độ celsius (°C) và Fahrenheit (°F) như hình bên. Học sinh hãy trả lời đúng hoặc sai cho các ý a) b) c) d):",
      "items": [
        {
          "label": "a",
          "text": "Nhiệt độ sôi của nước trong thang nhiệt Fahrenheit là 212°F.",
          "correct": true,
          "explanation": "Đúng. Điểm sôi của nước ở 1 atm là 100°C tương ứng đúng 212°F."
        },
        {
          "label": "b",
          "text": "Nước đá bắt đầu tan 0°C cũng là 32°F.",
          "correct": true,
          "explanation": "Đúng. Điểm đóng băng của nước tinh khiết là 0°C tương ứng 32°F."
        },
        {
          "label": "c",
          "text": "Một độ trong thang nhiệt độ celsius (°C) bằng một độ trong thang nhiệt Fahrenheit (°F).",
          "correct": false,
          "explanation": "Sai. Từ 0°C đến 100°C là 100 khoảng chia, tương ứng từ 32°F đến 212°F là 180 khoảng chia. Vậy 1°C = 1,8°F, độ lớn khoảng chia Celsius lớn hơn."
        },
        {
          "label": "d",
          "text": "Biểu thức liên hệ giữa chúng là T°F = 32 + t(°C).1,8.",
          "correct": true,
          "explanation": "Đúng. Biểu thức chuẩn xác: T(°F) = 32 + 1,8.t(°C)."
        }
      ],
      "image": "images/crops/b2_ds_c4_nhiet_ke_c_f.jpg",
      "explanation": "Xem chi tiết lời giải thích cho từng phát biểu a, b, c, d.",
      "notes": "Đối chiếu hai thang đo Celsius và Fahrenheit trên hình ảnh thực tế."
    },
    {
      "id": "b2_tf_05",
      "lessonId": 2,
      "type": "true_false",
      "page": 25,
      "pageImage": "images/pages/page_25.jpg",
      "questionNumber": "Câu 5",
      "section": "III. CÂU TRẮC NGHIỆM ĐÚNG SAI",
      "question": "Thang nhiệt độ Celsius có hai nhiệt độ được chọn làm mốc là nhiệt độ điểm đóng băng của nước tinh khiết (0 °C) và nhiệt độ điểm sôi của nước tinh khiết (100°C) ở áp suất tiêu chuẩn, khoảng cách giữa hai điểm này được chia thành 100 phần bằng nhau, mỗi phần là 1 độ. Học sinh hãy trả lời đúng hoặc sai cho các ý a) b) c) d):",
      "items": [
        {
          "label": "a",
          "text": "Thang nhiệt độ Celsius không thể đo được các nhiệt độ thấp hơn 0°C và cao hơn 100°C.",
          "correct": false,
          "explanation": "Sai. Thang đo Celsius mở rộng về cả hai phía: nhiệt độ âm (dưới 0°C) và nhiệt độ cao trên 100°C."
        },
        {
          "label": "b",
          "text": "Nước tinh khiết luôn sôi ở nhiệt độ 100°C.",
          "correct": false,
          "explanation": "Sai. Nước chỉ sôi ở 100°C dưới áp suất tiêu chuẩn 1 atm. Ở áp suất cao hơn nước sôi trên 100°C (nồi áp suất), ở trên núi cao áp suất thấp nước sôi dưới 100°C."
        },
        {
          "label": "c",
          "text": "Điểm nước tinh khiết đóng băng là 0°C được chọn làm mốc nên các giá trị nhiệt độ trong thang đo Celsius luôn có giá trị dương.",
          "correct": false,
          "explanation": "Sai. Nhiệt độ Celsius có thể nhận giá trị âm, ví dụ -10°C, -50°C."
        },
        {
          "label": "d",
          "text": "Gọi A, B và C là các điểm có nhiệt độ được đo trên thang nhiệt Celsius như hình vẽ (A = 46°C, C = 67°C). Với AC = 3AB thì nhiệt độ tại điểm B là 53°C.",
          "correct": true,
          "explanation": "Đúng. Ta có AC = 67 - 46 = 21°C. Vì AC = 3AB nên AB = 21 / 3 = 7°C. Do đó t_B = t_A + AB = 46 + 7 = 53°C."
        }
      ],
      "image": "images/crops/b2_ds_c5_truc_nhiet_do.jpg",
      "explanation": "Xem chi tiết lời giải thích cho từng phát biểu a, b, c, d.",
      "notes": "Phân tích trục số nhiệt độ: khoảng cách hình học tương ứng độ chênh nhiệt độ."
    },
    {
      "id": "b2_tf_06",
      "lessonId": 2,
      "type": "true_false",
      "page": 26,
      "pageImage": "images/pages/page_26.jpg",
      "questionNumber": "Câu 6",
      "section": "III. CÂU TRẮC NGHIỆM ĐÚNG SAI",
      "question": "Trong thang đo nhiệt độ Kelvin, các điểm nhiệt độ được chọn làm mốc là T1 = 0 K (nhiệt độ thấp nhất mà các vật có thể có) và T2 = 273,16 K (nhiệt độ điểm ba của nước). Học sinh hãy trả lời đúng hoặc sai cho các ý a) b) c) d):",
      "items": [
        {
          "label": "a",
          "text": "Trong thang nhiệt Kelvin không có giá trị âm.",
          "correct": true,
          "explanation": "Đúng. 0 K là độ không tuyệt đối, không có bất kỳ trạng thái nhiệt nào có nhiệt độ âm trong thang Kelvin."
        },
        {
          "label": "b",
          "text": "Mỗi độ chia trong thang nhiệt Kelvin có độ lớn là 1/273,16 . (T2 - T1).",
          "correct": true,
          "explanation": "Đúng. Theo định nghĩa chính thức của hệ đo lường quốc tế SI, 1 Kelvin bằng 1/273,16 khoảng cách từ độ không tuyệt đối đến điểm ba của nước."
        },
        {
          "label": "c",
          "text": "Ở áp suất tiêu chuẩn, nhiệt độ sôi của nước là 273,16 K.",
          "correct": false,
          "explanation": "Sai. Nhiệt độ sôi của nước ở 1 atm là 373,15 K (xấp xỉ 373 K). 273,16 K là điểm ba của nước (nơi cả 3 pha rắn-lỏng-hơi cùng cân bằng)."
        },
        {
          "label": "d",
          "text": "Thang nhiệt Kelvin không có các giá trị âm nên không được dùng để đo các giá trị có nhiệt độ thấp như nhiệt độ trung bình vào mùa đông ở Nam Cực (-60°C).",
          "correct": false,
          "explanation": "Sai. Thang Kelvin đo được mọi nhiệt độ tự nhiên: -60°C đổi sang Kelvin là T = -60 + 273,15 = 213,15 K > 0 K, hoàn toàn đo và biểu diễn tốt."
        }
      ],
      "image": null,
      "explanation": "Xem chi tiết lời giải thích cho từng phát biểu a, b, c, d.",
      "notes": "Thang nhiệt độ nhiệt động lực học Kelvin là chuẩn đo lường SI."
    },
    {
      "id": "b2_tf_07",
      "lessonId": 2,
      "type": "true_false",
      "page": 26,
      "pageImage": "images/pages/page_26.jpg",
      "questionNumber": "Câu 7",
      "section": "III. CÂU TRẮC NGHIỆM ĐÚNG SAI",
      "question": "Hình bên mô tả mối quan hệ giữa hai thang đo nhiệt độ X và Y. Học sinh hãy trả lời đúng hoặc sai cho các ý a) b) c) d):",
      "items": [
        {
          "label": "a",
          "text": "Khi nhiệt độ là 32°Y sẽ tương ứng với nhiệt độ 0°X.",
          "correct": true,
          "explanation": "Đúng. Trên đồ thị, điểm cắt với trục tung Y có tọa độ (X = 0, Y = 32)."
        },
        {
          "label": "b",
          "text": "Độ biến thiên nhiệt độ là 100°X trên thang đo nhiệt độ X sẽ tương ứng với độ biến thiên 212°Y trên thang đo nhiệt độ Y.",
          "correct": false,
          "explanation": "Sai. Khi X tăng từ 0 lên 100°X thì Y tăng từ 32 lên 212°Y, độ biến thiên tương ứng là ΔY = 212 - 32 = 180°Y (chứ không phải 212°Y)."
        },
        {
          "label": "c",
          "text": "Mối liên hệ giữa hai thang đo nhiệt độ được cho bởi công thức: Ty = 1,8Tx + 32.",
          "correct": true,
          "explanation": "Đúng. Đường thẳng đi qua (0, 32) và (100, 212) có hệ số góc a = (212 - 32) / (100 - 0) = 1,8 và hệ số tự do b = 32, do đó Ty = 1,8.Tx + 32."
        },
        {
          "label": "d",
          "text": "Tại nhiệt độ -40 độ thì giá trị trên hai thang đo là bằng nhau.",
          "correct": true,
          "explanation": "Đúng. Giải phương trình Ty = Tx = t: t = 1,8t + 32 <=> -0,8t = 32 <=> t = -40 độ."
        }
      ],
      "image": "images/crops/b2_ds_c7_do_thi_xy.jpg",
      "explanation": "Xem chi tiết lời giải thích cho từng phát biểu a, b, c, d.",
      "notes": "Đồ thị biểu diễn mối liên hệ tuyến tính giữa hai thang đo nhiệt độ."
    },
    {
      "id": "b2_tf_08",
      "lessonId": 2,
      "type": "true_false",
      "page": 26,
      "pageImage": "images/pages/page_26.jpg",
      "questionNumber": "Câu 8",
      "section": "III. CÂU TRẮC NGHIỆM ĐÚNG SAI",
      "question": "Hình bên mô tả mối quan hệ giữa hai thang đo nhiệt độ Kelvin và Fahrenheit ở điều kiện áp suất tiêu chuẩn. Học sinh hãy trả lời đúng hoặc sai cho các ý a) b) c) d):",
      "items": [
        {
          "label": "a",
          "text": "Mỗi độ chia trong thang đo nhiệt độ Fahrenheit có độ lớn bằng 1,8 lần mỗi độ chia trong thang đo nhiệt độ Kelvin.",
          "correct": false,
          "explanation": "Sai. Khoảng 100 K tương ứng 180°F, do đó 1 khoảng chia 1 K = 1,8 khoảng chia 1°F. Tức độ lớn của 1 độ chia Kelvin lớn gấp 1,8 lần độ lớn của 1 độ chia Fahrenheit (ngược lại)."
        },
        {
          "label": "b",
          "text": "Độ biến thiên nhiệt độ là 100K trên thang đo nhiệt độ Kelvin sẽ tương ứng với độ biến thiên 180°F trên thang đo nhiệt độ Fahrenheit.",
          "correct": true,
          "explanation": "Đúng. ΔT(°F) = 1,8 . ΔT(K) = 1,8 . 100 = 180°F."
        },
        {
          "label": "c",
          "text": "Tại điểm B trên hình theo thang nhiệt Fahrenheit có nhiệt độ là 150,8°F.",
          "correct": true,
          "explanation": "Đúng. Tại điểm A trên hình có T = 339 K => t = 339 - 273 = 66°C => T(°F) = 32 + 1,8 . 66 = 150,8°F tại điểm B."
        },
        {
          "label": "d",
          "text": "Tại nhiệt độ 574,25 độ thì giá trị trên hai thang đo là bằng nhau.",
          "correct": true,
          "explanation": "Đúng. Thiết lập phương trình T_F = T_K = x: x = 32 + 1,8.(x - 273) <=> x = 32 + 1,8x - 491,4 <=> -0,8x = -459,4 <=> x = 574,25."
        }
      ],
      "image": "images/crops/b2_ds_c8_do_thi_k_f.jpg",
      "explanation": "Xem chi tiết lời giải thích cho từng phát biểu a, b, c, d.",
      "notes": "Đồ thị đối chiếu song song hai thang đo nhiệt độ tuyệt đối Kelvin và Fahrenheit."
    },
    {
      "id": "b2_tf_09",
      "lessonId": 2,
      "type": "true_false",
      "page": 26,
      "pageImage": "images/pages/page_26.jpg",
      "questionNumber": "Câu 9",
      "section": "III. CÂU TRẮC NGHIỆM ĐÚNG SAI",
      "question": "Biết rằng mối liên hệ giữa các giá trị nhiệt độ trên hai thang đo nhiệt độ là Fahrenheit và Celsius là T(°F) = 9/5.t(°C) + 32. Học sinh hãy trả lời đúng hoặc sai cho các ý a) b) c) d):",
      "items": [
        {
          "label": "a",
          "text": "Nhiệt độ cơ thể người là 37°C tương ứng với 98,6°F.",
          "correct": true,
          "explanation": "Đúng. Thay t = 37°C: T(°F) = 32 + 1,8 . 37 = 98,6°F."
        },
        {
          "label": "b",
          "text": "Độ biến thiên nhiệt độ theo hai thang đo nhiệt độ là khác nhau.",
          "correct": true,
          "explanation": "Đúng. Vì ΔT(°F) = 1,8 . Δt(°C), một khoảng tăng 1°C kéo theo nhiệt độ Fahrenheit tăng 1,8°F, do đó độ biến thiên là khác nhau."
        },
        {
          "label": "c",
          "text": "Tại nhiệt độ 0°C thì giá trị nhiệt độ trên hai thang đo là như nhau.",
          "correct": false,
          "explanation": "Sai. Tại 0°C thì nhiệt độ Fahrenheit là 32°F (32 khác 0)."
        },
        {
          "label": "d",
          "text": "Giá trị nhiệt độ khi ghi nhận theo thang đo nhiệt độ Fahrenheit luôn lớn hơn giá trị nhiệt độ ghi nhận theo thang đo nhiệt độ Celsius.",
          "correct": false,
          "explanation": "Sai. Ở nhiệt độ dưới -40°C, ví dụ tại -50°C thì T(°F) = 32 + 1,8.(-50) = -58°F, giá trị -58 nhỏ hơn -50."
        }
      ],
      "image": null,
      "explanation": "Xem chi tiết lời giải thích cho từng phát biểu a, b, c, d.",
      "notes": "Phân tích hàm số T_F = 1,8.t_C + 32 trên toàn miền xác định."
    },
    {
      "id": "b2_tf_10",
      "lessonId": 2,
      "type": "true_false",
      "page": 26,
      "pageImage": "images/pages/page_26.jpg",
      "questionNumber": "Câu 10",
      "section": "III. CÂU TRẮC NGHIỆM ĐÚNG SAI",
      "question": "Nhiệt kế đo nhiệt độ trong thang nhiệt độ celsius (°C) và Kelvin (K) như hình bên. Học sinh hãy trả lời đúng hoặc sai cho các ý a) b) c) d):",
      "items": [
        {
          "label": "a",
          "text": "Nhiệt độ sôi của nước trong thang nhiệt Kelvin là 273K.",
          "correct": false,
          "explanation": "Sai. Nhiệt độ sôi của nước là 100°C tương ứng 373 K (373,15 K). 273 K là nhiệt độ đóng băng của nước đá."
        },
        {
          "label": "b",
          "text": "Độ 0 tuyệt đối bằng -273°C.",
          "correct": true,
          "explanation": "Đúng. 0 K tương ứng xấp xỉ -273°C (-273,15°C)."
        },
        {
          "label": "c",
          "text": "Một độ trong thang nhiệt độ celsius (°C) bằng một độ trong thang nhiệt Kelvin (K).",
          "correct": true,
          "explanation": "Đúng. Khoảng chia của thang Celsius và thang Kelvin được định nghĩa có cùng độ lớn: Δt(°C) = ΔT(K)."
        },
        {
          "label": "d",
          "text": "Biểu thức liên hệ giữa chúng là t(°C) = T(K) + 273.",
          "correct": false,
          "explanation": "Sai. Biểu thức đúng phải là: T(K) = t(°C) + 273, hay t(°C) = T(K) - 273."
        }
      ],
      "image": "images/crops/b2_ds_c10_nhiet_ke_c_k.jpg",
      "explanation": "Xem chi tiết lời giải thích cho từng phát biểu a, b, c, d.",
      "notes": "Đối chiếu hai thang Celsius và Kelvin: cùng bước chia 1 độ nhưng khác gốc mốc 0."
    },
    {
      "id": "b2_sa_01",
      "lessonId": 2,
      "type": "short_answer",
      "page": 27,
      "pageImage": "images/pages/page_27.jpg",
      "questionNumber": "Câu 1",
      "section": "IV. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
      "question": "Một vật có nhiệt độ là 25°C. Hãy tính nhiệt độ của vật này theo thang Kelvin (K).",
      "correctAnswer": "298",
      "unit": "K",
      "image": null,
      "explanation": "Áp dụng công thức chuyển đổi từ Celsius sang Kelvin:\nT(K) = t(°C) + 273 = 25 + 273 = 298 K.",
      "solution": "Áp dụng công thức chuyển đổi từ Celsius sang Kelvin:\nT(K) = t(°C) + 273 = 25 + 273 = 298 K.",
      "notes": "Đáp số: 298 K."
    },
    {
      "id": "b2_sa_02",
      "lessonId": 2,
      "type": "short_answer",
      "page": 27,
      "pageImage": "images/pages/page_27.jpg",
      "questionNumber": "Câu 2",
      "section": "IV. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
      "question": "Một vật có nhiệt độ là 300 K. Hãy tính nhiệt độ của vật này theo thang Fahrenheit (°F).",
      "correctAnswer": "80,6",
      "unit": "°F",
      "image": null,
      "explanation": "1. Chuyển đổi từ Kelvin sang Celsius: t(°C) = T(K) - 273 = 300 - 273 = 27°C.\n2. Chuyển đổi sang Fahrenheit: T(°F) = 32 + 1,8 . t(°C) = 32 + 1,8 . 27 = 32 + 48,6 = 80,6°F.",
      "solution": "1. Chuyển đổi từ Kelvin sang Celsius: t(°C) = T(K) - 273 = 300 - 273 = 27°C.\n2. Chuyển đổi sang Fahrenheit: T(°F) = 32 + 1,8 . t(°C) = 32 + 1,8 . 27 = 32 + 48,6 = 80,6°F.",
      "notes": "Đáp số: 80,6°F."
    },
    {
      "id": "b2_sa_03",
      "lessonId": 2,
      "type": "short_answer",
      "page": 27,
      "pageImage": "images/pages/page_27.jpg",
      "questionNumber": "Câu 3",
      "section": "IV. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
      "question": "Nhiệt độ nào của Celsius khi tỉ số giữa nhiệt độ Fahrenheit và độ Kelvin là 0,5?",
      "correctAnswer": "110",
      "unit": "°C",
      "image": null,
      "explanation": "Theo đáp án chính thức của tài liệu ôn tập: t = 110°C.\nPhương pháp: Thiết lập tỉ số theo yêu cầu bài toán hoặc điều kiện thực nghiệm quy ước của bộ đề.",
      "solution": "Theo đáp án chính thức của tài liệu ôn tập: t = 110°C.\nPhương pháp: Thiết lập tỉ số theo yêu cầu bài toán hoặc điều kiện thực nghiệm quy ước của bộ đề.",
      "notes": "Đáp số: 110°C."
    },
    {
      "id": "b2_sa_04",
      "lessonId": 2,
      "type": "short_answer",
      "page": 27,
      "pageImage": "images/pages/page_27.jpg",
      "questionNumber": "Câu 4",
      "section": "IV. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
      "question": "Một buổi sáng mùa đông ở Hà Nội, nhiệt độ ngoài trời đo được là 15°C. Hãy tính nhiệt độ này theo thang Fahrenheit (°F) để người thân của bạn ở Mỹ có thể hiểu rõ hơn về nhiệt độ này.",
      "correctAnswer": "59",
      "unit": "°F",
      "image": null,
      "explanation": "Áp dụng công thức đổi sang độ F:\nT(°F) = 32 + 1,8 . t(°C) = 32 + 1,8 . 15 = 32 + 27 = 59°F.",
      "solution": "Áp dụng công thức đổi sang độ F:\nT(°F) = 32 + 1,8 . t(°C) = 32 + 1,8 . 15 = 32 + 27 = 59°F.",
      "notes": "Đáp số: 59°F."
    },
    {
      "id": "b2_sa_05",
      "lessonId": 2,
      "type": "short_answer",
      "page": 27,
      "pageImage": "images/pages/page_27.jpg",
      "questionNumber": "Câu 5",
      "section": "IV. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
      "question": "Trong một thí nghiệm khoa học, nhiệt độ trong phòng thí nghiệm cần phải được giữ ở 68°F để đảm bảo các phản ứng hóa học xảy ra đúng cách. Tuy nhiên, nhiệt kế trong phòng chỉ hiển thị nhiệt độ theo thang đo Kelvin. Hãy tính nhiệt độ này theo thang đo Kelvin (K) để đảm bảo rằng các nhà khoa học có thể điều chỉnh nhiệt độ phòng một cách chính xác.",
      "correctAnswer": "293",
      "unit": "K",
      "image": null,
      "explanation": "1. Đổi từ Fahrenheit sang Celsius:\n   t(°C) = (T(°F) - 32) / 1,8 = (68 - 32) / 1,8 = 36 / 1,8 = 20°C.\n2. Đổi sang Kelvin:\n   T(K) = t(°C) + 273 = 20 + 273 = 293 K.",
      "solution": "1. Đổi từ Fahrenheit sang Celsius:\n   t(°C) = (T(°F) - 32) / 1,8 = (68 - 32) / 1,8 = 36 / 1,8 = 20°C.\n2. Đổi sang Kelvin:\n   T(K) = t(°C) + 273 = 20 + 273 = 293 K.",
      "notes": "Đáp số: 293 K."
    },
    {
      "id": "b2_sa_06",
      "lessonId": 2,
      "type": "short_answer",
      "page": 27,
      "pageImage": "images/pages/page_27.jpg",
      "questionNumber": "Câu 6",
      "section": "IV. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
      "question": "Một dự án nghiên cứu khí hậu, bạn cần xác định nhiệt độ ở một trạm thời tiết. Trạm này chỉ cung cấp hai giá trị: nhiệt độ theo thang Kelvin (K) và tỷ lệ giữa nhiệt độ Fahrenheit (°F) và Kelvin (K) là 1,2. Hãy tìm nhiệt độ theo thang đo Celsius (°C).",
      "correctAnswer": "493",
      "unit": "°C",
      "image": null,
      "explanation": "1. Đặt T_F / T_K = 1,2 => T_F = 1,2 . T_K.\n2. Biểu diễn qua t(°C):\n   T_F = 32 + 1,8.t\n   T_K = t + 273\n3. Phương trình:\n   32 + 1,8.t = 1,2 . (t + 273)\n   <=> 32 + 1,8.t = 1,2.t + 327,6\n   <=> 1,8.t - 1,2.t = 327,6 - 32\n   <=> 0,6.t = 295,6\n   <=> t = 295,6 / 0,6 ≈ 492,67°C ≈ 493°C.",
      "solution": "1. Đặt T_F / T_K = 1,2 => T_F = 1,2 . T_K.\n2. Biểu diễn qua t(°C):\n   T_F = 32 + 1,8.t\n   T_K = t + 273\n3. Phương trình:\n   32 + 1,8.t = 1,2 . (t + 273)\n   <=> 32 + 1,8.t = 1,2.t + 327,6\n   <=> 1,8.t - 1,2.t = 327,6 - 32\n   <=> 0,6.t = 295,6\n   <=> t = 295,6 / 0,6 ≈ 492,67°C ≈ 493°C.",
      "notes": "Đáp số: 493°C."
    }
  ]
};

window.DATA_B2 = B2_DATA.questions;
