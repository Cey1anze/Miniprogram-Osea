/**
 * Token
 */
const token1 = 'edbce5bfcc26fda96e1032ca914ef106';  //免费版
const token2 = 'aedb7b6200a01a60719e2a3197c694e7';  //试用版（6.12 ~~ 6.27）

/**
 * 数据源地址
 */
const host = 'https://api.foreocean.com';

/**
 * 免费版请求头
 */
const header1 = {
  // 身份验证
  'Token': `${token1}`,
};

/**
 * 试用版请求头
 */
const header2 = {
  // 身份验证
  'Token': `${token2}`,
};

/**
 * API 封装
 */
const API = {

  /**
   * 查询海浪警报
   * @param {{ onSuccess?: Function, onFail?: Function}} options
   */
  requestOceanWave(options){
    if (!token2 || token2 === '') {
      console.warn('数据API暂不可用，请联系开发者');
      options.onFail && options.onFail(new Error('数据API暂不可用，请联系开发者'));
      wx.showModal({
        title: '请求失败',
        content: '数据API暂不可用，请联系开发者',
        confirmText: '我知道了',
        showCancel: false,
      });
      return;
    }
    wx.request({
        url: 'https://api.foreocean.com/warning/seaWave',
        header: header2,
        success: (res) => {
          options.onSuccess && options.onSuccess(res);
        },
        fail: () => {
          options.onFail && options.onFail();
        },
    });
  },

  /**
   * 查询风暴潮警报
   * @param {{ onSuccess?: Function, onFail?: Function}} options
   */
  requestStorm(options){
    if (!token2 || token2 === '') {
      console.warn('数据API暂不可用，请联系开发者');
      options.onFail && options.onFail(new Error('数据API暂不可用，请联系开发者'));
      return;
    }
    wx.request({
        url: 'https://api.foreocean.com/warning/stormTide',
        header: header2,
        success: (res) => {
          options.onSuccess && options.onSuccess(res);
        },
        fail: () => {
          options.onFail && options.onFail();
        },
    });
  },

  /**
   * 查询台风列表
   * @param {{ onSuccess?: Function, onFail?: Function}} options
   */
  requestTyphoon(options){
    if (!token2 || token2 === '') {
      console.warn('数据API暂不可用，请联系开发者');
      options.onFail && options.onFail(new Error('数据API暂不可用，请联系开发者'));
      return;
    }
    wx.request({
        url: 'https://api.foreocean.com/typhoon/list?year=2023',
        header: header2,
        success: (res) => {
          options.onSuccess && options.onSuccess(res);
        },
        fail: () => {
          options.onFail && options.onFail();
        },
    });
  },

  /**
   * 根据ID查询近岸海域气象
   * @param {{ countyID: string , onSuccess?: Function, onFail?: Function }} options
   */
  requestOceanweather(options){
    if (!token1 || token1 === '') {
      console.warn('数据API暂不可用，请联系开发者');
      options.onFail && options.onFail(new Error('数据API暂不可用，请联系开发者'));
      wx.showModal({
        title: '请求失败',
        content: '数据API暂不可用，请联系开发者',
        confirmText: '我知道了',
        showCancel: false,
      });
      return;
    }
    const query = `countyID=${options.countyID}`;
    wx.request({
        url: `${host}/forecast/countyData?${query}`,
        header: header1,
        success: (res) => {
            options.onSuccess && options.onSuccess(res);
        },
        fail: () => {
            options.onFail && options.onFail();
        },
    });
  },

  /**
   * 根据地址关键字查询海洋气象7天预报
   * @param {{ space: String, onSuccess?: Function, onFail?: Function }} options 
   */
  requestForecastByLocation(options) {
    if (!token2 || token2 === '') {
        console.warn('数据API暂不可用，请联系开发者');
        options.onFail && options.onFail(new Error('数据API暂不可用，请联系开发者'));
        wx.showModal({
          title: '请求失败',
          content: '数据API暂不可用，请联系开发者',
          confirmText: '我知道了',
          showCancel: false,
        });
        return;
    }
    const query = `space=${options.space}`;
    wx.request({
        url: `${host}/environment/universal/daily/7d?${query}`,
        header: header2,
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
