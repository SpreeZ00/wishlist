import { db } from '../client';

export type Wish = {
    id: number;
    title: string;
    description: string | null;
    url: string;
    user: string;
}

export const getWishes = async (): Promise<Wish[]> => {
    return await db.wish.findMany();
}

export const getWish = async (id: number): Promise<Wish | null> => {
    return await db.wish.findUnique({
        where: {
            id: id
        }
    });
}

export const createWish = async (wish: Wish): Promise<Wish> => {
    return await db.wish.create({
        data: wish
    });
}

export const updateWish = async (id: number, wish: Wish): Promise<Wish> => {
    return await db.wish.update({
        where: {
            id: id
        },
        data: wish
    });
}

export const deleteWish = async (id: number): Promise<Wish> => {
    return await db.wish.delete({
        where: {
            id: id
        }
    });
}

