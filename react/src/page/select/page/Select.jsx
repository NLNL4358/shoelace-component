import React, { useState, useEffect } from 'react';
import { useCode } from '@/provider/CodeViewerProvider';

import {
    SlSelect,
    SlOption,
    SlDivider,
    SlDetails,
    SlInput,
    SlIcon,
} from '@shoelace-style/shoelace/dist/react';

import SelectComponent from '../../../component/SelectComponent';

function Select() {
    const { highlight } = useCode();

    const [optionState, setOptionState] = useState({
        className: '',
        options: [
            { text: 'one', value: '1' },
            { text: 'two', value: '2' },
            { text: 'three', value: '3' },
        ],
        label: 'custom label',
        helpText: 'custom help-text',
        placeholder: 'custom placeholder',
    });
    const [selectValue, setSelectValue] = useState('1');

    const selectFunction = (value) => {
        setSelectValue(value);
    };

    useEffect(() => {
        highlight();
    }, [highlight]);

    const RedSelectStyle = () => (
        <style>
            {`
            .red-select sl-option::part(base):hover{
                /* hover된 option */
                background-color: var(--sl-color-red-200);
            }
            .red-select sl-option[tabindex="0"]::part(base),
            .red-select sl-option[tabindex="0"]::part(base):hover {
                /* 선택된 option */
                background-color: var(--sl-color-red-500);
            }`}
        </style>
    );

    return (
        <>
            <div className="section">
                <h3 className="componentTitle">KJS Select 컴포넌트</h3>
                <div className="componentWrap">
                    <div className="">
                        <div className="viewPart">
                            <SelectComponent
                                className={optionState?.className}
                                initValue={'1'}
                                options={optionState?.options}
                                label={optionState?.label}
                                helpText={optionState?.helpText}
                                placeholder={optionState?.placeholder}
                                eventFunction={(v) => {
                                    selectFunction(v);
                                }}
                            ></SelectComponent>
                            <SlDivider></SlDivider>
                            <SlInput
                                label="input className"
                                value={optionState?.className}
                                onSlInput={(e) => {
                                    setOptionState((prev) => ({
                                        ...prev,
                                        className: e.target.value,
                                    }));
                                }}
                            ></SlInput>
                            <SlInput
                                label="input label"
                                value={optionState?.label}
                                onSlInput={(e) => {
                                    setOptionState((prev) => ({
                                        ...prev,
                                        label: e.target.value,
                                    }));
                                }}
                            ></SlInput>
                            <SlInput
                                label="input helpText"
                                value={optionState?.helpText}
                                onSlInput={(e) => {
                                    setOptionState((prev) => ({
                                        ...prev,
                                        helpText: e.target.value,
                                    }));
                                }}
                            ></SlInput>
                            <SlInput
                                label="input placeholder"
                                value={optionState?.placeholder}
                                onSlInput={(e) => {
                                    setOptionState((prev) => ({
                                        ...prev,
                                        placeholder: e.target.value,
                                    }));
                                }}
                            ></SlInput>
                            <SlDivider></SlDivider>
                            <h5>선택 값 : {selectValue}</h5>
                        </div>

                        <div className="codePart">
                            <SlDetails summary="Code View">
                                <pre>
                                    <code className="language-js">{`
    import React from 'react';
    
    import { SlSelect, SlOption } from '@shoelace-style/shoelace/dist/react';
    
    function SelectComponent(props) {
        /**
         * className : 커스텀 Select의 추가 className
         * style : 커스텀 select의 추가 style
         * initValue : 초기 값으로 미리선택될 값
         * options : select가 가지는 option
            [
                {
                    text    : option의 텍스트
                    value   : option의 값
                },
            ],
         * label : select에 표시될 label
         * helpText : select에 표시될 help-text
         * placeholder : select에 표시될 placeholder
         * eventFunction : select를 선택될때마다 호출될 함수
         */
        const {
            className = '',
            style = {},
            initValue = '',
            options = [
                {
                    text: '',
                    value: '',
                },
            ],
            label = null,
            helpText = null,
            placeholder = '',
            eventFunction = () => {},
        } = props;
    
        return (
            <SlSelect
                className={\`customSelect \${className}\`}
                style={style}
                defaultValue={initValue}
                label={label ? label : false}
                help-text={helpText ? helpText : false}
                placeholder={placeholder}
                onSlChange={(e) => {
                    eventFunction(e.target.value);
                }}
            >
                {options?.map((item, index) => (
                    <SlOption key={index} value={item?.value}>
                        {item?.text}
                    </SlOption>
                ))}
            </SlSelect>
        );
    }
    
    export default SelectComponent;
                                    `}</code>
                                </pre>
                            </SlDetails>
                        </div>
                    </div>
                </div>
            </div>
            <SlDivider></SlDivider>

            <div className="section">
                <h3 className="componentTItle">셀렉트 - 옵션</h3>
                <div className="componentWrap">
                    <div className="">
                        <div className="viewPart">
                            <h5>기초적인 Select</h5>
                            <SlSelect>
                                <SlOption value="option-1">option-1</SlOption>
                                <SlOption value="option-2">option-2</SlOption>
                                <SlOption value="option-3">option-3</SlOption>
                            </SlSelect>
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SlSelect>
        <SlOption value="option-1">option-1</SlOption>
        <SlOption value="option-2">option-2</SlOption>
        <SlOption value="option-3">option-3</SlOption>
    </SlSelect>
                            `}</code>
                            </pre>
                        </div>
                    </div>

                    <div className="">
                        <div className="viewPart">
                            <h5>라벨</h5>
                            <SlSelect label="input label here">
                                <SlOption value="option-1">option-1</SlOption>
                                <SlOption value="option-2">option-2</SlOption>
                                <SlOption value="option-3">option-3</SlOption>
                            </SlSelect>
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SlSelect label="input label here">
        <SlOption value="option-1">option-1</SlOption>
        <SlOption value="option-2">option-2</SlOption>
        <SlOption value="option-3">option-3</SlOption>
    </SlSelect>
                            `}</code>
                            </pre>
                        </div>
                    </div>

                    <div className="">
                        <div className="viewPart">
                            <h5>하단 도움 문구 (help-text)</h5>
                            <SlSelect
                                label="Experience"
                                help-text="Please tell us your skill level."
                            >
                                <SlOption value="option-1">option-1</SlOption>
                                <SlOption value="option-2">option-2</SlOption>
                                <SlOption value="option-3">option-3</SlOption>
                            </SlSelect>
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SlSelect label="Experience" help-text="Please tell us your skill level.">
        <SlOption value="option-1">option-1</SlOption>
        <SlOption value="option-2">option-2</SlOption>
        <SlOption value="option-3">option-3</SlOption>
    </SlSelect>
                            `}</code>
                            </pre>
                        </div>
                    </div>

                    <div className="">
                        <div className="viewPart">
                            <h5>플레이스홀더 (placeholder)</h5>
                            <SlSelect placeholder="플레이스홀더">
                                <SlOption value="option-1">option-1</SlOption>
                                <SlOption value="option-2">option-2</SlOption>
                                <SlOption value="option-3">option-3</SlOption>
                            </SlSelect>
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SlSelect placeholder="플레이스홀더">
        <SlOption value="option-1">option-1</SlOption>
        <SlOption value="option-2">option-2</SlOption>
        <SlOption value="option-3">option-3</SlOption>
    </SlSelect>
                            `}</code>
                            </pre>
                        </div>
                    </div>

                    <div className="">
                        <div className="viewPart">
                            <h5>아이콘 prefix & suffix</h5>
                            <SlSelect>
                                <SlOption value="option-1">
                                    <SlIcon
                                        slot="prefix"
                                        name="envelope"
                                        style={{ 'padding-right': '0.7rem' }}
                                    ></SlIcon>
                                    Email
                                    <SlIcon
                                        slot="suffix"
                                        name="patch-check"
                                    ></SlIcon>
                                </SlOption>

                                <SlOption value="option-2">
                                    <SlIcon
                                        slot="prefix"
                                        name="telephone"
                                        style={{ 'padding-right': '0.7rem' }}
                                    ></SlIcon>
                                    Phone
                                    <SlIcon
                                        slot="suffix"
                                        name="patch-check"
                                    ></SlIcon>
                                </SlOption>

                                <SlOption value="option-3">
                                    <SlIcon
                                        slot="prefix"
                                        name="chat-dots"
                                        style={{ 'padding-right': '0.7rem' }}
                                    ></SlIcon>
                                    Chat
                                    <SlIcon
                                        slot="suffix"
                                        name="patch-check"
                                    ></SlIcon>
                                </SlOption>
                            </SlSelect>
                        </div>
                        <div className="codePart">
                            <SlDetails summary="Code View">
                                <pre>
                                    <code className="language-markup">{`
    <SlSelect>
        <SlOption value="option-1">
            <SlIcon slot="prefix" name="envelope" style={{ 'padding-right': '0.7rem' }}></SlIcon>
                Email
            <SlIcon slot="suffix" name="patch-check"></SlIcon>
        </SlOption>

        <SlOption value="option-2">
            <SlIcon slot="prefix" name="telephone" style={{ 'padding-right': '0.7rem' }}></SlIcon>
                Phone
            <SlIcon slot="suffix" name="patch-check"></SlIcon>
        </SlOption>

        <SlOption value="option-3">
            <SlIcon slot="prefix" name="chat-dots" style={{ 'padding-right': '0.7rem' }}></SlIcon>
                Chat
            <SlIcon slot="suffix" name="patch-check"></SlIcon>
        </SlOption>
    </SlSelect>
                            `}</code>
                                </pre>
                            </SlDetails>
                        </div>
                    </div>
                    <div className="">
                        <div className="viewPart">
                            <h5>Select Color 바꾸기</h5>
                            <RedSelectStyle />
                            <SlSelect
                                className="red-select"
                                label="Select의 색바꾸기 CSS의 속성 선택자 문법을 이용해 [tabindex='0']::part(base) 로 가능!! "
                            >
                                <SlOption value="option-1">Option 1</SlOption>
                                <SlOption value="option-2">Option 2</SlOption>
                                <SlOption value="option-3">Option 3</SlOption>
                            </SlSelect>
                        </div>

                        <div className="codePart">
                            <SlDetails summary="Code View">
                                <pre>
                                    <code className="language-markup">{`
    /* CSS */
    <style>
        .red-select sl-option::part(base):hover{
            /* hover된 option */
            background-color: var(--sl-color-red-200);
        }
        .red-select sl-option[tabindex="0"]::part(base),
        .red-select sl-option[tabindex="0"]::part(base):hover {
            /* 선택된 option */
            background-color: var(--sl-color-red-500);
        }
    </style>
    --------------------------------------------------------------------------------
    <SlSelect
        className="red-select"
        label="Select의 색바꾸기 CSS의 속성 선택자 문법을 이용해 [tabindex='0']::part(base) 로 가능!! ">
        <SlOption value="option-1">Option 1</SlOption>
        <SlOption value="option-2">Option 2</SlOption>
        <SlOption value="option-3">Option 3</SlOption>
    </SlSelect>
        
                                `}</code>
                                </pre>
                            </SlDetails>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Select;
