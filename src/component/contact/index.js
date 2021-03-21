function Contact(){
    return(
        <div className="clearfix form-contact">
        <div className="container-tv">
          <div className="row">
            <div className="box-cont col-sm-5">
              <h4 className="contact-title">Địa chỉ</h4>
              <h3>
                <strong><span style={{fontSize: '18px'}}>DỊCH VỤ VAY TIỀN ĐÀ NẴNG</span></strong></h3>
              <p>
                <span style={{fontFamily: 'arial, helvetica, sans-serif', fontSize: '14px'}}>Địa chỉ: 87 Nguyễn Văn Linh</span><span style={{fontFamily: 'arial, helvetica, sans-serif', fontSize: '14px'}}>, Tp. Đà Nẵng</span><br />
                <span style={{fontFamily: 'arial, helvetica, sans-serif', fontSize: '14px'}}>Phone ( Zalo ):&nbsp;</span><a href="tel:0931911348">0931911348</a> Ms.Thơ</p>
            </div>
            <form className="box-cont col-sm-7" role="form" action="/lien-he" method="POST" encType="multipart/form-data">
              <input type="hidden" name="_token" defaultValue="4QWRvzz8voAnMwVA4Vgoou61UowMJ0dqRdmAu6hf" />
              <h4 className="contact-title">Gửi mail</h4>
              <div className="row">
                <span />
                <div className="form-group col-sm-6 col-xs-12">
                  <input className="form-control" type="text" name="txt_name" placeholder="Họ & Tên (*)" defaultValue />
                </div>
                <div className="form-group col-sm-6 col-xs-12">
                  <input className="form-control" type="text" name="txt_phone" placeholder="Số điện thoại (*)" defaultValue />
                </div>
                <div className="form-group col-sm-6 col-xs-12">
                  <input className="form-control" type="text" name="txt_email" placeholder="Email" defaultValue />
                </div>
                <div className="form-group col-sm-6 col-xs-12">
                  <input className="form-control" type="text" name="txt_address" placeholder="Địa chỉ" defaultValue />
                </div>
                <div className="form-group col-sm-6 col-xs-12">
                  <textarea className="form-control" rows={5} id="comment" name="txt_content" placeholder="Nội dung" defaultValue={""} />
                </div>
                <div className="form-group box_captcha col-sm-6 col-xs-12">
                  <img className="img-responsive" src="./random_image.php" />
                  <input type="text" className="form-control" name="txt_captcha" maxLength={10} size={32} placeholder="Nhập mã xác nhận (*)" />
                </div>
                <div className="form-group box_captcha col-sm-12 col-xs-12">
                  <button type="submit" className="btn btn-default">Gửi liên hệ</button>
                </div>
              </div>
            </form>
          </div>
          <div className="box-cont">
            <h4 className="contact-title">Maps</h4>
            <div id="div_id" style={{height: '400px'}} />
          </div>
        </div>
      </div>
    );
}
export default Contact