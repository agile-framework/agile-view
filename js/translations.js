/**
 * Agile - 极速响应
 *
 */
function config($translateProvider) {

    $translateProvider
        .translations('en', {

            // Define all menu elements
            DASHBOARD: 'Dashboard',
            GRAPHS: 'Graphs',
            MAILBOX: 'Mailbox',
            WIDGETS: 'Widgets',
            METRICS: 'Metrics',
            FORMS: 'Forms',
            APPVIEWS: 'App views',
            OTHERPAGES: 'Other pages',
            UIELEMENTS: 'UI elements',
            MISCELLANEOUS: 'Miscellaneous',
            GRIDOPTIONS: 'Grid options',
            TABLES: 'Tables',
            COMMERCE: 'E-commerce',
            GALLERY: 'Gallery',
            MENULEVELS: 'Menu levels',
            ANIMATIONS: 'Animations',
            LANDING: 'Landing page',
            LAYOUTS: 'Layouts',

            // Define some custom text
            WELCOME: 'Welcome Amelia',
            MESSAGEINFO: 'You have 42 messages and 6 notifications.',
            SEARCH: 'Search for something...',
            DEMO: 'Internationalization (sometimes shortened to \"I18N , meaning \"I - eighteen letters -N\") is the process of planning and implementing products and services so that they can easily be adapted to specific local languages and cultures, a process called localization . The internationalization process is sometimes called translation or localization enablement .',

            // 定义datatable参数
            sEmptyTable:     "No data available in table",
            sInfo:           "Showing _START_ to _END_ of _TOTAL_ entries",
            sInfoEmpty:      "Showing 0 to 0 of 0 entries",
            sInfoFiltered:   "(filtered from _MAX_ total entries)",
            sInfoPostFix:    "",
            sInfoThousands:  ",",
            sLengthMenu:     "Show _MENU_ entries",
            sLoadingRecords: "Loading...",
            sProcessing:     "Processing...",
            sSearch:         "Search in results:",
            sZeroRecords:    "No matching records found",
            sFirst:    "First",
            sLast:     "Last",
            sNext:     "Next",
            sPrevious: "Previous",
            sSortAscending:  ": activate to sort column ascending",
            sSortDescending: ": activate to sort column descending"
        })
        .translations('cn', {

            // Define all menu elements
            DASHBOARD: '仪表盘',
            GRAPHS: '曲线图',
            MAILBOX: '邮箱',
            WIDGETS: '窗口小部件',
            METRICS: '指标',
            FORMS: '表单',
            APPVIEWS: '页面应用',
            OTHERPAGES: '其他页面',
            UIELEMENTS: '界面元素',
            MISCELLANEOUS: '其他',
            GRIDOPTIONS: '栅栏格',
            TABLES: '表格',
            COMMERCE: '电子商务',
            GALLERY: '画廊',
            MENULEVELS: '多级菜单',
            ANIMATIONS: '动画',
            LANDING: '登陆页',
            LAYOUTS: '布局',

            // Define some custom text
            WELCOME: '佟盟欢迎您',
            MESSAGEINFO: '您有42个消息和6个通知。',
            SEARCH: '查询 ...',
            DEMO: '国际化是一个规划和实施产品和服务的过程，使他们能够很容易地适应特定的当地语言和文化，一个称为本地化的过程。国际化过程有时被称为翻译或本地化支持。',
            // 定义datatable参数
            sEmptyTable:     "表中没有可用的数据",
            sInfo:           "显示 _START_ 到 _END_条 共 _TOTAL_ 条",
            sInfoEmpty:      "显示 0 到 0 条 共 0 条",
            sInfoFiltered:   "(过滤 _MAX_ 条)",
            sInfoPostFix:    "",
            sInfoThousands:  ",",
            sLengthMenu:     "显示 _MENU_ 条",
            sLoadingRecords: "加载中...",
            sProcessing:     "处理中...",
            sSearch:         "结果中查找:",
            sZeroRecords:    "没有找到匹配的记录",
            sFirst:    "首页",
            sLast:     "末页",
            sNext:     "下一页",
            sPrevious: "上一页",
            sSortAscending:  ": 激活排序列",
            sSortDescending: ": 激活排序列递减"
        });
    $translateProvider.preferredLanguage('cn');

}

angular
    .module('agile-view')
    .config(config)
