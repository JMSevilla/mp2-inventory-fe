//blocks
import { HomeBlocks, AdminRegistrationBlocks, LoginBlocks } from "../views/Blocks";

export const useLayout = (componentTarget, props) => {
    
    return componentTarget.map(component => {
        switch(component) {
            case "HomeBlocks":
                return <HomeBlocks />
            case 'csrf-admin-registration':
                return <AdminRegistrationBlocks />
            case 'csrf-login':
                return <LoginBlocks {...props} />
            default:
                return <HomeBlocks />
        }
    })
}

/*
    Important reminders :
        - You must include here all your blocks kindly follow the existing pattern by running the application
*/