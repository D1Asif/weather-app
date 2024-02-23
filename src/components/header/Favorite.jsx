/* eslint-disable react/prop-types */
import HeartIcon from "../../assets/heart.svg"

export default function Favorite({ onShow }) {
    return (
        <div className="py-2 px-3 hover:bg-black/30 backdrop-blur-md bg-gray-200/10 text-white cursor-pointer flex gap-2 items-center rounded-md transition-all">
            <img src={HeartIcon} alt="" />
            <span onClick={onShow}>Favorite Locations</span>
        </div>
    )
}
