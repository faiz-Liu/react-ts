import type { FC, ReactNode } from 'react';
import { memo } from 'react';

interface Iprops {
    name: string;
    age: number;
    height?: number;
    children?: ReactNode;
}

const Demo: FC<Iprops> = () => {
    return <div></div>;
};

export default memo(Demo);
