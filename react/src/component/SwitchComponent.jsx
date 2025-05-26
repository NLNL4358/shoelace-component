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
            className={`customSwitch ${className}`}
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
