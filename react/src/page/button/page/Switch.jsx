import React, { useEffect, useState } from 'react';
import { useCode } from '@/provider/CodeViewerProvider';
import {
    SlSwitch,
    SlDivider,
    SlInput,
    SlSelect,
    SlOption,
    SlDetails,
} from '@shoelace-style/shoelace/dist/react';
import SwitchComponent from '@/component/SwitchComponent';

function Switch() {
    const { highlight } = useCode();

    const [custom, setCustom] = useState({
        className: '',
        checked: false,
        text: '커스텀 스위치',
        helpText: 'help text',
        size: 'medium',
        disabled: false,
    });

    /* function */
    const customChanger = (key, value) => {
        setCustom((prev) => {
            const nextState = { ...prev };
            nextState[key] = value;
            return nextState;
        });
    };

    useEffect(() => {
        highlight();
    }, [highlight]);

    return (
        <>
            <div className="section">
                <h3 className="componentTitle">KJS 스위치 컴포넌트</h3>
                <div className="componentWrap">
                    <div className="">
                        <div className="viewPart">
                            <SwitchComponent
                                className={custom?.className}
                                text={custom?.text}
                                checked={custom?.checked}
                                helpText={custom?.helpText}
                                size={custom?.size}
                                disabled={custom?.disabled}
                                eventFunction={(v) => {
                                    setCustom((prev) => ({
                                        ...prev,
                                        checked: v,
                                    }));
                                }}
                            />
                            <SlDivider />
                            <div className="wrap">
                                <SlInput
                                    label="className 입력"
                                    value={custom?.className}
                                    onSlInput={(e) => {
                                        customChanger(
                                            'className',
                                            e.target.value,
                                        );
                                    }}
                                />
                            </div>
                            <div className="wrap">
                                <SlInput
                                    label="Text 입력"
                                    value={custom?.text}
                                    onSlInput={(e) => {
                                        customChanger('text', e.target.value);
                                    }}
                                />
                            </div>
                            <div className="wrap">
                                <SlInput
                                    label="help-text 입력"
                                    value={custom?.helpText}
                                    onSlInput={(e) => {
                                        customChanger(
                                            'helpText',
                                            e.target.value,
                                        );
                                    }}
                                />
                            </div>
                            <div className="wrap">
                                <SlSelect
                                    label="size 선택"
                                    value={custom?.size}
                                    onSlChange={(e) => {
                                        customChanger('size', e.target.value);
                                    }}
                                >
                                    <SlOption value="small">small</SlOption>
                                    <SlOption value="medium">medium</SlOption>
                                    <SlOption value="large">large</SlOption>
                                </SlSelect>
                            </div>
                        </div>
                        <div className="codePart">
                            <SlDetails summary="Component Code">
                                <pre>
                                    <code className="language-js">{`
    import React from 'react';
    
    import { SlSwitch } from '@shoelace-style/shoelace/dist/react';
    
    function SwitchComponent(props) {
        /**
         * checked : 스위치의 on/off를 결정 == value 와 같은 의미
         * className : 커스텀 스위치의 추가 className
         * style : 커스텀 스위치의 추가 style
         * text : 스위치에 추가될 텍스트
         * helpText : 스위치 하단에 추가될 help텍스트
         * size : 'small' / 'medium' / 'large' 중에서 선택
         * disabled : 비활성화 true || false
         * required : 필수인가? true || false
         * eventFunction : checked 값을 이용한 호출 함수
         */
        const {
            checked = false,
            className = '',
            style = {},
            text = '',
            helpText = '',
            size = 'medium',
            disabled = false,
            required = null,
            eventFunction = () => {},
        } = props;
        return (
            <SlSwitch
                className={\`customSwitch \${className}\`}
                style={style}
                size={size}
                checked={checked}
                disabled={disabled}
                help-text={helpText}
                required={required}
                onSlChange={(e) => {
                    eventFunction(e.target.checked);
                }}
            >
                {text}
            </SlSwitch>
        );
    }
    
    export default SwitchComponent;
    
                            `}</code>
                                </pre>
                            </SlDetails>
                        </div>
                    </div>
                </div>
            </div>
            <SlDivider></SlDivider>
            <div className="section">
                <h3 className="componentTitle">스위치</h3>
                <div className="componentWrap">
                    <div className="">
                        <div className="viewPart">
                            <h5>기초적인 Switch</h5>
                            <SlSwitch>Switch</SlSwitch>
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SlSwitch>Switch</SlSwitch>
                    `}</code>
                            </pre>
                        </div>
                    </div>

                    <div className="">
                        <div className="viewPart">
                            <h5>checked 되어있는 Switch - checked 속성사용</h5>
                            <SlSwitch checked>Checked</SlSwitch>
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SlSwitch checked>Checked</SlSwitch>
                        `}</code>
                            </pre>
                        </div>
                    </div>

                    <div className="">
                        <div className="viewPart">
                            <h5>Disabled Switch - disabled 속성사용</h5>
                            <SlSwitch disabled>Disabled</SlSwitch>
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SlSwitch disabled>Disabled</SlSwitch>
                        `}</code>
                            </pre>
                        </div>
                    </div>

                    <div className="">
                        <div className="viewPart">
                            <h5>Switch 사이즈 - size 속성사용</h5>
                            <div className="wrap">
                                <SlSwitch size="small">Small</SlSwitch>
                                <SlSwitch size="medium">Medium</SlSwitch>
                                <SlSwitch size="large">Large</SlSwitch>
                            </div>
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SlSwitch size="small">Small</SlSwitch>
    <SlSwitch size="medium">Medium</SlSwitch>
    <SlSwitch size="large">Large</SlSwitch>
                        `}</code>
                            </pre>
                        </div>
                    </div>

                    <div className="">
                        <div className="viewPart">
                            <h5>
                                Custom Size - style 에서 --width, --height,
                                --thumb-size 사용
                            </h5>
                            <div className="wrap">
                                <SlSwitch
                                    style={{
                                        '--width': '80px',
                                        '--height': '32px',
                                        '--thumb-size': '26px',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SlSwitch
        style={{
        '--width': '80px',
        '--height': '32px',
        '--thumb-size': '26px'
        }}
    />
                        `}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Switch;
