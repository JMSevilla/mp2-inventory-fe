//blocks
import { HomeBlocks, AdminRegistrationBlocks } from "../views/Blocks";

export const useLayout = (componentTarget, props) => {
    const {
        
    } = props

    return componentTarget.map(component => {
        switch(component) {
            case "HomeBlocks":
                return <HomeBlocks />
            case 'csrf-admin-registration':
                return <AdminRegistrationBlocks />
            default:
                return <HomeBlocks />
        }
    })
}

/*
    Important reminders :
        - You must include here all your blocks kindly follow the existing pattern by running the application
*/