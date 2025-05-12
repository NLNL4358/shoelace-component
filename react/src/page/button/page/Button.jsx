import React, { useEffect } from 'react';
import { useCode } from '@/provider/CodeViewerProvider';
import {
    SlButton,
    SlIcon,
    SlCopyButton,
} from '@shoelace-style/shoelace/dist/react';

function Button() {
    const { highlight } = useCode();

    useEffect(() => {
        highlight();
    }, [highlight]);

    return (
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
                                {`<SlButton>Simple</SlButton>`}
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
                                {`<SlButton variant="default">Default</SlButton>
<SlButton variant="primary">Primary</SlButton>
<SlButton variant="success">Success</SlButton>
<SlButton variant="neutral">Neutral</SlButton>
<SlButton variant="warning">Warning</SlButton>
<SlButton variant="danger">Danger</SlButton>`}
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
                                {`<SlButton variant="default" outline>Default</SlButton>
<SlButton variant="primary" outline>Primary</SlButton>
<SlButton variant="success" outline>Success</SlButton>
<SlButton variant="neutral" outline>Neutral</SlButton>
<SlButton variant="warning" outline>Warning</SlButton>
<SlButton variant="danger" outline>Danger</SlButton>`}
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
                                <SlIcon name="gear" label="Settings"></SlIcon>
                            </SlButton>
                        </div>
                    </div>
                    <div className="codePart">
                        <pre>
                            <code className="language-markup">
                                {`<SlButton pill>pill</SlButton>
<SlButton variant="default" circle>
    <SlIcon name="gear" label="Settings"></SlIcon>
</SlButton>`}
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
                                {`<SlButton variant="text" size="small">Text</SlButton>
<SlButton variant="text" size="medium">Text</SlButton>
<SlButton variant="text" size="large">Text</SlButton>`}
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
                            <code className="language-markup">{`<SlButton
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
</SlButton>`}</code>
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
                            <code className="language-markup">{`<SlCopyButton value="복사할 값을 이곳에 넣는다">
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
</SlCopyButton>`}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Button;
