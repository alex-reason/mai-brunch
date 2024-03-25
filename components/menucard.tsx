import Image, { StaticImageData } from "next/image"

interface MenuCardProps {
    menuItem: {
        title: string,
        description: string,
        price: number,
        image: StaticImageData,
        alt: string
    }
}

const MenuCard = ({ menuItem }: MenuCardProps) => {
    return (
        <article className="flex justify-between gap-10 w-[28rem] h-[10.6rem] bg-white-1 p-6">
            <div>
                <p className="paragraph-1">{menuItem.title}</p>
                <p className="paragraph-2">{menuItem.description}</p>
                <p className="paragraph-2 mt-4">${menuItem.price}</p>
            </div>

            <div>
                <Image alt={menuItem.alt} src={menuItem.image} className="min-w-[8rem] w-[8rem] h-[8rem] object-cover" />
            </div>
        </article>
    )
}

export default MenuCard