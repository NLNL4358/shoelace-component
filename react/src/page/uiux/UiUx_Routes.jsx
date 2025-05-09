import React from 'react';
import { Routes, Route } from 'react-router-dom';

import UxInput from './page/UxInput';
import Breadcrumb from './page/Breadcrumb';
import BadgeTag from './page/BadgeTag';
import Dropdown from './page/Dropdown';
import Icon from './page/Icon';

function UiUx_Routes() {
    return (
        <>
            <Routes>
                <Route path="ux-input" element={<UxInput />} />
                <Route path="breadcrumb" element={<Breadcrumb />} />
                <Route path="badge-tag" element={<BadgeTag />} />
                <Route path="dropdown" element={<Dropdown />} />
                <Route path="icon" element={<Icon />} />
            </Routes>
        </>
    );
}

export default UiUx_Routes;
