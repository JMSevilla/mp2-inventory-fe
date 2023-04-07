import React from 'react';
import Button  from '@mui/material/Button';

export const ControlledButton = ({ children, style, onClick, variant, size }) => {
    return (
        <Button style={style} onClick={onClick} variant={variant}  size={size}>
            {children}
        </Button>
    );
};


