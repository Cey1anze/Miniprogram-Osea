import API from '../../utils/oceanapi';

const page = {

  /**
   * 页面的初始数据
   */
  data: {
    
    /** 封装列表初始数据 */
    list: [{
      title: "海浪警报",
      up_img: "../../images/oceaninfo/icons8-ocean-wave-100.png",
      up_title: '最新消息：',
      up_time: '更新时间：',
      content: '',
      bg_color: "45deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 17%",
      expanded: false, // 展开状态属性
      expandable: true, // 是否可展开
    }, {
      title: "风暴潮警报",
      up_img: "../../images/oceaninfo/icons8-storm-100.png",
      up_title: '最新消息：',
      up_time: '更新时间：',
      content: '',
      bg_color: "118deg,#fdcb6e 7%,#FF6B95 67%,#45D4FB 30%",
      expanded: false,
      expandable: true,
    }, {
      title: "台风通知",
      up_img: "../../images/oceaninfo/icons8-typhoon-100.png",
      up_title: '最新台风：',
      up_time: '更新时间：',
      content: '',
      bg_color: "259deg,#FFC796 9%,#FF6B95 67%,#6c5ce7 5%",
      expanded: false, 
      expandable: false,
    }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //展示灾害数据
    this.showDisaster();
  },

  /**
   * 展示灾害数据
   */
  showDisaster() {
    // 获取海浪数据
    API.requestOceanWave({
      onSuccess: (res) =>{
        const data = res.data.data;
        const oceanWaveTitle = this.OceanWaveData(data).title;
        const updatetime = this.OceanWaveData(data).updatedate;
        const content = this.OceanWaveData(data).content;
        this.setData({
          oceanwavedata: this.OceanWaveData(data),
          'list[0].up_title': '最新消息：' + oceanWaveTitle,
          'list[0].up_time': '更新时间：' + updatetime,
          'list[0].content': content,
        });
        //数据输出
        console.log(this.data.oceanwavedata)
      },
    });
    API.requestStorm({
      onSuccess: (res) =>{
        const data = res.data.data;
        const stormTitle = this.StormData(data).title;
        const updatetime = this.StormData(data).updatedate;
        const content = this.StormData(data).content
        this.setData({
          stormdata: this.StormData(data),
          'list[1].up_title': '最新消息：' + stormTitle,
          'list[1].up_time': '更新时间：' + updatetime,
          'list[1].content': content,
        });
        //数据输出
        console.log(this.data.stormdata)
      },
    });
    API.requestTyphoon({
      onSuccess: (res) =>{
        const data = res.data.data;
        this.setData({
          typhoondata: this.TyphoonData(data),
        });
        //数据输出
        console.log(this.data.typhoondata)
      },
    });
  },


  /**
   * 处理海浪数据
   * @param {object} data 数据
   */
  OceanWaveData(data){
    const info = {};
    // 标题
    info.title = data.title;
    // 警报等级
    info.warninglevel = data.warningLevel;
    // 发布时间
    info.releasedate = data.releaseDate;
    // 更新时间
    info.updatedate = data.updateDate;
    // 内容
    info.content = data.content;
    return info;
  },

  /**
   * 处理风暴潮数据
   * @param {object} data 数据
   */
  StormData(data){
    const info = {};
    // 标题
    info.title = data.title;
    // 警报等级
    info.warninglevel = data.warningLevel;
    // 发布时间
    info.releasedate = data.releaseDate;
    // 更新时间
    info.updatedate = data.updateDate;
    // 内容
    info.content = data.content;

    return info;
    },
    

  /**
   * 处理台风列表数据
   * @param {object} data 数据
   */
  TyphoonData(data){
    const info = data.map(item => ({
      code: item.code,
      name: item.name,
      updatetime: item.updatetime,
      status: item.status
    }));
    this.setData({
      'list[2].up_title': '最新台风：' + info[0].name,
      'list[2].up_time': '更新时间：' + info[0].updatetime,
    });
    return info;
  },

  /**
   * 点击展开事件
   * @param {*} event 
   */
  toggleExpand(event) {
    const index = event.currentTarget.dataset.index;
    const list = this.data.list;
    const item = list[index];
  
    // 如果卡片是可展开的，并且不是第三个卡片
    if (item.expandable && index !== 2) {
      item.expanded = !item.expanded;
  
      this.setData({
        list: list
      });
    }
  }

};

Page(page);