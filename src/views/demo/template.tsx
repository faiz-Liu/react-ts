import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface Iprops {
    children?: ReactNode;
}

const Template: FC<Iprops> = () => {
    return <div>Template</div>;
};

export default memo(Template);
