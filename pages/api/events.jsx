import { Databases } from 'appwrite'
import { initAppwrite } from '@/lib/appwrite';

export default async function handler(req, res) {
    try {
        let sdk = initAppwrite();
        // console.log(res)
        let database = new Databases(sdk)
        const limit = req.query.limit
        const offset = req.query.offset
        const response = await database.listDocuments(process.env.APPWRITE_DATABASE_ID, process.env.APPWRITE_COLLECTION_ID, [], limit, offset)
        // console.log(response)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }

}
