import axios from 'axios';
// 拦截器： token/loading/修改配置
class HYRequest {
    instance;
    constructor(config) {
        this.instance = axios.create(config);
        // 每个instance都添加拦截器
        this.instance.interceptors.request.use((config) => {
            // token / loadinng
            // console.log('全局请求成功！')
            return config;
        }, (err) => {
            // console.log('全局请求失败！')
            return err;
        });
        this.instance.interceptors.response.use((res) => {
            // console.log('全局响应成功❤️～')
            return res;
        }, (err) => {
            // console.log('全局响应失败❌')
            return err;
        });
        // 针对特定的hyReuqet添加拦截器
        if (config.interceptors) {
            this.instance.interceptors.request.use(config.interceptors.requesSuccessFn, config.interceptors.requesFailedFn);
            this.instance.interceptors.response.use(config.interceptors.responseSuccessFn, config.interceptors.responseFailedFn);
        }
    }
    //网络请求的方法
    request(config) {
        // 单次请求的拦截
        if (config.interceptors?.requesSuccessFn) {
            config = config.interceptors.requesSuccessFn(config);
        }
        // 返回 Promise
        return new Promise((resolve, reject) => {
            this.instance
                .request(config)
                .then((res) => {
                // 单次响应的成功拦截处理
                if (config.interceptors?.responseSuccessFn) {
                    res = config.interceptors.responseSuccessFn(res);
                }
                resolve(res);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    get(config) {
        return this.request({ ...config, method: 'GET' });
    }
    post(config) {
        return this.request({ ...config, method: 'POST' });
    }
    delete(config) {
        return this.request({ ...config, method: 'DELETE' });
    }
    put(config) {
        return this.request({ ...config, method: 'PUT' });
    }
    patch(config) {
        return this.request({ ...config, method: 'PATCH' });
    }
}
export default HYRequest;
//# sourceMappingURL=index.js.map