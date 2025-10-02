
import Assets from "../../assets"

const Menu = () => {
    return (
        <div className="flex w-[58px] fixed left-1 md:left-6 top-[150px] bg-primary shadow-2xl rounded-full p-4 gap-5 flex-col items-center">
            <div className="flex w-[40px] h-[40px] justify-center items-center rounded-full shadow-lg bg-primary-light/20">
                <img src={Assets.Home} className="w-[25px] h-[25px] select-none cursor-pointer"/>
            </div>
            <div className="flex">
                <img src={Assets.Bag} className="w-[40px] h-[40px] select-none cursor-pointer"/>
            </div>
            <div className="flex">
                <img src={Assets.ChartPie} className="w-[40px] h-[40px] select-none cursor-pointer"/>
            </div>
            <div className="flex">
                <img src={Assets.ChartPieAlt} className="w-[40px] h-[40px] select-none cursor-pointer"/>
            </div>
            <div className="flex">
                <img src={Assets.Box} className="w-[40px] h-[40px] select-none cursor-pointer"/>
            </div>
        </div>
    )
}

export default Menu