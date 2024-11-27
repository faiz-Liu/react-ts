import { FC, memo, ReactNode, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NabBar from '@/views/discover/c-cpns/discover-nav';

interface Iprops {
    children?: ReactNode;
}

const Discover: FC<Iprops> = () => {
    return (
        <div>
            <NabBar />
            <Suspense fallback="">
                <Outlet />
            </Suspense>
        </div>
    );
};

export default memo(Discover);
