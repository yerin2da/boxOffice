import IconImage from "./IconImage";
import {JSX} from "react";
interface Props{
    title:string;
    txt:React.ReactNode;
    txt2:string;
    imageSrc:string;
    onClick: ()=> void;
}
export default function InfoComponent2({title, txt, txt2, imageSrc, onClick}:Props):JSX.Element {
    return (
        <div
            onClick={onClick}
            className={`w-full`}
        >
            <div
                onClick={onClick}
                className={`w-full h-28 sm:h-36 rounded-lg overflow-hidden 
            `}>
                <IconImage imageSrc={imageSrc} className={`w-full h-full object-cover`} title={title}/>
            </div>

            <div className={`text-textBlack`}>
                <p className={`text-xs pt-1.5 pb-0.5 text-gray-500`}>{txt}</p>
                <p className={`text-base multi-ellipsis font-semibold`}>{title}</p>
                <p className={`text-sm multi-ellipsis`}>{txt2}</p>
            </div>

        </div>
    );
};
