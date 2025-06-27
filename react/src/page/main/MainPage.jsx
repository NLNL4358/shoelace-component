import React, { useEffect } from 'react';
import { useCode } from '@/provider/CodeViewerProvider';

import {
    SlIcon,
    SlDetails,
    SlRadioGroup,
    SlRadio,
    SlSelect,
    SlOption,
    SlDivider,
} from '@shoelace-style/shoelace/dist/react';

import mainLogo from '@/assets/img/logo.svg';

function MainPage() {
    const { highlight } = useCode();

    useEffect(() => {
        highlight();
    }, [highlight]);

    return (
        <div className="indexMain">
            <div className="title">
                <img className="mainLogo" src={mainLogo} alt="" />
                <h2>Shoelace 사용 가이드 - React</h2>
                <h4>
                    해당 페이지는 Shoelace 라이브러리에서 제공되는 UI,UX
                    요소들의 소개와 사용법들을 기록한 페이지입니다.
                    <br />
                    헤더에서 각 UI,UX 요소들을 정리한 페이지로 이동하여 확인할
                    수 있습니다. <br />
                    <br /> * 보다 정확한 내용이 필요할 땐 헤더의 아이콘을 클릭해
                    공식 페이지를 참조하길 바랍니다.
                </h4>
            </div>
            <div className="install">
                <h3>
                    <SlIcon name="cloud-download"></SlIcon>Shoelace 라이브러리를
                    받아오는법
                </h3>

                <SlDetails summary="How to install Shoelace Library">
                    <h5>
                        Shoelace Library를 사용하려면 React의 경우 npm 을 이용해
                        설치하여야 한다.
                    </h5>

                    <pre>
                        <code className="language-bash">{`npm install @shoelace-style/shoelace`}</code>
                    </pre>
                </SlDetails>
            </div>
            <div className="style">
                <h3>
                    <SlIcon name="filetype-css"></SlIcon>Shoelace 컴포넌트의 CSS
                    Style 적용법
                </h3>
                <SlDetails summary="How to style Shoelace DOM with CSS">
                    <h5>
                        Shoelace 컴포넌트는 내부적으로 Shadow DOM을 사용하기
                        때문에, CSS 선택자 .red-color-radio 처럼 외부 스타일로
                        내부 요소를 직접 조작하는 건 기본적으로 불가능하다
                    </h5>
                    <h5>외부 스타일은 Shadow DOM 내부까지 접근하지못함</h5>
                    <div>
                        <span>※</span>
                        <span
                            style={{
                                color: 'var(--sl-color-red-600)',
                                textDecoration: 'underline',
                            }}
                        >
                            잘못된
                        </span>
                        <span> 접근 방법※</span>
                        <SlRadioGroup value="1">
                            <SlRadio value="1">Shoelace</SlRadio>
                            <SlRadio value="2">Shoelace</SlRadio>
                            <SlRadio value="3">Shoelace</SlRadio>
                        </SlRadioGroup>
                        <pre>
                            <code className="language-markup">{`
    <style>
        .redRadioGroup sl-radio {
            background-color: red; /* 적용안됨 */
        }
    </style>

    <SlRadioGroup value="1" className="redRadioGroup">
        <SlRadio value="1">Shoelace</SlRadio>
        <SlRadio value="2">Shoelace</SlRadio>
        <SlRadio value="3">Shoelace</SlRadio>
    </SlRadioGroup>
                            `}</code>
                        </pre>
                        <h4>
                            &nbsp;&nbsp;&nbsp;
                            <SlIcon
                                name="arrow-90deg-up"
                                aria-hidden="true"
                                library="default"
                            ></SlIcon>
                            Shoelace의 태그 그대로 Style을 적용하려고 했지만
                            적용되지 않은 모습
                        </h4>
                    </div>
                    <SlDivider />
                    <h5>
                        다른 방법으로 접근하여야한다. 2가지 방법이 있는데 아래와
                        같다
                    </h5>
                    <h5>
                        <SlIcon
                            name="1-circle"
                            aria-hidden="true"
                            library="default"
                        ></SlIcon>
                        shoelace 컴포넌트들이 가지는 part를 이용해서 CSS의
                        ::part() 를 이용하는 방법
                    </h5>
                    <div>
                        <SlRadioGroup value="1" className="redRadioGroup">
                            <SlRadio value="1">Shoelace</SlRadio>
                            <SlRadio value="2">Shoelace</SlRadio>
                            <SlRadio value="3">Shoelace</SlRadio>
                        </SlRadioGroup>

                        <pre>
                            <code className="language-markup">{`
    <style>
        .redRadioGroup sl-radio::part(control--checked) {
            background-color: red;
            border-color: red;
        }
    </style>

    <SlRadioGroup value="1" className="redRadioGroup">
        <SlRadio value="1">Shoelace</SlRadio>
        <SlRadio value="2">Shoelace</SlRadio>
        <SlRadio value="3">Shoelace</SlRadio>
    </SlRadioGroup>
                            `}</code>
                        </pre>
                        <h4>
                            &nbsp;&nbsp;&nbsp;
                            <SlIcon
                                name="arrow-90deg-up"
                                aria-hidden="true"
                                library="default"
                            ></SlIcon>
                            ::part() 를 이용하여 Shoelace 내부의 Shadow DOM 까지
                            접근하여 스타일이 적용된 모습
                        </h4>
                    </div>
                    <SlDivider />
                    <h5>
                        <SlIcon
                            name="2-circle"
                            aria-hidden="true"
                            library="default"
                        ></SlIcon>
                        css의 속성 선택자 sl-component[속성='~'] 를 이용하는
                        방법
                    </h5>

                    <SlSelect
                        class="red-select"
                        label="Shoelace"
                        placeholder="Select One"
                    >
                        <SlOption value="option-1">Option 1</SlOption>
                        <SlOption value="option-2">Option 2</SlOption>
                        <SlOption value="option-3">Option 3</SlOption>
                    </SlSelect>
                    <h4>
                        &nbsp;&nbsp;&nbsp;
                        <SlIcon
                            name="arrow-90deg-up"
                            aria-hidden="true"
                            library="default"
                        ></SlIcon>
                        sl-component[속성=''] 를 이용하여 접근 하여 내부DOM을
                        특정하여 스타일이 적용된 모습
                    </h4>
                </SlDetails>
            </div>
            <div className="darkMode">
                <h3>
                    <SlIcon
                        name="moon-stars"
                        aria-hidden="true"
                        library="default"
                    ></SlIcon>
                    다크모드 사용법
                </h3>
                <SlDetails summary="How to install dark-mode using Shoelace">
                    <h5>
                        Shoelace에서는 DarkMode를 사용하는 방법을 제공하고있다.
                        <br /> 단, 아래의 단계가 필요하다.
                    </h5>
                    <h5>
                        <SlIcon
                            name="1-circle"
                            aria-hidden="true"
                            library="default"
                        ></SlIcon>
                        우선 Shoelace에서 제공하는 Light &amp; Dark Theme를 위한
                        CSS를 Import해준다
                    </h5>
                    <pre>
                        <code className="language-js">{`
    React의 경우 index.js 혹은 Vite를 사용한다면 main.jsx 에서 import 해준다

    /* Shoelace CSS */
    import '@shoelace-style/shoelace/dist/themes/light.css';
    import '@shoelace-style/shoelace/dist/themes/dark.css';
                        `}</code>
                    </pre>

                    <h5>
                        <SlIcon
                            name="2-circle"
                            aria-hidden="true"
                            library="default"
                        ></SlIcon>
                        전역으로 사용하는 reset.css에 다음과 같이
                        Light-Theme일때의 색상과 Dark-Theme일때의 색상을
                        명시해준다
                    </h5>
                    <pre>
                        <code className="language-css">{`
    reset.css
        
    /* 라이트 모드 컬러 */
    .sl-theme-light {
        /* background - color */
        --bg-color: #ffffff;

        /* text - color */
        --text-body-color: #555555;
        --text-title-color: #1d1d1d;
        --text-disable-color: #8e8e8e;

        /* border color */
        --border-gray-color: rgb(136, 136, 136);

        /* button color */
        --button-primary-color: rgb(59, 105, 255);

        /* icon color */
        --icon-color: var(--sl-color-neutral-700);
    }

    /* 다크 모드 컬러 */
    .sl-theme-dark {
        /* background - color */
        --bg-color: #202020;

        /* text - color */
        --text-body-color: #bdbdbd;
        --text-title-color: #eeeeee;
        --text-disable-color: #8e8e8e;

        /* border color */
        --border-gray-color: #888;

        /* button color */
        --button-primary-color: rgb(75, 132, 255);

        /* icon color */
        --icon-color: var(--sl-color-neutral-900);
    }
                    `}</code>
                    </pre>

                    <h5>
                        <SlIcon
                            name="3-circle"
                            aria-hidden="true"
                            library="default"
                        ></SlIcon>
                        위에서 선언한 컬러를 전역으로 사용하기위해 동일하게
                        reset.css에서 아래와같이 기본 html 요소들에 스타일을
                        적용시킨다.
                    </h5>
                    <pre>
                        <code className="language-css">{`
    reset.css

    /* 실제 적용되는 부분 */
    body {
        background-color: var(--bg-color);
        color: var(--text-body-color);
        transition: background-color 0.3s ease, color 0.3s ease;
    }
    
    h1,h2,h3,h4,h5,p,span,small,div{
        color: var(--text-title-color);
    }
                        `}</code>
                    </pre>

                    <h5>
                        <SlIcon
                            name="4-circle"
                            aria-hidden="true"
                            library="default"
                        ></SlIcon>
                        페이지에서 Theme의 변경을 저장하고 적용시키기 위해서는
                        JS가 필요하다. React에서는 Provider.jsx 를 이용하여
                        dark-mode를 구현할 것 이다.
                    </h5>
                </SlDetails>
            </div>
            1. shoelace 설치하는법 2. shoelace 컴포넌트의 CSS Style 적용법 3.
            다크모드 사용법 4. 왜 shoelace의 컴포넌트를 리액트식으로
            바꿔야하는지 - props나 상태관리를 위해서 5. react에서 shoelace를
            사용할때 Icon라이브러리를 사용하려면 import해야함
        </div>
    );
}

export default MainPage;
