import React from 'react';
import Button  from '@mui/material/Button';

export const ControlledButton = ({ children, style, onClick, variant, textContent, size }) => {
    return (
        <Button style={style} onClick={onClick} variant={variant} textContent={textContent} size={size}>
            {children}
        </Button>
    );
};


