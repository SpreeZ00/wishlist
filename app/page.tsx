import WishlistItem from "@/components/WishlistItem";

export default function Home() {
  const wishlist = [{ id: 1, name: "test1", text: "test1", link: "test1" }, { id: 2, name: "test2", text: "test2", link: "test2" },
  { id: 3, name: "test3", text: "test3", link: "test3" }];
  
  return (
    <main className="m-2">
      <h1 className="text-3xl text-center">Wunschliste</h1>
      <div className="flex flex-wrap justify-evenly gap-4">
        {wishlist.map((item) => {
          return <WishlistItem item={item} key={item.id} />;
        })
        }
      </div>
      <br />
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" /><br />
        <label htmlFor="text">Text</label>
        <input type="text" id="text" name="text" /><br />
        <label htmlFor="link">Link</label>
        <input type="text" id="link" name="link" /><br />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}
