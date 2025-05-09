import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

/* 전역 CSS */
import '@/css/index.css';
import '@/css/reset.css';
import '@/css/shoelace.css';

/* Shoelace CSS */
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';

/* Shoelace 컴포넌트 */
import '@shoelace-style/shoelace/dist/shoelace.js';

/* Provider */
import ModeProvider from '@/provider/ModeContext.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ModeProvider>
            <App />
        </ModeProvider>
    </BrowserRouter>,
);
