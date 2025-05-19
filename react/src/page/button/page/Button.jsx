import React, { useEffect, useState } from 'react';
import { useCode } from '@/provider/CodeViewerProvider';
import {
    SlButton,
    SlIcon,
    SlCopyButton,
    SlDivider,
    SlDetails,
    SlInput,
    SlSelect,
    SlOption,
    SlSwitch,
} from '@shoelace-style/shoelace/dist/react';

import ButtonComponent from '@/component/ButtonComponent';

function Button() {
    const { highlight } = useCode();

    /* useState */
    const [custom, setCustom] = useState({
        text: '커스텀 버튼',
        style: { width: '10rem' },
        variant: 'primary',
        outline: false,
        pill: false,
        link: null,
        iconName: '',
    });

    /* function */
    const customChanger = (key, value) => {
        setCustom((prev) => {
            const nextState = { ...prev };
            nextState[key] = value;
            return nextState;
        });
    };

    /* useEffect */
    useEffect(() => {
        highlight();
    }, [highlight]);

    return (
        <>
            <div className="section">
                <h3 className="componentTitle">KJS 버튼 컴포넌트</h3>
                <div className="componentWrap">
                    <div className="">
                        <div className="viewPart">
                            <ButtonComponent
                                text={custom.text}
                                style={custom.style}
                                variant={custom.variant}
                                outline={custom.outline}
                                pill={custom.pill}
                                link={custom.link}
                                iconName={custom.iconName}
                            />
                            <SlDivider />
                            <div className="wrap">
                                <SlInput
                                    label="Text 입력"
                                    value={custom?.text}
                                    onSlInput={(e) => {
                                        customChanger('text', e.target.value);
                                    }}
                                ></SlInput>
                            </div>
                            <div className="wrap">
                                <SlSelect
                                    label="variant 선택"
                                    value={custom?.variant}
                                    onSlChange={(e) => {
                                        customChanger(
                                            'variant',
                                            e.target.value,
                                        );
                                    }}
                                >
                                    <SlOption value="default">default</SlOption>
                                    <SlOption value="primary">primary</SlOption>
                                    <SlOption value="success">success</SlOption>
                                    <SlOption value="neutral">neutral</SlOption>
                                    <SlOption value="warning">warning</SlOption>
                                    <SlOption value="danger">danger</SlOption>
                                    <SlOption value="text">text</SlOption>
                                </SlSelect>
                            </div>
                            <div className="wrap">
                                <SlSelect
                                    label="link 선택"
                                    onSlChange={(e) => {
                                        customChanger('link', e.target.value);
                                    }}
                                >
                                    <SlOption value="">None</SlOption>
                                    <SlOption value="https://www.naver.com">
                                        naver
                                    </SlOption>
                                    <SlOption value="https://www.google.com">
                                        google
                                    </SlOption>
                                </SlSelect>
                            </div>
                            <div className="wrap">
                                <SlInput
                                    label="iconName 입력"
                                    value={custom?.iconName}
                                    help-text={'ex) gear , github'}
                                    onSlInput={(e) => {
                                        customChanger(
                                            'iconName',
                                            e.target.value,
                                        );
                                    }}
                                ></SlInput>
                            </div>
                            <div className="wrap">
                                <SlSwitch
                                    help-text="outline 변경"
                                    value={custom?.outline}
                                    onSlInput={(e) => {
                                        customChanger(
                                            'outline',
                                            e.target.checked,
                                        );
                                    }}
                                ></SlSwitch>
                                <SlSwitch
                                    help-text="pill 변경"
                                    value={custom?.pill}
                                    onSlInput={(e) => {
                                        customChanger('pill', e.target.checked);
                                    }}
                                ></SlSwitch>
                            </div>
                        </div>
                        <div className="codePart">
                            <SlDetails summary="Code View">
                                <pre>
                                    <code className="language-js">{`
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
                            `}</code>
                                </pre>
                            </SlDetails>
                        </div>
                    </div>
                </div>
            </div>
            <SlDivider />
            <div className="section">
                <h3 className="componentTitle">버튼</h3>
                <div className="componentWrap">
                    <div className="">
                        <div className="viewPart">
                            <h5>기초적인 버튼</h5>
                            <SlButton>Simple</SlButton>
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">
                                    {`
    <SlButton>Simple</SlButton>
                                `}
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="">
                        <div className="viewPart">
                            <h5>컬러버튼 - variant 속성 사용</h5>
                            <div className="wrap">
                                <SlButton variant="default">Default</SlButton>
                                <SlButton variant="primary">Primary</SlButton>
                                <SlButton variant="success">Success</SlButton>
                                <SlButton variant="neutral">Neutral</SlButton>
                                <SlButton variant="warning">Warning</SlButton>
                                <SlButton variant="danger">Danger</SlButton>
                            </div>
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">
                                    {`
    <SlButton variant="default">Default</SlButton>
    <SlButton variant="primary">Primary</SlButton>
    <SlButton variant="success">Success</SlButton>
    <SlButton variant="neutral">Neutral</SlButton>
    <SlButton variant="warning">Warning</SlButton>
    <SlButton variant="danger">Danger</SlButton>
                                `}
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="">
                        <div className="viewPart">
                            <h5>아웃라인 버튼 - outline 속성 사용</h5>
                            <div className="wrap">
                                <SlButton variant="default" outline>
                                    Default
                                </SlButton>
                                <SlButton variant="primary" outline>
                                    Primary
                                </SlButton>
                                <SlButton variant="success" outline>
                                    Success
                                </SlButton>
                                <SlButton variant="neutral" outline>
                                    Neutral
                                </SlButton>
                                <SlButton variant="warning" outline>
                                    Warning
                                </SlButton>
                                <SlButton variant="danger" outline>
                                    Danger
                                </SlButton>
                            </div>
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">
                                    {`
    <SlButton variant="default" outline>Default</SlButton>
    <SlButton variant="primary" outline>Primary</SlButton>
    <SlButton variant="success" outline>Success</SlButton>
    <SlButton variant="neutral" outline>Neutral</SlButton>
    <SlButton variant="warning" outline>Warning</SlButton>
    <SlButton variant="danger" outline>Danger</SlButton>
                                `}
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="">
                        <div className="viewPart">
                            <h5>모양 버튼 - pill 속성 사용</h5>
                            <div className="wrap">
                                <SlButton pill>pill</SlButton>
                                <SlButton variant="default" circle>
                                    <SlIcon
                                        name="gear"
                                        label="Settings"
                                    ></SlIcon>
                                </SlButton>
                            </div>
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">
                                    {`
    <SlButton pill>pill</SlButton>
    <SlButton variant="default" circle>
        <SlIcon name="gear" label="Settings"></SlIcon>
    </SlButton>
                                `}
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="">
                        <div className="viewPart">
                            <h5>텍스트 버튼 - variant='text'</h5>
                            <div className="wrap">
                                <SlButton variant="text" size="small">
                                    Text
                                </SlButton>
                                <SlButton variant="text" size="medium">
                                    Text
                                </SlButton>
                                <SlButton variant="text" size="large">
                                    Text
                                </SlButton>
                            </div>
                        </div>
                        <div className="codePar">
                            <pre>
                                <code className="language-markup">
                                    {`
    <SlButton variant="text" size="small">Text</SlButton>
    <SlButton variant="text" size="medium">Text</SlButton>
    <SlButton variant="text" size="large">Text</SlButton>
                                `}
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="">
                        <div className="viewPart">
                            <h5>링크 버튼 - href속성 사용</h5>
                            <div className="wrap">
                                <SlButton
                                    href="https://www.naver.com/"
                                    variant="success"
                                >
                                    Naver
                                </SlButton>
                                <SlButton
                                    href="https://www.google.com/"
                                    variant="primary"
                                    target="_blank"
                                >
                                    Google
                                </SlButton>
                                <SlButton
                                    href="/assets/images/wordmark.svg"
                                    download="shoelace.svg"
                                >
                                    Download
                                </SlButton>
                                <SlButton href="https://example.com/" disabled>
                                    Disabled
                                </SlButton>
                            </div>
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SlButton
        href="https://www.naver.com/"
        variant="success"
    >
        Naver
    </SlButton>
    <SlButton
        href="https://www.google.com/"
        variant="primary"
        target="_blank"
    >
        Google
    </SlButton>
    <SlButton
        href="/assets/images/wordmark.svg"
        download="shoelace.svg"
    >
        Download
    </SlButton>
    <SlButton href="https://example.com/" disabled>
        Disabled
    </SlButton>
                            `}</code>
                            </pre>
                        </div>
                    </div>

                    <div className="">
                        <div className="viewPart">
                            <h5>카피 버튼 - SlCopyButton 컴포넌트 사용</h5>
                            <div className="wrap">
                                <SlCopyButton value="복사할 값을 이곳에 넣는다">
                                    <SlIcon
                                        slot="copy-icon"
                                        name="clipboard"
                                    ></SlIcon>
                                    <SlIcon
                                        slot="success-icon"
                                        name="clipboard-check"
                                    ></SlIcon>
                                    <SlIcon
                                        slot="error-icon"
                                        name="clipboard-x"
                                    ></SlIcon>
                                </SlCopyButton>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="codePart">
                            <pre>
                                <code className="language-markup">{`
    <SlCopyButton value="복사할 값을 이곳에 넣는다">
        <SlIcon
            slot="copy-icon"
            name="clipboard"
        ></SlIcon>
        <SlIcon
            slot="success-icon"
            name="clipboard-check"
        ></SlIcon>
        <SlIcon
            slot="error-icon"
            name="clipboard-x"
        ></SlIcon>
    </SlCopyButton>
                            `}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Button;
