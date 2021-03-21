import { Link } from "react-router-dom";



function Header() {

  return (
    <header className="header-container">
      <div className="clearfix header-top">
        <div className="container-tv">
          <div className="top-contact col-sm-12">
            <div className="row">
              <a href="#"><i className="fa fa-phone" aria-hidden="true" /> 0931911348 Ms.Thơ</a>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix header-menu ">
        <div className="container-tv mmenu-mobile">
          <div className="logo-header">
            <figure><a href="#"><img src="%PUBLIC_URL%/images/logo.png" alt="" className="img-responsive" /></a></figure>
          </div>
          {/* mmenu header */}
          <div className="open-menu hidden-lg hidden-md hidden-sm">
            <i className="menu-line" />
            <i className="menu-line" />
            <i className="menu-line" />
          </div>
          <div className="menu-header mmenu">
            <ul className="clearfix">
            <li className="underline-from-center"><Link className="a-hover" to="/">Trang chủ</Link></li>
              <li className="underline-from-center">
                <a href="#" className="a-hover" style={{ cursor: 'pointer' }}>Đối tượng vay</a>
                <ul className="sub-menu">
                  <li className="sub-menu-list"><a href="#" style={{ cursor: 'pointer' }}>Cá nhân</a>
                    <ul className="m-sub-menu">
                      <li className="sub-menu-list"><Link to="/doi-tuong-vay/ca-nhan/vay-theo-luong">Vay theo lương</Link></li>
                      <li className="sub-menu-list"><Link to="/doi-tuong-vay/ca-nhan/vay-theo-hoa-don-tien-dien">Vay theo hóa đơn tiền điện</Link></li>
                      <li className="sub-menu-list"><Link to="/doi-tuong-vay/ca-nhan/vay-theo-bao-hiem-nhan-tho">Vay theo bảo hiểm nhân thọ</Link></li>
                      <li className="sub-menu-list"><Link to="/doi-tuong-vay/ca-nhan/vay-theo-hop-dong-cu">Vay theo hợp đồng cũ</Link></li>
                      <li className="sub-menu-list"><Link to="/doi-tuong-vay/ca-nhan/vay-bang-ca-vet-xe">Vay bằng cà vẹt xe</Link></li>
                      <li className="sub-menu-list"><Link to="/doi-tuong-vay/ca-nhan/vay-theo-tai-khoan-atm">Vay theo tài khoản ATM</Link></li>
                      <li className="sub-menu-list"><Link to="/doi-tuong-vay/ca-nhan/vay-theo-sim-viettel">Vay theo sim Viettel</Link></li>
                    </ul>
                  </li>
                  <li className="sub-menu-list"><a href="#" style={{ cursor: 'pointer' }}>Hộ kinh doanh</a>
                  </li>
                </ul>
              </li>
              <li className="underline-from-center">
                <a href="#" className="a-hover" style={{ cursor: 'pointer' }}>Hình thức vay</a>
                <ul className="sub-menu">
                </ul>
              </li>
              <li className="underline-from-center"><Link className="a-hover" to="/tin-tuc-khuyen-mai">Tin tức - Khuyến mãi</Link></li>
              <li className="underline-from-center"><Link className="a-hover" to="/mau-ho-so">Mẫu hồ sơ</Link></li>
              <li className="underline-from-center"><Link className="a-hover" to="/tinh-lai-vay">Tính lãi vay</Link></li>
              <li className="underline-from-center"><Link className="a-hover" to="/lien-he">Liên hệ</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );

}
export default Header;