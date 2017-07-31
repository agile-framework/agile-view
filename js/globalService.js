/**
 * Created by tongmeng on 2016/11/1.
 * 公共服务层
 * 负责数据部分
 */
function commonService($q, $http, global, $rootScope, $location) {

    var getServerData = function (address, propdata,data) {
        //通过$q.defer()创建一个deferred延迟对象，在创建一个deferred实例时，也会创建出来一个派生的promise对象，使用deferred.promise就可以检索到派生的promise
        var deferred = $q.defer();
        var promise = deferred.promise;
        $http.get(global.serviceAddress + address,{params: data})
            .success(function (response) {
                var props = propdata.split('.');
                for (var i = 0, length = props.length; i < length; i++) {
                    response = response[props[i]];
                }
                deferred.resolve(response);
            })
            .error(function (reason) {
                deferred.reject(reason);
            });
        return promise;
    };
    var postServerData = function (address, propdata, data) {
        //通过$q.defer()创建一个deferred延迟对象，在创建一个deferred实例时，也会创建出来一个派生的promise对象，使用deferred.promise就可以检索到派生的promise
        var deferred = $q.defer();
        var promise = deferred.promise;
        $http.post(global.serviceAddress + address, data)
            .success(function (response) {
                var props = propdata.split('.');
                for (var i = 0, length = props.length; i < length; i++) {
                    response = response[props[i]];
                }
                deferred.resolve(response);
            })
            .error(function (reason) {
                deferred.reject(reason);
            });
        return promise;
    };
    var getLocation = function (val) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        $http.get('//maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: val,
                sensor: false
            }
        }).then(function (response) {
            deferred.resolve(response);
        });
        return promise;
    };
    var isLogin = function () {
        var deferred = $q.defer();
        var promise = deferred.promise;
        var isLogin = sessionStorage.getItem('isLogin')
        if (!isLogin) {
            $location.path('errorThree');
            $rootScope.$on('$locationChangeSuccess', function (next, current) {
                deferred.resolve();
            });
        } else {
            deferred.resolve();
        }
        return promise;
    };


    return {
        getServerData: getServerData,
        postServerData: postServerData,
        getLocation: getLocation,
        isLogin: isLogin
    }
}

/**
 *
 * 将服务统一注入到主模块
 */
angular
    .module('agile-view')
    .factory('commonService', commonService)

// 依赖注入
commonService.$inject = ['$q', '$http', 'global', '$rootScope', '$location'];


