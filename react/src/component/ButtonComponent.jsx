import React from 'react';
import { SlButton, SlIcon } from '@shoelace-style/shoelace/dist/react';

function ButtonComponent(props) {
    /**
     * text : 버튼에 들어갈 Text
     * style : 커스텀 style이 필요할때 사용
     * outline : outline 버튼인가?
     * pill : 동그란 버튼인가?
     * link : 외부 링크연결을 위해 href 속성이 필요한가?
     * iconName : 아이콘버튼이라면 iconName을 입력
     */
    const {
        text = '',
        style = {},
        variant = 'default',
        outline = false,
        pill = false,
        link = null,
        iconName = '',
        eventFunction = () => {},
    } = props;

    return (
        <SlButton
            className="customButton"
            style={style}
            variant={variant}
            outline={outline}
            pill={pill}
            href={link}
            target={link && '_blank'}
            onClick={() => {
                eventFunction();
            }}
        >
            {iconName !== '' ? (
                <SlIcon
                    style={{ fontSize: '150%', padding: '0rem 0.5rem' }}
                    name={iconName}
                    label={iconName}
                ></SlIcon>
            ) : null}
            {text}
        </SlButton>
    );
}

export default ButtonComponent;
