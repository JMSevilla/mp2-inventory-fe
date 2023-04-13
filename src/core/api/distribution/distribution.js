import { UserTarget } from "../target/user.target";
export const distribution = (requirements, props) => {
    const target = new UserTarget()
    switch(requirements) {
        case 'check-users':
            return target.userCreationDetection(props)
        case 'create-users':
            return target.userCreation(props)
    }
}