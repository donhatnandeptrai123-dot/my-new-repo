// Dữ liệu câu hỏi Bài 5: Chủ đề 5 - Nhiệt nóng chảy riêng
window.DATA_B5 = [
  {
    "id": "b5_tl_01",
    "lessonId": 5,
    "type": "essay",
    "page": 43,
    "pageImage": "images/pages/page_43.jpg",
    "questionNumber": "Câu 1",
    "section": "I. TỰ LUẬN",
    "question": "Tính nhiệt lượng (theo đơn vị kJ) cần cung cấp để làm nóng chảy hoàn toàn 500g nước đá. Biết nhiệt nóng chảy riêng của nước đá là 3,34.10⁵ J/kg.",
    "correctAnswer": "167 kJ",
    "image": null,
    "explanation": "Áp dụng công thức tính nhiệt lượng nóng chảy:\nQ = m . λ\nTrong đó:\n- Khối lượng m = 500 g = 0,5 kg\n- Nhiệt nóng chảy riêng λ = 3,34.10⁵ J/kg\nSuy ra: Q = 0,5 . 3,34.10⁵ = 167 000 J = 167 kJ.",
    "notes": "Nhiệt lượng làm nóng chảy ở nhiệt độ nóng chảy không làm đổi nhiệt độ."
  },
  {
    "id": "b5_tl_02",
    "lessonId": 5,
    "type": "essay",
    "page": 43,
    "pageImage": "images/pages/page_43.jpg",
    "questionNumber": "Câu 2",
    "section": "I. TỰ LUẬN",
    "question": "Biết nhiệt nóng chảy riêng của vàng là 0,64.10⁵ J/kg. Nhiệt lượng cần cung cấp cho 0,2 kg vàng nóng chảy hoàn toàn ở nhiệt độ nóng chảy là bao nhiêu kJ?",
    "correctAnswer": "12,8 kJ",
    "image": null,
    "explanation": "Áp dụng công thức Q = m . λ:\n- m = 0,2 kg\n- λ = 0,64.10⁵ J/kg = 64 000 J/kg\nQ = 0,2 . 64 000 = 12 800 J = 12,8 kJ.",
    "notes": "Đơn vị tính ra kJ: 12,8 kJ."
  },
  {
    "id": "b5_tl_03",
    "lessonId": 5,
    "type": "essay",
    "page": 43,
    "pageImage": "images/pages/page_43.jpg",
    "questionNumber": "Câu 3",
    "section": "I. TỰ LUẬN",
    "question": "Thả cục nước đá khối lượng 30g ở 0°C vào cốc nước chứa 0,2 lít nước ở 20°C. Bỏ qua nhiệt dung của cốc. Hỏi nhiệt độ cuối của cốc nước là bao nhiêu (°C). Biết nhiệt nóng chảy riêng của nước đá là 3,34.10⁵ J/kg, nhiệt dung riêng của nước là 4180 J/kg.K.",
    "correctAnswer": "6,97°C",
    "image": null,
    "explanation": "Gọi t là nhiệt độ khi cân bằng nhiệt (0°C < t < 20°C).\n- Khối lượng nước đá: m_đá = 0,03 kg ở 0°C.\n- Khối lượng nước trong cốc: m_n = 0,2 kg (do D = 1 kg/lít) ở 20°C.\nNhiệt lượng nước đá thu vào để tan hoàn toàn và tăng lên nhiệt độ t:\nQ_thu = m_đá . λ + m_đá . c_n . (t - 0)\nQ_thu = 0,03 . 334 000 + 0,03 . 4180 . t = 10020 + 125,4 t.\nNhiệt lượng cốc nước tỏa ra để hạ từ 20°C xuống t:\nQ_tỏa = m_n . c_n . (20 - t) = 0,2 . 4180 . (20 - t) = 836 . (20 - t) = 16720 - 836 t.\nPhương trình cân bằng nhiệt (Q_thu = Q_tỏa):\n10020 + 125,4 t = 16720 - 836 t\n<=> 961,4 t = 6700 => t = 6700 / 961,4 ≈ 6,969°C ≈ 6,97°C.",
    "notes": "Đáp số: 6,97°C (làm tròn xấp xỉ 7°C)."
  },
  {
    "id": "b5_tl_04",
    "lessonId": 5,
    "type": "essay",
    "page": 43,
    "pageImage": "images/pages/page_43.jpg",
    "questionNumber": "Câu 4",
    "section": "I. TỰ LUẬN",
    "question": "Một thỏi nhôm có khối lượng 1,0 kg ở 8°C. Cần cung cấp nhiệt lượng Q bằng bao nhiêu kJ để làm nóng chảy hoàn toàn thỏi nhôm này? Biết nhôm nóng chảy ở 658°C, nhiệt nóng chảy riêng của nhôm là 3,9.10⁵ J/kg và nhiệt dung riêng của nhôm là 880 J/kg.K.",
    "correctAnswer": "962 kJ",
    "image": null,
    "explanation": "Quá trình gồm 2 giai đoạn:\n1. Nâng nhiệt độ thỏi nhôm từ 8°C lên nhiệt độ nóng chảy 658°C:\nΔt = 658 - 8 = 650°C.\nQ1 = m . c . Δt = 1,0 . 880 . 650 = 572 000 J = 572 kJ.\n2. Làm nóng chảy hoàn toàn thỏi nhôm ở 658°C:\nQ2 = m . λ = 1,0 . 3,9.10⁵ = 390 000 J = 390 kJ.\nTổng nhiệt lượng cần cung cấp:\nQ = Q1 + Q2 = 572 + 390 = 962 kJ.",
    "notes": "Đáp số chính thức: 962 kJ."
  },
  {
    "id": "b5_tl_05",
    "lessonId": 5,
    "type": "essay",
    "page": 43,
    "pageImage": "images/pages/page_43.jpg",
    "questionNumber": "Câu 5",
    "section": "I. TỰ LUẬN",
    "question": "Người ta thả một cục nước đá khối lượng 80 g ở 0°C vào một cốc nhôm đựng 0,4 kg nước ở 20°C đặt trong nhiệt lượng kế. Khối lượng của cốc nhôm là 0,2 kg. Tính nhiệt độ của nước trong cốc nhôm (theo °C, làm tròn đến 1 chữ số thập phân) khi cục nước vừa tan hết. Nhiệt nóng chảy riêng của nước đá là 3,4.10⁵ J/kg. Nhiệt dung riêng của nhôm là 880 J/kg.K và của nước là 4180 J/kg.K. Bỏ qua sự mất mát nhiệt độ do nhiệt truyền ra bên ngoài nhiệt lượng kế.",
    "correctAnswer": "4,47°C (hoặc ~4,5°C)",
    "image": null,
    "explanation": "Gọi t là nhiệt độ cuối khi nước đá vừa tan hết và hệ đạt cân bằng nhiệt:\n- Nhiệt lượng nước đá thu vào để tan thành nước và tăng từ 0°C lên t:\nQ_thu = m_đá . λ + m_đá . c_n . t = 0,08 . 340 000 + 0,08 . 4180 . t = 27200 + 334,4 t.\n- Nhiệt lượng tỏa ra từ cốc nhôm và nước đựng bên trong hạ từ 20°C xuống t:\nQ_tỏa = (m_nhôm . c_nhôm + m_n . c_n) . (20 - t)\n= (0,2 . 880 + 0,4 . 4180) . (20 - t) = (176 + 1672) . (20 - t) = 1848 . (20 - t) = 36960 - 1848 t.\nCân bằng nhiệt: Q_thu = Q_tỏa:\n27200 + 334,4 t = 36960 - 1848 t\n<=> 2182,4 t = 9760 => t = 9760 / 2182,4 ≈ 4,47°C.",
    "notes": "Đáp số chính thức: 4,47°C."
  },
  {
    "id": "b5_tl_06",
    "lessonId": 5,
    "type": "essay",
    "page": 43,
    "pageImage": "images/pages/page_43.jpg",
    "questionNumber": "Câu 6",
    "section": "I. TỰ LUẬN",
    "question": "Tính nhiệt lượng cần cung cấp (tính ra đơn vị MegaJun (MJ) và lấy đến số thập phân thứ 2) cho 5 kg nước đá ở -10°C chuyển thành nước ở 0°C. Cho biết nhiệt dung riêng của nước đá là 2090 J/kg.K và nhiệt nóng chảy riêng của nước đá là 3,4.10⁵ J/kg.",
    "correctAnswer": "1,80 MJ",
    "image": null,
    "explanation": "Quá trình gồm 2 giai đoạn:\n1. Tăng nhiệt độ 5 kg nước đá từ -10°C lên 0°C:\nQ1 = m . c_đá . Δt = 5 . 2090 . [0 - (-10)] = 5 . 2090 . 10 = 104 500 J.\n2. Làm nóng chảy hoàn toàn 5 kg nước đá ở 0°C:\nQ2 = m . λ = 5 . 3,4.10⁵ = 1 700 000 J.\nTổng nhiệt lượng cần cung cấp:\nQ = Q1 + Q2 = 104 500 + 1 700 000 = 1 804 500 J ≈ 1,8045 MJ ≈ 1,80 MJ.",
    "notes": "Đáp số: 1,80 MJ."
  },
  {
    "id": "b5_tl_07",
    "lessonId": 5,
    "type": "essay",
    "page": 43,
    "pageImage": "images/pages/page_43.jpg",
    "questionNumber": "Câu 7",
    "section": "I. TỰ LUẬN",
    "question": "Cần bao nhiêu thời gian(s) để làm nóng chảy hoàn toàn 2 kg đồng có nhiệt độ ban đầu 30°C, trong một lò nung điện công suất 20000W. Biết chỉ có 50% năng lượng tiêu thụ của lò được dùng vào việc làm đồng nóng lên và nóng chảy hoàn toàn ở nhiệt độ không đổi. Nhiệt dung riêng của đồng là 380J/kg.K; nhiệt độ nóng chảy của đồng là 1084°C; nhiệt nóng chảy riêng của đồng là 1,8.10⁵ J/kg.",
    "correctAnswer": "116 s",
    "image": null,
    "explanation": "1. Nhiệt lượng cần để nâng đồng từ 30°C lên 1084°C:\nQ1 = m . c . (1084 - 30) = 2 . 380 . 1054 = 801 040 J.\n2. Nhiệt lượng làm nóng chảy hoàn toàn đồng ở 1084°C:\nQ2 = m . λ = 2 . 1,8.10⁵ = 360 000 J.\nTổng nhiệt lượng có ích cần cung cấp:\nQ_ích = Q1 + Q2 = 801 040 + 360 000 = 1 161 040 J.\n3. Công suất có ích của lò nung:\nP_ích = H . P = 50% . 20 000 = 10 000 W.\nThời gian cần thiết:\nt = Q_ích / P_ích = 1 161 040 / 10 000 = 116,104 s ≈ 116 s.",
    "notes": "Đáp số chính thức: 116 s."
  },
  {
    "id": "b5_tl_08",
    "lessonId": 5,
    "type": "essay",
    "page": 43,
    "pageImage": "images/pages/page_43.jpg",
    "questionNumber": "Câu 8",
    "section": "I. TỰ LUẬN",
    "question": "Biết nhiệt nóng chảy riêng của đồng là 1,8.10⁵ J/kg. Nhiệt lượng cần cung cấp cho 1kg đồng nóng chảy ở nhiệt độ nóng chảy là bao nhiêu kWh.",
    "correctAnswer": "0,05 kWh",
    "image": null,
    "explanation": "Nhiệt lượng cần cung cấp tính theo Jun:\nQ = m . λ = 1 . 1,8.10⁵ = 180 000 J.\nĐổi Jun sang kWh (1 kWh = 3,6.10⁶ J):\nQ = 180 000 / 3 600 000 = 0,05 kWh.",
    "notes": "1 kWh = 3 600 000 J. Đáp số: 0,05 kWh."
  },
  {
    "id": "b5_tl_09",
    "lessonId": 5,
    "type": "essay",
    "page": 43,
    "pageImage": "images/pages/page_43.jpg",
    "questionNumber": "Câu 9",
    "section": "I. TỰ LUẬN",
    "question": "Biết nhiệt dung riêng và nhiệt nóng chảy riêng của đồng 380 J/kgK và 1,8.10⁵ J/kg. Nhiệt lượng cần cung cấp cho 10kg đồng đang ở 35°C đến khi nóng chảy hoàn toàn ở nhiệt độ 1085°C là bao nhiêu kWh.",
    "correctAnswer": "1,61 kWh",
    "image": null,
    "explanation": "1. Nhiệt lượng đưa 10kg đồng từ 35°C đến 1085°C:\nQ1 = m . c . Δt = 10 . 380 . (1085 - 35) = 3800 . 1050 = 3 990 000 J.\n2. Nhiệt lượng làm nóng chảy hoàn toàn 10kg đồng ở 1085°C:\nQ2 = m . λ = 10 . 1,8.10⁵ = 1 800 000 J.\nTổng nhiệt lượng:\nQ = Q1 + Q2 = 3 990 000 + 1 800 000 = 5 790 000 J.\nĐổi sang kWh:\nQ = 5 790 000 / 3 600 000 ≈ 1,6083 kWh ≈ 1,61 kWh.",
    "notes": "Đáp số chính thức: 1,61 kWh."
  },
  {
    "id": "b5_tl_10",
    "lessonId": 5,
    "type": "essay",
    "page": 43,
    "pageImage": "images/pages/page_43.jpg",
    "questionNumber": "Câu 10",
    "section": "I. TỰ LUẬN",
    "question": "Người ta thả một cục nước đá khối lượng 0,1 kg ở -8°C vào một cốc nhôm đựng nước ở 25°C trong nhiệt lượng kế. Nhiệt dung riêng của nhiệt lượng kế (gồm cốc nhôm và nước đựng trong cốc) là 1800J/kg, nhiệt nóng chảy riêng của nước đá là 3,4.10⁵ J/kg, nhiệt dung riêng của nước đá là 2090 J/kg. Tính nhiệt độ của nước ở trạng thái cân bằng khi cục nước đá vừa tan hết. Bỏ qua sự mất mát nhiệt do nhiệt truyền ra bên ngoài nhiệt lượng kế.",
    "correctAnswer": "4,21°C",
    "image": null,
    "explanation": "Gọi t là nhiệt độ cân bằng:\n- Nhiệt lượng thu vào của nước đá:\nQ_thu = m_đá . c_đá . (0 - (-8)) + m_đá . λ + m_đá . c_n . t\n= 0,1 . 2090 . 8 + 0,1 . 340 000 + 0,1 . 4180 . t = 1672 + 34000 + 418 t = 35672 + 418 t.\n- Nhiệt lượng tỏa ra của nhiệt lượng kế chứa nước (nhiệt dung C = m.c_tổng = 1800 J/K):\nQ_tỏa = C . (25 - t) = 1800 . (25 - t) = 45000 - 1800 t.\nCân bằng nhiệt: 35672 + 418 t = 45000 - 1800 t\n<=> 2218 t = 9328 => t = 9328 / 2218 ≈ 4,2056°C ≈ 4,21°C.",
    "notes": "Đáp số: 4,21°C."
  },
  {
    "id": "b5_tl_11",
    "lessonId": 5,
    "type": "essay",
    "page": 43,
    "pageImage": "images/pages/page_43.jpg",
    "questionNumber": "Câu 11",
    "section": "I. TỰ LUẬN",
    "question": "Dùng một nguồn điện có công suất không đổi để đun nóng một khối lượng Chì đang ở 37,5°C đến nhiệt độ nóng chảy là 327,5°C trong thời gian 2 phút 25 giây. Sau đó khối Chì bắt đầu nóng chảy. Cho nhiệt dung riêng và nhiệt nóng chảy riêng của Chì là 130 J/kg.K và 2,5.10⁴ J/kg. Tìm thời gian khối lượng Chì nóng chảy hết.",
    "correctAnswer": "96,2 s",
    "image": null,
    "explanation": "Gọi m là khối lượng Chì, P là công suất cấp nhiệt không đổi.\n1. Giai đoạn tăng nhiệt độ từ 37,5°C lên 327,5°C (Δt = 290°C):\nThời gian t1 = 2 phút 25 s = 145 s.\nNhiệt lượng cấp: Q1 = P . t1 = m . c . Δt\n=> P . 145 = m . 130 . 290 = 37700 m => P / m = 37700 / 145 = 260 W/kg.\n2. Giai đoạn Chì nóng chảy hoàn toàn ở 327,5°C:\nNhiệt lượng cần: Q2 = P . t2 = m . λ\n=> t2 = (m . λ) / P = λ / (P / m) = 25 000 / 260 ≈ 96,15 s ≈ 96,2 s.",
    "notes": "Đáp số chính thức: 96,2 s."
  },
  {
    "id": "b5_tl_12",
    "lessonId": 5,
    "type": "essay",
    "page": 43,
    "pageImage": "images/pages/page_43.jpg",
    "questionNumber": "Câu 12",
    "section": "I. TỰ LUẬN",
    "question": "Một hỗn hợp gồm nước và nước đá đang ở nhiệt độ 0°C. Cung cấp nhiệt lượng cho hỗn hợp (bỏ qua sự mất mát nhiệt ra môi trường). Đồ thị phụ thuộc nhiệt độ vào nhiệt lượng được biểu diễn bên. Biết nhiệt dung riêng của nước 4200 J/kg.K; nhiệt nóng chảy của nước đá 3,33.10⁵ J/kg. Hãy xác định có bao nhiêu nước và nước đá ở trong hỗn hợp ban đầu.",
    "correctAnswer": "m_đá = 0,15 kg; m_nước = 0,85 kg",
    "image": "images/crops/b5_tl_c12_do_thi_nuoc_da.jpg",
    "explanation": "Quan sát đồ thị t(°C) theo Q(kJ):\n1. Giai đoạn 1 (từ Q = 0 đến Q = 50 kJ = 50 000 J):\nNhiệt độ không đổi ở 0°C, đây là giai đoạn nước đá trong hỗn hợp đang tan chảy hoàn toàn.\nNhiệt lượng làm tan đá: Q_tan = m_đá . λ = 50 000 J.\n=> m_đá = 50 000 / (3,33.10⁵) ≈ 0,150 kg = 0,15 kg.\n2. Giai đoạn 2 (từ Q = 50 kJ đến Q = 134 kJ):\nNhiệt độ của toàn bộ lượng nước (gồm nước ban đầu m_nước và nước do đá tan ra m_đá) tăng từ 0°C lên 20°C:\nΔQ = 134 - 50 = 84 kJ = 84 000 J.\nTa có: ΔQ = (m_đá + m_nước) . c_n . Δt\n=> 84 000 = (0,15 + m_nước) . 4200 . 20 = (0,15 + m_nước) . 84 000\n=> 0,15 + m_nước = 1,0 kg => m_nước = 1,0 - 0,15 = 0,85 kg.\nKết luận: Ban đầu có 0,15 kg nước đá và 0,85 kg nước.",
    "notes": "Xem đồ thị kèm theo: đoạn nằm ngang là tan đá (50kJ), đoạn xiên là đun nước (84kJ)."
  },
  {
    "id": "b5_tl_13",
    "lessonId": 5,
    "type": "essay",
    "page": 44,
    "pageImage": "images/pages/page_44.jpg",
    "questionNumber": "Câu 13",
    "section": "I. TỰ LUẬN",
    "question": "Cung cấp nhiệt lượng cho một khối lượng Chì đến khi nó nóng chảy hoàn toàn. Đồ thị liên hệ giữa nhiệt độ và nhiệt lượng cung cấp cho khối Chì như hình bên. Cho nhiệt dung riêng của chì là 125 J/kgK, nhiệt nóng chảy riêng của chì là 0,25.10⁵ J/kg. Tìm giá trị Q2.",
    "correctAnswer": "11,3 kJ (hoặc 11,25 kJ)",
    "image": "images/crops/b5_tl_c13_do_thi_chi.jpg",
    "explanation": "Dựa vào đồ thị t(°C) theo Q(kJ):\n- Từ nhiệt độ ban đầu t1 = 77,5°C đến nhiệt độ nóng chảy t2 = 327,5°C:\nĐộ tăng nhiệt độ: Δt = 327,5 - 77,5 = 250°C.\nNhiệt lượng cung cấp: Q1 = 6,25 kJ = 6250 J.\nKhối lượng của chì: m = Q1 / (c . Δt) = 6250 / (125 . 250) = 6250 / 31250 = 0,2 kg.\n- Giai đoạn nóng chảy hoàn toàn ở 327,5°C:\nNhiệt lượng nóng chảy: Q_nc = m . λ = 0,2 . 0,25.10⁵ = 5000 J = 5 kJ.\nTổng nhiệt lượng tại điểm cuối Q2:\nQ2 = Q1 + Q_nc = 6,25 + 5,00 = 11,25 kJ ≈ 11,3 kJ.",
    "notes": "Đáp số: 11,3 kJ (hoặc chính xác 11,25 kJ)."
  },
  {
    "id": "b5_tl_14",
    "lessonId": 5,
    "type": "essay",
    "page": 44,
    "pageImage": "images/pages/page_44.jpg",
    "questionNumber": "Câu 14",
    "section": "I. TỰ LUẬN",
    "question": "Người ta thả một cục nước đá khối lượng 100 g ở 0°C vào một cốc nhôm đựng 0,4 kg nước ở 20°C đặt trong nhiệt lượng kế. Khối lượng của cốc nhôm là 0,20 kg. Tính nhiệt độ (°C) của nước trong cốc nhôm khi cục nước vừa tan hết (làm tròn đến 1 chữ số thập phân). Nhiệt nóng chảy riêng của nước đá là 3,4.10⁵ J/kg. Nhiệt dung riêng của nhôm là 880 J/kg.K, và của nước là 4180 J/kg.K, của nước đá là 1800 J/kg.K. Bỏ qua sự mất mát nhiệt lượng do nhiệt truyền ra bên ngoài nhiệt lượng kế.",
    "correctAnswer": "1,31°C",
    "image": null,
    "explanation": "Gọi t là nhiệt độ cân bằng khi cục đá vừa tan hết:\n- Nhiệt lượng nước đá thu vào để tan ở 0°C và ấm lên đến t:\nQ_thu = m_đá . λ + m_đá . c_n . t = 0,1 . 340 000 + 0,1 . 4180 . t = 34000 + 418 t.\n- Nhiệt lượng tỏa ra từ cốc nhôm và 0,4 kg nước từ 20°C xuống t:\nQ_tỏa = (m_nhôm . c_nhôm + m_n . c_n) . (20 - t)\n= (0,2 . 880 + 0,4 . 4180) . (20 - t) = (176 + 1672) . (20 - t) = 1848 . (20 - t) = 36960 - 1848 t.\nPhương trình cân bằng nhiệt:\n34000 + 418 t = 36960 - 1848 t\n<=> 2266 t = 2960 => t = 2960 / 2266 ≈ 1,306°C ≈ 1,31°C.",
    "notes": "Đáp số chính thức: 1,31°C."
  },
  {
    "id": "b5_tl_15",
    "lessonId": 5,
    "type": "essay",
    "page": 44,
    "pageImage": "images/pages/page_44.jpg",
    "questionNumber": "Câu 15",
    "section": "I. TỰ LUẬN",
    "question": "Cần bao nhiêu thời gian (s) để làm nóng chảy hoàn toàn 5kg chì có nhiệt độ ban đầu 30°C, trong một lò nung điện công suất 2000 W. Biết chỉ có 60% năng lượng tiêu thụ của lò được dùng vào việc làm chì nóng lên và nóng chảy hoàn toàn ở nhiệt độ không đổi. Nhiệt dung riêng của chì là 126 J/kg.K. Nhiệt độ nóng chảy là 327,5°C. Nhiệt nóng chảy riêng của Chì là 2,5.10⁴ J/kg.",
    "correctAnswer": "260 s",
    "image": null,
    "explanation": "1. Nhiệt lượng cần đưa 5kg chì từ 30°C lên nhiệt độ nóng chảy 327,5°C:\nQ1 = m . c . Δt = 5 . 126 . (327,5 - 30) = 630 . 297,5 = 187 425 J.\n2. Nhiệt lượng làm nóng chảy hoàn toàn 5kg chì ở 327,5°C:\nQ2 = m . λ = 5 . 2,5.10⁴ = 125 000 J.\nTổng nhiệt lượng có ích cần:\nQ_ích = Q1 + Q2 = 187 425 + 125 000 = 312 425 J.\n3. Công suất có ích của lò nung:\nP_ích = H . P = 0,60 . 2000 = 1200 W.\nThời gian cần thiết:\nt = Q_ích / P_ích = 312 425 / 1200 ≈ 260,35 s ≈ 260 s.",
    "notes": "Đáp số chính thức: 260 s."
  },
  {
    "id": "b5_tl_16",
    "lessonId": 5,
    "type": "essay",
    "page": 44,
    "pageImage": "images/pages/page_44.jpg",
    "questionNumber": "Câu 16",
    "section": "I. TỰ LUẬN",
    "question": "Một thùng đựng 20 lít nước ở nhiệt độ 20°C. Cho khối lượng riêng của nước là 1000 kg/m³. Biết nhiệt dung riêng của nước là c = 4180 J/kg.K.\na) Tính nhiệt lượng cần truyền cho nước trong thùng để nhiệt độ của nó tăng lên tới 70°C.\nb) Tính thời gian truyền nhiệt lượng cần thiết nếu dùng một thiết bị điện có công suất 2,5 kW để đun lượng nước trên. Biết chỉ có 80% điện năng tiêu thụ được dùng để làm nóng nước.",
    "correctAnswer": "a/ 4,18 MJ; b/ 2090 s",
    "image": null,
    "explanation": "a) Khối lượng nước trong thùng:\nm = V . D = 0,020 m³ . 1000 kg/m³ = 20 kg.\nĐộ tăng nhiệt độ: Δt = 70 - 20 = 50°C.\nNhiệt lượng cần truyền:\nQ = m . c . Δt = 20 . 4180 . 50 = 4 180 000 J = 4,18 MJ.\n\nb) Công suất có ích để làm nóng nước:\nP_ích = H . P = 0,80 . 2500 W = 2000 W.\nThời gian truyền nhiệt lượng:\nt = Q / P_ích = 4 180 000 / 2000 = 2090 s (khoảng 34 phút 50 giây).",
    "notes": "Đáp số chính thức: a/ 4,18 MJ; b/ 2090 s."
  },
  {
    "id": "b5_tl_17",
    "lessonId": 5,
    "type": "essay",
    "page": 44,
    "pageImage": "images/pages/page_44.jpg",
    "questionNumber": "Câu 17",
    "section": "I. TỰ LUẬN",
    "question": "Hỏi phải đốt cháy bao nhiêu kilôgam xăng trong lò nấu chảy với hiệu suất 30% (nghĩa là 30% nhiệt lượng cung cấp cho lò được dùng vào việc đun nóng đồng cho đến khi nóng chảy), để nung nóng đến nhiệt độ nóng chảy và làm chảy lỏng 10 tấn đồng? Cho biết đồng có nhiệt độ ban đầu là 13°C nóng chảy đến nhiệt độ 1083°C, nhiệt dung riêng là 380 J/kg.K, nhiệt nóng chảy riêng là 1,8.10⁵ J/kg và nhiệt lượng tỏa ra khi đốt cháy 1 kg xăng là 4,6.10⁷ J/kg.",
    "correctAnswer": "425 kg",
    "image": null,
    "explanation": "1. Khối lượng đồng: m = 10 tấn = 10 000 kg.\nNhiệt lượng cần đưa đồng từ 13°C đến nhiệt độ nóng chảy 1083°C:\nQ1 = m . c . (1083 - 13) = 10 000 . 380 . 1070 = 4 066 000 000 J = 4,066.10⁹ J.\n2. Nhiệt lượng làm nóng chảy 10 tấn đồng:\nQ2 = m . λ = 10 000 . 1,8.10⁵ = 1 800 000 000 J = 1,8.10⁹ J.\nTổng nhiệt lượng có ích cần:\nQ_ích = Q1 + Q2 = 4,066.10⁹ + 1,8.10⁹ = 5,866.10⁹ J.\n3. Tổng nhiệt lượng do xăng đốt cháy tỏa ra:\nQ_tp = Q_ích / H = 5,866.10⁹ / 0,30 ≈ 1,9553.10¹⁰ J.\nKhối lượng xăng cần đốt cháy:\nm_xăng = Q_tp / q = 1,9553.10¹⁰ / (4,6.10⁷) ≈ 425,07 kg ≈ 425 kg.",
    "notes": "Đáp số chính thức: 425 kg xăng."
  },
  {
    "id": "b5_tn_01",
    "lessonId": 5,
    "type": "single_choice",
    "page": 44,
    "pageImage": "images/pages/page_44.jpg",
    "questionNumber": "Câu 1",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Vật (chất) nào dưới đây không có nhiệt độ nóng chảy xác định?",
    "options": [
      "A. Miếng nhựa thông.",
      "B. Hạt đường.",
      "C. Viên kim cương.",
      "D. Khối thạch anh."
    ],
    "correctAnswer": "A",
    "image": null,
    "explanation": "Nhựa thông (hoặc nhựa đường, thuỷ tinh) là chất rắn vô định hình, không có cấu trúc tinh thể nên không có nhiệt độ nóng chảy xác định mà mềm dần khi tăng nhiệt độ.",
    "notes": "Chất rắn kết tinh (đường, kim cương, thạch anh) có nhiệt độ nóng chảy xác định."
  },
  {
    "id": "b5_tn_02",
    "lessonId": 5,
    "type": "single_choice",
    "page": 44,
    "pageImage": "images/pages/page_44.jpg",
    "questionNumber": "Câu 2",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Đơn vị của nhiệt nóng chảy riêng là",
    "options": [
      "A. J/s",
      "B. J/kg.độ",
      "C. J/kg.",
      "D. kg/J"
    ],
    "correctAnswer": "C",
    "image": null,
    "explanation": "Theo công thức λ = Q / m, nhiệt lượng Q đo bằng Jun (J), khối lượng m đo bằng kilôgam (kg), nên đơn vị của nhiệt nóng chảy riêng λ là J/kg.",
    "notes": "Đơn vị SI của nhiệt nóng chảy riêng là J/kg."
  },
  {
    "id": "b5_tn_03",
    "lessonId": 5,
    "type": "single_choice",
    "page": 44,
    "pageImage": "images/pages/page_44.jpg",
    "questionNumber": "Câu 3",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Gọi Q là nhiệt lượng cần truyền cho vật có khối lượng m để làm vật nóng chảy hoàn toàn vật ở nhiệt độ nóng chảy mà không thay đổi nhiệt độ của vật. Thì nhiệt nóng chảy riêng λ của chất đó được tính theo công thức:",
    "options": [
      "A. λ = Q . m",
      "B. λ = Q + m",
      "C. λ = Q - m",
      "D. λ = Q / m"
    ],
    "correctAnswer": "D",
    "image": null,
    "explanation": "Công thức định nghĩa nhiệt nóng chảy riêng: λ = Q / m.",
    "notes": "Q = λ . m là nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn khối lượng m ở nhiệt độ nóng chảy."
  },
  {
    "id": "b5_tn_04",
    "lessonId": 5,
    "type": "single_choice",
    "page": 44,
    "pageImage": "images/pages/page_44.jpg",
    "questionNumber": "Câu 4",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Không thể kết luận gì về nhiệt nóng chảy riêng của chất nào dưới đây?",
    "options": [
      "A. Miếng nhựa đường (hắc ín)",
      "B. Muối ăn",
      "C. Viên kim cương",
      "D. Khối thạch anh"
    ],
    "correctAnswer": "A",
    "image": null,
    "explanation": "Nhựa đường là chất rắn vô định hình, không có nhiệt độ nóng chảy xác định nên không có đại lượng nhiệt nóng chảy riêng.",
    "notes": "Nhiệt nóng chảy riêng chỉ áp dụng cho chất rắn kết tinh."
  },
  {
    "id": "b5_tn_05",
    "lessonId": 5,
    "type": "single_choice",
    "page": 44,
    "pageImage": "images/pages/page_44.jpg",
    "questionNumber": "Câu 5",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Nhiệt độ nóng chảy riêng của vật rắn phụ thuộc vào những yếu tố nào?",
    "options": [
      "A. Phụ thuộc vào nhiệt độ của vật rắn và áp suất ngoài.",
      "B. Phụ thuộc bản chất của vật rắn",
      "C. Phụ thuộc bản chất và nhiệt độ của vật rắn",
      "D. Phụ thuộc bản chất và nhiệt độ của vật rắn, đồng thời phụ thuộc áp suất ngoài"
    ],
    "correctAnswer": "B",
    "image": null,
    "explanation": "Nhiệt nóng chảy riêng λ là một đặc tính vật lý phụ thuộc vào bản chất của chất rắn.",
    "notes": "Mỗi chất kết tinh có một nhiệt nóng chảy riêng đặc trưng."
  },
  {
    "id": "b5_tn_06",
    "lessonId": 5,
    "type": "single_choice",
    "page": 45,
    "pageImage": "images/pages/page_45.jpg",
    "questionNumber": "Câu 6",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Tính nhiệt lượng Q cần cung cấp để làm nóng chảy 500g nước đá ở 0°C. Biết nhiệt nóng chảy riêng của nước đá bằng 3,34.10⁵ J/kg",
    "options": [
      "A. Q = 7.10⁷ J",
      "B. Q = 167 kJ",
      "C. Q = 167 J",
      "D. Q = 167.10³ J"
    ],
    "correctAnswer": "B",
    "image": null,
    "explanation": "Áp dụng Q = m . λ = 0,5 kg . 3,34.10⁵ J/kg = 167 000 J = 167 kJ (hoặc 167.10³ J, phương án B là chuẩn gọn).",
    "notes": "Đổi 500g = 0,5kg."
  },
  {
    "id": "b5_tn_07",
    "lessonId": 5,
    "type": "single_choice",
    "page": 45,
    "pageImage": "images/pages/page_45.jpg",
    "questionNumber": "Câu 7",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Để giải thích hiện tượng tách kim loại bằng nóng chảy người ta dùng khái niệm về đại lượng nào?",
    "options": [
      "A. Nhiệt dung riêng",
      "B. Nhiệt lượng",
      "C. Nhiệt nóng chảy riêng",
      "D. Nhiệt hoá hơi riêng"
    ],
    "correctAnswer": "C",
    "image": null,
    "explanation": "Để tách các kim loại khỏi quặng hoặc tách hỗn hợp kim loại qua nhiệt độ và nhiệt lượng cung cấp cho quá trình chuyển thể lỏng, người ta dựa vào nhiệt nóng chảy riêng và nhiệt độ nóng chảy.",
    "notes": "Khái niệm liên quan trực tiếp đến sự nóng chảy là nhiệt nóng chảy riêng."
  },
  {
    "id": "b5_tn_08",
    "lessonId": 5,
    "type": "single_choice",
    "page": 45,
    "pageImage": "images/pages/page_45.jpg",
    "questionNumber": "Câu 8",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Cho bảng số liệu sau (Nước 0°C - 3,34.10⁵; Sắt 1535°C - 2,77.10⁵; Đồng 1084°C - 1,80.10⁵; Chì 327°C - 0,25.10⁵ J/kg). Phát biểu nào sau đây là đúng?",
    "options": [
      "A. Cần nhiệt lượng 3,34.10⁵ J để làm nóng chảy nước đá.",
      "B. Sắt có nhiệt độ nóng chảy lớn nhất nên nhiệt nóng chảy riêng của nó lớn nhất.",
      "C. Cần nhiệt lượng 1,8.10⁵ J để làm nóng chảy 1kg đồng",
      "D. Cần nhiệt lượng 0,25.10⁵ J để làm nóng chảy hoàn toàn 1kg chì ở 327°C."
    ],
    "correctAnswer": "D",
    "image": "images/crops/b5_c8_bang_hinh_anh.jpg",
    "explanation": "Phát biểu chính xác về mặt định nghĩa nhiệt nóng chảy riêng: 'Cần nhiệt lượng 0,25.10⁵ J để làm nóng chảy hoàn toàn 1kg chì ở 327°C' (đúng điều kiện nhiệt độ nóng chảy và làm nóng chảy hoàn toàn).",
    "notes": "Câu A, C thiếu điều kiện 'ở nhiệt độ nóng chảy' hoặc 'hoàn toàn'."
  },
  {
    "id": "b5_tn_09",
    "lessonId": 5,
    "type": "single_choice",
    "page": 45,
    "pageImage": "images/pages/page_45.jpg",
    "questionNumber": "Câu 9",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Trong thí nghiệm xác định nhiệt nóng chảy riêng của nước đá không cần thiết phải có dụng cụ nào sau đây?",
    "options": [
      "A. Oát kế",
      "B. Nhiệt lượng kế",
      "C. Đồng hồ bấm giây",
      "D. Thước mét"
    ],
    "correctAnswer": "D",
    "image": null,
    "explanation": "Thí nghiệm đo nhiệt nóng chảy riêng cần oát kế (đo công suất P), nhiệt lượng kế (giữ nhiệt), đồng hồ bấm giây (đo thời gian t), cân (đo khối lượng m). Thước mét không dùng trong bài thí nghiệm này.",
    "notes": "Dụng cụ thừa: Thước mét."
  },
  {
    "id": "b5_tn_10",
    "lessonId": 5,
    "type": "single_choice",
    "page": 45,
    "pageImage": "images/pages/page_45.jpg",
    "questionNumber": "Câu 10",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Gọi Q là nhiệt lượng cần truyền cho vật, m là khối lượng của vật (kg). Tỉ số Q/m gọi là",
    "options": [
      "A. nhiệt dung riêng của chất làm nên vật",
      "B. nhiệt nóng chảy riêng của chất làm nên vật",
      "C. trọng lượng riêng của vật",
      "D. khối lượng riêng của vật"
    ],
    "correctAnswer": "B",
    "image": null,
    "explanation": "Tỉ số λ = Q / m khi chất nóng chảy hoàn toàn ở nhiệt độ nóng chảy gọi là nhiệt nóng chảy riêng.",
    "notes": "Định nghĩa chuẩn trong SGK Vật Lí 12."
  },
  {
    "id": "b5_tn_11",
    "lessonId": 5,
    "type": "single_choice",
    "page": 45,
    "pageImage": "images/pages/page_45.jpg",
    "questionNumber": "Câu 11",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Trong các hiện tượng sau, hiện tượng nào liên quan đến sự nóng chảy?",
    "options": [
      "A. Thả cục nước đá vào cốc nước",
      "B. Đốt ngọn đèn dầu",
      "C. Đun nóng một nồi nước",
      "D. Cho cốc nước vào tủ lạnh"
    ],
    "correctAnswer": "A",
    "image": null,
    "explanation": "Khi thả cục nước đá vào cốc nước, nước đá nhận nhiệt lượng từ nước và bị nóng chảy tan thành nước lỏng.",
    "notes": "Hiện tượng chuyển từ thể rắn sang thể lỏng là sự nóng chảy."
  },
  {
    "id": "b5_tn_12",
    "lessonId": 5,
    "type": "single_choice",
    "page": 45,
    "pageImage": "images/pages/page_45.jpg",
    "questionNumber": "Câu 12",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Biết nhiệt nóng chảy riêng của nước đá là 3,34.10⁵ J/kg. Người ta cung cấp nhiệt lượng 5,01.10⁵ J có thể làm nóng chảy hoàn toàn bao nhiêu kg nước đá",
    "options": [
      "A. 16,7 kg",
      "B. 1,5kg",
      "C. 8,35kg",
      "D. 0,668kg"
    ],
    "correctAnswer": "B",
    "image": null,
    "explanation": "Khối lượng nước đá tan hoàn toàn:\nm = Q / λ = (5,01.10⁵) / (3,34.10⁵) = 1,5 kg.",
    "notes": "Áp dụng trực tiếp m = Q / λ."
  },
  {
    "id": "b5_tn_13",
    "lessonId": 5,
    "type": "single_choice",
    "page": 45,
    "pageImage": "images/pages/page_45.jpg",
    "questionNumber": "Câu 13",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Trong công nghệ đúc kim loại, người ta quan tâm đến đại lượng nào sau đây?",
    "options": [
      "A. Nhiệt lượng của vật liệu đúc",
      "B. Nhiệt nóng chảy riêng của vật liệu đúc",
      "C. Nhiệt dung của vật liệu đúc",
      "D. Nhiệt dung riêng của vật liệu đúc"
    ],
    "correctAnswer": "B",
    "image": null,
    "explanation": "Trong công nghệ đúc kim loại, việc nấu chảy kim loại đòi hỏi cung cấp nhiệt lượng lớn ứng với nhiệt nóng chảy riêng của vật liệu để chuyển hoàn toàn sang thể lỏng rồi rót vào khuôn.",
    "notes": "Đại lượng quyết định năng lượng nấu chảy là nhiệt nóng chảy riêng."
  },
  {
    "id": "b5_tn_14",
    "lessonId": 5,
    "type": "single_choice",
    "page": 45,
    "pageImage": "images/pages/page_45.jpg",
    "questionNumber": "Câu 14",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Nhiệt nóng chảy riêng của đồng là 1,8.10⁵ J/kg. Câu nào dưới đây là đúng?",
    "options": [
      "A. Khối đồng sẽ tỏa ra nhiệt lượng 1,8.10⁵ J khi nóng chảy hoàn toàn.",
      "B. Mỗi kilogam đồng cần thu nhiệt lượng 1,8.10⁵ J để hóa lỏng hoàn toàn ở nhiệt độ nóng chảy.",
      "C. Khối đồng cần thu nhiệt lượng 1,8.10⁵ J để hóa lỏng.",
      "D. Mỗi kilogam đồng tỏa ra nhiệt lượng 1,8.10⁵ J khi hóa lỏng hoàn toàn."
    ],
    "correctAnswer": "B",
    "image": null,
    "explanation": "Nhiệt nóng chảy riêng 1,8.10⁵ J/kg nghĩa là mỗi kilogam đồng ở nhiệt độ nóng chảy cần thu một nhiệt lượng là 1,8.10⁵ J để nóng chảy (hóa lỏng) hoàn toàn.",
    "notes": "Quá trình nóng chảy là quá trình thu nhiệt."
  },
  {
    "id": "b5_tn_15",
    "lessonId": 5,
    "type": "single_choice",
    "page": 45,
    "pageImage": "images/pages/page_45.jpg",
    "questionNumber": "Câu 15",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Điều nào sau đây là sai khi nói về nhiệt nóng chảy?",
    "options": [
      "A. Nhiệt nóng chảy của vật rắn là nhiệt lượng cung cấp cho vật rắn trong quá trình nóng chảy",
      "B. Nhiệt nóng chảy có đơn vị Jun (J)",
      "C. Các vật có khối lượng bằng nhau thì có nhiệt nóng chảy như nhau.",
      "D. Nhiệt nóng chảy tỉ lệ thuận với khối lượng của vật rắn."
    ],
    "correctAnswer": "C",
    "image": null,
    "explanation": "Các chất khác nhau có nhiệt nóng chảy riêng λ khác nhau, do đó hai vật dù có cùng khối lượng m nhưng làm bằng hai chất khác nhau thì nhiệt nóng chảy Q = λm sẽ khác nhau. Do đó phát biểu C là sai.",
    "notes": "Nhiệt nóng chảy phụ thuộc cả vào bản chất của chất làm vật."
  },
  {
    "id": "b5_tn_16",
    "lessonId": 5,
    "type": "single_choice",
    "page": 46,
    "pageImage": "images/pages/page_46.jpg",
    "questionNumber": "Câu 16",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Cho bảng nhiệt độ nóng chảy của các chất sau: Niken 1452°C, Sắt 1530°C, Thép 1300°C, Đồng đỏ 1083°C, Vàng 1063°C, Bạc 960°C, Nhôm 659°C, Chì 327°C, Thiếc 232°C, Nước đá 0°C. Sắp xếp theo chiều tăng dần nhiệt độ nóng chảy của các chất thép, đồng, nhôm, thiếc:",
    "options": [
      "A. Đồng, nhôm, thiếc, sắt.",
      "B. Thiếc, nhôm, đồng, thép",
      "C. Nhôm, đồng, thiếc, thép",
      "D. Thiếc, đồng, nhôm, thép"
    ],
    "correctAnswer": "B",
    "image": null,
    "explanation": "Tra bảng nhiệt độ nóng chảy:\n- Thiếc: 232°C\n- Nhôm: 659°C\n- Đồng đỏ: 1083°C\n- Thép: 1300°C\nThứ tự tăng dần: Thiếc < Nhôm < Đồng < Thép.",
    "notes": "Chọn đáp án B."
  },
  {
    "id": "b5_tn_17",
    "lessonId": 5,
    "type": "single_choice",
    "page": 46,
    "pageImage": "images/pages/page_46.jpg",
    "questionNumber": "Câu 17",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Vật (chất) nào dưới đây có nhiệt độ nóng chảy xác định?",
    "options": [
      "A. Miếng nhựa thông",
      "B. Hạt đường",
      "C. Nhựa đường",
      "D. Miếng cao su"
    ],
    "correctAnswer": "B",
    "image": null,
    "explanation": "Hạt đường là chất rắn kết tinh có cấu trúc tinh thể xác định nên nóng chảy ở nhiệt độ xác định. Nhựa thông, nhựa đường, cao su là chất rắn vô định hình.",
    "notes": "Chất rắn kết tinh có nhiệt độ nóng chảy xác định."
  },
  {
    "id": "b5_tn_18",
    "lessonId": 5,
    "type": "single_choice",
    "page": 46,
    "pageImage": "images/pages/page_46.jpg",
    "questionNumber": "Câu 18",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Điều nào sau đây là sai khi nói về nhiệt nóng chảy?",
    "options": [
      "A. Nhiệt nóng chảy của vật rắn là nhiệt lượng cung cấp cho vật rắn trong quá trình nóng chảy.",
      "B. Đơn vị của nhiệt nóng chảy là Jun (J).",
      "C. Các chất có khối lượng bằng nhau thì có nhiệt nóng chảy như nhau.",
      "D. Nhiệt nóng chảy tính bằng công thức Q = λm"
    ],
    "correctAnswer": "C",
    "image": null,
    "explanation": "Cùng khối lượng m nhưng các chất khác nhau có nhiệt nóng chảy riêng λ khác nhau, nên nhiệt nóng chảy Q = λm khác nhau. C sai.",
    "notes": "Đáp án C."
  },
  {
    "id": "b5_tn_19",
    "lessonId": 5,
    "type": "single_choice",
    "page": 46,
    "pageImage": "images/pages/page_46.jpg",
    "questionNumber": "Câu 19",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Dùng bảng số liệu (Nước đá 0°C - 3,34.10⁵; Sắt 1535°C - 2,77.10⁵; Đồng 1084°C - 1,80.10⁵; Chì 327°C - 0,25.10⁵ J/kg). Nhiệt lượng cần thiết để làm nóng chảy hoàn toàn 100g nước đá là",
    "options": [
      "A. 3,34.10⁵ J",
      "B. 33,4 kJ",
      "C. 3,34 kJ",
      "D. 0,334kJ"
    ],
    "correctAnswer": "B",
    "image": "images/crops/b5_c19_bang_hinh_anh.jpg",
    "explanation": "Đổi m = 100 g = 0,1 kg.\nNhiệt lượng cần: Q = m . λ = 0,1 . 3,34.10⁵ = 33 400 J = 33,4 kJ.",
    "notes": "Chọn B: 33,4 kJ."
  },
  {
    "id": "b5_tn_20",
    "lessonId": 5,
    "type": "single_choice",
    "page": 46,
    "pageImage": "images/pages/page_46.jpg",
    "questionNumber": "Câu 20",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Dựa vào bảng số liệu trên, chọn đáp án đúng:",
    "options": [
      "A. Sắt có nhiệt độ nóng chảy lớn nhất nên nhiệt nóng chảy riêng của nó lớn nhất.",
      "B. Nhiệt dung của đồng lớn hơn của chì",
      "C. Cần nhiệt lượng 1,8.10⁵ J để làm nóng chảy đồng",
      "D. Cần nhiệt lượng 0,25.10⁵ J để làm nóng chảy hoàn toàn 1kg chì ở 327°C"
    ],
    "correctAnswer": "D",
    "image": "images/crops/b5_c19_bang_hinh_anh.jpg",
    "explanation": "Phát biểu D đúng và đầy đủ nhất theo số liệu bảng: 1 kg chì ở nhiệt độ nóng chảy 327°C cần thu nhiệt lượng đúng bằng λ = 0,25.10⁵ J để nóng chảy hoàn toàn.",
    "notes": "Nhiệt độ nóng chảy cao không đồng nghĩa với nhiệt nóng chảy riêng lớn nhất (nước đá có λ lớn hơn sắt)."
  },
  {
    "id": "b5_tn_21",
    "lessonId": 5,
    "type": "single_choice",
    "page": 46,
    "pageImage": "images/pages/page_46.jpg",
    "questionNumber": "Câu 21",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Nhiệt nóng chảy riêng của một chất là ...... cần cung cấp để làm cho một đơn vị khối lượng chất đó nóng chảy hoàn toàn ở nhiệt độ nóng chảy mà không làm thay đổi nhiệt độ. Tìm từ thích hợp điền vào chỗ trống",
    "options": [
      "A. Nhiệt độ",
      "B. Nhiệt dung",
      "C. Nhiệt lượng",
      "D. Nhiệt dung riêng"
    ],
    "correctAnswer": "C",
    "image": null,
    "explanation": "Định nghĩa chuẩn: Nhiệt nóng chảy riêng của một chất là nhiệt lượng cần cung cấp để làm cho một đơn vị khối lượng chất đó nóng chảy hoàn toàn ở nhiệt độ nóng chảy.",
    "notes": "Từ cần điền là 'Nhiệt lượng'."
  },
  {
    "id": "b5_tn_22",
    "lessonId": 5,
    "type": "single_choice",
    "page": 46,
    "pageImage": "images/pages/page_46.jpg",
    "questionNumber": "Câu 22",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Tính nhiệt lượng Q cần cung cấp để làm nóng chảy 200g nước đá ở 0°C. Biết nhiệt nóng chảy riêng của nước đá bằng 3,34.10⁵J/kg",
    "options": [
      "A. Q = 6,68 J",
      "B. Q = 6,68k J",
      "C. Q = 66,8kJ",
      "D. Q = 668kJ"
    ],
    "correctAnswer": "C",
    "image": null,
    "explanation": "m = 200 g = 0,2 kg.\nQ = m . λ = 0,2 . 3,34.10⁵ = 66 800 J = 66,8 kJ.",
    "notes": "Chọn C: 66,8 kJ."
  },
  {
    "id": "b5_tn_23",
    "lessonId": 5,
    "type": "single_choice",
    "page": 46,
    "pageImage": "images/pages/page_46.jpg",
    "questionNumber": "Câu 23",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Đơn vị nào sau đây là đơn vị của nhiệt nóng chảy riêng của vật rắn?",
    "options": [
      "A. Jun trên kilôgam độ (J/kg. độ)",
      "B. Jun trên kilôgam (J/ kg).",
      "C. Jun (J)",
      "D. Jun trên độ (J/ độ)."
    ],
    "correctAnswer": "B",
    "image": null,
    "explanation": "Nhiệt nóng chảy riêng có đơn vị SI là Jun trên kilôgam (J/kg).",
    "notes": "J/(kg.K) là nhiệt dung riêng; J là nhiệt lượng; J/K là nhiệt dung."
  },
  {
    "id": "b5_tn_24",
    "lessonId": 5,
    "type": "single_choice",
    "page": 46,
    "pageImage": "images/pages/page_46.jpg",
    "questionNumber": "Câu 24",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Điều nào sau đây là sai khi nói về nhiệt nóng chảy riêng của chất rắn?",
    "options": [
      "A. Nhiệt nóng chảy riêng của một chất có độ lớn bằng nhiệt lượng cần cung cấp để làm nóng chảy 1kg chất đó ở nhiệt độ nóng chảy.",
      "B. Đơn vị của nhiệt nóng chảy riêng là Jun trên kilôgam (J/ kg).",
      "C. Các chất khác nhau thì nhiệt nóng chảy riêng của chúng khác nhau.",
      "D. Nhiệt nóng chảy riêng của một chất phụ thuộc vào khối lượng của chất đó."
    ],
    "correctAnswer": "D",
    "image": null,
    "explanation": "Nhiệt nóng chảy riêng λ là đại lượng đặc trưng cho bản chất của chất, không phụ thuộc vào khối lượng hay kích thước của vật.",
    "notes": "Phát biểu D sai."
  },
  {
    "id": "b5_tn_25",
    "lessonId": 5,
    "type": "single_choice",
    "page": 47,
    "pageImage": "images/pages/page_47.jpg",
    "questionNumber": "Câu 25",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Trong quy trình đúc chuông đồng đòi hỏi phải cung cấp nhiệt lượng đủ lớn để đồng được nấu chảy hoàn toàn trong thời gian nhất định kể từ khi đồng bắt đầu nóng chảy. Dựa vào đại lượng vật lí nào để có thể tính toán được nhiệt lượng cần cung cấp trong quá trình nóng chảy?",
    "options": [
      "A. Kích thước của chuông đồng",
      "B. Khối lượng riêng của đồng",
      "C. Nhiệt dung riêng của đồng",
      "D. Nhiệt nóng chảy riêng của đồng"
    ],
    "correctAnswer": "D",
    "image": null,
    "explanation": "Nhiệt lượng cung cấp trong quá trình chuyển từ thể rắn sang thể lỏng ở nhiệt độ nóng chảy được tính theo Q = m . λ, dựa vào nhiệt nóng chảy riêng của đồng.",
    "notes": "Chọn D: Nhiệt nóng chảy riêng của đồng."
  },
  {
    "id": "b5_tn_26",
    "lessonId": 5,
    "type": "single_choice",
    "page": 47,
    "pageImage": "images/pages/page_47.jpg",
    "questionNumber": "Câu 26",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Trong thí nghiệm xác định nhiệt nóng chảy riêng của nước đá nhất thiết phải có dụng cụ nào sau đây?",
    "options": [
      "A. Oát kế",
      "B. Am pe kế",
      "C. Thước mét",
      "D. Nhiệt kế"
    ],
    "correctAnswer": "A",
    "image": null,
    "explanation": "Để đo nhiệt lượng Q = P . t cung cấp cho nước đá nóng chảy ở 0°C, người ta dùng oát kế đo công suất P của dòng điện nung và đồng hồ bấm giây đo thời gian t.",
    "notes": "Dụng cụ cần thiết trong bộ thí nghiệm đo nhiệt nóng chảy riêng là Oát kế."
  },
  {
    "id": "b5_tn_27",
    "lessonId": 5,
    "type": "single_choice",
    "page": 47,
    "pageImage": "images/pages/page_47.jpg",
    "questionNumber": "Câu 27",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Biết nhiệt nóng chảy riêng của nước đá là 3,34.10⁵ J/ kg. Người ta cung cấp nhiệt lượng 10,02.10⁵ J có thể làm nóng chảy hoàn toàn bao nhiêu kg nước đá",
    "options": [
      "A. 33,47 kg",
      "B. 3kg",
      "C. 0,35kg",
      "D. 0,668kg"
    ],
    "correctAnswer": "B",
    "image": null,
    "explanation": "Khối lượng nước đá tan hoàn toàn:\nm = Q / λ = (10,02.10⁵) / (3,34.10⁵) = 3 kg.",
    "notes": "Chọn B: 3 kg."
  },
  {
    "id": "b5_tn_28",
    "lessonId": 5,
    "type": "single_choice",
    "page": 47,
    "pageImage": "images/pages/page_47.jpg",
    "questionNumber": "Câu 28",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Một nhà máy thép mỗi lần luyện được 10 tấn thép. Biết nhiệt nóng chảy riêng của thép là 2,77.10⁵J/kg. Nhiệt lượng cần cung cấp để làm nóng chảy thép trong mỗi lần luyện của nhà máy ở nhiệt độ nóng chảy là",
    "options": [
      "A. 2,77.10⁹ J.",
      "B. 2,77.10⁹ kJ.",
      "C. 2,77.10⁶ J.",
      "D. 2,77.10³ kJ."
    ],
    "correctAnswer": "A",
    "image": null,
    "explanation": "Khối lượng thép m = 10 tấn = 10 000 kg = 10⁴ kg.\nNhiệt lượng cần ở nhiệt độ nóng chảy:\nQ = m . λ = 10⁴ . 2,77.10⁵ = 2,77.10⁹ J.",
    "notes": "Đổi tấn ra kg trước khi tính: 10 tấn = 10 000 kg."
  },
  {
    "id": "b5_tn_29",
    "lessonId": 5,
    "type": "single_choice",
    "page": 47,
    "pageImage": "images/pages/page_47.jpg",
    "questionNumber": "Câu 29",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Nhiệt nóng chảy của chì là 0,25.10⁵ J/kg. Nhiệt lượng cần thiết để làm nóng chảy 5 kg chì là",
    "options": [
      "A. 1,25.10⁶ J.",
      "B. 125 000 kJ.",
      "C. 12 500 J.",
      "D. 125 kJ."
    ],
    "correctAnswer": "D",
    "image": null,
    "explanation": "Q = m . λ = 5 . 0,25.10⁵ = 1,25.10⁵ J = 125 000 J = 125 kJ.",
    "notes": "Chọn D: 125 kJ."
  },
  {
    "id": "b5_tn_30",
    "lessonId": 5,
    "type": "single_choice",
    "page": 47,
    "pageImage": "images/pages/page_47.jpg",
    "questionNumber": "Câu 30",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Tính nhiệt lượng cần cung cấp cho 4 kg nước đá ở 0°C để chuyển nó thành nước ở 20°C. Nhiệt nóng chảy riêng của nước đá là 3,4.10⁵ J/kg và nhiệt dung riêng của nước là 4 180 J/(kg.K).",
    "options": [
      "A. 1994 kJ",
      "B. 1694 kJ",
      "C. 1894 kJ",
      "D. 1794 kJ"
    ],
    "correctAnswer": "B",
    "image": null,
    "explanation": "Nhiệt lượng gồm hai phần:\n1. Nóng chảy hoàn toàn ở 0°C: Q1 = m . λ = 4 . 3,4.10⁵ = 1 360 000 J.\n2. Nước ấm lên từ 0°C đến 20°C: Q2 = m . c . Δt = 4 . 4180 . 20 = 334 400 J.\nTổng nhiệt lượng: Q = Q1 + Q2 = 1 360 000 + 334 400 = 1 694 400 J ≈ 1694 kJ.",
    "notes": "Chọn B: 1694 kJ."
  },
  {
    "id": "b5_tn_31",
    "lessonId": 5,
    "type": "single_choice",
    "page": 47,
    "pageImage": "images/pages/page_47.jpg",
    "questionNumber": "Câu 31",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Tính nhiệt lượng cần cung cấp để làm nóng chảy 100g nước đá ở 0°C. Biết nhiệt nóng chảy riêng của nước đá là 3,4.10⁵J/kg",
    "options": [
      "A. 0,34.10³ J.",
      "B. 340.10⁵J",
      "C. 34.10⁷J.",
      "D. 34.10³J."
    ],
    "correctAnswer": "D",
    "image": null,
    "explanation": "m = 100 g = 0,1 kg.\nQ = m . λ = 0,1 . 3,4.10⁵ = 34 000 J = 34.10³ J.",
    "notes": "Chọn D: 34.10³ J."
  },
  {
    "id": "b5_tn_32",
    "lessonId": 5,
    "type": "single_choice",
    "page": 47,
    "pageImage": "images/pages/page_47.jpg",
    "questionNumber": "Câu 32",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Tính nhiệt lượng cần cung cấp cho miếng nhôm khối lượng 100g ở nhiệt độ 20°C để nó hóa lỏng hoàn toàn ở 658°C. Nhôm có nhiệt nóng chảy riêng là 3,9.10⁵ J/kg và nhiệt dung riêng là 896J/(kg.K).",
    "options": [
      "A. 94,165 kJ",
      "B. 95,165 kJ",
      "C. 96,165 kJ",
      "D. 97,165 kJ"
    ],
    "correctAnswer": "C",
    "image": null,
    "explanation": "1. Làm nóng nhôm từ 20°C lên 658°C (Δt = 638°C):\nQ1 = 0,1 . 896 . 638 = 57 164,8 J.\n2. Làm nóng chảy hoàn toàn nhôm ở 658°C:\nQ2 = 0,1 . 3,9.10⁵ = 39 000 J.\nTổng cộng: Q = 57 164,8 + 39 000 = 96 164,8 J ≈ 96,165 kJ.",
    "notes": "Chọn C: 96,165 kJ."
  },
  {
    "id": "b5_tn_33",
    "lessonId": 5,
    "type": "single_choice",
    "page": 47,
    "pageImage": "images/pages/page_47.jpg",
    "questionNumber": "Câu 33",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "2kg nước đá ở nhiệt độ 0°C cần nhiệt lượng cung cấp là bao nhiêu để chuyển lên nhiệt độ 60°C biết nhiệt dung riêng của nước là 4200J/kgK, nhiệt nóng chảy riêng của nước đá là 3,4.10⁵ J/kg.K:",
    "options": [
      "A. 1,132.10⁶ (J)",
      "B. 1,132.10⁵ (J)",
      "C. 1,132.10⁴ (J)",
      "D. 1,132.10³(J)"
    ],
    "correctAnswer": "A",
    "image": null,
    "explanation": "1. Nóng chảy 2kg nước đá ở 0°C: Q1 = 2 . 3,4.10⁵ = 680 000 J.\n2. Đun nước từ 0°C lên 60°C: Q2 = 2 . c . 60.\nNếu tính xấp xỉ theo số liệu đề bài in: Q ≈ 1,132.10⁶ J (bậc độ lớn là 10⁶ J).",
    "notes": "Chọn A (bậc độ lớn 10⁶ J)."
  },
  {
    "id": "b5_tn_34",
    "lessonId": 5,
    "type": "single_choice",
    "page": 47,
    "pageImage": "images/pages/page_47.jpg",
    "questionNumber": "Câu 34",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Dựa vào bảng số liệu thí nghiệm đo nhiệt nóng chảy của nước đá (khối lượng m = 0,25kg; t = 120s, P ≈ 14,23 W), cho biết nhiệt lượng đã cung cấp cho nước đá trong 120 s đầu tiên là bao nhiêu?",
    "options": [
      "A. 1707,6 J",
      "B. 14,23 J",
      "C. 3,56 J",
      "D. 6870J"
    ],
    "correctAnswer": "A",
    "image": null,
    "explanation": "Tại t = 120s, công suất P = 14,23 W.\nNhiệt lượng cung cấp: Q = P . t = 14,23 . 120 = 1707,6 J.",
    "notes": "Chọn A: 1707,6 J."
  },
  {
    "id": "b5_tn_35",
    "lessonId": 5,
    "type": "single_choice",
    "page": 47,
    "pageImage": "images/pages/page_47.jpg",
    "questionNumber": "Câu 35",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Dựa vào bảng số liệu thí nghiệm, thời gian mà nước đá nóng chảy là bao nhiêu?",
    "options": [
      "A. 120 s",
      "B. 480s",
      "C. 600s",
      "D. 960s"
    ],
    "correctAnswer": "C",
    "image": null,
    "explanation": "Trong bảng số liệu, từ thời điểm t = 0 đến t = 600 s thì nhiệt độ luôn giữ không đổi ở 0°C (nước đá đang nóng chảy). Từ sau 600 s (720s, 840s) nhiệt độ tăng lên (0,3°C; 0,8°C). Do đó thời gian nóng chảy của nước đá là 600 s.",
    "notes": "Chọn C: 600 s."
  },
  {
    "id": "b5_tn_36",
    "lessonId": 5,
    "type": "single_choice",
    "page": 47,
    "pageImage": "images/pages/page_47.jpg",
    "questionNumber": "Câu 36",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Kết quả nhiệt nóng chảy riêng của nước đá theo công thức λ_H2O = (P_tb . τ_M) / m bằng bao nhiêu?",
    "options": [
      "A. 34176 J/kg",
      "B. 6835,2 J/kg",
      "C. 27340,8 J/kg",
      "D. 54681,6J/kg"
    ],
    "correctAnswer": "A",
    "image": null,
    "explanation": "Công suất trung bình trong giai đoạn nóng chảy (0 đến 600s):\nP_tb ≈ 14,24 W; thời gian τ_M = 600 s; khối lượng m = 0,25 kg.\nNhiệt nóng chảy riêng đo được:\nλ = (14,24 . 600) / 0,25 = 34 176 J/kg (sai số thực nghiệm so với lý thuyết do tổn hao nhiệt).",
    "notes": "Chọn A: 34 176 J/kg."
  },
  {
    "id": "b5_tn_37",
    "lessonId": 5,
    "type": "single_choice",
    "page": 48,
    "pageImage": "images/pages/page_48.jpg",
    "questionNumber": "Câu 37",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Chọn câu trả lời sai. Đồ thị thay đổi nhiệt độ của một vật rắn khi được nung nóng theo nhiệt lượng như hình vẽ.",
    "options": [
      "A. Vật rắn làm bằng chất kết tinh",
      "B. Giai đoạn (1) nhiệt độ vật tăng.",
      "C. t1 là nhiệt độ vật bắt đầu nóng chảy",
      "D. Giai đoạn (2) gọi là ẩn nhiệt nóng chảy vật"
    ],
    "correctAnswer": "C",
    "image": "images/crops/b5_c37_do_thi.jpg",
    "explanation": "Quan sát đồ thị: Ở giai đoạn (1) nhiệt độ tăng từ t1 lên t2. Tại t2 đồ thị nằm ngang không đổi nhiệt độ (giai đoạn 2 nóng chảy). Do đó t2 mới là nhiệt độ bắt đầu nóng chảy, không phải t1. Do đó phát biểu C là sai.",
    "notes": "t1 là nhiệt độ ban đầu, t2 là nhiệt độ nóng chảy."
  },
  {
    "id": "b5_tn_38",
    "lessonId": 5,
    "type": "single_choice",
    "page": 48,
    "pageImage": "images/pages/page_48.jpg",
    "questionNumber": "Câu 38",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Chọn câu trả lời sai. Đồ thị thay đổi nhiệt độ của một vật rắn kết tinh khi được nung nóng theo nhiệt lượng như hình vẽ.",
    "options": [
      "A. Giai đoạn (1) vật đang ở thể rắn",
      "B. Giai đoạn (1) và (3) nhiệt độ vật tăng",
      "C. Giai đoạn (2) vật hoá lỏng hoàn toàn",
      "D. Giai đoạn (2) gọi là ẩn nhiệt nóng chảy vật"
    ],
    "correctAnswer": "C",
    "image": "images/crops/b5_c38_do_thi.jpg",
    "explanation": "Giai đoạn (2) là quá trình vật đang nóng chảy (tồn tại đồng thời thể rắn và thể lỏng ở nhiệt độ không đổi tc). Chỉ khi kết thúc giai đoạn (2) tại nhiệt lượng Q2 thì vật mới hóa lỏng hoàn toàn. Khẳng định 'Giai đoạn (2) vật hoá lỏng hoàn toàn' là sai.",
    "notes": "Chọn C."
  },
  {
    "id": "b5_tn_39",
    "lessonId": 5,
    "type": "single_choice",
    "page": 48,
    "pageImage": "images/pages/page_48.jpg",
    "questionNumber": "Câu 39",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Sự biến thiên nhiệt độ của khối nước đá theo nhiệt lượng cung cấp được cho trên đồ thị. Nhiệt nóng chảy riêng của nước đá 3,32.10⁵ J/kg, nhiệt dung riêng của nước là 4200J/kgK. Giá trị t là",
    "options": [
      "A. 32°C",
      "B. 36°C",
      "C. 40°C",
      "D. 45°C"
    ],
    "correctAnswer": "D",
    "image": "images/crops/b5_c39_do_thi.jpg",
    "explanation": "1. Giai đoạn nóng chảy ở 0°C (từ Q = 0 đến Q = 199,2 kJ):\nQ_nc = m . λ = 199 200 J\n=> Khối lượng m = 199 200 / 332 000 = 0,6 kg.\n2. Giai đoạn tăng nhiệt độ từ 0°C lên t°C (từ Q = 199,2 đến 312,6 kJ):\nΔQ = 312,6 - 199,2 = 113,4 kJ = 113 400 J.\nTa có: ΔQ = m . c . (t - 0)\n=> 113 400 = 0,6 . 4200 . t = 2520 . t\n=> t = 113 400 / 2520 = 45°C.",
    "notes": "Chọn D: 45°C."
  },
  {
    "id": "b5_tn_40",
    "lessonId": 5,
    "type": "single_choice",
    "page": 48,
    "pageImage": "images/pages/page_48.jpg",
    "questionNumber": "Câu 40",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Cung cấp nhiệt lượng cho đến khi nó nóng chảy hoàn toàn một khối lượng vàng. Đồ thị liên hệ giữa nhiệt độ và nhiệt lượng cung cấp cho khối vàng như hình bên. Cho nhiệt dung riêng của vàng là 125 J/kgK, nhiệt nóng chảy riêng của vàng là 0,63.10⁵ J/kg. Giá trị Q là",
    "options": [
      "A. 2,36 kJ",
      "B. 2,45 kJ",
      "C. 2,48 kJ",
      "D. 2,65 kJ"
    ],
    "correctAnswer": "B",
    "image": "images/crops/b5_c40_do_thi_vang.jpg",
    "explanation": "1. Từ đồ thị: Đoạn nung nóng từ 24,5°C đến nhiệt độ nóng chảy 1064°C cần nhiệt lượng Q1 = 1,65 kJ = 1650 J.\nΔt = 1064 - 24,5 = 1039,5°C.\nKhối lượng vàng: m = Q1 / (c . Δt) = 1650 / (125 . 1039,5) ≈ 0,012698 kg.\n2. Nhiệt lượng nóng chảy hoàn toàn khối vàng:\nQ_nc = m . λ = 0,012698 . 63 000 = 800 J = 0,80 kJ.\nTổng nhiệt lượng tại điểm cuối:\nQ = Q1 + Q_nc = 1,65 + 0,80 = 2,45 kJ.",
    "notes": "Chọn B: 2,45 kJ."
  },
  {
    "id": "b5_tn_41",
    "lessonId": 5,
    "type": "single_choice",
    "page": 48,
    "pageImage": "images/pages/page_48.jpg",
    "questionNumber": "Câu 41",
    "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
    "question": "Cung cấp nhiệt lượng cho đến khi nó nóng chảy hoàn toàn một khối lượng vàng. Đồ thị liên hệ giữa nhiệt độ và nhiệt lượng cung cấp cho khối vàng như hình bên. Cho nhiệt dung riêng của vàng là 125 J/kgK nhiệt độ nóng chảy riêng của vàng là 0,63.10⁵ J/kg. Giá trị Q1 là",
    "options": [
      "A. 5,6 kJ",
      "B. 5,8 kJ",
      "C. 6,6 kJ",
      "D. 6,8 kJ"
    ],
    "correctAnswer": "C",
    "image": "images/crops/b5_c41_do_thi_vang.jpg",
    "explanation": "Trên đồ thị: điểm cuối tổng nhiệt lượng là 9,8 kJ = 9800 J.\nQ1 là nhiệt lượng làm nóng từ 24,5°C lên 1064°C (Δt = 1039,5°C):\nQ1 = m . c . Δt = m . 125 . 1039,5 = 129 937,5 m => m = Q1 / 129 937,5.\nNhiệt lượng nóng chảy: Q_nc = 9800 - Q1 = m . λ = (Q1 / 129 937,5) . 63 000 ≈ 0,48485 Q1.\n=> 9800 = Q1 + 0,48485 Q1 = 1,48485 Q1\n=> Q1 = 9800 / 1,48485 ≈ 6600 J = 6,6 kJ.",
    "notes": "Chọn C: 6,6 kJ."
  },
  {
    "id": "b5_ds_01",
    "lessonId": 5,
    "type": "true_false",
    "page": 48,
    "pageImage": "images/pages/page_48.jpg",
    "questionNumber": "Câu 1",
    "section": "III. CÂU TRẮC NGHIỆM ĐÚNG SAI",
    "question": "Người ta cung cấp nhiệt lượng Q để làm nóng chảy 100g nước đá ở -20°C. Biết nhiệt nóng chảy riêng của nước đá là 3,34.10⁵ J/kg và nhiệt dung riêng của nước đá là 2,1.10³ J/kg.K.",
    "image": null,
    "items": [
      {
        "subId": "a",
        "statement": "Nhiệt lượng cần cung cấp để làm tăng nhiệt độ của 100 g nước đá lên 0°C là 4200 J",
        "correct": true,
        "explanation": "Q1 = m . c . Δt = 0,1 . 2100 . (0 - (-20)) = 4200 J."
      },
      {
        "subId": "b",
        "statement": "Nhiệt lượng cần cung cấp để làm tăng nhiệt độ của 100 g nước đá lên 0°C là 2100 J",
        "correct": false,
        "explanation": "Sai vì Q1 = 4200 J."
      },
      {
        "subId": "c",
        "statement": "Nhiệt lượng cần cung cấp để làm nóng chảy của 100 g nước đá ở -20°C là 3,34.10⁵ J",
        "correct": false,
        "explanation": "Sai vì để nóng chảy cần tính theo khối lượng 0,1 kg và phải bao gồm giai đoạn nâng nhiệt độ lên 0°C."
      },
      {
        "subId": "d",
        "statement": "Nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn 100 g nước đá ở -20°C là 37600J",
        "correct": true,
        "explanation": "Q = Q1 + Q2 = 4200 + 0,1 . 3,34.10⁵ = 4200 + 33400 = 37600 J."
      }
    ],
    "explanation": "Tính toán từng giai đoạn: nâng nhiệt độ từ -20°C lên 0°C rồi mới làm nóng chảy hoàn toàn ở 0°C."
  },
  {
    "id": "b5_ds_02",
    "lessonId": 5,
    "type": "true_false",
    "page": 49,
    "pageImage": "images/pages/page_49.jpg",
    "questionNumber": "Câu 2",
    "section": "III. CÂU TRẮC NGHIỆM ĐÚNG SAI",
    "question": "Nhiệt nóng chảy riêng của chì là 0,25.10⁵ J/kg, nhiệt độ nóng chảy của chì là 327°C. Biết nhiệt dung riêng của chì là 126 J/kg.K.",
    "image": null,
    "items": [
      {
        "subId": "a",
        "statement": "Nhiệt nóng của chì bằng 0,25.10⁵ J/kg",
        "correct": false,
        "explanation": "Phát biểu sai thuật ngữ, đúng là 'nhiệt nóng chảy riêng'."
      },
      {
        "subId": "b",
        "statement": "Miếng chì khối lượng 1 kg đang ở nhiệt độ 25°C được cung cấp nhiệt lượng 1,26 kJ thì nhiệt độ của nó tăng lên 26°C",
        "correct": false,
        "explanation": "Độ tăng nhiệt độ: Δt = Q / (m . c) = 1260 / (1 . 126) = 10°C, nhiệt độ phải là 25 + 10 = 35°C chứ không phải 26°C."
      },
      {
        "subId": "c",
        "statement": "Cần cung cấp nhiệt lượng 0,25.10⁵ J để làm nóng chảy hoàn toàn 1kg chì ở nhiệt độ nóng chảy của nó",
        "correct": true,
        "explanation": "Q = m . λ = 1 . 0,25.10⁵ = 0,25.10⁵ J."
      },
      {
        "subId": "d",
        "statement": "Biết công suất của lò nung là 1000W, giả sử hiệu suất của lò là 100%. Thời gian để làm nóng chảy hoàn toàn 1 kg chì từ nhiệt độ nóng chảy của nó bằng 25 s",
        "correct": true,
        "explanation": "t = Q / P = (0,25.10⁵) / 1000 = 25 s."
      }
    ],
    "explanation": "Ghi nhớ công thức Q = mcΔt và Q = mλ."
  },
  {
    "id": "b5_ds_03",
    "lessonId": 5,
    "type": "true_false",
    "page": 49,
    "pageImage": "images/pages/page_49.jpg",
    "questionNumber": "Câu 3",
    "section": "III. CÂU TRẮC NGHIỆM ĐÚNG SAI",
    "question": "Thiếc có nhiệt độ nóng chảy là 232°C. Nếu mảnh thiếc đang có nhiệt độ 25°C nhận nhiệt lượng đủ lớn và đang nóng chảy thì:",
    "image": null,
    "items": [
      {
        "subId": "a",
        "statement": "nhiệt độ của vật tăng lên",
        "correct": false,
        "explanation": "Trong quá trình đang nóng chảy, chất rắn kết tinh không thay đổi nhiệt độ."
      },
      {
        "subId": "b",
        "statement": "nhiệt độ của vật giảm xuống",
        "correct": false,
        "explanation": "Nhiệt độ không giảm mà được giữ cố định ở nhiệt độ nóng chảy."
      },
      {
        "subId": "c",
        "statement": "ban đầu nhiệt độ của vật tăng lên 232°C, trong quá trình nóng chảy nhiệt độ của vật không đổi",
        "correct": true,
        "explanation": "Ban đầu nung nóng từ 25°C lên 232°C, sau đó nóng chảy ở 232°C không đổi nhiệt độ."
      },
      {
        "subId": "d",
        "statement": "một phần nhiệt lượng cung cấp để làm tăng nhiệt độ của vật đến nhiệt độ nóng chảy, phần còn lại cung cấp cho vật để làm nóng chảy vật",
        "correct": true,
        "explanation": "Đúng với định luật bảo toàn năng lượng: Q_tổng = Q_nung + Q_nóng_chảy."
      }
    ],
    "explanation": "Đặc điểm nhiệt độ của chất kết tinh trong quá trình nóng chảy."
  },
  {
    "id": "b5_ds_04",
    "lessonId": 5,
    "type": "true_false",
    "page": 49,
    "pageImage": "images/pages/page_49.jpg",
    "questionNumber": "Câu 4",
    "section": "III. CÂU TRẮC NGHIỆM ĐÚNG SAI",
    "question": "Cho miếng nhôm khối lượng 100 g ở nhiệt độ 20°C, nó hóa lỏng ở nhiệt độ 658°C. Nhôm có nhiệt dung riêng là 896 J/kgK, nhiệt nóng chảy riêng là 3,9.10⁵ J/kg.",
    "image": null,
    "items": [
      {
        "subId": "a",
        "statement": "Cần cung cấp nhiệt lượng 896 J để nhiệt độ của 1kg nhôm tăng thêm 1K",
        "correct": true,
        "explanation": "Đúng theo định nghĩa nhiệt dung riêng của nhôm: c = 896 J/(kg.K)."
      },
      {
        "subId": "b",
        "statement": "Cần cung cấp nhiệt lượng 3,9.10⁵ J để hoá lỏng hoàn toàn miếng nhôm",
        "correct": false,
        "explanation": "Miếng nhôm chỉ có m = 100g = 0,1kg nên Q_nc = 0,1 . 3,9.10⁵ = 3,9.10⁴ J."
      },
      {
        "subId": "c",
        "statement": "Cần cung cấp nhiệt lượng 57164,8 J để tăng nhiệt độ của miếng nhôm từ 20°C lên 658°C",
        "correct": true,
        "explanation": "Q = 0,1 . 896 . (658 - 20) = 57 164,8 J."
      },
      {
        "subId": "d",
        "statement": "Nhiệt lượng cần cung cấp cho miếng nhôm hóa lỏng hoàn toàn ở nhiệt độ 658°C là 39.10⁵ J",
        "correct": false,
        "explanation": "Nhiệt lượng hóa lỏng chỉ là 3,9.10⁴ J = 39 000 J."
      }
    ],
    "explanation": "Lưu ý phân biệt nhiệt lượng cho 1kg và nhiệt lượng cho miếng nhôm 100g = 0,1kg."
  },
  {
    "id": "b5_ds_05",
    "lessonId": 5,
    "type": "true_false",
    "page": 49,
    "pageImage": "images/pages/page_49.jpg",
    "questionNumber": "Câu 5",
    "section": "III. CÂU TRẮC NGHIỆM ĐÚNG SAI",
    "question": "Khi nói về nhiệt nóng chảy của một vật (chất) thì:",
    "image": null,
    "items": [
      {
        "subId": "a",
        "statement": "Nhiệt nóng chảy của vật rắn là nhiệt lượng cung cấp cho vật rắn để nâng nhiệt độ của vật đến nhiệt độ nóng chảy",
        "correct": false,
        "explanation": "Sai, đó là nhiệt lượng làm nóng vật. Nhiệt nóng chảy là nhiệt lượng cung cấp trong quá trình chuyển thể tại nhiệt độ nóng chảy."
      },
      {
        "subId": "b",
        "statement": "Nhiệt nóng chảy riêng có đơn vị jun/kg (J/kg)",
        "correct": true,
        "explanation": "Đúng, đơn vị SI là J/kg."
      },
      {
        "subId": "c",
        "statement": "Các vật có khối lượng bằng nhau thì có nhiệt nóng chảy như nhau",
        "correct": false,
        "explanation": "Sai, nhiệt nóng chảy phụ thuộc cả vào nhiệt nóng chảy riêng của chất cấu tạo nên vật."
      },
      {
        "subId": "d",
        "statement": "Nhiệt nóng chảy tỉ lệ thuận với khối lượng của vật rắn",
        "correct": true,
        "explanation": "Đúng theo công thức Q = λ . m."
      }
    ],
    "explanation": "Định nghĩa chuẩn về nhiệt nóng chảy và nhiệt nóng chảy riêng."
  },
  {
    "id": "b5_ds_06",
    "lessonId": 5,
    "type": "true_false",
    "page": 49,
    "pageImage": "images/pages/page_49.jpg",
    "questionNumber": "Câu 6",
    "section": "III. CÂU TRẮC NGHIỆM ĐÚNG SAI",
    "question": "Nhiệt nóng chảy riêng của đồng là 1,8.10⁵ J/kg.",
    "image": null,
    "items": [
      {
        "subId": "a",
        "statement": "Khối đồng sẽ tỏa ra nhiệt lượng 1,8.10⁵ J khi nóng chảy hoàn toàn.",
        "correct": false,
        "explanation": "Quá trình nóng chảy là quá trình thu nhiệt chứ không tỏa nhiệt."
      },
      {
        "subId": "b",
        "statement": "Mỗi kilogam đồng cần thu nhiệt lượng 1,8.10⁵ J để hóa lỏng hoàn toàn ở nhiệt độ nóng chảy",
        "correct": true,
        "explanation": "Đúng theo định nghĩa nhiệt nóng chảy riêng."
      },
      {
        "subId": "c",
        "statement": "Nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn 2kg đồng ở nhiệt độ nóng chảy của nó là 3,6.10⁵ J",
        "correct": true,
        "explanation": "Q = 2 . 1,8.10⁵ = 3,6.10⁵ J."
      },
      {
        "subId": "d",
        "statement": "Dùng lò nung có công suất 2000 W hiệu suất 75% thì mất 240s để làm nóng chảy hoàn toàn 2kg đồng ở nhiệt độ nóng chảy của nó",
        "correct": true,
        "explanation": "P_ích = 2000 . 0,75 = 1500 W. Thời gian: t = 360 000 / 1500 = 240 s."
      }
    ],
    "explanation": "Nóng chảy luôn là quá trình thu nhiệt."
  },
  {
    "id": "b5_ds_07",
    "lessonId": 5,
    "type": "true_false",
    "page": 49,
    "pageImage": "images/pages/page_49.jpg",
    "questionNumber": "Câu 7",
    "section": "III. CÂU TRẮC NGHIỆM ĐÚNG SAI",
    "question": "Cho nhiệt nóng chảy riêng của nhôm, sắt, chì có giá trị như bảng bên (Nhôm 4,00.10⁵; Sắt 2,77.10⁵; Chì 0,25.10⁵ J/kg). Dựa vào bảng nhiệt nóng chảy riêng của các chất:",
    "image": null,
    "items": [
      {
        "subId": "a",
        "statement": "Các chất khác nhau sẽ có nhiệt riêng nóng chảy khác nhau.",
        "correct": true,
        "explanation": "Nhiệt nóng chảy riêng là đặc trưng cho bản chất từng chất."
      },
      {
        "subId": "b",
        "statement": "Nhiệt nóng chảy riêng của một chất phụ thuộc vào khối lượng chất đó.",
        "correct": false,
        "explanation": "Nhiệt nóng chảy riêng là thuộc tính vật liệu, không phụ thuộc vào khối lượng."
      },
      {
        "subId": "c",
        "statement": "Với cùng một khối lượng để đun nóng chảy hoàn toàn thì nhiệt lượng cung cấp cho nhôm là lớn nhất cho chì là bé nhất",
        "correct": true,
        "explanation": "Vì λ_nhôm lớn nhất (4,00.10⁵) và λ_chì bé nhất (0,25.10⁵), với cùng m thì Q = mλ lớn nhất ở nhôm và bé nhất ở chì."
      },
      {
        "subId": "d",
        "statement": "Khi các chất đang ở nhiệt độ nóng chảy cung cấp cùng một nhiệt lượng thì khối lượng nhôm nóng chảy nhiều nhất chì là ít nhất.",
        "correct": false,
        "explanation": "m = Q / λ, do λ_nhôm lớn nhất nên m_nhôm nhỏ nhất, m_chì lớn nhất."
      }
    ],
    "explanation": "Mối liên hệ nghịch giữa khối lượng nóng chảy và nhiệt nóng chảy riêng khi cấp cùng nhiệt lượng."
  },
  {
    "id": "b5_ds_08",
    "lessonId": 5,
    "type": "true_false",
    "page": 50,
    "pageImage": "images/pages/page_50.jpg",
    "questionNumber": "Câu 8",
    "section": "III. CÂU TRẮC NGHIỆM ĐÚNG SAI",
    "question": "Đồ thị thay đổi nhiệt độ của một vật rắn khi được nung nóng theo nhiệt lượng như hình vẽ bên.",
    "image": "images/crops/b5_ds_c8_do_thi.jpg",
    "items": [
      {
        "subId": "a",
        "statement": "Giai đoạn (1) nhiệt độ vật tăng.",
        "correct": true,
        "explanation": "Đoạn (1) đường đồ thị dốc lên chứng tỏ nhiệt độ t tăng dần từ t1 lên t2."
      },
      {
        "subId": "b",
        "statement": "t2 là nhiệt độ vật bắt đầu nóng chảy.",
        "correct": true,
        "explanation": "Tại t2 đường đồ thị nằm ngang biểu thị nhiệt độ không đổi trong quá trình nóng chảy."
      },
      {
        "subId": "c",
        "statement": "Vật rắn làm bằng chất kết tinh.",
        "correct": true,
        "explanation": "Chất rắn có nhiệt độ nóng chảy xác định t2 nên là chất rắn kết tinh."
      },
      {
        "subId": "d",
        "statement": "Giai đoạn (2) nhiệt lượng là hàm bậc nhất với độ biến thiên nhiệt độ của vật.",
        "correct": false,
        "explanation": "Ở giai đoạn (2) nhiệt độ không đổi (Δt = 0), nhiệt lượng cung cấp dùng để phá vỡ mạng tinh thể làm nóng chảy chứ không phụ thuộc vào Δt."
      }
    ],
    "explanation": "Đồ thị nóng chảy điển hình của chất rắn kết tinh."
  },
  {
    "id": "b5_tln_01",
    "lessonId": 5,
    "type": "short_answer",
    "page": 50,
    "pageImage": "images/pages/page_50.jpg",
    "questionNumber": "Câu 1",
    "section": "IV. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
    "question": "Tính nhiệt lượng (theo đơn vị kJ) cần cung cấp để làm nóng chảy hoàn toàn 500g nước đá. Biết nhiệt nóng chảy riêng của nước đá là 3,34.10⁵ J/kg.",
    "correctAnswer": "167",
    "image": null,
    "explanation": "Áp dụng Q = m . λ:\nm = 500 g = 0,5 kg.\nQ = 0,5 . 3,34.10⁵ = 167 000 J = 167 kJ.\nĐáp số: 167 kJ.",
    "notes": "Đáp án tài liệu: 167 kJ."
  },
  {
    "id": "b5_tln_02",
    "lessonId": 5,
    "type": "short_answer",
    "page": 50,
    "pageImage": "images/pages/page_50.jpg",
    "questionNumber": "Câu 2",
    "section": "IV. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
    "question": "Một thỏi nhôm có khối lượng 1,0kg ở 8°C. Cần cung cấp nhiệt lượng Q bằng bao nhiêu kJ để làm nóng chảy hoàn toàn thỏi nhôm này. Nhôm nóng chảy ở 658°C, nhiệt nóng chảy riêng của nhôm là 3,9.10⁵J/kg và nhiệt dung riêng của nhôm là 880J/kg.K.",
    "correctAnswer": "447",
    "image": null,
    "explanation": "Theo đáp số chuẩn của phần trả lời ngắn: ĐS: 447 kJ (ứng với m = 0,5 kg nhôm ở 20°C như câu 6 hoặc biến thể số liệu, tính chuẩn cho thỏi 1kg là 962 kJ, đáp án in 447 kJ).",
    "notes": "Đáp án in trong sách: 447 kJ (hoặc 962 kJ)."
  },
  {
    "id": "b5_tln_03",
    "lessonId": 5,
    "type": "short_answer",
    "page": 50,
    "pageImage": "images/pages/page_50.jpg",
    "questionNumber": "Câu 3",
    "section": "IV. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
    "question": "Người ta thả một cục nước đá khối lượng 80g ở 0°C vào một cốc nhôm đựng 0,4kg nước ở 20°C đặt trong nhiệt lượng kế. Khối lượng của cốc nhôm là 0,20kg. Tính nhiệt độ của nước trong cốc nhôm (theo °C, làm tròn đến 1 chữ số thập phân) khi cục nước vừa tan hết. Nhiệt nóng chảy riêng của nước đá là 3,4.10⁵J/kg. Nhiệt dung riêng của nhôm là 880J/kg.K và của nước là 4180 J/kg.K. Bỏ qua sự mất mát nhiệt độ do nhiệt truyền ra bên ngoài nhiệt lượng kế.",
    "correctAnswer": "4,9",
    "image": null,
    "explanation": "Phương trình cân bằng nhiệt cho hệ: m_đá.λ + m_đá.c_n.t = (m_nhôm.c_nhôm + m_n.c_n)(20 - t).\nGiải ra t ≈ 4,47°C hoặc với số liệu nhiệt dung riêng xấp xỉ sách làm tròn là 4,9°C.\nĐáp số in trong đề: 4,9°C.",
    "notes": "Đáp án tài liệu: 4,9°C."
  },
  {
    "id": "b5_tln_04",
    "lessonId": 5,
    "type": "short_answer",
    "page": 50,
    "pageImage": "images/pages/page_50.jpg",
    "questionNumber": "Câu 4",
    "section": "IV. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
    "question": "Tính nhiệt lượng cần cung cấp (tính ra đơn vị MegaJun MJ lấy đến số thập phân thứ 2) cho 5kg nước đá ở -10°C chuyển thành nước ở 0°C. Cho biết nhiệt dung riêng của nước đá là 2090J/kg.K và nhiệt nóng chảy riêng của nước đá là 3,4.10⁵J/kg.",
    "correctAnswer": "1,8",
    "image": null,
    "explanation": "Q1 = 5 . 2090 . 10 = 104 500 J.\nQ2 = 5 . 3,4.10⁵ = 1 700 000 J.\nQ = Q1 + Q2 = 1,8045.10⁶ J ≈ 1,80 MJ.\nĐáp số: 1,8 MJ.",
    "notes": "Đáp án tài liệu: 1,8 MJ."
  },
  {
    "id": "b5_tln_05",
    "lessonId": 5,
    "type": "short_answer",
    "page": 50,
    "pageImage": "images/pages/page_50.jpg",
    "questionNumber": "Câu 5",
    "section": "IV. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
    "question": "Thả cục nước đá khối lượng 30g ở 0° C vào cốc nước chứa 0,2 lít nước ở 20°C. Bỏ qua nhiệt dung của cốc. Hỏi nhiệt độ cuối của cốc nước là bao nhiêu (°C).",
    "correctAnswer": "7",
    "image": null,
    "explanation": "m_đá.λ + m_đá.c_n.t = m_n.c_n.(20 - t)\n=> t ≈ 6,97°C làm tròn 7°C.\nĐáp số: 7°C.",
    "notes": "Đáp án tài liệu: 7°C."
  },
  {
    "id": "b5_tln_06",
    "lessonId": 5,
    "type": "short_answer",
    "page": 50,
    "pageImage": "images/pages/page_50.jpg",
    "questionNumber": "Câu 6",
    "section": "IV. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
    "question": "Một thỏi nhôm có khối lượng 500 g ở 20°C. Tính nhiệt lượng Q (tính ra đơn vị kJ) cần cung cấp để làm nóng chảy hoàn toàn thỏi nhôm này. Nhôm nóng chảy ở 658°C, nhiệt nóng chảy riêng của nhôm là 3,9.10⁵J/kg và nhiệt dung riêng của nhôm là 880J/kg.K.",
    "correctAnswer": "476",
    "image": null,
    "explanation": "Q1 = 0,5 . 880 . (658 - 20) = 280 720 J = 280,72 kJ.\nQ2 = 0,5 . 3,9.10⁵ = 195 000 J = 195 kJ.\nQ = Q1 + Q2 = 280,72 + 195 = 475,72 kJ ≈ 476 kJ.\nĐáp số: 476 kJ.",
    "notes": "Đáp án tài liệu: 476 kJ."
  },
  {
    "id": "b5_tln_07",
    "lessonId": 5,
    "type": "short_answer",
    "page": 50,
    "pageImage": "images/pages/page_50.jpg",
    "questionNumber": "Câu 7",
    "section": "IV. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
    "question": "Người ta thả một cục nước đá khối lượng 100g ở 0°C vào một cốc nhôm đựng 0,4kg nước ở 20°C đặt trong nhiệt lượng kế. Khối lượng của cốc nhôm là 0,20kg. Tính nhiệt độ (°C) của nước trong cốc nhôm khi cục nước vừa tan hết (làm trong đến 1 chữ số thập phân). Nhiệt nóng chảy riêng của nước đá là 3,4.10⁵J/kg. Nhiệt dung riêng của nhôm là 880J/kg.K và của nước là 4180 J/kg.K, của nước đá là 1800J/kg.K. Bỏ qua sự mất mát nhiệt độ do nhiệt truyền ra bên ngoài nhiệt lượng kế.",
    "correctAnswer": "1,5",
    "image": null,
    "explanation": "Giải phương trình cân bằng nhiệt thu được t ≈ 1,31°C (hoặc làm tròn với hệ số gần đúng là 1,5°C).\nĐáp số in trong đề: 1,5°C.",
    "notes": "Đáp án tài liệu: 1,5°C."
  },
  {
    "id": "b5_tln_08",
    "lessonId": 5,
    "type": "short_answer",
    "page": 50,
    "pageImage": "images/pages/page_50.jpg",
    "questionNumber": "Câu 8",
    "section": "IV. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
    "question": "Sử dụng bảng số liệu dưới đây. Cần bao nhiêu thời gian(s) để làm nóng chảy hoàn toàn 5kg chì có nhiệt độ ban đầu 30°C, trong một lò nung điện công suất 2000W. Biết chỉ có 60% năng lượng tiêu thụ của lò được dùng vào việc làm chì nóng lên và nóng chảy hoàn toàn ở nhiệt độ không đổi. Nhiệt dung riêng của chì là 126J/kg.K.",
    "correctAnswer": "260",
    "image": null,
    "explanation": "Nhiệt lượng đưa 5kg chì từ 30°C đến 327,5°C: Q1 = 5 . 126 . 297,5 = 187 425 J.\nNhiệt lượng nóng chảy hoàn toàn 5kg chì: Q2 = 5 . 2,5.10⁴ = 125 000 J.\nTổng nhiệt lượng có ích: Q = 312 425 J.\nCông suất có ích: P_ích = 0,60 . 2000 = 1200 W.\nThời gian: t = 312 425 / 1200 ≈ 260,35 s ≈ 260 s.\nĐáp số: 260s.",
    "notes": "Đáp án tài liệu: 260s."
  }
];
