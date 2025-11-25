import MoreButton from "./MoreButton";
import {JSX} from "react";

interface Props {
   onClick?: () => void;//클릭 없을 수도 있음
   title: string;//반드시 존재
   txt?:string;//txt 없을수도 있음
   icon_name:string

}
export default function InfoComponent7({title,txt, icon_name,onClick}:Props): JSX.Element {
    return (
        <div className={`group cursor-pointer h-fit w-full bg-white rounded-xl overflow-hidden`}>
            <div
                onClick={onClick}
                className={`w-full
                 bg-center bg-no-repeat 
                text-white relative 
                bg-cover h-40 p-3 
            `}
                style={{
                    backgroundImage: `url('${process.env.PUBLIC_URL}/img/${icon_name}.jpg')`,
                }}>
                <div className={`relative z-2 w-fit text-sm bg-mainColor text-white px-4 py-1 rounded-sm`}>{title}</div>
            </div>

            <div className={`flex items-center justify-between p-5 h-fit`}>
                <div className={`text-base font-semibold whitespace-pre-line leading-tight`}>{txt}</div>
                <MoreButton className={`border border-mainColor rounded`}/>
            </div>
        </div>
    )
        ;
}




