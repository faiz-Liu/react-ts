import type { FC, ReactNode } from 'react';
import React, { memo } from 'react';

interface Iprops {
    children?: ReactNode;
}

const Focus: FC<Iprops> = () => {
    return <div>Focus</div>;
};

export default memo(Focus);
