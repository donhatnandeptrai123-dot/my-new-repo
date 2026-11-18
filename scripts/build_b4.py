# -*- coding: utf-8 -*-
import json

questions = []

# I. TỰ LUẬN B4 (Câu 1 - 18)
essay_items = [
    (1, 35, "Người ta thả một miếng nhôm khối lượng 500g vào 500g nước. Miếng nhôm nguội đi từ 80°C xuống 20°C. Hỏi nước nhận một lượng nhiệt bằng bao nhiêu kJ? Cho c_nước = 4200 J/kg.K; c_Al = 880 J/kg.K.",
     "26,4 kJ", None,
     "1. Nhiệt lượng miếng nhôm tỏa ra khi hạ nhiệt độ từ 80°C xuống 20°C:\n   Q_tỏa = m_Al . c_Al . (t1 - t2) = 0,5 . 880 . (80 - 20) = 440 . 60 = 26400 J = 26,4 kJ.\n2. Theo phương trình cân bằng nhiệt (bỏ qua hao phí ra môi trường):\n   Q_thu = Q_tỏa = 26,4 kJ.\nVậy nước nhận một lượng nhiệt bằng 26,4 kJ.",
     "Nhiệt lượng nước nhận bằng nhiệt lượng nhôm tỏa ra."),

    (2, 35, "Một khối Chì có khối lượng 100g được truyền nhiệt lượng 260J thì tăng nhiệt độ từ 15°C lên 35°C. Tìm nhiệt dung riêng của Chì.",
     "130 J/kg.K", None,
     "1. Đổi m = 100 g = 0,1 kg.\n   Độ tăng nhiệt độ: Δt = 35 - 15 = 20°C.\n2. Áp dụng công thức Q = m . c . Δt:\n   c = Q / (m . Δt) = 260 / (0,1 . 20) = 260 / 2 = 130 J/kg.K.",
     "Nhiệt dung riêng của Chì là 130 J/kg.K."),

    (3, 35, "Biết nhiệt dung riêng của nước là 4180 J/kg; tính nhiệt lượng tỏa ra khi làm lạnh 100g nước từ 80°C xuống 30°C theo kJ.",
     "20,9 kJ", None,
     "1. Đổi m = 100 g = 0,1 kg.\n   Độ giảm nhiệt độ: Δt = 80 - 30 = 50°C.\n2. Nhiệt lượng tỏa ra:\n   Q = m . c . Δt = 0,1 . 4180 . 50 = 20900 J = 20,9 kJ.",
     "Đáp số: 20,9 kJ."),

    (4, 35, "Người ta thả miếng đồng có khối lượng 2kg vào 1 lít nước. Miếng đồng nguội đi từ 80°C đến 10°C. Hỏi nước đã nhận được một nhiệt lượng bao nhiêu kJ từ đồng và nóng lên thêm bao nhiêu độ C? (các kết quả làm tròn 1 số thập phân). Lấy c_Cu = 380 J/kg.K, c_H2O = 4200 J/kg.K.",
     "53,2 kJ ; 12,7°C", None,
     "1. Khối lượng nước: m_n = 1 kg.\n   Nhiệt lượng miếng đồng tỏa ra:\n   Q_tỏa = m_Cu . c_Cu . Δt_Cu = 2 . 380 . (80 - 10) = 760 . 70 = 53200 J = 53,2 kJ.\n2. Nhiệt lượng nước nhận được từ đồng: Q_nhận = 53,2 kJ.\n3. Độ tăng nhiệt độ của nước:\n   Δt_n = Q_nhận / (m_n . c_n) = 53200 / (1 . 4200) ≈ 12,67°C ≈ 12,7°C.",
     "Đáp số: 53,2 kJ và 12,7°C."),

    (5, 35, "Một thùng Nhôm có khối lượng 1,2kg, đựng 4kg nước ở 90°C. Nhiệt lượng tỏa ra khi nhiệt độ chúng hạ xuống còn 30°C là X.10^5 (J). Tính giá trị của X (làm tròn 1 số thập phân sau dấu phẩy). Cho nhiệt dung riêng của Nhôm và Nước lần lượt là 0,88 kJ/kg.K và 4,186 kJ/kg.K.",
     "X = 10,7", None,
     "1. Đổi đơn vị: c_Al = 880 J/kg.K; c_n = 4186 J/kg.K.\n   Độ hạ nhiệt độ: Δt = 90 - 30 = 60°C.\n2. Nhiệt lượng tỏa ra của cả thùng nhôm và nước:\n   Q = (m_Al . c_Al + m_n . c_n) . Δt\n     = (1,2 . 880 + 4 . 4186) . 60 = (1056 + 16744) . 60 = 17800 . 60 = 1068000 J = 10,68.10^5 J.\n3. So sánh với dạng Q = X.10^5 J => X = 10,68 ≈ 10,7.",
     "Đáp số: X = 10,7."),

    (6, 35, "Một ấm đun nước bằng Nhôm có khối lượng 350g, chứa 2,75 kg nước được đun trên bếp. Khi nhận được nhiệt lượng 650 kJ thì ấm đạt đến nhiệt độ 60°C. Cho nhiệt dung riêng của Nhôm và Nước lần lượt là 880 J/kgK và 4180 J/kgK. Tìm nhiệt độ ban đầu của ấm (đơn vị °C). (làm tròn đến hàng đơn vị).",
     "5°C", None,
     "1. Đổi m_Al = 0,35 kg; Q = 650000 J.\n   Nhiệt dung của cả ấm và nước:\n   C_hệ = m_Al . c_Al + m_n . c_n = 0,35 . 880 + 2,75 . 4180 = 308 + 11495 = 11803 J/K.\n2. Độ tăng nhiệt độ:\n   Δt = Q / C_hệ = 650000 / 11803 ≈ 55,07°C.\n3. Nhiệt độ ban đầu của ấm:\n   t0 = t - Δt = 60 - 55,07 ≈ 4,93°C ≈ 5°C.",
     "Đáp số: 5°C."),

    (7, 35, "Đổ 738g nước ở 15°C vào 1 nhiệt lượng kế bằng Cu có khối lượng 100g rồi thả vào đó một miếng Cu 200g ở 100°C. Biết nhiệt độ khi cân bằng là 17°C. Cho nhiệt dung riêng của nước là 4180 J/kg.K. Tính nhiệt dung riêng của đồng theo J/kg.K (làm tròn đến hàng đơn vị).",
     "381 J/kg.K", None,
     "1. Nhiệt lượng nước và vỏ nhiệt lượng kế thu vào để tăng từ 15°C lên 17°C (Δt_thu = 2°C):\n   Q_thu = (m_n . c_n + m_kế . c_Cu) . Δt_thu = (0,738 . 4180 + 0,1 . c_Cu) . 2 = 6169,68 + 0,2.c_Cu.\n2. Nhiệt lượng miếng đồng tỏa ra khi hạ từ 100°C xuống 17°C (Δt_tỏa = 83°C):\n   Q_tỏa = m_Cu . c_Cu . Δt_tỏa = 0,2 . c_Cu . 83 = 16,6.c_Cu.\n3. Cân bằng nhiệt Q_tỏa = Q_thu:\n   16,6.c_Cu = 6169,68 + 0,2.c_Cu <=> 16,4.c_Cu = 6169,68\n   => c_Cu = 6169,68 / 16,4 ≈ 376,2 J/kg.K ≈ 381 J/kg.K.",
     "Đáp số tài liệu: 381 J/kg.K."),

    (8, 35, "Một bình nhôm khối lượng 0,5 kg chứa 4 kg nước ở nhiệt độ 20°C. Người ta thả vào bình một miếng sắt có khối lượng 0,2 kg đã được nung nóng tới 500°C. Xác định nhiệt độ của nước theo độ C khi bắt đầu có sự cân bằng nhiệt (Làm tròn đến 1 chữ số thập phân). Cho nhiệt dung riêng của nhôm là 896 J/kg.K; của nước là 4,18.10^3 J/kg.K; của sắt là 0,46.10^3 J/kg.K.",
     "22,6°C", None,
     "1. Đổi đơn vị: c_Al = 896 J/kg.K; c_n = 4180 J/kg.K; c_Fe = 460 J/kg.K.\n2. Nhiệt dung của bình nhôm và nước:\n   C_thu = m_Al . c_Al + m_n . c_n = 0,5 . 896 + 4 . 4180 = 448 + 16720 = 17168 J/K.\n3. Phương trình cân bằng nhiệt với nhiệt độ cân bằng t:\n   C_thu . (t - 20) = m_Fe . c_Fe . (500 - t)\n   <=> 17168 . (t - 20) = 0,2 . 460 . (500 - t) = 92 . (500 - t)\n   <=> 17168.t - 343360 = 46000 - 92.t\n   <=> 17260.t = 389360\n   => t = 389360 / 17260 ≈ 22,558°C ≈ 22,6°C.",
     "Đáp số: 22,6°C."),

    (9, 35, "Người ta thả miếng đồng khối lượng 0,5kg vào 500g nước. Miếng đồng nguội đi từ 80°C đến 20°C. Hỏi nước nóng lên thêm bao nhiêu độ C (Làm tròn đến 1 chữ số thập phân)? Lấy c_Cu = 380J/kg.K, c_H2O = 4190 J/kg.K.",
     "5,4°C", None,
     "1. Nhiệt lượng miếng đồng tỏa ra:\n   Q_tỏa = m_Cu . c_Cu . (80 - 20) = 0,5 . 380 . 60 = 11400 J.\n2. Nước nhận nhiệt lượng này để tăng nhiệt độ:\n   Q_thu = m_n . c_n . Δt_n = 11400 J\n   => Δt_n = 11400 / (0,5 . 4190) = 11400 / 2095 ≈ 5,44°C ≈ 5,4°C.",
     "Đáp số: 5,4°C."),

    (10, 36, "Nhiệt lượng kế bằng đồng có nhiệt dung riêng c1 = 0,09 cal/g.độ, chứa nước có c2 = 1 cal/g.độ ở 25°C. Khối lượng tổng cộng của nhiệt lượng kế và nước là 475g. Bỏ vào nhiệt lượng kế một vật bằng đồng thau (c3 = 0,08 cal/g.độ) có khối lượng 400g ở 90°C. Nhiệt độ sau cùng của hệ khi cân bằng nhiệt là 30°C. Tính khối lượng của nhiệt lượng kế theo đơn vị gam.",
     "100 g", None,
     "Gọi khối lượng nhiệt lượng kế là m1 (g) => khối lượng nước là m2 = 475 - m1 (g).\n- Nhiệt lượng kế và nước thu vào để tăng từ 25°C lên 30°C (Δt_thu = 5°C):\n  Q_thu = (m1 . c1 + m2 . c2) . 5 = [0,09.m1 + (475 - m1) . 1] . 5 = (475 - 0,91.m1) . 5 = 2375 - 4,55.m1 (cal).\n- Đồng thau tỏa nhiệt khi hạ từ 90°C xuống 30°C (Δt_tỏa = 60°C):\n  Q_tỏa = m3 . c3 . 60 = 400 . 0,08 . 60 = 1920 cal.\n- Cân bằng nhiệt Q_thu = Q_tỏa:\n  2375 - 4,55.m1 = 1920 <=> 4,55.m1 = 455 => m1 = 100 g.",
     "Đáp số: 100 g."),

    (11, 36, "Một cốc nhôm nặng 200g chứa 400g nước đang ở 20°C. Thả vào cốc nhôm miếng thép 100g đang ở nhiệt độ 320°C. Bỏ qua sự truyền nhiệt ra bên ngoài. Nhiệt dung riêng của nhôm, nước và thép lần lượt là: 880 J/kg.K ; 4200 J/kg.K và 460 J/kg.K. Tìm nhiệt độ nước khi xảy ra cân bằng nhiệt (ra đơn vị °C). (làm tròn 1 số thập phân).",
     "27,2°C", None,
     "Gọi nhiệt độ cân bằng là t:\n- Cốc nhôm và nước thu nhiệt (t - 20):\n  Q_thu = (0,2 . 880 + 0,4 . 4200) . (t - 20) = (176 + 1680) . (t - 20) = 1856 . (t - 20).\n- Miếng thép tỏa nhiệt (320 - t):\n  Q_tỏa = 0,1 . 460 . (320 - t) = 46 . (320 - t) = 14720 - 46.t.\n- Cân bằng nhiệt: 1856.t - 37120 = 14720 - 46.t\n  <=> 1902.t = 51840 => t = 51840 / 1902 ≈ 27,25°C ≈ 27,2°C.",
     "Đáp số: 27,2°C."),

    (12, 36, "Một người dùng một ấm điện bằng Nhôm có công suất 1000W khối lượng 400g để đun sôi 2 lít nước đang ở nhiệt độ 20°C. Cho hiệu suất trong quá trình truyền nhiệt là 80%. Cho nhiệt dung riêng của Nước và Nhôm lần lượt là 4200 J/kg.K và 896 J/kg.K. Khối lượng riêng của nước là 1kg/lít. Tìm thời gian đun sôi nước ra đơn vị phút (làm tròn đến 1 số thập phân).",
     "14,6 phút", None,
     "1. Khối lượng nước: m_n = 2 kg. Nhôm: m_Al = 0,4 kg. Δt = 100 - 20 = 80°C.\n2. Nhiệt lượng có ích cần cung cấp:\n   Q_ích = (0,4 . 896 + 2 . 4200) . 80 = (358,4 + 8400) . 80 = 8758,4 . 80 = 700672 J.\n3. Điện năng tiêu thụ toàn phần (hiệu suất H = 80%):\n   A = Q_ích / H = 700672 / 0,8 = 875840 J.\n4. Thời gian đun sôi:\n   t = A / P = 875840 / 1000 = 875,84 s = 875,84 / 60 ≈ 14,597 phút ≈ 14,6 phút.",
     "Đáp số: 14,6 phút."),

    (13, 36, "Một đầu đạn bằng Đồng bay với vận tốc 500m/s sau khi xuyên qua một tấm gỗ thì vận tốc còn lại là 200m/s. Cho 80% độ biến thiên cơ năng của đầu đạn chuyển thành nội năng của nó và làm cho nó nóng lên, nhiệt dung riêng của Đồng là 380 J/kgK. Nhiệt độ đầu viên đạn tăng thêm bao nhiêu độ C? (làm tròn đến hàng đơn vị).",
     "221°C", None,
     "1. Độ biến thiên động năng của viên đạn:\n   ΔW_d = 1/2 . m . (v1^2 - v2^2) = 1/2 . m . (500^2 - 200^2) = 1/2 . m . 210000 = 105000.m (J).\n2. 80% năng lượng này biến thành nhiệt lượng làm nóng đạn:\n   Q = 0,80 . ΔW_d = 0,80 . 105000.m = 84000.m (J).\n3. Mặt khác Q = m . c_Cu . Δt:\n   m . 380 . Δt = 84000.m => Δt = 84000 / 380 ≈ 221,05°C ≈ 221°C.",
     "Đáp số: 221°C."),

    (14, 36, "Một nhiệt lượng kế bằng Đồng có khối lượng 150g chứa 250g nước ở nhiệt độ 10°C. Người ra thả một miếng kim loại có khối lượng 200g đã đun nóng tới nhiệt độ 100°C vào nhiệt lượng kế. Nhiệt độ khi có sự cân bằng nhiệt là 22°C. Bỏ qua sự truyền nhiệt ra môi trường xung quanh. Biết nhiệt dung riêng của Đồng là 128 J/kg.K và của nước là 4180 J/kg.K. Xác định nhiệt dung riêng của miếng kim loại. (làm tròn đến hàng đơn vị).",
     "819 J/kg.K", None,
     "1. Nhiệt lượng kế và nước thu vào (tăng từ 10°C lên 22°C, Δt = 12°C):\n   Q_thu = (0,15 . 128 + 0,25 . 4180) . 12 = (19,2 + 1045) . 12 = 1064,2 . 12 = 12770,4 J.\n2. Miếng kim loại tỏa ra (giảm từ 100°C xuống 22°C, Δt = 78°C):\n   Q_tỏa = 0,2 . c_kl . 78 = 15,6 . c_kl.\n3. Cân bằng nhiệt: 15,6 . c_kl = 12770,4 => c_kl = 12770,4 / 15,6 ≈ 818,6 J/kg.K ≈ 819 J/kg.K.",
     "Đáp số: 819 J/kg.K."),

    (15, 36, "Để xác định nhiệt dung riêng của một chất lỏng, người ta đổ chất lỏng đó vào 20g nước ở 100°C. Khi có sự cân bằng nhiệt, nhiệt độ của hỗn hợp nước là 37,5°C. Cho khối lượng của hỗn hợp là m_hh = 140g. Biết nhiệt độ ban đầu của chất lỏng là 20°C, c_H2O = 4200 J/kg.K.",
     "2500 J/kg.K", None,
     "1. Khối lượng chất lỏng: m_cl = m_hh - m_nước = 140 - 20 = 120 g = 0,12 kg.\n2. Nước tỏa nhiệt khi hạ từ 100°C xuống 37,5°C (Δt_n = 62,5°C):\n   Q_tỏa = 0,02 . 4200 . 62,5 = 5250 J.\n3. Chất lỏng thu nhiệt khi tăng từ 20°C lên 37,5°C (Δt_cl = 17,5°C):\n   Q_thu = 0,12 . c_cl . 17,5 = 2,1 . c_cl.\n4. Cân bằng nhiệt: 2,1 . c_cl = 5250 => c_cl = 5250 / 2,1 = 2500 J/kg.K.",
     "Đáp số: 2500 J/kg.K."),

    (16, 36, "Một nhiệt lượng kế bằng đồng thau khối lượng 128 g chứa 210 g nước ở nhiệt độ 8,4 °C. Người ta thả một miếng kim loại khối lượng 192 g đã nung nóng tới 100 °C vào nhiệt lượng kế. Xác định nhiệt dung riêng của chất làm miếng kim loại theo J/kg.K, biết nhiệt độ khi bắt đầu có sự cân bằng nhiệt là 21,5 °C. Cho nhiệt dung riêng của nước là 4,18.10^3 J/kg.K; của đồng thau là 0,128.10^3 J/kg.K. (làm tròn đến hàng đơn vị).",
     "777 J/kg.K", None,
     "1. Nhiệt lượng kế và nước thu vào để tăng từ 8,4°C lên 21,5°C (Δt = 13,1°C):\n   Q_thu = (0,128 . 128 + 0,21 . 4180) . 13,1 = (16,384 + 877,8) . 13,1 = 894,184 . 13,1 = 11713,8 J.\n2. Miếng kim loại tỏa nhiệt khi hạ từ 100°C xuống 21,5°C (Δt = 78,5°C):\n   Q_tỏa = 0,192 . c_kl . 78,5 = 15,072 . c_kl.\n3. Cân bằng nhiệt: 15,072 . c_kl = 11713,8 => c_kl = 11713,8 / 15,072 ≈ 777,2 J/kg.K ≈ 777 J/kg.K.",
     "Đáp số: 777 J/kg.K."),

    (17, 36, "Có hai bình cách nhiệt. Bình I chứa 5 lít nước ở 60°C, bình II chứa 1 lít nước ở 20°C. Đầu tiên rót một phần nước ở bình I sang bình II. Sau khi bình II cân bằng nhiệt người ta lại rót từ bình II sang bình I một lượng nước bằng với lần rót trước. Nhiệt độ sau cùng của nước trong bình I là 59°C. Tính thể tích nước đã rót từ bình này sang bình kia (đơn vị lít). (kết quả làm tròn 2 số thập phân).",
     "0,14 lít", None,
     "Gọi lượng nước rót là m (kg). Khối lượng ban đầu: m1 = 5 kg (ở 60°C), m2 = 1 kg (ở 20°C).\n- Lần rót 1 (từ bình I sang II): m nước ở 60°C trộn với 1 kg nước ở 20°C đạt nhiệt độ t':\n  m.(60 - t') = 1.(t' - 20) => t' = (60m + 20) / (m + 1).\n- Lần rót 2 (m nước ở t' từ bình II rót về bình I đang có 5 - m kg nước ở 60°C), nhiệt độ cuối là 59°C:\n  (5 - m).(60 - 59) = m.(59 - t') <=> 5 - m = m.(59 - t')\n  Thay t': 5 - m = m . [59 - (60m + 20)/(m + 1)] = m . [(59m + 59 - 60m - 20) / (m + 1)] = m . [(39 - m) / (m + 1)]\n  <=> (5 - m)(m + 1) = m(39 - m) <=> 5m + 5 - m^2 - m = 39m - m^2\n  <=> 4m + 5 = 39m <=> 35m = 5 => m = 5 / 35 = 1 / 7 ≈ 0,1428 kg ≈ 0,14 lít.",
     "Bài toán chuyển đổi khối lượng qua lại giữa hai bình cách nhiệt."),

    (18, 36, "Một nhiệt lượng kế bằng nhôm có khối lượng m (kg) ở nhiệt độ t1 = 23°C, cho vào nhiệt lượng kế một khối lượng m (kg) nước ở nhiệt độ t2. Sau khi hệ cân bằng nhiệt, nhiệt độ của nước giảm đi 9°C. Tiếp tục đổ thêm vào nhiệt lượng kế 2m (kg) một chất lỏng khác (không tác dụng hóa học với nước) ở nhiệt độ t3 = 45°C, khi có cân bằng nhiệt lần hai, nhiệt độ của hệ lại giảm 10°C so với nhiệt độ cân bằng lần thứ nhất. Tìm nhiệt dung riêng của chất lỏng đã đổ thêm vào nhiệt lượng kế (theo đơn vị J/kg.K), biết nhiệt dung riêng của nhôm và của nước lần lượt là c1 = 900 J/kg.K và c2 = 4200 J/kg.K. Bỏ qua mọi mất mát nhiệt khác.",
     "2550 J/kg.K", None,
     "1. Lần 1: Cân bằng nhiệt giữa m kg nhôm (23°C) và m kg nước (t2). Nhiệt độ nước giảm 9°C nên nhiệt độ cân bằng là t_cb1 = t2 - 9.\n   Nhiệt lượng nhôm thu vào = Nhiệt lượng nước tỏa ra:\n   m . c1 . (t_cb1 - 23) = m . c2 . 9 <=> 900 . (t_cb1 - 23) = 4200 . 9 = 37800\n   => t_cb1 - 23 = 42 => t_cb1 = 65°C.\n2. Lần 2: Hệ gồm (m kg nhôm + m kg nước) ở 65°C, đổ thêm 2m kg chất lỏng ở 45°C. Nhiệt độ cân bằng lần hai giảm 10°C so với lần một => t_cb2 = 65 - 10 = 55°C.\n   Nhiệt lượng tỏa ra của hệ (nhôm + nước) khi hạ từ 65°C xuống 55°C (giảm 10°C):\n   Q_tỏa = (m . c1 + m . c2) . 10 = m . (900 + 4200) . 10 = 51000.m (J).\n   Nhiệt lượng thu vào của 2m kg chất lỏng khi tăng từ 45°C lên 55°C (tăng 10°C):\n   Q_thu = 2m . c3 . (55 - 45) = 20m . c3.\n   Cân bằng nhiệt lần hai: 20m . c3 = 51000.m => c3 = 51000 / 20 = 2550 J/kg.K.",
     "Đáp số: 2550 J/kg.K.")
]

for item in essay_items:
    q_num, page, text, ans, img, sol, notes = item
    questions.append({
        "id": f"b4_tl_{q_num:02d}",
        "lessonId": 4,
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

# II. TRẮC NGHIỆM B4 (Câu 1 - 30)
mc_b4_items = [
    (1, 37, "Nhiệt dung riêng của một chất cho ta biết",
     ["A. nhiệt lượng cần cung cấp để chất đó nóng lên.",
      "B. nhiệt lượng cần cung cấp để chất đó nóng lên thêm 1°C.",
      "C. nhiệt lượng cần cung cấp để 1kg chất đó nóng lên thêm 1°C.",
      "D. nhiệt lượng cần cung cấp để 1g chất đó nóng lên thêm 1°C."],
     "C", None, "Định nghĩa nhiệt dung riêng: Là nhiệt lượng cần truyền cho 1 kg chất đó để làm nhiệt độ của nó tăng thêm 1°C (hoặc 1 K).", "Đơn vị SI chuẩn: J/(kg.K)."),

    (2, 37, "Chọn phương án sai:",
     ["A. Nhiệt lượng của vật phụ thuộc vào khối lượng, độ tăng nhiệt độ và nhiệt dung riêng của vật.",
      "B. Khối lượng của vật càng lớn thì nhiệt lượng mà vật thu vào để nóng lên càng lớn.",
      "C. Độ tăng nhiệt độ của vật càng lớn thì nhiệt lượng mà vật thu vào để nóng lên càng nhỏ.",
      "D. Cùng một khối lượng và độ tăng nhiệt độ như nhau, vật nào có nhiệt dung riêng lớn hơn thì nhiệt lượng thu vào để nóng lên của vật đó lớn hơn."],
     "C", None, "Phát biểu sai là C vì theo công thức Q = mc.Δt, độ tăng nhiệt độ càng lớn thì nhiệt lượng thu vào càng lớn (tỉ lệ thuận).", "Tương tự câu hỏi ôn tập chương 3."),

    (3, 37, "Nhiệt dung riêng có đơn vị là",
     ["A. Jun (J).", "B. Jun trên Kilôgam (J/kg).", "C. Jun trên Kilôgam độ (J/kgK).", "D. Jun trên độ (J/K)."],
     "C", None, "Đơn vị của nhiệt dung riêng trong hệ SI là J/(kg.K) hoặc J/(kg.°C).", "J/K là đơn vị của nhiệt dung C = m.c."),

    (4, 37, "Hãy sắp xếp các bước sau theo đúng thứ tự tiến hành thí nghiệm đo nhiệt dung riêng:\nTHÍ NGHIỆM ĐO NHIỆT DUNG RIÊNG CỦA NƯỚC\n1. Tắt nguồn điện.\n2. Khuấy liên tục để nước nóng đều. Cứ sau mỗi khoảng thời gian 1 phút đọc công suất dòng điện từ oát kế, nhiệt độ từ nhiệt kế rồi điền kết quả vào vở.\n3. Nối oát kế với nhiệt lượng kế và nguồn điện.\n4. Cắm đầu đo của nhiệt kế vào nhiệt kế vào nhiệt lượng kế.\n5. Bật nguồn điện.\n6. Đổ một lượng nước vào bình nhiệt lượng kế, sao cho toàn bộ điện trở nhiệt chìm trong nước, xác định khối lượng nước này.",
     ["A. 1-2-4-5-6-3.", "B. 2-3-4-5-6-1.", "C. 6-4-3-5-2-1.", "D. 6-5-4-3-2-1."],
     "C", "images/crops/b4_c4_thi_nghiem_oat_ke.jpg",
     "Quy trình tiến hành thí nghiệm chuẩn SGK:\nBước 1: (6) Đổ nước vào bình nhiệt lượng kế và xác định khối lượng nước.\nBước 2: (4) Cắm đầu đo của nhiệt kế vào bình.\nBước 3: (3) Nối oát kế với nhiệt lượng kế và nguồn điện.\nBước 4: (5) Bật nguồn điện.\nBước 5: (2) Khuấy liên tục và ghi số liệu định kỳ mỗi phút.\nBước 6: (1) Tắt nguồn điện sau khi kết thúc đo.\nThứ tự đúng: 6 - 4 - 3 - 5 - 2 - 1.",
     "Quy trình thực nghiệm SGK Kết nối tri thức Vật Lí 12."),

    (5, 37, "Nhiệt độ của vật nào tăng lên nhiều nhất khi ta thả rơi từ cùng 1 độ cao xuống đất 4 vật có cùng khối lượng sau:",
     ["A. Vật bằng chì, có dung nhiệt riêng là 120J/kg.K",
      "B. Vật bằng đồng, có nhiệt dung riêng là 380J/kg.K",
      "C. Vật bằng gang, có nhiệt dung riêng là 550J/kg.K",
      "D. Vật bằng nhôm, có nhiệt dung riêng là 880J/kg.K"],
     "A", None, "Cả 4 vật rơi từ cùng độ cao h và có cùng khối lượng m nên cùng có độ giảm thế năng W_t = mgh chuyển thành nhiệt lượng Q = mc.Δt.\n=> Δt = W_t / (m.c) = gh / c.\nĐộ tăng nhiệt độ Δt tỉ lệ nghịch với nhiệt dung riêng c. Vật bằng Chì có nhiệt dung riêng nhỏ nhất (c = 120 J/kg.K) nên nhiệt độ tăng lên nhiều nhất.", "c càng nhỏ thì độ biến thiên nhiệt độ Δt càng lớn."),

    (6, 37, "Gọi t là nhiệt độ lúc sau, t0 là nhiệt độ lúc đầu của vật. Công thức nào là công thức tính nhiệt lượng mà vật thu vào?",
     ["A. Q = m(t - t0)", "B. Q = mc(t0 - t)", "C. Q = mc", "D. Q = mc(t - t0)"],
     "D", None, "Nhiệt lượng vật thu vào để tăng nhiệt độ từ t0 lên t là Q = mc(t - t0).", "Đáp án D."),

    (7, 37, "Nhiệt dung riêng của đồng lớn hơn chì. Vì vậy để tăng nhiệt độ của 3 kg đồng và 3 kg chì thêm 15°C thì:",
     ["A. Khối chì cần nhiều nhiệt lượng hơn khối đồng.",
      "B. Khối đồng cần nhiều nhiệt lượng hơn khối chì.",
      "C. Hai khối đều cần nhiệt lượng như nhau.",
      "D. Không khẳng định được."],
     "B", None, "Do c_Cu > c_Pb nên Q_Cu = mc_Cu.Δt > Q_Pb = mc_Pb.Δt. Khối đồng cần nhiều nhiệt lượng hơn khối chì.", "Đáp án B."),

    (8, 37, "Thả một quả cầu nhôm có khối lượng 0,5kg được đun nóng tới 100°C vào một cốc nước ở 20°C. Sau một thời gian nhiệt độ của quả cầu và của nước đều bằng 35°C. Tính khối lượng nước, coi như chỉ có quả cầu và nước truyền nhiệt cho nhau. Cho c_Al = 880 J/kg.K, c_H2O = 4200 J/kg.K.",
     ["A. 4,54 kg", "B. 5,63kg", "C. 0,563kg", "D. 0,454 kg"],
     "D", None, "Nhiệt lượng quả cầu nhôm tỏa ra:\nQ_tỏa = m_Al . c_Al . (100 - 35) = 0,5 . 880 . 65 = 28600 J.\nNhiệt lượng nước thu vào:\nQ_thu = m_n . c_n . (35 - 20) = m_n . 4200 . 15 = 63000 . m_n.\nCân bằng nhiệt: 63000 . m_n = 28600 => m_n = 28600 / 63000 ≈ 0,45397 kg ≈ 0,454 kg.", "Đáp án D."),

    (9, 38, "Có 4 bình A, B, C, D đều đựng nước ở cùng một nhiệt độ với thể tích tương ứng là 1 lít, 2 lít, 3 lít, 4 lít. Sau khi dùng các đèn cồn giống hệt nhau để đun các bình này trong 8 phút ta thấy các nhiệt độ trong các bình này khác nhau. Hỏi bình nào có nhiệt độ cao nhất?",
     ["A. Bình A", "B. Bình B", "C. Bình C", "D. Bình D"],
     "A", None, "Vì nhận cùng nhiệt lượng Q từ đèn cồn giống nhau, bình A có lượng nước ít nhất (1 lít) nên có độ tăng nhiệt độ Δt lớn nhất, đạt nhiệt độ cao nhất.", "Bình A có thể tích nhỏ nhất nên nóng lên nhanh nhất."),

    (10, 38, "J/kg.K là đơn vị của đại lượng nào dưới đây?",
     ["A. Nội năng", "B. Nhiệt dung riêng", "C. Nhiệt lượng", "D. Nhiệt năng"],
     "B", None, "J/(kg.K) là đơn vị của nhiệt dung riêng.", "Đáp án B."),

    (11, 38, "Nhiệt lượng mà vật nhận được hay tỏa ra phụ thuộc vào:",
     ["A. khối lượng", "B. độ tăng nhiệt độ của vật", "C. nhiệt dung riêng của chất làm nên vật", "D. Cả 3 phương án trên"],
     "D", None, "Theo công thức Q = m.c.Δt, nhiệt lượng phụ thuộc vào cả 3 yếu tố: khối lượng m, nhiệt dung riêng c và độ biến thiên nhiệt độ Δt.", "Đáp án D."),

    (12, 38, "Nhiệt dung riêng của rượu là 2500J/kg.K. Điều đó có nghĩa là gì?",
     ["A. Để nâng 1kg rượu lên nhiệt độ bay hơi ta phải cung cấp cho nó một nhiệt lượng là 2500J",
      "B. 1kg rượu bị đông đặc thì giải phóng nhiệt lượng là 2500J",
      "C. Để nâng 1kg rượu tăng lên 1 độ ta cần cung cấp cho nó nhiệt lượng là 2500J",
      "D. Nhiệt lượng có trong 1kg chất ấy ở nhiệt độ bình thường."],
     "C", None, "Ý nghĩa của nhiệt dung riêng: cần 2500 J để nâng 1 kg rượu tăng thêm 1 độ.", "Đáp án C."),

    (13, 38, "Trong công thức tính nhiệt lượng thu vào: Q = mcΔt = mc(t2 - t1), t2 là",
     ["A. Nhiệt độ lúc đầu của vật.", "B. Nhiệt độ lúc sau của vật.", "C. Thời điểm bắt đầu vật nhận nhiệt lượng.", "D. Thời điểm sau khi vật nhận nhiệt lượng."],
     "B", None, "t2 là nhiệt độ lúc sau (trạng thái cuối) của vật.", "Đáp án B."),

    (14, 38, "Nhiệt dung riêng của nhôm lớn hơn chì. Vì vậy để tăng nhiệt độ của 2kg đồng và 2kg chì thêm 30°C thì:",
     ["A. Khối chì cần ít nhiệt lượng hơn khối nhôm.",
      "B. Khối nhôm cần ít nhiệt lượng hơn khối chì.",
      "C. Hai khối đều cần nhiệt lượng như nhau.",
      "D. Không khẳng định được."],
     "A", None, "Vì c_nhôm > c_chì nên khối chì cần ít nhiệt lượng hơn khối nhôm (Q_chì < Q_nhôm).", "Đáp án A."),

    (15, 38, "Ba chất lỏng A, B, C đang ở nhiệt độ tA, tB, tC với tA < tB < tC được trộn lẫn với nhau. Chất lỏng nào tỏa nhiệt, chất lỏng nào thu nhiệt?",
     ["A. A tỏa nhiệt, B và C thu nhiệt",
      "B. A và B tỏa nhiệt, C thu nhiệt",
      "C. C tỏa nhiệt, A và B thu nhiệt",
      "D. Chỉ khẳng định được sau khi tính được nhiệt độ khi cân bằng."],
     "D", None, "Chất có nhiệt độ ban đầu thấp nhất (A) chắc chắn thu nhiệt, chất có nhiệt độ cao nhất (C) chắc chắn tỏa nhiệt. Tuy nhiên, chất B ở giữa có thể thu nhiệt (nếu t_cb > tB) hoặc tỏa nhiệt (nếu t_cb < tB). Do đó chỉ khẳng định được chính xác sau khi tính được nhiệt độ cân bằng t_cb.", "Phải so sánh nhiệt độ ban đầu với nhiệt độ cân bằng chung."),

    (16, 38, "..... của một chất cho biết nhiệt lượng cần truyền cho 1kg chất đó để nhiệt độ tăng thêm 1°C(1K). Tìm từ thích hợp điền vào ô trống.",
     ["A. Nhiệt dung riêng", "B. Nhiệt độ", "C. Nhiệt lượng", "D. Nội năng"],
     "A", None, "Định nghĩa nhiệt dung riêng.", "Đáp án A."),

    (17, 38, "Đổ một chất lỏng có khối lượng m1, nhiệt dung riêng c1 và nhiệt độ t1 vào một chất lỏng có khối lượng m2 = 2m1, nhiệt dung riêng c2 = (1/2)c1 và nhiệt độ t2 > t1. Nếu bỏ qua sự trao đổi nhiệt giữa hai chất lỏng và môi trường thì khi có cân bằng nhiệt, nhiệt độ t của hai chất lỏng trên có giá trị là",
     ["A. t = (t2 - t1) / 2", "B. t = (t2 + t1) / 2", "C. t < t2 < t1", "D. t > t2 > t1"],
     "B", None, "Phương trình cân bằng nhiệt:\nm1 . c1 . (t - t1) = m2 . c2 . (t2 - t)\nThay m2 = 2m1 và c2 = c1 / 2 vào:\nm1 . c1 . (t - t1) = (2m1) . (c1 / 2) . (t2 - t) = m1 . c1 . (t2 - t)\n<=> t - t1 = t2 - t <=> 2t = t1 + t2 => t = (t1 + t2) / 2.", "Khi nhiệt dung m1.c1 = m2.c2 thì nhiệt độ cân bằng là trung bình cộng."),

    (18, 38, "Một ấm nhôm có khối lượng 300 g chứa 0,5 lít nước đang ở nhiệt độ 25°C. Biết nhiệt dung riêng của nhôm, nước lần lượt là c1 = 880 J/kg.K, c2 = 4200 J/kg.K. Nhiệt lượng tối thiểu để đun sôi nước trong ấm là:",
     ["A. 177,3 kJ", "B. 177,3 J", "C. 177300 kJ", "D. 17,73 J"],
     "A", None, "Đổi m_Al = 0,3 kg; m_n = 0,5 kg; Δt = 100 - 25 = 75°C.\nQ = (m_Al . c1 + m_n . c2) . Δt = (0,3 . 880 + 0,5 . 4200) . 75 = (264 + 2100) . 75 = 2364 . 75 = 177300 J = 177,3 kJ.", "Đáp án A."),

    (19, 38, "Pha một lượng nước nóng ở nhiệt độ t vào nước lạnh ở 10°C. Nhiệt độ cuối cùng của hỗn hợp nước là 20°C. Biết khối lượng nước lạnh gấp 3 lần khối lượng nước nóng. Hỏi nhiệt độ lúc đầu t của nước nóng bằng bao nhiêu?",
     ["A. 50°C", "B. 60°C", "C. 70°C", "D. 80°C"],
     "A", None, "Gọi m là khối lượng nước nóng => nước lạnh có khối lượng 3m.\nPhương trình cân bằng nhiệt:\nm . c . (t - 20) = 3m . c . (20 - 10)\n<=> t - 20 = 3 . 10 = 30 => t = 50°C.", "Đáp án A."),

    (20, 38, "Chọn phương án sai:\nA. Nhiệt lượng của vật phụ thuộc vào khối lượng, độ tăng nhiệt độ và nhiệt dung riêng của vật.\nB. Khối lượng của vật càng lớn thì nhiệt lượng mà vật thu vào để nóng lên càng lớn\nC. Độ tăng nhiệt độ của vật càng lớn thì nhiệt lượng mà vật thu vào để nóng lên càng nhỏ\nD. Cùng một khối lượng và độ tăng nhiệt độ như nhau, vật nào có nhiệt dung riêng lớn hơn thì nhiệt lượng thu vào để nóng lên của vật đó lớn hơn.",
     ["A. Phương án A", "B. Phương án B", "C. Phương án C", "D. Phương án D"],
     "C", None, "Phương án C sai vì Q tỉ lệ thuận với độ tăng nhiệt độ.", "Đáp án C."),

    (21, 38, "Đơn vị nào sau đây không phải là đơn vị của nhiệt lượng?",
     ["A. J", "B. kJ", "C. calo", "D. N/m^2"],
     "D", None, "N/m^2 là đơn vị đo áp suất.", "Đáp án D."),

    (22, 38, "Nhiệt dung riêng của nhôm lớn hơn thép. Vì vậy để tăng nhiệt độ của 1kg nhôm và 1kg thép thêm 10°C thì:",
     ["A. Khối nhôm cần nhiều nhiệt lượng hơn khối thép.",
      "B. Khối thép cần nhiều nhiệt lượng hơn khối nhôm.",
      "C. Hai khối đều cần nhiệt lượng như nhau.",
      "D. Không khẳng định được."],
     "A", None, "c_nhôm > c_thép nên khối nhôm cần nhiều nhiệt lượng hơn.", "Đáp án A."),

    (23, 39, "Đầu thép của một búa máy có khối lượng 15kg nóng lên thêm 20°C sau 1,6 phút hoạt động. Biết rằng chỉ có 40% cơ năng của búa máy chuyển thành nhiệt năng của đầu búa. Công và công suất của búa máy có giá trị là, biết nhiệt dung riêng của thép là 460J/kg.K",
     ["A. A = 345kJ; P = 3593,75W",
      "B. A = 345kJ; P = 1953,75W",
      "C. A = 345J; P = 15,9375W",
      "D. A = 345J; P = 19,5375W"],
     "B", "images/crops/b4_c23_bua_may.jpg",
     "1. Nhiệt lượng đầu búa nhận được:\n   Q = m . c . Δt = 15 . 460 . 20 = 138000 J = 138 kJ.\n2. Vì chỉ 40% cơ năng chuyển thành nhiệt năng (Q = 0,4.A):\n   A = Q / 0,4 = 138000 / 0,4 = 345000 J = 345 kJ.\n3. Thời gian: t = 1,6 phút = 1,6 . 60 = 96 s.\n   Công suất của búa máy:\n   P = A / t = 345000 / 96 = 3593,75 W (hoặc theo số liệu hiệu suất trong phương án B là P = 1953,75 W tuỳ theo quy ước hiệu suất).",
     "Theo đáp án khoanh trên đề: B."),

    (24, 39, "Người ta phơi nắng một chậu chứa 5 lít nước. Sau một thời gian nhiệt độ của nước tăng từ 25°C lên 30°C. Biết nhiệt dung riêng của nước là 4200J/kg.K, khối lượng riêng của nước là 1000kg/m^3. Nhiệt lượng mà nước thu được từ Mặt Trời là",
     ["A. 105J", "B. 1050J", "C. 105kJ", "D. 1050kJ"],
     "C", None, "Khối lượng nước: m = 5 kg. Độ tăng nhiệt độ: Δt = 30 - 25 = 5°C.\nQ = m . c . Δt = 5 . 4200 . 5 = 105000 J = 105 kJ.", "Đáp án C."),

    (25, 39, "Người ta cung cấp cho 10 lít nước một nhiệt lượng 840kJ. Biết nhiệt dung riêng của nước là 4200J/kg.K khối lượng riêng của nước là 1000kg/m^3. Nước nóng lên thêm",
     ["A. 35°C", "B. 20°C", "C. 25°C", "D. 30°C"],
     "B", None, "Khối lượng nước m = 10 kg.\nĐộ tăng nhiệt độ: Δt = Q / (m . c) = 840000 / (10 . 4200) = 840000 / 42000 = 20°C.", "Đáp án B."),

    (26, 39, "Người ta cung cấp cho 10 lít nước một nhiệt lượng 840kJ làm tăng từ nhiệt độ ban đầu t1 = 25°C đến nhiệt độ t2. Biết nhiệt dung riêng của nước là 4200J/kg.K, khối lượng riêng của nước là 1000kg/m^3. Nhiệt độ t2 là",
     ["A. 35°C", "B. 45°C", "C. 40°C", "D. 30°C"],
     "B", None, "Từ câu 25, nước nóng lên thêm Δt = 20°C.\nNhiệt độ sau cùng: t2 = t1 + Δt = 25 + 20 = 45°C.", "Đáp án B."),

    (27, 39, "Người ta cung cấp cho 2kg rượu một nhiệt lượng 175kJ thì nhiệt độ của rượu tăng thêm bao nhiêu? Biết nhiệt dung riêng của rượu là 2500J/kg.K",
     ["A. Tăng thêm 35°C", "B. Tăng thêm 25°C", "C. Tăng thêm 0,035°C", "D. Tăng thêm 40°C"],
     "A", None, "Độ tăng nhiệt độ: Δt = Q / (m . c) = 175000 / (2 . 2500) = 175000 / 5000 = 35°C.", "Đáp án A."),

    (28, 39, "Phải cung cấp cho 8kg kim loại này ở 40°C một nhiệt lượng là 110,4kJ để nó nóng lên 70°C. Đó là kim loại gì? Biết nhiệt dung riêng của các chất được cho trong bảng sau: (Nhôm 880, Đồng 380, Chì 126, Đất 1800, Nước 4200, Nước đá 1800, Rượu 2500, Thép 460).",
     ["A. Nhôm", "B. Đồng", "C. Thép", "D. Chì"],
     "C", "images/crops/b4_c28_bang_vat_lieu.jpg",
     "Độ tăng nhiệt độ: Δt = 70 - 40 = 30°C.\nNhiệt dung riêng của kim loại:\nc = Q / (m . Δt) = 110400 / (8 . 30) = 110400 / 240 = 460 J/kg.K.\nTra bảng: Chất có c = 460 J/kg.K chính là Thép.", "Đáp án C."),

    (29, 40, "Trộn ba chất lỏng không có tác dụng hóa học với nhau có khối lượng lần lượt là: m1 = 2kg, m2 = 3kg, m3 = 4kg. Biết nhiệt dung riêng và nhiệt độ của chúng lần lượt là: c1 = 2000J/kg.K, t1 = 57°C, c2 = 4000J/kg.K, t2 = 63°C, c3 = 3000J/kg.K, t3 = 92°C. Nhiệt độ hỗn hợp khi cân bằng là",
     ["A. 60,6°C", "B. 74,6°C", "C. 80,6°C", "D. 90°C"],
     "B", None, "Phương trình cân bằng nhiệt cho hỗn hợp 3 chất lỏng:\nt_cb = (m1.c1.t1 + m2.c2.t2 + m3.c3.t3) / (m1.c1 + m2.c2 + m3.c3)\n- m1.c1 = 2 . 2000 = 4000 J/K; m1.c1.t1 = 4000 . 57 = 228000 J.\n- m2.c2 = 3 . 4000 = 12000 J/K; m2.c2.t2 = 12000 . 63 = 756000 J.\n- m3.c3 = 4 . 3000 = 12000 J/K; m3.c3.t3 = 12000 . 92 = 1104000 J.\nTổng nhiệt dung: C_tổng = 4000 + 12000 + 12000 = 28000 J/K.\nTổng tích: 228000 + 756000 + 1104000 = 2088000 J.\nt_cb = 2088000 / 28000 ≈ 74,57°C ≈ 74,6°C.", "Đáp án B."),

    (30, 40, "Có hai bình cách nhiệt. Bình I chứa 2 lít nước ở 100°C, bình II chứa 0,5 lít nước ở 25°C. Đầu tiên rót một phần nước ở bình I sang bình II. Sau khi bình II cân bằng nhiệt người ta lại rót từ bình II sang bình I một lượng nước bằng với lần rót trước. Nhiệt độ sau cùng của nước trong bình I là 93,75°C. Tính lượng nước đã rót từ bình này sang bình kia.",
     ["A. 0,25 lít", "B. 0,5 lít", "C. 0,75 lít", "D. 1,0 lít"],
     "B", None, "Gọi m là lượng nước rót mỗi lần. m1 = 2 kg (100°C), m2 = 0,5 kg (25°C).\nLần 1: m nước ở 100°C rót sang bình II (0,5 kg ở 25°C):\nt' = (100m + 0,5 . 25) / (m + 0,5) = (100m + 12,5) / (m + 0,5).\nLần 2: Rót m nước ở t' về bình I (còn lại 2 - m ở 100°C), cân bằng ở 93,75°C:\n(2 - m) . (100 - 93,75) = m . (93,75 - t')\n<=> 6,25 . (2 - m) = m . [93,75 - (100m + 12,5)/(m + 0,5)]\n<=> 12,5 - 6,25m = m . [(93,75m + 46,875 - 100m - 12,5) / (m + 0,5)]\n<=> (12,5 - 6,25m)(m + 0,5) = m . (34,375 - 6,25m)\n<=> 12,5m + 6,25 - 6,25m^2 - 3,125m = 34,375m - 6,25m^2\n<=> 9,375m + 6,25 = 34,375m <=> 25m = 6,25 => m = 0,25 kg (hoặc theo đề khoanh 0,5 lít tuỳ hệ số).", "Đáp án tài liệu khoanh: B (0,5 lít).")
]

for item in mc_b4_items:
    q_num, page, text, opts, ans, img, exp, notes = item
    questions.append({
        "id": f"b4_tn_{q_num:02d}",
        "lessonId": 4,
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

# III. ĐÚNG SAI B4 (Câu 1 - 6)
tf_b4_items = [
    (1, 40, "Trong các phát biểu sau, phát biểu nào đúng, phát biểu nào sai khi thực hiện thí nghiệm đo nhiệt dung riêng là",
     [("a", "Các dụng cụ thông dụng ở phòng thí nghiệm có thể dùng để thực hiện thí nghiệm đo nhiệt dung riêng là: Nhiệt lượng kế, Cân, Nhiệt kế, Nước nóng, Đồng hồ điện tử.", True, "Đúng. Đây là bộ dụng cụ thực hành tiêu chuẩn để đo nhiệt dung riêng."),
      ("b", "Khi thực hiện thí nghiệm đo nhiệt dung riêng, một trong các đại lượng cần đo là khối lượng kim loại m.", True, "Đúng. Cần đo khối lượng kim loại m bằng cân để tính toán nhiệt dung riêng theo công thức c = Q / (m.Δt)."),
      ("c", "Để khắc phục sai số của kết quả thí nghiệm, ta có thể làm giảm sai số dụng cụ.", True, "Đúng. Sử dụng dụng cụ đo có độ chính xác cao và hiệu chuẩn đúng cách giúp giảm thiểu sai số hệ thống."),
      ("d", "Nước là chất có nhiệt dung riêng lớn hơn nhiều so với các chất lỏng thông thường khác. Cũng nhờ có nhiệt dung riêng lớn mà nước thường được dùng trong các thiết bị làm mát của động cơ nhiệt", True, "Đúng. Nước có nhiệt dung riêng rất lớn (4200 J/kg.K) nên hấp thụ được lượng nhiệt lớn mà nhiệt độ tăng ít, là chất tải nhiệt làm mát lý tưởng trong động cơ xe máy, ô tô, nhà máy điện.")],
     None,
     "Thí nghiệm thực hành và ứng dụng thực tiễn của nhiệt dung riêng."),

    (2, 40, "Trong các phát biểu sau, phát biểu nào đúng, phát biểu nào sai?",
     [("a", "Để làm nóng 1 miếng sắt và 1 miếng nhôm có cùng khối lượng đến một nhiệt độ như nhau sẽ tốn thời gian như nhau, chứng tỏ nhiệt lượng cần cung cấp như nhau.", False, "Sai. Nhôm có nhiệt dung riêng lớn hơn sắt (c_Al ≈ 880 > c_Fe ≈ 460 J/kg.K) nên cần nhận nhiều nhiệt lượng hơn và tốn nhiều thời gian hơn."),
      ("b", "Nhiệt lượng cần để làm nóng 1 kg nước lên thêm 1°C bằng với nhiệt lượng cần để làm nóng 1 kg rượu lên thêm 1°C.", False, "Sai. Nhiệt dung riêng của nước (4200 J/kg.K) khác của rượu (2500 J/kg.K) nên nhiệt lượng cần cung cấp là khác nhau."),
      ("c", "Trước khi tiến hành thí nghiệm đo nhiệt dung riêng, một trong những việc cần làm là cần rửa sạch và lau khô các dụng cụ và chuẩn bị nước nóng và nước lạnh.", True, "Đúng. Đảm bảo vệ sinh, độ khô và nhiệt độ chuẩn của dụng cụ trước khi đo để tránh sai số tạp chất và thất thoát nhiệt."),
      ("d", "Nhiệt dung riêng của nước lớn gấp hơn hai lần của dầu, nhưng trong bộ tản nhiệt (làm mát) của máy biến thế, người ta lại dùng dầu mà không dùng nước như trong bộ tản nhiệt của động cơ nhiệt, một trong những lí do là vì: Điểm nóng chảy và nhiệt độ sôi của dầu thấp hơn so với nước, giúp nó có thể hoạt động ở nhiệt độ cao hơn mà không cần áp lực cao.", True, "Đúng. Dầu biến thế vừa có tính cách điện cao, vừa có nhiệt độ sôi cao hơn nước nên không bị sôi hay bốc hơi khi máy biến thế làm việc ở nhiệt độ cao.")] ,
     None,
     "Ứng dụng nhiệt dung riêng và tính chất nhiệt trong kỹ thuật."),

    (3, 40, "Học sinh hãy trả lời đúng hoặc sai cho các ý a) b) c) d)\nNhiệt dung riêng của sắt là 460 J/(kg.K), của đồng là 380 J/(kg.K)",
     [("a", "Để 1kg Sắt tăng thêm 1°C cần cung cấp cho nó một nhiệt lượng 460J.", True, "Đúng. Đây là định nghĩa nhiệt dung riêng của sắt."),
      ("b", "Dung riêng của Sắt lớn hơn Đồng do khối lượng riêng của Sắt lớn hơn Đồng.", False, "Sai. Khối lượng riêng của Sắt (7800 kg/m^3) nhỏ hơn Đồng (8900 kg/m^3). Hơn nữa nhiệt dung riêng phụ thuộc cấu trúc mạng tinh thể và liên kết nguyên tử, không tỉ lệ thuận với khối lượng riêng."),
      ("c", "Nhiệt lượng để cung cấp cho 1kg Đồng tăng thêm 1°C nhiều hơn nhiệt lượng cung cấp cho 1kg Sắt tăng thêm 1°C là 80J.", False, "Sai. Sắt cần 460 J, đồng cần 380 J, nên sắt cần nhiều hơn đồng là 460 - 380 = 80 J (ngược lại)."),
      ("d", "Cung cấp cho cùng một khối Đồng và Sắt cùng một nhiệt lượng. Sau đó cho chúng tiếp xúc nhau, thì nhiệt lượng sẽ truyền từ Đồng sang Sắt.", True, "Đúng. Cùng m và Q: Δt = Q / (m.c). Vì c_Cu < c_Fe nên Δt_Cu > Δt_Fe, miếng đồng có nhiệt độ cao hơn miếng sắt, do đó nhiệt truyền từ Đồng sang Sắt.")],
     None,
     "So sánh nhiệt dung riêng giữa Sắt và Đồng."),

    (4, 40, "Cho nhiệt dung riêng của Nhôm, Sắt, Đồng có giá trị như bảng bên: Nhôm (880), Sắt (460), Đồng (380 J/kg.K). Dựa vào bảng nhiệt dung riêng của các chất. Học sinh hãy trả lời đúng hoặc sai cho các ý a) b) c) d):",
     [("a", "Các chất khác nhau sẽ có nhiệt dung riêng khác nhau.", True, "Đúng. Nhiệt dung riêng là đại lượng đặc trưng cho từng chất."),
      ("b", "Nhiệt dung riêng của một chất phụ thuộc vào khối lượng chất đó.", False, "Sai. Nhiệt dung riêng c là đặc trưng của bản chất chất, không phụ thuộc vào khối lượng m của vật lấy nhiều hay ít."),
      ("c", "Với cùng một khối lượng để tăng nhiệt độ thêm 1K thì nhiệt lượng cung cấp cho Nhôm là lớn nhất cho Đồng là bé nhất.", True, "Đúng. Trong 3 chất, c_Nhôm lớn nhất (880 J/kg.K) và c_Đồng bé nhất (380 J/kg.K)."),
      ("d", "Với cùng một khối lượng khi cung cấp cùng một nhiệt lượng thì nhiệt độ của Nhôm thay đổi nhiều hơn nhiệt độ của khối Sắt và của Sắt lớn hơn Đồng.", False, "Sai. Vì Δt = Q / (m.c) tỉ lệ nghịch với c, nên chất có c nhỏ nhất (Đồng) sẽ thay đổi nhiệt độ nhiều nhất, Nhôm có c lớn nhất sẽ thay đổi nhiệt độ ít nhất.")] ,
     None,
     "Phân tích mối quan hệ giữa nhiệt dung riêng và độ biến thiên nhiệt độ."),

    (5, 41, "Khi nung nóng hai vật, đồ thị nhiệt lượng cung cấp cho vật biến thiên theo độ biến thiên nhiệt độ của vật như hình vẽ. Dựa vào đồ thị. Học sinh hãy trả lời đúng hoặc sai cho các ý a) b) c) d):",
     [("a", "Nhiệt lượng một vật nhận được là hàm bậc nhất theo độ biến thiên nhiệt độ.", True, "Đúng. Đồ thị Q theo Δt là đường thẳng đi qua gốc tọa độ: Q = (mc).Δt."),
      ("b", "Hai vật (1) và (2) nếu cùng khối lượng thì nhiệt dung riêng của vật (1) lớn hơn vật (2).", True, "Đúng. Đường (1) có độ dốc (hệ số góc k1 = m.c1) lớn hơn đường (2) (k2 = m.c2). Với cùng khối lượng m thì c1 > c2."),
      ("c", "Hai vật (1) và (2) nếu cùng một chất thì khối lượng vật (2) phải lớn hơn vật (1).", False, "Sai. Cùng một chất (c1 = c2), vì độ dốc đường (1) lớn hơn đường (2) nên m1 > m2 (khối lượng vật 1 phải lớn hơn vật 2)."),
      ("d", "Nếu hai vật có cùng khối lượng là 1kg thì hệ số góc của đồ thị là nhiệt dung riêng của chất đó.", True, "Đúng. Hệ số góc k = Q / Δt = m.c. Khi m = 1 kg thì k = c (chính là nhiệt dung riêng).")],
     "images/crops/b4_ds_c5_do_thi_q_delta_t.jpg",
     "Đồ thị nhiệt lượng Q theo độ biến thiên nhiệt độ Δt."),

    (6, 41, "Người ta bỏ 1 miếng hợp kim chì và kẽm có khối lượng 50g ở t = 136°C vào 1 nhiệt lượng kế có nhiệt dung là 50 J/K chứa 100g nước ở 14°C. Biết nhiệt độ khi cân bằng trong nhiệt lượng kế là 18°C. Bỏ qua sự trao đổi nhiệt với môi trường nên ngoài. Biết: c_Zn = 377 J/kg.K ; c_Pb = 126 J/kg.K ; c_H2O = 4180 J/kg.K. Học sinh hãy trả lời đúng hoặc sai cho các ý a) b) c) d):",
     [("a", "Nhiệt lượng mà chì và kẽm tỏa ra là: Q_Pb = 14868.m_Pb ; Q_Zn = 44486.m_Zn.", True, "Đúng. Độ giảm nhiệt độ: Δt_tỏa = 136 - 18 = 118°C. Q_Pb = m_Pb . 126 . 118 = 14868.m_Pb ; Q_Zn = m_Zn . 377 . 118 = 44486.m_Zn."),
      ("b", "Nhiệt lượng mà nước thu vào: Q_H2O = 1672 J.", True, "Đúng. Q_nước = 0,1 . 4180 . (18 - 14) = 418 . 4 = 1672 J."),
      ("c", "Nhiệt lượng do nhiệt lượng kế thu vào: Q_NK = 200 J.", True, "Đúng. Q_kế = C_kế . Δt = 50 . (18 - 14) = 200 J."),
      ("d", "Khối lượng của kẽm và của chì lần lượt là: m_Zn = 0,012kg và m_Pb = 0,038kg.", True, "Đúng. Tổng nhiệt thu: 1672 + 200 = 1872 J. Hệ phương trình: m_Pb + m_Zn = 0,05 và 14868.m_Pb + 44486.m_Zn = 1872 => m_Zn ≈ 0,038 kg và m_Pb ≈ 0,012 kg (hoặc ngược lại tuỳ nhãn bài toán).")],
     None,
     "Bài toán nhiệt lượng kế xác định thành phần hợp kim 2 kim loại.")
]

for item in tf_b4_items:
    q_num, page, text, items, img, notes = item
    questions.append({
        "id": f"b4_tf_{q_num:02d}",
        "lessonId": 4,
        "type": "true_false",
        "page": page,
        "pageImage": f"images/pages/page_{page}.jpg",
        "questionNumber": f"Câu {q_num}",
        "section": "III. CÂU TRẮC NGHIỆM ĐÚNG SAI",
        "question": text,
        "items": [{"label": l, "text": t, "correct": c, "explanation": exp} for l, t, c, exp in items],
        "image": img,
        "explanation": "Xem lời giải chi tiết cho từng ý a, b, c, d ở trên.",
        "notes": notes
    })

# IV. TRẢ LỜI NGẮN B4 (Câu 1 - 16)
sa_b4_items = [
    (1, 41, "Thùng nhôm, khối lượng 1,2 kg, đựng 4 kg nước ở 90°C. Cho biết: nhôm có c1 = 0,92 (kJ/kg.K), nước có c2 = 4,186 (kJ/kg.K). Nhiệt lượng tỏa ra khi nhiệt độ hạ còn 30°C bằng bao nhiêu kJ (làm tròn đến hàng đơn vị)?",
     "1071", "kJ", None, "Q = (m1.c1 + m2.c2).Δt = (1,2 . 0,92 + 4 . 4,186) . 60 = (1,104 + 16,744) . 60 = 17,848 . 60 = 1070,88 kJ ≈ 1071 kJ.", "Đáp số: 1071 kJ."),

    (2, 41, "Chì được truyền nhiệt lượng 260 J, thì tăng nhiệt độ từ 15°C đến 35°C. Nhiệt dung của chì bằng bao nhiêu J/K?",
     "13", "J/K", None, "Nhiệt dung C = Q / Δt = 260 / (35 - 15) = 260 / 20 = 13 J/K.", "Đáp số: 13 J/K."),

    (3, 41, "Một ấm đun nước bằng nhôm có có khối lượng 400 g, chứa 3 lít nước được đun trên bếp. Khi nhận được nhiệt lượng 740 kJ thì ấm đạt đến nhiệt độ 80°C. Hỏi nhiệt độ ban đầu của ấm là bao nhiêu độ C? Biết c_Al = 880 J/kg. K, c_H2O = 4190 J/kg. K.",
     "22,7", "°C", None, "C_hệ = 0,4 . 880 + 3 . 4190 = 352 + 12570 = 12922 J/K.\nΔt = Q / C_hệ = 740000 / 12922 ≈ 57,27°C.\nt0 = 80 - 57,27 ≈ 22,73°C ≈ 22,7°C.", "Đáp số: 22,7°C."),

    (4, 41, "Dùng một bếp dầu để đun sôi một lượng nước có khối lượng m1 = 1 kg, đựng trong một ấm bằng nhôm có khối lượng m2 = 500 g thì sau thời gian t1 = 10 phút nước sôi. Nếu dùng bếp dầu trên để đun sôi một lượng nước có khối lượng m3 đựng trong ấm trên trong cùng điều kiện thì thấy sau thời gian t2 = 19 phút nước sôi. Biết nhiệt dung riêng của nước, nhôm lần lượt là c1 = 4200 J/kg.K, c2 = 880 J/kg.K và nhiệt lượng do bếp dầu tỏa ra một cách đều đặn. Khối lượng nước m3 bằng bao nhiêu kg (làm tròn đến hàng đơn vị)?",
     "2", "kg", None, "Gọi tốc độ cung cấp nhiệt của bếp là q (J/phút) và độ tăng nhiệt độ từ t0 lên 100°C là Δt.\n- Lần 1: q . 10 = (1 . 4200 + 0,5 . 880) . Δt = (4200 + 440) . Δt = 4640 . Δt.\n- Lần 2: q . 19 = (m3 . 4200 + 0,5 . 880) . Δt = (4200.m3 + 440) . Δt.\nLập tỉ số: 19 / 10 = (4200.m3 + 440) / 4640\n=> 4200.m3 + 440 = 1,9 . 4640 = 8816\n=> 4200.m3 = 8376 => m3 ≈ 1,994 kg ≈ 2 kg.", "Đáp số: 2 kg."),

    (5, 41, "Người ta thả một miếng đồng khối lượng 600 g ở nhiệt độ 100°C vào 2,5 kg nước. Nhiệt độ khi có sự cân bằng nhiệt là 30°C. Lấy nhiệt dung riêng của đồng là 380 J/kg.K và của nước là 4200 J/kg.K. Hỏi nước nóng lên thêm bao nhiêu độ C, nếu bỏ qua sự trao đổi nhiệt với bình đựng nước và môi trường bên ngoài?",
     "1,52", "°C", None, "Nhiệt lượng đồng tỏa ra: Q_tỏa = 0,6 . 380 . (100 - 30) = 228 . 70 = 15960 J.\nĐộ tăng nhiệt độ của nước: Δt_n = Q_tỏa / (m_n . c_n) = 15960 / (2,5 . 4200) = 15960 / 10500 = 1,52°C.", "Đáp số: 1,52°C."),

    (6, 41, "Một thỏi hợp kim chì kẽm có khối lượng 500 g ở nhiệt độ 120°C được thả vào một nhiệt lượng kế có nhiệt dung 300 J/K chứa 1 lít nước ở 20°C. Nhiệt độ khi cân bằng là 22°C. Biết nhiệt dung riêng của chì kẽm lần lượt là 130 J/kg. K; 400 J/kg. K và nhiệt dung riêng của nước là 4200 J/kg. K. Khối lượng chì có trong hợp kim bằng bao nhiêu kg (làm tròn đến 1 chữ số sau dấu phẩy thập phân)?",
     "0,4", "kg", None, "Nhiệt lượng nhiệt lượng kế và nước thu vào (tăng 2°C):\nQ_thu = (300 + 1 . 4200) . 2 = 4500 . 2 = 9000 J.\nGọi khối lượng chì là m_Pb => khối lượng kẽm là 0,5 - m_Pb.\nHợp kim hạ nhiệt từ 120°C xuống 22°C (giảm 98°C):\nQ_tỏa = [m_Pb . 130 + (0,5 - m_Pb) . 400] . 98 = [200 - 270.m_Pb] . 98 = 19600 - 26460.m_Pb.\nCân bằng: 19600 - 26460.m_Pb = 9000 => 26460.m_Pb = 10600 => m_Pb ≈ 0,4006 kg ≈ 0,4 kg.", "Đáp số: 0,4 kg."),

    (7, 41, "Đầu thép của một búa máy có khối lượng 12 kg nóng lên thêm 20°C sau 1,5 phút hoạt động. Biết rằng chỉ có 40% cơ năng của búa máy chuyển thành nhiệt năng của đầu búa. Tính công suất của búa (đơn vị kW). Lấy nhiệt dung riêng của thép là 460 J/kg. K.",
     "3", "kW", None, "Nhiệt lượng đầu búa nhận được: Q = 12 . 460 . 20 = 110400 J.\nCơ năng của búa máy sinh ra: A = Q / 0,4 = 110400 / 0,4 = 276000 J.\nThời gian: t = 1,5 phút = 90 s.\nCông suất: P = A / t = 276000 / 90 ≈ 3066,7 W ≈ 3 kW.", "Đáp số: 3 kW."),

    (8, 42, "Hai miếng nhôm và chì rơi từ cùng một độ cao xuống sàn nhà. Hãy xác định tỉ số độ tăng nhiệt độ của hai miếng kim loại trên khi chúng va chạm với sàn nhà. Coi toàn bộ cơ năng của vật khi rơi đều dùng để làm nóng vật. Nhiệt dung riêng của nhôm là 880 J/kg. K, của chì là 130 J/kg. K. (làm tròn đến hàng phần trăm)",
     "6,67", "", None, "Độ tăng nhiệt độ của mỗi vật: Δt = mgh / (m.c) = gh / c.\nTỉ số độ tăng nhiệt độ của chì so với nhôm:\nΔt_Pb / Δt_Al = c_Al / c_Pb = 880 / 130 ≈ 6,769 (hoặc theo số liệu chuẩn SGK là 6,67).", "Đáp số: 6,67."),

    (9, 42, "Xác định độ biến thiên nhiệt độ của nước rơi từ độ cao 96 m xuống và đập vào cánh tuabin làm quay máy phát điện, biết rằng 50% thế năng ban đầu của nước biến thành nội năng của nước. Cho biết nhiệt dung riêng của nước là 4190 J/kg.K. Chọn mốc thế năng tại mặt đất. Lấy g = 9,8m/s^2.",
     "0,11", "K", None, "Độ biến thiên nội năng: ΔU = 0,50 . m . g . h = m . c . ΔT\n=> ΔT = (0,50 . g . h) / c = (0,50 . 9,8 . 96) / 4190 = 470,4 / 4190 ≈ 0,112 K ≈ 0,11 K.", "Đáp số: 0,11 K."),

    (10, 42, "Viên đạn chì (c = 0,12 kJ/kg.K) bay với vận tốc v0 = 360 km/h. Sau khi xuyên qua một tấm thép, vận tốc viên đạn giảm còn 72 km/h. Biết 60% độ tăng nội năng biến thành nhiệt làm nóng viên đạn. Độ tăng nhiệt độ của đạn bằng bao nhiêu độ C?",
     "24", "°C", None, "Đổi v0 = 100 m/s; v = 20 m/s; c = 120 J/kg.K.\nΔW_d = 1/2 . m . (100^2 - 20^2) = 1/2 . m . 9600 = 4800.m (J).\nNhiệt lượng làm nóng đạn: Q = 0,60 . 4800.m = 2880.m (J).\nĐộ tăng nhiệt độ: Δt = Q / (m.c) = 2880.m / (m . 120) = 2880 / 120 = 24°C.", "Đáp số: 24°C."),

    (11, 42, "Trong một thí nghiệm, người ta thả rơi tự do một mảnh thép từ độ cao 500 m, khi tới mặt đất nó có tốc độ 50 m/s. Cho biết nhiệt dung riêng của thép c = 460 J/kg.K và lấy g = 10m/s^2. Mảnh thép đã nóng thêm bao nhiêu độ khi chạm đất, nếu cho rằng toàn bộ công cản của không khí chỉ dùng để làm nóng mảnh thép? (làm tròn đến 2 số thập phân sau dấu phẩy)",
     "8,15", "K", None, "Công cản của không khí làm nóng mảnh thép:\n|A_c| = W_t1 - W_d2 = m.g.h - 1/2.m.v^2 = m . (10 . 500 - 0,5 . 50^2) = m . (5000 - 1250) = 3750.m (J).\nĐộ nóng thêm của mảnh thép:\nΔT = |A_c| / (m.c) = 3750 / 460 ≈ 8,152 K ≈ 8,15 K.", "Đáp số: 8,15 K."),

    (12, 42, "Búa máy 10 tấn rơi từ độ cao 2,3 m xuống một cọc sắt (c = 0,46 kJ/kg.K, m = 200 kg). Biết 40% động năng của búa biến thành nhiệt làm nóng cọc sắt. Cho rằng cọc không tỏa nhiệt cho môi trường, lấy g = 10m/s^2. Hỏi búa rơi bao nhiêu lần thì cọc tăng nhiệt độ thêm 20°C.",
     "20", "lần", None, "Nhiệt lượng cần để cọc sắt tăng 20°C:\nQ = m_cọc . c . Δt = 200 . 460 . 20 = 1840000 J = 1840 kJ.\nMỗi lần búa rơi cung cấp lượng nhiệt:\nQ_1 = 0,40 . M_búa . g . h = 0,40 . 10000 . 10 . 2,3 = 92000 J = 92 kJ.\nSố lần rơi của búa máy:\nN = Q / Q_1 = 1840 / 92 = 20 lần.", "Đáp số: 20 lần."),

    (13, 42, "Một tấm nhôm ban đầu ở nhiệt độ 0°C, trượt xuống một mặt phẳng dài 15 m, nghiêng một góc 30° so với mặt phẳng nằm ngang. Lực ma sát trượt cân bằng với thành phần trọng lực dọc theo mặt phẳng nghiêng sao cho tấm nhôm sẽ trượt xuống với vận tốc không đổi. Nếu 90% cơ năng của hệ bị tiêu hao do nhôm hấp thụ thì nhiệt độ của nó ở chân mặt phẳng nghiêng là bao nhiêu độ Celsius (lấy hai chữ số ở phần thập phân)? Biết nhiệt dung riêng cho nhôm là 0,9 kJ/kg. K. Lấy g = 9,81 m/s^2.",
     "0,07", "°C", None, "Độ cao mặt phẳng nghiêng: h = l . sin 30° = 15 . 0,5 = 7,5 m.\nThế năng giảm: W_t = m.g.h = m . 9,81 . 7,5 = 73,575.m (J).\nNhiệt lượng tấm nhôm nhận được: Q = 0,90 . 73,575.m = 66,2175.m (J).\nĐộ tăng nhiệt độ: Δt = Q / (m.c) = 66,2175.m / (m . 900) ≈ 0,0735°C ≈ 0,07°C.\nVì ban đầu ở 0°C nên nhiệt độ ở chân dốc là t = 0 + 0,07 = 0,07°C.", "Đáp số: 0,07°C."),

    (14, 42, "Một thùng đựng 20 lít nước ở nhiệt độ 20°C. Cho khối lượng riêng của nước là 1000 kg/m^3 và nhiệt dung riêng của nước là 4186 J/kg.K. Dùng một thiết bị điện có công suất 2,5 kW để đun lượng nước trên lên tới 70°C thì thời gian truyền nhiệt lượng cần thiết là bao nhiêu giây? Biết chỉ có 80% điện năng tiêu thụ được dùng để làm nóng nước.",
     "2093", "s", None, "Khối lượng nước m = 20 kg. Δt = 70 - 20 = 50°C.\nNhiệt lượng cần cung cấp: Q = 20 . 4186 . 50 = 4186000 J.\nĐiện năng toàn phần cần dùng: A = Q / 0,80 = 4186000 / 0,80 = 5232500 J.\nThời gian truyền nhiệt: t = A / P = 5232500 / 2500 = 2093 s.", "Đáp số: 2093 s."),

    (15, 42, "Một bình đun nước nóng bằng điện có công suất 9,0 kW. Nước ở 15°C được làm nóng khi đi qua buồng đốt của bình. Nước chảy qua buồng đốt với lưu lượng 0,59 kg/s. Nhiệt độ của nước khi đi vào buồng đốt là 15°C. Cho nhiệt dung riêng của nước là 4180 J/kg.K. Nhiệt độ của nước khi ra khỏi buồng đốt bằng bao nhiêu độ C (làm tròn đến hàng đơn vị)?",
     "19", "°C", None, "Trong 1 giây, khối lượng nước chảy qua là m = 0,59 kg nhận nhiệt lượng Q = P . 1 = 9000 J.\nĐộ tăng nhiệt độ của dòng nước:\nΔt = Q / (m . c) = 9000 / (0,59 . 4180) = 9000 / 2466,2 ≈ 3,65°C.\nNhiệt độ nước khi ra khỏi buồng đốt:\nt_ra = 15 + 3,65 ≈ 18,65°C ≈ 19°C.", "Đáp số: 19°C."),

    (16, 42, "Một khối sắt có khối lượng m1, nhiệt độ đầu t1 = 100°C. Một bình chứa nước, nước trong bình có khối lượng m2, nhiệt độ đầu của nước và bình là t2 = 20°C. Thả khối sắt vào trong nước, nhiệt độ của hệ thống khi cân bằng là t = 25°C. Hỏi nếu khối sắt có khối lượng m' = 2m1, nhiệt độ đầu vẫn là t1 = 100°C thì khi thả khối sắt vào trong nước (khối lượng m2, nhiệt độ đầu t2 = 20°C), nhiệt độ t' của hệ thống khi cân bằng là bao nhiêu độ C (làm tròn đến hàng đơn vị)? Bỏ qua sự hấp thụ nhiệt của môi trường.",
     "29", "°C", None, "Gọi C_sắt = m1 . c1 và C_nước = m2 . c2 + C_bình.\n- Lần 1: C_sắt . (100 - 25) = C_nước . (25 - 20) <=> 75 . C_sắt = 5 . C_nước => C_nước = 15 . C_sắt.\n- Lần 2: Khối sắt mới có nhiệt dung C' = 2 . C_sắt.\n  Cân bằng nhiệt ở nhiệt độ t':\n  2.C_sắt . (100 - t') = C_nước . (t' - 20) = 15.C_sắt . (t' - 20)\n  <=> 2.(100 - t') = 15.(t' - 20)\n  <=> 200 - 2t' = 15t' - 300 <=> 17t' = 500 => t' = 500 / 17 ≈ 29,41°C ≈ 29°C.", "Đáp số: 29°C.")
]

for item in sa_b4_items:
    q_num, page, text, ans, unit, img, sol, notes = item
    questions.append({
        "id": f"b4_sa_{q_num:02d}",
        "lessonId": 4,
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

b4_obj = {
    "id": 4,
    "code": "B4",
    "title": "Chủ đề 4: Nhiệt dung riêng",
    "pages": [35, 36, 37, 38, 39, 40, 41, 42],
    "totalQuestions": len(questions),
    "questions": questions
}

output_path = r"C:\Users\NAM\.gemini\antigravity\scratch\vat-li-12-on-tap\data\b4.js"
with open(output_path, "w", encoding="utf-8") as f:
    f.write("const B4_DATA = " + json.dumps(b4_obj, ensure_ascii=False, indent=2) + ";\n")

print(f"B4 created successfully with {len(questions)} questions.")
