import WishlistItem from "@/components/WishlistItem";
import type { Wish } from "@/utils/services/wish.service";

export default function Wishlist({ wishlist } : { wishlist: Wish[] }) {
    return (
        <div className="flex flex-wrap justify-evenly gap-4">
            {wishlist.map((item: Wish) => {
                return <WishlistItem item={item} key={item.id} />;
            })
            }
        </div>
    )
}