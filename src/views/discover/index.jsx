import { memo, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NabBar from '@/views/discover/c-cpns/discover-nav';
const Discover = () => {
    return (<div>
            <NabBar />
            <Suspense fallback="">
                <Outlet />
            </Suspense>
        </div>);
};
export default memo(Discover);
//# sourceMappingURL=index.jsx.map