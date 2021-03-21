import { Link } from "react-router-dom";



function Container() {

  return (
    <div className="about-container" style={{ background: "url(/images/banner-credit.jpg)" }}>
      <div className="container-tv">
        <div className="row">
          <div className="clearfix about-home">
            <div className="block-title">
              <h2 style={{ color: '#fff' }}>DỊCH VỤ VAY TIỀN TÍN CHẤP MIỀN TRUNG</h2>
            </div>
            <div className="text-center about-content">
              <span>Liên hệ tư vấn làm hồ sơ miễn phí 24/7</span>
              <div className="col-sm-12 view-more">
                <Link to="#" className="btn-view-more">Đăng ký vay</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
export default Container;