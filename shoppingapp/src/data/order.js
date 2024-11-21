const orderList = [
      {
        id: '001',
        date: '2024-01-20',
        phone: '0123456789',
        address: 'Hà Nội',
        customer: 'Nguyễn Văn Bình',
        total: '1,000,000đ',
        status: 'Chờ xác nhận',
        staffId: 'NV001',
        product: 'Bàn làm việc gỗ sồi',
        productId: '001',
      },
      {
        id: '002',
        date: '2024-01-21',
        phone: '0123456788',
        address: 'Đà Nẵng',
        customer: 'Lê Thị Hoa',
        total: '2,500,000đ',
        status: 'Đã giao hàng',
        staffId: 'NV002',
        product: 'Ghế sofa bọc nỉ',
        productId: '002',
      },
      {
        id: '003',
        date: '2024-01-22',
        phone: '0123456787',
        address: 'Hồ Chí Minh',
        customer: 'Phạm Quốc Anh',
        total: '3,200,000đ',
        status: 'Đang giao hàng',
        staffId: 'NV003',
        product: 'Kệ sách gỗ tự nhiên',
        productId: '003',
      },
      {
        id: '004',
        date: '2024-01-23',
        phone: '0123456786',
        address: 'Nha Trang',
        customer: 'Trần Thị Bích Ngọc',
        total: '1,750,000đ',
        status: 'Đã giao hàng',
        staffId: 'NV004',
        product: 'Tủ quần áo 4 cánh',
        productId: '004',
      },
      {
        id: '005',
        date: '2024-01-24',
        phone: '0123456785',
        address: 'Cần Thơ',
        customer: 'Nguyễn Hoàng Duy',
        total: '2,100,000đ',
        status: 'Chờ xác nhận',
        staffId: 'NV005',
        product: 'Giường ngủ 1m6',
        productId: '005',
      },
      {
        id: '006',
        date: '2024-01-25',
        phone: '0123456784',
        address: 'Hải Phòng',
        customer: 'Lý Minh Châu',
        total: '1,850,000đ',
        status: 'Đã xác nhận',
        staffId: 'NV006',
        product: 'Bộ bàn ăn 6 ghế',
        productId: '006',
      },
      {
        id: '007',
        date: '2024-01-26',
        phone: '0123456783',
        address: 'Huế',
        customer: 'Đặng Thanh Tùng',
        total: '4,000,000đ',
        status: 'Đang giao hàng',
        staffId: 'NV007',
        product: 'Đèn chùm pha lê',
        productId: '007',
      },
      {
        id: '008',
        date: '2024-01-27',
        phone: '0123456782',
        address: 'Đà Lạt',
        customer: 'Trần Khánh Linh',
        total: '900,000đ',
        status: 'Chờ xác nhận',
        staffId: 'NV008',
        product: 'Ghế gỗ đệm bọc vải',
        productId: '008',
      },
      {
        id: '009',
        date: '2024-01-28',
        phone: '0123456781',
        address: 'Hà Nội',
        customer: 'Hoàng Văn Thịnh',
        total: '1,300,000đ',
        status: 'Đã giao hàng',
        staffId: 'NV009',
        product: 'Tủ giày thông minh',
        productId: '009',
      },
      {
        id: '010',
        date: '2024-01-29',
        phone: '0123456780',
        address: 'Hải Dương',
        customer: 'Nguyễn Văn Khánh',
        total: '3,500,000đ',
        status: 'Đã xác nhận',
        staffId: 'NV010',
        product: 'Bàn học liền giá sách',
        productId: '010',
      },
      {
            id: '011',
            date: '2024-01-30',
            phone: '0123456790',
            address: 'Quảng Ninh',
            customer: 'Nguyễn Thị Hương',
            total: '2,800,000đ',
            status: 'Đang giao hàng',
            staffId: 'NV011',
            product: 'Bàn trang điểm gỗ óc chó',
            productId: '010',
          },
          {
            id: '012',
            date: '2024-01-31',
            phone: '0123456791',
            address: 'Hải Phòng',
            customer: 'Trần Minh Nhật',
            total: '1,200,000đ',
            status: 'Đã giao hàng',
            staffId: 'NV012',
            product: 'Ghế bar chân cao',
            productId: '007',
          },
          {
            id: '013',
            date: '2024-02-01',
            phone: '0123456792',
            address: 'Hà Nội',
            customer: 'Lê Hồng Phát',
            total: '4,500,000đ',
            status: 'Đã xác nhận',
            staffId: 'NV013',
            product: 'Tủ bếp gỗ công nghiệp',
            productId: '005',
          },
          {
            id: '014',
            date: '2024-02-02',
            phone: '0123456793',
            address: 'Nam Định',
            customer: 'Ngô Thị Lan',
            total: '1,000,000đ',
            status: 'Đã giao hàng',
            staffId: 'NV014',
            product: 'Kệ tivi mặt kính',
            productId: '002',
          },
          {
            id: '015',
            date: '2024-02-03',
            phone: '0123456794',
            address: 'Thanh Hóa',
            customer: 'Phan Quốc Hưng',
            total: '3,200,000đ',
            status: 'Đang giao hàng',
            staffId: 'NV015',
            product: 'Sofa giường đa năng',
            productId: '003',
          },
          {
            id: '016',
            date: '2024-02-04',
            phone: '0123456795',
            address: 'Hà Giang',
            customer: 'Hoàng Văn Cường',
            total: '2,000,000đ',
            status: 'Chờ xác nhận',
            staffId: 'NV016',
            product: 'Giá sách kim loại',
            productId: '006',
          },
          {
            id: '017',
            date: '2024-02-05',
            phone: '0123456796',
            address: 'Vĩnh Phúc',
            customer: 'Nguyễn Thị Mai',
            total: '1,700,000đ',
            status: 'Đã xác nhận',
            staffId: 'NV017',
            product: 'Đèn ngủ chao vải',
            productId: '005',
          },
          {
            id: '018',
            date: '2024-02-06',
            phone: '0123456797',
            address: 'Phú Thọ',
            customer: 'Trần Khắc Duy',
            total: '3,600,000đ',
            status: 'Đang giao hàng',
            staffId: 'NV018',
            product: 'Bàn làm việc đa năng',
            productId: '007',
          },
          {
            id: '019',
            date: '2024-02-07',
            phone: '0123456798',
            address: 'Hà Nội',
            customer: 'Phạm Thị Tuyết',
            total: '2,200,000đ',
            status: 'Đã giao hàng',
            staffId: 'NV019',
            product: 'Tủ lạnh mini',
            productId: '009',
          },
          {
            id: '020',
            date: '2024-02-08',
            phone: '0123456799',
            address: 'Thái Nguyên',
            customer: 'Đỗ Hoàng Sơn',
            total: '5,000,000đ',
            status: 'Chờ xác nhận',
            staffId: 'NV020',
            product: 'Bộ bàn ghế ăn',
            productId: '010',
          },
          {
            id: '021',
            date: '2024-02-09',
            phone: '0123456800',
            address: 'Quảng Trị',
            customer: 'Nguyễn Văn Đức',
            total: '1,800,000đ',
            status: 'Đã xác nhận',
            staffId: 'NV021',
            product: 'Kệ treo tường',
            productId: '009',
          },
          {
            id: '022',
            date: '2024-02-10',
            phone: '0123456801',
            address: 'Huế',
            customer: 'Trần Thị Bích Phương',
            total: '3,000,000đ',
            status: 'Đang giao hàng',
            staffId: 'NV022',
            product: 'Thảm trải sàn lông xù',
            productId: '008',
          },
          {
            id: '023',
            date: '2024-02-11',
            phone: '0123456802',
            address: 'Đà Nẵng',
            customer: 'Ngô Tuấn Anh',
            total: '2,500,000đ',
            status: 'Đã giao hàng',
            staffId: 'NV023',
            product: 'Bàn trà gỗ sồi',
            productId: '007',
          },
          {
            id: '024',
            date: '2024-02-12',
            phone: '0123456803',
            address: 'Hồ Chí Minh',
            customer: 'Lê Thị Vân',
            total: '4,200,000đ',
            status: 'Chờ xác nhận',
            staffId: 'NV024',
            product: 'Sofa góc chữ L',
            productId: '007',
          },
          {
            id: '025',
            date: '2024-02-13',
            phone: '0123456804',
            address: 'Bình Định',
            customer: 'Hoàng Minh Hiếu',
            total: '2,900,000đ',
            status: 'Đang giao hàng',
            staffId: 'NV025',
            product: 'Tủ rượu sang trọng',
            productId: '006',
          },
          {
            id: '026',
            date: '2024-02-14',
            phone: '0123456805',
            address: 'Khánh Hòa',
            customer: 'Nguyễn Thị Lệ',
            total: '3,300,000đ',
            status: 'Đã giao hàng',
            staffId: 'NV026',
            product: 'Bàn ăn mặt đá',
            productId: '005',
          },
          {
            id: '027',
            date: '2024-02-15',
            phone: '0123456806',
            address: 'Đồng Nai',
            customer: 'Trần Quốc Tuấn',
            total: '1,400,000đ',
            status: 'Đã xác nhận',
            staffId: 'NV027',
            product: 'Ghế nhựa xếp gọn',
            productId: '004',
          },
          {
            id: '028',
            date: '2024-02-16',
            phone: '0123456807',
            address: 'Bình Dương',
            customer: 'Phan Hoàng Ngân',
            total: '4,800,000đ',
            status: 'Chờ xác nhận',
            staffId: 'NV028',
            product: 'Tủ quần áo 5 cánh',
            productId: '003',
          },
          {
            id: '029',
            date: '2024-02-17',
            phone: '0123456808',
            address: 'Cần Thơ',
            customer: 'Ngô Văn Hậu',
            total: '3,500,000đ',
            status: 'Đã giao hàng',
            staffId: 'NV029',
            product: 'Đèn cây đọc sách',
            productId: '002',
          },
          {
            id: '030',
            date: '2024-02-18',
            phone: '0123456809',
            address: 'Kiên Giang',
            customer: 'Phạm Thị Minh Thư',
            total: '2,400,000đ',
            status: 'Đang giao hàng',
            staffId: 'NV030',
            product: 'Tủ lạnh hai cánh',
            productId: '001',
          },
          
    ];
    export default orderList;
    