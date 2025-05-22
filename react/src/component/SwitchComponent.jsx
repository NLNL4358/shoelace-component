import React from 'react';

import { SlSwitch } from '@shoelace-style/shoelace/dist/react';

function SwitchComponent(props) {
    const {
        style = {},
        text = '',
        helpText = '',
        checked = false,
        size = 'medium',
        disabled = false,
        required = null,
        eventFunction = () => {},
    } = props;
    return (
        <SlSwitch
            style={style}
            size={size}
            checked={checked}
            disabled={disabled}
            help-text={helpText}
            required={required}
            onSlChange={(e) => {
                eventFunction(e.target.checked);
            }}
        >
            {text}
        </SlSwitch>
    );
}

export default SwitchComponent;
