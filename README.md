<h1 align="center">  
<img width="40" height="40" src="https://img.icons8.com/stickers/100/telescope.png" alt="telescope"/>
  Osea
</h1>

<h4 align="center">全面，美观，易用</h4>

<p align="center">  
  <a href="https://github.com/HYBBWuXiDiXi/Miniprogram-Osea">  
    <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-green">  
  </a>  
  <a href="https://github.com/HYBBWuXiDiXi/Miniprogram-Osea/blob/master/LICENSE">  
     <img src="https://img.shields.io/badge/license-MIT-green" alt="license">  
  </a>  
</p>

<p align="center">  
  <a href="#概况">Overview</a>  
  •  
  <a href="#安装">Installation</a>  
  •  
  <a href="#许可证">License</a>  
</p>

# 概况

Osea是一个简易的海洋气象微信小程序，可以执行许多查询功能，例如当地天气状况，最新的海洋灾害预警，近岸海域水文，地区气象情况等。小程序的主要功能基于API，这意味着您只需配置API接口即可轻松使用。想要了解海洋信息，Osea是您的不二之选 !  !

**小程序包括以下功能:**

- 查询当地天气状况以及预报，包括天气，温度，湿度，气压，风向，PM2.5等信息。
- 查询最新的海洋灾害预警，包括海浪警报，风暴潮警报，台风等。
- 查询近岸海域水文，包括天文潮，周期，水位，水温，浪高等。
- 查询地区气象情况，包括海温，海洋流速，浪高，风速等。

# 安装

## 开发环境

微信开发者工具 Stable 1.06.2306020

## step 1:

```
git clone https://github.com/HYBBWuXiDiXi/Miniprogram-Osea.git  
```

## step 2:

### AppID

首次导入项目需要设置 AppID，没有的话可以直接使用测试号。

![](https://gitee.com/ifaswind/image-storage/raw/master/repositories/miniprogram-easyweather/guide-import.png)

### API

本小程序里使用的数据来源于第三方提供的 API。

#### 易源数据

阿里云云市场**易源数据-全国天气预报查询**：

![](https://gitee.com/ifaswind/image-storage/raw/master/repositories/miniprogram-easyweather/guide-market.png)

    传送门：[【万维易源】全国天气预报api接口-气象数据-天气预报-天气查询-历史天气数据【最新版】_空气质量_天气预报_数据API-云市场-阿里云](https://market.aliyun.com/products/57096001/cmapi010812.html)

1. 购买成功后在**管理控制台**页面获取到你的 **AppCode**：

![](https://gitee.com/ifaswind/image-storage/raw/master/repositories/miniprogram-easyweather/guide-get-app-code.png)

2. 然后将你的 **AppCode** 填到 */utils/api.js* 里的 `appCode` 属性中：

![](https://gitee.com/ifaswind/image-storage/raw/master/repositories/miniprogram-easyweather/guide-fill-app-code.png)

#### 预海天气

![](https://cdn.jsdelivr.net/gh/HYBBWuXiDiXi/Blog_Images@main/pic/202306161331230.png)

    传送门：[预海天气]([https://www.foreocean.com/](https://www.foreocean.com/))

    1.开通成功后在**应用中心 -> 我的应用**找到开通的应用，获取到 **令牌(Token)** :

![](https://cdn.jsdelivr.net/gh/HYBBWuXiDiXi/Blog_Images@main/pic/202306161334989.png)

    2.在**基础信息**内复制**令牌(Token)** 填入 */utils/oceanapi.js* 里的 `token` 属性内：

![](https://cdn.jsdelivr.net/gh/HYBBWuXiDiXi/Blog_Images@main/pic/202306161338792.png)

3. 另外还需要注意将 API 的域名添加到项目配置里的 **request 合法域名** 中，否则没有办法请求数据：

![](https://gitee.com/ifaswind/image-storage/raw/master/repositories/miniprogram-easyweather/guide-domain.png)

    或者可以勾选 [ 本地设置 ] 下的 **不校验合法域名...** 选项来进行本地测试：

![](https://gitee.com/ifaswind/image-storage/raw/master/repositories/miniprogram-easyweather/guide-domain-2.png)

# 许可证

本程序遵循 [MIT](https://mit-license.org/) 许可证，使用请遵循此许可证！
