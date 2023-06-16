import API from "../../utils/oceanapi";

/**
 * 转换日期（暂时失效）
 * @param {*} dateString 
 * @param {*} index 
 */
function formatDate(dateString, index) {
  const parts = dateString.split(' ')[0].split('-');
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10) + index;
  const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  return formattedDate;
};

const page = {

  /**
   * 页面的初始数据
   */
  data: {
    /** 输入框内容 */
    inputContent: '',
    /** 发布时间 */
    reportDate: '2023-06-15 08:00:00',

    list: [{
      date: 'Day1',
      img: '../../images/oceaninfo/icons8-1-100.png',
      /** 海温 ℃ */
      max_sst: '',
      min_sst: '',
      /** 海洋流速 cm/s ℃ */
      max_waterspeed: '',
      min_waterspeed: '',
      /** 浪高 m */
      max_waveheight: '',
      min_waveheight: '',
      /** 风速 cm/s */
      max_windspeed: '',
      min_windspeed: '',
      bg_color: "45deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 17%",
      expanded: true,
    },{
      date: 'Day2',
      img: '../../images/oceaninfo/icons8-2-100.png',
      max_sst: '',
      min_sst: '',
      max_waterspeed: '',
      min_waterspeed: '',
      max_waveheight: '',
      min_waveheight: '',
      max_windspeed: '',
      min_windspeed: '',
      bg_color: "118deg,#fdcb6e 7%,#FF6B95 67%,#45D4FB 30%",
      expanded: false,
    },{
      date: 'Day3',
      img: '../../images/oceaninfo/icons8-3-100.png',
      max_sst: '',
      min_sst: '',
      max_waterspeed: '',
      min_waterspeed: '',
      max_waveheight: '',
      min_waveheight: '',
      max_windspeed: '',
      min_windspeed: '',
      bg_color: "259deg,#FFC796 9%,#FF6B95 67%,#6c5ce7 5%",
      expanded: false,
    },{
      date: 'Day4',
      img: '../../images/oceaninfo/icons8-4-100.png',
      max_sst: '',
      min_sst: '',
      max_waterspeed: '',
      min_waterspeed: '',
      max_waveheight: '',
      min_waveheight: '',
      max_windspeed: '',
      min_windspeed: '',
      bg_color: "45deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 17%",
      expanded: false,
    },{
      date: 'Day5',
      img: '../../images/oceaninfo/icons8-5-100.png',
      max_sst: '',
      min_sst: '',
      max_waterspeed: '',
      min_waterspeed: '',
      max_waveheight: '',
      min_waveheight: '',
      max_windspeed: '',
      min_windspeed: '',
      bg_color: "118deg,#fdcb6e 7%,#FF6B95 67%,#45D4FB 30%",
      expanded: false,
    },{
      date: 'Day6',
      img: '../../images/oceaninfo/icons8-6-100.png',
      max_sst: '',
      min_sst: '',
      max_waterspeed: '',
      min_waterspeed: '',
      max_waveheight: '',
      min_waveheight: '',
      max_windspeed: '',
      min_windspeed: '',
      bg_color: "259deg,#FFC796 9%,#FF6B95 67%,#6c5ce7 5%",
      expanded: false,
    },{
      date: 'Day7',
      img: '../../images/oceaninfo/icons8-7-100.png',
      max_sst: '',
      min_sst: '',
      max_waterspeed: '',
      min_waterspeed: '',
      max_waveheight: '',
      min_waveheight: '',
      max_windspeed: '',
      min_windspeed: '',
      bg_color: "45deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 17%",
      expanded: false,
    }]

  },
  
  space: '江苏省连云港市连云区',

  /**
   * 生命周期函数--监听页面加载
   * @param {{ space:string } | undefined} options 
   */
  onLoad(options) {
    if (options && options.space) {
      this.searchForecastData(options.space);
    } else {
      this.searchForecastData(this.space);
    }
  },

  /**
   * 搜索7天预报数据
   * @param {string} space 地址
   */
  searchForecastData(space){
    API.requestForecastByLocation({
      space,
      onSuccess: (res) =>{
        const data = res.data.data;
        const forecastData = this.ForecastData(data);
          /** 发布时间 */
        const date = forecastData.reportDate;
        const updatedList = this.updateListData(this.data.list, forecastData);

        this.setData({
          forecastData: forecastData,
          reportDate: date,
          list: updatedList
        });
        console.log(this.data.forecastData)
      },
    });
  },

  /**
   * 更新list
   * @param {*} list 页面初始数据列表
   * @param {*} forecastData 气象数据
   */
  updateListData(list, forecastData) {
    return list.map((item, index) => {
      /** 索引与日期的对应关系 */
      const dayIndex = index + 1;
      /** 使用海温数据更新list项 */
      const sst = forecastData.sst[0][`day${dayIndex}`];
      /** 使用海流流速数据更新list项 */
      const waterSpeedForecast = forecastData.seawater.waterSpeed[0][`day${dayIndex}`];
      /** 使用浪高数据更新list项 */
      const waveHeightForecast = forecastData.wave.waveHeight[0][`day${dayIndex}`];
      /** 使用风速数据更新list项 */
      const windSpeedForecast = forecastData.wind.windSpeed[0][`day${dayIndex}`];
      return {
        ...item,
        max_sst: sst.max,
        min_sst: sst.min,
        max_waterspeed: waterSpeedForecast.max,
        min_waterspeed: waterSpeedForecast.min,
        max_waveheight: waveHeightForecast.max,
        min_waveheight: waveHeightForecast.min,
        max_windspeed: windSpeedForecast.max,
        min_windspeed: windSpeedForecast.min,
      };
    });
  },

  /**
   * 处理预报数据
   * @param {*} data 数据
   */
  ForecastData(data){
    const info = {
      reportDate: data.reportDate,
      sst: data.data.sst.map(item => ({
        day1: {
          min: item.day1.min,
          max: item.day1.max
        },
        day2: {
          min: item.day2.min,
          max: item.day2.max
        },
        day3: {
          min: item.day3.min,
          max: item.day3.max
        },
        day4: {
          min: item.day4.min,
          max: item.day4.max
        },
        day5: {
          min: item.day5.min,
          max: item.day5.max
        },
        day6: {
          min: item.day6.min,
          max: item.day6.max
        },
        day7: {
          min: item.day7.min,
          max: item.day7.max
        },
      })),
      seawater: {
        waterSpeed: data.data.seawater.waterSpeed.map(item => ({
          day1: {
            min: item.day1.min,
            max: item.day1.max
          },
          day2: {
            min: item.day2.min,
            max: item.day2.max
          },
          day3: {
            min: item.day3.min,
            max: item.day3.max
          },
          day4: {
            min: item.day4.min,
            max: item.day4.max
          },
          day5: {
            min: item.day5.min,
            max: item.day5.max
          },
          day6: {
            min: item.day6.min,
            max: item.day6.max
          },
          day7: {
            min: item.day7.min,
            max: item.day7.max
          },
        }))
      },
      wave: {
        waveHeight: data.data.wave.waveHeight.map(item => ({
          day1: {
            min: item.day1.min,
            max: item.day1.max
          },
          day2: {
            min: item.day2.min,
            max: item.day2.max
          },
          day3: {
            min: item.day3.min,
            max: item.day3.max
          },
          day4: {
            min: item.day4.min,
            max: item.day4.max
          },
          day5: {
            min: item.day5.min,
            max: item.day5.max
          },
          day6: {
            min: item.day6.min,
            max: item.day6.max
          },
          day7: {
            min: item.day7.min,
            max: item.day7.max
          },
        }))
      },
      wind: {
        windSpeed: data.data.wind.windSpeed.map(item => ({
          day1: {
            min: item.day1.min,
            max: item.day1.max
          },
          day2: {
            min: item.day2.min,
            max: item.day2.max
          },
          day3: {
            min: item.day3.min,
            max: item.day3.max
          },
          day4: {
            min: item.day4.min,
            max: item.day4.max
          },
          day5: {
            min: item.day5.min,
            max: item.day5.max
          },
          day6: {
            min: item.day6.min,
            max: item.day6.max
          },
          day7: {
            min: item.day7.min,
            max: item.day7.max
          },
        }))
      },
    };
    return info;
  },

  /**
   * 刷新
   */
  refresh() {
    this.searchForecastData(this.space);
  },

  /**
   * 下拉回调
   */
  onPullDownRefresh() {
    this.refresh();
    wx.stopPullDownRefresh();
    wx.showToast({ title: '更新成功！', icon: 'none', duration: 1000 });
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
    /** 更新数据 */ 
    this.setData({
      inputContent: event.detail.value,
    });
  },

    /**
   * 搜索按钮点击回调
   */
  onSearchBtnClick() {
    /** 输入是否为空 */ 
    if (this.data.inputContent.length > 0) {
      this.searchForecastData(this.data.inputContent);
      this.clearInputContent();
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
   * 点击切换展开状态
   * @param {*} event 事件对象
   */
  toggleExpand(e) {
    const index = e.currentTarget.dataset.index;
    const item = this.data.list[index];
    const expanded = item.expanded;
    /** 如果当前展开的是第一个项目且已经是展开状态，则不进行任何操作 */
    if (index === 0 && expanded) {
      return;
    }
    /** 收起其他项目 */
    this.data.list.forEach((item, i) => {
      if (i !== index) {
        item.expanded = false;
      }
    });

    /** 更新当前项目的展开状态 */
    item.expanded = !expanded;

    /** 更新当前项目和其他项目的展开状态 */
    const key = `list[${index}].expanded`;
    this.setData({
      [key]: !expanded,
      list: this.data.list
    });
  },

};

Page(page);