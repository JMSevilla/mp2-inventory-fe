import { Typography } from "@mui/material";
import { ControlledButton, ControlledTextField, ControlledCard, ControlledContainer, ControlledGrid, ControlledBackdrop } from "../../../components";
import {
    useState
} from 'react'
import { distribution } from "../../../core/api/distribution/distribution";
import { useMessageContext } from "../../../core/context/MessageContext";
import { useHistory } from "react-router-dom";
import { Externalization } from "../../../router/base/externalization";
export const AdminRegistrationBlocks = () => {
    const router = useHistory()
    const { handleToastify } = useMessageContext()
    const masterField = {
        firstname : '',
        lastname: '',
        username :'',
        password: '',
        conpass: '',
        createusertrigger: true
    }
    const [state, setState] = useState(masterField)
    const [open, setOpen] = useState(false)
    const handleChange = (event) => {
        setState({ ...state, [event.target.name] : event.target.value })
    }

    const handleSave = () => {
        setOpen(!open)
        if(!state.firstname || !state.lastname || !state.username ||
            !state.password || !state.conpass) {
                handleToastify(
                    "There's an empty fields. please try again",
                    "top-right",
                    false,
                    true,
                    true,
                    true,
                    undefined,
                    "dark",
                    "error"
                )
                setOpen(false)
            }
        else if(state.password != state.conpass) {
            handleToastify(
                "Password not match",
                "top-right",
                false,
                true,
                true,
                true,
                undefined,
                "dark",
                "error"
            )
            setOpen(false)
        } else {
            distribution('create-users', state).then(response => {
                const { data } = response;
                if(data[0].key == 200) {
                    setOpen(false)
                    handleToastify(
                        "Successfully Created an Account",
                        "top-right",
                        false,
                        true,
                        true,
                        true,
                        undefined,
                        "dark",
                        "success"
                    )
                    setTimeout(() => router.push(Externalization.Home.path), 2000)
                }
            })
        }
    }
    return (
        <>
        <ControlledContainer
        style={{
            marginTop: '100px'
        }}
        >
            <ControlledCard>
                <Typography variant='subtitle1'>Administrator Registration</Typography>
                <ControlledGrid 
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    style={{
                        marginTop: '20px'
                    }}
                    arrMapping={
                        [
                            {
                                xs: 6,
                                children: <ControlledTextField 
                                variant='outlined'
                                placeholder='Enter firstname'
                                label='Firstname'
                                required
                                fullWidth
                                name="firstname"
                                onChange={handleChange}
                                helperText={
                                    !state.firstname && 'Firstname is required.'
                                }
                                error={
                                    !state.firstname && true
                                }
                            />
                            },
                            {
                                xs: 6,
                                children: <ControlledTextField 
                                variant='outlined'
                                placeholder='Enter lastname'
                                label='Lastname'
                                required
                                fullWidth
                                name="lastname"
                                onChange={handleChange}
                                helperText={
                                    !state.lastname && 'Lastname is required.'
                                }
                                error={
                                    !state.lastname && true
                                }
                            />
                            }
                        ]
                    }
                />
                <ControlledGrid 
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    arrMapping={
                        [
                            {
                                xs: 4,
                                children: <ControlledTextField 
                                variant='outlined'
                                placeholder='Enter username'
                                label='Username'
                                required
                                fullWidth
                                name="username"
                                onChange={handleChange}
                                helperText={
                                    !state.username && 'Username is required.'
                                }
                                error={
                                    !state.username && true
                                }
                            />
                            },
                            {
                                xs: 4,
                                children: <ControlledTextField 
                                variant='outlined'
                                placeholder='Enter password'
                                label='Password'
                                required
                                fullWidth
                                name="password"
                                type="password"
                                onChange={handleChange}
                                helperText={
                                    !state.password ? 'Password is required.' : state.password != state.conpass ? 'Password not match' : ''
                                }
                                error={
                                    !state.password ? true : state.password != state.conpass ? true : false
                                }
                            />
                            },
                            {
                                xs: 4,
                                children: <ControlledTextField 
                                variant='outlined'
                                placeholder='Confirm your password'
                                label='Confirm Password'
                                required
                                fullWidth
                                name="conpass"
                                type="password"
                                onChange={handleChange}
                                helperText={
                                    !state.conpass ? 'Confirm password is required.' : state.password != state.conpass ? 'Password not match' : ''
                                }
                                error={
                                    !state.conpass ? true : state.password != state.conpass ? true : false
                                }
                            />  
                            }
                        ]
                    }
                />
                <ControlledButton 
                    style={{
                        float: 'right',
                        marginTop: '10px',
                        marginBottom: '10px'
                    }}
                    children='SAVE'
                    size='small'
                    variant='contained'
                    onClick={() => handleSave()}
                />
            </ControlledCard>
        </ControlledContainer>
        <ControlledBackdrop 
            open={open}
        />
        </>
    )
}