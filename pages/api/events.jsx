import { Databases } from 'appwrite'
import { initAppwrite } from '@/lib/appwrite';

export default async function handler(req, res) {
    try {
        let sdk = initAppwrite();
        // console.log(res)
        let database = new Databases(sdk)
        const { eventID } = req.query
        const limit = req.query.limit
        const offset = req.query.offset
        // const response = await database.listDocuments(process.env.APPWRITE_DATABASE_ID, , [], limit, offset)
        const response = await database.getDocument(process.env.APPWRITE_DATABASE_ID, process.env.APPWRITE_COLLECTION_ID, eventID);
        console.log(response)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }

}
