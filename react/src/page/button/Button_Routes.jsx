import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Button from './page/Button';
import GroupButton from './page/GroupButton';
import Switch from './page/Switch';

function Button_Routes() {
    return (
        <>
            <Routes>
                <Route path="button" element={<Button />} />
                <Route path="group-button" element={<GroupButton />} />
                <Route path="switch" element={<Switch />} />
            </Routes>
        </>
    );
}

export default Button_Routes;
