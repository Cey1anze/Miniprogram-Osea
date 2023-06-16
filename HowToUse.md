<div>
<h1 align="center">  
<img width="40" height="40" src="https://img.icons8.com/stickers/100/telescope.png" alt="telescope"/>
  Osea使用文档
</h1>
</div>

# 索引

- 允许定位 - 让我们开始吧！

- 主页面
  
  - 主界面详解
  
  - 底部栏详解

- 分页面
  
  - 海洋灾害警报界面详解
  
  - 近岸海域水文界面详解
  
  - 海洋气象预报界面详解

# 详解

## 允许定位 - 让我们开始吧！

首次允许小程序时，小程序会向用户请求定位服务，点击允许后可正式浏览本小程序。

<img src="https://cdn.jsdelivr.net/gh/HYBBWuXiDiXi/Blog_Images@main/pic/202306161357230.png" title="" alt="" data-align="center">

## 主页面

### 主界面详解

主界面包含搜索栏，数据展示部分，分页面索引按钮。

<img src="https://cdn.jsdelivr.net/gh/HYBBWuXiDiXi/Blog_Images@main/pic/202306161402392.png" title="" alt="" data-align="center">

#### 搜索栏

用户可以在搜索栏输入想要获取天气的城市名，点击搜索按钮或回车后即可搜索到相关城市的天气数据。

**地区名**：点击下图中的地区名小程序将重新定位到当前城市。

**更新按钮**：点击后将更新天气数据。

<img src="https://cdn.jsdelivr.net/gh/HYBBWuXiDiXi/Blog_Images@main/pic/202306161403038.png" title="" alt="" data-align="center">

#### 数据展示部分

此部分包含各种天气数据，包含天气情况，温度，空气，湿度，PM2.5，气压，风向等数据。

<img src="https://cdn.jsdelivr.net/gh/HYBBWuXiDiXi/Blog_Images@main/pic/202306161407458.png" title="" alt="" data-align="center">

**顶部**：展示了当天的平均温度，天气类型以及昼夜温度。

**中部**：展示了当天的空气，湿度，PM2.5，气压，风向等数据。

**底部**：展示了未来几天的天气类型，以及最高和最低温度。

#### 分页面索引按钮

此栏包含了3个分页面的导航按钮，点击后小程序会导航到不同的分页面。

<img src="https://cdn.jsdelivr.net/gh/HYBBWuXiDiXi/Blog_Images@main/pic/202306161409232.png" title="" alt="" data-align="center">

### 底部栏详解

底部栏包含了2个功能，第一个为应用首页，第二个为实时地图（由于在小程序中嵌入地图需要开通企业小程序，故投机取巧了一下）

<img src="https://cdn.jsdelivr.net/gh/HYBBWuXiDiXi/Blog_Images@main/pic/202306161412114.png" title="" alt="" data-align="center">

**实时地图界面**：

<img src="https://cdn.jsdelivr.net/gh/HYBBWuXiDiXi/Blog_Images@main/pic/202306161412596.png" title="" alt="" data-align="center">

## 分页面

### 海洋灾害警报界面详解

此界面以卡片样式展示了3种不同的海洋灾害，包含海浪，风暴潮，台风灾害。

<img src="https://cdn.jsdelivr.net/gh/HYBBWuXiDiXi/Blog_Images@main/pic/202306161414855.png" title="" alt="" data-align="center">

为保证排版正确以及美观，卡片在默认状态下为收起状态，点击卡片后将展开卡片，此时用户可以看到每种灾害对应的详细内容。再次点击卡片将重新收起卡片。

<img src="https://cdn.jsdelivr.net/gh/HYBBWuXiDiXi/Blog_Images@main/pic/202306161416426.png" title="" alt="" data-align="center">

### 近岸海域水文界面详解

此界面主要展示了近岸海域水文以及预报的数据，此界面的数据需要用户输入需要查询的海域ID，在搜索栏展示了海域ID的要求。在默认状态即用户不作任何搜索动作时，界面将展示连云港近岸海域的水文状态。

<img src="https://cdn.jsdelivr.net/gh/HYBBWuXiDiXi/Blog_Images@main/pic/202306161420407.png" title="" alt="" data-align="center">

此界面依旧可以通过点击来收起对应的卡片，每个卡片内的区域都可以向下滑动以查看更多信息。

### 海洋气象预报界面详解

此界面主要展示了海洋气象以及预报的数据，此界面的数据需要用户输入需要查询的地区。地区必须为沿海地区，精确到区，例如：江苏省连云港市连云区。在默认状态即用户不作任何搜索动作时，界面将展示江苏省连云港市连云区的海洋气象状态。

<img src="https://cdn.jsdelivr.net/gh/HYBBWuXiDiXi/Blog_Images@main/pic/202306161423436.png" title="" alt="" data-align="center">

# 项目亮点

**项目结构清晰**：API接口函数与前端js代码分离，每个界面做单独层级，使项目结构清晰。

**界面美观**：采用扁平化设计及响应式布局。将有效信息分类，对信息层级的编排与梳理，将核心内容的路径扁平化，使用户通过更少的路径便迅速获得信息。缩短了数据加载的时间，提高了使用效率，同时可适应不同使用场景。

**操作简洁**：无需繁琐的步骤及说明，用户仅需允许开启定位以及进行简单的搜索即可完整体验本小程序。

**实时更新**：用户仅需下拉界面或点击更新按钮即可获取实时数据，快捷易用。

**无需第三方依赖**：小程序所展示的所有界面及操作均为纯 JS & CSS 设计，无需引用第三方依赖库，可快速部署。

# 已知问题

## 编译问题

1. 在海洋气象预报功能中，出现未定义sst变量无法读取的报错，实测不影响程序正常运行。

<img src="https://cdn.jsdelivr.net/gh/HYBBWuXiDiXi/Blog_Images@main/pic/202306161429248.png" title="" alt="" data-align="center">

2. 未校验合法域名警告，开发者工具开启不校验合法域名即可，在正式环境中需配置request合法域名。

<img src="https://cdn.jsdelivr.net/gh/HYBBWuXiDiXi/Blog_Images@main/pic/202306161502100.png" title="" alt="" data-align="center">

## 优化问题

1. 在海洋气象预报功能以及近岸海域水文功能中，第一栏数据默认展开，却不能点击以收起该卡片，只能通过点击其余卡片的方式使第一栏数据自动收起。

2. 在非主流分辨率设备上页面背景高度不足或过大。
