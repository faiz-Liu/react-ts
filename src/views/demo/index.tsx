import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

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
