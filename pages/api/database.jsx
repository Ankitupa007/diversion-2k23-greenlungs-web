export default async function handler(req, res) {
    try {
        // const id = req.query.id
        const response = {
            "name": "Green goblin",
            "lat": "22",
            "log": "88",
            "poster_url": "https://dummyimage.com/600x400/000/fff",
            "description": "html data",
            "status": "ONGOING",
            "address": "GP block, sector V, Bidhannagar, Kolkata",
            "start_date": "23th Feb 2023",
            "end_date": "28th Feb 2023",
            "time": "8:00 AM",
            "organizer": {
                "name": "John Doe",
                "organization": "Lupin foundation",
                "contact": "+919356783630",
                "email": "johndoe@gmail.com"
            },
            "volunteers_count": "144",
            "tree_planted": "12",
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }

}
