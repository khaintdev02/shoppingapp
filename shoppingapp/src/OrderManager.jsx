import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './Manager.css';
import { Eye, Edit, Trash } from 'lucide-react';
import orderList from './data/order';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

const OrderManager = () => {
      // const handlePageChange = (pageNumber) => {
      //       setCurrentPage(pageNumber);
      //   };
      //   const handleNextPage = () => {
      //       setCurrentPage(totalPages);
      //   };
      const navigate = useNavigate();

      const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
            const [orders, setOrders] = useState(orderList); 
            const [filteredOrders, setFilteredOrders] = useState(orderList); 
            const [selectedSortValue, setSelectedSortValue] = useState('');
            const [currentPage, setCurrentPage] = useState(1);
            const [ordersPerPage, setOrdersPerPage] = useState(10);
    
            const handleSortChange = (event) => {
                  const selectedValue = event.target.value;
                  setSelectedSortValue(selectedValue);
                  
                  
                  const newOrdersPerPage = parseInt(selectedValue) || 10;
                  setOrdersPerPage(newOrdersPerPage);
                  setCurrentPage(1); 
          
                  
                  setFilteredOrders(orders);
              };
          
              const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
              const indexOfLastOrder = currentPage * ordersPerPage;
              const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
              const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);          
            const viewOrderDetails = (order) => {
                  navigate('/orderDetail', { state: { product: order } }); // Sử dụng navigate
            };

            // Hàm sửa sản phẩm
            const editOrder = (id, updateOrder) => {
                  setOrders(orders.map(order => (order.id === id ? updateOrder : order)));
            };

            const deleteOrder = (id) => {
                  const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa đơn hàng này?");

                  if (confirmDelete) {
                  setOrders((prevOrders) => {
                        const updatedOrders = prevOrders.filter(order => order.id !== id);
                        setFilteredOrders(updatedOrders);
                        return updatedOrders;
                  });
                  }
            };
      const sidebarItems = [
            { id: 1, title: 'Quản lý đơn hàng', path: '/orderManager',  active: true }, 
            { id: 2, title: 'Quản lý sản phẩm', path: '/productManager' },
            { id: 3, title: 'Quản lý nhân viên', path: '/employeeManager' }, 
            { id: 4, title: 'Quản lý dịch vụ', path: '/serviceManager' },
            { id: 5, title: 'Quản lý tin tức', path: '/newsManager' }, 
            { id: 6, title: 'Quản lý thống kê', path: '/statisticsManager' }
      ];
  return (
      <div className="manager-container">
      <Header/>
            <div className="admin-dashboard">
                  {/* Sidebar */}
                  <div className="sidebar">
                  <h2 className="sidebar-title">Danh mục quản lý</h2>
                  <ul className="sidebar-menu">
                  {sidebarItems.map((item) => (
                        <li key={item.id} className={`sidebar-item ${item.active ? 'active' : ''}`}>
                        <Link to={item.path} className="sidebar-link">{item.title}</Link>
                        </li>
                    ))}
                  </ul>
                  </div>

                  {/* Main Content */}
                  <div className="main-content">
                        <div className="content-header">
                        <h1>Danh sách đơn hàng</h1>
                        </div>
                  <div className="sort-dropdown">
                        <select value={selectedSortValue} onChange={handleSortChange}>
                              <option value="">Xem</option>
                              <option value="10">10 đơn</option>
                              <option value="20">20 đơn</option>
                              <option value="30">30 đơn</option>
                              <option value="50">50 đơn</option>
                        </select>
                  </div>

                  {/* Table */}
                  <div className="table-container">
                  <table>
                        <thead>
                        <tr>
                        <th>Mã đơn</th>
                        <th>Ngày đặt</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ</th>
                        <th>Sản phẩm</th>
                        <th>Tổng tiền</th>
                        <th>Trạng thái</th>
                        <th>Mã nhân viên</th>
                        <th>Thao tác</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentOrders.map((order) => (
                        <tr key={order.id}>
                              <td>{order.id}</td>
                              <td>{order.date}</td>
                              <td>{order.phone}</td>
                              <td>{order.address}</td>
                              <td>{order.product}</td>
                              <td>{order.total}</td>
                              <td className="status">
                                    {order.status === 'Chờ xác nhận' && <span className="status-waiting">Chờ xác nhận</span>}
                                    {order.status === 'Đã xác nhận' && <span className="status-confirmed">Đã xác nhận</span>}
                                    {order.status === 'Đang giao hàng' && <span className="status-in-delivery">Đang giao hàng</span>}
                                    {order.status === 'Đã giao hàng' && <span className="status-delivered">Đã giao hàng</span>}
                              </td>
                              <td>{order.staffId}</td>
                              <td className="action-buttons">
                                    <button className="action-btn view" onClick={() => viewOrderDetails(order)}><Eye size={16} /></button>
                                    <button className="action-btn edit" onClick={() => editOrder(order.id, { ...order, price: '1,200,000đ' })}><Edit size={16} /></button>
                                    <button className="action-btn delete" onClick={() => deleteOrder(order.id)}><Trash size={16} /></button>
                              </td>
                        </tr>
                        ))}
                        </tbody>
                  </table>
                  </div>

                        {/* Pagination */}
                    {/* <div className="pagination">
                        <div className="pagination-info">
                            <span>Trang {currentPage} / {totalPages}</span>
                        </div>
                        <div className="pagination-buttons">
                            {currentPage > 1 && (
                                <button className='button-paging' onClick={() => handlePageChange(currentPage - 1)}>Trang trước</button>
                            )}
                            {totalPages > 1 && (
                                <>
                                    <button className='button-paging' onClick={() => handlePageChange(1)}>1</button>
                                    {totalPages > 2 && currentPage < totalPages && (
                                        <button className='button-paging' onClick={() => handlePageChange(2)}>2</button>
                                    )}
                                </>
                            )}
                            {currentPage < totalPages && (
                                <button className='button-paging' onClick={handleNextPage}>Trang sau</button>
                            )}
                        </div>
                    </div> */}
                    {/* Phân trang */}
            <div className="pagination">
                <div className="pagination-info">
                    <span>Trang {currentPage} / {totalPages}</span>
                </div>
                <div className="pagination-buttons">
                    {currentPage > 1 && (
                        <button onClick={() => setCurrentPage(currentPage - 1)}>Trang trước</button>
                    )}
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button key={index} onClick={() => setCurrentPage(index + 1)}>
                            {index + 1}
                        </button>
                    ))}
                    {currentPage < totalPages && (
                        <button onClick={() => setCurrentPage(currentPage + 1)}>Trang sau</button>
                    )}
                </div>
            </div>
                  </div>
            </div>
            {/* Nút Kéo lên đầu trang */}
        <button className="scroll-to-top" onClick={scrollToTop}>
        ↑
        </button>
            <Footer />
      </div>
    
  );
};

export default OrderManager;