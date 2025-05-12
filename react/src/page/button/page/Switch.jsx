import React, { useEffect } from 'react';
import { useCode } from '@/provider/CodeViewerProvider';
import { SlSwitch } from '@shoelace-style/shoelace/dist/react';

function Switch() {
    const { highlight } = useCode();

    useEffect(() => {
        highlight();
    }, [highlight]);

    return (
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
    );
}

export default Switch;
