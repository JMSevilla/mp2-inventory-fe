import React from "react";
import { ControlledTextField, ControlledButton, ControlledCard, ControlledContainer, ControlledAppbar } from "../../../components";

export const LoginBlocks = (props) => {
    const {
        state,
        setState,
        handleSignin,
        handleChange
    } = props
    return (
        <>
            <ControlledAppbar/>
            <ControlledContainer style={{ marginTop: '100px'}}>
                <ControlledCard>
                    <ControlledTextField 
                        variant='outlined'
                        fullWidth
                        placeholder='Enter username'
                        label='Enter username'
                        style={{
                            marginBottom: '20px'
                        }}
                        name="username"
                        onChange={handleChange}
                        value={state.username}
                    />
                    <ControlledTextField 
                        variant='outlined'
                        fullWidth
                        placeholder='Enter password'
                        label='Enter password'
                        onChange={handleChange}
                        name="password"
                        type="password"
                        value={state.password}
                    />
                    <ControlledButton 
                    style={{ float: 'right', marginTop: '10px', marginBottom: '10px' }}
                    children='SIGN IN'
                    variant='outlined'
                    onClick={handleSignin}
                    />
                </ControlledCard>
            </ControlledContainer>
        </>
    )
}