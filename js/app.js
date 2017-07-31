/**
 * Agile - 极速响应
 *
 */
(function () {
    angular.module('agile-view', [
        'ui.router',                    // 路由模块
        'oc.lazyLoad',                  // 动态化加载模块
        'ui.bootstrap',                 // Bootstrap UI模块
        'pascalprecht.translate',       // 国际化模块
        'ngIdle',                       // 空闲态模块
        'ngSanitize',                    // 审查模块
        'ngCookies'
    ])
})();

// 第三方js包在config.js文件当中被加载进来，加载方式使用angular的动态化加载，类似于require.js