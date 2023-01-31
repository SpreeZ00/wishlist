import type {NextApiRequest, NextApiResponse} from "next";
import { deleteWish, getWish, updateWish } from "@/utils/services/wish.service";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    switch (req.method) {
        case "GET":
            // return a wish
            try {
                const wish = await getWish(Number(id));
                if (!wish) {
                    res.status(404).json({ message: 'Wish not found' });
                } else {
                    res.status(200).json(wish);
                }
            } catch (error: any) {
                res.status(500).json({ error: error.message });
            }
            break;
        case "PUT":
            // update a wish
            try {
                await updateWish(Number(id), req.body);
                res.status(200).json({ message: 'Wish updated successfully' });
            } catch (error: any) {
                res.status(500).json({ error: error.message });
            }
            break;
        case "DELETE":
            // delete a wish
            try {
                await deleteWish(Number(id));
                res.status(200).json({ message: 'Wish deleted successfully' });
            } catch (error: any) {
                res.status(500).json({ error: error.message });
            }
            break;
    }
}