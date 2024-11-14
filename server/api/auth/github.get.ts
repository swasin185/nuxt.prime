import { UserSession } from '#auth-utils'
import '~/server/utils/makeUserSession'

export default defineOAuthGitHubEventHandler({
    config: {
        emailRequired: true,
        clientId:
            process.env.NUXT_OAUTH_GITHUB_CLIENT_ID || "Ov23liOeMX8v01deurmg",
        clientSecret:
            process.env.NUXT_OAUTH_GITHUB_CLIENT_SECRET ||
            "66be77cf8f5fe2418bce160e4b3ca7d83b0765a9",
    },
    async onSuccess(event: any, { user }: UserSession) {
        await setUserSession(event, makeUserSession(user))
        return sendRedirect(event, '/')
    }
})
