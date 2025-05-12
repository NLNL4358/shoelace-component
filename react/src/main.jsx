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

/* Shoelace Icon 라이브러리 */
import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';

registerIconLibrary('default', {
    resolver: (name) =>
        `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/dist/assets/icons/${name}.svg`,
});

/* Provider */
import ModeProvider from '@/provider/ModeProvider.jsx';
import NavigationProvider from './provider/NavigationProvider.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ModeProvider>
            <NavigationProvider>
                <App />
            </NavigationProvider>
        </ModeProvider>
    </BrowserRouter>,
);
