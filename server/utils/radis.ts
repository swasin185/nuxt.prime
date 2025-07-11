import { createClient, type RedisClientType } from 'redis'

let redis: RedisClientType | null = null

export const getRedis = async () => {
  if (!redis) {
    redis = createClient({ url: process.env.REDIS_URL })
    await redis.connect()
  }
  return redis
}