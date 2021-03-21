import { Link } from "react-router-dom";



function Footer() {

    return (
        <footer className="footer-container">
            <div className="block-footer">
                <div className="container-tv">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-6 contact-us">
                            <h4>Thông tin liên hệ</h4>
                            <h3>
                                <strong><span style={{ fontSize: '18px' }}>DỊCH VỤ VAY TIỀN ĐÀ NẴNG</span></strong></h3>
                            <p>
                                <span style={{ fontFamily: 'arial, helvetica, sans-serif', fontSize: '14px' }}>Địa chỉ: 87 Nguyễn Văn Linh</span><span style={{ fontFamily: 'arial, helvetica, sans-serif', fontSize: '14px' }}>, Tp. Đà Nẵng</span><br />
                                <span style={{ fontFamily: 'arial, helvetica, sans-serif', fontSize: '14px' }}>Phone ( Zalo ):&nbsp;</span><Link to="/">0931911348</Link> Ms.Thơ</p>
                            <div className="social">
                                <h4>THEO DÕI VAY247</h4>
                                <Link to="#"><i className="fa fa-facebook-official" aria-hidden="true" /></Link>
                                <Link  to="#"><i className="fa fa-google-plus" aria-hidden="true" /></Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-6 services-us">
                            <h4>DANH MỤC WEBSITE</h4>
                            <ul>
                                <li><Link to="#">Trang chủ</Link></li>
                                <li><Link to="#">Hỏi đáp vay</Link></li>
                                <li><Link to="#">Tin tức – Khuyến mãi</Link></li>
                                <li><Link to="#">Tuyển dụng</Link></li>
                                <li><Link to="#">Đăng ký vay</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 facebook-page">
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );

}
export default Footer;