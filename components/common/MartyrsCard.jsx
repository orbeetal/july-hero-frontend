import Link from "next/link";
import CardImage from "./CardImage";

function MartyrsItemCard({ id, name, image, occupation, date, address, lang }) {
  return (
    <>
      <Link
        href={`/${lang}/martyrs/${id}`}
        className="group overflow-hidden rounded-2xl bg-white shadow"
      >
        <div className="relative aspect-square w-full overflow-hidden bg-brand">
          {image && <CardImage src={image} alt={name} />}
        </div>
        <div className="px-2 py-2">
          <h3 className="font-bold">{name}</h3>
          <div>{occupation}</div>
          <div>{address}</div>
          <div className="font-semibold">{date}</div>
        </div>
      </Link>
    </>
  );
}

export default MartyrsItemCard;
