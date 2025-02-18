import Image from "next/image";
import Link from "next/link";

function MartyrsItemCard({ id, name, image, occupation, date, address }) {
  return (
    <>
      <Link href={`/martyrs/${id}`} className="group overflow-hidden rounded-2xl shadow bg-white">
        <div className="relative aspect-square w-full bg-brand overflow-hidden">
          {image && (
            <Image
              src={image}
              alt={name}
              fill
              className="aspect-square w-full object-cover group-hover:scale-105 transition-all"
              priority
              sizes={100}
              
            />
          )}
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
