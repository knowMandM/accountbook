Page({
    data: {
        showTopTips: false,

        radioItems: [
            {name: 'cell standard', value: '0'},
            {name: 'cell standard', value: '1', checked: true}
        ],
        checkboxItems: [
            {name: '优惠券', value: '0', checked: true},
            {name: '第N件x元', value: '1'},
            {name: '购物返利', value: '2'}
        ],

        date: "2016-09-01",
        time: "12:01",

        timeTypes:["小时","天","月", "年"],
        timeTypeIndex: 0,

        countryCodes: ["+86", "+80", "+84", "+87"],
        countryCodeIndex: 0,

        countries: ["中国", "美国", "英国"],
        countryIndex: 0,

        spendingTypes:["固定支出", "弹性支出"],
        spendingTypeIndex:0,

        accounts: ["微信号", "QQ", "Email"],
        accountIndex: 0,

        buyOrNot: ["阔以", "不阔以"],
        buyOrNotIndex: 0,

        maxlen:1000,
        curlen:0,

        isAgree: false
    },

    onShow: function() {
        console.log("myapp onShow")
        var app = getApp()
        console.log(app.globalData.query)
    },

    showTopTips: function(){
        console.log("showTopTips")
        var that = this;
        this.setData({
            showTopTips: true
        });
        setTimeout(function(){
            that.setData({
                showTopTips: false
            });
        }, 3000);
    },

    

    onShareAppMessage: function (){
        console.log("onShareAppMessage")
        var obj = {
            title: '自定义转发标题',
            path: '/example/index?id=123'
        }
        return obj
    },

    radioChange: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);

        var radioItems = this.data.radioItems;
        for (var i = 0, len = radioItems.length; i < len; ++i) {
            radioItems[i].checked = radioItems[i].value == e.detail.value;
        }

        this.setData({
            radioItems: radioItems
        });
    },
    checkboxChange: function (e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value);

        var checkboxItems = this.data.checkboxItems, values = e.detail.value;
        for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
            checkboxItems[i].checked = false;

            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if(checkboxItems[i].value == values[j]){
                    checkboxItems[i].checked = true;
                    break;
                }
            }
        }

        this.setData({
            checkboxItems: checkboxItems
        });
    },
    bindDateChange: function (e) {
        this.setData({
            date: e.detail.value
        })
    },
    bindTimeChange: function (e) {
        this.setData({
            time: e.detail.value
        })
    },
    bindCountryCodeChange: function(e){
        console.log('picker country code 发生选择改变，携带值为', e.detail.value);

        this.setData({
            countryCodeIndex: e.detail.value
        })
    },
    bindCountryChange: function(e) {
        console.log('picker country 发生选择改变，携带值为', e.detail.value);

        this.setData({
            countryIndex: e.detail.value
        })
    },
    bindAccountChange: function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);

        this.setData({
            accountIndex: e.detail.value
        })
    },
    bindSpendingType: function(e) {
        console.log('picker Spending 发生选择改变，携带值为', e.detail.value);

        this.setData({
            spendingTypeIndex: e.detail.value
        })
    },
    bindTimeType: function(e) {
        console.log('picker TimeType 发生选择改变，携带值为', e.detail.value);

        this.setData({
            timeTypeIndex: e.detail.value
        })
    },
    bindAgreeChange: function (e) {
        this.setData({
            isAgree: !!e.detail.value.length
        });
    
    },
    bindBuyOrNot: function(e) {
        console.log('picker bindBuyOrNot 发生选择改变，携带值为', e.detail.value);

        this.setData({
            buyOrNotIndex: e.detail.value
        })
    },
    inputCount : function(e){
        this.setData({
            curlen: e.detail.value.length
        })
    },
});