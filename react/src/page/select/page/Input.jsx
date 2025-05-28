import React, { useState, useEffect } from 'react';
import { useCode } from '@/provider/CodeViewerProvider';

import {
    SlInput,
    SlDivider,
    SlSwitch,
    SlDetails,
    SlIcon,
} from '@shoelace-style/shoelace/dist/react';
import InputComponent from '../../../component/InputComponent';
import SwitchComponent from '../../../component/SwitchComponent';
import SelectComponent from '../../../component/SelectComponent';

function Input() {
    const INPUT_TYPE = [
        {
            text: 'text',
            value: 'text',
        },
        {
            text: 'date',
            value: 'date',
        },
        {
            text: 'time',
            value: 'time',
        },
        {
            text: 'email',
            value: 'email',
        },
        {
            text: 'number',
            value: 'number',
        },
        {
            text: 'password',
            value: 'password',
        },
        {
            text: 'search',
            value: 'search',
        },
    ];

    const ICONS = [
        '',
        'asterisk',
        'chat-dots',
        'wechat',
        'messenger',
        'three-dots',
        'emoji-laughing',
    ];

    const { highlight } = useCode();

    const [custom, setCustom] = useState({
        value: '',
        label: '',
        placeholder: '',
        helpText: '',
        clearable: false,
        passwordToggle: false,
        filled: false,
        readonly: false,
        disabled: false,
        required: false,
        type: '',
        prefix: null,
        suffix: null,
    });

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
                <h3 className="componentTitle">KJS Input 컴포넌트</h3>
                <div className="componentWrap">
                    <div className="">
                        <div className="viewPart">
                            <InputComponent
                                value={custom?.value}
                                label={custom?.label}
                                placeholder={custom?.placeholder}
                                helpText={custom?.helpText}
                                clearable={custom?.clearable}
                                passwordToggle={custom?.passwordToggle}
                                filled={custom?.filled}
                                readonly={custom?.readonly}
                                disabled={custom?.disabled}
                                required={custom?.required}
                                type={custom?.type}
                                prefix={custom?.prefix}
                                suffix={custom?.suffix}
                                eventFunction={(v) => {
                                    customChanger('value', v);
                                }}
                            />
                            <SlDivider />
                            <div className="wrap">
                                <SlInput
                                    value={custom?.label}
                                    label="label 입력"
                                    onSlInput={(e) => {
                                        customChanger('label', e.target.value);
                                    }}
                                />
                            </div>
                            <div className="wrap">
                                <SlInput
                                    value={custom?.helpText}
                                    label="help-text 입력"
                                    onSlInput={(e) => {
                                        customChanger(
                                            'helpText',
                                            e.target.value,
                                        );
                                    }}
                                />
                            </div>
                            <div className="wrap">
                                <SlInput
                                    value={custom?.placeholder}
                                    label="place-holder 입력"
                                    onSlInput={(e) => {
                                        customChanger(
                                            'placeholder',
                                            e.target.value,
                                        );
                                    }}
                                />
                            </div>
                            <div className="wrap">
                                <SwitchComponent
                                    helpText={'clearable'}
                                    checked={custom?.clearable}
                                    eventFunction={(v) => {
                                        customChanger('clearable', v);
                                    }}
                                />
                                <SwitchComponent
                                    helpText={'password'}
                                    checked={custom?.passwordToggle}
                                    eventFunction={(v) => {
                                        customChanger('passwordToggle', v);
                                    }}
                                />
                                <SwitchComponent
                                    helpText={'filled'}
                                    checked={custom?.filled}
                                    eventFunction={(v) => {
                                        customChanger('filled', v);
                                    }}
                                />
                                <SwitchComponent
                                    helpText={'readonly'}
                                    checked={custom?.readonly}
                                    eventFunction={(v) => {
                                        customChanger('readonly', v);
                                    }}
                                />
                                <SwitchComponent
                                    helpText={'disabled'}
                                    checked={custom?.disabled}
                                    eventFunction={(v) => {
                                        customChanger('disabled', v);
                                    }}
                                />
                                <SwitchComponent
                                    helpText={'required'}
                                    checked={custom?.required}
                                    eventFunction={(v) => {
                                        customChanger('required', v);
                                    }}
                                />
                            </div>
                            <div className="wrap">
                                <SelectComponent
                                    label={'type 선택'}
                                    initValue={'text'}
                                    options={INPUT_TYPE}
                                    eventFunction={(v) => {
                                        customChanger('type', v);
                                    }}
                                />
                            </div>
                            <div className="wrap">
                                <SelectComponent
                                    label={'prefix 아이콘 선택'}
                                    options={ICONS.map((item) => ({
                                        text: item,
                                        value: item,
                                    }))}
                                    eventFunction={(v) => {
                                        customChanger('prefix', v);
                                    }}
                                />
                                <SelectComponent
                                    label={'suffix 아이콘 선택'}
                                    options={ICONS.map((item) => ({
                                        text: item,
                                        value: item,
                                    }))}
                                    eventFunction={(v) => {
                                        customChanger('suffix', v);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="codePart">
                            <SlDetails summary="Component Code">
                                <pre>
                                    <code className="language-js">{`
    import React from 'react';
    import { SlInput, SlIcon } from '@shoelace-style/shoelace/dist/react';

    function InputComponent(props) {
        /**
         * style : 커스텀 input의 추가 style
         * value : 커스텀 input의 value
         * label : 위에 표시될 label
         * placeholder : placeholder
         * helpText : 아래 표시될 help-text
         * clearable : 입력된 값을 초기화하는 clearable버튼 true || false
         * passwordToggle : type이 password이며 가시화/비가시화 할 수 있는지 true || false
         * filled : 채워진 스타일의 input 인지? true || false
         * readonly : 읽기 전용인지? true || false
         * disabled : disabled 인지? true || false
         * required : 필수 요소인지? true || false
         * type : 타입이 무엇인지 'date' | 'datetime-local' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url'
         * prefix : 왼쪽에 있을 Icon name 문자열
         * suffix : 오른쪽에 있을 Icon name 문자열
         * eventFunction : input이 일어날때마다 호출되는 함수로 value를 매개변수로 전달함
         */
        const {
            style = {},
            value = '',
            label = '',
            placeholder = '',
            helpText = '',
            clearable = false,
            passwordToggle = false,
            filled = false,
            readonly = false,
            disabled = false,
            required = false,
            type = '',
            prefix = null /* String */,
            suffix = null /* String */,
            eventFunction = () => {},
        } = props;
        return (
            <SlInput
                style={style}
                value={value}
                label={label}
                placeholder={placeholder}
                help-text={helpText}
                clearable={clearable}
                password-toggle={passwordToggle}
                filled={filled}
                readonly={readonly}
                disabled={disabled}
                required={required}
                type={passwordToggle === true ? 'password' : type}
                onSlInput={(e) => {
                    eventFunction(e.target.value);
                }}
            >
                {prefix && (
                    <SlIcon
                        name={prefix}
                        slot="prefix"
                        style={{ marginLeft: '1rem' }}
                    ></SlIcon>
                )}
                {suffix && (
                    <SlIcon
                        name={suffix}
                        slot="suffix"
                        style={{ marginRight: '1rem' }}
                    ></SlIcon>
                )}
            </SlInput>
        );
    }

    export default InputComponent;
                                `}</code>
                                </pre>
                            </SlDetails>
                        </div>
                    </div>
                </div>
            </div>
            <SlDivider />
            <div className="section">
                <h3 className="componentTitle">Input</h3>
                <div className="componentWrap">
                    <div className="">
                        <div className="viewPart">
                            <h5>기본 인풋</h5>
                            <SlInput />
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SlInput />
                                    `}</code>
                            </pre>
                        </div>
                    </div>
                    <div className="">
                        <div className="viewPart">
                            <h5>Label 인풋</h5>
                            <SlInput label="이름을 입력해주세요" />
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SlInput label="이름을 입력해주세요"/>
                                `}</code>
                            </pre>
                        </div>
                    </div>
                    <div className="">
                        <div className="viewPart">
                            <h5>Help Text</h5>
                            <SlInput help-text="이곳에는 help 텍스트를 입력할 수 있습니다." />
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SlInput help-text="이곳에는 help 텍스트를 입력할 수 있습니다."/>
                            `}</code>
                            </pre>
                        </div>
                    </div>
                    <div className="">
                        <div className="viewPart">
                            <h5>Placeholder</h5>
                            <SlInput placeholder="플레이스 홀더" />
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SLInput placeholder="플레이스 홀더"/>
                            `}</code>
                            </pre>
                        </div>
                    </div>
                    <div className="">
                        <div className="viewPart">
                            <h5>Clearable</h5>
                            <SlInput clearable={true} />
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SlInput clearable={true} />
                            `}</code>
                            </pre>
                        </div>
                    </div>
                    <div className="">
                        <div className="viewPart">
                            <h5>toggle hide</h5>
                            <SlInput type="password" password-toggle={true} />
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SlInput type="password" password-toggle={true} />
                            `}</code>
                            </pre>
                        </div>
                    </div>
                    <div className="">
                        <div className="viewPart">
                            <h5>filled input</h5>
                            <SlInput filled={true}></SlInput>
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SlInput filled={true}></SlInput>
                            `}</code>
                            </pre>
                        </div>
                    </div>
                    <div className="">
                        <div className="viewPart">
                            <h5>readonly</h5>
                            <SlInput readonly={true}></SlInput>
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SlInput readonly={true}></SlInput>
                            `}</code>
                            </pre>
                        </div>
                    </div>
                    <div className="">
                        <div className="viewPart">
                            <h5>Disabled</h5>
                            <SlInput disabled={true} />
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SlInput disabled={true}/>
                            `}</code>
                            </pre>
                        </div>
                    </div>
                    <div className="">
                        <div className="viewPart">
                            <h5>input 타입</h5>
                            <SlInput type="Email" />
                            <br />
                            <SlInput type="number" />
                            <br />
                            <SlInput type="date" />
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SlInput type="Email" />
    <SlInput type="number" />
    <SlInput type="date" />
                            `}</code>
                            </pre>
                        </div>
                    </div>
                    <div className="">
                        <div className="viewPart">
                            <h5>prefix & suffix Icon</h5>
                            <SlInput>
                                <SlIcon
                                    name="house"
                                    slot="prefix"
                                    style={{ 'margin-left': '1rem' }}
                                />
                                <SlIcon
                                    name="chat"
                                    slot="suffix"
                                    style={{ 'margin-right': '1rem' }}
                                />
                            </SlInput>
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SlInput>
        <SlIcon
            name="house"
            slot="prefix"
            style={{ 'margin-left': '1rem' }}
        />
        <SlIcon
            name="chat"
            slot="suffix"
            style={{ 'margin-right': '1rem' }}
        />
    </SlInput>
                            `}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Input;
