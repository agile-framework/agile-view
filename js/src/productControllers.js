/**
 * Agile - 极速响应
 *
 * productController.js 文件
 * 定义产品模块全部控制器
 *
 *
 * Functions (controllers)
 *  - productCreateCtrl
 *
 *
 */

/**
 * 产品查询控制器
 * 主要负责产品查询功能
 *
 */
function productQueryCtrl($scope,commonService,global) {
    this.editProduct = function (full) {
        console.info(full);
        alert('修改'+angular.toJson(full));
    };
    this.detailProduct = function (full) {
        console.info(full);
        alert('详情'+angular.toJson(full));
    };
    this.deleteProduct = function (full) {
        console.info(full);
        alert('删除'+angular.toJson(full));
    };
    // 商品状态
    commonService.getServerData(global.productState.address,global.productState.dataprop).then(function (response) {
        $scope.productState = response;
    });
}
/**
 * 产品目录控制器
 * 主要负责产品目录查询功能
 *
 */
function productDirCtrl(commonService) {
}
/**
 * 产品上下架控制器
 * 主要负责产品上下架功能
 *
 */
function productTlpCtrl(commonService) {
}
/**
 * 产品导入控制器
 * 主要负责产品导入功能
 *
 */
function productImpCtrl(commonService) {
}




/**
 *
 * 将所有控制层注入到主模块中
 */
angular
    .module('agile-view')
    .controller('productQueryCtrl', productQueryCtrl)
    .controller('productDirCtrl', productDirCtrl)
    .controller('productTlpCtrl', productTlpCtrl)
    .controller('productImpCtrl', productImpCtrl)

/**
 * 控制器注入服务
 */
productQueryCtrl.$inject = ['$scope','commonService','global'];
productDirCtrl.$inject = ['commonService'];
productTlpCtrl.$inject = ['commonService'];
productImpCtrl.$inject = ['commonService'];

// console.info(angular.injector().annotate(productQueryCtrl));