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
