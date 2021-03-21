


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
                                <span style={{ fontFamily: 'arial, helvetica, sans-serif', fontSize: '14px' }}>Phone ( Zalo ):&nbsp;</span><a href="tel:0931911348">0931911348</a> Ms.Thơ</p>
                            <div className="social">
                                <h4>THEO DÕI VAY247</h4>
                                <a rel="nofollow" target="_blank" href="https://www.facebook.com/tho.le.965580"><i className="fa fa-facebook-official" aria-hidden="true" /></a>
                                <a rel="nofollow" target="_blank" ><i className="fa fa-google-plus" aria-hidden="true" /></a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-6 services-us">
                            <h4>DANH MỤC WEBSITE</h4>
                            <ul>
                                <li><a href="./">Trang chủ</a></li>
                                <li><a href="hoi-dap-vay">Hỏi đáp vay</a></li>
                                <li><a href="tin-tuc">Tin tức – Khuyến mãi</a></li>
                                <li><a href="tuyen-dung">Tuyển dụng</a></li>
                                <li><a href="dang-ky-vay">Đăng ký vay</a></li>
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