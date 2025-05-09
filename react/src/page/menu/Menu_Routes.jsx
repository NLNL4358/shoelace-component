import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Menu from './page/Menu';
import Tab from './page/Tab';

function Menu_Routes() {
    return (
        <>
            <Routes>
                <Route path="menu" element={<Menu />} />
                <Route path="tab" element={<Tab />} />
            </Routes>
        </>
    );
}

export default Menu_Routes;
