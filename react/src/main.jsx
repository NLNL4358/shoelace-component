import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

/* 전역 CSS */
import '@/css/index.css';
import '@/css/reset.css';
import '@/css/shoelace.css';
import '@/css/customShoelace.css';

/* Shoelace CSS */
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';

/* Shoelace Icon 라이브러리 */
import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';

registerIconLibrary('default', {
    resolver: (name) =>
        `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/dist/assets/icons/${name}.svg`,
});

/* Provider */
import ModeProvider from '@/provider/ModeProvider.jsx'; /* 다크모드 */
import NavigationProvider from './provider/NavigationProvider.jsx'; /* 네비게이션 */
import CodeViewerProvider from './provider/CodeViewerProvider.jsx'; /* 코드뷰어 */

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ModeProvider>
            <NavigationProvider>
                <CodeViewerProvider>
                    <App />
                </CodeViewerProvider>
            </NavigationProvider>
        </ModeProvider>
    </BrowserRouter>,
);
