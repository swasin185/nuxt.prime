import { User, UserSession } from '#auth-utils'

export default function (user: User): UserSession {
    if (!user?.login) user.login = user?.email || user?.name || 'guest'
    return {
        user,
        loginTime: new Date().getTime()
    }
}
