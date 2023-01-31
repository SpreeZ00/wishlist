import type {NextApiRequest, NextApiResponse} from "next";
import {createWish, Wish} from "@/utils/services/wish.service";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        // create a new wish
        console.log("Body:", req.body);
        const wish: Wish = req.body;
        try {
            await createWish(wish);
            res.status(201).json({ message: 'Wish created successfully' });
        } catch (error: any) {
            console.log(error.message);
            res.status(500).json({ error: error.message });
        }
    }
}