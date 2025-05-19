import React, { useState, useEffect } from 'react';
import { useCode } from '@/provider/CodeViewerProvider';

import {
    SlSelect,
    SlOption,
    SlDivider,
    SlDetails,
    SlInput,
} from '@shoelace-style/shoelace/dist/react';

import SelectComponent from '../../../component/SelectComponent';

function Select() {
    const { highlight } = useCode();

    const [optionState, setOptionState] = useState({
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

    return (
        <>
            <div className="section">
                <h3 className="componentTitle">KJS Select 컴포넌트</h3>
                <div className="componentWrap">
                    <div className="">
                        <div className="viewPart">
                            <SelectComponent
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
        const {
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
        </>
    );
}

export default Select;
