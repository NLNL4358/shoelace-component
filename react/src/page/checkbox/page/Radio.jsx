import React, { useEffect, useState } from 'react';
import { useCode } from '@/provider/CodeViewerProvider';
import {
    SlRadioGroup,
    SlRadio,
    SlRadioButton,
    SlDetails,
    SlIcon,
} from '@shoelace-style/shoelace/dist/react';

function Radio() {
    const { highlight } = useCode();

    const [radioValue, setRadioValue] = useState('');

    useEffect(() => {
        highlight();
    }, [highlight]);

    return (
        <div className="section">
            <h3 className="componentTitle">Radio</h3>
            <div className="componentWrap">
                <div>
                    <div className="viewPart">
                        <h5>기초적인 RadioGroup & Radio</h5>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                            }}
                        >
                            <SlRadioGroup
                                label="Select an option"
                                onSlChange={(e) => {
                                    setRadioValue(e.target.value);
                                }}
                            >
                                <SlRadio value={1}>Option 1</SlRadio>
                                <SlRadio value={2}>Option 2</SlRadio>
                                <SlRadio value={3}>Option 3</SlRadio>
                            </SlRadioGroup>

                            <p>{`선택된 Radio Value : ${radioValue}`}</p>
                        </div>
                    </div>
                    <div className="codePart">
                        <SlDetails summary="Code View">
                            <pre>
                                <code className="language-js">{`
    <SlRadioGroup
        label="Select an option"
        onSlChange={(e) => {
            setRadioValue(e.target.value);
        }}
    >
        <SlRadio value={1}>Option 1</SlRadio>
        <SlRadio value={2}>Option 2</SlRadio>
        <SlRadio value={3}>Option 3</SlRadio>
    </SlRadioGroup>
                            `}</code>
                            </pre>
                        </SlDetails>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>초기값 Radio</h5>
                        <SlRadioGroup label="초기값은 3" value={3}>
                            <SlRadio value={1}>Option 1</SlRadio>
                            <SlRadio value={2}>Option 2</SlRadio>
                            <SlRadio value={3}>Option 3</SlRadio>
                        </SlRadioGroup>
                    </div>
                    <div className="codePart">
                        <pre>
                            <code className="language-markup">{`
    <SlRadioGroup label="초기값은 3" value={3}>
        <SlRadio value={1}>Option 1</SlRadio>
        <SlRadio value={2}>Option 2</SlRadio>
        <SlRadio value={3}>Option 3</SlRadio>
    </SlRadioGroup>
                    `}</code>
                        </pre>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>Disabled</h5>
                        <SlRadioGroup
                            label="Select an option, but second Radio is disabled"
                            value={1}
                        >
                            <SlRadio value={1}>Option 1</SlRadio>
                            <SlRadio value={2} disabled>
                                Option 2
                            </SlRadio>
                            <SlRadio value={3}>Option 3</SlRadio>
                        </SlRadioGroup>
                    </div>
                    <div className="codePart">
                        <pre>
                            <code className="language-markup">{`
    <SlRadioGroup label="Select an option, but second Radio is disabled" value={1}>
        <SlRadio value={1}>Option 1</SlRadio>
        <SlRadio value={2} disabled>
            Option 2
        </SlRadio>
        <SlRadio value={3}>Option 3</SlRadio>
    </SlRadioGroup>
                        `}</code>
                        </pre>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>도움말</h5>
                        <SlRadioGroup
                            label="use help-text"
                            help-text={
                                '이곳에 help-text를 입력하여 설명을 도울 수 있어요'
                            }
                        >
                            <SlRadio value={1}>Option 1</SlRadio>
                            <SlRadio value={2}>Option 2</SlRadio>
                            <SlRadio value={3}>Option 3</SlRadio>
                        </SlRadioGroup>
                    </div>
                    <div className="codePart">
                        <pre>
                            <code className="language-markup">{`
    <SlRadioGroup
        label="use help-text"
        help-text={
            '이곳에 help-text를 입력하여 설명을 도울 수 있어요'
        }
    >
        <SlRadio value={1}>Option 1</SlRadio>
        <SlRadio value={2}>Option 2</SlRadio>
        <SlRadio value={3}>Option 3</SlRadio>
    </SlRadioGroup>
                        `}</code>
                        </pre>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>Radio Color</h5>
                        <SlRadioGroup
                            className="red-color-radio"
                            label="CSS에서 ::part(control--checked) 선택자를 사용하여야함!"
                            value={1}
                        >
                            <SlRadio value={1}>Option 1</SlRadio>
                            <SlRadio value={2}>Option 2</SlRadio>
                            <SlRadio value={3}>Option 3</SlRadio>
                        </SlRadioGroup>
                    </div>
                    <div className="codePart">
                        <SlDetails summary="Code View">
                            <pre>
                                <code className="language-markup">{`
    <style>
        .red-color-radio ::part(control--checked) {
            /* 선택된 Radio */
            background-color: var(--sl-color-red-500);
            border-color: var(--sl-color-red-500);
        }
    </style>
                                ...
    <SlRadioGroup
        className="red-color-radio"
        label="CSS에서 ::part(control--checked) 선택자를 사용하여야함!"
        value={1}
    >
        <SlRadio value={1}>Option 1</SlRadio>
        <SlRadio value={2}>Option 2</SlRadio>
        <SlRadio value={3}>Option 3</SlRadio>
    </SlRadioGroup>
                    `}</code>
                            </pre>
                        </SlDetails>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>버튼식 Radio</h5>
                        <SlRadioGroup
                            label="Select an option"
                            help-text="Select an option that makes you proud."
                        >
                            <SlRadioButton value={1}>Option 1</SlRadioButton>
                            <SlRadioButton value={2}>Option 2</SlRadioButton>
                            <SlRadioButton value={3}>Option 3</SlRadioButton>
                        </SlRadioGroup>
                    </div>
                    <div className="codePart">
                        <pre>
                            <code className="language-markup">{`
    <SlRadioGroup label="Select an option" help-text="Select an option that makes you proud.">
        <SlRadioButton value={1}>Option 1</SlRadioButton>
        <SlRadioButton value={2}>Option 2</SlRadioButton>
        <SlRadioButton value={3}>Option 3</SlRadioButton>
    </SlRadioGroup>
                        `}</code>
                        </pre>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>Radio Button Color</h5>
                        <SlRadioGroup
                            className="red-color-radio"
                            label="CSS에서 ::part(button) 선택자를 사용하여야함!!"
                            value={1}
                        >
                            <SlRadioButton value={1}>Option 1</SlRadioButton>
                            <SlRadioButton value={2}>Option 2</SlRadioButton>
                            <SlRadioButton value={3}>Option 3</SlRadioButton>
                        </SlRadioGroup>
                    </div>
                    <div className="codePart">
                        <SlDetails summary="Core View">
                            <pre>
                                <code className="language-markup">{`
    <style>
        .red-color-radio SlRadioButton:hover::part(button) {
        /* hover된 Radio Button */
            background-color: var(--sl-color-red-500);
            border-color: var(--sl-color-red-500);
        }
        .red-color-radio ::part(button--checked),
        .red-color-radio SlRadioButton:hover::part(button--checked) {
            /* 선택된 Radio Button */
            background-color: var(--sl-color-red-500);
            border-color: var(--sl-color-red-500);
        }
    </style>
                                ...
    <SlRadioGroup
        className="red-color-radio"
        label="CSS에서 ::part(button) 선택자를 사용하여야함!!"
        value={1}
    >
        <SlRadioButton value={1}>Option 1</SlRadioButton>
        <SlRadioButton value={2}>Option 2</SlRadioButton>
        <SlRadioButton value={3}>Option 3</SlRadioButton>
    </SlRadioGroup>
                            `}</code>
                            </pre>
                        </SlDetails>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>Pill 버튼식 Radio</h5>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '.5rem',
                            }}
                        >
                            <SlRadioGroup
                                size="small"
                                label="Select an option"
                                value={1}
                            >
                                <SlRadioButton pill value={1}>
                                    Option 1
                                </SlRadioButton>
                                <SlRadioButton pill value={2}>
                                    Option 2
                                </SlRadioButton>
                                <SlRadioButton pill value={3}>
                                    Option 3
                                </SlRadioButton>
                            </SlRadioGroup>

                            <SlRadioGroup
                                size="medium"
                                label="Select an option"
                                value={2}
                            >
                                <SlRadioButton pill value={1}>
                                    Option 1
                                </SlRadioButton>
                                <SlRadioButton pill value={2}>
                                    Option 2
                                </SlRadioButton>
                                <SlRadioButton pill value={3}>
                                    Option 3
                                </SlRadioButton>
                            </SlRadioGroup>

                            <SlRadioGroup
                                size="large"
                                label="Select an option"
                                value={3}
                            >
                                <SlRadioButton pill value={1}>
                                    Option 1
                                </SlRadioButton>
                                <SlRadioButton pill value={2}>
                                    Option 2
                                </SlRadioButton>
                                <SlRadioButton pill value={3}>
                                    Option 3
                                </SlRadioButton>
                            </SlRadioGroup>
                        </div>
                    </div>
                    <div className="codePart">
                        <SlDetails summary="Code View">
                            <pre>
                                <code className="language-markup">
                                    {`
    <SlRadioGroup
        size="small"
        label="Select an option"
        value={1}
    >
        <SlRadioButton pill value={1}>
            Option 1
        </SlRadioButton>
        <SlRadioButton pill value={2}>
            Option 2
        </SlRadioButton>
        <SlRadioButton pill value={3}>
            Option 3
        </SlRadioButton>
    </SlRadioGroup>

    <SlRadioGroup
        size="medium"
        label="Select an option"
        value={2}
    >
        <SlRadioButton pill value={1}>
            Option 1
        </SlRadioButton>
        <SlRadioButton pill value={2}>
            Option 2
        </SlRadioButton>
        <SlRadioButton pill value={3}>
            Option 3
        </SlRadioButton>
    </SlRadioGroup>

    <SlRadioGroup
        size="large"
        label="Select an option"
        value={3}
    >
        <SlRadioButton pill value={1}>
            Option 1
        </SlRadioButton>
        <SlRadioButton pill value={2}>
            Option 2
        </SlRadioButton>
        <SlRadioButton pill value={3}>
            Option 3
        </SlRadioButton>
    </SlRadioGroup>
                                `}
                                </code>
                            </pre>
                        </SlDetails>
                    </div>
                </div>
                <div>
                    <div className="viewPart">
                        <h5>Prefix Suffix Icons</h5>
                        <SlRadioGroup label="Select an option" value={1}>
                            <SlRadioButton value={1}>
                                <SlIcon slot="prefix" name="archive"></SlIcon>
                                Option1
                            </SlRadioButton>
                            <SlRadioButton value={2}>
                                <SlIcon slot="suffix" name="bag"></SlIcon>
                                Option2
                            </SlRadioButton>
                            <SlRadioButton value={3}>
                                <SlIcon slot="prefix" name="gift"></SlIcon>
                                <SlIcon slot="suffix" name="cart"></SlIcon>
                                Option3
                            </SlRadioButton>
                        </SlRadioGroup>
                    </div>
                    <div className="codePart">
                        <pre>
                            <code className="language-markup">{`
    <SlRadioGroup label="Select an option" value={1}>
        <SlRadioButton value={1}>
            <SlIcon slot="prefix" name="archive"></SlIcon>
            Option1
        </SlRadioButton>
        <SlRadioButton value={2}>
            <SlIcon slot="suffix" name="bag"></SlIcon>
            Option2
        </SlRadioButton>
        <SlRadioButton value={3}>
            <SlIcon slot="prefix" name="gift"></SlIcon>
            <SlIcon slot="suffix" name="cart"></SlIcon>
            Option3
        </SlRadioButton>
    </SlRadioGroup>
                        `}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <div className="viewPart">
                        <h5>Button With Icons</h5>
                        <SlRadioGroup
                            label="Select an option"
                            value={'neutral'}
                        >
                            <SlRadioButton value="angry">
                                <SlIcon
                                    name="emoji-angry"
                                    label="Angry"
                                ></SlIcon>
                            </SlRadioButton>

                            <SlRadioButton value="sad">
                                <SlIcon name="emoji-frown" label="Sad"></SlIcon>
                            </SlRadioButton>

                            <SlRadioButton value="neutral">
                                <SlIcon
                                    name="emoji-neutral"
                                    label="Neutral"
                                ></SlIcon>
                            </SlRadioButton>

                            <SlRadioButton value="happy">
                                <SlIcon
                                    name="emoji-smile"
                                    label="Happy"
                                ></SlIcon>
                            </SlRadioButton>

                            <SlRadioButton value="laughing">
                                <SlIcon
                                    name="emoji-laughing"
                                    label="Laughing"
                                ></SlIcon>
                            </SlRadioButton>
                        </SlRadioGroup>
                    </div>
                    <div className="codePart">
                        <SlDetails summary="Code View">
                            <pre>
                                <code className="language-markup">{`
    <SlRadioGroup
        label="Select an option"
        value={\`neutral\`}
    >
        <SlRadioButton value="angry">
            <SlIcon
                name="emoji-angry"
                label="Angry"
            ></SlIcon>
        </SlRadioButton>

        <SlRadioButton value="sad">
            <SlIcon name="emoji-frown" label="Sad"></SlIcon>
        </SlRadioButton>

        <SlRadioButton value="neutral">
            <SlIcon
                name="emoji-neutral"
                label="Neutral"
            ></SlIcon>
        </SlRadioButton>

        <SlRadioButton value="happy">
            <SlIcon
                name="emoji-smile"
                label="Happy"
            ></SlIcon>
        </SlRadioButton>

        <SlRadioButton value="laughing">
            <SlIcon
                name="emoji-laughing"
                label="Laughing"
            ></SlIcon>
        </SlRadioButton>
    </SlRadioGroup>
                        `}</code>
                            </pre>
                        </SlDetails>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Radio;
