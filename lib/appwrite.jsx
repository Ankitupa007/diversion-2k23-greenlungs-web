import { Client } from 'appwrite'

export const initAppwrite = () => {
    const sdk = new Client()
        .setEndpoint(process.env.APPWRITE_ENDPOINT)
        .setProject(process.env.APPWRITE_PROJECT_ID)
        // .setKey(process.env.APPWRITE_SERVER_API_KEY)
    return sdk
}
