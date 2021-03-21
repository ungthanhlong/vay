import { BrowserRouter as Router} from "react-router-dom";

import Header from './component/base/header'
import Container from './component/base/container'
import Footer from './component/base/footer'
import RouterPath from './component/RouterPath';

function App() {
  return (
    <Router>


    <div className="wrap-tt">
      <Header />
      <main className="main-container">
        <div className="block-main">
          <Container />
        <RouterPath/>
        </div>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
