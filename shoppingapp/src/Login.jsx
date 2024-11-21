import { useState , useEffect} from 'react';
import "./SignUp.css";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import users from './data/user';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [hasPasswordValue, setHasPasswordValue] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
    // Validate on change
    if (name === 'email' && value && !validateEmail(value)) {
      setErrors(prev => ({
        ...prev,
        email: 'Định dạng Email không đúng!'
      }));
    }else {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    console.log(formData);
  };

  // Hàm để chuyển đổi trạng thái hiển thị mật khẩu
  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };
  const handleFocus = () => {
    setHasPasswordValue(formData.password.length > 0); // Set the value if password has any data
  };
  useEffect(() => {
    setHasPasswordValue(formData.password.length > 0);
  }, [formData.password]);

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log("Hàm handleSubmit đã được gọi");
    const user = users.find(user => user.email === formData.email && user.password === formData.password);
    if (user) {
        navigate('/orderManager');
        alert('Đăng nhập thành công!');
    } else {
        alert('Email hoặc mật khẩu không đúng!');
    }
};
  return (
    <div className='container'>
      <Header/>
      <div className="form-container">
    
      <div className="form-card">
        <h2>Đăng nhập tài khoản</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="label-row">
              <label>Email <span className="required">*</span></label>
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="label-row">
              <label>Mật khẩu <span className="required">*</span></label>
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>
            <div className="input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="form-control"
                  placeholder="Mật khẩu"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
                  {hasPasswordValue && (
                  <span
                    className="toggle-password"
                    onClick={toggleShowPassword}
                  >
                    { showPassword? (
                      <i className="fas fa-eye-slash"></i>
                    ) : (
                      <i className="fas fa-eye"></i>
                    )}
                  </span>
                )}
              </div>
          </div>

          <div className='button-container'>
            <button type="submit" className="btn btn-primary">ĐĂNG NHẬP</button>
        </div>
        </form>
        

        <div className="login-link">
          <p>Bạn chưa có tài khoản? <a href="/signup">Đăng ký</a></p>
        </div>
        <div className="divider">
          <span>hoặc</span>
        </div>

        <div className="social-login">
          <img src="/facebook.png" alt="Facebook" className="social-icon" />
          <img src="/google.png" alt="Google" className="social-icon" />
          <img src="/apple.png" alt="Apple" className="social-icon" />
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default Login;
