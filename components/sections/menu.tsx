import { soupSaladMenu, mainMenu, drinksMenu } from "@/public/data/menu-data"
import MenuCard from "../menucard"

const Menu = () => {
    return (
        <section className="section" id="menu">
            <div className="section-container flex-col">
                <h3 className="section-title">Menu</h3>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col items-center gap-4">
                            <h4 className="heading-3">Salad and Soup</h4>
                            {soupSaladMenu.map(item => (<MenuCard menuItem={item} key={item.title} />))}
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <h4 className="heading-3">drinks</h4>
                            {drinksMenu.map(item => (<MenuCard menuItem={item} key={item.title} />))}
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <h4 className="heading-3">Mains</h4>
                        {mainMenu.map(item => (<MenuCard menuItem={item} key={item.title} />))}
                    </div>
                </div>


            </div>
        </section >
    )
}

export default Menu