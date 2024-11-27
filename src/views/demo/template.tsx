import type { FC, ReactNode } from 'react';
import { memo } from 'react';

interface Iprops {
    children?: ReactNode;
}

const Template: FC<Iprops> = () => {
    return <div>Template</div>;
};

export default memo(Template);
