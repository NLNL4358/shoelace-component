import React, { createContext, useContext, useState } from 'react';
import { SlDialog, SlButton } from '@shoelace-style/shoelace/dist/react';

const ModalContext = createContext();

export const useModal = () => {
    return useContext(ModalContext);
};

function ModalProvider({ children }) {
    /* 상수 */

    /**
     * 모달(Dialog)의 정보
     * @style : 모달의 추가 style
     * @headerIcon : 모달 Header에 사용할 ICon 배열
     * @headerIconFunction : 모달 Header ICon을 클릭했을때 수행하는 함수 배열
     * @overlayCloseBlock : 모달 영역밖을 클릭해도 모달이 종료되는가?
     * @label : 모달 Label
     * @dom : 모달 안에 들어갈 dom
     * @isOneButton : 모달이 버튼을 하나만 가지는지?
     * @goText : 확인 버튼 텍스트
     * @goFunction : 확인 버튼 호출 함수
     * @closeText : 닫기 버튼 텍스트
     * @closeFunction : 닫기 버튼 호출 함수
     */
    const modalForm = {
        style: {},
        headerIcon: [''],
        headerIconFunction: [() => {}],
        overlayCloseBlock: false,
        label: '',
        dom: <></>,
        isOneButton: true,
        goText: '확인',
        goFunction: () => {},
        closeText: '닫기',
        closeFunction: () => {},
    };

    /* useState */
    const [modalControl, setModalControl] = useState(false);
    const [modalInfo, setModalInfo] = useState(modalForm);

    /* function */
    const openOneButtonModal = (info) => {
        setModalInfo({
            ...modalForm,
            ...info,
            isOneButton: true,
        });
        setModalControl(true);
    };
    const openTwoButtonModal = (info) => {
        setModalInfo({
            ...modalForm,
            ...info,
            isOneButton: false,
        });
        setModalControl(true);
    };

    /**
     * @description 모달 종료&초기화 함수
     */
    const closeModal = async () => {
        setModalControl(false);
        setModalInfo(modalForm);
    };

    const handleRequestClose = (event) => {
        if (event.detail.source === 'overlay' && modalInfo?.overlayCloseBlock) {
            event.preventDefault();
        }
    };

    /* props Value */
    const value = {
        openOneButtonModal,
        openTwoButtonModal,
    };

    return (
        <ModalContext.Provider value={value}>
            <SlDialog
                label={modalInfo?.label}
                open={modalControl}
                onSlRequestClose={handleRequestClose}
                onSlAfterHide={() => {
                    closeModal();
                }}
                style={modalInfo?.style}
            >
                <div className="dialogInner">{modalInfo?.dom}</div>
                {modalInfo?.isOneButton ? (
                    <SlButton
                        slot="footer"
                        variant="primary"
                        onClick={() => {
                            try {
                                modalInfo?.goFunction();
                            } finally {
                                setModalControl(false);
                            }
                        }}
                    >
                        {modalInfo?.goText}
                    </SlButton>
                ) : (
                    <>
                        <SlButton
                            slot="footer"
                            variant="primary"
                            onClick={() => {
                                try {
                                    modalInfo?.goFunction();
                                } finally {
                                    setModalControl(false);
                                }
                            }}
                        >
                            {modalInfo?.goText}
                        </SlButton>
                        <SlButton
                            slot="footer"
                            variant="default"
                            onClick={() => {
                                try {
                                    modalInfo?.closeFunction();
                                } finally {
                                    setModalControl(false);
                                }
                            }}
                        >
                            {modalInfo?.closeText}
                        </SlButton>
                    </>
                )}
            </SlDialog>
            {children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;
