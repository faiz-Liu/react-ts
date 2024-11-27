import HYRequest from './request';
const hyRequest = new HYRequest({
    interceptors: {
        requesSuccessFn: (config) => {
            // console.log('codercba:9002 请求成功')
            return config;
        },
        requesFailedFn: (err) => {
            return err;
        },
        responseSuccessFn: (res) => {
            // console.log('codercba:9002 响应成功')
            return res.data;
        },
        responseFailedFn: (err) => {
            return err;
        }
    }
});
export default hyRequest;
//# sourceMappingURL=index.js.map