import {JSX} from "react";

interface Props {
    onClick?: () => void;
    tit: string;
    tit2:string;
}
export default function WFullButton({onClick, tit, tit2}:Props):JSX.Element {
    return (
        <div
            onClick={onClick}
            className={`group duration-400 cursor-pointer w-full bg-white border border-gray-200 rounded-md 
            flex items-center justify-center gap-1 py-2 mt-6
            hover:border-mainColor 
            `}>
            <div className={`font-semibold group-hover:text-mainColor duration-400 `}>{tit}</div>
            <div>{tit2}</div>
        </div>
    );
};