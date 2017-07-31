/**
 * Agile - 极速响应
 *
 * commodityController.js 文件
 * 定义商品模块全部控制器
 *
 *
 * Functions (controllers)
 *  - commodityCreateCtrl
 *
 *
 */

/**
 * 商品新建控制器
 * 主要负责商品新建功能
 *
 */
function commodityCreateCtrl(commonService) {
}
/**
 * 商品查询控制器
 * 主要负责商品查询功能
 *
 */
function commodityQueryCtrl(commonService) {
}
/**
 * 商品定价控制器
 * 主要负责商品定价功能
 *
 */
function commodityPriceCtrl(commonService) {
}
/**
 * 商品上下架控制器
 * 主要负责商品上下架功能
 *
 */
function commodityShelvesCtrl(commonService) {
}
/**
 * 商品配额架控制器
 * 主要负责商品配额架功能
 *
 */
function commodityQuotaCtrl(commonService) {
}
/**
 * 商品发布架控制器
 * 主要负责商品发布架功能
 *
 */
function commodityPublishCtrl(commonService) {
}
/**
 * 商品标签架控制器
 * 主要负责商品标签架功能
 *
 */
function commodityLabelCtrl(commonService) {
}




/**
 *
 * 将所有控制层注入到主模块中
 */
angular
    .module('agile-view')
    .controller('commodityCreateCtrl', commodityCreateCtrl)
    .controller('commodityQueryCtrl', commodityQueryCtrl)
    .controller('commodityPriceCtrl', commodityPriceCtrl)
    .controller('commodityShelvesCtrl', commodityShelvesCtrl)
    .controller('commodityQuotaCtrl', commodityQuotaCtrl)
    .controller('commodityPublishCtrl', commodityPublishCtrl)
    .controller('commodityLabelCtrl', commodityLabelCtrl);

/**
 * 控制器注入服务
 */
commodityCreateCtrl.$inject = ['commonService'];
commodityQueryCtrl.$inject = ['commonService'];
commodityPriceCtrl.$inject = ['commonService'];
commodityShelvesCtrl.$inject = ['commonService'];
commodityQuotaCtrl.$inject = ['commonService'];
commodityPublishCtrl.$inject = ['commonService'];
commodityLabelCtrl.$inject = ['commonService'];

