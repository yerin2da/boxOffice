import {JSX} from "react";

interface Props {
    onClick?: () => void;//클릭 없을 수도 있음
    title: string;//반드시 존재
    txt: string;//반드시 존재
    icon_name:string;
    titleClass:string;
    wrapClass:string;
    txtWrapClass:string;
    txtClass:string;
}
export default function InfoComponent3({title, txt, icon_name, wrapClass='', txtWrapClass='', titleClass='', txtClass='',onClick}:Props):JSX.Element {
    return (
        <div
            onClick={onClick}
            className={`group p-4 bg-center bg-no-repeat text-white relative overflow-hidden ${wrapClass} bg-cover `}
            >
            {/* 배경 이미지 확장 영역 */}
            <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                style={{
                    backgroundImage: `url('${process.env.PUBLIC_URL}/img/${icon_name}.jpg')`,
                }}
            />

            <div className={`absolute left-0 bottom-0 w-full h-full flex items-end p-3 bg-gradient-to-t from-black/80 to-transparent`}>

                <div className={`${txtWrapClass} `}>
                    <p className={`text-base  ${titleClass} multi-ellipsis2`}>{title}</p>
                    <p className={`text-xs ${txtClass}`}>{txt}</p>
                </div>
            </div>
        </div>
    );
};
