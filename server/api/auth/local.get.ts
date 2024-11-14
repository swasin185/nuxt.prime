import { User } from '#auth-utils'
import '~/server/utils/makeUserSession'

export default eventHandler(async (event) => {
    const query = getQuery(event)
    let isAuthen = query.username && query.password
    console.log('Local Authen', query)
    if (isAuthen) await setUserSession(event, makeUserSession({ name: query.username } as User))
    else await clearUserSession(event)
})
