function Calculator(){
    return(
        <div data-role="main" className="ui-content">
        <form action="#" method="post">
          <label htmlFor="so_tien_vay" id="so_tien_vay-label">Số tiền vay (Triệu đồng):</label>
          <div className="ui-slider"><div className="ui-slider-popup ui-shadow ui-corner-all ui-body-a" style={{display: 'none', top: '-85px', left: '-18px'}}>10</div><input id="so_tien_vay" name="so_tien_vay" type="number" data-type="range" defaultValue={10} data-highlight="true" data-popup-enabled="true" max={350} min={10} className="ui-shadow-inset ui-body-inherit ui-corner-all ui-slider-input" /><div role="application" className="ui-slider-track ui-shadow-inset ui-bar-inherit ui-corner-all"><div className="ui-slider-bg ui-btn-active" style={{width: '0%'}} /><a href="#" className="ui-slider-handle ui-btn ui-shadow" role="slider" aria-valuemin={10} aria-valuemax={350} aria-valuenow={10} aria-valuetext={10} aria-labelledby="so_tien_vay-label" style={{left: '0%'}} /></div></div>
          <label htmlFor="thoi_han_vay" id="thoi_han_vay-label">Thời hạn vay (Tháng):</label>
          <div className="ui-slider"><div className="ui-slider-popup ui-shadow ui-corner-all ui-body-a" style={{display: 'none', top: '-85px', left: '-18px'}}>9</div><input id="thoi_han_vay" name="thoi_han_vay" type="number" data-type="range" defaultValue={9} data-highlight="true" data-popup-enabled="true" max={48} min={9} className="ui-shadow-inset ui-body-inherit ui-corner-all ui-slider-input" /><div role="application" className="ui-slider-track ui-shadow-inset ui-bar-inherit ui-corner-all"><div className="ui-slider-bg ui-btn-active" style={{width: '0%'}} /><a href="#" className="ui-slider-handle ui-btn ui-shadow" role="slider" aria-valuemin={9} aria-valuemax={48} aria-valuenow={9} aria-valuetext={9} aria-labelledby="thoi_han_vay-label" style={{left: '0%'}} /></div></div>
          <fieldset data-role="controlgroup" data-type="horizontal" className="ui-controlgroup ui-controlgroup-horizontal ui-corner-all"><div role="heading" className="ui-controlgroup-label"><legend>Lãi suất vay bình quân (%):</legend></div><div className="ui-controlgroup-controls ">
              <div className="ui-radio"><label htmlFor="lai_vay_0" className="ui-btn ui-corner-all ui-btn-inherit ui-radio-off ui-first-child">0</label><input id="lai_vay_0" name="lai_vay" type="radio" defaultValue="0.00000000000001" data-cacheval="false" /></div>
              <div className="ui-radio"><label htmlFor="lai_vay_149" className="ui-btn ui-corner-all ui-btn-inherit ui-radio-off">1.49</label><input id="lai_vay_149" name="lai_vay" type="radio" defaultValue="0.02625" data-cacheval="false" /></div>
              <div className="ui-radio"><label htmlFor="lai_vay_166" className="ui-btn ui-corner-all ui-btn-inherit ui-radio-off">1.66</label><input id="lai_vay_166" name="lai_vay" type="radio" defaultValue="0.0291666666666667" defaultChecked data-cacheval="false" /></div>
              <div className="ui-radio"><label htmlFor="lai_vay_176" className="ui-btn ui-corner-all ui-btn-inherit ui-radio-off">1.76</label><input id="lai_vay_176" name="lai_vay" type="radio" defaultValue="0.0308333333333333" data-cacheval="false" /></div>
              <div className="ui-radio"><label htmlFor="lai_vay_204" className="ui-btn ui-corner-all ui-btn-inherit ui-radio-off">2.04</label><input id="lai_vay_204" name="lai_vay" type="radio" defaultValue="0.0354166666666667" data-cacheval="false" /></div>
              <div className="ui-radio"><label htmlFor="lai_vay_217" className="ui-btn ui-corner-all ui-btn-inherit ui-radio-off">2.17</label><input id="lai_vay_217" name="lai_vay" type="radio" defaultValue="0.0375" data-cacheval="false" /></div>
              <div className="ui-radio"><label htmlFor="lai_vay_227" className="ui-btn ui-corner-all ui-btn-inherit ui-radio-off">2.27</label><input id="lai_vay_227" name="lai_vay" type="radio" defaultValue="0.0391666666666667" data-cacheval="true" /></div>
              <div className="ui-radio"><label htmlFor="lai_vay_295" className="ui-btn ui-corner-all ui-btn-inherit ui-last-child ui-btn-active ui-radio-on">2.95</label><input id="lai_vay_295" name="lai_vay" type="radio" defaultValue="0.05" data-cacheval="false" /></div>
            </div></fieldset>
          <fieldset data-role="controlgroup" data-type="horizontal" className="ui-controlgroup ui-controlgroup-horizontal ui-corner-all"><div role="heading" className="ui-controlgroup-label"><legend>Mức phí bảo hiểm (%):</legend></div><div className="ui-controlgroup-controls ">
              <div className="ui-radio"><label htmlFor="bao_hiem_0" className="ui-btn ui-corner-all ui-btn-inherit ui-radio-off ui-first-child">0</label><input id="bao_hiem_0" name="bao_hiem" type="radio" defaultValue={0} /></div>
              <div className="ui-radio"><label htmlFor="bao_hiem_5" className="ui-btn ui-corner-all ui-btn-inherit ui-radio-off">5</label><input id="bao_hiem_5" name="bao_hiem" type="radio" defaultValue="0.05" /></div>
              <div className="ui-radio"><label htmlFor="bao_hiem_55" className="ui-btn ui-corner-all ui-btn-inherit ui-radio-on ui-btn-active">5.5</label><input id="bao_hiem_55" name="bao_hiem" type="radio" defaultValue="0.055" defaultChecked /></div>
              <div className="ui-radio"><label htmlFor="bao_hiem_6" className="ui-btn ui-corner-all ui-btn-inherit ui-radio-off ui-last-child">6</label><input id="bao_hiem_6" name="bao_hiem" type="radio" defaultValue="0.06" /></div>
            </div></fieldset>
          <h1 className="tongtien" id="ket_qua">1.485.000</h1>
          <p>Tiền đóng, đã bao gồm phí thu hộ: <b><span id="ket_qua_co_phi">1.497.000</span></b></p>
          <br /><table className="ui-shadow ui-responsive ui-table" data-mode data-role="table" id="bang_lai_suat">
            <thead>
              <tr>
                <th data-colstart={1}>Kỳ</th>
                <th data-colstart={2}>Trả gốc</th>
                <th data-colstart={3}>Trả lãi</th>
                <th data-colstart={4}>Gốc còn</th>
              </tr>
            </thead>
            <tbody id="bang_chi_tiet"><tr><td>1</td><td>957.500</td><td>527.500</td><td>9.592.500</td></tr><tr><td>2</td><td>1.005.375</td><td>479.625</td><td>8.587.125</td></tr><tr><td>3</td><td>1.055.644</td><td>429.356</td><td>7.531.481</td></tr><tr><td>4</td><td>1.108.426</td><td>376.574</td><td>6.423.055</td></tr><tr><td>5</td><td>1.163.847</td><td>321.153</td><td>5.259.208</td></tr><tr><td>6</td><td>1.222.040</td><td>262.960</td><td>4.037.168</td></tr><tr><td>7</td><td>1.283.142</td><td>201.858</td><td>2.754.027</td></tr><tr><td>8</td><td>1.347.299</td><td>137.701</td><td>1.406.728</td></tr><tr><td>9</td><td>1.406.728</td><td>70.336</td><td>0</td></tr></tbody>
          </table>
        </form>
        <div id="tinh_so_du" style={{display: 'none'}}><br />
          <div className="ui-grid-a">
            <div className="ui-block-a">
              <form action="#" method="post">
                <label htmlFor="so_du_min_t01">T01 - Nhỏ nhất</label>
                <div className="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"><input id="so_du_min_t01" name="so_du_min_t01" /></div>
                <label htmlFor="so_du_min_t02">T02 - Nhỏ nhất</label>
                <div className="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"><input id="so_du_min_t02" name="so_du_min_t02" /></div>
                <label htmlFor="so_du_min_t03">T03 - Nhỏ nhất</label>
                <div className="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"><input id="so_du_min_t03" name="so_du_min_t03" /></div>
                <label htmlFor="so_du_min_t04">T04 - Nhỏ nhất</label>
                <div className="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"><input id="so_du_min_t04" name="so_du_min_t04" /></div>
              </form>
            </div>
            <div className="ui-block-b">
              <form action="#" method="post">
                <label htmlFor="so_du_max_t01">T01 - Lớn nhất</label>
                <div className="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"><input id="so_du_max_t01" name="so_du_max_t01" /></div>
                <label htmlFor="so_du_max_t02">T02 - Lớn nhất</label>
                <div className="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"><input id="so_du_max_t02" name="so_du_max_t02" /></div>
                <label htmlFor="so_du_max_t03">T03 - Lớn nhất</label>
                <div className="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"><input id="so_du_max_t03" name="so_du_max_t03" /></div>
                <label htmlFor="so_du_max_t04">T04 - Lớn nhất</label>
                <div className="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"><input id="so_du_max_t04" name="so_du_max_t04" /></div>
              </form>
            </div>
          </div>
          <h4>SỐ DƯ BÌNH QUÂN 04 THÁNG</h4>
          <h1 id="ket_qua_so_du_bq">0</h1>
          <p>Duyệt max: <strong><span id="duyet_vay_max">0</span></strong></p>
        </div>
      </div>
    );
}
export default Calculator