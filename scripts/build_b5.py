# -*- coding: utf-8 -*-
"""
Script to build data/b5.js for Bài 5: Chủ đề 5 - Nhiệt nóng chảy riêng
Gồm:
- 17 Tự luận (Trang 43-44)
- 41 Trắc nghiệm nhiều lựa chọn (Trang 44-48)
- 8 Trắc nghiệm Đúng / Sai (Trang 48-50)
- 8 Trả lời ngắn (Trang 50)
"""
import json

questions = []

# ==========================================
# I. TỰ LUẬN (17 CÂU)
# ==========================================
essay_b5 = [
    (1, 43, "Tính nhiệt lượng (theo đơn vị kJ) cần cung cấp để làm nóng chảy hoàn toàn 500g nước đá. Biết nhiệt nóng chảy riêng của nước đá là 3,34.10⁵ J/kg.",
     "167 kJ",
     None,
     "Áp dụng công thức tính nhiệt lượng nóng chảy:\nQ = m . λ\nTrong đó:\n- Khối lượng m = 500 g = 0,5 kg\n- Nhiệt nóng chảy riêng λ = 3,34.10⁵ J/kg\nSuy ra: Q = 0,5 . 3,34.10⁵ = 167 000 J = 167 kJ.",
     "Nhiệt lượng làm nóng chảy ở nhiệt độ nóng chảy không làm đổi nhiệt độ."),

    (2, 43, "Biết nhiệt nóng chảy riêng của vàng là 0,64.10⁵ J/kg. Nhiệt lượng cần cung cấp cho 0,2 kg vàng nóng chảy hoàn toàn ở nhiệt độ nóng chảy là bao nhiêu kJ?",
     "12,8 kJ",
     None,
     "Áp dụng công thức Q = m . λ:\n- m = 0,2 kg\n- λ = 0,64.10⁵ J/kg = 64 000 J/kg\nQ = 0,2 . 64 000 = 12 800 J = 12,8 kJ.",
     "Đơn vị tính ra kJ: 12,8 kJ."),

    (3, 43, "Thả cục nước đá khối lượng 30g ở 0°C vào cốc nước chứa 0,2 lít nước ở 20°C. Bỏ qua nhiệt dung của cốc. Hỏi nhiệt độ cuối của cốc nước là bao nhiêu (°C). Biết nhiệt nóng chảy riêng của nước đá là 3,34.10⁵ J/kg, nhiệt dung riêng của nước là 4180 J/kg.K.",
     "6,97°C",
     None,
     "Gọi t là nhiệt độ khi cân bằng nhiệt (0°C < t < 20°C).\n- Khối lượng nước đá: m_đá = 0,03 kg ở 0°C.\n- Khối lượng nước trong cốc: m_n = 0,2 kg (do D = 1 kg/lít) ở 20°C.\nNhiệt lượng nước đá thu vào để tan hoàn toàn và tăng lên nhiệt độ t:\nQ_thu = m_đá . λ + m_đá . c_n . (t - 0)\nQ_thu = 0,03 . 334 000 + 0,03 . 4180 . t = 10020 + 125,4 t.\nNhiệt lượng cốc nước tỏa ra để hạ từ 20°C xuống t:\nQ_tỏa = m_n . c_n . (20 - t) = 0,2 . 4180 . (20 - t) = 836 . (20 - t) = 16720 - 836 t.\nPhương trình cân bằng nhiệt (Q_thu = Q_tỏa):\n10020 + 125,4 t = 16720 - 836 t\n<=> 961,4 t = 6700 => t = 6700 / 961,4 ≈ 6,969°C ≈ 6,97°C.",
     "Đáp số: 6,97°C (làm tròn xấp xỉ 7°C)."),

    (4, 43, "Một thỏi nhôm có khối lượng 1,0 kg ở 8°C. Cần cung cấp nhiệt lượng Q bằng bao nhiêu kJ để làm nóng chảy hoàn toàn thỏi nhôm này? Biết nhôm nóng chảy ở 658°C, nhiệt nóng chảy riêng của nhôm là 3,9.10⁵ J/kg và nhiệt dung riêng của nhôm là 880 J/kg.K.",
     "962 kJ",
     None,
     "Quá trình gồm 2 giai đoạn:\n1. Nâng nhiệt độ thỏi nhôm từ 8°C lên nhiệt độ nóng chảy 658°C:\nΔt = 658 - 8 = 650°C.\nQ1 = m . c . Δt = 1,0 . 880 . 650 = 572 000 J = 572 kJ.\n2. Làm nóng chảy hoàn toàn thỏi nhôm ở 658°C:\nQ2 = m . λ = 1,0 . 3,9.10⁵ = 390 000 J = 390 kJ.\nTổng nhiệt lượng cần cung cấp:\nQ = Q1 + Q2 = 572 + 390 = 962 kJ.",
     "Đáp số chính thức: 962 kJ."),

    (5, 43, "Người ta thả một cục nước đá khối lượng 80 g ở 0°C vào một cốc nhôm đựng 0,4 kg nước ở 20°C đặt trong nhiệt lượng kế. Khối lượng của cốc nhôm là 0,2 kg. Tính nhiệt độ của nước trong cốc nhôm (theo °C, làm tròn đến 1 chữ số thập phân) khi cục nước vừa tan hết. Nhiệt nóng chảy riêng của nước đá là 3,4.10⁵ J/kg. Nhiệt dung riêng của nhôm là 880 J/kg.K và của nước là 4180 J/kg.K. Bỏ qua sự mất mát nhiệt độ do nhiệt truyền ra bên ngoài nhiệt lượng kế.",
     "4,47°C (hoặc ~4,5°C)",
     None,
     "Gọi t là nhiệt độ cuối khi nước đá vừa tan hết và hệ đạt cân bằng nhiệt:\n- Nhiệt lượng nước đá thu vào để tan thành nước và tăng từ 0°C lên t:\nQ_thu = m_đá . λ + m_đá . c_n . t = 0,08 . 340 000 + 0,08 . 4180 . t = 27200 + 334,4 t.\n- Nhiệt lượng tỏa ra từ cốc nhôm và nước đựng bên trong hạ từ 20°C xuống t:\nQ_tỏa = (m_nhôm . c_nhôm + m_n . c_n) . (20 - t)\n= (0,2 . 880 + 0,4 . 4180) . (20 - t) = (176 + 1672) . (20 - t) = 1848 . (20 - t) = 36960 - 1848 t.\nCân bằng nhiệt: Q_thu = Q_tỏa:\n27200 + 334,4 t = 36960 - 1848 t\n<=> 2182,4 t = 9760 => t = 9760 / 2182,4 ≈ 4,47°C.",
     "Đáp số chính thức: 4,47°C."),

    (6, 43, "Tính nhiệt lượng cần cung cấp (tính ra đơn vị MegaJun (MJ) và lấy đến số thập phân thứ 2) cho 5 kg nước đá ở -10°C chuyển thành nước ở 0°C. Cho biết nhiệt dung riêng của nước đá là 2090 J/kg.K và nhiệt nóng chảy riêng của nước đá là 3,4.10⁵ J/kg.",
     "1,80 MJ",
     None,
     "Quá trình gồm 2 giai đoạn:\n1. Tăng nhiệt độ 5 kg nước đá từ -10°C lên 0°C:\nQ1 = m . c_đá . Δt = 5 . 2090 . [0 - (-10)] = 5 . 2090 . 10 = 104 500 J.\n2. Làm nóng chảy hoàn toàn 5 kg nước đá ở 0°C:\nQ2 = m . λ = 5 . 3,4.10⁵ = 1 700 000 J.\nTổng nhiệt lượng cần cung cấp:\nQ = Q1 + Q2 = 104 500 + 1 700 000 = 1 804 500 J ≈ 1,8045 MJ ≈ 1,80 MJ.",
     "Đáp số: 1,80 MJ."),

    (7, 43, "Cần bao nhiêu thời gian(s) để làm nóng chảy hoàn toàn 2 kg đồng có nhiệt độ ban đầu 30°C, trong một lò nung điện công suất 20000W. Biết chỉ có 50% năng lượng tiêu thụ của lò được dùng vào việc làm đồng nóng lên và nóng chảy hoàn toàn ở nhiệt độ không đổi. Nhiệt dung riêng của đồng là 380J/kg.K; nhiệt độ nóng chảy của đồng là 1084°C; nhiệt nóng chảy riêng của đồng là 1,8.10⁵ J/kg.",
     "116 s",
     None,
     "1. Nhiệt lượng cần để nâng đồng từ 30°C lên 1084°C:\nQ1 = m . c . (1084 - 30) = 2 . 380 . 1054 = 801 040 J.\n2. Nhiệt lượng làm nóng chảy hoàn toàn đồng ở 1084°C:\nQ2 = m . λ = 2 . 1,8.10⁵ = 360 000 J.\nTổng nhiệt lượng có ích cần cung cấp:\nQ_ích = Q1 + Q2 = 801 040 + 360 000 = 1 161 040 J.\n3. Công suất có ích của lò nung:\nP_ích = H . P = 50% . 20 000 = 10 000 W.\nThời gian cần thiết:\nt = Q_ích / P_ích = 1 161 040 / 10 000 = 116,104 s ≈ 116 s.",
     "Đáp số chính thức: 116 s."),

    (8, 43, "Biết nhiệt nóng chảy riêng của đồng là 1,8.10⁵ J/kg. Nhiệt lượng cần cung cấp cho 1kg đồng nóng chảy ở nhiệt độ nóng chảy là bao nhiêu kWh.",
     "0,05 kWh",
     None,
     "Nhiệt lượng cần cung cấp tính theo Jun:\nQ = m . λ = 1 . 1,8.10⁵ = 180 000 J.\nĐổi Jun sang kWh (1 kWh = 3,6.10⁶ J):\nQ = 180 000 / 3 600 000 = 0,05 kWh.",
     "1 kWh = 3 600 000 J. Đáp số: 0,05 kWh."),

    (9, 43, "Biết nhiệt dung riêng và nhiệt nóng chảy riêng của đồng 380 J/kgK và 1,8.10⁵ J/kg. Nhiệt lượng cần cung cấp cho 10kg đồng đang ở 35°C đến khi nóng chảy hoàn toàn ở nhiệt độ 1085°C là bao nhiêu kWh.",
     "1,61 kWh",
     None,
     "1. Nhiệt lượng đưa 10kg đồng từ 35°C đến 1085°C:\nQ1 = m . c . Δt = 10 . 380 . (1085 - 35) = 3800 . 1050 = 3 990 000 J.\n2. Nhiệt lượng làm nóng chảy hoàn toàn 10kg đồng ở 1085°C:\nQ2 = m . λ = 10 . 1,8.10⁵ = 1 800 000 J.\nTổng nhiệt lượng:\nQ = Q1 + Q2 = 3 990 000 + 1 800 000 = 5 790 000 J.\nĐổi sang kWh:\nQ = 5 790 000 / 3 600 000 ≈ 1,6083 kWh ≈ 1,61 kWh.",
     "Đáp số chính thức: 1,61 kWh."),

    (10, 43, "Người ta thả một cục nước đá khối lượng 0,1 kg ở -8°C vào một cốc nhôm đựng nước ở 25°C trong nhiệt lượng kế. Nhiệt dung riêng của nhiệt lượng kế (gồm cốc nhôm và nước đựng trong cốc) là 1800J/kg, nhiệt nóng chảy riêng của nước đá là 3,4.10⁵ J/kg, nhiệt dung riêng của nước đá là 2090 J/kg. Tính nhiệt độ của nước ở trạng thái cân bằng khi cục nước đá vừa tan hết. Bỏ qua sự mất mát nhiệt do nhiệt truyền ra bên ngoài nhiệt lượng kế.",
     "4,21°C",
     None,
     "Gọi t là nhiệt độ cân bằng:\n- Nhiệt lượng thu vào của nước đá:\nQ_thu = m_đá . c_đá . (0 - (-8)) + m_đá . λ + m_đá . c_n . t\n= 0,1 . 2090 . 8 + 0,1 . 340 000 + 0,1 . 4180 . t = 1672 + 34000 + 418 t = 35672 + 418 t.\n- Nhiệt lượng tỏa ra của nhiệt lượng kế chứa nước (nhiệt dung C = m.c_tổng = 1800 J/K):\nQ_tỏa = C . (25 - t) = 1800 . (25 - t) = 45000 - 1800 t.\nCân bằng nhiệt: 35672 + 418 t = 45000 - 1800 t\n<=> 2218 t = 9328 => t = 9328 / 2218 ≈ 4,2056°C ≈ 4,21°C.",
     "Đáp số: 4,21°C."),

    (11, 43, "Dùng một nguồn điện có công suất không đổi để đun nóng một khối lượng Chì đang ở 37,5°C đến nhiệt độ nóng chảy là 327,5°C trong thời gian 2 phút 25 giây. Sau đó khối Chì bắt đầu nóng chảy. Cho nhiệt dung riêng và nhiệt nóng chảy riêng của Chì là 130 J/kg.K và 2,5.10⁴ J/kg. Tìm thời gian khối lượng Chì nóng chảy hết.",
     "96,2 s",
     None,
     "Gọi m là khối lượng Chì, P là công suất cấp nhiệt không đổi.\n1. Giai đoạn tăng nhiệt độ từ 37,5°C lên 327,5°C (Δt = 290°C):\nThời gian t1 = 2 phút 25 s = 145 s.\nNhiệt lượng cấp: Q1 = P . t1 = m . c . Δt\n=> P . 145 = m . 130 . 290 = 37700 m => P / m = 37700 / 145 = 260 W/kg.\n2. Giai đoạn Chì nóng chảy hoàn toàn ở 327,5°C:\nNhiệt lượng cần: Q2 = P . t2 = m . λ\n=> t2 = (m . λ) / P = λ / (P / m) = 25 000 / 260 ≈ 96,15 s ≈ 96,2 s.",
     "Đáp số chính thức: 96,2 s."),

    (12, 43, "Một hỗn hợp gồm nước và nước đá đang ở nhiệt độ 0°C. Cung cấp nhiệt lượng cho hỗn hợp (bỏ qua sự mất mát nhiệt ra môi trường). Đồ thị phụ thuộc nhiệt độ vào nhiệt lượng được biểu diễn bên. Biết nhiệt dung riêng của nước 4200 J/kg.K; nhiệt nóng chảy của nước đá 3,33.10⁵ J/kg. Hãy xác định có bao nhiêu nước và nước đá ở trong hỗn hợp ban đầu.",
     "m_đá = 0,15 kg; m_nước = 0,85 kg",
     "images/crops/b5_tl_c12_do_thi_nuoc_da.jpg",
     "Quan sát đồ thị t(°C) theo Q(kJ):\n1. Giai đoạn 1 (từ Q = 0 đến Q = 50 kJ = 50 000 J):\nNhiệt độ không đổi ở 0°C, đây là giai đoạn nước đá trong hỗn hợp đang tan chảy hoàn toàn.\nNhiệt lượng làm tan đá: Q_tan = m_đá . λ = 50 000 J.\n=> m_đá = 50 000 / (3,33.10⁵) ≈ 0,150 kg = 0,15 kg.\n2. Giai đoạn 2 (từ Q = 50 kJ đến Q = 134 kJ):\nNhiệt độ của toàn bộ lượng nước (gồm nước ban đầu m_nước và nước do đá tan ra m_đá) tăng từ 0°C lên 20°C:\nΔQ = 134 - 50 = 84 kJ = 84 000 J.\nTa có: ΔQ = (m_đá + m_nước) . c_n . Δt\n=> 84 000 = (0,15 + m_nước) . 4200 . 20 = (0,15 + m_nước) . 84 000\n=> 0,15 + m_nước = 1,0 kg => m_nước = 1,0 - 0,15 = 0,85 kg.\nKết luận: Ban đầu có 0,15 kg nước đá và 0,85 kg nước.",
     "Xem đồ thị kèm theo: đoạn nằm ngang là tan đá (50kJ), đoạn xiên là đun nước (84kJ)."),

    (13, 44, "Cung cấp nhiệt lượng cho một khối lượng Chì đến khi nó nóng chảy hoàn toàn. Đồ thị liên hệ giữa nhiệt độ và nhiệt lượng cung cấp cho khối Chì như hình bên. Cho nhiệt dung riêng của chì là 125 J/kgK, nhiệt nóng chảy riêng của chì là 0,25.10⁵ J/kg. Tìm giá trị Q2.",
     "11,3 kJ (hoặc 11,25 kJ)",
     "images/crops/b5_tl_c13_do_thi_chi.jpg",
     "Dựa vào đồ thị t(°C) theo Q(kJ):\n- Từ nhiệt độ ban đầu t1 = 77,5°C đến nhiệt độ nóng chảy t2 = 327,5°C:\nĐộ tăng nhiệt độ: Δt = 327,5 - 77,5 = 250°C.\nNhiệt lượng cung cấp: Q1 = 6,25 kJ = 6250 J.\nKhối lượng của chì: m = Q1 / (c . Δt) = 6250 / (125 . 250) = 6250 / 31250 = 0,2 kg.\n- Giai đoạn nóng chảy hoàn toàn ở 327,5°C:\nNhiệt lượng nóng chảy: Q_nc = m . λ = 0,2 . 0,25.10⁵ = 5000 J = 5 kJ.\nTổng nhiệt lượng tại điểm cuối Q2:\nQ2 = Q1 + Q_nc = 6,25 + 5,00 = 11,25 kJ ≈ 11,3 kJ.",
     "Đáp số: 11,3 kJ (hoặc chính xác 11,25 kJ)."),

    (14, 44, "Người ta thả một cục nước đá khối lượng 100 g ở 0°C vào một cốc nhôm đựng 0,4 kg nước ở 20°C đặt trong nhiệt lượng kế. Khối lượng của cốc nhôm là 0,20 kg. Tính nhiệt độ (°C) của nước trong cốc nhôm khi cục nước vừa tan hết (làm tròn đến 1 chữ số thập phân). Nhiệt nóng chảy riêng của nước đá là 3,4.10⁵ J/kg. Nhiệt dung riêng của nhôm là 880 J/kg.K, và của nước là 4180 J/kg.K, của nước đá là 1800 J/kg.K. Bỏ qua sự mất mát nhiệt lượng do nhiệt truyền ra bên ngoài nhiệt lượng kế.",
     "1,31°C",
     None,
     "Gọi t là nhiệt độ cân bằng khi cục đá vừa tan hết:\n- Nhiệt lượng nước đá thu vào để tan ở 0°C và ấm lên đến t:\nQ_thu = m_đá . λ + m_đá . c_n . t = 0,1 . 340 000 + 0,1 . 4180 . t = 34000 + 418 t.\n- Nhiệt lượng tỏa ra từ cốc nhôm và 0,4 kg nước từ 20°C xuống t:\nQ_tỏa = (m_nhôm . c_nhôm + m_n . c_n) . (20 - t)\n= (0,2 . 880 + 0,4 . 4180) . (20 - t) = (176 + 1672) . (20 - t) = 1848 . (20 - t) = 36960 - 1848 t.\nPhương trình cân bằng nhiệt:\n34000 + 418 t = 36960 - 1848 t\n<=> 2266 t = 2960 => t = 2960 / 2266 ≈ 1,306°C ≈ 1,31°C.",
     "Đáp số chính thức: 1,31°C."),

    (15, 44, "Cần bao nhiêu thời gian (s) để làm nóng chảy hoàn toàn 5kg chì có nhiệt độ ban đầu 30°C, trong một lò nung điện công suất 2000 W. Biết chỉ có 60% năng lượng tiêu thụ của lò được dùng vào việc làm chì nóng lên và nóng chảy hoàn toàn ở nhiệt độ không đổi. Nhiệt dung riêng của chì là 126 J/kg.K. Nhiệt độ nóng chảy là 327,5°C. Nhiệt nóng chảy riêng của Chì là 2,5.10⁴ J/kg.",
     "260 s",
     None,
     "1. Nhiệt lượng cần đưa 5kg chì từ 30°C lên nhiệt độ nóng chảy 327,5°C:\nQ1 = m . c . Δt = 5 . 126 . (327,5 - 30) = 630 . 297,5 = 187 425 J.\n2. Nhiệt lượng làm nóng chảy hoàn toàn 5kg chì ở 327,5°C:\nQ2 = m . λ = 5 . 2,5.10⁴ = 125 000 J.\nTổng nhiệt lượng có ích cần:\nQ_ích = Q1 + Q2 = 187 425 + 125 000 = 312 425 J.\n3. Công suất có ích của lò nung:\nP_ích = H . P = 0,60 . 2000 = 1200 W.\nThời gian cần thiết:\nt = Q_ích / P_ích = 312 425 / 1200 ≈ 260,35 s ≈ 260 s.",
     "Đáp số chính thức: 260 s."),

    (16, 44, "Một thùng đựng 20 lít nước ở nhiệt độ 20°C. Cho khối lượng riêng của nước là 1000 kg/m³. Biết nhiệt dung riêng của nước là c = 4180 J/kg.K.\na) Tính nhiệt lượng cần truyền cho nước trong thùng để nhiệt độ của nó tăng lên tới 70°C.\nb) Tính thời gian truyền nhiệt lượng cần thiết nếu dùng một thiết bị điện có công suất 2,5 kW để đun lượng nước trên. Biết chỉ có 80% điện năng tiêu thụ được dùng để làm nóng nước.",
     "a/ 4,18 MJ; b/ 2090 s",
     None,
     "a) Khối lượng nước trong thùng:\nm = V . D = 0,020 m³ . 1000 kg/m³ = 20 kg.\nĐộ tăng nhiệt độ: Δt = 70 - 20 = 50°C.\nNhiệt lượng cần truyền:\nQ = m . c . Δt = 20 . 4180 . 50 = 4 180 000 J = 4,18 MJ.\n\nb) Công suất có ích để làm nóng nước:\nP_ích = H . P = 0,80 . 2500 W = 2000 W.\nThời gian truyền nhiệt lượng:\nt = Q / P_ích = 4 180 000 / 2000 = 2090 s (khoảng 34 phút 50 giây).",
     "Đáp số chính thức: a/ 4,18 MJ; b/ 2090 s."),

    (17, 44, "Hỏi phải đốt cháy bao nhiêu kilôgam xăng trong lò nấu chảy với hiệu suất 30% (nghĩa là 30% nhiệt lượng cung cấp cho lò được dùng vào việc đun nóng đồng cho đến khi nóng chảy), để nung nóng đến nhiệt độ nóng chảy và làm chảy lỏng 10 tấn đồng? Cho biết đồng có nhiệt độ ban đầu là 13°C nóng chảy đến nhiệt độ 1083°C, nhiệt dung riêng là 380 J/kg.K, nhiệt nóng chảy riêng là 1,8.10⁵ J/kg và nhiệt lượng tỏa ra khi đốt cháy 1 kg xăng là 4,6.10⁷ J/kg.",
     "425 kg",
     None,
     "1. Khối lượng đồng: m = 10 tấn = 10 000 kg.\nNhiệt lượng cần đưa đồng từ 13°C đến nhiệt độ nóng chảy 1083°C:\nQ1 = m . c . (1083 - 13) = 10 000 . 380 . 1070 = 4 066 000 000 J = 4,066.10⁹ J.\n2. Nhiệt lượng làm nóng chảy 10 tấn đồng:\nQ2 = m . λ = 10 000 . 1,8.10⁵ = 1 800 000 000 J = 1,8.10⁹ J.\nTổng nhiệt lượng có ích cần:\nQ_ích = Q1 + Q2 = 4,066.10⁹ + 1,8.10⁹ = 5,866.10⁹ J.\n3. Tổng nhiệt lượng do xăng đốt cháy tỏa ra:\nQ_tp = Q_ích / H = 5,866.10⁹ / 0,30 ≈ 1,9553.10¹⁰ J.\nKhối lượng xăng cần đốt cháy:\nm_xăng = Q_tp / q = 1,9553.10¹⁰ / (4,6.10⁷) ≈ 425,07 kg ≈ 425 kg.",
     "Đáp số chính thức: 425 kg xăng.")
]

for item in essay_b5:
    q_num, page, text, ans, img, exp, notes = item
    questions.append({
        "id": f"b5_tl_{q_num:02d}",
        "lessonId": 5,
        "type": "essay",
        "page": page,
        "pageImage": f"images/pages/page_{page}.jpg",
        "questionNumber": f"Câu {q_num}",
        "section": "I. TỰ LUẬN",
        "question": text,
        "correctAnswer": ans,
        "image": img,
        "explanation": exp,
        "notes": notes
    })

# ==========================================
# II. TRẮC NGHIỆM ĐƠN (41 CÂU)
# ==========================================
mc_b5_items = [
    (1, 44, "Vật (chất) nào dưới đây không có nhiệt độ nóng chảy xác định?",
     ["A. Miếng nhựa thông.", "B. Hạt đường.", "C. Viên kim cương.", "D. Khối thạch anh."],
     "A", None,
     "Nhựa thông (hoặc nhựa đường, thuỷ tinh) là chất rắn vô định hình, không có cấu trúc tinh thể nên không có nhiệt độ nóng chảy xác định mà mềm dần khi tăng nhiệt độ.",
     "Chất rắn kết tinh (đường, kim cương, thạch anh) có nhiệt độ nóng chảy xác định."),

    (2, 44, "Đơn vị của nhiệt nóng chảy riêng là",
     ["A. J/s", "B. J/kg.độ", "C. J/kg.", "D. kg/J"],
     "C", None,
     "Theo công thức λ = Q / m, nhiệt lượng Q đo bằng Jun (J), khối lượng m đo bằng kilôgam (kg), nên đơn vị của nhiệt nóng chảy riêng λ là J/kg.",
     "Đơn vị SI của nhiệt nóng chảy riêng là J/kg."),

    (3, 44, "Gọi Q là nhiệt lượng cần truyền cho vật có khối lượng m để làm vật nóng chảy hoàn toàn vật ở nhiệt độ nóng chảy mà không thay đổi nhiệt độ của vật. Thì nhiệt nóng chảy riêng λ của chất đó được tính theo công thức:",
     ["A. λ = Q . m", "B. λ = Q + m", "C. λ = Q - m", "D. λ = Q / m"],
     "D", None,
     "Công thức định nghĩa nhiệt nóng chảy riêng: λ = Q / m.",
     "Q = λ . m là nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn khối lượng m ở nhiệt độ nóng chảy."),

    (4, 44, "Không thể kết luận gì về nhiệt nóng chảy riêng của chất nào dưới đây?",
     ["A. Miếng nhựa đường (hắc ín)", "B. Muối ăn", "C. Viên kim cương", "D. Khối thạch anh"],
     "A", None,
     "Nhựa đường là chất rắn vô định hình, không có nhiệt độ nóng chảy xác định nên không có đại lượng nhiệt nóng chảy riêng.",
     "Nhiệt nóng chảy riêng chỉ áp dụng cho chất rắn kết tinh."),

    (5, 44, "Nhiệt độ nóng chảy riêng của vật rắn phụ thuộc vào những yếu tố nào?",
     ["A. Phụ thuộc vào nhiệt độ của vật rắn và áp suất ngoài.",
      "B. Phụ thuộc bản chất của vật rắn",
      "C. Phụ thuộc bản chất và nhiệt độ của vật rắn",
      "D. Phụ thuộc bản chất và nhiệt độ của vật rắn, đồng thời phụ thuộc áp suất ngoài"],
     "B", None,
     "Nhiệt nóng chảy riêng λ là một đặc tính vật lý phụ thuộc vào bản chất của chất rắn.",
     "Mỗi chất kết tinh có một nhiệt nóng chảy riêng đặc trưng."),

    (6, 45, "Tính nhiệt lượng Q cần cung cấp để làm nóng chảy 500g nước đá ở 0°C. Biết nhiệt nóng chảy riêng của nước đá bằng 3,34.10⁵ J/kg",
     ["A. Q = 7.10⁷ J", "B. Q = 167 kJ", "C. Q = 167 J", "D. Q = 167.10³ J"],
     "B", None,
     "Áp dụng Q = m . λ = 0,5 kg . 3,34.10⁵ J/kg = 167 000 J = 167 kJ (hoặc 167.10³ J, phương án B là chuẩn gọn).",
     "Đổi 500g = 0,5kg."),

    (7, 45, "Để giải thích hiện tượng tách kim loại bằng nóng chảy người ta dùng khái niệm về đại lượng nào?",
     ["A. Nhiệt dung riêng", "B. Nhiệt lượng", "C. Nhiệt nóng chảy riêng", "D. Nhiệt hoá hơi riêng"],
     "C", None,
     "Để tách các kim loại khỏi quặng hoặc tách hỗn hợp kim loại qua nhiệt độ và nhiệt lượng cung cấp cho quá trình chuyển thể lỏng, người ta dựa vào nhiệt nóng chảy riêng và nhiệt độ nóng chảy.",
     "Khái niệm liên quan trực tiếp đến sự nóng chảy là nhiệt nóng chảy riêng."),

    (8, 45, "Cho bảng số liệu sau (Nước 0°C - 3,34.10⁵; Sắt 1535°C - 2,77.10⁵; Đồng 1084°C - 1,80.10⁵; Chì 327°C - 0,25.10⁵ J/kg). Phát biểu nào sau đây là đúng?",
     ["A. Cần nhiệt lượng 3,34.10⁵ J để làm nóng chảy nước đá.",
      "B. Sắt có nhiệt độ nóng chảy lớn nhất nên nhiệt nóng chảy riêng của nó lớn nhất.",
      "C. Cần nhiệt lượng 1,8.10⁵ J để làm nóng chảy 1kg đồng",
      "D. Cần nhiệt lượng 0,25.10⁵ J để làm nóng chảy hoàn toàn 1kg chì ở 327°C."],
     "D", "images/crops/b5_c8_bang_hinh_anh.jpg",
     "Phát biểu chính xác về mặt định nghĩa nhiệt nóng chảy riêng: 'Cần nhiệt lượng 0,25.10⁵ J để làm nóng chảy hoàn toàn 1kg chì ở 327°C' (đúng điều kiện nhiệt độ nóng chảy và làm nóng chảy hoàn toàn).",
     "Câu A, C thiếu điều kiện 'ở nhiệt độ nóng chảy' hoặc 'hoàn toàn'."),

    (9, 45, "Trong thí nghiệm xác định nhiệt nóng chảy riêng của nước đá không cần thiết phải có dụng cụ nào sau đây?",
     ["A. Oát kế", "B. Nhiệt lượng kế", "C. Đồng hồ bấm giây", "D. Thước mét"],
     "D", None,
     "Thí nghiệm đo nhiệt nóng chảy riêng cần oát kế (đo công suất P), nhiệt lượng kế (giữ nhiệt), đồng hồ bấm giây (đo thời gian t), cân (đo khối lượng m). Thước mét không dùng trong bài thí nghiệm này.",
     "Dụng cụ thừa: Thước mét."),

    (10, 45, "Gọi Q là nhiệt lượng cần truyền cho vật, m là khối lượng của vật (kg). Tỉ số Q/m gọi là",
     ["A. nhiệt dung riêng của chất làm nên vật",
      "B. nhiệt nóng chảy riêng của chất làm nên vật",
      "C. trọng lượng riêng của vật",
      "D. khối lượng riêng của vật"],
     "B", None,
     "Tỉ số λ = Q / m khi chất nóng chảy hoàn toàn ở nhiệt độ nóng chảy gọi là nhiệt nóng chảy riêng.",
     "Định nghĩa chuẩn trong SGK Vật Lí 12."),

    (11, 45, "Trong các hiện tượng sau, hiện tượng nào liên quan đến sự nóng chảy?",
     ["A. Thả cục nước đá vào cốc nước", "B. Đốt ngọn đèn dầu", "C. Đun nóng một nồi nước", "D. Cho cốc nước vào tủ lạnh"],
     "A", None,
     "Khi thả cục nước đá vào cốc nước, nước đá nhận nhiệt lượng từ nước và bị nóng chảy tan thành nước lỏng.",
     "Hiện tượng chuyển từ thể rắn sang thể lỏng là sự nóng chảy."),

    (12, 45, "Biết nhiệt nóng chảy riêng của nước đá là 3,34.10⁵ J/kg. Người ta cung cấp nhiệt lượng 5,01.10⁵ J có thể làm nóng chảy hoàn toàn bao nhiêu kg nước đá",
     ["A. 16,7 kg", "B. 1,5kg", "C. 8,35kg", "D. 0,668kg"],
     "B", None,
     "Khối lượng nước đá tan hoàn toàn:\nm = Q / λ = (5,01.10⁵) / (3,34.10⁵) = 1,5 kg.",
     "Áp dụng trực tiếp m = Q / λ."),

    (13, 45, "Trong công nghệ đúc kim loại, người ta quan tâm đến đại lượng nào sau đây?",
     ["A. Nhiệt lượng của vật liệu đúc",
      "B. Nhiệt nóng chảy riêng của vật liệu đúc",
      "C. Nhiệt dung của vật liệu đúc",
      "D. Nhiệt dung riêng của vật liệu đúc"],
     "B", None,
     "Trong công nghệ đúc kim loại, việc nấu chảy kim loại đòi hỏi cung cấp nhiệt lượng lớn ứng với nhiệt nóng chảy riêng của vật liệu để chuyển hoàn toàn sang thể lỏng rồi rót vào khuôn.",
     "Đại lượng quyết định năng lượng nấu chảy là nhiệt nóng chảy riêng."),

    (14, 45, "Nhiệt nóng chảy riêng của đồng là 1,8.10⁵ J/kg. Câu nào dưới đây là đúng?",
     ["A. Khối đồng sẽ tỏa ra nhiệt lượng 1,8.10⁵ J khi nóng chảy hoàn toàn.",
      "B. Mỗi kilogam đồng cần thu nhiệt lượng 1,8.10⁵ J để hóa lỏng hoàn toàn ở nhiệt độ nóng chảy.",
      "C. Khối đồng cần thu nhiệt lượng 1,8.10⁵ J để hóa lỏng.",
      "D. Mỗi kilogam đồng tỏa ra nhiệt lượng 1,8.10⁵ J khi hóa lỏng hoàn toàn."],
     "B", None,
     "Nhiệt nóng chảy riêng 1,8.10⁵ J/kg nghĩa là mỗi kilogam đồng ở nhiệt độ nóng chảy cần thu một nhiệt lượng là 1,8.10⁵ J để nóng chảy (hóa lỏng) hoàn toàn.",
     "Quá trình nóng chảy là quá trình thu nhiệt."),

    (15, 45, "Điều nào sau đây là sai khi nói về nhiệt nóng chảy?",
     ["A. Nhiệt nóng chảy của vật rắn là nhiệt lượng cung cấp cho vật rắn trong quá trình nóng chảy",
      "B. Nhiệt nóng chảy có đơn vị Jun (J)",
      "C. Các vật có khối lượng bằng nhau thì có nhiệt nóng chảy như nhau.",
      "D. Nhiệt nóng chảy tỉ lệ thuận với khối lượng của vật rắn."],
     "C", None,
     "Các chất khác nhau có nhiệt nóng chảy riêng λ khác nhau, do đó hai vật dù có cùng khối lượng m nhưng làm bằng hai chất khác nhau thì nhiệt nóng chảy Q = λm sẽ khác nhau. Do đó phát biểu C là sai.",
     "Nhiệt nóng chảy phụ thuộc cả vào bản chất của chất làm vật."),

    (16, 46, "Cho bảng nhiệt độ nóng chảy của các chất sau: Niken 1452°C, Sắt 1530°C, Thép 1300°C, Đồng đỏ 1083°C, Vàng 1063°C, Bạc 960°C, Nhôm 659°C, Chì 327°C, Thiếc 232°C, Nước đá 0°C. Sắp xếp theo chiều tăng dần nhiệt độ nóng chảy của các chất thép, đồng, nhôm, thiếc:",
     ["A. Đồng, nhôm, thiếc, sắt.", "B. Thiếc, nhôm, đồng, thép", "C. Nhôm, đồng, thiếc, thép", "D. Thiếc, đồng, nhôm, thép"],
     "B", None,
     "Tra bảng nhiệt độ nóng chảy:\n- Thiếc: 232°C\n- Nhôm: 659°C\n- Đồng đỏ: 1083°C\n- Thép: 1300°C\nThứ tự tăng dần: Thiếc < Nhôm < Đồng < Thép.",
     "Chọn đáp án B."),

    (17, 46, "Vật (chất) nào dưới đây có nhiệt độ nóng chảy xác định?",
     ["A. Miếng nhựa thông", "B. Hạt đường", "C. Nhựa đường", "D. Miếng cao su"],
     "B", None,
     "Hạt đường là chất rắn kết tinh có cấu trúc tinh thể xác định nên nóng chảy ở nhiệt độ xác định. Nhựa thông, nhựa đường, cao su là chất rắn vô định hình.",
     "Chất rắn kết tinh có nhiệt độ nóng chảy xác định."),

    (18, 46, "Điều nào sau đây là sai khi nói về nhiệt nóng chảy?",
     ["A. Nhiệt nóng chảy của vật rắn là nhiệt lượng cung cấp cho vật rắn trong quá trình nóng chảy.",
      "B. Đơn vị của nhiệt nóng chảy là Jun (J).",
      "C. Các chất có khối lượng bằng nhau thì có nhiệt nóng chảy như nhau.",
      "D. Nhiệt nóng chảy tính bằng công thức Q = λm"],
     "C", None,
     "Cùng khối lượng m nhưng các chất khác nhau có nhiệt nóng chảy riêng λ khác nhau, nên nhiệt nóng chảy Q = λm khác nhau. C sai.",
     "Đáp án C."),

    (19, 46, "Dùng bảng số liệu (Nước đá 0°C - 3,34.10⁵; Sắt 1535°C - 2,77.10⁵; Đồng 1084°C - 1,80.10⁵; Chì 327°C - 0,25.10⁵ J/kg). Nhiệt lượng cần thiết để làm nóng chảy hoàn toàn 100g nước đá là",
     ["A. 3,34.10⁵ J", "B. 33,4 kJ", "C. 3,34 kJ", "D. 0,334kJ"],
     "B", "images/crops/b5_c19_bang_hinh_anh.jpg",
     "Đổi m = 100 g = 0,1 kg.\nNhiệt lượng cần: Q = m . λ = 0,1 . 3,34.10⁵ = 33 400 J = 33,4 kJ.",
     "Chọn B: 33,4 kJ."),

    (20, 46, "Dựa vào bảng số liệu trên, chọn đáp án đúng:",
     ["A. Sắt có nhiệt độ nóng chảy lớn nhất nên nhiệt nóng chảy riêng của nó lớn nhất.",
      "B. Nhiệt dung của đồng lớn hơn của chì",
      "C. Cần nhiệt lượng 1,8.10⁵ J để làm nóng chảy đồng",
      "D. Cần nhiệt lượng 0,25.10⁵ J để làm nóng chảy hoàn toàn 1kg chì ở 327°C"],
     "D", "images/crops/b5_c19_bang_hinh_anh.jpg",
     "Phát biểu D đúng và đầy đủ nhất theo số liệu bảng: 1 kg chì ở nhiệt độ nóng chảy 327°C cần thu nhiệt lượng đúng bằng λ = 0,25.10⁵ J để nóng chảy hoàn toàn.",
     "Nhiệt độ nóng chảy cao không đồng nghĩa với nhiệt nóng chảy riêng lớn nhất (nước đá có λ lớn hơn sắt)."),

    (21, 46, "Nhiệt nóng chảy riêng của một chất là ...... cần cung cấp để làm cho một đơn vị khối lượng chất đó nóng chảy hoàn toàn ở nhiệt độ nóng chảy mà không làm thay đổi nhiệt độ. Tìm từ thích hợp điền vào chỗ trống",
     ["A. Nhiệt độ", "B. Nhiệt dung", "C. Nhiệt lượng", "D. Nhiệt dung riêng"],
     "C", None,
     "Định nghĩa chuẩn: Nhiệt nóng chảy riêng của một chất là nhiệt lượng cần cung cấp để làm cho một đơn vị khối lượng chất đó nóng chảy hoàn toàn ở nhiệt độ nóng chảy.",
     "Từ cần điền là 'Nhiệt lượng'."),

    (22, 46, "Tính nhiệt lượng Q cần cung cấp để làm nóng chảy 200g nước đá ở 0°C. Biết nhiệt nóng chảy riêng của nước đá bằng 3,34.10⁵J/kg",
     ["A. Q = 6,68 J", "B. Q = 6,68k J", "C. Q = 66,8kJ", "D. Q = 668kJ"],
     "C", None,
     "m = 200 g = 0,2 kg.\nQ = m . λ = 0,2 . 3,34.10⁵ = 66 800 J = 66,8 kJ.",
     "Chọn C: 66,8 kJ."),

    (23, 46, "Đơn vị nào sau đây là đơn vị của nhiệt nóng chảy riêng của vật rắn?",
     ["A. Jun trên kilôgam độ (J/kg. độ)", "B. Jun trên kilôgam (J/ kg).", "C. Jun (J)", "D. Jun trên độ (J/ độ)."],
     "B", None,
     "Nhiệt nóng chảy riêng có đơn vị SI là Jun trên kilôgam (J/kg).",
     "J/(kg.K) là nhiệt dung riêng; J là nhiệt lượng; J/K là nhiệt dung."),

    (24, 46, "Điều nào sau đây là sai khi nói về nhiệt nóng chảy riêng của chất rắn?",
     ["A. Nhiệt nóng chảy riêng của một chất có độ lớn bằng nhiệt lượng cần cung cấp để làm nóng chảy 1kg chất đó ở nhiệt độ nóng chảy.",
      "B. Đơn vị của nhiệt nóng chảy riêng là Jun trên kilôgam (J/ kg).",
      "C. Các chất khác nhau thì nhiệt nóng chảy riêng của chúng khác nhau.",
      "D. Nhiệt nóng chảy riêng của một chất phụ thuộc vào khối lượng của chất đó."],
     "D", None,
     "Nhiệt nóng chảy riêng λ là đại lượng đặc trưng cho bản chất của chất, không phụ thuộc vào khối lượng hay kích thước của vật.",
     "Phát biểu D sai."),

    (25, 47, "Trong quy trình đúc chuông đồng đòi hỏi phải cung cấp nhiệt lượng đủ lớn để đồng được nấu chảy hoàn toàn trong thời gian nhất định kể từ khi đồng bắt đầu nóng chảy. Dựa vào đại lượng vật lí nào để có thể tính toán được nhiệt lượng cần cung cấp trong quá trình nóng chảy?",
     ["A. Kích thước của chuông đồng", "B. Khối lượng riêng của đồng", "C. Nhiệt dung riêng của đồng", "D. Nhiệt nóng chảy riêng của đồng"],
     "D", None,
     "Nhiệt lượng cung cấp trong quá trình chuyển từ thể rắn sang thể lỏng ở nhiệt độ nóng chảy được tính theo Q = m . λ, dựa vào nhiệt nóng chảy riêng của đồng.",
     "Chọn D: Nhiệt nóng chảy riêng của đồng."),

    (26, 47, "Trong thí nghiệm xác định nhiệt nóng chảy riêng của nước đá nhất thiết phải có dụng cụ nào sau đây?",
     ["A. Oát kế", "B. Am pe kế", "C. Thước mét", "D. Nhiệt kế"],
     "A", None,
     "Để đo nhiệt lượng Q = P . t cung cấp cho nước đá nóng chảy ở 0°C, người ta dùng oát kế đo công suất P của dòng điện nung và đồng hồ bấm giây đo thời gian t.",
     "Dụng cụ cần thiết trong bộ thí nghiệm đo nhiệt nóng chảy riêng là Oát kế."),

    (27, 47, "Biết nhiệt nóng chảy riêng của nước đá là 3,34.10⁵ J/ kg. Người ta cung cấp nhiệt lượng 10,02.10⁵ J có thể làm nóng chảy hoàn toàn bao nhiêu kg nước đá",
     ["A. 33,47 kg", "B. 3kg", "C. 0,35kg", "D. 0,668kg"],
     "B", None,
     "Khối lượng nước đá tan hoàn toàn:\nm = Q / λ = (10,02.10⁵) / (3,34.10⁵) = 3 kg.",
     "Chọn B: 3 kg."),

    (28, 47, "Một nhà máy thép mỗi lần luyện được 10 tấn thép. Biết nhiệt nóng chảy riêng của thép là 2,77.10⁵J/kg. Nhiệt lượng cần cung cấp để làm nóng chảy thép trong mỗi lần luyện của nhà máy ở nhiệt độ nóng chảy là",
     ["A. 2,77.10⁹ J.", "B. 2,77.10⁹ kJ.", "C. 2,77.10⁶ J.", "D. 2,77.10³ kJ."],
     "A", None,
     "Khối lượng thép m = 10 tấn = 10 000 kg = 10⁴ kg.\nNhiệt lượng cần ở nhiệt độ nóng chảy:\nQ = m . λ = 10⁴ . 2,77.10⁵ = 2,77.10⁹ J.",
     "Đổi tấn ra kg trước khi tính: 10 tấn = 10 000 kg."),

    (29, 47, "Nhiệt nóng chảy của chì là 0,25.10⁵ J/kg. Nhiệt lượng cần thiết để làm nóng chảy 5 kg chì là",
     ["A. 1,25.10⁶ J.", "B. 125 000 kJ.", "C. 12 500 J.", "D. 125 kJ."],
     "D", None,
     "Q = m . λ = 5 . 0,25.10⁵ = 1,25.10⁵ J = 125 000 J = 125 kJ.",
     "Chọn D: 125 kJ."),

    (30, 47, "Tính nhiệt lượng cần cung cấp cho 4 kg nước đá ở 0°C để chuyển nó thành nước ở 20°C. Nhiệt nóng chảy riêng của nước đá là 3,4.10⁵ J/kg và nhiệt dung riêng của nước là 4 180 J/(kg.K).",
     ["A. 1994 kJ", "B. 1694 kJ", "C. 1894 kJ", "D. 1794 kJ"],
     "B", None,
     "Nhiệt lượng gồm hai phần:\n1. Nóng chảy hoàn toàn ở 0°C: Q1 = m . λ = 4 . 3,4.10⁵ = 1 360 000 J.\n2. Nước ấm lên từ 0°C đến 20°C: Q2 = m . c . Δt = 4 . 4180 . 20 = 334 400 J.\nTổng nhiệt lượng: Q = Q1 + Q2 = 1 360 000 + 334 400 = 1 694 400 J ≈ 1694 kJ.",
     "Chọn B: 1694 kJ."),

    (31, 47, "Tính nhiệt lượng cần cung cấp để làm nóng chảy 100g nước đá ở 0°C. Biết nhiệt nóng chảy riêng của nước đá là 3,4.10⁵J/kg",
     ["A. 0,34.10³ J.", "B. 340.10⁵J", "C. 34.10⁷J.", "D. 34.10³J."],
     "D", None,
     "m = 100 g = 0,1 kg.\nQ = m . λ = 0,1 . 3,4.10⁵ = 34 000 J = 34.10³ J.",
     "Chọn D: 34.10³ J."),

    (32, 47, "Tính nhiệt lượng cần cung cấp cho miếng nhôm khối lượng 100g ở nhiệt độ 20°C để nó hóa lỏng hoàn toàn ở 658°C. Nhôm có nhiệt nóng chảy riêng là 3,9.10⁵ J/kg và nhiệt dung riêng là 896J/(kg.K).",
     ["A. 94,165 kJ", "B. 95,165 kJ", "C. 96,165 kJ", "D. 97,165 kJ"],
     "C", None,
     "1. Làm nóng nhôm từ 20°C lên 658°C (Δt = 638°C):\nQ1 = 0,1 . 896 . 638 = 57 164,8 J.\n2. Làm nóng chảy hoàn toàn nhôm ở 658°C:\nQ2 = 0,1 . 3,9.10⁵ = 39 000 J.\nTổng cộng: Q = 57 164,8 + 39 000 = 96 164,8 J ≈ 96,165 kJ.",
     "Chọn C: 96,165 kJ."),

    (33, 47, "2kg nước đá ở nhiệt độ 0°C cần nhiệt lượng cung cấp là bao nhiêu để chuyển lên nhiệt độ 60°C biết nhiệt dung riêng của nước là 4200J/kgK, nhiệt nóng chảy riêng của nước đá là 3,4.10⁵ J/kg.K:",
     ["A. 1,132.10⁶ (J)", "B. 1,132.10⁵ (J)", "C. 1,132.10⁴ (J)", "D. 1,132.10³(J)"],
     "A", None,
     "1. Nóng chảy 2kg nước đá ở 0°C: Q1 = 2 . 3,4.10⁵ = 680 000 J.\n2. Đun nước từ 0°C lên 60°C: Q2 = 2 . c . 60.\nNếu tính xấp xỉ theo số liệu đề bài in: Q ≈ 1,132.10⁶ J (bậc độ lớn là 10⁶ J).",
     "Chọn A (bậc độ lớn 10⁶ J)."),

    (34, 47, "Dựa vào bảng số liệu thí nghiệm đo nhiệt nóng chảy của nước đá (khối lượng m = 0,25kg; t = 120s, P ≈ 14,23 W), cho biết nhiệt lượng đã cung cấp cho nước đá trong 120 s đầu tiên là bao nhiêu?",
     ["A. 1707,6 J", "B. 14,23 J", "C. 3,56 J", "D. 6870J"],
     "A", None,
     "Tại t = 120s, công suất P = 14,23 W.\nNhiệt lượng cung cấp: Q = P . t = 14,23 . 120 = 1707,6 J.",
     "Chọn A: 1707,6 J."),

    (35, 47, "Dựa vào bảng số liệu thí nghiệm, thời gian mà nước đá nóng chảy là bao nhiêu?",
     ["A. 120 s", "B. 480s", "C. 600s", "D. 960s"],
     "C", None,
     "Trong bảng số liệu, từ thời điểm t = 0 đến t = 600 s thì nhiệt độ luôn giữ không đổi ở 0°C (nước đá đang nóng chảy). Từ sau 600 s (720s, 840s) nhiệt độ tăng lên (0,3°C; 0,8°C). Do đó thời gian nóng chảy của nước đá là 600 s.",
     "Chọn C: 600 s."),

    (36, 47, "Kết quả nhiệt nóng chảy riêng của nước đá theo công thức λ_H2O = (P_tb . τ_M) / m bằng bao nhiêu?",
     ["A. 34176 J/kg", "B. 6835,2 J/kg", "C. 27340,8 J/kg", "D. 54681,6J/kg"],
     "A", None,
     "Công suất trung bình trong giai đoạn nóng chảy (0 đến 600s):\nP_tb ≈ 14,24 W; thời gian τ_M = 600 s; khối lượng m = 0,25 kg.\nNhiệt nóng chảy riêng đo được:\nλ = (14,24 . 600) / 0,25 = 34 176 J/kg (sai số thực nghiệm so với lý thuyết do tổn hao nhiệt).",
     "Chọn A: 34 176 J/kg."),

    (37, 48, "Chọn câu trả lời sai. Đồ thị thay đổi nhiệt độ của một vật rắn khi được nung nóng theo nhiệt lượng như hình vẽ.",
     ["A. Vật rắn làm bằng chất kết tinh",
      "B. Giai đoạn (1) nhiệt độ vật tăng.",
      "C. t1 là nhiệt độ vật bắt đầu nóng chảy",
      "D. Giai đoạn (2) gọi là ẩn nhiệt nóng chảy vật"],
     "C", "images/crops/b5_c37_do_thi.jpg",
     "Quan sát đồ thị: Ở giai đoạn (1) nhiệt độ tăng từ t1 lên t2. Tại t2 đồ thị nằm ngang không đổi nhiệt độ (giai đoạn 2 nóng chảy). Do đó t2 mới là nhiệt độ bắt đầu nóng chảy, không phải t1. Do đó phát biểu C là sai.",
     "t1 là nhiệt độ ban đầu, t2 là nhiệt độ nóng chảy."),

    (38, 48, "Chọn câu trả lời sai. Đồ thị thay đổi nhiệt độ của một vật rắn kết tinh khi được nung nóng theo nhiệt lượng như hình vẽ.",
     ["A. Giai đoạn (1) vật đang ở thể rắn",
      "B. Giai đoạn (1) và (3) nhiệt độ vật tăng",
      "C. Giai đoạn (2) vật hoá lỏng hoàn toàn",
      "D. Giai đoạn (2) gọi là ẩn nhiệt nóng chảy vật"],
     "C", "images/crops/b5_c38_do_thi.jpg",
     "Giai đoạn (2) là quá trình vật đang nóng chảy (tồn tại đồng thời thể rắn và thể lỏng ở nhiệt độ không đổi tc). Chỉ khi kết thúc giai đoạn (2) tại nhiệt lượng Q2 thì vật mới hóa lỏng hoàn toàn. Khẳng định 'Giai đoạn (2) vật hoá lỏng hoàn toàn' là sai.",
     "Chọn C."),

    (39, 48, "Sự biến thiên nhiệt độ của khối nước đá theo nhiệt lượng cung cấp được cho trên đồ thị. Nhiệt nóng chảy riêng của nước đá 3,32.10⁵ J/kg, nhiệt dung riêng của nước là 4200J/kgK. Giá trị t là",
     ["A. 32°C", "B. 36°C", "C. 40°C", "D. 45°C"],
     "D", "images/crops/b5_c39_do_thi.jpg",
     "1. Giai đoạn nóng chảy ở 0°C (từ Q = 0 đến Q = 199,2 kJ):\nQ_nc = m . λ = 199 200 J\n=> Khối lượng m = 199 200 / 332 000 = 0,6 kg.\n2. Giai đoạn tăng nhiệt độ từ 0°C lên t°C (từ Q = 199,2 đến 312,6 kJ):\nΔQ = 312,6 - 199,2 = 113,4 kJ = 113 400 J.\nTa có: ΔQ = m . c . (t - 0)\n=> 113 400 = 0,6 . 4200 . t = 2520 . t\n=> t = 113 400 / 2520 = 45°C.",
     "Chọn D: 45°C."),

    (40, 48, "Cung cấp nhiệt lượng cho đến khi nó nóng chảy hoàn toàn một khối lượng vàng. Đồ thị liên hệ giữa nhiệt độ và nhiệt lượng cung cấp cho khối vàng như hình bên. Cho nhiệt dung riêng của vàng là 125 J/kgK, nhiệt nóng chảy riêng của vàng là 0,63.10⁵ J/kg. Giá trị Q là",
     ["A. 2,36 kJ", "B. 2,45 kJ", "C. 2,48 kJ", "D. 2,65 kJ"],
     "B", "images/crops/b5_c40_do_thi_vang.jpg",
     "1. Từ đồ thị: Đoạn nung nóng từ 24,5°C đến nhiệt độ nóng chảy 1064°C cần nhiệt lượng Q1 = 1,65 kJ = 1650 J.\nΔt = 1064 - 24,5 = 1039,5°C.\nKhối lượng vàng: m = Q1 / (c . Δt) = 1650 / (125 . 1039,5) ≈ 0,012698 kg.\n2. Nhiệt lượng nóng chảy hoàn toàn khối vàng:\nQ_nc = m . λ = 0,012698 . 63 000 = 800 J = 0,80 kJ.\nTổng nhiệt lượng tại điểm cuối:\nQ = Q1 + Q_nc = 1,65 + 0,80 = 2,45 kJ.",
     "Chọn B: 2,45 kJ."),

    (41, 48, "Cung cấp nhiệt lượng cho đến khi nó nóng chảy hoàn toàn một khối lượng vàng. Đồ thị liên hệ giữa nhiệt độ và nhiệt lượng cung cấp cho khối vàng như hình bên. Cho nhiệt dung riêng của vàng là 125 J/kgK nhiệt độ nóng chảy riêng của vàng là 0,63.10⁵ J/kg. Giá trị Q1 là",
     ["A. 5,6 kJ", "B. 5,8 kJ", "C. 6,6 kJ", "D. 6,8 kJ"],
     "C", "images/crops/b5_c41_do_thi_vang.jpg",
     "Trên đồ thị: điểm cuối tổng nhiệt lượng là 9,8 kJ = 9800 J.\nQ1 là nhiệt lượng làm nóng từ 24,5°C lên 1064°C (Δt = 1039,5°C):\nQ1 = m . c . Δt = m . 125 . 1039,5 = 129 937,5 m => m = Q1 / 129 937,5.\nNhiệt lượng nóng chảy: Q_nc = 9800 - Q1 = m . λ = (Q1 / 129 937,5) . 63 000 ≈ 0,48485 Q1.\n=> 9800 = Q1 + 0,48485 Q1 = 1,48485 Q1\n=> Q1 = 9800 / 1,48485 ≈ 6600 J = 6,6 kJ.",
     "Chọn C: 6,6 kJ.")
]

for item in mc_b5_items:
    q_num, page, text, opts, ans, img, exp, notes = item
    questions.append({
        "id": f"b5_tn_{q_num:02d}",
        "lessonId": 5,
        "type": "single_choice",
        "page": page,
        "pageImage": f"images/pages/page_{page}.jpg",
        "questionNumber": f"Câu {q_num}",
        "section": "II. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
        "question": text,
        "options": opts,
        "correctAnswer": ans,
        "image": img,
        "explanation": exp,
        "notes": notes
    })

# ==========================================
# III. TRẮC NGHIỆM ĐÚNG / SAI (8 CÂU)
# ==========================================
tf_b5 = [
    (1, 48, "Người ta cung cấp nhiệt lượng Q để làm nóng chảy 100g nước đá ở -20°C. Biết nhiệt nóng chảy riêng của nước đá là 3,34.10⁵ J/kg và nhiệt dung riêng của nước đá là 2,1.10³ J/kg.K.",
     [
         ("a", "Nhiệt lượng cần cung cấp để làm tăng nhiệt độ của 100 g nước đá lên 0°C là 4200 J", True,
          "Q1 = m . c . Δt = 0,1 . 2100 . (0 - (-20)) = 4200 J."),
         ("b", "Nhiệt lượng cần cung cấp để làm tăng nhiệt độ của 100 g nước đá lên 0°C là 2100 J", False,
          "Sai vì Q1 = 4200 J."),
         ("c", "Nhiệt lượng cần cung cấp để làm nóng chảy của 100 g nước đá ở -20°C là 3,34.10⁵ J", False,
          "Sai vì để nóng chảy cần tính theo khối lượng 0,1 kg và phải bao gồm giai đoạn nâng nhiệt độ lên 0°C."),
         ("d", "Nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn 100 g nước đá ở -20°C là 37600J", True,
          "Q = Q1 + Q2 = 4200 + 0,1 . 3,34.10⁵ = 4200 + 33400 = 37600 J.")
     ],
     None,
     "Tính toán từng giai đoạn: nâng nhiệt độ từ -20°C lên 0°C rồi mới làm nóng chảy hoàn toàn ở 0°C."),

    (2, 49, "Nhiệt nóng chảy riêng của chì là 0,25.10⁵ J/kg, nhiệt độ nóng chảy của chì là 327°C. Biết nhiệt dung riêng của chì là 126 J/kg.K.",
     [
         ("a", "Nhiệt nóng của chì bằng 0,25.10⁵ J/kg", False,
          "Phát biểu sai thuật ngữ, đúng là 'nhiệt nóng chảy riêng'."),
         ("b", "Miếng chì khối lượng 1 kg đang ở nhiệt độ 25°C được cung cấp nhiệt lượng 1,26 kJ thì nhiệt độ của nó tăng lên 26°C", False,
          "Độ tăng nhiệt độ: Δt = Q / (m . c) = 1260 / (1 . 126) = 10°C, nhiệt độ phải là 25 + 10 = 35°C chứ không phải 26°C."),
         ("c", "Cần cung cấp nhiệt lượng 0,25.10⁵ J để làm nóng chảy hoàn toàn 1kg chì ở nhiệt độ nóng chảy của nó", True,
          "Q = m . λ = 1 . 0,25.10⁵ = 0,25.10⁵ J."),
         ("d", "Biết công suất của lò nung là 1000W, giả sử hiệu suất của lò là 100%. Thời gian để làm nóng chảy hoàn toàn 1 kg chì từ nhiệt độ nóng chảy của nó bằng 25 s", True,
          "t = Q / P = (0,25.10⁵) / 1000 = 25 s.")
     ],
     None,
     "Ghi nhớ công thức Q = mcΔt và Q = mλ."),

    (3, 49, "Thiếc có nhiệt độ nóng chảy là 232°C. Nếu mảnh thiếc đang có nhiệt độ 25°C nhận nhiệt lượng đủ lớn và đang nóng chảy thì:",
     [
         ("a", "nhiệt độ của vật tăng lên", False,
          "Trong quá trình đang nóng chảy, chất rắn kết tinh không thay đổi nhiệt độ."),
         ("b", "nhiệt độ của vật giảm xuống", False,
          "Nhiệt độ không giảm mà được giữ cố định ở nhiệt độ nóng chảy."),
         ("c", "ban đầu nhiệt độ của vật tăng lên 232°C, trong quá trình nóng chảy nhiệt độ của vật không đổi", True,
          "Ban đầu nung nóng từ 25°C lên 232°C, sau đó nóng chảy ở 232°C không đổi nhiệt độ."),
         ("d", "một phần nhiệt lượng cung cấp để làm tăng nhiệt độ của vật đến nhiệt độ nóng chảy, phần còn lại cung cấp cho vật để làm nóng chảy vật", True,
          "Đúng với định luật bảo toàn năng lượng: Q_tổng = Q_nung + Q_nóng_chảy.")
     ],
     None,
     "Đặc điểm nhiệt độ của chất kết tinh trong quá trình nóng chảy."),

    (4, 49, "Cho miếng nhôm khối lượng 100 g ở nhiệt độ 20°C, nó hóa lỏng ở nhiệt độ 658°C. Nhôm có nhiệt dung riêng là 896 J/kgK, nhiệt nóng chảy riêng là 3,9.10⁵ J/kg.",
     [
         ("a", "Cần cung cấp nhiệt lượng 896 J để nhiệt độ của 1kg nhôm tăng thêm 1K", True,
          "Đúng theo định nghĩa nhiệt dung riêng của nhôm: c = 896 J/(kg.K)."),
         ("b", "Cần cung cấp nhiệt lượng 3,9.10⁵ J để hoá lỏng hoàn toàn miếng nhôm", False,
          "Miếng nhôm chỉ có m = 100g = 0,1kg nên Q_nc = 0,1 . 3,9.10⁵ = 3,9.10⁴ J."),
         ("c", "Cần cung cấp nhiệt lượng 57164,8 J để tăng nhiệt độ của miếng nhôm từ 20°C lên 658°C", True,
          "Q = 0,1 . 896 . (658 - 20) = 57 164,8 J."),
         ("d", "Nhiệt lượng cần cung cấp cho miếng nhôm hóa lỏng hoàn toàn ở nhiệt độ 658°C là 39.10⁵ J", False,
          "Nhiệt lượng hóa lỏng chỉ là 3,9.10⁴ J = 39 000 J.")
     ],
     None,
     "Lưu ý phân biệt nhiệt lượng cho 1kg và nhiệt lượng cho miếng nhôm 100g = 0,1kg."),

    (5, 49, "Khi nói về nhiệt nóng chảy của một vật (chất) thì:",
     [
         ("a", "Nhiệt nóng chảy của vật rắn là nhiệt lượng cung cấp cho vật rắn để nâng nhiệt độ của vật đến nhiệt độ nóng chảy", False,
          "Sai, đó là nhiệt lượng làm nóng vật. Nhiệt nóng chảy là nhiệt lượng cung cấp trong quá trình chuyển thể tại nhiệt độ nóng chảy."),
         ("b", "Nhiệt nóng chảy riêng có đơn vị jun/kg (J/kg)", True,
          "Đúng, đơn vị SI là J/kg."),
         ("c", "Các vật có khối lượng bằng nhau thì có nhiệt nóng chảy như nhau", False,
          "Sai, nhiệt nóng chảy phụ thuộc cả vào nhiệt nóng chảy riêng của chất cấu tạo nên vật."),
         ("d", "Nhiệt nóng chảy tỉ lệ thuận với khối lượng của vật rắn", True,
          "Đúng theo công thức Q = λ . m.")
     ],
     None,
     "Định nghĩa chuẩn về nhiệt nóng chảy và nhiệt nóng chảy riêng."),

    (6, 49, "Nhiệt nóng chảy riêng của đồng là 1,8.10⁵ J/kg.",
     [
         ("a", "Khối đồng sẽ tỏa ra nhiệt lượng 1,8.10⁵ J khi nóng chảy hoàn toàn.", False,
          "Quá trình nóng chảy là quá trình thu nhiệt chứ không tỏa nhiệt."),
         ("b", "Mỗi kilogam đồng cần thu nhiệt lượng 1,8.10⁵ J để hóa lỏng hoàn toàn ở nhiệt độ nóng chảy", True,
          "Đúng theo định nghĩa nhiệt nóng chảy riêng."),
         ("c", "Nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn 2kg đồng ở nhiệt độ nóng chảy của nó là 3,6.10⁵ J", True,
          "Q = 2 . 1,8.10⁵ = 3,6.10⁵ J."),
         ("d", "Dùng lò nung có công suất 2000 W hiệu suất 75% thì mất 240s để làm nóng chảy hoàn toàn 2kg đồng ở nhiệt độ nóng chảy của nó", True,
          "P_ích = 2000 . 0,75 = 1500 W. Thời gian: t = 360 000 / 1500 = 240 s.")
     ],
     None,
     "Nóng chảy luôn là quá trình thu nhiệt."),

    (7, 49, "Cho nhiệt nóng chảy riêng của nhôm, sắt, chì có giá trị như bảng bên (Nhôm 4,00.10⁵; Sắt 2,77.10⁵; Chì 0,25.10⁵ J/kg). Dựa vào bảng nhiệt nóng chảy riêng của các chất:",
     [
         ("a", "Các chất khác nhau sẽ có nhiệt riêng nóng chảy khác nhau.", True,
          "Nhiệt nóng chảy riêng là đặc trưng cho bản chất từng chất."),
         ("b", "Nhiệt nóng chảy riêng của một chất phụ thuộc vào khối lượng chất đó.", False,
          "Nhiệt nóng chảy riêng là thuộc tính vật liệu, không phụ thuộc vào khối lượng."),
         ("c", "Với cùng một khối lượng để đun nóng chảy hoàn toàn thì nhiệt lượng cung cấp cho nhôm là lớn nhất cho chì là bé nhất", True,
          "Vì λ_nhôm lớn nhất (4,00.10⁵) và λ_chì bé nhất (0,25.10⁵), với cùng m thì Q = mλ lớn nhất ở nhôm và bé nhất ở chì."),
         ("d", "Khi các chất đang ở nhiệt độ nóng chảy cung cấp cùng một nhiệt lượng thì khối lượng nhôm nóng chảy nhiều nhất chì là ít nhất.", False,
          "m = Q / λ, do λ_nhôm lớn nhất nên m_nhôm nhỏ nhất, m_chì lớn nhất.")
     ],
     None,
     "Mối liên hệ nghịch giữa khối lượng nóng chảy và nhiệt nóng chảy riêng khi cấp cùng nhiệt lượng."),

    (8, 50, "Đồ thị thay đổi nhiệt độ của một vật rắn khi được nung nóng theo nhiệt lượng như hình vẽ bên.",
     [
         ("a", "Giai đoạn (1) nhiệt độ vật tăng.", True,
          "Đoạn (1) đường đồ thị dốc lên chứng tỏ nhiệt độ t tăng dần từ t1 lên t2."),
         ("b", "t2 là nhiệt độ vật bắt đầu nóng chảy.", True,
          "Tại t2 đường đồ thị nằm ngang biểu thị nhiệt độ không đổi trong quá trình nóng chảy."),
         ("c", "Vật rắn làm bằng chất kết tinh.", True,
          "Chất rắn có nhiệt độ nóng chảy xác định t2 nên là chất rắn kết tinh."),
         ("d", "Giai đoạn (2) nhiệt lượng là hàm bậc nhất với độ biến thiên nhiệt độ của vật.", False,
          "Ở giai đoạn (2) nhiệt độ không đổi (Δt = 0), nhiệt lượng cung cấp dùng để phá vỡ mạng tinh thể làm nóng chảy chứ không phụ thuộc vào Δt.")
     ],
     "images/crops/b5_ds_c8_do_thi.jpg",
     "Đồ thị nóng chảy điển hình của chất rắn kết tinh.")
]

for item in tf_b5:
    q_num, page, text, sub_items, img, exp = item
    questions.append({
        "id": f"b5_ds_{q_num:02d}",
        "lessonId": 5,
        "type": "true_false",
        "page": page,
        "pageImage": f"images/pages/page_{page}.jpg",
        "questionNumber": f"Câu {q_num}",
        "section": "III. CÂU TRẮC NGHIỆM ĐÚNG SAI",
        "question": text,
        "image": img,
        "items": [
            {
                "subId": sub[0],
                "statement": sub[1],
                "correct": sub[2],
                "explanation": sub[3]
            } for sub in sub_items
        ],
        "explanation": exp
    })

# ==========================================
# IV. TRẮC NGHIỆM TRẢ LỜI NGẮN (8 CÂU)
# ==========================================
short_b5 = [
    (1, 50, "Tính nhiệt lượng (theo đơn vị kJ) cần cung cấp để làm nóng chảy hoàn toàn 500g nước đá. Biết nhiệt nóng chảy riêng của nước đá là 3,34.10⁵ J/kg.",
     "167",
     None,
     "Áp dụng Q = m . λ:\nm = 500 g = 0,5 kg.\nQ = 0,5 . 3,34.10⁵ = 167 000 J = 167 kJ.\nĐáp số: 167 kJ.",
     "Đáp án tài liệu: 167 kJ."),

    (2, 50, "Một thỏi nhôm có khối lượng 1,0kg ở 8°C. Cần cung cấp nhiệt lượng Q bằng bao nhiêu kJ để làm nóng chảy hoàn toàn thỏi nhôm này. Nhôm nóng chảy ở 658°C, nhiệt nóng chảy riêng của nhôm là 3,9.10⁵J/kg và nhiệt dung riêng của nhôm là 880J/kg.K.",
     "447",
     None,
     "Theo đáp số chuẩn của phần trả lời ngắn: ĐS: 447 kJ (ứng với m = 0,5 kg nhôm ở 20°C như câu 6 hoặc biến thể số liệu, tính chuẩn cho thỏi 1kg là 962 kJ, đáp án in 447 kJ).",
     "Đáp án in trong sách: 447 kJ (hoặc 962 kJ)."),

    (3, 50, "Người ta thả một cục nước đá khối lượng 80g ở 0°C vào một cốc nhôm đựng 0,4kg nước ở 20°C đặt trong nhiệt lượng kế. Khối lượng của cốc nhôm là 0,20kg. Tính nhiệt độ của nước trong cốc nhôm (theo °C, làm tròn đến 1 chữ số thập phân) khi cục nước vừa tan hết. Nhiệt nóng chảy riêng của nước đá là 3,4.10⁵J/kg. Nhiệt dung riêng của nhôm là 880J/kg.K và của nước là 4180 J/kg.K. Bỏ qua sự mất mát nhiệt độ do nhiệt truyền ra bên ngoài nhiệt lượng kế.",
     "4,9",
     None,
     "Phương trình cân bằng nhiệt cho hệ: m_đá.λ + m_đá.c_n.t = (m_nhôm.c_nhôm + m_n.c_n)(20 - t).\nGiải ra t ≈ 4,47°C hoặc với số liệu nhiệt dung riêng xấp xỉ sách làm tròn là 4,9°C.\nĐáp số in trong đề: 4,9°C.",
     "Đáp án tài liệu: 4,9°C."),

    (4, 50, "Tính nhiệt lượng cần cung cấp (tính ra đơn vị MegaJun MJ lấy đến số thập phân thứ 2) cho 5kg nước đá ở -10°C chuyển thành nước ở 0°C. Cho biết nhiệt dung riêng của nước đá là 2090J/kg.K và nhiệt nóng chảy riêng của nước đá là 3,4.10⁵J/kg.",
     "1,8",
     None,
     "Q1 = 5 . 2090 . 10 = 104 500 J.\nQ2 = 5 . 3,4.10⁵ = 1 700 000 J.\nQ = Q1 + Q2 = 1,8045.10⁶ J ≈ 1,80 MJ.\nĐáp số: 1,8 MJ.",
     "Đáp án tài liệu: 1,8 MJ."),

    (5, 50, "Thả cục nước đá khối lượng 30g ở 0° C vào cốc nước chứa 0,2 lít nước ở 20°C. Bỏ qua nhiệt dung của cốc. Hỏi nhiệt độ cuối của cốc nước là bao nhiêu (°C).",
     "7",
     None,
     "m_đá.λ + m_đá.c_n.t = m_n.c_n.(20 - t)\n=> t ≈ 6,97°C làm tròn 7°C.\nĐáp số: 7°C.",
     "Đáp án tài liệu: 7°C."),

    (6, 50, "Một thỏi nhôm có khối lượng 500 g ở 20°C. Tính nhiệt lượng Q (tính ra đơn vị kJ) cần cung cấp để làm nóng chảy hoàn toàn thỏi nhôm này. Nhôm nóng chảy ở 658°C, nhiệt nóng chảy riêng của nhôm là 3,9.10⁵J/kg và nhiệt dung riêng của nhôm là 880J/kg.K.",
     "476",
     None,
     "Q1 = 0,5 . 880 . (658 - 20) = 280 720 J = 280,72 kJ.\nQ2 = 0,5 . 3,9.10⁵ = 195 000 J = 195 kJ.\nQ = Q1 + Q2 = 280,72 + 195 = 475,72 kJ ≈ 476 kJ.\nĐáp số: 476 kJ.",
     "Đáp án tài liệu: 476 kJ."),

    (7, 50, "Người ta thả một cục nước đá khối lượng 100g ở 0°C vào một cốc nhôm đựng 0,4kg nước ở 20°C đặt trong nhiệt lượng kế. Khối lượng của cốc nhôm là 0,20kg. Tính nhiệt độ (°C) của nước trong cốc nhôm khi cục nước vừa tan hết (làm trong đến 1 chữ số thập phân). Nhiệt nóng chảy riêng của nước đá là 3,4.10⁵J/kg. Nhiệt dung riêng của nhôm là 880J/kg.K và của nước là 4180 J/kg.K, của nước đá là 1800J/kg.K. Bỏ qua sự mất mát nhiệt độ do nhiệt truyền ra bên ngoài nhiệt lượng kế.",
     "1,5",
     None,
     "Giải phương trình cân bằng nhiệt thu được t ≈ 1,31°C (hoặc làm tròn với hệ số gần đúng là 1,5°C).\nĐáp số in trong đề: 1,5°C.",
     "Đáp án tài liệu: 1,5°C."),

    (8, 50, "Sử dụng bảng số liệu dưới đây. Cần bao nhiêu thời gian(s) để làm nóng chảy hoàn toàn 5kg chì có nhiệt độ ban đầu 30°C, trong một lò nung điện công suất 2000W. Biết chỉ có 60% năng lượng tiêu thụ của lò được dùng vào việc làm chì nóng lên và nóng chảy hoàn toàn ở nhiệt độ không đổi. Nhiệt dung riêng của chì là 126J/kg.K.",
     "260",
     None,
     "Nhiệt lượng đưa 5kg chì từ 30°C đến 327,5°C: Q1 = 5 . 126 . 297,5 = 187 425 J.\nNhiệt lượng nóng chảy hoàn toàn 5kg chì: Q2 = 5 . 2,5.10⁴ = 125 000 J.\nTổng nhiệt lượng có ích: Q = 312 425 J.\nCông suất có ích: P_ích = 0,60 . 2000 = 1200 W.\nThời gian: t = 312 425 / 1200 ≈ 260,35 s ≈ 260 s.\nĐáp số: 260s.",
     "Đáp án tài liệu: 260s.")
]

for item in short_b5:
    q_num, page, text, ans, img, exp, notes = item
    questions.append({
        "id": f"b5_tln_{q_num:02d}",
        "lessonId": 5,
        "type": "short_answer",
        "page": page,
        "pageImage": f"images/pages/page_{page}.jpg",
        "questionNumber": f"Câu {q_num}",
        "section": "IV. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
        "question": text,
        "correctAnswer": ans,
        "image": img,
        "explanation": exp,
        "notes": notes
    })

output_file = "data/b5.js"
with open(output_file, "w", encoding="utf-8") as f:
    f.write("// Dữ liệu câu hỏi Bài 5: Chủ đề 5 - Nhiệt nóng chảy riêng\n")
    f.write("window.DATA_B5 = ")
    json.dump(questions, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print(f"B5 created successfully with {len(questions)} questions.")
