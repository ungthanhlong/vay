function Register(){
return (
    <div className="dangkyvay">
            <div className="container-tv">
                <div className="row">
                    {/*Đăng ký vay*/}
                    <div className="col-sm-4">
                        <div className="row">
                            <form role="form" action="/dang-ky-vay" method="POST" encType="multipart/form-data">
                                <input type="hidden" name="_token" defaultValue="BV9OuGm37VY3bFxYDNUSZrdWGlFyWsBXjTE1B4No" />
                                <h3 className="container contact-title">Đăng ký vay</h3>
                                <div className="form-group col-sm-12 col-xs-12">
                                    <input className="form-control" type="text" name="txt_name" placeholder="Họ & Tên (*)" defaultValue />
                                </div>
                                <div className="form-group col-sm-12 col-xs-12">
                                    <input className="form-control" type="text" name="txt_phone" placeholder="Số điện thoại (*)" defaultValue />
                                </div>
                                <div className="form-group col-sm-12 col-xs-12">
                                    <input className="form-control" type="text" name="txt_cmnd" placeholder="Chứng minh nhân dân (*)" defaultValue />
                                </div>
                                <div className="form-group col-sm-12 col-xs-12">
                                    <input className="form-control" type="text" name="txt_address" placeholder="Địa chỉ HKTT (*)" defaultValue />
                                </div>
                                <div className="form-group col-sm-12 col-xs-12">
                                    <select id="heard" className="form-control" name="pro_duct">
                                        <option value>-----Hình thức vay-----</option>
                                        <option value={1}>Vay theo lương</option>
                                        <option value={2}>Vay theo hóa đơn tiền điện</option>
                                        <option value={3}>Vay theo bảo hiểm nhân thọ</option>
                                        <option value={4}>Vay theo hợp đồng cũ</option>
                                        <option value={5}>Vay bằng cà vẹt xe</option>
                                        <option value={6}>Vay theo tài khoản ATM</option>
                                        <option value={7}>Vay theo sim Viettel</option>
                                    </select>
                                </div>
                                <div className="form-group col-sm-12 col-xs-12">
                                    <input className="form-control" type="text" name="txt_price" placeholder="Số tiền muốn vay (*)" defaultValue onkeyup="this.value=FormatNumber(this.value);" />
                                </div>
                                <div className="form-group col-sm-12 col-xs-12">
                                    <textarea className="form-control" rows={5} id="comment" name="txt_content" placeholder="Nội dung" defaultValue={""} />
                                </div>
                                <div className="form-group box_captcha col-sm-12 col-xs-12">
                                    <button type="submit" className="btn btn-warning">Đăng ký</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <h3>Giới thiệu</h3>
                        <h3 style={{ boxSizing: 'border-box', fontFamily: 'Oswald, sans-serif', fontWeight: 'bold', lineHeight: '1.1', color: 'rgb(51, 51, 51)', marginBottom: '10px', marginTop: 0, fontSize: '24px', backgroundColor: 'rgb(250, 250, 250)', textAlign: 'center' }}>
                            HỒ SƠ VAY TÍN CHẤP NGÂN HÀNG&nbsp;</h3>
                        <p style={{ boxSizing: 'border-box', margin: '0px 0px 20px', color: 'rgb(51, 51, 51)', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '14px' }}>
                            <br />
                      Để rút ngắn thời gian duyệt hồ sơ và nhanh chóng nhận tiền vay, khách hàng vui lòng chuẩn bị&nbsp;<strong style={{ boxSizing: 'border-box' }}>bản photo</strong>&nbsp;của các loại giấy tờ sau:</p>
                        <p style={{ boxSizing: 'border-box', margin: '0px 0px 20px', color: 'rgb(51, 51, 51)', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '14px' }}>
                            • Chứng minh nhân dân.<br />
                      • Sổ hộ khẩu (Photo nguyên cuốn, bao gồm những trang chưa ghi chữ).</p>
                        <p style={{ boxSizing: 'border-box', margin: '0px 0px 20px', color: 'rgb(51, 51, 51)', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '14px' }}>
                            &nbsp;Không hỗ trợ nợ xấu, nợ chú ý trong vòng 12 tháng, đang nợ 3 tổ chức trở lên</p>
                        <div>
                            &nbsp;Hỗ trợ vay tiêu dùng cho khách hiện tại có đi làm&nbsp;</div>
                        <div>
                            &nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
);
}
export default Register