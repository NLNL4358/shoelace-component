/** 라이트 모드 , 다크 모드를 바꾸기위한 script */

/* DOM */
const html = document.documentElement;
const darkModeSwitch = document.getElementById('darkModeSwitch');

/* function */
const getLocalStorage_darkMode = () => {
    let mode = window.localStorage.getItem('isDarkMode');
    if(mode === null){ //localStorage가 없다 = 첫 방문

        /* 초기 테마 설정 (시스템 테마 감지) */
        mode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    darkModeSwitch.checked = mode === 'dark' ? true : false;
    setTheme(mode)
}

const getCurrentTheme = () => {
    // 현재 테마 확인
    return html.classList.contains('sl-theme-dark') ? 'dark' : 'light';
};

const setTheme = (mode) => {
    // 테마 설정 함수
    html.classList.remove('sl-theme-light', 'sl-theme-dark');
    html.classList.add(`sl-theme-${mode}`);

    window.localStorage.setItem('isDarkMode', mode);
};

/* Event */
darkModeSwitch.addEventListener('sl-change', () => {
    // 토글 이벤트 연결
    const isDarkMode = darkModeSwitch.checked;
    setTheme(isDarkMode ? 'dark' : 'light');
});

/* init */
getLocalStorage_darkMode()
