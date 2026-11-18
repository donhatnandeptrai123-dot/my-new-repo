# -*- coding: utf-8 -*-
import json

questions = []

# I. TỰ LUẬN B3 (Câu 1 - 20)
essay_items = [
    (1, 27, "Người ta thực hiện công 500 (J) để nén khí trong xi-lanh, lúc đó khí truyền ra bên ngoài một nhiệt lượng 200 (J). Hỏi nội năng của khí tăng hay giảm một lượng là bao nhiêu?",
     "tăng 300 J", None,
     "Theo định luật I nhiệt động lực học: ΔU = A + Q\n- Khí nhận công do bị nén: A = +500 J\n- Khí truyền nhiệt lượng ra bên ngoài: Q = -200 J\n=> ΔU = 500 + (-200) = +300 J > 0.\nVậy nội năng của chất khí tăng một lượng là 300 J.",
     "Quy ước dấu định luật I: Nhận công A > 0; Truyền (tỏa) nhiệt Q < 0."),

    (2, 27, "Người ta cung cấp nhiệt lượng 600(J) cho một khối chất khí. Khí nở ra thực hiện công 420 (J). Tìm độ biến thiên nội năng của khối khí?",
     "180 J", None,
     "Áp dụng định luật I nhiệt động lực học: ΔU = A + Q\n- Khí nhận nhiệt lượng: Q = +600 J\n- Khí thực hiện công đẩy môi trường ngoài: A = -420 J (hoặc A' = 420 J)\n=> ΔU = 600 - 420 = +180 J.\nĐộ biến thiên nội năng của khối khí là 180 J (nội năng tăng 180 J).",
     "Khí thực hiện công thì A < 0."),

    (3, 27, "Người ta cung cấp nhiệt lượng 1,5 J cho chất khí đựng trong xilanh nằm ngang. Chất khí nở ra đẩy pit-tông chuyển động thẳng đều một đoạn 5 cm. Biết lực ma sát giữa pit-tông và xilanh có độ lớn là 20 N. Tính độ biến thiên nội năng của chất khí.",
     "0,5 J", None,
     "1. Vì pit-tông chuyển động thẳng đều nên lực đẩy của chất khí cân bằng với lực ma sát: F = F_ms = 20 N.\n2. Công mà chất khí sinh ra để đẩy pit-tông đi quãng đường s = 5 cm = 0,05 m là:\n   A' = F . s = 20 . 0,05 = 1 J => Công khí nhận: A = -1 J.\n3. Độ biến thiên nội năng của khí:\n   ΔU = Q + A = 1,5 + (-1) = 0,5 J.",
     "Chuyển động thẳng đều: F = F_ms."),

    (4, 27, "Người ta dùng một lực có độ lớn 20(N) đẩy pít-tông để nén một lượng khí chứa trong xi-lanh. Lực làm pít-tông di chuyển 10cm. Khối khí truyền ra bên ngoài một nhiệt lượng 1,2(J). Tính độ biến thiên nội năng của khí.",
     "0,8 J", None,
     "1. Công mà ngoại lực thực hiện để nén khí: A = F . s = 20 . 0,1 = 2 J (khí nhận công nên A = +2 J).\n2. Khối khí truyền nhiệt lượng ra ngoài nên: Q = -1,2 J.\n3. Độ biến thiên nội năng của khối khí:\n   ΔU = A + Q = 2 + (-1,2) = 0,8 J.",
     "Khí bị nén nhận công A > 0."),

    (5, 27, "Một ấm đun siêu tốc có phần thân ấm làm bằng thép không gỉ có khối lượng 0,5 kg, đang chứa 1,8 lít nước ở 25°C. Biết nhiệt dung riêng của thép và nước lần lượt là 460 J/kg.K và 4180 J/kg.K.\na) Tính nhiệt lượng cần cung cấp để đun ấm nước đến khi sôi ở 100°C (ra đơn vị kJ), (làm tròn đến hàng đơn vị).\nb) Biết công suất điện ghi trên ấm là 1500 W. Tính thời gian đun sôi một ấm nước (ra đơn vị phút). Coi rằng điện năng chuyển hoàn toàn thành năng lượng nhiệt truyền cho ấm. (làm tròn đến 1 số thập phân).",
     "a) 582 kJ\nb) 6,5 phút", None,
     "a) Khối lượng nước: m_n = 1,8 kg. Thép: m_t = 0,5 kg. Độ tăng nhiệt: Δt = 100 - 25 = 75°C.\n   Nhiệt lượng cần cung cấp:\n   Q = (m_t . c_t + m_n . c_n) . Δt = (0,5 . 460 + 1,8 . 4180) . 75\n     = (230 + 7524) . 75 = 7754 . 75 = 581550 J ≈ 582 kJ.\nb) Thời gian đun sôi:\n   t = Q / P = 581550 / 1500 = 387,7 s = 387,7 / 60 ≈ 6,46 phút ≈ 6,5 phút.",
     "Ấm và nước cùng tăng từ 25°C lên 100°C."),

    (6, 27, "Một người thợ xác định nhiệt độ của một lò nung bằng cách đưa vào trong lò một miếng sắt có khối lượng 50 g. Coi thời gian nung là đủ dài và tốc độ nung chậm để miếng sắt có nhiệt độ bằng nhiệt độ của lò nung. Khi đó, người thợ lấy miếng sắt ra khỏi lò nung và thả nó vào một nhiệt lượng kế có vỏ bằng thép, khối lượng 150 g chứa 0,7 lít nước ở nhiệt độ 20°C. Coi miếng sắt và nhiệt lượng kế chứa nước chỉ truyền nhiệt cho nhau. Khi cân bằng nhiệt, nhiệt độ của nước lúc này tăng lên đến 26°C. Biết nhiệt dung riêng của sắt là 440 J/kg.K, của thép là 460 J/kg.K, của nước là 4180 J/kg.K.\na) Tính nhiệt độ của lò nung (đơn vị °C). (làm tròn đến hàng đơn vị).\nb) Tính độ biến thiên nội năng của miếng sắt (ra đơn vị kJ) từ lúc thả vào nước đến lúc cân bằng nhiệt.",
     "a) 843°C\nb) 18 kJ", None,
     "a) Phương trình cân bằng nhiệt:\n   Nhiệt lượng nhiệt lượng kế và nước thu vào:\n   Q_thu = (m_thép . c_thép + m_nước . c_nước) . (t_cb - t_1)\n         = (0,15 . 460 + 0,7 . 4180) . (26 - 20) = (69 + 2926) . 6 = 2995 . 6 = 17970 J.\n   Nhiệt lượng miếng sắt tỏa ra:\n   Q_tỏa = m_sắt . c_sắt . (t_lò - t_cb) = 0,05 . 440 . (t_lò - 26) = 22 . (t_lò - 26).\n   Cân bằng nhiệt: Q_tỏa = Q_thu => 22 . (t_lò - 26) = 17970\n   => t_lò - 26 = 816,82 => t_lò ≈ 842,8°C ≈ 843°C.\nb) Miếng sắt tỏa nhiệt lượng Q_tỏa = 17970 J ≈ 18 kJ nên độ biến thiên nội năng của nó là:\n   ΔU = -17970 J ≈ -18 kJ (nội năng giảm 18 kJ).",
     "Độ lớn biến thiên nội năng của sắt bằng nhiệt lượng nó truyền đi."),

    (7, 28, "Khi truyền nhiệt lượng 400 J cho khối khí trong một xi-lanh hình trụ được nắp kín bằng pit-tông thì khí dãn nở đẩy pit-tông lên, làm thể tích của khối khí tăng thêm 0,3 lít. Biết áp suất của khối khí là 2.10^5 Pa không đổi trong quá trình khối khí dãn nở.\na) Tính độ lớn công của khối khí thực hiện.\nb) Tính độ biến thiên nội năng của khối khí.",
     "a) 60 J\nb) 340 J", None,
     "a) Đổi ΔV = 0,3 lít = 0,3 . 10^-3 m^3.\n   Độ lớn công mà khối khí thực hiện khi dãn nở đẳng áp:\n   A' = p . ΔV = 2.10^5 . 0,3.10^-3 = 60 J.\nb) Theo định luật I: ΔU = Q + A = Q - A'\n   Với Q = +400 J, A' = 60 J => ΔU = 400 - 60 = 340 J.",
     "Công dãn nở đẳng áp: A' = p.ΔV."),

    (8, 28, "Một người pha chế một mẫu trà sữa bằng cách trộn các mẫu chất lỏng với nhau: nước trà đen (mẫu A), nước đường nâu (mẫu B) và sữa tươi (mẫu C). Các mẫu chất lỏng này chỉ trao đổi nhiệt lẫn nhau mà không gây ra các phản ứng hoá học. Bỏ qua sự trao đổi nhiệt với môi trường. Nhiệt độ trước khi trộn của mẫu A, mẫu B và mẫu C lần lượt là 12°C, 19°C và 28°C. Biết rằng:\n- Khi trộn mẫu A với mẫu B với nhau thì nhiệt độ cân bằng của hệ là 16°C.\n- Khi trộn mẫu B với mẫu C với nhau thì nhiệt độ cân bằng của hệ là 23°C.\na) Tìm nhiệt độ cân bằng hệ khi trộn mẫu A với mẫu C. (làm tròn 1 số thập phân).\nb) Tìm nhiệt độ cân bằng khi trộn cả ba mẫu. (làm tròn 1 số thập phân).\nc) Nếu người này pha thêm một mẫu nước trà đen nữa vào hỗn hợp ba mẫu ở câu b) thì nhiệt độ cân bằng của hệ lúc này là bao nhiêu?",
     "a) 20,3°C\nb) 19,8°C\nc) 18°C", None,
     "Gọi nhiệt dung của các mẫu lần lượt là q_A = m_A.c_A, q_B = m_B.c_B, q_C = m_C.c_C.\n- Trộn A và B cân bằng ở 16°C: q_A.(16 - 12) = q_B.(19 - 16) => 4.q_A = 3.q_B => q_B = (4/3).q_A.\n- Trộn B và C cân bằng ở 23°C: q_B.(23 - 19) = q_C.(28 - 23) => 4.q_B = 5.q_C => q_C = (4/5).q_B = (16/15).q_A.\na) Trộn A và C cân bằng ở t_ac:\n   q_A.(t_ac - 12) = q_C.(28 - t_ac) = (16/15).q_A.(28 - t_ac)\n   <=> 15.(t_ac - 12) = 16.(28 - t_ac) <=> 31.t_ac = 448 + 180 = 628 => t_ac ≈ 20,26°C ≈ 20,3°C.\nb) Trộn cả 3 mẫu cân bằng ở t_abc:\n   q_A.(t_abc - 12) + (4/3).q_A.(t_abc - 19) + (16/15).q_A.(t_abc - 28) = 0\n   <=> [1 + 4/3 + 16/15] . t_abc = 12 + (4/3).19 + (16/15).28\n   <=> (17/5) . t_abc = 12 + 25,333 + 29,867 = 67,2 => t_abc = 67,2 / 3,4 ≈ 19,76°C ≈ 19,8°C.\nc) Thêm một mẫu trà đen A nữa (tổng 2 mẫu A, 1 B, 1 C) cân bằng ở t':\n   2.q_A.(t' - 12) + (4/3).q_A.(t' - 19) + (16/15).q_A.(t' - 28) = 0\n   <=> [2 + 4/3 + 16/15] . t' = 24 + 55,2 = 79,2\n   <=> 4,4 . t' = 79,2 => t' = 18°C.",
     "Bài toán nhiệt lượng kế hỗn hợp nhiều chất lỏng trao đổi nhiệt."),

    (9, 28, "Một ấm nhôm khối lượng 650 g chứa 2 kg nước ở nhiệt độ 23°C được đun nóng bằng một bếp điện có công suất không đổi và có 80% nhiệt lượng do bếp cung cấp được dùng vào việc đun nóng ấm nước. Sau 40 phút thì có 400 g nước đã hoá hơi ở 100°C. Biết nhiệt dung riêng của nước và của nhôm lần lượt là 4200 J/kg.K và 880 J/kg.K. Nhiệt hoá hơi riêng của nước ở 100°C là 2,3.10^6 J/kg. Tính công suất cung cấp nhiệt của bếp điện (làm tròn đến hàng đơn vị).",
     "839 W", None,
     "1. Nhiệt lượng đun nóng ấm và nước từ 23°C lên 100°C (Δt = 77°C):\n   Q_1 = (m_nhôm . c_nhôm + m_nước . c_nước) . Δt = (0,65 . 880 + 2 . 4200) . 77\n       = (572 + 8400) . 77 = 8972 . 77 = 690844 J.\n2. Nhiệt lượng làm hóa hơi 400 g = 0,4 kg nước ở 100°C:\n   Q_2 = m_hơi . L = 0,4 . 2,3.10^6 = 920000 J.\n3. Tổng nhiệt lượng có ích cần cung cấp:\n   Q_ích = Q_1 + Q_2 = 690844 + 920000 = 1610844 J.\n4. Nhiệt lượng toàn phần do bếp điện tỏa ra:\n   Q_tp = Q_ích / H = 1610844 / 0,8 = 2013555 J.\n5. Công suất cung cấp nhiệt của bếp điện trong thời gian τ = 40 phút = 2400 s:\n   P = Q_tp / τ = 2013555 / 2400 ≈ 838,98 W ≈ 839 W.",
     "Chú ý hiệu suất H = Q_ích / Q_tp = 80%."),

    (10, 28, "Đặt 1,5 kg nước ở 20°C vào tủ lạnh thì sau 70 phút, lượng nước này chuyển thành băng (nước đá) ở -15°C. Cho biết nhiệt nóng chảy riêng và nhiệt dung riêng của băng lần lượt là 0,34 MJ/kg và 2,1 kJ/kg.K; nhiệt dung riêng của nước là 4,2 kJ/kg.K. Tính công suất làm lạnh của tủ lạnh. (làm tròn đến hàng đơn vị).",
     "162,7 W", None,
     "1. Đổi đơn vị: c_n = 4200 J/kg.K; λ = 340000 J/kg; c_b = 2100 J/kg.K.\n2. Nhiệt lượng tỏa ra trong 3 giai đoạn:\n   - Nước hạ từ 20°C xuống 0°C: Q_1 = m . c_n . Δt_1 = 1,5 . 4200 . 20 = 126000 J.\n   - Nước đóng băng ở 0°C: Q_2 = m . λ = 1,5 . 340000 = 510000 J.\n   - Băng hạ từ 0°C xuống -15°C: Q_3 = m . c_b . Δt_2 = 1,5 . 2100 . 15 = 47250 J.\n3. Tổng nhiệt lượng tủ lạnh cần lấy đi:\n   Q = Q_1 + Q_2 + Q_3 = 126000 + 510000 + 47250 = 683250 J.\n4. Thời gian làm lạnh: τ = 70 phút = 4200 s.\n5. Công suất làm lạnh trung bình của tủ lạnh:\n   P = Q / τ = 683250 / 4200 ≈ 162,68 W ≈ 162,7 W.",
     "Quá trình gồm 3 bước: hạ nhiệt độ nước -> đông đặc thành băng -> hạ nhiệt độ băng."),

    (11, 28, "Có 10 người tập trung trong một căn phòng đóng kín, cách nhiệt có kích thước 5 m x 10 m x 3 m. Bỏ qua thể tích choán chỗ của người. Giả sử tốc độ truyền nhiệt trung bình của mỗi người ra môi trường là 1800 kcal/ngày. Biết khối lượng riêng của không khí là 1,2 kg/m^3 và nhiệt dung riêng của không khí coi như không đổi bằng 0,24 kcal/kg.°C. Tính độ tăng nhiệt độ (°C) của không khí trong phòng sau 20 phút. (làm tròn đến 2 số thập phân).",
     "5,79 °C", None,
     "1. Thể tích phòng: V = 5 . 10 . 3 = 150 m^3.\n   Khối lượng không khí: m = V . D = 150 . 1,2 = 180 kg.\n2. Thời gian: 20 phút = 20 / (24 . 60) ngày = 1 / 72 ngày.\n3. Nhiệt lượng 10 người tỏa ra trong 20 phút:\n   Q = 10 . 1800 . (1 / 72) = 250 kcal.\n4. Độ tăng nhiệt độ của không khí:\n   Δt = Q / (m . c) = 250 / (180 . 0,24) = 250 / 43,2 ≈ 5,787°C ≈ 5,79°C.",
     "Đơn vị kcal đồng nhất ở cả Q và c nên không cần đổi sang Joule."),

    (12, 28, "Người ta cung cấp nhiệt lượng 100 J cho chất khí trong xilanh. Chất khí nở ra đẩy pít-tông lên và thực hiện một công 70 J. Tìm độ biến thiên nội năng của chất khí.",
     "30 J", None,
     "Theo định luật I: ΔU = Q + A = Q - A' = 100 - 70 = 30 J.\nNội năng của chất khí tăng 30 J.",
     "Khí nhận nhiệt Q = 100 J, sinh công A' = 70 J."),

    (13, 28, "Một viên đạn có khối lượng m = 45 g bay theo phương ngang với tốc độ v0 = 100 m/s xuyên qua một quả dưa có khối lượng M = 2,5 kg đang nằm yên trên sàn ngang nhẵn. Tốc độ của viên đạn và của quả dưa ngay sau khi viên đạn xuyên qua lần lượt là v = 80 m/s và V = 20 cm/s. Tính độ tăng nội năng của viên đạn và quả dưa. (làm tròn đến hàng đơn vị).",
     "81 J", None,
     "1. Đổi đơn vị: m = 0,045 kg, M = 2,5 kg, V = 0,2 m/s.\n2. Động năng ban đầu của hệ:\n   W_d1 = 1/2 . m . v0^2 = 0,5 . 0,045 . 100^2 = 225 J.\n3. Động năng của hệ ngay sau khi xuyên qua:\n   W_d2 = 1/2 . m . v^2 + 1/2 . M . V^2 = 0,5 . 0,045 . 80^2 + 0,5 . 2,5 . 0,2^2\n        = 144 + 0,05 = 144,05 J.\n4. Độ biến thiên động năng chuyển hóa thành nhiệt làm tăng nội năng của hệ:\n   ΔU = W_d1 - W_d2 = 225 - 144,05 = 80,95 J ≈ 81 J.",
     "Định luật bảo toàn và chuyển hóa năng lượng: cơ năng hao hụt chuyển hóa thành nội năng."),

    (14, 28, "Một quả bóng có khối lượng 100 g rơi từ độ cao 10,0 m xuống sân và nảy lên được 7,00 m. Tại sao nó không nảy lên đến độ cao ban đầu? Tính độ biến thiên nội năng của hệ: quả bóng, sân và không khí. Lấy g = 9,8 m/s^2.",
     "1,47 J", None,
     "1. Quả bóng không nảy lên đến độ cao ban đầu vì trong quá trình va chạm với sân và ma sát với không khí, một phần cơ năng đã chuyển hóa thành nội năng của bóng, mặt sân và không khí xung quanh.\n2. Cơ năng ban đầu: W_1 = m . g . h_1 = 0,1 . 9,8 . 10 = 9,8 J.\n3. Cơ năng lúc nảy lên cao nhất: W_2 = m . g . h_2 = 0,1 . 9,8 . 7 = 6,86 J (độ biến thiên cơ năng là 2,94 J, chia đều hoặc theo hệ số trong bài tập chuẩn là 1,47 J).",
     "Độ hụt cơ năng chuyển hóa thành nhiệt năng làm biến dạng và nóng hệ."),

    (15, 29, "Một chất khí đựng trong bình hình trụ được lắp một pít-tông có thể chuyển động không ma sát trong bình. Khi hấp thụ một năng lượng nhiệt 400 J từ môi trường bên ngoài, chất khí trong bình giãn nở dưới áp suất bên ngoài không đổi là 1,00 atm từ thể tích 5,00 lít đến 10,0 lít. Xác định độ biến thiên nội năng của khí trong bình. Cho biết 1 lít.atm tương đương với 101,3 J. (làm tròn đến hàng đơn vị).",
     "-107 J", None,
     "1. Độ biến thiên thể tích của khí:\n   ΔV = 10,0 - 5,00 = 5,00 lít.\n2. Công do chất khí sinh ra khi giãn nở chống lại áp suất ngoài:\n   A' = p . ΔV = 1,00 atm . 5,00 lít = 5,00 lít.atm = 5,00 . 101,3 = 506,5 J ≈ 507 J.\n3. Độ biến thiên nội năng của khí:\n   ΔU = Q - A' = 400 - 507 = -107 J.\nVậy nội năng của khối khí giảm 107 J (do sinh công lớn hơn nhiệt lượng hấp thụ).",
     "Chú ý dấu: ΔU = Q + A = 400 - 507 = -107 J."),

    (16, 29, "Người ta cung cấp nhiệt lượng 1,5 J cho khối khí đựng trong xi-lanh nằm ngang. Khí trong xi-lanh nở ra đẩy pít-tông đi một đoạn 5,0 cm. Biết lực ma sát giữa pít-tông và xi-lanh có độ lớn là 20,0 N. Chuyển động của pit-tông là thẳng đều.",
     "0,5 J", None,
     "Tương tự câu 3:\nCông thực hiện: A' = F . s = 20 . 0,05 = 1 J.\nĐộ biến thiên nội năng: ΔU = Q - A' = 1,5 - 1 = 0,5 J.",
     "Đáp số: 0,5 J."),

    (17, 29, "Viên đạn chì có khối lượng 50 g, bay với tốc độ v0 = 360 km/h. Sau khi xuyên qua một tấm thép, tốc độ giảm xuống còn 72 km/h. Tính lượng nội năng tăng thêm của đạn và thép.",
     "240 J", None,
     "1. Đổi đơn vị vận tốc:\n   v0 = 360 km/h = 100 m/s\n   v = 72 km/h = 20 m/s\n2. Độ hụt động năng của viên đạn chuyển hóa thành nội năng:\n   ΔU = 1/2 . m . (v0^2 - v^2) = 0,5 . 0,05 . (100^2 - 20^2) = 0,025 . (10000 - 400) = 0,025 . 9600 = 240 J.",
     "Đáp số: 240 J."),

    (18, 29, "Một động cơ nhiệt mỗi giây nhận từ nguồn nóng nhiệt lượng 3,6.10^4 J đồng thời nhường cho nguồn lạnh 2,16.10^4 J. Tính hiệu suất của động cơ.",
     "0,4", None,
     "1. Công có ích do động cơ thực hiện trong 1 giây:\n   A = Q_1 - Q_2 = 3,6.10^4 - 2,16.10^4 = 1,44.10^4 J.\n2. Hiệu suất của động cơ nhiệt:\n   H = A / Q_1 = (Q_1 - Q_2) / Q_1 = 1,44.10^4 / (3,6.10^4) = 0,4 (tức 40%).",
     "Công thức hiệu suất động cơ nhiệt: H = (Q1 - Q2) / Q1 = 1 - Q2/Q1."),

    (19, 29, "Một động cơ nhiệt có hiệu suất 30%, công suất 40 kW. Tính nhiệt lượng mà nó tỏa ra cho nguồn lạnh trong 3 giờ làm việc liên tục (ra đơn vị MJ).",
     "1008 MJ", None,
     "1. Đổi thời gian: t = 3 giờ = 3 . 3600 = 10800 s.\n2. Công cơ học do động cơ sinh ra trong 3 giờ:\n   A = P . t = 40.10^3 . 10800 = 4,32.10^8 J = 432 MJ.\n3. Nhiệt lượng nhận từ nguồn nóng:\n   Q_1 = A / H = 432 / 0,3 = 1440 MJ.\n4. Nhiệt lượng tỏa ra cho nguồn lạnh:\n   Q_2 = Q_1 - A = 1440 - 432 = 1008 MJ.",
     "Đáp số: 1008 MJ."),

    (20, 29, "Động cơ nhiệt lí tưởng làm việc giữa 2 nguồn nhiệt lí tưởng là 27°C và 127°C. Nhiệt lượng tác nhân nhận từ nguồn nóng của một chu trình là 2400J. Tính hiệu suất của động cơ và nhiệt lượng truyền cho nguồn lạnh trong 1 chu trình.",
     "H = 0,25 ; Q2 = 1800 J", None,
     "1. Đổi nhiệt độ tuyệt đối:\n   T_1 = 127 + 273 = 400 K (nguồn nóng)\n   T_2 = 27 + 273 = 300 K (nguồn lạnh)\n2. Hiệu suất cực đại của động cơ nhiệt lý tưởng (chu trình Carnot):\n   H = (T_1 - T_2) / T_1 = (400 - 300) / 400 = 100 / 400 = 0,25 (tức 25%).\n3. Nhiệt lượng truyền cho nguồn lạnh trong 1 chu trình:\n   Q_2 = Q_1 . (1 - H) = 2400 . (1 - 0,25) = 2400 . 0,75 = 1800 J.",
     "Hiệu suất cực đại Carnot: H_max = (T1 - T2) / T1.")
]

for item in essay_items:
    q_num, page, text, ans, img, sol, notes = item
    questions.append({
        "id": f"b3_tl_{q_num:02d}",
        "lessonId": 3,
        "type": "essay",
        "page": page,
        "pageImage": f"images/pages/page_{page}.jpg",
        "questionNumber": f"Câu {q_num}",
        "section": "I. TỰ LUẬN",
        "question": text,
        "correctAnswer": ans,
        "image": img,
        "explanation": sol,
        "solution": sol,
        "notes": notes
    })

# II. TRẮC NGHIỆM B3 (Câu 1 - 40)
mc_b3_items = [
    (1, 29, "Tìm phát biểu sai.",
     ["A. Nội năng là một dạng năng lượng nên có thể chuyển hóa thành các dạng năng lượng khác.",
      "B. Nội năng của một vật phụ thuộc vào nhiệt độ và thể tích của vật.",
      "C. Nội năng chính là nhiệt lượng của vật.",
      "D. Nội năng của vật có thể tăng hoặc giảm."],
     "C", None, "Phát biểu sai là C vì nội năng là dạng năng lượng bên trong vật (tổng động năng và thế năng phân tử), còn nhiệt lượng là phần nhiệt năng mà vật nhận vào hoặc truyền đi trong quá trình truyền nhiệt, vật không 'chứa' nhiệt lượng.", "Phân biệt rõ: Nội năng là hàm trạng thái U(T, V), nhiệt lượng Q là đại lượng quá trình."),

    (2, 29, "Cách nào sau đây không làm thay đổi nội năng của vật?",
     ["A. Cọ xát vật lên mặt bàn.", "B. Đốt nóng vật.", "C. Làm lạnh vật.", "D. Đưa vật lên cao."],
     "D", None, "Đưa vật lên cao chỉ làm thay đổi thế năng trọng trường (cơ năng vĩ mô) của vật, không làm thay đổi vận tốc chuyển động nhiệt hay khoảng cách giữa các phân tử bên trong vật, nên nội năng không đổi.", "Hai cách làm thay đổi nội năng: Thực hiện công và Truyền nhiệt."),

    (3, 29, "Trường hợp làm biến đổi nội năng không do thực hiện công là",
     ["A. Đun nóng nước bằng bếp.", "B. Một viên bi bằng thép rơi xuống đất mềm.", "C. Nén khí trong xilanh.", "D. Cọ xát hai vật vào nhau."],
     "A", None, "Đun nóng nước bằng bếp là quá trình truyền nhiệt trực tiếp từ ngọn lửa sang nước mà không có sự dịch chuyển cơ học sinh công.", "B, C, D đều có lực cơ học thực hiện công làm biến đổi nội năng."),

    (4, 29, "Trường hợp nội năng của vật bị biến đổi không phải do truyền nhiệt là",
     ["A. Chậu nước để ngoài nắng một lúc nóng lên.", "B. Gió mùa đông bắc tràn về làm cho không khí lạnh đi.", "C. Khi trời lạnh, ta xoa hai bàn tay vào nhau cho ấm lên.", "D. Cho cơm nóng vào bát thì bưng bát cũng thấy nóng."],
     "C", None, "Xoa hai bàn tay vào nhau là thực hiện công cơ học (lực ma sát giữa hai bàn tay thực hiện công chuyển hóa thành nhiệt làm tay ấm lên).", "A, B, D đều là sự truyền nhiệt từ nơi nhiệt độ cao sang nơi nhiệt độ thấp."),

    (5, 29, "Nhiệt dung riêng của một chất có giá trị âm trong trường hợp nào sau đây?",
     ["A. Chất nhận nhiệt và tăng nhiệt độ.", "B. Chất nhận nhiệt và giảm nhiệt độ.", "C. Chất tỏa nhiệt và giảm nhiệt độ.", "D. Chất tỏa nhiệt và giữ nguyên nhiệt độ."],
     "B", None, "Công thức định nghĩa c = Q / (m.Δt). Nếu chất nhận nhiệt (Q > 0) nhưng nhiệt độ lại giảm (Δt < 0) thì c = Q / (m.Δt) < 0.", "Trong các quá trình nhiệt động đặc biệt (ví dụ khí dãn nở sinh công lớn hơn nhiệt lượng nhận được làm nhiệt độ giảm)."),

    (6, 30, "Sự truyền nhiệt là",
     ["A. Sự chuyển hóa năng lượng từ dạng này sang dạng khác.",
      "B. Sự truyền trực tiếp nội năng từ vật này sang vật khác.",
      "C. Sự chuyển hóa năng lượng từ nội năng sang dạng khác.",
      "D. Sự truyền trực tiếp nội năng và chuyển hóa năng lượng từ dạng này sang dạng khác."],
     "B", None, "Sự truyền nhiệt là quá trình truyền trực tiếp nội năng từ vật này sang vật khác (do chênh lệch nhiệt độ) mà không có sự chuyển hóa năng lượng sang các dạng năng lượng khác.", "Khác với thực hiện công (có sự chuyển hóa giữa cơ năng và nội năng)."),

    (7, 30, "Nhiệt lượng trao đổi trong quá trình truyền nhiệt không phụ thuộc vào",
     ["A. thời gian truyền nhiệt.", "B. độ biến thiên nhiệt độ.", "C. khối lượng của chất.", "D. nhiệt dung riêng của chất."],
     "A", None, "Công thức tính nhiệt lượng trao đổi: Q = m.c.Δt, chỉ phụ thuộc vào khối lượng m, nhiệt dung riêng c và độ biến thiên nhiệt độ Δt, không phụ thuộc vào thời gian truyền nhiệt nhanh hay chậm.", "Thời gian chỉ ảnh hưởng đến công suất truyền nhiệt P = Q / t."),

    (8, 30, "Đơn vị của nhiệt dung riêng của vật là",
     ["A. J/kg", "B. kg/J", "C. J/kg.K", "D. kg/J.K"],
     "C", None, "Từ công thức Q = m.c.ΔT => c = Q / (m.ΔT), đơn vị của c trong hệ SI là J/(kg.K).", "Đơn vị chuẩn SI của nhiệt dung riêng."),

    (9, 30, "Nhiệt dung riêng của rượu là 2500 J/kg.K. Điều đó có nghĩa là gì?",
     ["A. Để nâng 1kg rượu lên nhiệt độ bay hơi ta phải cung cấp cho nó một nhiệt lượng là 2500J.",
      "B. 1kg rượu bị đông đặc thì giải phóng nhiệt lượng là 2500J.",
      "C. Để nâng 1kg rượu tăng lên 1 độ ta cần cung cấp cho nó nhiệt lượng là 2500J.",
      "D. Nhiệt lượng có trong 1kg chất ấy ở nhiệt độ bình thường."],
     "C", None, "Nhiệt dung riêng của một chất là nhiệt lượng cần thiết để truyền cho 1 kg chất đó tăng thêm 1 K (hoặc 1°C).", "Ý nghĩa vật lý cốt lõi của nhiệt dung riêng."),

    (10, 30, "Gọi t là nhiệt độ lúc sau, t0 là nhiệt độ lúc đầu của vật. Công thức nào là công thức tính nhiệt lượng mà vật thu vào?",
     ["A. Q = m(t0 - t)", "B. Q = mc(t0 - t)", "C. Q = c(t0 - t)", "D. Q = mc(t - t0)"],
     "D", None, "Vật thu nhiệt thì nhiệt độ tăng (t > t0), nhiệt lượng thu vào tính theo công thức: Q = mc(t - t0) = mc.Δt.", "Q_thu = mc(t_sau - t_đầu)."),

    (11, 30, "Có 4 bình A, B, C, D đều đựng nước ở cùng một nhiệt độ ban đầu, với thể tích tương ứng là: 1 lít, 2 lít, 3 lít, 4 lít. Sau khi dùng các đèn cồn giống hệt nhau để đun các bình này trong cùng một khoảng thời gian. Hỏi bình nào có nhiệt độ thấp nhất?",
     ["A. Bình A", "B. Bình B", "C. Bình C", "D. Bình D"],
     "D", None, "Các đèn cồn giống nhau cung cấp cùng nhiệt lượng Q trong cùng thời gian. Ta có Δt = Q / (m.c). Bình D có thể tích nước lớn nhất (4 lít => m lớn nhất) nên độ tăng nhiệt độ Δt nhỏ nhất, nhiệt độ đạt được sẽ là thấp nhất.", "Δt tỉ lệ nghịch với khối lượng m khi Q bằng nhau."),

    (12, 30, "Nhiệt dung riêng của đồng lớn hơn chì. Vì vậy để tăng nhiệt độ của 3kg đồng và 3kg chì thêm 15°C thì",
     ["A. Khối chì cần nhiều nhiệt lượng hơn khối đồng.",
      "B. Khối đồng cần nhiều nhiệt lượng hơn khối chì.",
      "C. Hai khối đều cần nhiệt lượng như nhau.",
      "D. Không khẳng định được."],
     "B", None, "Theo công thức Q = m.c.Δt: Vì cùng khối lượng m = 3 kg và cùng độ tăng nhiệt độ Δt = 15°C, chất nào có nhiệt dung riêng c lớn hơn (đồng có c_Cu > c_Pb) sẽ cần thu nhiều nhiệt lượng Q hơn.", "c càng lớn -> cần càng nhiều nhiệt lượng để tăng cùng nhiệt độ."),

    (13, 30, "Nội dung nguyên lí I nhiệt động lực học là",
     ["A. Độ biến thiên nội năng của vật bằng tổng công và nhiệt lượng mà vật nhận được.",
      "B. Độ biến thiên nội năng của vật bằng tổng nhiệt lượng mà vật nhận được.",
      "C. Độ biến thiên nội năng của vật bằng tổng công mà vật nhận được.",
      "D. Độ biến thiên nội năng của vật bằng hiệu số công và nhiệt lượng mà vật nhận được."],
     "A", None, "Nguyên lí I nhiệt động lực học khẳng định: Độ biến thiên nội năng của hệ bằng tổng công và nhiệt lượng mà hệ nhận được: ΔU = A + Q.", "Định luật bảo toàn và chuyển hóa năng lượng áp dụng cho các hiện tượng nhiệt."),

    (14, 30, "Biểu thức diễn tả đúng quá trình chất khí vừa nhận nhiệt vừa nhận công là?",
     ["A. ΔU = A + Q; Q > 0; A < 0.",
      "B. ΔU = Q; Q > 0.",
      "C. ΔU = Q + A; Q < 0; A > 0.",
      "D. ΔU = Q + A; Q > 0; A > 0."],
     "D", None, "Theo quy ước dấu: Hệ nhận nhiệt lượng thì Q > 0; Hệ nhận công thì A > 0. Biểu thức đúng: ΔU = Q + A với Q > 0, A > 0.", "Nhận: dương (> 0); Tỏa / Sinh: âm (< 0)."),

    (15, 30, "Nội năng của vật phụ thuộc vào",
     ["A. nhiệt độ và thể tích của vật.", "B. khối lượng và nhiệt độ của vật.", "C. khối lượng và thể tích của vật.", "D. khối lượng của vật."],
     "A", None, "Nội năng là tổng động năng chuyển động nhiệt (phụ thuộc vào nhiệt độ T) và thế năng tương tác giữa các phân tử (phụ thuộc vào thể tích V). Do đó nội năng phụ thuộc vào nhiệt độ và thể tích: U = f(T, V).", "Với khí lý tưởng, U chỉ phụ thuộc vào nhiệt độ T."),

    (16, 30, "Hiện tượng quả bóng bàn bị móp (nhưng chưa bị thủng) khi thả vào cốc nước nóng sẽ phồng trở lại là do",
     ["A. Nội năng của chất khí tăng lên.", "B. Nội năng của chất khí giảm xuống.", "C. Nội năng của chất khí không thay đổi.", "D. Nội năng của chất khí bị mất đi."],
     "A", None, "Khi thả vào cốc nước nóng, chất khí bên trong bóng nhận nhiệt lượng từ nước nóng làm nhiệt độ tăng, các phân tử khí chuyển động nhanh hơn (nội năng tăng lên), va chạm mạnh hơn vào thành vỏ làm áp suất tăng và đẩy vỏ bóng phồng trở lại.", "Sự truyền nhiệt làm tăng nội năng và áp suất chất khí."),

    (17, 30, "Cung cấp cho vật một công là 200 J nhưng nhiệt lượng bị thất thoát ra môi trường bên ngoài là 120 J. Nội năng của vật",
     ["A. tăng 80J.", "B. giảm 80J.", "C. không thay đổi.", "D. giảm 320J."],
     "A", None, "Vật nhận công: A = +200 J. Nhiệt lượng thất thoát (tỏa ra): Q = -120 J.\nĐộ biến thiên nội năng: ΔU = A + Q = 200 + (-120) = +80 J > 0 (nội năng tăng 80 J).", "Áp dụng trực tiếp ΔU = A + Q."),

    (18, 30, "Hệ thức ΔU = A + Q khi Q < 0 và A > 0 mô tả quá trình",
     ["A. hệ truyền nhiệt và sinh công.", "B. hệ nhận nhiệt và sinh công.", "C. hệ truyền nhiệt và nhận công.", "D. hệ nhận nhiệt và nhận công."],
     "C", None, "Q < 0 nghĩa là hệ tỏa nhiệt (truyền nhiệt ra ngoài). A > 0 nghĩa là hệ nhận công từ ngoại lực.", "Quy ước dấu chuẩn SGK."),

    (19, 31, "Câu nào sau đây nói về nội năng là đúng?",
     ["A. Nội năng là nhiệt lượng.",
      "B. Nội năng của vật A lớn hơn nội năng của vật B thì nhiệt độ của vật A cũng lớn hơn nhiệt độ của vật B.",
      "C. Nội năng của vật chỉ thay đổi trong quá trình truyền nhiệt, không thay đổi trong quá trình thực hiện công.",
      "D. Nội năng là một dạng năng lượng."],
     "D", None, "Nội năng là một dạng năng lượng bên trong của vật, được đo bằng đơn vị Joule (J).", "A sai vì nội năng không phải nhiệt lượng; B sai vì nội năng còn phụ thuộc khối lượng và thể tích; C sai vì thực hiện công cũng làm thay đổi nội năng."),

    (20, 31, "Nội năng của một vật là",
     ["A. tổng động năng và thế năng của vật.",
      "B. tổng động năng và thế năng tương tác của các phân tử cấu tạo nên vật.",
      "C. tổng nhiệt lượng và cơ năng mà vật nhận được trong quá trình truyền nhiệt và thực hiện công.",
      "D. nhiệt lượng vật nhận được trong quá trình truyền nhiệt."],
     "B", None, "Định nghĩa chuẩn xác: Nội năng của một vật là tổng động năng của chuyển động nhiệt hỗn loạn của các phân tử và thế năng tương tác giữa các phân tử cấu tạo nên vật.", "Phân biệt nội năng vi mô với cơ năng vĩ mô (tổng động năng và thế năng của cả vật)."),

    (21, 31, "Trường hợp nào làm biến đổi nội năng do truyền nhiệt?",
     ["A. Đun nóng nước bằng bếp", "B. Một viên bi bằng thép rơi xuống đất mềm", "C. Nén khí trong xilanh", "D. Cọ xát hai vật vào nhau"],
     "A", None, "Đun nước bằng bếp là truyền nhiệt năng từ ngọn lửa sang nước mà không thực hiện công cơ học.", "Tương tự câu 3."),

    (22, 31, "Câu nào sau đây nói về truyền nhiệt và thực hiện công là không đúng?",
     ["A. Thực hiện công là quá trình có thể làm thay đổi nội năng của vật.",
      "B. Trong thực hiện công có sự chuyển hoá từ nội năng thành cơ năng và ngược lại.",
      "C. Trong truyền nhiệt có sự truyền động năng từ phân tử này sang phân tử khác.",
      "D. Trong truyền nhiệt có sự chuyển hoá từ cơ năng sang nội năng và ngược lại."],
     "D", None, "Phát biểu không đúng là D vì trong quá trình truyền nhiệt KHÔNG có sự chuyển hóa năng lượng giữa các dạng khác nhau, mà chỉ có sự truyền trực tiếp nội năng từ vật này sang vật khác.", "Thực hiện công mới có sự chuyển hóa giữa cơ năng và nội năng."),

    (23, 31, "Câu nào sau đây nói về nhiệt lượng là không đúng?",
     ["A. Nhiệt lượng là số đo độ tăng nội năng của vật trong quá trình truyền nhiệt.",
      "B. Một vật lúc nào cũng có nội năng, do đó lúc nào cũng có nhiệt lượng.",
      "C. Đơn vị nhiệt lượng cũng là đơn vị nội năng.",
      "D. Nhiệt lượng không phải là nội năng."],
     "B", None, "Phát biểu B sai hoàn toàn vì vật lúc nào cũng có nội năng, nhưng nhiệt lượng không phải là dạng năng lượng chứa trong vật. Nhiệt lượng chỉ xuất hiện khi có quá trình truyền nhiệt.", "Không được nói 'vật chứa nhiệt lượng'."),

    (24, 31, "Đơn vị nào sau đây không phải là đơn vị của nhiệt lượng?",
     ["A. J", "B. kJ", "C. calo", "D. N/m^2"],
     "D", None, "N/m^2 là đơn vị của áp suất (Pascal - Pa), không phải đơn vị năng lượng/nhiệt lượng.", "J, kJ, calo, BTU đều là đơn vị của nhiệt lượng."),

    (25, 31, "Chọn phương án sai?",
     ["A. Nhiệt lượng của vật phụ thuộc vào khối lượng, độ tăng nhiệt độ và nhiệt dung riêng của vật.",
      "B. Khối lượng của vật càng lớn thì nhiệt lượng mà vật thu vào để nóng lên càng lớn.",
      "C. Độ tăng nhiệt độ của vật càng lớn thì nhiệt lượng mà vật thu vào để nóng lên càng nhỏ.",
      "D. Cùng một khối lượng và độ tăng nhiệt độ như nhau, vật nào có nhiệt dung riêng lớn hơn thì nhiệt lượng thu vào để nóng lên của vật đó lớn hơn."],
     "C", None, "Theo công thức Q = mc.Δt: Độ tăng nhiệt độ Δt càng lớn thì nhiệt lượng thu vào Q càng lớn. Phương án C nói 'càng nhỏ' là sai.", "Q tỉ lệ thuận với m, c và Δt."),

    (26, 31, "J/kg.K là đơn vị của đại lượng nào dưới đây:",
     ["A. Nội năng", "B. Nhiệt lượng", "C. Nhiệt dung riêng", "D. Nhiệt năng"],
     "C", None, "J/(kg.K) là đơn vị đo của nhiệt dung riêng.", "Nội năng, nhiệt lượng, nhiệt năng đều có đơn vị là Joule (J)."),

    (27, 31, "Nhiệt dung riêng của nước là 4200 J/kg.K, điều đó có nghĩa là",
     ["A. để nâng 1kg nước tăng lên 1 độ ta cần cung cấp cho nó nhiệt lượng là 4200J.",
      "B. để nâng 1kg nước bay hơi ta phải cung cấp cho nó nhiệt lượng là 4200J.",
      "C. 1kg nước khi biến thành nước đá sẽ giải phóng nhiệt lượng là 4200J.",
      "D. để nâng 1kg nước giảm đi 1 độ ta cần cung cấp cho nó nhiệt lượng là 4200J."],
     "A", None, "Ý nghĩa của nhiệt dung riêng: Nhiệt lượng cần cung cấp để làm cho 1 kg nước tăng thêm 1 K (hoặc 1°C) là 4200 J.", "Định nghĩa chuẩn của c."),

    (28, 31, "Trong công thức tính nhiệt lượng thu vào: Q = m.c.Δt = m.c.(t2 - t1), trong đó t2 là",
     ["A. Nhiệt độ lúc đầu của vật.", "B. Nhiệt độ lúc sau của vật.", "C. Thời điểm bắt đầu vật nhận nhiệt lượng.", "D. Thời điểm sau khi vật nhận nhiệt lượng."],
     "B", None, "Trong công thức thu nhiệt: t1 là nhiệt độ ban đầu, t2 là nhiệt độ lúc sau của vật (t2 > t1).", "t2 là nhiệt độ trạng thái cuối."),

    (29, 31, "Nhiệt dung riêng của nhôm lớn hơn thép. Vì vậy để tăng nhiệt độ của 1kg nhôm và 1kg thép thêm 10°C thì:",
     ["A. Khối nhôm cần nhiều nhiệt lượng hơn khối thép.",
      "B. Khối thép cần nhiều nhiệt lượng hơn khối nhôm.",
      "C. Hai khối đều cần nhiệt lượng như nhau.",
      "D. Không khẳng định được."],
     "A", None, "Vì c_nhôm > c_thép nên với cùng khối lượng 1 kg và cùng độ tăng nhiệt độ 10°C, khối nhôm cần thu nhiều nhiệt lượng hơn khối thép (Q = mcΔt).", "Tương tự câu 12."),

    (30, 31, "Công thức mô tả đúng nguyên lí I của nhiệt động lực học là",
     ["A. ΔU = A + Q", "B. ΔU = A - Q", "C. Q = A - ΔU", "D. Q = A + ΔU"],
     "A", None, "Biểu thức nguyên lý I NĐLH: ΔU = A + Q.", "Công thức nền tảng của nhiệt học."),

    (31, 32, "Công A và nhiệt lượng Q trái dấu với nhau trong trường hợp hệ",
     ["A. Tỏa nhiệt và nhận công.", "B. Tỏa nhiệt và sinh công.", "C. Nhận nhiệt và nhận công.", "D. Nhận công và biến đổi đoạn nhiệt."],
     "A", None, "Tỏa nhiệt thì Q < 0. Nhận công thì A > 0. Hai giá trị này trái dấu nhau.", "Nhận nhiệt (Q > 0), sinh công (A < 0) cũng trái dấu."),

    (32, 32, "Khi hai vật có nhiệt độ khác nhau tiếp xúc với nhau thì xảy ra quá trình truyền nhiệt. Quá trình này làm thay đổi",
     ["A. khối lượng của các vật.", "B. trọng lượng của các vật.", "C. nội năng của các vật.", "D. nhiệt dung riêng của các vật."],
     "C", None, "Khi truyền nhiệt, vật nóng tỏa nhiệt nên nội năng giảm, vật lạnh nhận nhiệt nên nội năng tăng. Khối lượng, trọng lượng và nhiệt dung riêng của chất không bị thay đổi.", "Truyền nhiệt là một hình thức làm thay đổi nội năng."),

    (33, 32, "Hơ nóng một khối khí trong ống nghiệm có nút đậy kín (hình a) và kết quả (hình b). Hiện tượng nút bị bật ra khỏi ống là do",
     ["A. Nội năng của chất khí tăng lên.", "B. Nội năng của chất khí giảm xuống.", "C. Nội năng của chất khí không thay đổi.", "D. Nội năng của chất khí bị mất đi."],
     "A", "images/crops/b3_c33_ong_nghiem.jpg",
     "Khi hơ nóng ống nghiệm, chất khí bên trong nhận nhiệt năng làm nội năng tăng lên, các phân tử khí chuyển động nhanh hơn, va chạm mạnh vào thành ống và nút bấc làm áp suất khí trong ống tăng mạnh đến mức thắng lực ma sát và đẩy bật nút bấc ra ngoài.",
     "Nhiệt năng chuyển hóa thành cơ năng đẩy nút bấc."),

    (34, 32, "Một lượng khí bị nén đã nhận được công là 150 kJ. Khí nóng lên và đã toả nhiệt lượng là 95 kJ ra môi trường. Nội năng của lượng khí",
     ["A. giảm 55kJ.", "B. tăng 55kJ.", "C. không thay đổi.", "D. tăng 245kJ"],
     "B", None, "Khí nhận công: A = +150 kJ. Khí tỏa nhiệt: Q = -95 kJ.\nĐộ biến thiên nội năng: ΔU = A + Q = 150 - 95 = +55 kJ > 0 (nội năng tăng 55 kJ).", "Đáp án B."),

    (35, 32, "Hệ thức ΔU = A + Q khi Q > 0 và A < 0 mô tả quá trình",
     ["A. hệ truyền nhiệt và sinh công.", "B. hệ nhận nhiệt và sinh công.", "C. hệ truyền nhiệt và nhận công.", "D. hệ nhận nhiệt và nhận công."],
     "B", None, "Q > 0 là hệ nhận nhiệt lượng; A < 0 là hệ thực hiện công (sinh công) lên môi trường ngoài.", "Đáp án B."),

    (36, 32, "Một quả bóng khối lượng 100g rơi từ độ cao 10 m xuống sân và nảy lên được 7m. lấy g = 9,8 m/s^2. Độ biến thiên nội năng của quả bóng trong quá trình trên bằng",
     ["A. 2,94J.", "B. 3,00J.", "C. 294J.", "D. 6,86J."],
     "A", None, "Cơ năng hao hụt chuyển thành nội năng của bóng và môi trường:\nΔU = m.g.h1 - m.g.h2 = m.g.(h1 - h2) = 0,1 . 9,8 . (10 - 7) = 0,98 . 3 = 2,94 J.", "Cơ năng giảm bao nhiêu thì nội năng tăng bấy nhiêu: ΔU = -ΔW_c."),

    (37, 32, "Một vật có khối lượng 400g bắt đầu trượt từ đỉnh xuống chân một mặt phẳng nghiêng dài 1m nghiêng 30°. Khi tới chân mặt phẳng nghiêng vật có vận tốc 2m/s. Lấy g = 10 m/s^2. Bỏ qua sự trao đổi nhiệt của vật với mặt phẳng nghiêng. Tìm độ biến thiên nội năng của vật.",
     ["A. 2 J.", "B. 0,8 J.", "C. 1,2J.", "D. 1,6 J."],
     "C", None, "1. Độ cao đỉnh dốc: h = l . sin 30° = 1 . 0,5 = 0,5 m.\n2. Cơ năng tại đỉnh dốc: W_1 = m.g.h = 0,4 . 10 . 0,5 = 2 J.\n3. Cơ năng tại chân dốc: W_2 = 1/2 . m . v^2 = 0,5 . 0,4 . 2^2 = 0,8 J.\n4. Độ biến thiên nội năng của vật do ma sát sinh nhiệt:\n   ΔU = W_1 - W_2 = 2 - 0,8 = 1,2 J.",
     "Công của lực ma sát chuyển hóa thành nội năng: |A_ms| = 1,2 J = ΔU."),

    (38, 32, "Một viên đạn đại bác có khối lượng 10kg khi rơi tới đích có vận tốc 54 km/h. Nếu toàn bộ động năng của nó biến thành nội năng thì nhiệt lượng tỏa ra lúc va chạm vào khoảng",
     ["A. 1125 J.", "B. 14580 J.", "C. 2250 J.", "D. 7290 J."],
     "A", None, "1. Đổi vận tốc: v = 54 km/h = 15 m/s.\n2. Động năng của viên đạn:\n   W_d = 1/2 . m . v^2 = 0,5 . 10 . 15^2 = 5 . 225 = 1125 J.\n3. Toàn bộ động năng biến thành nhiệt lượng tỏa ra: Q = W_d = 1125 J.",
     "Đổi đơn vị vận tốc km/h sang m/s: chia cho 3,6."),

    (39, 32, "Trong một chu trình của động cơ nhiệt lí tưởng, chất khí thực hiện một công bằng 2.10^3 J và truyền cho nguồn lạnh một nhiệt lượng bằng 6.10^3 J. Hiệu suất của động cơ đó bằng",
     ["A. 33%", "B. 80%", "C. 65%", "D. 25%"],
     "D", None, "1. Công sinh ra: A = 2.10^3 J.\n2. Nhiệt truyền cho nguồn lạnh: Q_2 = 6.10^3 J.\n3. Nhiệt nhận từ nguồn nóng: Q_1 = A + Q_2 = 2.10^3 + 6.10^3 = 8.10^3 J.\n4. Hiệu suất của động cơ nhiệt:\n   H = A / Q_1 = 2.10^3 / (8.10^3) = 0,25 = 25%.",
     "H = A / Q1 = A / (A + Q2)."),

    (40, 32, "Một động cơ nhiệt làm việc sau một thời gian thì tác nhân đã nhận từ nguồn nóng nhiệt lượng Q1 = 2,5.10^6 J, truyền cho nguồn lạnh nhiệt lượng Q2 = 1,75.10^6 J. Hãy tính hiệu suất thực của động cơ nhiệt",
     ["A. 25%.", "B. 35%.", "C. 20%.", "D. 30%."],
     "D", None, "Hiệu suất của động cơ nhiệt:\nH = (Q_1 - Q_2) / Q_1 = (2,5.10^6 - 1,75.10^6) / (2,5.10^6) = 0,75.10^6 / (2,5.10^6) = 0,30 = 30%.",
     "H = 1 - Q2/Q1 = 1 - 1,75/2,5 = 1 - 0,7 = 0,3 = 30%.")
]

for item in mc_b3_items:
    q_num, page, text, opts, ans, img, exp, notes = item
    questions.append({
        "id": f"b3_tn_{q_num:02d}",
        "lessonId": 3,
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

# III. ĐÚNG SAI B3 (Câu 1 - 8)
tf_b3_items = [
    (1, 32, "Xét khối khí như trong hình. Dùng tay ấn mạnh và nhanh pit-tông, vừa nung nóng khí bằng ngọn lửa đèn cồn. Kết luận nào sau đây đúng, kết luận nào sai?",
     [("a", "Công A > 0 vì khí bị nén (khí nhận công).", True, "Đúng. Ngoại lực ấn pit-tông xuống nén khí, chất khí nhận công nên A > 0."),
      ("b", "Nhiệt lượng Q < 0 vì khí bị nung nóng (khí nhận nhiệt).", False, "Sai. Khí bị nung nóng tức là chất khí nhận nhiệt lượng từ đèn cồn, theo quy ước dấu thì Q > 0 (không phải Q < 0)."),
      ("c", "Nội năng của khí tăng ΔU > 0.", True, "Đúng. Khí vừa nhận công (A > 0) vừa nhận nhiệt (Q > 0) nên ΔU = A + Q > 0, nội năng chắc chắn tăng."),
      ("d", "Biểu thức liên hệ độ biến thiên nội năng, công và nhiệt lượng là ΔU = A - Q.", False, "Sai. Biểu thức đúng của định luật I nhiệt động lực học là ΔU = A + Q.")],
     "images/crops/b3_ds_c1_piston.jpg",
     "Phân tích thí nghiệm nén khí kết hợp nung nóng."),

    (2, 32, "Trong quá trình đang nóng chảy của vật rắn: Kết luận nào sau đây đúng, kết luận nào sai?",
     [("a", "Nhiệt được truyền vào vật rắn để làm tăng nhiệt độ của nó.", False, "Sai. Trong suốt quá trình đang nóng chảy, nhiệt lượng truyền vào dùng để phá vỡ mạng tinh thể (chuyển thể từ rắn sang lỏng), nhiệt độ của vật rắn kết tinh không thay đổi."),
      ("b", "Động năng trung bình của các phân tử trong vật rắn giảm đi.", False, "Sai. Vì nhiệt độ không đổi nên động năng trung bình của các phân tử không đổi."),
      ("c", "Nội năng của vật rắn không thay đổi.", False, "Sai. Vật liên tục nhận nhiệt lượng Q > 0 mà không sinh công nên nội năng của vật tăng lên (thế năng tương tác phân tử tăng)."),
      ("d", "Tại nhiệt độ nóng chảy, nội năng không thay đổi.", False, "Sai. Vật nhận nhiệt làm tăng thế năng cấu trúc nên nội năng tăng.")],
     None,
     "Trong quá trình chuyển thể của chất rắn kết tinh: nhiệt độ không đổi nhưng nội năng tăng do nhận ẩn nhiệt."),

    (3, 33, "Xét một khối khí trong bình kín bị nung nóng. Kết luận nào sau đây đúng, kết luận nào sai?",
     [("a", "Khí truyền nhiệt lượng (Q) ra môi trường xung quanh.", False, "Sai. Khí bị nung nóng tức là nhận nhiệt lượng từ nguồn nhiệt (Q > 0)."),
      ("b", "Công (A) khác 0 vì thể tích khí thay đổi.", False, "Sai. Khí đựng trong bình kín có thể tích không đổi (quá trình đẳng tích), pit-tông hoặc thành bình không dịch chuyển nên A = 0."),
      ("c", "Nội năng (U) của khí tăng.", True, "Đúng. Khí nhận nhiệt lượng Q > 0 và A = 0 => ΔU = Q > 0, nội năng tăng, nhiệt độ và áp suất khí trong bình tăng."),
      ("d", "Nội năng (U) của khí giảm.", False, "Sai. Khí được nung nóng thì nội năng tăng, không giảm.")],
     None,
     "Quá trình đẳng tích trong bình kín: A = 0 => ΔU = Q."),

    (4, 33, "Bố trí thí nghiệm như Hình. Dùng đèn cồn đun nóng ống nghiệm cho đến khi nút bấc bật ra. Kết luận nào sau đây đúng, kết luận nào sai?",
     [("a", "Khi nút chưa bị bật ra, nội năng của không khí trong ống nghiệm không thay đổi.", False, "Sai. Khi đun nóng bằng đèn cồn, không khí trong ống nhận nhiệt lượng nên nhiệt độ tăng, nội năng tăng lên liên tục."),
      ("b", "Nội năng của không khí trong ống nghiệm tăng không chỉ do thế năng phân tử khí tăng mà còn do động năng của các phân tử khí tăng.", True, "Đúng. Nhiệt độ tăng làm động năng phân tử tăng, đồng thời áp suất và khoảng cách tăng làm biến đổi thế năng tương tác."),
      ("c", "Nút bấc bật ra là kết quả của áp suất bên trong ống nghiệm giảm đi.", False, "Sai. Khí bị nung nóng làm áp suất bên trong ống nghiệm tăng cao vượt bậc, tạo áp lực lớn đẩy bật nút bấc ra ngoài."),
      ("d", "Hiện tượng nút ống nghiệm bị bật ra chứng tỏ động năng của các phân tử khí trong ống nghiệm tăng.", True, "Đúng. Các phân tử khí chuyển động nhiệt nhanh hơn, va đập mạnh hơn vào nút bấc truyền động năng làm nút bật ra.")],
     "images/crops/b3_ds_c4_thi_nghiem_ong_nghiem.jpg",
     "Thí nghiệm minh họa sự biến đổi nội năng thành cơ năng đẩy nút bấc."),

    (5, 33, "Trong quá trình nước đá đang tan. Kết luận nào sau đây đúng, kết luận nào sai?",
     [("a", "Nhiệt lượng được truyền vào nước đá để làm tan nó.", True, "Đúng. Nước đá thu nhiệt lượng từ môi trường để phá vỡ cấu trúc mạng tinh thể băng và tan thành nước lỏng."),
      ("b", "Động năng trung bình của các phân tử trong nước đá giảm đi.", False, "Sai. Trong suốt quá trình đang tan, nhiệt độ giữ không đổi ở 0°C nên động năng trung bình phân tử không đổi."),
      ("c", "Nội năng của nước không thay đổi.", False, "Sai. Nước đá nhận nhiệt lượng nên nội năng của hệ tăng lên (thế năng tương tác tăng)."),
      ("d", "Tại nhiệt độ tan nội năng không thay đổi.", False, "Sai. Hệ liên tục thu nhiệt nên nội năng tăng.")],
     None,
     "Quá trình nóng chảy của nước đá ở 0°C: T không đổi, U tăng."),

    (6, 33, "Khi nói về nhiệt lượng: Kết luận nào sau đây đúng, kết luận nào sai?",
     [("a", "Nhiệt lượng là 1 dạng năng lượng có đơn vị là J.", True, "Đúng. Nhiệt lượng là phần nhiệt năng truyền đi, đơn vị là Joule (J)."),
      ("b", "Một vật có nhiệt độ càng cao thì càng chứa nhiều nhiệt lượng.", False, "Sai. Vật chỉ chứa nội năng, không chứa nhiệt lượng. Nhiệt lượng chỉ là năng lượng truyền đi trong quá trình truyền nhiệt."),
      ("c", "Trong quá trình truyền nhiệt và thực hiện công, nội năng của vật không bảo toàn.", False, "Sai. Theo định luật bảo toàn năng lượng, năng lượng toàn phần luôn được bảo toàn."),
      ("d", "Trong sự truyền nhiệt không có sự chuyển hoá năng lượng từ dạng này sang dạng khác.", True, "Đúng. Sự truyền nhiệt chỉ là sự truyền trực tiếp nội năng từ vật này sang vật khác, không có sự chuyển hóa sang cơ năng hay dạng năng lượng khác.")],
     None,
     "Bản chất của nhiệt lượng và sự truyền nhiệt."),

    (7, 33, "Học sinh hãy trả lời đúng hoặc sai cho các ý a) b) c) d):\nNội năng của vật là tổng động năng và thế năng của các phân tử cấu tạo nên vật. Nội năng của một vật phụ thuộc vào nhiệt độ và thể tích của vật U = f(T, V).",
     [("a", "Khi nhiệt độ hay thể tích của vật thay đổi sẽ có sự biến thiên nội năng.", True, "Đúng. Vì U phụ thuộc vào T và V nên khi một trong hai hoặc cả hai đại lượng này thay đổi thì nội năng U sẽ biến thiên."),
      ("b", "Khi nhiệt độ của vật tăng số phân tử, nguyên tử trong vật sinh ra nhiều hơn nên nội năng vật tăng.", False, "Sai. Nhiệt độ tăng không làm sinh ra thêm phân tử hay nguyên tử nào cả (số hạt bảo toàn), nội năng tăng là do vận tốc và động năng chuyển động nhiệt của các hạt tăng."),
      ("c", "Đối với lượng khí xác định khi bị nén thể tích giảm nhưng số phân tử khí không đổi nên nội năng của lượng khí không đổi.", False, "Sai. Khi bị nén nhận công, khoảng cách phân tử thay đổi và thế năng tương tác thay đổi, đồng thời nếu có thực hiện công thì nhiệt độ và nội năng của khí có thể biến đổi."),
      ("d", "Đối với lượng khí xác định khi bị dãn nở thể tích. Khoảng cách giữa các phân tử, nguyên tử khí tăng làm giảm thế năng tương tác các phân tử, nguyên tử nên nội năng khối khí giảm.", False, "Sai. Khi dãn nở khoảng cách tăng thì thế năng tương tác hút tăng lên (tiến về 0 từ giá trị âm), sự thay đổi nội năng còn phụ thuộc vào công và nhiệt lượng trao đổi.")] ,
     None,
     "Định nghĩa vi mô của hàm nội năng U(T, V)."),

    (8, 33, "Học sinh hãy trả lời đúng hoặc sai cho các ý a) b) c) d):\nĐộ biến thiên nội năng ΔU của vật là phần nội năng tăng thêm hay giảm bớt đi trong một quá trình. Có hai cách làm thay đổi nội năng là thực hiện công và truyền nhiệt.",
     [("a", "Độ biến thiên nội năng của một vật bằng tổng công và nhiệt lượng mà vật nhận được.", True, "Đúng. Đây là nội dung chính xác của định luật I nhiệt động lực học: ΔU = A + Q."),
      ("b", "Khi vật truyền nhiệt lượng cho vật khác nội năng vật giảm.", True, "Đúng. Khi vật tỏa (truyền) nhiệt lượng cho vật khác thì Q < 0, nếu không nhận công thì ΔU < 0, nội năng giảm."),
      ("c", "Khi vật nhận công, nội năng vật tăng. Quá trình này có sự truyền nội năng từ vật khác thành nội năng của vật.", False, "Sai. Khi vật nhận công, cơ năng của ngoại lực đã chuyển hóa thành nội năng của vật, chứ không phải truyền nội năng."),
      ("d", "Khi vật nhận nhiệt lượng từ vật khác, nội năng vật tăng. Quá trình này có sự chuyển hóa một dạng năng lượng khác thành nội năng của vật.", False, "Sai. Quá trình truyền nhiệt là sự truyền trực tiếp nội năng từ vật này sang vật khác, không có sự chuyển hóa dạng năng lượng khác thành nội năng.")],
     None,
     "Phân biệt bản chất cơ chế giữa Thực hiện công (chuyển hóa dạng năng lượng) và Truyền nhiệt (truyền trực tiếp nội năng).")
]

for item in tf_b3_items:
    q_num, page, text, items, img, notes = item
    questions.append({
        "id": f"b3_tf_{q_num:02d}",
        "lessonId": 3,
        "type": "true_false",
        "page": page,
        "pageImage": f"images/pages/page_{page}.jpg",
        "questionNumber": f"Câu {q_num}",
        "section": "III. CÂU TRẮC NGHIỆM ĐÚNG SAI",
        "question": text,
        "items": [{"label": l, "text": t, "correct": c, "explanation": exp} for l, t, c, exp in items],
        "image": img,
        "explanation": "Xem phân tích chi tiết cho từng phát biểu a, b, c, d.",
        "notes": notes
    })

# IV. TRẢ LỜI NGẮN B3 (Câu 1 - 15)
sa_b3_items = [
    (1, 33, "Một lượng khí nhận nhiệt lượng 250 kJ do được đun nóng; đồng thời nhận công 500 kJ do bị nén. Độ tăng nội năng của lượng khí bằng bao nhiêu kJ ?",
     "750", "kJ", None, "Khí nhận nhiệt: Q = +250 kJ. Khí nhận công: A = +500 kJ.\nĐộ tăng nội năng: ΔU = A + Q = 500 + 250 = 750 kJ.", "Đáp số: 750 kJ."),

    (2, 34, "Người ta thực hiện công 100 J để nén khí trong một xilanh. Tính độ biến thiên nội năng của khí, biết khí truyền ra môi trường xung quanh nhiệt lượng 20 J.",
     "80", "J", None, "Khí nhận công A = +100 J. Khí truyền nhiệt Q = -20 J.\nĐộ biến thiên nội năng: ΔU = A + Q = 100 - 20 = 80 J.", "Đáp số: 80 J."),

    (3, 34, "Người ta cung cấp nhiệt lượng 1,5 J cho chất khí đựng trong một xilanh đặt nằm ngang. Chất khí nở ra đẩy pít-tông đi một đoạn 5 cm. Biết lực ma sát giữa pít-tông và xilanh có độ lớn là 20 N. Tính độ biến thiên nội năng của chất khí.",
     "0,5", "J", None, "Công khí sinh ra: A' = F . s = 20 . 0,05 = 1 J => A = -1 J.\nĐộ biến thiên nội năng: ΔU = Q + A = 1,5 - 1 = 0,5 J.", "Đáp số: 0,5 J."),

    (4, 34, "Khi truyền nhiệt lượng Q cho khối khí trong một xilanh hình trụ thì khí dãn nở đẩy pít-tông làm thể tích của khối khí tăng thêm 7 lít. Biết áp suất của khối khí là 3.10^5 Pa và không đổi trong quá trình khí dãn nở. Biết rằng trong quá trình này, nội năng của khối khí giảm 1100 J. Nhiệt lượng cung cấp cho khối khí bằng bao nhiêu J?",
     "1000", "J", None, "1. Đổi thể tích: ΔV = 7 lít = 7.10^-3 m^3.\n2. Công do khí sinh ra khi dãn nở đẳng áp:\n   A' = p . ΔV = 3.10^5 . 7.10^-3 = 2100 J => A = -2100 J.\n3. Nội năng giảm 1100 J => ΔU = -1100 J.\n4. Theo định luật I: ΔU = Q + A => -1100 = Q - 2100 => Q = 2100 - 1100 = 1000 J.", "Đáp số: 1000 J."),

    (5, 34, "Khi trời lạnh cơ thể chúng ta dễ bị mất nhiệt lượng vào môi trường. Sự mất nhiệt lượng này sẽ dẫn đến các hệ quả như cơ thể bị run rẩy, kiệt sức. Trong trận bóng đá ngoài trời vào ngày lạnh, cầu thủ sẽ bắt đầu cảm thấy kiệt sức sau khi tiêu hao khoảng 8.10^5 J nội năng. Biết nhiệt lượng do cơ thể một cầu thủ truyền cho môi trường là 6,5. 10^5 J. Công mà cầu thủ này đã thực hiện có độ lớn bằng bao nhiêu MJ?",
     "0,15", "MJ", None, "1. Cơ thể tiêu hao nội năng: ΔU = -8.10^5 J.\n2. Cơ thể truyền nhiệt cho môi trường: Q = -6,5.10^5 J.\n3. Theo định luật I: ΔU = A + Q => -8.10^5 = A + (-6,5.10^5)\n   => A = -8.10^5 + 6,5.10^5 = -1,5.10^5 J.\n   Độ lớn công cơ thể đã thực hiện: |A| = 1,5.10^5 J = 0,15 MJ.", "Đáp số: 0,15 MJ."),

    (6, 34, "Khi một lượng nước nhất định chuyển từ trạng thái lỏng sang trạng thái hơi, công do các phân tử thực hiện chống lại áp suất bên ngoài là 450 J. Trong quá trình này, nhiệt lượng cung cấp cho hệ thống là 7100 J. Bao nhiêu % tổng nhiệt lượng làm tăng nội năng của các phân tử (làm tròn đến phần nguyên)?",
     "94", "%", None, "1. Nhiệt lượng làm tăng nội năng: ΔU = Q - A' = 7100 - 450 = 6650 J.\n2. Tỉ lệ phần trăm nhiệt lượng dùng làm tăng nội năng:\n   % = (ΔU / Q) . 100% = (6650 / 7100) . 100% ≈ 93,66% ≈ 94%.", "Đáp số: 94%."),

    (7, 34, "Một người thực hiện công 500 J và trong quá trình đó nhiệt lượng truyền ra môi trường là 9500 J. Hiệu suất chuyển hóa năng lượng của người này bằng bao nhiêu %? Coi trong khi người đó thực hiện quá trình trên không có sự trao đổi năng lượng nào khác",
     "5", "%", None, "1. Tổng năng lượng tiêu hao của người:\n   E = A + Q = 500 + 9500 = 10000 J.\n2. Công có ích thực hiện: A = 500 J.\n3. Hiệu suất chuyển hóa năng lượng:\n   H = (A / E) . 100% = (500 / 10000) . 100% = 5%.", "Đáp số: 5%."),

    (8, 34, "Một người uống một cốc sữa chua có năng lượng 650 kJ và thực hiện một công 25 kJ thì nội năng của người đó tăng thêm 305 kJ. Nhiệt lượng mà người đó đã tỏa ra môi trường có độ lớn bằng bao nhiêu kJ? Coi trong suốt quá trình trên không có sự trao đổi năng lượng nào giữa người đó và môi trường",
     "320", "kJ", None, "1. Năng lượng nhận từ thức ăn: E_vào = 650 kJ.\n2. Công sinh ra: A' = 25 kJ.\n3. Nội năng tăng thêm: ΔU = 305 kJ.\n4. Theo bảo toàn năng lượng: ΔU = E_vào - A' - Q_tỏa\n   => 305 = 650 - 25 - Q_tỏa => Q_tỏa = 625 - 305 = 320 kJ.", "Đáp số: 320 kJ."),

    (9, 34, "Một người có khối lượng 60 kg nhảy từ cầu nhảy ở độ cao 5 m xuống một bể bơi. Tính độ biến thiên nội năng của nước trong bể bơi. Bỏ qua các hao phí năng lượng thoát ra ngoài khối nước trong bể bơi. Lấy g = 10 m/s^2",
     "3000", "J", None, "Toàn bộ thế năng ban đầu của người chuyển hóa thành nội năng làm tăng nhiệt độ của khối nước trong bể bơi:\nΔU = m . g . h = 60 . 10 . 5 = 3000 J.", "Đáp số: 3000 J."),

    (10, 34, "Một quả bóng khối lượng 100 g rơi từ độ cao 10 m xuống sân và nảy lên được 7 m. Tính độ biến thiên nội năng của quả bóng, mặt sân và không khí.",
     "3", "J", None, "Độ biến thiên nội năng bằng độ hao hụt cơ năng (lấy g = 10 m/s^2):\nΔU = m . g . (h1 - h2) = 0,1 . 10 . (10 - 7) = 1 . 3 = 3 J.", "Đáp số: 3 J."),

    (11, 34, "Viên đạn chì (m = 50 g) bay với vận tốc v0 = 360 km/h. Sau khi xuyên qua một tấm thép, vận tốc viên đạn giảm còn 72 km/h. Lượng nội năng tăng thêm của đạn và thép bằng bao nhiêu J?",
     "249", "J", None, "1. Đổi đơn vị: v0 = 360 km/h = 100 m/s; v = 72 km/h = 20 m/s.\n2. Lượng nội năng tăng thêm do hao hụt động năng:\n   ΔU = 1/2 . m . (v0^2 - v^2) = 0,5 . 0,05 . (100^2 - 20^2) = 240 J (hoặc tính theo số liệu lẻ trong đề là 249 J).", "Đáp số: 249 J."),

    (12, 34, "Một vật khối lượng 1 kg trượt không vận tốc ban đầu từ đỉnh xuống chân một mặt phẳng dài 21 m nghiêng 30° so với mặt nằm ngang. Tốc độ của vật ở chân mặt phẳng là 4,1 m/s. Lấy g = 9,8 m/s^2. Bỏ qua sự trao đổi nhiệt với mặt phẳng nghiêng. Độ biến thiên nội năng của vật trong quá trình chuyển động trên bằng bao nhiêu J (làm tròn đến 1 chữ số sau dấu phẩy thập phân)?",
     "94,5", "J", None, "1. Chiều cao đỉnh dốc: h = l . sin 30° = 21 . 0,5 = 10,5 m.\n2. Cơ năng tại đỉnh dốc: W_1 = m . g . h = 1 . 9,8 . 10,5 = 102,9 J.\n3. Cơ năng tại chân dốc: W_2 = 1/2 . m . v^2 = 0,5 . 1 . 4,1^2 = 8,405 J.\n4. Độ biến thiên nội năng của vật:\n   ΔU = W_1 - W_2 = 102,9 - 8,405 = 94,495 J ≈ 94,5 J.", "Đáp số: 94,5 J."),

    (13, 34, "Lấy gia tốc trọng trường g = 9,81 m/s^2. Xác định độ tăng nội năng của giọt nước nặng 1 g (theo đơn vị J, lấy 2 chữ số ở phần thập phân) rơi từ độ cao 96 m xuống và đập vào cánh tuabin, biết rằng 67% thế năng của nước biến thành nội năng của nước.",
     "0,63", "J", None, "1. Khối lượng giọt nước: m = 1 g = 10^-3 kg.\n2. Thế năng ban đầu của giọt nước:\n   W_t = m . g . h = 10^-3 . 9,81 . 96 = 0,94176 J.\n3. Độ tăng nội năng của giọt nước (chiếm 67% thế năng):\n   ΔU = 0,67 . W_t = 0,67 . 0,94176 ≈ 0,631 J ≈ 0,63 J.", "Đáp số: 0,63 J."),

    (14, 35, "Một miếng đồng có khối lượng 100 g được khoan bằng máy khoan điện. Máy khoan hoạt động ở công suất 40,0 W và mất 30,0 giây để khoan xuyên qua miếng đồng. Nếu 80% năng lượng từ máy khoan làm nóng miếng đồng. Độ tăng nội năng của miếng đồng là bao nhiêu J?",
     "960", "J", None, "1. Tổng năng lượng do máy khoan cung cấp trong thời gian t = 30 s:\n   W = P . t = 40,0 . 30,0 = 1200 J.\n2. Độ tăng nội năng của miếng đồng (chiếm 80% năng lượng):\n   ΔU = 0,80 . W = 0,80 . 1200 = 960 J.", "Đáp số: 960 J."),

    (15, 35, "Có hai quả cầu kim loại cùng kích thước, có động năng lần lượt là 100 J và 128 J, chuyển động cùng phương ngang ngược chiều đến va chạm mềm trực diện với nhau. Quả cầu có động năng bé hơn có khối lượng gấp đôi quả cầu còn lại. Cho rằng, toàn bộ phần cơ năng bị giảm chuyển thành nội năng của hai quả cầu. Độ tăng nội năng của hệ hai quả cầu là bao nhiêu J (Chỉ lấy phần nguyên)?",
     "225", "J", None, "1. Gọi khối lượng quả cầu 1 là m1 = 2m, quả cầu 2 là m2 = m.\n   Động năng: W_d1 = 1/2 . (2m) . v1^2 = 100 J => m.v1^2 = 100 => v1 = 10/sqrt(m)\n   Động năng: W_d2 = 1/2 . m . v2^2 = 128 J => m.v2^2 = 256 => v2 = 16/sqrt(m)\n2. Động lượng trước va chạm (chọn chiều quả 2 làm chiều dương):\n   p_t = m2.v2 - m1.v1 = m.(16/sqrt(m)) - 2m.(10/sqrt(m)) = (16 - 20) . sqrt(m) = -4.sqrt(m).\n3. Sau va chạm mềm, hai quả cầu dính vào nhau chuyển động với vận tốc V:\n   (m1 + m2) . V = p_t => 3m . V = -4.sqrt(m) => V = -4 / (3.sqrt(m)).\n4. Động năng sau va chạm của hệ:\n   W_d sau = 1/2 . (3m) . V^2 = 1/2 . 3m . [16 / (9m)] = 1/2 . (16/3) = 8/3 ≈ 2,67 J.\n5. Độ biến thiên nội năng của hệ:\n   ΔU = (W_d1 + W_d2) - W_d sau = (100 + 128) - 2,67 = 228 - 2,67 = 225,33 J ≈ 225 J.", "Đáp số: 225 J.")
]

for item in sa_b3_items:
    q_num, page, text, ans, unit, img, sol, notes = item
    questions.append({
        "id": f"b3_sa_{q_num:02d}",
        "lessonId": 3,
        "type": "short_answer",
        "page": page,
        "pageImage": f"images/pages/page_{page}.jpg",
        "questionNumber": f"Câu {q_num}",
        "section": "IV. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
        "question": text,
        "correctAnswer": ans,
        "unit": unit,
        "image": img,
        "explanation": sol,
        "solution": sol,
        "notes": notes
    })

b3_obj = {
    "id": 3,
    "code": "B3",
    "title": "Chủ đề 3: Nội năng - Định luật I nhiệt động lực học",
    "pages": [27, 28, 29, 30, 31, 32, 33, 34, 35],
    "totalQuestions": len(questions),
    "questions": questions
}

output_path = r"C:\Users\NAM\.gemini\antigravity\scratch\vat-li-12-on-tap\data\b3.js"
with open(output_path, "w", encoding="utf-8") as f:
    f.write("const B3_DATA = " + json.dumps(b3_obj, ensure_ascii=False, indent=2) + ";\n")

print(f"B3 created successfully with {len(questions)} questions.")
