import React, { useState, useEffect } from 'react';
import { useCode } from '@/provider/CodeViewerProvider';
import {
    SlCheckbox,
    SlDetails,
    SlButton,
} from '@shoelace-style/shoelace/dist/react';

function CheckBox() {
    const { highlight } = useCode();

    const [checkValue, setCheckValue] = useState(false);

    useEffect(() => {
        highlight();
    }, [highlight]);

    return (
        <div className="section">
            <h3 className="componentTitle">CheckBox</h3>
            <div className="componentWrap">
                <div>
                    <div className="viewPart">
                        <h5>기초적인 CheckBox</h5>
                        <SlCheckbox
                            value={checkValue}
                            onSlChange={(e) => {
                                setCheckValue(e.target.checked);
                            }}
                        >
                            Checkbox
                        </SlCheckbox>

                        <div style={{ marginTop: '0.5rem' }}>
                            <p>{` onSlChange -> e.target.checked : ${checkValue}`}</p>
                        </div>
                    </div>
                    <div className="codePart">
                        <SlDetails summary="Code View">
                            <pre>
                                <code className="language-js">{`
    /* 이벤트는 onSlChange를 사용하며 */
    /* e.target.value가 아닌 e.target.checked 를 사용한다 */

    <SlCheckbox
        value={checkValue}
        onSlChange={(e) => {
            setCheckValue(e.target.checked);
        }}
    >
        Checkbox
    </SlCheckbox>
                                `}</code>
                            </pre>
                        </SlDetails>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>Checked CheckBox</h5>
                        <SlCheckbox checked={true}>Checkbox</SlCheckbox>
                    </div>
                    <div className="codePart">
                        <pre>
                            <code className="language-markup">{`
    <SlCheckbox checked={true}>Checkbox</SlCheckbox>
                            `}</code>
                        </pre>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>Disabled CheckBox</h5>
                        <SlCheckbox disabled={true}>Checkbox</SlCheckbox>
                    </div>
                    <div className="codePart">
                        <pre>
                            <code className="language-markup">{`
    <SlCheckbox disabled={true}>Checkbox</SlCheckbox>
                            `}</code>
                        </pre>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>Help Text CheckBox</h5>
                        <SlCheckbox help-text={'help-text 입력'}>
                            Checkbox
                        </SlCheckbox>
                    </div>
                    <div className="codePart">
                        <pre>
                            <code className="language-markup">{`
    <SlCheckbox help-text="help-text 입력">
        Checkbox
    </SlCheckbox>
                            `}</code>
                        </pre>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>체크박스 사이즈 조절 CheckBox</h5>
                        <SlCheckbox size="small"></SlCheckbox>
                        <SlCheckbox size="medium"></SlCheckbox>
                        <SlCheckbox size="large"></SlCheckbox>
                    </div>
                    <div className="codePart">
                        <pre>
                            <code className="language-markup">{`
    <SlCheckbox size="small"></SlCheckbox>
    <SlCheckbox size="medium"></SlCheckbox>
    <SlCheckbox size="large"></SlCheckbox>
                            `}</code>
                        </pre>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>체크박스 사이즈 CSS 조절 CheckBox</h5>
                        <SlCheckbox className="x1"></SlCheckbox>
                        <SlCheckbox className="x2"></SlCheckbox>
                        <SlCheckbox className="x3"></SlCheckbox>
                    </div>
                    <div className="codePart">
                        <pre>
                            <code className="language-markup">{`
    <style>
    sl-checkbox.x1::part(control) {
        width: 1rem;
        height: 1rem;
    }
    sl-checkbox.x2::part(control) {
        width: 2rem;
        height: 2rem;
    }
    sl-checkbox.x3::part(control) {
        width: 3rem;
        height: 3rem;
    }
    </style>                            
                            
    <SlCheckbox className="x1"></SlCheckbox>
    <SlCheckbox className="x2"></SlCheckbox>
    <SlCheckbox className="x3"></SlCheckbox>
                            `}</code>
                        </pre>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>
                            form 안에 있는 checkbox <br /> required 와 submit을
                            활용합니다
                        </h5>

                        <form
                            className="custom-validity"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                width: '5rem',
                            }}
                        >
                            <SlCheckbox required>Required Checkbox</SlCheckbox>
                            <SlButton type="submit" variant="primary">
                                Submit
                            </SlButton>
                        </form>
                    </div>
                    <div className="codePart">
                        <pre>
                            <code className="language-markup">{`
    <form>
        <SlCheckbox required>Required Checkbox</SlCheckbox>
        <SlButton type="submit" variant="primary">
            Submit
        </SlButton>
    </form>
                            `}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckBox;
