import React, { useEffect, useState } from 'react';
import { useCode } from '@/provider/CodeViewerProvider';
import { SlTextarea, SlDetails } from '@shoelace-style/shoelace/dist/react';

function Textarea() {
    const { highlight } = useCode();

    const [textValue, setTextValue] = useState('');

    useEffect(() => {
        highlight();
    }, [highlight]);

    return (
        <div className="section">
            <h3 className="componentTitle">Textarea</h3>
            <div className="componentWrap">
                <div>
                    <div className="viewPart">
                        <h5>기초적인 TExtarea</h5>
                        <SlTextarea
                            value={textValue}
                            onSlInput={(e) => {
                                setTextValue(e.target.value);
                            }}
                        />

                        <div style={{ marginTop: '0.5rem' }}>
                            <p>{`입력된 Value : ${textValue}`}</p>
                        </div>
                    </div>
                    <div className="codePart">
                        <SlDetails summary="Code View">
                            <pre>
                                <code className="language-js">{`
    const [textValue, setTextValue] = useState('');

    <SlTextarea
        value={textValue}
        onSlInput={(e) => {
            setTextValue(e.target.value);
        }}
    />
                            `}</code>
                            </pre>
                        </SlDetails>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>
                            Label과 Help-Text를 사용하려면 각각 label, help-text
                            속성을 사용한다.
                        </h5>
                        <SlTextarea
                            label={'label을 입력합니다.'}
                            help-text={'help-text를 입력합니다'}
                        ></SlTextarea>
                    </div>
                    <div className="codePart">
                        <SlDetails summary="Code View">
                            <pre>
                                <code className="language-js">{`
    <SlTextarea
        label={'label을 입력합니다.'}
        help-text={'help-text를 입력합니다'}
    ></SlTextarea>
                                `}</code>
                            </pre>
                        </SlDetails>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>
                            최대 행을 설정하려먼 rows="n" 속성을 사용합니다.
                        </h5>
                        <SlTextarea
                            rows={3}
                            label={'행을 3으로 고정'}
                        ></SlTextarea>
                    </div>
                    <div className="codePart">
                        <SlDetails summary="Code View">
                            <pre>
                                <code className="language-js">{`
    <SlTextarea
        rows={3}
        label={'행을 3으로 고정'}
    ></SlTextarea>                             
                                `}</code>
                            </pre>
                        </SlDetails>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>
                            Placeholder 를 사용하려면 placeholder="text" 속성을
                            사용합니다.
                        </h5>
                        <SlTextarea placeholder={`플레이스 홀더`}></SlTextarea>
                    </div>
                    <div className="codePart">
                        <SlDetails summary="Code View">
                            <pre>
                                <code className="language-js">{`
    <SlTextarea
        placeholder={'플레이스 홀더'}
    ></SlTextarea>
                                `}</code>
                            </pre>
                        </SlDetails>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>
                            Disabled 를 사용하려면 disabled 속성을 사용합니다.
                        </h5>
                        <SlTextarea
                            placeholder={'비활성화'}
                            disabled={true}
                        ></SlTextarea>
                    </div>
                    <div className="codePart">
                        <SlDetails summary="Code View">
                            <pre>
                                <code className="language-js">{`
    <SlTextarea
        placeholder={'비활성화'}
        disabled={true}
    ></SlTextarea>
                                `}</code>
                            </pre>
                        </SlDetails>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>
                            Textarea영역의 색이 채워져있게하려면 filled 속성을
                            사용합니다.
                        </h5>
                        <SlTextarea
                            label={'Textarea를 채웁니다'}
                            filled={true}
                        ></SlTextarea>
                    </div>
                    <div className="codePart">
                        <SlDetails summary="Code View">
                            <pre>
                                <code className="language-js">{`
    <SlTextarea
        label={'Textarea를 채웁니다'}
        filled={true}
    ></SlTextarea>
                                `}</code>
                            </pre>
                        </SlDetails>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>
                            Read-Only 를 사용하려면 readonly 속성을 사용합니다.
                        </h5>
                        <SlTextarea
                            value={'읽기만 가능합니다.'}
                            readonly={true}
                        ></SlTextarea>
                    </div>
                    <div className="codePart">
                        <SlDetails summary="Code View">
                            <pre>
                                <code className="language-js">{`
    <SlTextarea
        value={'읽기만 가능합니다.'}
        readonly={true}
    ></SlTextarea>
                                `}</code>
                            </pre>
                        </SlDetails>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>
                            자동 크기조절 를 사용하려면 resize="auto" 속성을
                            사용합니다.
                        </h5>
                        <SlTextarea
                            resize={'auto'}
                            label={'자동으로 크기조절 됩니다'}
                        ></SlTextarea>
                    </div>
                    <div className="codePart">
                        <SlDetails summary="Code View">
                            <pre>
                                <code className="language-js">{`
    <SlTextarea
        resize={'auto'}
        label={'자동으로 크기조절 됩니다'}
    ></SlTextarea>
                                `}</code>
                            </pre>
                        </SlDetails>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>
                            자동 크기조절 를 사용하면서 max-height를
                            사용하기위해선 별도의 Style이 필요합니다.
                        </h5>
                        <SlTextarea
                            label={
                                'resize = {"auto"} 와 inlineStyle max-height:15rem 이 적용되었습니다.'
                            }
                            resize={'auto'}
                            style={{ maxHeight: '15rem' }}
                        ></SlTextarea>
                    </div>
                    <div className="codePart">
                        <SlDetails summary="Code View">
                            <pre>
                                <code className="language-js">{`
    <SlTextarea
        label={
            'resize = {"auto"} 와 inlineStyle max-height:15rem 이 적용되었습니다.'
        }
        resize={'auto'}
        style={{ maxHeight: '15rem' }}
    ></SlTextarea>
                                `}</code>
                            </pre>
                        </SlDetails>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Textarea;
