import React, { useEffect } from 'react';
import { useCode } from '@/provider/CodeViewerProvider';
import {
    SlButton,
    SlButtonGroup,
    SlDetails,
    SlIcon,
    SlDropdown,
    SlMenu,
    SlMenuItem,
    SlVisuallyHidden,
    SlTooltip,
} from '@shoelace-style/shoelace/dist/react';

function GroupButton() {
    const { highlight } = useCode();

    useEffect(() => {
        highlight();
    }, [highlight]);

    return (
        <div className="section">
            <h3 className="componentTitle">그룹버튼</h3>
            <div className="componentWrap">
                <div className="">
                    <div className="viewPart">
                        <h5>기초적인 그룹버튼</h5>
                        <SlButtonGroup label="Alignment">
                            <SlButton>Left</SlButton>
                            <SlButton>Center</SlButton>
                            <SlButton>Right</SlButton>
                        </SlButtonGroup>
                    </div>
                    <div className="codePart">
                        <pre>
                            <code className="language-markup">{`
    <SlButtonGroup label="Alignment">
        <SlButton>Left</SlButton>
        <SlButton>Center</SlButton>
        <SlButton>Right</SlButton>
    </SlButtonGroup>
                            `}</code>
                        </pre>
                    </div>
                </div>
                <div className="">
                    <div className="viewPart">
                        <h5>그룹버튼 사이즈</h5>
                        <div className="wrap">
                            <SlButtonGroup>
                                <SlButton size="small">Left</SlButton>
                                <SlButton size="small">Center</SlButton>
                                <SlButton size="small">Right</SlButton>
                            </SlButtonGroup>
                        </div>
                        <div className="wrap">
                            <SlButtonGroup>
                                <SlButton size="medium">Left</SlButton>
                                <SlButton size="medium">Center</SlButton>
                                <SlButton size="medium">Right</SlButton>
                            </SlButtonGroup>
                        </div>
                        <div className="wrap">
                            <SlButtonGroup>
                                <SlButton size="large">Left</SlButton>
                                <SlButton size="large">Center</SlButton>
                                <SlButton size="large">Right</SlButton>
                            </SlButtonGroup>
                        </div>
                    </div>
                    <div className="codePart">
                        <SlDetails summary="Code View">
                            <pre>
                                <code className="language-markup">{`
    <SlButtonGroup>
        <SlButton size="small">Left</SlButton>
        <SlButton size="small">Center</SlButton>
        <SlButton size="small">Right</SlButton>
    </SlButtonGroup>

    <SlButtonGroup>
        <SlButton size="medium">Left</SlButton>
        <SlButton size="medium">Center</SlButton>
        <SlButton size="medium">Right</SlButton>
    </SlButtonGroup>

    <SlButtonGroup>
        <SlButton size="large">Left</SlButton>
        <SlButton size="large">Center</SlButton>
        <SlButton size="large">Right</SlButton>
    </SlButtonGroup>
                        `}</code>
                            </pre>
                        </SlDetails>
                    </div>
                </div>

                <div className="">
                    <div className="viewPart">
                        <h5>컬러 그룹버튼 - variant 사용</h5>
                        <div className="wrap">
                            <SlButtonGroup label="Alignment">
                                <SlButton variant="primary">Left</SlButton>
                                <SlButton variant="primary">Center</SlButton>
                                <SlButton variant="primary">Right</SlButton>
                            </SlButtonGroup>
                        </div>
                        <div className="wrap">
                            <SlButtonGroup label="Alignment">
                                <SlButton variant="success">Left</SlButton>
                                <SlButton variant="success">Center</SlButton>
                                <SlButton variant="success">Right</SlButton>
                            </SlButtonGroup>
                        </div>
                        <div className="wrap">
                            <SlButtonGroup label="Alignment">
                                <SlButton variant="neutral">Left</SlButton>
                                <SlButton variant="neutral">Center</SlButton>
                                <SlButton variant="neutral">Right</SlButton>
                            </SlButtonGroup>
                        </div>
                        <div className="wrap">
                            <SlButtonGroup label="Alignment">
                                <SlButton variant="warning">Left</SlButton>
                                <SlButton variant="warning">Center</SlButton>
                                <SlButton variant="warning">Right</SlButton>
                            </SlButtonGroup>
                        </div>
                        <div className="wrap">
                            <SlButtonGroup label="Alignment">
                                <SlButton variant="danger">Left</SlButton>
                                <SlButton variant="danger">Center</SlButton>
                                <SlButton variant="danger">Right</SlButton>
                            </SlButtonGroup>
                        </div>
                    </div>
                    <div className="codePart">
                        <SlDetails summary="Code View">
                            <pre>
                                <code className="language-markup">{`
    <SlButtonGroup label="Alignment">
        <SlButton variant="primary">Left</SlButton>
        <SlButton variant="primary">Center</SlButton>
        <SlButton variant="primary">Right</SlButton>
    </SlButtonGroup>

    <SlButtonGroup label="Alignment">
        <SlButton variant="success">Left</SlButton>
        <SlButton variant="success">Center</SlButton>
        <SlButton variant="success">Right</SlButton>
    </SlButtonGroup>

    <SlButtonGroup label="Alignment">
        <SlButton variant="neutral">Left</SlButton>
        <SlButton variant="neutral">Center</SlButton>
        <SlButton variant="neutral">Right</SlButton>
    </SlButtonGroup>

    <SlButtonGroup label="Alignment">
        <SlButton variant="warning">Left</SlButton>
        <SlButton variant="warning">Center</SlButton>
        <SlButton variant="warning">Right</SlButton>
    </SlButtonGroup>

    <SlButtonGroup label="Alignment">
        <SlButton variant="danger">Left</SlButton>
        <SlButton variant="danger">Center</SlButton>
        <SlButton variant="danger">Right</SlButton>
    </SlButtonGroup>
                        `}</code>
                            </pre>
                        </SlDetails>
                    </div>
                </div>

                <div className="">
                    <div className="viewPart">
                        <h5>Radius 그룹 버튼 - pill 속성 사용</h5>

                        <div className="wrap">
                            <SlButtonGroup label="Alignment">
                                <SlButton size="small" pill>
                                    Left
                                </SlButton>
                                <SlButton size="small" pill>
                                    Center
                                </SlButton>
                                <SlButton size="small" pill>
                                    Right
                                </SlButton>
                            </SlButtonGroup>
                        </div>
                        <div className="wrap">
                            <SlButtonGroup label="Alignment">
                                <SlButton size="medium" pill>
                                    Left
                                </SlButton>
                                <SlButton size="medium" pill>
                                    Center
                                </SlButton>
                                <SlButton size="medium" pill>
                                    Right
                                </SlButton>
                            </SlButtonGroup>
                        </div>
                        <div className="wrap">
                            <SlButtonGroup label="Alignment">
                                <SlButton size="large" pill>
                                    Left
                                </SlButton>
                                <SlButton size="large" pill>
                                    Center
                                </SlButton>
                                <SlButton size="large" pill>
                                    Right
                                </SlButton>
                            </SlButtonGroup>
                        </div>
                    </div>

                    <div className="codePart">
                        <SlDetails summary="Code View">
                            <pre>
                                <code className="language-markup">{`
  <SlButtonGroup label="Alignment">
    <SlButton size="small" pill>Left</SlButton>
    <SlButton size="small" pill>Center</SlButton>
    <SlButton size="small" pill>Right</SlButton>
  </SlButtonGroup>


  <SlButtonGroup label="Alignment">
    <SlButton size="medium" pill>Left</SlButton>
    <SlButton size="medium" pill>Center</SlButton>
    <SlButton size="medium" pill>Right</SlButton>
  </SlButtonGroup>


  <SlButtonGroup label="Alignment">
    <SlButton size="large" pill>Left</SlButton>
    <SlButton size="large" pill>Center</SlButton>
    <SlButton size="large" pill>Right</SlButton>
  </SlButtonGroup>
                                    `}</code>
                            </pre>
                        </SlDetails>
                    </div>
                </div>

                <div className="">
                    <div className="viewPart">
                        <h5>드롭다운 그룹버튼 - SlDropdown 사용</h5>
                        <div className="wrap">
                            <SlButtonGroup label="Example Button Group">
                                <SlButton>Button</SlButton>
                                <SlButton>Button</SlButton>
                                <SlDropdown>
                                    <SlButton slot="trigger" caret>
                                        Dropdown
                                    </SlButton>
                                    <SlMenu>
                                        <SlMenuItem>Item 1</SlMenuItem>
                                        <SlMenuItem>Item 2</SlMenuItem>
                                        <SlMenuItem>Item 3</SlMenuItem>
                                    </SlMenu>
                                </SlDropdown>
                            </SlButtonGroup>
                        </div>
                    </div>

                    <div className="codePart">
                        <SlDetails summary="Code View">
                            <pre>
                                <code className="language-markup">{`
    <SlButtonGroup label="Example Button Group">
        <SlButton>Button</SlButton>
        <SlButton>Button</SlButton>
        <SlDropdown>
            <SlButton slot="trigger" caret>
                Dropdown
            </SlButton>
            <SlMenu>
                <SlMenuItem>Item 1</SlMenuItem>
                <SlMenuItem>Item 2</SlMenuItem>
                <SlMenuItem>Item 3</SlMenuItem>
            </SlMenu>
        </SlDropdown>
    </SlButtonGroup>
                            `}</code>
                            </pre>
                        </SlDetails>
                    </div>
                </div>

                <div className="">
                    <div className="viewPart">
                        <h5>스플릿 드롭다운 그룹버튼</h5>
                        <div className="wrap">
                            <SlButtonGroup label="Example Button Group">
                                <SlButton variant="primary">Save</SlButton>
                                <SlDropdown placement="bottom-end">
                                    <SlButton
                                        slot="trigger"
                                        variant="primary"
                                        caret
                                    >
                                        <SlVisuallyHidden>
                                            More options
                                        </SlVisuallyHidden>
                                    </SlButton>
                                    <SlMenu>
                                        <SlMenuItem>Save</SlMenuItem>
                                        <SlMenuItem>Save as...</SlMenuItem>
                                        <SlMenuItem>Save all</SlMenuItem>
                                    </SlMenu>
                                </SlDropdown>
                            </SlButtonGroup>
                        </div>
                    </div>
                    <div className="codePart">
                        <SlDetails summary="Code View">
                            <pre>
                                <code className="language-markup">{`
    <SlButtonGroup label="Example Button Group">
        <SlButton variant="primary">Save</SlButton>
        <SlDropdown placement="bottom-end">
            <SlButton
                slot="trigger"
                variant="primary"
                caret
            >
                <SlVisuallyHidden>
                    More options
                </SlVisuallyHidden>
            </SlButton>
            <SlMenu>
                <SlMenuItem>Save</SlMenuItem>
                <SlMenuItem>Save as...</SlMenuItem>
                <SlMenuItem>Save all</SlMenuItem>
            </SlMenu>
        </SlDropdown>
    </SlButtonGroup>
                            `}</code>
                            </pre>
                        </SlDetails>
                    </div>
                </div>

                <div className="">
                    <div className="viewPart">
                        <h5>Hover시 툴팁이 보이는 그룹버튼 - SlTooltip 사용</h5>
                        <div className="wrap">
                            <SlButtonGroup label="Alignment">
                                <SlTooltip content="I'm on the left">
                                    <SlButton>Left</SlButton>
                                </SlTooltip>

                                <SlTooltip content="I'm in the middle">
                                    <SlButton>Center</SlButton>
                                </SlTooltip>

                                <SlTooltip content="I'm on the right">
                                    <SlButton>Right</SlButton>
                                </SlTooltip>
                            </SlButtonGroup>
                        </div>
                    </div>
                    <div className="codePart">
                        <pre>
                            <code className="language-markup">{`
    <SlButtonGroup label="Alignment">
        <SlTooltip content="I'm on the left">
            <SlButton>Left</SlButton>
        </SlTooltip>

        <SlTooltip content="I'm in the middle">
            <SlButton>Center</SlButton>
        </SlTooltip>

        <SlTooltip content="I'm on the right">
            <SlButton>Right</SlButton>
        </SlTooltip>
    </SlButtonGroup>
                            `}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GroupButton;
