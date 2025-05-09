import React from 'react';

/* Provider */
import { useMode } from '../provider/ModeContext';

/* Component */
import {
    SlMenu,
    SlButton,
    SlIconButton,
    SlSwitch,
} from '@shoelace-style/shoelace/dist/react';

/* Image */
import logo from '@/assets/img/logo.svg';

export const Header = () => {
    const { darkMode, setTheme } = useMode();

    return (
        <div className="header">
            <a className="logoButton" href="/">
                <img src={logo} alt="" />
            </a>
            <div className="navWrap">
                <ul className="navTitle">
                    <li className="navLi">
                        <h4>버튼</h4>
                        <div className="navMenu">
                            <SlMenu>
                                <SlButton
                                    href="/button/button"
                                    size="large"
                                    className="navButton"
                                >
                                    Default Button
                                </SlButton>

                                <SlButton
                                    href="/button/group-button"
                                    size="large"
                                    className="navButton"
                                >
                                    Group Button
                                </SlButton>

                                <SlButton
                                    href="/button/switch"
                                    size="large"
                                    className="navButton"
                                >
                                    Switch
                                </SlButton>
                            </SlMenu>
                        </div>
                    </li>
                    <li className="navLi">
                        <h4>셀렉트 & 인풋</h4>
                        <div className="navMenu">
                            <SlMenu>
                                <SlButton
                                    href="/select/select"
                                    size="large"
                                    className="navButton"
                                >
                                    Select
                                </SlButton>

                                <SlButton
                                    href="/select/input"
                                    size="large"
                                    className="navButton"
                                >
                                    Input
                                </SlButton>

                                <SlButton
                                    href="/select/textarea"
                                    size="large"
                                    className="navButton"
                                >
                                    Textarea
                                </SlButton>
                            </SlMenu>
                        </div>
                    </li>

                    <li className="navLi">
                        <h4>체크박스 & 라디오</h4>
                        <div className="navMenu">
                            <SlMenu>
                                <SlButton
                                    href="/checkbox/checkbox"
                                    size="large"
                                    className="navButton"
                                >
                                    CheckBox
                                </SlButton>

                                <SlButton
                                    href="/checkbox/radio"
                                    size="large"
                                    className="navButton"
                                >
                                    Radio
                                </SlButton>
                            </SlMenu>
                        </div>
                    </li>

                    <li className="navLi">
                        <h4>모달 ~ 아코디언</h4>
                        <div className="navMenu">
                            <SlMenu>
                                <SlButton
                                    href="/modal/modal"
                                    size="large"
                                    className="navButton"
                                >
                                    모달
                                </SlButton>
                                <SlButton
                                    href="/modal/drawer"
                                    size="large"
                                    className="navButton"
                                >
                                    Drawer
                                </SlButton>
                                <SlButton
                                    href="/modal/alert"
                                    size="large"
                                    className="navButton"
                                >
                                    Alert
                                </SlButton>
                                <SlButton
                                    href="/modal/tooltip"
                                    size="large"
                                    className="navButton"
                                >
                                    Tooltip
                                </SlButton>

                                <SlButton
                                    href="/modal/accordion"
                                    size="large"
                                    className="navButton"
                                >
                                    아코디언
                                </SlButton>
                            </SlMenu>
                        </div>
                    </li>

                    <li className="navLi">
                        <h4>Menu & Tab</h4>
                        <div className="navMenu">
                            <SlMenu>
                                <SlButton
                                    href="/menu/menu"
                                    size="large"
                                    className="navButton"
                                >
                                    Menu
                                </SlButton>
                                <SlButton
                                    href="/menu/tab"
                                    size="large"
                                    className="navButton"
                                >
                                    Tab
                                </SlButton>
                            </SlMenu>
                        </div>
                    </li>

                    <li className="navLi">
                        <h4>UI - UX</h4>
                        <div className="navMenu">
                            <SlMenu>
                                <SlButton
                                    href="/uiux/ux-input"
                                    size="large"
                                    className="navButton"
                                >
                                    UX-Input
                                </SlButton>
                                <SlButton
                                    href="/uiux/breadcrumb"
                                    size="large"
                                    className="navButton"
                                >
                                    Breadcrumb
                                </SlButton>
                                <SlButton
                                    href="/uiux/badge-tag"
                                    size="large"
                                    className="navButton"
                                >
                                    Badge & Tag
                                </SlButton>
                                <SlButton
                                    href="/uiux/dropdown"
                                    size="large"
                                    className="navButton"
                                >
                                    Dropdown
                                </SlButton>
                                <SlButton
                                    href="/uiux/icon"
                                    size="large"
                                    className="navButton"
                                >
                                    Icon
                                </SlButton>
                            </SlMenu>
                        </div>
                    </li>
                    <li className="navLi">
                        <h4>애니메이션</h4>
                        <div className="navMenu">
                            <SlMenu>
                                <SlButton
                                    href="/animation/animation"
                                    size="large"
                                    className="navButton"
                                >
                                    Animation
                                </SlButton>
                            </SlMenu>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mode">
                <SlIconButton
                    name="github"
                    href="https://github.com/shoelace-style/shoelace"
                    target="_blank"
                    className="linkIconButton"
                />

                <SlIconButton
                    name="book"
                    href="https://shoelace.style/"
                    target="_blank"
                    className="linkIconButton"
                />

                <SlSwitch
                    id="darkModeSwitch"
                    checked={darkMode === 'dark' ? true : false}
                    onSlChange={(e) => {
                        setTheme(e.target.checked ? 'dark' : 'light');
                    }}
                >
                    Dark Mode
                </SlSwitch>
            </div>
        </div>
    );
};
