import Link from "next/link";
interface ProductCardProps {
    id: number;
    name: string;
    price:number;
    image: string;
    description: string;
}

export function CardProduct ({name, price, image, description,id }: ProductCardProps){
    return(
        <Link   href={`/Prodcut/${id}`}>
            <div  dir="rtl" className="w-auto rounded h-[470px] p-3 flex flex-col gap-3 h-auto shadow-md">
                <div className="w-full h-[200px]">
                    <img  src={image} alt={name}    className="w-full h-[200px] object-cover rounded"/>
                </div>
                <div className="w-full flex flex-col pb-2 ">
                    <h1>{name}</h1>
                    <h4>{price} AF</h4>
                    <p className="text-justify text-[16px]">{description}</p>
                </div>
            </div>
        </Link>
    )
}