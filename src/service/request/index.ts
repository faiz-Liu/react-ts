import type { AxiosInstance } from 'axios';
import axios from 'axios';
import { HYRequestConfig } from './type';

// 拦截器： token/loading/修改配置

class HYRequest {
    instance: AxiosInstance;

    constructor(config: HYRequestConfig) {
        this.instance = axios.create(config);
        // 每个instance都添加拦截器
        this.instance.interceptors.request.use(
            (config) => {
                // token / loadinng
                // console.log('全局请求成功！')
                return config;
            },
            (err) => {
                // console.log('全局请求失败！')
                return err;
            }
        );
        this.instance.interceptors.response.use(
            (res) => {
                // console.log('全局响应成功❤️～')
                return res;
            },
            (err) => {
                // console.log('全局响应失败❌')
                return err;
            }
        );

        // 针对特定的hyReuqet添加拦截器
        if (config.interceptors) {
            this.instance.interceptors.request.use(
                config.interceptors.requesSuccessFn as any,
                config.interceptors.requesFailedFn
            );
            this.instance.interceptors.response.use(
                config.interceptors.responseSuccessFn,
                config.interceptors.responseFailedFn
            );
        }
    }

    //网络请求的方法
    request<T = any>(config: HYRequestConfig) {
        // 单次请求的拦截
        if (config.interceptors?.requesSuccessFn) {
            config = config.interceptors.requesSuccessFn(config as any);
        }
        // 返回 Promise
        return new Promise<T>((resolve, reject) => {
            this.instance
                .request<any, T, any>(config)
                .then((res) => {
                    // 单次响应的成功拦截处理
                    if (config.interceptors?.responseSuccessFn) {
                        res = config.interceptors.responseSuccessFn(res as any) as T;
                    }
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    get<T = any>(config: HYRequestConfig<T>) {
        return this.request({ ...config, method: 'GET' });
    }

    post<T = any>(config: HYRequestConfig<T>) {
        return this.request({ ...config, method: 'POST' });
    }

    delete<T = any>(config: HYRequestConfig<T>) {
        return this.request({ ...config, method: 'DELETE' });
    }

    put<T = any>(config: HYRequestConfig<T>) {
        return this.request({ ...config, method: 'PUT' });
    }

    patch<T = any>(config: HYRequestConfig<T>) {
        return this.request({ ...config, method: 'PATCH' });
    }
}

export default HYRequest;
