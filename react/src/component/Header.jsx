import React from 'react';

/* Provider */
import { useMode } from '../provider/ModeProvider';
import { useNavigation } from '../provider/NavigationProvider';

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
    const { goTo } = useNavigation();

    return (
        <div className="header">
            <SlButton
                className="logoButton"
                onClick={() => {
                    goTo('/');
                }}
            >
                <img src={logo} alt="" />
            </SlButton>
            <div className="navWrap">
                <ul className="navTitle">
                    <li className="navLi">
                        <h4>버튼</h4>
                        <div className="navMenu">
                            <SlMenu>
                                <SlButton
                                    onClick={() => {
                                        goTo('/button/button');
                                    }}
                                    size="large"
                                    className="navButton"
                                >
                                    Default Button
                                </SlButton>

                                <SlButton
                                    onClick={() => {
                                        goTo('/button/group-button');
                                    }}
                                    size="large"
                                    className="navButton"
                                >
                                    Group Button
                                </SlButton>

                                <SlButton
                                    onClick={() => {
                                        goTo('/button/switch');
                                    }}
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
                                    onClick={() => {
                                        goTo('/select/select');
                                    }}
                                    size="large"
                                    className="navButton"
                                >
                                    Select
                                </SlButton>

                                <SlButton
                                    onClick={() => {
                                        goTo('/select/input');
                                    }}
                                    size="large"
                                    className="navButton"
                                >
                                    Input
                                </SlButton>

                                <SlButton
                                    onClick={() => {
                                        goTo('/select/textarea');
                                    }}
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
                                    onClick={() => {
                                        goTo('/checkbox/checkbox');
                                    }}
                                    size="large"
                                    className="navButton"
                                >
                                    CheckBox
                                </SlButton>

                                <SlButton
                                    onClick={() => {
                                        goTo('/checkbox/radio');
                                    }}
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
                                    onClick={() => {
                                        goTo('/modal/modal');
                                    }}
                                    size="large"
                                    className="navButton"
                                >
                                    모달
                                </SlButton>
                                <SlButton
                                    onClick={() => {
                                        goTo('/modal/drawer');
                                    }}
                                    size="large"
                                    className="navButton"
                                >
                                    Drawer
                                </SlButton>
                                <SlButton
                                    onClick={() => {
                                        goTo('/modal/alert');
                                    }}
                                    size="large"
                                    className="navButton"
                                >
                                    Alert
                                </SlButton>
                                <SlButton
                                    onClick={() => {
                                        goTo('/modal/tooltip');
                                    }}
                                    size="large"
                                    className="navButton"
                                >
                                    Tooltip
                                </SlButton>

                                <SlButton
                                    onClick={() => {
                                        goTo('/modal/accordion');
                                    }}
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
                                    onClick={() => {
                                        goTo('/menu/menu');
                                    }}
                                    size="large"
                                    className="navButton"
                                >
                                    Menu
                                </SlButton>
                                <SlButton
                                    onClick={() => {
                                        goTo('/menu/tab');
                                    }}
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
                                    onClick={() => {
                                        goTo('/uiux/ux-input');
                                    }}
                                    size="large"
                                    className="navButton"
                                >
                                    UX-Input
                                </SlButton>
                                <SlButton
                                    onClick={() => {
                                        goTo('/uiux/breadcrumb');
                                    }}
                                    size="large"
                                    className="navButton"
                                >
                                    Breadcrumb
                                </SlButton>
                                <SlButton
                                    onClick={() => {
                                        goTo('/uiux/badge-tag');
                                    }}
                                    size="large"
                                    className="navButton"
                                >
                                    Badge & Tag
                                </SlButton>
                                <SlButton
                                    onClick={() => {
                                        goTo('/uiux/dropdown');
                                    }}
                                    size="large"
                                    className="navButton"
                                >
                                    Dropdown
                                </SlButton>
                                <SlButton
                                    onClick={() => {
                                        goTo('/uiux/icon');
                                    }}
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
                                    onClick={() => {
                                        goTo('/animation/animation');
                                    }}
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
