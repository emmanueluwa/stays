import CardComponent from "./card";

export default function NewListings() {
  const cards = [
    {
      photo: "/images/house1.png",
      price: "£600pm",
      artist: "Cameron Stewart on Unsplash",
    },
    {
      photo: "/images/house2.png",
      price: "£700pm",
      artist: "Niklas Tidbury on Unsplash",
    },
    {
      photo: "/images/house3.png",
      price: "£800pm",
      artist: "Alexander Kovacs on Unsplash",
    },
    {
      photo: "/images/house4.png",
      price: "£900pm",
      artist: "Trinity Nguyen on Unsplash",
    },
    {
      photo: "/images/house2.png",
      price: "£700pm",
      artist: "Niklas Tidbury on Unsplash",
    },
    {
      photo: "/images/house3.png",
      price: "£800pm",
      artist: "Alexander Kovacs on Unsplash",
    },
    {
      photo: "/images/house4.png",
      price: "£900pm",
      artist: "Trinity Nguyen on Unsplash",
    },
    {
      photo: "/images/house2.png",
      price: "£700pm",
      artist: "Niklas Tidbury on Unsplash",
    },
    {
      photo: "/images/house3.png",
      price: "£800pm",
      artist: "Alexander Kovacs on Unsplash",
    },
    {
      photo: "/images/house4.png",
      price: "£900pm",
      artist: "Trinity Nguyen on Unsplash",
    },
  ];
  return (
    <div className="mx-8 ">
      {/* title */}
      <div className="mt-8">
        <p className="text-[24px]  font-medium">New listings</p>
        <p className="text-orange-900 text-[16px]">View all new listings</p>
      </div>
      {/* listings */}

      <div className="pt-4 flex flex-nowrap overflow-x-scroll w-full space-x-3 pb-4 mb-20">
        {cards.map((card) => (
          <CardComponent
            img={card.photo}
            price={card.price}
            credit={card.artist}
          />
        ))}
      </div>
    </div>
  );
}
