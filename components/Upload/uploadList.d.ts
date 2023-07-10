import type { FC } from 'react';
import type { UploadFile } from './upload';
export interface UploadListProps {
    fileList: UploadFile[];
    onRemove: (_file: UploadFile) => void;
}
export declare const UploadList: FC<UploadListProps>;
export default UploadList;
