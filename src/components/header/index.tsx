import Assets from "../../assets"
import { Menu as MenuIcon } from '@wolmer/jam-icons';

const Header = () => {
    return (
        <div className="flex w-full flex-col md:flex-row items-center">
            <div className="flex w-full">
                <img src={Assets.Logo} className="w-[120px]"/>
            </div>
            <div className="flex w-full justify-end gap-4 items-center">
                <div className="flex">
                    <a href="#" className="text-nowrap">home</a>
                </div>
                <div className="flex">
                    <a href="#" className="text-nowrap">support</a>
                </div>
                <div className="flex">
                    <a href="#" className="text-nowrap">my account</a>
                </div>
                <div className="flex pl-5">
                    <MenuIcon fontSize={30} className="cursor-pointer select-none"/>
                </div>
            </div>
        </div>
    )
}

export default Header