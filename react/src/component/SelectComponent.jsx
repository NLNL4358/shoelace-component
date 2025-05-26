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
            className={`customSelect ${className}`}
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
