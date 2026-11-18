// Metadata và tóm tắt lý thuyết - công thức trọng tâm cho 6 bài
window.LESSONS_INFO = [
  {
    id: 1,
    title: "Chủ đề 1: Sự chuyển thể - Cấu trúc của chất",
    subtitle: "Mô hình động học phân tử, cấu trúc thể rắn - lỏng - khí, đồ thị chuyển thể",
    pages: "Trang 16 - 20",
    pageCount: 5,
    icon: "fa-solid fa-atom",
    color: "blue",
    stats: { total: 43, essay: 0, single_choice: 35, true_false: 8, short_answer: 0, hasImage: 7 },
    formulas: [
      { name: "Cấu trúc chất rắn", formula: "Chất rắn kết tinh (có cấu trúc tinh thể, nhiệt độ nóng chảy xác định) vs Vô định hình (không có nhiệt độ nóng chảy xác định)" },
      { name: "Sự chuyển thể", formula: "\\text{Rắn} \\underset{\\text{Đông đặc}}{\\overset{\\text{Nóng chảy}}{\\rightleftharpoons}} \\text{Lỏng} \\underset{\\text{Ngưng tụ}}{\\overset{\\text{Hóa hơi}}{\\rightleftharpoons}} \\text{Khí}; \\quad \\text{Rắn} \\underset{\\text{Ngưng kết}}{\\overset{\\text{Thăng hoa}}{\\rightleftharpoons}} \\text{Khí}" },
      { name: "Lực tương tác phân tử", formula: "F = F_{\\text{hút}} + F_{\\text{đẩy}}; \\quad r = r_0 \\implies F = 0; \\quad r > r_0 \\implies F_{\\text{hút}} > F_{\\text{đẩy}}; \\quad r < r_0 \\implies F_{\\text{đẩy}} > F_{\\text{hút}}" }
    ],
    theory: [
      "Các chất được cấu tạo từ các hạt riêng biệt là phân tử, nguyên tử.",
      "Các phân tử chuyển động không ngừng (chuyển động nhiệt). Nhiệt độ càng cao thì các phân tử chuyển động càng nhanh.",
      "Giữa các phân tử có lực hút và lực đẩy tương tác.",
      "Thể rắn: Các phân tử ở rất gần nhau, dao động quanh vị trí cân bằng cố định. Có hình dạng và thể tích xác định.",
      "Thể lỏng: Lực tương tác yếu hơn thể rắn, phân tử dao động quanh các VTCB có thể dịch chuyển được. Có thể tích xác định nhưng hình dạng của bình chứa.",
      "Thể khí: Lực tương tác rất yếu, phân tử chuyển động hỗn loạn hỗn độn chiếm toàn bộ thể tích bình chứa.",
      "Chất rắn kết tinh có nhiệt độ nóng chảy xác định, còn chất rắn vô định hình thì không."
    ]
  },
  {
    id: 2,
    title: "Chủ đề 2: Thang nhiệt độ",
    subtitle: "Nhiệt kế, thang Celsius, thang Kelvin, thang Fahrenheit, điểm gốc nhiệt động",
    pages: "Trang 21 - 27",
    pageCount: 7,
    icon: "fa-solid fa-temperature-half",
    color: "amber",
    stats: { total: 56, essay: 8, single_choice: 32, true_false: 10, short_answer: 6, hasImage: 8 },
    formulas: [
      { name: "Thang Kelvin và Celsius", formula: "T(\\text{K}) = t(^{\\circ}\\text{C}) + 273{,}15 \\approx t + 273; \\quad \\Delta T = \\Delta t" },
      { name: "Thang Fahrenheit và Celsius", formula: "t(^{\\circ}\\text{F}) = 1{,}8 \\cdot t(^{\\circ}\\text{C}) + 32; \\quad \\Delta t(^{\\circ}\\text{F}) = 1{,}8 \\cdot \\Delta t(^{\\circ}\\text{C})" },
      { name: "Chuyển đổi ngược lại", formula: "t(^{\\circ}\\text{C}) = \\frac{t(^{\\circ}\\text{F}) - 32}{1{,}8}" },
      { name: "Nhiệt độ hai thang bằng nhau", formula: "t(^{\\circ}\\text{C}) = t(^{\\circ}\\text{F}) = -40^{\\circ}" }
    ],
    theory: [
      "Nhiệt độ là số đo động năng trung bình của các phân tử cấu tạo nên vật.",
      "Thang nhiệt độ Celsius (°C): Chọn mốc 0°C là nhiệt độ nóng chảy của nước đá tinh khiết ở 1 atm; 100°C là nhiệt độ sôi của nước tinh khiết ở 1 atm.",
      "Thang nhiệt độ Kelvin (K): Không tuyệt đối (0 K = -273,15°C) là nhiệt độ mà các phân tử ngừng chuyển động nhiệt. 1 K có độ lớn bằng 1°C.",
      "Nhiệt kế hoạt động dựa trên các hiện tượng vật lý phụ thuộc nhiệt độ: sự giãn nở vì nhiệt của chất lỏng (nhiệt kế thủy ngân, rượu), điện trở kim loại/bán dẫn (nhiệt kế điện trở), bức xạ nhiệt (nhiệt kế hồng ngoại)."
    ]
  },
  {
    id: 3,
    title: "Chủ đề 3: Nội năng - Định luật I nhiệt động lực học",
    subtitle: "Nội năng U, truyền nhiệt Q, thực hiện công A, nguyên lý I: ΔU = A + Q",
    pages: "Trang 27 - 35",
    pageCount: 9,
    icon: "fa-solid fa-fire-flame-curved",
    color: "red",
    stats: { total: 83, essay: 20, single_choice: 40, true_false: 8, short_answer: 15, hasImage: 3 },
    formulas: [
      { name: "Định luật I NĐLH", formula: "\\Delta U = A + Q" },
      { name: "Quy ước dấu", formula: "Q > 0: \\text{hệ nhận nhiệt}; \\quad Q < 0: \\text{hệ truyền nhiệt (tỏa)}" },
      { name: "Quy ước dấu công", formula: "A > 0: \\text{hệ nhận công}; \\quad A < 0: \\text{hệ sinh công (thực hiện công)}" },
      { name: "Công của khối khí khi dãn nở đẳng áp", formula: "A' = p \\cdot \\Delta V; \\quad A = -p \\cdot \\Delta V" }
    ],
    theory: [
      "Nội năng U của một vật là tổng động năng của các phân tử cấu tạo nên vật và thế năng tương tác giữa chúng: U = W_đ + W_t.",
      "Nội năng phụ thuộc vào nhiệt độ T và thể tích V của vật: U = f(T, V). Với khí lý tưởng, nội năng chỉ phụ thuộc vào nhiệt độ.",
      "Hai cách làm thay đổi nội năng: Thực hiện công (có sự chuyển hóa cơ năng thành nội năng) và Truyền nhiệt (không có sự chuyển hóa cơ năng, chỉ có sự truyền nội năng).",
      "Nhiệt lượng Q là phần nội năng mà vật nhận được hay mất đi trong quá trình truyền nhiệt."
    ]
  },
  {
    id: 4,
    title: "Chủ đề 4: Nhiệt dung riêng",
    subtitle: "Nhiệt lượng thu vào / tỏa ra, phương trình cân bằng nhiệt, công suất đun Q = P.t",
    pages: "Trang 35 - 42",
    pageCount: 8,
    icon: "fa-solid fa-mug-hot",
    color: "teal",
    stats: { total: 70, essay: 18, single_choice: 30, true_false: 6, short_answer: 16, hasImage: 4 },
    formulas: [
      { name: "Nhiệt lượng vật thu vào / tỏa ra", formula: "Q = m \\cdot c \\cdot \\Delta t = m \\cdot c \\cdot (t_2 - t_1)" },
      { name: "Nhiệt dung riêng", formula: "c = \\frac{Q}{m \\cdot \\Delta t} \\quad [\\text{J/(kg}\\cdot\\text{K)}]" },
      { name: "Phương trình cân bằng nhiệt", formula: "Q_{\\text{tỏa}} = Q_{\\text{thu}} \\iff \\sum m_i c_i (t_i - t_{\\text{cb}}) = 0" },
      { name: "Nhiệt lượng từ nguồn điện", formula: "Q = P \\cdot t; \\quad Q_{\\text{ích}} = H \\cdot P \\cdot t" }
    ],
    theory: [
      "Nhiệt dung riêng c của một chất là nhiệt lượng cần truyền cho 1 kg chất đó để nhiệt độ của nó tăng thêm 1°C (hoặc 1 K).",
      "Đơn vị SI của nhiệt dung riêng: J/(kg.K).",
      "Nước có nhiệt dung riêng rất lớn (c ≈ 4180 - 4200 J/kg.K), do đó nước thường được dùng làm chất làm mát trong động cơ hoặc sưởi ấm, và giải thích vì sao khí hậu miền duyên hải ôn hòa hơn vùng nội địa.",
      "Phương pháp đo nhiệt dung riêng trong thực hành: Dùng nhiệt lượng kế, cấp nhiệt bằng điện trở có oát kế đo công suất P và bấm thời gian t."
    ]
  },
  {
    id: 5,
    title: "Chủ đề 5: Nhiệt nóng chảy riêng",
    subtitle: "Quá trình nóng chảy, ẩn nhiệt nóng chảy, tính toán hỗn hợp nước và nước đá",
    pages: "Trang 43 - 50",
    pageCount: 8,
    icon: "fa-solid fa-snowflake",
    color: "cyan",
    stats: { total: 74, essay: 17, single_choice: 41, true_false: 8, short_answer: 8, hasImage: 10 },
    formulas: [
      { name: "Nhiệt lượng nóng chảy", formula: "Q = \\lambda \\cdot m" },
      { name: "Nhiệt nóng chảy riêng", formula: "\\lambda = \\frac{Q}{m} \\quad [\\text{J/kg}]" },
      { name: "Tổng nhiệt lượng từ âm độ đến tan hoàn toàn", formula: "Q = m \\cdot c_{\\text{đá}} \\cdot (0 - t_0) + m \\cdot \\lambda" },
      { name: "Thực nghiệm đo nhiệt nóng chảy", formula: "\\lambda = \\frac{P \\cdot t}{m} \\quad (\\text{với } P \\text{ là công suất tiêu thụ})" }
    ],
    theory: [
      "Sự chuyển từ thể rắn sang thể lỏng gọi là sự nóng chảy. Quá trình ngược lại là sự đông đặc.",
      "Chất rắn kết tinh nóng chảy ở một nhiệt độ xác định gọi là nhiệt độ nóng chảy. Trong suốt quá trình nóng chảy, nhiệt độ của chất rắn kết tinh không thay đổi.",
      "Chất rắn vô định hình không có nhiệt độ nóng chảy xác định.",
      "Nhiệt nóng chảy riêng λ của một chất là nhiệt lượng cần cung cấp cho 1 kg chất đó nóng chảy hoàn toàn ở nhiệt độ nóng chảy.",
      "Đơn vị của nhiệt nóng chảy riêng trong hệ SI là J/kg."
    ]
  },
  {
    id: 6,
    title: "Chủ đề 6: Nhiệt hóa hơi riêng",
    subtitle: "Sự bay hơi và sự sôi, ẩn nhiệt hóa hơi, ấm điện đun sôi và tính độ rượu",
    pages: "Trang 51 - 57",
    pageCount: 7,
    icon: "fa-solid fa-cloud-arrow-up",
    color: "purple",
    stats: { total: 61, essay: 13, single_choice: 36, true_false: 6, short_answer: 6, hasImage: 8 },
    formulas: [
      { name: "Nhiệt lượng hóa hơi", formula: "Q = L \\cdot m" },
      { name: "Nhiệt hóa hơi riêng", formula: "L = \\frac{Q}{m} \\quad [\\text{J/kg}]" },
      { name: "Quá trình từ t° đến hóa hơi hoàn toàn", formula: "Q = m \\cdot c \\cdot (t_{\\text{sôi}} - t_1) + m \\cdot L" },
      { name: "Tính lượng chất lỏng bay hơi", formula: "\\Delta m = \\frac{P \\cdot \\Delta t}{L}; \\quad m_{\\text{còn}} = m_{\\text{đầu}} - \\Delta m" }
    ],
    theory: [
      "Sự hóa hơi là sự chuyển từ thể lỏng sang thể hơi (khí). Có 2 hình thức: Bay hơi và Sôi.",
      "Bay hơi xảy ra ở bề mặt thoáng của chất lỏng và ở mọi nhiệt độ.",
      "Sôi là sự hóa hơi xảy ra cả ở mặt thoáng và trong lòng khối chất lỏng. Sôi xảy ra ở nhiệt độ sôi xác định (phụ thuộc áp suất trên mặt thoáng). Trong suốt thời gian sôi nhiệt độ không đổi.",
      "Nhiệt hóa hơi riêng L của một chất lỏng là nhiệt lượng cần cung cấp cho 1 kg chất lỏng đó hóa hơi hoàn toàn ở nhiệt độ sôi.",
      "Đơn vị của nhiệt hóa hơi riêng trong hệ SI là J/kg."
    ]
  }
];

// 7 DẠNG BÀI TẬP VÀ CÔNG THỨC CHUNG TOÀN NĂNG (BÀI 1 - BÀI 6)
window.MASTER_PROBLEM_TYPES = [
  {
    id: 1,
    title: "Dạng 1: Đổi Thang Nhiệt Độ & Thang Đo Bất Kỳ",
    scope: "Bài 2 (Thang nhiệt độ)",
    icon: "fa-solid fa-temperature-half",
    badge: "Độ Celsius, Kelvin, Fahrenheit & Cột thủy ngân",
    formulas: [
      { name: "Đổi giữa Kelvin (K) và Celsius (°C)", tex: "T(\\text{K}) = t(^{\\circ}\\text{C}) + 273{,}15 \\approx t + 273; \\quad \\Delta T(\\text{K}) = \\Delta t(^{\\circ}\\text{C})" },
      { name: "Đổi giữa Fahrenheit (°F) và Celsius (°C)", tex: "t(^{\\circ}\\text{F}) = 1{,}8 \\cdot t(^{\\circ}\\text{C}) + 32 \\iff t(^{\\circ}\\text{C}) = \\frac{t(^{\\circ}\\text{F}) - 32}{1{,}8}; \\quad \\Delta t(^{\\circ}\\text{F}) = 1{,}8 \\cdot \\Delta t(^{\\circ}\\text{C})" },
      { name: "Điểm trùng nhau giữa 2 thang", tex: "t(^{\\circ}\\text{C}) = t(^{\\circ}\\text{F}) = -40^{\\circ}" },
      { name: "Thang đo tùy ý X / Chiều dài l cột thủy ngân (Nội suy bậc nhất)", tex: "\\frac{t_X - t_{0X}}{t_{100X} - t_{0X}} = \\frac{t(^{\\circ}\\text{C}) - 0}{100 - 0} = \\frac{l - l_0}{l_{100} - l_0}" }
    ],
    algorithm: [
      "Bước 1: Xác định thang ban đầu và thang cần chuyển đổi.",
      "Bước 2: Cẩn thận phân biệt giữa 'nhiệt độ tại một thời điểm' (T, t) và 'độ biến thiên nhiệt độ' (ΔT, Δt). Cực kỳ lưu ý: ΔT(K) = Δt(°C), KHÔNG ĐƯỢC cộng 273 vào độ biến thiên!",
      "Bước 3: Với bài toán nhiệt kế hỏng hoặc thang đo lạ, lập tỉ số tuyến tính giữa khoảng đo thực tế và chuẩn 100 vạch của Celsius: (t_X - t_0)/(t_100 - t_0) = t/100."
    ],
    pitfalls: "Tuyệt đối không cộng 273 khi tính độ tăng giảm nhiệt độ: nếu nước tăng 20°C thì trong thang Kelvin cũng tăng đúng 20 K (chứ không phải 293 K)!"
  },
  {
    id: 2,
    title: "Dạng 2: Nội Năng & Định Luật I Nhiệt Động Lực Học",
    scope: "Bài 3 (Nội năng & Định luật I)",
    icon: "fa-solid fa-fire-flame-curved",
    badge: "ΔU = A + Q, Khí nén & Dãn nở trong xilanh",
    formulas: [
      { name: "Công thức Định luật I NĐLH", tex: "\\Delta U = A + Q" },
      { name: "Quy tắc dấu vàng (Quy ước quốc tế)", tex: "\\begin{cases} Q > 0: \\text{hệ nhận nhiệt lượng} & Q < 0: \\text{hệ truyền (tỏa) nhiệt lượng} \\\\ A > 0: \\text{hệ nhận công (môi trường nén hệ)} & A < 0: \\text{hệ thực hiện công (hệ dãn nở đẩy ngoài)} \\end{cases}" },
      { name: "Công của chất khí dãn nở đẳng áp (p = const)", tex: "A' = p \\cdot \\Delta V = p \\cdot S \\cdot \\Delta h \\quad (A' > 0 \\text{ là công do khí sinh ra}) \\implies A = -A' = -p \\cdot \\Delta V" }
    ],
    algorithm: [
      "Bước 1: Đọc kĩ đề để bắt từ khóa: 'nhận' hay 'tỏa', 'thực hiện công' hay 'nhận công'.",
      "Bước 2: Gán dấu đại số chính xác cho A và Q: Vật dãn nở đẩy piston sinh công A' => A = -A'. Vật nhận nhiệt Q > 0, tỏa nhiệt Q < 0.",
      "Bước 3: Áp dụng ΔU = A + Q. Nếu ΔU > 0 thì nội năng tăng, nếu ΔU < 0 thì nội năng giảm.",
      "Bước 4: Đổi đơn vị thể tích sang m³: 1 lít = 1 dm³ = 10⁻³ m³, 1 cm³ = 10⁻⁶ m³. Áp suất chuẩn p sang Pa (N/m²): 1 bar = 10⁵ Pa, 1 atm ≈ 1,013.10⁵ Pa."
    ],
    pitfalls: "Khi đề cho 'khí dãn nở sinh công 50 J và nhận nhiệt 80 J': thì A = -50 J (vì sinh công), Q = +80 J => ΔU = (-50) + 80 = +30 J (nội năng tăng 30 J)."
  },
  {
    id: 3,
    title: "Dạng 3: Nhiệt Lượng Làm Tăng/Giảm Nhiệt Độ",
    scope: "Bài 4 (Nhiệt dung riêng)",
    icon: "fa-solid fa-mug-hot",
    badge: "Q = mcΔt, Đun nóng & Làm nguội",
    formulas: [
      { name: "Nhiệt lượng vật thu vào / tỏa ra", tex: "Q = m \\cdot c \\cdot \\Delta t = m \\cdot c \\cdot (t_{\\text{sau}} - t_{\\text{đầu}})" },
      { name: "Nhiệt dung riêng", tex: "c = \\frac{Q}{m \\cdot \\Delta t} \\quad [\\text{J/(kg}\\cdot\\text{K)}]" },
      { name: "Định nghĩa nhiệt dung (nhiệt dung nhiệt lượng kế C)", tex: "C_0 = m_0 \\cdot c_0 \\implies Q = C_0 \\cdot \\Delta t" }
    ],
    algorithm: [
      "Bước 1: Xác định khối lượng m (bắt buộc đổi sang kg). Nếu đề cho thể tích V của nước (lít): m = V (vì D_nước = 1 kg/lít).",
      "Bước 2: Xác định nhiệt dung riêng c (J/kg.K) và độ biến thiên nhiệt độ Δt = |t_2 - t_1|.",
      "Bước 3: Tính nhiệt lượng Q = mcΔt (J). Nếu đề hỏi kJ thì chia cho 1000, nếu hỏi MJ thì chia cho 10⁶."
    ],
    pitfalls: "Khối lượng trong đề thi hay cho theo gam (g), phải lập tức chia 1000 để ra kg trước khi thế vào mcΔt."
  },
  {
    id: 4,
    title: "Dạng 4: Quá Trình Chuyển Thể Pha (Nóng Chảy & Hóa Hơi)",
    scope: "Bài 5 (Nóng chảy) & Bài 6 (Hóa hơi)",
    icon: "fa-solid fa-snowflake",
    badge: "Q = λm, Q = Lm & Bài toán liên hoàn đa giai đoạn",
    formulas: [
      { name: "Nhiệt lượng nóng chảy / đông đặc ở nhiệt độ nóng chảy", tex: "Q_{\\text{nc}} = \\lambda \\cdot m \\quad (\\lambda: \\text{J/kg})" },
      { name: "Nhiệt lượng hóa hơi / ngưng tụ ở nhiệt độ sôi", tex: "Q_{\\text{hh}} = L \\cdot m \\quad (L: \\text{J/kg})" },
      { name: "Quá trình liên hoàn (nung đá từ âm độ đến tan và tăng nhiệt độ)", tex: "Q_{\\text{tổng}} = \\underbrace{m c_{\\text{đá}} (0 - t_0)}_{\\text{tăng nhiệt đá lên } 0^{\\circ}\\text{C}} + \\underbrace{\\lambda m}_{\\text{tan hoàn toàn}} + \\underbrace{m c_{\\text{nước}} (t_{\\text{sau}} - 0)}_{\\text{ấm lên } t_{\\text{sau}}}" },
      { name: "Quá trình liên hoàn đun sôi và hóa hơi chất lỏng", tex: "Q_{\\text{tổng}} = \\underbrace{m c (t_{\\text{sôi}} - t_{\\text{đầu}})}_{\\text{đun đến sôi}} + \\underbrace{\\Delta m \\cdot L}_{\\text{lượng lỏng bay hơi}}" }
    ],
    algorithm: [
      "Bước 1: Vẽ trục nhiệt độ hoặc sơ đồ khối chuyển trạng thái: (Rắn, t₁) -> (Rắn, t_nc) -> (Lỏng, t_nc) -> (Lỏng, t_sôi) -> (Hơi, t_sôi).",
      "Bước 2: Giai đoạn nhiệt độ biến thiên (đường xiên): dùng Q = mcΔt (chú ý c_đá khác c_nước).",
      "Bước 3: Giai đoạn chuyển thể (đường nằm ngang, nhiệt độ không đổi): dùng Q = λm (nóng chảy) hoặc Q = Lm (hóa hơi).",
      "Bước 4: Cộng tổng nhiệt lượng tất cả các giai đoạn: Q_tổng = Q₁ + Q₂ + ... + Q_n."
    ],
    pitfalls: "Đơn vị của λ và L rất lớn, đề bài thường cho dưới dạng kJ/kg (ví dụ λ = 334 kJ/kg = 334 000 J/kg, L = 2,26.10⁶ J/kg). Phải đồng nhất đơn vị J trước khi cộng với mcΔt."
  },
  {
    id: 5,
    title: "Dạng 5: Phương Trình Cân Bằng Nhiệt & Thuật Toán Biện Luận Pha",
    scope: "Bài 4, Bài 5 & Bài 6",
    icon: "fa-solid fa-scale-balanced",
    badge: "∑Q_tỏa = ∑Q_thu, Biện luận đá có tan hết không",
    formulas: [
      { name: "Phương trình cân bằng nhiệt cơ bản", tex: "\\sum Q_{\\text{tỏa}} = \\sum Q_{\\text{thu}} \\iff \\sum m_{\\text{tỏa}} c_{\\text{tỏa}} (t_{\\text{cao}} - t_{\\text{cb}}) = \\sum m_{\\text{thu}} c_{\\text{thu}} (t_{\\text{cb}} - t_{\\text{thấp}})" },
      { name: "Kể cả nhiệt lượng kế hấp thụ nhiệt", tex: "Q_{\\text{NLK}} = m_0 c_0 (t_{\\text{cb}} - t_0) \\text{ hoặc } C_0 (t_{\\text{cb}} - t_0)" }
    ],
    algorithm: [
      "Thuật toán giải bài toán hỗn hợp có chuyển thể (ví dụ: thả m₁ kg đá ở 0°C vào m₂ kg nước ở t₂ > 0°C):",
      "  + Bước 1: Tính nhiệt lượng cực đại mà nước có thể tỏa ra khi hạ về 0°C: Q_tỏa_max = m₂.c_nước.(t₂ - 0).",
      "  + Bước 2: Tính nhiệt lượng cần để m₁ kg đá tan hoàn toàn ở 0°C: Q_tan_hết = m₁.λ.",
      "  + Bước 3: So sánh biện luận:",
      "    * Trường hợp 1: Q_tỏa_max < Q_tan_hết => Đá CHỈ TAN MỘT PHẦN. Nhiệt độ cân bằng chắc chắn là t_cb = 0°C. Khối lượng đá đã tan: m_tan = Q_tỏa_max / λ. Khối lượng đá còn lại: m_đá_còn = m₁ - m_tan.",
      "    * Trường hợp 2: Q_tỏa_max = Q_tan_hết => Đá vừa tan hết, toàn bộ là nước ở t_cb = 0°C.",
      "    * Trường hợp 3: Q_tỏa_max > Q_tan_hết => Đá tan hết hoàn toàn và nước tiếp tục ấm lên t_cb > 0°C. Phương trình: Q_tỏa_max - Q_tan_hết = (m₁ + m₂).c_nước.(t_cb - 0) => Giải ra t_cb."
    ],
    pitfalls: "Không bao giờ được vội vàng viết ngay phương trình cân bằng nhiệt giả sử t_cb > 0°C khi chưa kiểm tra đá có tan hết hay không! Nếu đá không tan hết, t_cb luôn luôn bằng 0°C."
  },
  {
    id: 6,
    title: "Dạng 6: Nguồn Cấp Nhiệt, Công Suất Điện & Hiệu Suất (H)",
    scope: "Bài 4, Bài 5 & Bài 6 (Bếp điện, Ấm siêu tốc, Nhiên liệu)",
    icon: "fa-solid fa-bolt",
    badge: "Q_tp = P.t, Q_ích = H.P.t, Hao hụt chất lỏng",
    formulas: [
      { name: "Nhiệt lượng toàn phần do nguồn điện cấp", tex: "Q_{\\text{tp}} = \\mathcal{P} \\cdot t = U \\cdot I \\cdot t = I^2 R t = \\frac{U^2}{R} \\cdot t \\quad (t \\text{ tính bằng giây s})" },
      { name: "Nhiệt lượng do đốt cháy nhiên liệu cấp", tex: "Q_{\\text{tp}} = m_{\\text{nl}} \\cdot q \\quad (q: \\text{năng suất tỏa nhiệt, J/kg})" },
      { name: "Hiệu suất truyền nhiệt", tex: "H = \\frac{Q_{\\text{ích}}}{Q_{\\text{tp}}} \\implies Q_{\\text{ích}} = H \\cdot Q_{\\text{tp}} = H \\cdot \\mathcal{P} \\cdot t" },
      { name: "Lượng chất lỏng bay hơi sau thời gian đun sôi t", tex: "\\Delta m = \\frac{H \\cdot \\mathcal{P} \\cdot t}{L} \\implies m_{\\text{còn}} = m_{\\text{đầu}} - \\Delta m" },
      { name: "Tốc độ hao hụt khối lượng khi sôi liên tục", tex: "v_{\\text{bay hơi}} = \\frac{\\Delta m}{t} = \\frac{H \\cdot \\mathcal{P}}{L} \\quad (\\text{kg/s})" }
    ],
    algorithm: [
      "Bước 1: Xác định Q_tp: nếu là thiết bị điện thì Q_tp = P.t; nếu là đốt củi/ga/than thì Q_tp = m_nhiên_liệu . q.",
      "Bước 2: Xác định Q_ích: là nhiệt lượng trực tiếp làm tăng nhiệt độ vật (mcΔt) hoặc chuyển thể (λm, Lm).",
      "Bước 3: Liên hệ qua hiệu suất H: Q_ích = H . Q_tp (chú ý H = 80% nghĩa là nhân 0,8).",
      "Bước 4: Thời gian t bắt buộc phải đổi ra giây (s): 1 phút = 60 s, 1 giờ = 3600 s."
    ],
    pitfalls: "Quên đổi thời gian t ra giây (để nguyên phút hoặc giờ) sẽ dẫn đến kết quả sai lệch hàng chục đến hàng nghìn lần!"
  },
  {
    id: 7,
    title: "Dạng 7: Bài Toán Thực Tế - Chưng Cất & Độ Rượu (Độ Cồn)",
    scope: "Bài 6 (Nhiệt hóa hơi riêng)",
    icon: "fa-solid fa-wine-glass",
    badge: "Độ rượu = (V_rượu / V_hh) . 100°, Chưng cất ở 78,3°C",
    formulas: [
      { name: "Công thức định nghĩa độ rượu", tex: "\\text{Độ rượu} (^{\\circ}) = \\frac{V_{\\text{rượu nguyên chất}}}{V_{\\text{hỗn hợp (rượu + nước)}}} \\times 100^{\\circ}" },
      { name: "Khối lượng rượu hóa hơi khi chưng cất ở 78,3°C", tex: "\\Delta m_{\\text{rượu}} = \\frac{H \\cdot \\mathcal{P} \\cdot t}{L_{\\text{rượu}}}; \\quad \\Delta V_{\\text{rượu}} = \\frac{\\Delta m_{\\text{rượu}}}{D_{\\text{rượu}}}" },
      { name: "Lượng rượu còn lại trong bình sau khi chưng cất", tex: "V_{\\text{rượu còn}} = V_{\\text{rượu đầu}} - \\Delta V_{\\text{rượu}}; \\quad \\text{Độ rượu mới} = \\frac{V_{\\text{rượu còn}}}{V_{\\text{hỗn hợp còn}}} \\times 100^{\\circ}" }
    ],
    algorithm: [
      "Bước 1: Từ thể tích ban đầu V_hh và độ rượu ban đầu a°, tính thể tích rượu nguyên chất: V_rượu = V_hh . (a / 100). Thể tích nước: V_nước = V_hh - V_rượu.",
      "Bước 2: Đun hỗn hợp đến nhiệt độ sôi của rượu (78,3°C), ở nhiệt độ này rượu sôi và hóa hơi trước (nước chưa sôi đáng kể).",
      "Bước 3: Lập phương trình cấp nhiệt: Q_ích = H . P . t = Δm_rượu . L_rượu => Tính được lượng rượu bay hơi Δm_rượu và ΔV_rượu = Δm_rượu / D_rượu.",
      "Bước 4: Cập nhật thể tích rượu ngưng tụ thu được hoặc thể tích còn lại trong bình để tính độ rượu mới."
    ],
    pitfalls: "Khối lượng riêng của rượu nhẹ hơn nước (D_rượu ≈ 0,8 g/cm³ = 800 kg/m³ chứ không phải 1000 kg/m³ như nước). Phải dùng đúng D_rượu để đổi giữa Δm và ΔV."
  }
];

// Hàm lấy tất cả câu hỏi
window.getAllQuestions = function() {
  const all = [];
  if (window.DATA_B1) all.push(...window.DATA_B1);
  if (window.DATA_B2) all.push(...window.DATA_B2);
  if (window.DATA_B3) all.push(...window.DATA_B3);
  if (window.DATA_B4) all.push(...window.DATA_B4);
  if (window.DATA_B5) all.push(...window.DATA_B5);
  if (window.DATA_B6) all.push(...window.DATA_B6);
  return all;
};

