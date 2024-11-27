import type { FC, ReactNode } from 'react';
import { memo } from 'react';

interface Iprops {
    children?: ReactNode;
}

const Download: FC<Iprops> = () => {
    return <div>Download</div>;
};

export default memo(Download);
