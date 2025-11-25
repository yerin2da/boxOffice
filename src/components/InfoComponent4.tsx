import IconImage from "./IconImage";
import {JSX} from "react";
interface Props {
    onClick?: () => void;//클릭 없을 수도 있음
    title: string;//반드시 존재
    icon_name:string;
    titleClass:string;
    imgClass?:string;
}
export default function InfoComponent4({title, icon_name, titleClass='',imgClass='' ,  onClick}:Props): JSX.Element {
    return (
        <div
            onClick={onClick}
            className={`w-full aspect-square`}
        >
            <div className={`bg-mainBg rounded-lg mb-2`}>
                <IconImage imageSrc={`${process.env.PUBLIC_URL}/img/${icon_name}.png`} className={` ${imgClass}`} title={title}/>
            </div>
            <p className={`text-center text-lg font-medium text-textBlack ${titleClass}`}>{title}</p>

        </div>
    );
};
