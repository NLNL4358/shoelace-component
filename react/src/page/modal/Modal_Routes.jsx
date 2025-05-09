import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Modal from './page/Modal';
import Drawer from './page/Drawer';
import Alert from './page/Alert';
import Tooltip from './page/Tooltip';
import Accordion from './page/Accordion';

function Modal_Routes() {
    return (
        <>
            <Routes>
                <Route path="modal" element={<Modal />} />
                <Route path="drawer" element={<Drawer />} />
                <Route path="alert" element={<Alert />} />
                <Route path="tooltip" element={<Tooltip />} />
                <Route path="accordion" element={<Accordion />} />
            </Routes>
        </>
    );
}

export default Modal_Routes;
