function File(){
return(
    <div className="news-container">
        <div className="container-tv">
          <div className="news-content">
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover table-responsive">
                <thead>
                  <tr>
                    <th>Tên mẫu</th>
                    <th className="text-center">Tập tin đính kèm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><h3 style={{fontSize: '16px', margin: '0 auto'}}><b>ĐƠN XIN XÁC NHẬN CÔNG TÁC VÀ THU NHẬP</b></h3></td>
                    <td className="text-center"><a download href="public/upload/articles/file/1-don-xin-xac-nhan-cong-tac-va-thu-nhap.docx">Tải xuống  <i className="fa fa-download" /></a></td>
                  </tr>
                  <tr>
                    <td><h3 style={{fontSize: '16px', margin: '0 auto'}}><b>ĐƠN XIN XÁC NHẬN TẠM TRÚ</b></h3></td>
                    <td className="text-center"><a download href="public/upload/articles/file/2-don-xin-xac-nhan-tam-tru.docx">Tải xuống  <i className="fa fa-download" /></a></td>
                  </tr>
                  <tr>
                    <td><h3 style={{fontSize: '16px', margin: '0 auto'}}><b>MẪU XÁC NHẬN KINH DOANH</b></h3></td>
                    <td className="text-center"><a download href="public/upload/articles/file/3-mau-xac-nhan-kinh-doanh.docx">Tải xuống  <i className="fa fa-download" /></a></td>
                  </tr>
                  <tr>
                    <td><h3 style={{fontSize: '16px', margin: '0 auto'}}><b>ĐƠN XÁC NHẬN ĐỊA CHỈ</b></h3></td>
                    <td className="text-center"><a download href="public/upload/articles/file/4-don-xac-nhan-dia-chi.docx">Tải xuống  <i className="fa fa-download" /></a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
);
}
export default File