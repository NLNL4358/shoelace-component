import { Routes, Route } from 'react-router-dom';

/* 컴포넌트 */
import { Header } from './component/Header';

/* 페이지 & Routes */
import MainPage from './page/main/MainPage';
import Animation_Routes from './page/animation/Animation_Routes';
import Button_Routes from './page/button/Button_Routes';
import Checkbox_Routes from './page/checkbox/Checkbox_Routes';
import Menu_Routes from './page/menu/Menu_Routes';
import Modal_Routes from './page/modal/Modal_Routes';
import Select_Routes from './page/select/Select_Routes';
import UiUx_Routes from './page/uiux/UiUx_Routes';

function App() {
    return (
        <div className="inner">
            <Header></Header>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/button/*" element={<Button_Routes />}></Route>
                <Route path="/select/*" element={<Select_Routes />}></Route>
                <Route path="/checkbox/*" element={<Checkbox_Routes />}></Route>
                <Route path="/modal/*" element={<Modal_Routes />}></Route>
                <Route path="/menu/*" element={<Menu_Routes />}></Route>
                <Route path="/uiux/*" element={<UiUx_Routes />}></Route>
                <Route
                    path="/animation/*"
                    element={<Animation_Routes />}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
