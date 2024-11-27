import { PureComponent } from 'react';
class Demo002 extends PureComponent {
    name = '12313';
    state = {
        message: 'message',
        count: 0
    };
    getSnapshotBeforeUpdate() {
        return { address: 'address' };
    }
    componentDidUpdate(prevProps, prevState, snapshot) { }
    render() {
        return (<div>
                <div>Demo002</div>
                <div>{this.props.name}</div>
                <div>{this.state.message}</div>
                <div>{this.state.count}</div>
            </div>);
    }
}
export default Demo002;
//# sourceMappingURL=demo002.jsx.map