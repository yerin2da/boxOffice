import {JSX} from "react";

interface Props {
    imageSrc: string;
    className?: string;
    title: string;
    onClick?: () => void;
}
export default function IconImage({imageSrc='', className='', title, onClick}:Props): JSX.Element {
    return (
        <img src={imageSrc}  alt={title+"이미지" || "이미지"}  title={title+"이미지" || "이미지"} onClick={onClick} className={`image hover:scale-110  transition-transform duration-500 ${className || ''} `}/>
    );
};