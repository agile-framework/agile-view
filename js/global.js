/**
 * Created by tongmeng on 2016/11/1.
 * 全局变量配置文件
 */
angular
    .module('agile-view')
    .constant('global', {
        serviceAddress:location.protocol+"//"+location.hostname+":"+location.port,
        loginInfo:{address:"/agile-view/data/main-menus.json",dataprop:"result.dataSet",role:"identity",menu:"TMLimitTree",detail:"TMStaffDetail"},
        menu:{address:"/agile-view/data/main-menus.json",dataprop:"result.dataSet.TMLimitTree"},
        productList:{address:"/agile-view/data/product-list.json",dataprop:"result.dataSet.TMLimitTree"},
        productDir:{address:"/agile-view/data/channel-type.json",dataprop:"result.dataSet.channelType"},
        productState:{address:"/agile-view/data/product-state.json",dataprop:"result.dataSet.productState"}
    });