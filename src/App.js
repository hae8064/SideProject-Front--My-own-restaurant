import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Pages/Home/Home';
import Create from './Components/Create';
import MemoDetail from './Components/MemoDetail';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './styles/navbar.module.scss';
import Menu from './Components/Menu';
import Map from './Pages/Map/Map';

function App() {
  const [showButton, setShowButton] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  //zustand 상태관리

  const menuOnClick = () => {
    setShowMenu(true);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setShowButton(false);
    } else if (location.pathname === '/signUp') {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <div className="header">
        <div className="headerIcon">
          {showButton && <GiHamburgerMenu onClick={menuOnClick} />}
        </div>
        <CSSTransition
          in={showMenu}
          timeout={300}
          classNames={{
            enter: styles.enter,
            enterActive: styles.enterActive,
            exit: styles.exit,
            exitActive: styles.exitActive,
          }}
          unmountOnExit
        >
          <div>
            <Menu setShowMenu={setShowMenu} pathName={location.pathname} />
          </div>
        </CSSTransition>
        <div
          className="headerTitle"
          onClick={() => {
            console.log(location);
          }}
        >
          나만의 맛집
        </div>
      </div>

      {/* {showButton && (
       
      )} */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/map/:id" element={<Map />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/home/:id/create" element={<Create />} />
        <Route path="/home/:id/detail/:id" element={<MemoDetail />} />
      </Routes>
      <div className="footerCopyRight">
        CopyRight 2022. Bonghee All rights reserved.
      </div>
    </div>
  );
}

export default App;
