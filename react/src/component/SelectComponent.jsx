import React from 'react';

import { SlSelect, SlOption } from '@shoelace-style/shoelace/dist/react';

function SelectComponent(props) {
    const {
        style = {},
        initValue = '',
        options = [
            {
                text: '',
                value: '',
            },
        ],
        label = null,
        helpText = null,
        placeholder = '',
        eventFunction = () => {},
    } = props;

    return (
        <SlSelect
            style={style}
            defaultValue={initValue}
            label={label ? label : false}
            help-text={helpText ? helpText : false}
            placeholder={placeholder}
            onSlChange={(e) => {
                eventFunction(e.target.value);
            }}
        >
            {options?.map((item, index) => (
                <SlOption key={index} value={item?.value}>
                    {item?.text}
                </SlOption>
            ))}
        </SlSelect>
    );
}

export default SelectComponent;
