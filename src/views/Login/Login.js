import { useLayout } from "../../utils/useLayout";
import { useState } from "react";

const Login = () => {
    const [state, setState] = useState({
        username : '',
        password : ''
    })
    const handleSignin = () => {
        console.log(state)
    }
    const handleChange = (event) => {
        setState({ ...state, [event.target.name] : event.target.value })
    }
    return useLayout(['csrf-login'], {
        state,
        setState,
        handleSignin,
        handleChange
    })
}

export default Login