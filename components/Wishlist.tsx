import WishlistItem from "@/components/WishlistItem";

export default function Wishlist({ wishlist } : { wishlist: { id: number, name: string, text: string, link: string }[] }) {
    return (
        <div className="flex flex-wrap justify-evenly gap-4">
            {wishlist.map((item) => {
                return <WishlistItem item={item} key={item.id} />;
            })
            }
        </div>
    )
}