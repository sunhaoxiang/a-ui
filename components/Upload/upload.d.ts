import { FC, ReactNode } from 'react';
export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';
export interface UploadFile {
    uid: string;
    size: number;
    name: string;
    status?: UploadFileStatus;
    percent?: number;
    raw?: File;
    response?: any;
    error?: any;
}
export interface UploadProps {
    action: string;
    defaultFileList?: UploadFile[];
    accept?: string;
    multiple?: boolean;
    drag?: boolean;
    name?: string;
    headers?: {
        [key: string]: any;
    };
    data?: {
        [key: string]: any;
    };
    withCredentials?: boolean;
    beforeUpload?: (file: File) => boolean | Promise<File>;
    onProgress?: (percentage: number, file: UploadFile) => void;
    onChange?: (file: UploadFile) => void;
    onRemove?: (file: UploadFile) => void;
    onSuccess?: (data: any, file: UploadFile) => void;
    onError?: (err: any, file: UploadFile) => void;
    children?: ReactNode;
}
export declare const Upload: FC<UploadProps>;
export default Upload;
