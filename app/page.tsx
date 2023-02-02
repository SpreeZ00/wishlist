import Wishlist from "@/components/Wishlist";
import PopupModal from "@/components/PopupModal";
import NewItemForm from "@/components/NewItemForm";

function getWishlist() {
    return fetch('http://localhost:3000/api/wishes')
        .then((res) => res.json())
}
export default async function Home() {
  const wishlist = await getWishlist();

  return (
    <main className="m-2">
      <h1 className="text-3xl text-center font-thin mb-3">Wunschliste</h1>
        <Wishlist wishlist={wishlist} />
      <br />
        <PopupModal title={"Neuen Eintrag hinzufügen"} body={<NewItemForm />} footer={<></>} />
    </main>
  )
}
