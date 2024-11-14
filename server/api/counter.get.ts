export default eventHandler(async () => {
    const storage = useStorage('data') // .data/kv internal file storage
    // const storage = useStorage('vercelkv')
    const counter = ((await storage.getItem('appCounter')) as number) + 1
    storage.setItem('appCounter', counter) // don't await this operation
    return counter
})