import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

//import from react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";

function App() {
  //測試 react-bootstrap 的 ExampleToast 功能是否正常
  const ExampleToast = ({ children }) => {
    const [show, toggleShow] = useState(false);

    return (
      <>
        {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
        <Toast show={show} onClose={() => toggleShow(false)}>
          <Toast.Header>
            <strong className="mr-auto">歡迎光臨</strong>
          </Toast.Header>
          <Toast.Body>{children}</Toast.Body>
        </Toast>
      </>
    );
  };

  return (
    <>
      <Header />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>This is our Hello World page.我誰~~~~~~</p>

          {/* 下面是測試用的 react-bootstrap ExampleToast 物件 */}
          <ExampleToast className="toast">
            We now have Toasts
            <span role="img" aria-label="tada">
              🎉
            </span>
          </ExampleToast>
          {/* 上面是測試用的 react-bootstrap ExampleToast 物件 */}
        </header>
      </div>
      <Footer />
    </>
  );
}

export default App;
