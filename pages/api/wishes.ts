import type {NextApiRequest, NextApiResponse} from "next";
import {getWishes} from "@/utils/services/wish.service";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        // return a list of wishes
        try {
            const wishes = await getWishes();
            if (!wishes) {
                res.status(404).json({ message: 'No wishes found' });
            } else {
                res.status(200).json(wishes);
            }
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}