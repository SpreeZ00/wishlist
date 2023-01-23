export interface WishlistItem {
    id: number;
    name: string;
    text: string;
    link: string
}

export default function WishlistItem({ item }: { item: WishlistItem }) {
    return (
        <div className="bg-violet-200 px-10 py-2 rounded-sm shadow-xl">
            <h2>{ item.name }</h2>
            <p>{ item.text }</p>
            <a href={ item.link }>Link</a>
        </div>
    )
}