/**
 * Agile - 极速响应
 *
 * Agile 使用angular的路由功能管理所有页面
 * 每个页面都被定义为一种状态
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    // 配置Idle闲置任务设置
    IdleProvider.idle(5); // 秒
    IdleProvider.timeout(120); // 秒
    // 工程初始化页面
    $urlRouterProvider.otherwise("/dashboards/dashboard_1");

    $ocLazyLoadProvider.config({
        // 设置为ture时可以查看动态加载过程
        debug: false
    });

    $stateProvider
        .state('dashboards', {
            abstract: true,
            url: "/dashboards",
            templateUrl: "views/common/content.html",
        })
        .state('dashboards.dashboard_1', {
            url: "/dashboard_1",
            templateUrl: "views/dashboard_1.html",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/echarts/echarts.min.js']
                        },
                        {
                            serie: true,
                            name: 'angular-flot',
                            files: [ 'js/plugins/flot/jquery.flot.js', 'js/plugins/flot/jquery.flot.time.js', 'js/plugins/flot/jquery.flot.tooltip.min.js', 'js/plugins/flot/jquery.flot.spline.js', 'js/plugins/flot/jquery.flot.resize.js', 'js/plugins/flot/jquery.flot.pie.js', 'js/plugins/flot/curvedLines.js', 'js/plugins/flot/angular-flot.js', ]
                        },
                        {
                            name: 'angles',
                            files: ['js/plugins/chartJs/angles.js', 'js/plugins/chartJs/Chart.min.js']
                        },
                        {
                            name: 'angular-peity',
                            files: ['js/plugins/peity/jquery.peity.min.js', 'js/plugins/peity/angular-peity.js']
                        }
                    ]);
                }
            }
        })
        .state('product', {
            abstract: true,
            url: "/product",
            cache:'false',
            templateUrl: "views/common/content.html"
        })
        .state('product.list', {
            url: "/list",
            templateUrl: "views/product_list.html",
            data: { pageTitle: '产品信息管理',moduleTitle:'产品管理' },
            controller : 'productQueryCtrl',
            controllerAs: 'productQueryCtrl',
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('product.dir', {
            url: "/dir",
            templateUrl: "views/product_dir.html",
            data: { pageTitle: '产品目录管理',moduleTitle:'产品管理' },
            controller : 'productDirCtrl',
            controllerAs: 'productDirCtrl',
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('product.info', {
            url: "/info",
            templateUrl: "views/product_info.html",
            data: { pageTitle: '产品信息管理',moduleTitle:'产品管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/slick/slick.css','css/plugins/slick/slick-theme.css','js/plugins/slick/slick.min.js']
                        },
                        {
                            name: 'slick',
                            files: ['js/plugins/slick/angular-slick.min.js']
                        }
                    ]);
                }
            }
        })
        .state('product.tpl', {
            url: "/tpl",
            templateUrl: "views/product_tpl.html",
            data: { pageTitle: '产品规格模板',moduleTitle:'产品管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/summernote/summernote.css','css/plugins/summernote/summernote-bs3.css','js/plugins/summernote/summernote.min.js']
                        },
                        {
                            name: 'summernote',
                            files: ['css/plugins/summernote/summernote.css','css/plugins/summernote/summernote-bs3.css','js/plugins/summernote/summernote.min.js','js/plugins/summernote/angular-summernote.min.js']
                        }
                    ]);
                }
            }
        })
        .state('product.imp', {
            url: "/imp",
            templateUrl: "views/product_imp.html",
            data: { pageTitle: '产品信息导入',moduleTitle:'产品管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/summernote/summernote.css','css/plugins/summernote/summernote-bs3.css','js/plugins/summernote/summernote.min.js']
                        },
                        {
                            name: 'summernote',
                            files: ['css/plugins/summernote/summernote.css','css/plugins/summernote/summernote-bs3.css','js/plugins/summernote/summernote.min.js','js/plugins/summernote/angular-summernote.min.js']
                        }
                    ]);
                }
            }
        })
        .state('commodity', {
            abstract: true,
            url: "/commodity",
            cache:'false',
            templateUrl: "views/common/content.html"
        })
        .state('commodity.info', {
            url: "/info",
            templateUrl: "views/commodity_info.html",
            data: { pageTitle: '商品信息管理',moduleTitle:'商品管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('commodity.dir', {
            url: "/dir",
            templateUrl: "views/commodity_dir.html",
            data: { pageTitle: '商品目录管理',moduleTitle:'商品管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('commodity.create', {
            url: "/create",
            templateUrl: "views/commodity_create.html",
            data: { pageTitle: '商品信息新建',moduleTitle:'商品管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('commodity.price', {
            url: "/price",
            templateUrl: "views/commodity_price.html",
            data: { pageTitle: '商品销售价管理',moduleTitle:'商品管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('commodity.qouta', {
            url: "/qouta",
            templateUrl: "views/commodity_qouta.html",
            data: { pageTitle: '商品配额管理',moduleTitle:'商品管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('commodity.publish', {
            url: "/publish",
            templateUrl: "views/commodity_publish.html",
            data: { pageTitle: '商品发布管理',moduleTitle:'商品管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('commodity.shelves', {
            url: "/shelves",
            templateUrl: "views/commodity_shelves.html",
            data: { pageTitle: '商品上下架',moduleTitle:'商品管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('commodity.label', {
            url: "/label",
            templateUrl: "views/commodity_label.html",
            data: { pageTitle: '商品标签管理',moduleTitle:'商品管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('category', {
            abstract: true,
            url: "/category",
            cache:'false',
            templateUrl: "views/common/content.html"
        })
        .state('category.info', {
            url: "/info",
            templateUrl: "views/category_info.html",
            data: { pageTitle: '商品标签管理',moduleTitle:'商品管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('promotion', {
            abstract: true,
            url: "/promotion",
            cache:'false',
            templateUrl: "views/common/content.html"
        })
        .state('promotion.info', {
            url: "/info",
            templateUrl: "views/promotion_info.html",
            data: { pageTitle: '促销活动管理',moduleTitle:'活动管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('promotion.create', {
            url: "/create",
            templateUrl: "views/promotion_create.html",
            data: { pageTitle: '促销活动新建',moduleTitle:'活动管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('promotion.condition', {
            url: "/condition",
            templateUrl: "views/promotion_condition.html",
            data: { pageTitle: '优惠条件管理',moduleTitle:'活动管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('promotion.rule', {
            url: "/rule",
            templateUrl: "views/promotion_rule.html",
            data: { pageTitle: '优惠规则管理',moduleTitle:'活动管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('promotion.type', {
            url: "/type",
            templateUrl: "views/promotion_type.html",
            data: { pageTitle: '活动类别维护',moduleTitle:'活动管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('promotion.dir', {
            url: "/dir",
            templateUrl: "views/promotion_dir.html",
            data: { pageTitle: '活动目录管理',moduleTitle:'活动管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('promotion.shelves', {
            url: "/shelves",
            templateUrl: "views/promotion_shelves.html",
            data: { pageTitle: '活动上下架',moduleTitle:'活动管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('promotion.publish', {
            url: "/publish",
            templateUrl: "views/promotion_publish.html",
            data: { pageTitle: '活动上下架',moduleTitle:'活动管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('batch', {
            abstract: true,
            url: "/batch",
            cache:'false',
            templateUrl: "views/common/content.html"
        })
        .state('batch.sequence', {
            url: "/sequence",
            templateUrl: "views/batch_sequence.html",
            data: { pageTitle: '批量批次查询',moduleTitle:'批量管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('system', {
            abstract: true,
            url: "/system",
            cache:'false',
            templateUrl: "views/common/content.html"
        })
        .state('system.number', {
            url: "/number",
            templateUrl: "views/system_number.html",
            data: { pageTitle: '工号管理',moduleTitle:'系统管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('system.organization', {
            url: "/organization",
            templateUrl: "views/system_organization.html",
            data: { pageTitle: '组织架构',moduleTitle:'系统管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('system.password', {
            url: "/password",
            templateUrl: "views/system_password.html",
            data: { pageTitle: '密码变更',moduleTitle:'系统管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('system.authority', {
            url: "/authority",
            templateUrl: "views/system_authority.html",
            data: { pageTitle: '权限管理',moduleTitle:'系统管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('system.import', {
            url: "/import",
            templateUrl: "views/system_import.html",
            data: { pageTitle: '权限导入',moduleTitle:'系统管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('system.config', {
            url: "/config",
            templateUrl: "views/system_config.html",
            data: { pageTitle: '参数配置',moduleTitle:'系统管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })
        .state('system.test', {
            url: "/test",
            templateUrl: "views/system_test.html",
            data: { pageTitle: '模块测试',moduleTitle:'系统管理' },
            resolve: {
                permission: function (commonService) {
                    return commonService.isLogin();
                },
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/ztree/jquery.ztree.all.min.js','css/plugins/ztree/metroStyle.css']
                        }
                    ]);
                }
            }
        })


        .state('pages', {
            abstract: true,
            url: "/pages",
            templateUrl: "views/common/content.html"
        })
        .state('pages.search_results', {
            url: "/search_results",
            templateUrl: "views/search_results.html",
            data: { pageTitle: '查询结果' }
        })
        .state('pages.empy_page', {
            url: "/empy_page",
            templateUrl: "views/empty_page.html",
            data: { pageTitle: '空页面' }
        })
        .state('login', {
            url: "/login",
            templateUrl: "views/login.html",
            data: { pageTitle: '登陆', specialClass: 'gray-bg' },
            resolve:{
                clearCache:function () {
                    sessionStorage.clear();
                }
            }
        })
        .state('register', {
            url: "/register",
            templateUrl: "views/register.html",
            data: { pageTitle: '注册', specialClass: 'gray-bg' }
        })
        .state('lockscreen', {
            url: "/lockscreen",
            templateUrl: "views/lockscreen.html",
            data: { pageTitle: '锁屏', specialClass: 'gray-bg' },
            resolve:{
                clearCache:function () {
                    sessionStorage.removeItem("menusInfo");
                    sessionStorage.removeItem("roleInfo");
                }
            }
        })
        .state('forgot_password', {
            url: "/forgot_password",
            templateUrl: "views/forgot_password.html",
            data: { pageTitle: '忘记密码', specialClass: 'gray-bg' }
        })
        .state('reset_password', {
            url: "/reset_password",
            templateUrl: "views/reset_password.html",
            data: { pageTitle: '密码重置', specialClass: 'gray-bg' }
        })
        .state('errorOne', {
            url: "/errorOne",
            templateUrl: "views/errorOne.html",
            data: { pageTitle: '404', specialClass: 'gray-bg' }
        })
        .state('errorTwo', {
            url: "/errorTwo",
            templateUrl: "views/errorTwo.html",
            data: { pageTitle: '500', specialClass: 'gray-bg' }
        })
        .state('errorThree', {
            url: "/errorThree",
            templateUrl: "views/errorThree.html",
            data: { pageTitle: '未登录', specialClass: 'gray-bg' }
        })
        .state('landing', {
            url: "/landing",
            templateUrl: "views/landing.html",
            data: { pageTitle: 'Landing page', specialClass: 'landing-page' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/wow/wow.min.js']
                        }
                    ]);
                }
            }
        })

}
angular
    .module('agile-view')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
