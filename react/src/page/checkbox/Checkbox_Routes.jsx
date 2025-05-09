import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CheckBox from './page/CheckBox';
import Radio from './page/Radio';

function Checkbox_Routes() {
    return (
        <>
            <Routes>
                <Route path="checkbox" element={<CheckBox />} />
                <Route path="radio" element={<Radio />} />
            </Routes>
        </>
    );
}

export default Checkbox_Routes;
