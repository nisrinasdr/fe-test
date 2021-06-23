import home from '../img/home1.png'
import menu from '../img/menu2.png'

const BottomBar = () => {
    return(
        <div className="bottombar">
            <div className="home-btn">
                <img src={home} alt="" />
                <p>Home</p>
            </div>
            <div className="menu-btn">
                <img src={menu} alt="" />
                <p>Menu</p>
            </div>
        </div>
    )
}

export default BottomBar