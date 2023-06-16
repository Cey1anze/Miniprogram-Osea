import API from '../../utils/oceanapi';

const page = {

  /**
   * 页面的初始数据
   */
  data: {
    /** 输入框内容 */
    inputContent: '',

    animationData: {}, // 用于存储动画实例

    /** 封装列表初始数据 */
    list: [{
      title: 'Day1',
      img: '../../images/oceaninfo/icons8-1-100.png',
      astronomicalTide: '',  // 天文潮（cm）
      period: '',  // 周期（s）
      seaLevel: '',  // 水位（cm）
      sst: '',  // 海温(℃)
      forecastTime: '',  // 预报时间
      surgeHeight: '',  // 风暴潮(cm)
      waveHeight: '',  // 浪高(m)
      waveDirection: '',  // 浪向角度(0~360)
      expanded: true,
      bg_color: "45deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 17%",
    },{
      title: 'Day2',
      img: '../../images/oceaninfo/icons8-2-100.png',
      astronomicalTide: '',  // 天文潮（cm）
      period: '',  // 周期（s）
      seaLevel: '',  // 水位（cm）
      sst: '',  // 海温(℃)
      forecastTime: '',  // 预报时间
      surgeHeight: '',  // 风暴潮(cm)
      waveHeight: '',  // 浪高(m)
      waveDirection: '',  // 浪向角度(0~360)
      expanded: false,
      bg_color: "118deg,#fdcb6e 7%,#FF6B95 67%,#45D4FB 30%",
    },{
      title: 'Day3',
      img: '../../images/oceaninfo/icons8-3-100.png',
      astronomicalTide: '',  // 天文潮（cm）
      period: '',  // 周期（s）
      seaLevel: '',  // 水位（cm）
      sst: '',  // 海温(℃)
      forecastTime: '',  // 预报时间
      surgeHeight: '',  // 风暴潮(cm)
      waveHeight: '',  // 浪高(m)
      waveDirection: '',  // 浪向角度(0~360)
      expanded: false,
      bg_color: "259deg,#FFC796 9%,#FF6B95 67%,#6c5ce7 5%",
    },{
      title: 'Day4',
      img: '../../images/oceaninfo/icons8-4-100.png',
      astronomicalTide: '',  // 天文潮（cm）
      period: '',  // 周期（s）
      seaLevel: '',  // 水位（cm）
      sst: '',  // 海温(℃)
      forecastTime: '',  // 预报时间
      surgeHeight: '',  // 风暴潮(cm)
      waveHeight: '',  // 浪高(m)
      waveDirection: '',  // 浪向角度(0~360)
      expanded: false,
      bg_color: "45deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 17%",
    },{
      title: 'Day5',
      img: '../../images/oceaninfo/icons8-5-100.png',
      astronomicalTide: '',  // 天文潮（cm）
      period: '',  // 周期（s）
      seaLevel: '',  // 水位（cm）
      sst: '',  // 海温(℃)
      forecastTime: '',  // 预报时间
      surgeHeight: '',  // 风暴潮(cm)
      waveHeight: '',  // 浪高(m)
      waveDirection: '',  // 浪向角度(0~360)
      expanded: false,
      bg_color: "118deg,#fdcb6e 7%,#FF6B95 67%,#45D4FB 30%",
    }],

  },
  countyID: 'E02',

  /**
   * 生命周期函数--监听页面加载
   * @param {{ countyID:string } | undefined} options 
   */
  onLoad(options) {
    if (options && options.countyID) {
      this.searchOceanWeather(options.countyID);
    } else {
      this.searchOceanWeather(this.countyID);
    }
  },


  /**
   * 搜索海域天气
   * @param {string} countyID 海域ID
   */
  searchOceanWeather(countyID){
    API.requestOceanweather({
      countyID,
      onSuccess: (res) =>{
        const data = res.data.data;
        this.countyID = data.countyID;
        const oceanweatherData = this.OceanWeatherData(data);
        const previousTitles = this.data.list.map(item => item.title);
        const icons = this.data.list.map(item => item.img);
        const expanded = this.data.list.map(item => item.expanded);
        const bg = this.data.list.map(item => item.bg_color);
        const forecastData = oceanweatherData.forecast.map((item, index) => ({
          title: previousTitles[index],
          img: icons[index],
          astronomicalTide: item.astronomicalTide,
          period: item.period,
          seaLevel: item.seaLevel,
          sst: item.sst,
          forecastTime: item.forecastTime,
          surgeHeight: item.surgeHeight,
          waveHeight: item.waveHeight,
          waveDirection: item.waveDirection,
          bg_color: bg[index],
          expanded: expanded[index],
        }));

        this.setData({
          oceanweather: this.OceanWeatherData(data),
          list: forecastData, // 更新list的数据
        });
        //数据输出
        console.log(this.data.oceanweather);
      },
    });
  },

 /**
  * 处理海域天气数据
  */
 OceanWeatherData(data) {
    const info = {
      countyID: data.countyID,
      releaseDate: data.releaseDate,
      initialTime: data.initialTime,
      forecast: data.forecast
        .filter(item => item.forecastTime.endsWith(' 12:00:00')) // 仅保留每天12点的数据
        .map(item => ({
          astronomicalTide: item.astronomicalTide,
          period: item.period,
          seaLevel: item.seaLevel,
          sst: item.sst,
          forecastTime: item.forecastTime,
          surgeHeight: item.surgeHeight,
          waveHeight: item.waveHeight,
          waveDirection: item.waveDirection,
        })),
    };
    return info;
  },

 /**
   * 清除输入框内容
   */
  clearInputContent() {
    this.setData({ inputContent: '' });
  },

  /**
   * 搜索栏输入变化回调
   * @param {*} event 
   */
  onSearchInputChanged(event) {
    // 更新数据
    this.setData({
      inputContent: event.detail.value,
    });
  },

    /**
   * 搜索按钮点击回调
   */
  onSearchBtnClick() {
    // 输入是否为空
    if (this.data.inputContent.length > 0) {
      const prefix = this.data.inputContent.substring(0, 2);
      if ((prefix >= "E01" && prefix <= "E85") || (prefix >= "N01" && prefix <= "N77") || (prefix >= "S01" && prefix <= "S51")){
        // 调用搜索函数
      this.searchOceanWeather(this.data.inputContent);
      // 清空输入
      this.clearInputContent();
      } else {
        wx.showToast({ title: '请输入正确的海域代码!\nE01~E85,N01~N77,S01~S51', icon: 'none', duration: 3000 });
      }
    } else {
      wx.showToast({ title: '请输入要查询的地址！', icon: 'none', duration: 1000 });
    }
  },

  /**
   * 清除按钮点击回调
   */
  onClearBtnClick() {
    this.clearInputContent();
  },

  /**
   * 刷新
   */
  refresh() {
    this.searchOceanWeather(this.countyID);
  },

  /**
   * 下拉回调
   */
  onPullDownRefresh() {
    // 刷新当前天气
    this.refresh();
    // 取消下拉
    wx.stopPullDownRefresh();
    wx.showToast({ title: '更新成功！', icon: 'none', duration: 1000 });
  },

  /**
   * 点击切换展开状态
   * @param {*} event 事件对象
   */
  toggleExpand(e) {
    const index = e.currentTarget.dataset.index;
    const item = this.data.list[index];
    const expanded = item.expanded;
    if (index === 0 && expanded) {
      // 如果当前展开的是第一个项目且已经是展开状态，则不进行任何操作
      return;
    }
    // 收起其他项目
    this.data.list.forEach((item, i) => {
      if (i !== index) {
        item.expanded = false;
      }
    });

    // 更新当前项目的展开状态
    item.expanded = !expanded;

    // 更新当前项目和其他项目的展开状态
    const key = `list[${index}].expanded`;
    this.setData({
      [key]: !expanded,
      list: this.data.list,
    });
  },
};

Page(page);