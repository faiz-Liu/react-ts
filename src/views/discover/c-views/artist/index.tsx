import type { FC, ReactNode } from 'react';
import React, { memo } from 'react';

interface Iprops {
    children?: ReactNode;
}

const Artist: FC<Iprops> = () => {
    return <div>Artist</div>;
};

export default memo(Artist);