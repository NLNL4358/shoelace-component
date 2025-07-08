import React, { useEffect, useState } from 'react';
import { useCode } from '@/provider/CodeViewerProvider';
import { useModal } from '@/provider/ModalProvider';
import {
    SlDetails,
    SlButton,
    SlIcon,
    SlDivider,
} from '@shoelace-style/shoelace/dist/react';

function Modal() {
    const { highlight } = useCode();
    const { openOneButtonModal, openTwoButtonModal } = useModal();

    const [open, setOpen] = useState(false);

    useEffect(() => {
        highlight();
    }, [highlight]);

    return (
        <>
            <div className="section">
                <h2 className="providerNotice">
                    <SlIcon name="exclamation-triangle" />
                    Modal(Dialog)는 전역에서 관리하기위해 Provider를 사용한다.
                </h2>
                <h4 className="providerNotice">
                    이 페이지에서는 설명을 위해 Provider를 별도로 만들었지만
                    <br />
                    실제 사용할때는 다크모드와 같이 Client 기능을 모두 포함한
                    Provider에서 같이 사용됨을 권장한다.
                </h4>
                <div className="componentWrap">
                    <div>
                        <div className="viewPart">
                            <h5>ModalProvider</h5>
                            <p>
                                전역에서 생성된 ModalProvider를 이용하여 각
                                페이지에서는 value로 리턴받은
                                <br />
                                ㆍopenOneButtonModal() : 버튼 1개 모달
                                <br />
                                ㆍopenTwoButtonModal() : 버튼 2개 모달
                                <br />
                                호출함수를 이용하여 모달을 만들 수 있다.
                            </p>
                            <div
                                style={{
                                    marginTop: '1rem',
                                    display: 'flex',
                                    gap: '1rem',
                                }}
                            >
                                <SlButton
                                    onClick={() => {
                                        openOneButtonModal({
                                            label: '모달Label',
                                            dom: (
                                                <>
                                                    <h3>테스트 Modal</h3>
                                                    <h5>
                                                        Provider로 생성된 Modal
                                                    </h5>
                                                </>
                                            ),
                                            goText: '확인',
                                            goFunction: () => {
                                                alert('모달 확인 클릭');
                                            },
                                            overlayCloseBlock: true,
                                        });
                                    }}
                                >
                                    모달Open
                                </SlButton>
                                <SlButton
                                    onClick={() => {
                                        openTwoButtonModal({
                                            label: '모달Label',
                                            dom: (
                                                <>
                                                    <h3>테스트 Modal</h3>
                                                    <h5>
                                                        Provider로 생성된 Modal
                                                    </h5>
                                                </>
                                            ),
                                            goText: '확인',
                                            goFunction: () => {
                                                alert('모달 확인 클릭');
                                            },
                                            closeText: '닫기',
                                            closeFunction: () => {
                                                alert('모달 닫기 클릭');
                                            },
                                        });
                                    }}
                                >
                                    모달2Open
                                </SlButton>
                            </div>
                        </div>
                        <div className="codePart">
                            <SlDetails summary="Provider Code View">
                                <pre>
                                    <code className="language-js">{`
    
`}</code>
                                </pre>
                            </SlDetails>
                            <SlDivider />
                            <SlDetails summary="모달Open 버튼 코드">
                                <pre>
                                    <code className="language-js">
                                        {`
                                
                                `}{' '}
                                    </code>
                                </pre>
                            </SlDetails>
                            <SlDivider />
                            <SlDetails summary="모달2Open 버튼 코드">
                                <pre>
                                    <code className="language-js">
                                        {`
    
                                `}{' '}
                                    </code>
                                </pre>
                            </SlDetails>
                        </div>
                    </div>
                </div>
            </div>
            <SlDivider />
            <div className="section">
                <h3 className="componentTitle">모달 - Dialog</h3>
                <div className="componentWrap">
                    <div>
                        <div className="viewPart">
                            <h5>기본 Dialog</h5>
                            <SlButton>Open Dialog</SlButton>
                        </div>
                        <div className="codePart"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
