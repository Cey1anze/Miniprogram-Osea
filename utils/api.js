
/**
 * AppCode
 */
const appCode = '2f06d90d452b419ea305c99e69eb4cf1';

/**
 * 数据源地址
 */
const host = 'https://ali-weather.showapi.com';

/**
 * 请求头
 */
const header = {
    // 身份验证
    'Authorization': `APPCODE ${appCode}`,
};

/**
 * API 封装
 */
const API = {

    /**
     * 通过经纬度查询天气
     * @param {{ latitude: number, longitude: number, onSuccess?: Function, onFail?: Function }} options 
     */
    requestByLocation(options) {
        if (!appCode || appCode === '') {
            console.warn('数据API暂不可用，请联系开发者');
            options.onFail && options.onFail(new Error('数据API暂不可用，请联系开发者'));
            return;
        }
        const query = `from=1&lat=${options.latitude}&lng=${options.longitude}&needIndex=1&needMoreDay=1`;
        wx.request({
            url: `${host}/gps-to-weather?${query}`,
            header: header,
            success: (res) => {
                options.onSuccess && options.onSuccess(res);
            },
            fail: () => {
                options.onFail && options.onFail();
            },
        });
    },

    /**
     * 通过城市名查询天气
     * @param {{ city: string, onSuccess?: Function, onFail?: Function }} options 
     */
    requestByCity(options) {
        if (!appCode || appCode === '') {
            console.warn('数据API暂不可用，请联系开发者');
            options.onFail && options.onFail(new Error('数据API暂不可用，请联系开发者'));
            return;
        }
        const query = `area=${options.city}&needIndex=1&needMoreDay=1`;
        wx.request({
            url: `${host}/area-to-weather?${query}`,
            header: header,
            success: (res) => {
                options.onSuccess && options.onSuccess(res);
            },
            fail: () => {
                options.onFail && options.onFail();
            },
        });
    },

};

export default API;
