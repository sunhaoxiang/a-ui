import { FC, ReactNode } from 'react';
export interface DraggerProps {
    onFile: (files: FileList) => void;
    children: ReactNode;
}
export declare const Dragger: FC<DraggerProps>;
export default Dragger;
