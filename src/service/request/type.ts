import type { AxiosResponse, AxiosRequestConfig } from 'axios';

// 扩展 AxiosRequestConfig 类型，使其支持传入拦截器
export interface HYInterceptors<T = AxiosResponse> {
    requesSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig;
    requesFailedFn?: (err: any) => any;
    // responseSuccessFn?: (config: T) => T
    responseSuccessFn?: (config: any) => any;
    responseFailedFn?: (err: any) => any;
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: HYInterceptors<T>;
}
