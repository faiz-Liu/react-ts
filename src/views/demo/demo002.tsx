import { PureComponent, ReactNode } from 'react';

interface IProps {
    name: string;
    age?: number;
}

interface IState {
    message: string;
    count: number;
}

interface ISnapshot {
    address: string;
}

class Demo002 extends PureComponent<IProps, IState, ISnapshot> {
    name = '12313';
    state = {
        message: 'message',
        count: 0
    };

    getSnapshotBeforeUpdate() {
        return { address: 'address' };
    }

    componentDidUpdate(
        prevProps: Readonly<IProps>,
        prevState: Readonly<IState>,
        snapshot?: ISnapshot
    ) {}

    render(): ReactNode {
        return (
            <div>
                <div>Demo002</div>
                <div>{this.props.name}</div>
                <div>{this.state.message}</div>
                <div>{this.state.count}</div>
            </div>
        );
    }
}

export default Demo002;
