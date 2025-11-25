// src/types/react-icons.d.ts
//typeScript시 react-icons 오류 잡기위해서
import { IconBaseProps } from 'react-icons';

declare module 'react-icons/lib/index' {
    export type IconType = (props: IconBaseProps) => React.ReactElement | null;
}
