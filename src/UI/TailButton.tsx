interface TailButtonProps{
    caption: React.ReactNode;//문자든 아이콘이든 뭐든 React 안에서 쓸 수 있는 거 다 받을 수 있음
    handleClick?: () => void;
    isSelected?: boolean;
    disabled?: boolean;
    className?: string;
    bcolor?:string;

}

export default function TailButton({caption, bcolor, isSelected, handleClick,
                                       disabled=false, className=""}: TailButtonProps) {

    return (
        <button className={`min-w-[55px] w-fit text-center flex items-center justify-center gap-1.5 
         transition duration-500
         border border-transparent rounded-[5px] 
         text-white
         bg-blue-600
         hover:bg-blue-700
            ${className}
            ${bcolor} 
            ${isSelected ? 'border border-yellow-400' : 'border-transparent'}
            ${disabled ? 'opacity-10 cursor-not-allowed' : 'cursor-pointer'}
        `}
                onClick={handleClick}
                disabled={disabled} // 버튼 비활성화 속성 추가
        >
            {caption}
        </button>
    );
};
