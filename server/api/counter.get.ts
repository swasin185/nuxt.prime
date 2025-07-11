import { getRedis } from '~/server/utils/radis'

export default eventHandler(async () => {
    const redis = await getRedis()
    const counter : number = await redis.incr('appCounter')
    redis.set('appCounter', counter) // don't await this operation
    return counter
})