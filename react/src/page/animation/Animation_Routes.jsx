import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* 페이지 */
import Animation from './page/Animation';

function Animation_Routes() {
    return (
        <>
            <Routes>
                <Route path="animation" element={<Animation />} />
            </Routes>
        </>
    );
}

export default Animation_Routes;
