import { UserTarget } from "../target/user.target";
export const distribution = (requirements, props) => {
    const target = new UserTarget()
    switch(requirements) {
        case 'check-users':
            return target.userCreationDetection(props)
    }
}