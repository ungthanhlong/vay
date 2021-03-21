import { Switch, Route} from "react-router-dom";
import Home from './home/index'
import News from './news-promotional/index'
import File from './file/index'
import Calculator from './calculator/index'
import Contact from "./contact";
import VayTheoLuong from "./objectBorrow/personal/vay-theo-luong";
import VayTheoDien from "./objectBorrow/personal/vay-theo-tien-dien";
import VayBaoHiem from "./objectBorrow/personal/vay-bao-hiem";
import VayHopDongCu from "./objectBorrow/personal/vay-hop-dong-cu";
import VayCaVetXe from "./objectBorrow/personal/vay-ca-vet-xe";
import VayATM from "./objectBorrow/personal/vay-atm";
import VaySim from "./objectBorrow/personal/vay-sim-viettel";
function RouterPath() {
    return (

            <Switch>
              <Route path="/" exact component={Home} />

              {/* Đối tượng vay */}
              {/* Cá Nhân */}
              <Route path="/doi-tuong-vay/ca-nhan/vay-theo-luong" exact component={VayTheoLuong} />
              <Route path="/doi-tuong-vay/ca-nhan/vay-theo-hoa-don-tien-dien" exact component={VayTheoDien} />
              <Route path="/doi-tuong-vay/ca-nhan/vay-theo-bao-hiem-nhan-tho" exact component={VayBaoHiem} />
              <Route path="/doi-tuong-vay/ca-nhan/vay-theo-hop-dong-cu" exact component={VayHopDongCu} />
              <Route path="/doi-tuong-vay/ca-nhan/vay-bang-ca-vet-xe" exact component={VayCaVetXe} />
              <Route path="/doi-tuong-vay/ca-nhan/vay-theo-tai-khoan-atm" exact component={VayATM} />
              <Route path="/doi-tuong-vay/ca-nhan/vay-theo-sim-viettel" exact component={VaySim} />
              {/* Hộ kinh doanh*/}
              <Route path="/tin-tuc-khuyen-mai" exact component={News} />
              <Route path="/mau-ho-so" exact component={File} />
              <Route path="/tinh-lai-vay" exact component={Calculator} />
              <Route path="/lien-he" exact component={Contact} />
            </Switch>

    )
  }

  export default RouterPath;