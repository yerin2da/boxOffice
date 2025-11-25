import {JSX} from "react";

interface Props {
    icon?: React.ReactNode;
    title?: React.ReactNode;
    className?:string;
}

export default function SectionTitle({icon, title, className=''}:Props): JSX.Element {
    return (
        <div className={`font-bold text-lg pb-4 flex items-center gap-1 ${className}`}>{title} {icon}</div>
    );
};