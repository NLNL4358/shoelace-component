import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Input from './page/Input';
import Select from './page/Select';
import Textarea from './page/Textarea';

function Select_Routes() {
    return (
        <>
            <Routes>
                <Route path="select" element={<Select />} />
                <Route path="input" element={<Input />} />
                <Route path="textarea" element={<Textarea />} />
            </Routes>
        </>
    );
}

export default Select_Routes;
