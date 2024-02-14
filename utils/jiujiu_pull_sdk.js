!function() {
    function e(n, e, o) {
        return new Promise(function(i, r) {
            var d = new XMLHttpRequest();
            // d.withCredentials = !0, d.onreadystatechange = function() {
            //     4 === d.readyState && 200 == d.status && i(JSON.parse(d.responseText));
            // }, d.onerror = function(n) {
            //     r("");
            // }, d.ontimeout = function(n) {
            //     r("");
            // }, 
            // d.open(n, e + function(n) {
            //     // var e = "?";
            //     // for (var o in n) {
            //     //     e += o + "=" + n[o] + "&";
            //     // }
            //     // console.log(n);
            //     return e;
            // }(o), !1), 
            d.send();
            var e = {"code":0,"msg":"success","data":{"config":{"is_allow_area":false,"is_allow_export":false,"front_wuchu_scene":"1011|1012|1013|1047|1048|1049|1005|1006|1106|1107","is_report_analysis_switch":false,"data":{"front_ad_scene_switch":{"config_name":"是否启用场景值屏蔽进入游戏首页导出","config_key":"front_ad_scene_switch","config_val_type":3,"config_val":true,"limit_region":null},"front_all_export_switch":{"config_name":"游戏是否显示导出","config_key":"front_all_export_switch","config_val_type":3,"config_val":false,"limit_region":null},"front_banner_appear":{"config_name":"进⼊结算⻚开始计时，结算⻚banner出现的时间","config_key":"front_banner_appear","config_val_type":4,"config_val":1500,"limit_region":null},"front_banner_change_time":{"config_name":"banner切换时间","config_key":"front_banner_change_time","config_val_type":4,"config_val":10000,"limit_region":null},"front_banner_hide_time":{"config_name":"多久后banner在【继续游戏】按钮上隐藏","config_key":"front_banner_hide_time","config_val_type":4,"config_val":1000,"limit_region":null},"front_banner_ids":{"config_name":"添加的bannerID","config_key":"front_banner_ids","config_val_type":1,"config_val":[],"limit_region":null},"front_banner_number":{"config_name":"banner 展示刷新次数","config_key":"front_banner_number","config_val_type":4,"config_val":3,"limit_region":null},"front_banner_refresh_num":{"config_name":"banner数组显示N次后重新创建刷新","config_key":"front_banner_refresh_num","config_val_type":4,"config_val":5,"limit_region":null},"front_banner_show_time":{"config_name":"误触场景底部 banner 出现时间","config_key":"front_banner_show_time","config_val_type":4,"config_val":1000,"limit_region":null},"front_banner_switch":{"config_name":"游戏中是否显示banner","config_key":"front_banner_switch","config_val_type":3,"config_val":true,"limit_region":null},"front_box_chance":{"config_name":"每关卡宝箱出现概率","config_key":"front_box_chance","config_val_type":4,"config_val":100,"limit_region":null},"front_box_clicks":{"config_name":"猛点宝箱进度条区间","config_key":"front_box_clicks","config_val_type":1,"config_val":["2","8"],"limit_region":null},"front_box_progress":{"config_name":"连续误触百分百随机取值区间","config_key":"front_box_progress","config_val_type":1,"config_val":["30","60"],"limit_region":null},"front_button_move_time":{"config_name":"按钮在 banner 出现挡住按钮后的“x”秒上移时间","config_key":"front_button_move_time","config_val_type":4,"config_val":1000,"limit_region":null},"front_button_up":{"config_name":"进⼊结算⻚开始计时，结算⻚【下⼀关】按钮上 移时间","config_key":"front_button_up","config_val_type":4,"config_val":1000,"limit_region":null},"front_continuegame_start_level":{"config_name":"热门推荐导出页【继续游戏】按钮出现关卡数","config_key":"front_continuegame_start_level","config_val_type":4,"config_val":1,"limit_region":null},"front_create_banner_num":{"config_name":"同个bannerID创建N个banner","config_key":"front_create_banner_num","config_val_type":4,"config_val":1,"limit_region":null},"front_dangezi_switch":{"config_name":"单格子是否开启","config_key":"front_dangezi_switch","config_val_type":3,"config_val":true,"limit_region":null},"front_delay_video_chance":{"config_name":"延迟用户进入视频播放页面的概率","config_key":"front_delay_video_chance","config_val_type":4,"config_val":0,"limit_region":null},"front_double_jump_chance":{"config_name":"导出页调起双倍跳转概率","config_key":"front_double_jump_chance","config_val_type":4,"config_val":0,"limit_region":null},"front_duilian_export_switch":{"config_name":"游戏首页【单独icon位】是否显示","config_key":"front_duilian_export_switch","config_val_type":3,"config_val":false,"limit_region":null},"front_duilian_icon_number":{"config_name":"游戏首页对联每排显示数量","config_key":"front_duilian_icon_number","config_val_type":4,"config_val":3,"limit_region":null},"front_first_box_gate":{"config_name":"第几关出现第一个宝箱误触","config_key":"front_first_box_gate","config_val_type":4,"config_val":1,"limit_region":null},"front_freetips_switch":{"config_name":"游戏内显示【免费领取】","config_key":"front_freetips_switch","config_val_type":3,"config_val":true,"limit_region":null},"front_game_number_official":{"config_name":"控制第几关出现模仿官方返回的按钮","config_key":"front_game_number_official","config_val_type":4,"config_val":3,"limit_region":null},"front_gezi_number":{"config_name":"游戏首页格子广告展示数量","config_key":"front_gezi_number","config_val_type":4,"config_val":1,"limit_region":null},"front_homepage_ad_switch":{"config_name":"进入游戏首页前是否弹导出位（包括好友都在玩包括弹窗、网红、热门推荐）","config_key":"front_homepage_ad_switch","config_val_type":3,"config_val":false,"limit_region":null},"front_homepage_video_chance":{"config_name":"每次⾸次进⼊游戏⾸⻚弹视频的概率","config_key":"front_homepage_video_chance","config_val_type":4,"config_val":0,"limit_region":null},"front_inside_remen_chance":{"config_name":"游戏内热门推荐导出页自动调起的概率","config_key":"front_inside_remen_chance","config_val_type":4,"config_val":100,"limit_region":null},"front_inside_wanghong_chance":{"config_name":"游戏内网红爆款导出页自动调起的概率","config_key":"front_inside_wanghong_chance","config_val_type":4,"config_val":100,"limit_region":null},"front_is_box_force":{"config_name":"是否强制触发宝箱效果","config_key":"front_is_box_force","config_val_type":3,"config_val":false,"limit_region":null},"front_jiesuan_next_export_chance":{"config_name":"点击下一关出现导出页的概率","config_key":"front_jiesuan_next_export_chance","config_val_type":4,"config_val":100,"limit_region":null},"front_jiesuan_tiaozhuan_chance":{"config_name":"结算页调起自动跳转概率","config_key":"front_jiesuan_tiaozhuan_chance","config_val_type":4,"config_val":100,"limit_region":null},"front_jingxi_export_switch":{"config_name":"是否显示首页【点我有惊喜】","config_key":"front_jingxi_export_switch","config_val_type":3,"config_val":true,"limit_region":null},"front_pass_gate":{"config_name":"出现误触关卡数","config_key":"front_pass_gate","config_val_type":4,"config_val":1,"limit_region":null},"front_progress_bar_reduce":{"config_name":"宝箱误触最大点击数的减数","config_key":"front_progress_bar_reduce","config_val_type":4,"config_val":6,"limit_region":null},"front_progress_bar_return":{"config_name":"宝箱误触进度条数值回退值","config_key":"front_progress_bar_return","config_val_type":4,"config_val":0.005,"limit_region":null},"front_randompaly_start_level":{"config_name":"网红爆款导出页【随机玩】出现关卡数","config_key":"front_randompaly_start_level","config_val_type":4,"config_val":1,"limit_region":null},"front_rpt_scene":{"config_name":"标记审核人员列表","config_key":"front_rpt_scene","config_val_type":1,"config_val":["1055"],"limit_region":null},"front_second_box_gate":{"config_name":"第几关出现第二个宝箱","config_key":"front_second_box_gate","config_val_type":4,"config_val":1,"limit_region":null},"front_share_number":{"config_name":"分享次数","config_key":"front_share_number","config_val_type":4,"config_val":0,"limit_region":null},"front_shield_appids":{"config_name":"需要屏蔽套路的appid列表","config_key":"front_shield_appids","config_val_type":1,"config_val":["wx62d9035fd4fd2059"],"limit_region":null},"front_start_game_chance":{"config_name":"点击【开始游戏】自动调起视频的概率","config_key":"front_start_game_chance","config_val_type":4,"config_val":100,"limit_region":null},"front_start_remen_chance":{"config_name":"首屏热门推荐导出页自动调起跳转的概率","config_key":"front_start_remen_chance","config_val_type":4,"config_val":100,"limit_region":null},"front_start_video_number":{"config_name":"点击【开始游戏】允许自动调起视频次数","config_key":"front_start_video_number","config_val_type":4,"config_val":10,"limit_region":null},"front_start_wanghong_chance":{"config_name":"首屏网红爆款导出页自动调起跳转的概率","config_key":"front_start_wanghong_chance","config_val_type":4,"config_val":100,"limit_region":null},"front_time_tag_switch":{"config_name":"时间水印开关","config_key":"front_time_tag_switch","config_val_type":3,"config_val":true,"limit_region":null},"front_top_gezi_gate":{"config_name":"从第⼏关开始可右上⻆出现格⼦广告","config_key":"front_top_gezi_gate","config_val_type":4,"config_val":1,"limit_region":null},"front_wuchu_finish_gate":{"config_name":"从几关开始不支持出现所有误触","config_key":"front_wuchu_finish_gate","config_val_type":4,"config_val":20,"limit_region":null},"front_wuchu_remen_gate":{"config_name":"第N关开始游戏内热⻔推荐可出现误触","config_key":"front_wuchu_remen_gate","config_val_type":4,"config_val":50,"limit_region":null},"front_wuchu_wanghong_gate":{"config_name":"第N关开始游戏内⽹红爆款导出⻚可出现误触","config_key":"front_wuchu_wanghong_gate","config_val_type":4,"config_val":50,"limit_region":null},"front_wx_ad_switch":{"config_name":"游戏首页【插屏广告】是否弹出","config_key":"front_wx_ad_switch","config_val_type":3,"config_val":false,"limit_region":null},"front_wx_duilian_switch":{"config_name":"对联格子广告","config_key":"front_wx_duilian_switch","config_val_type":3,"config_val":false,"limit_region":null}}},"ad":[{"path":"?wxgamecid=CCBgAAoXkpQANuHHHH-lDSew&channel_id=wxbed8569b3cad542c","channel_game_name":"胖妞爱酷跑","channel_game_appid":"wxe9e9f92454118a9f","plan_name":"胖妞爱酷跑","originality":{"id":37982,"copywriting":"胖妞爱酷跑","material":"https:\/\/oss.99huyu.cn\/game_admin\/production\/material\/23202109096139be60cf8cd.jpg"}},{"path":"?wxgamecid=CCBgAAoXkpQANuHHHH-lDSew&channel_id=wxbed8569b3cad542c","channel_game_name":"胖妞爱酷跑","channel_game_appid":"wxe9e9f92454118a9f","plan_name":"胖妞爱酷跑","originality":{"id":37983,"copywriting":"胖妞爱酷跑","material":"https:\/\/oss.99huyu.cn\/game_admin\/production\/material\/232021071360ed4e16151d8.png"}},{"path":"?wxgamecid=CCBgAAoXkpQANuHHHH-lDSew&channel_id=wxbed8569b3cad542c","channel_game_name":"胖妞爱酷跑","channel_game_appid":"wxe9e9f92454118a9f","plan_name":"胖妞爱酷跑","originality":{"id":37984,"copywriting":"胖妞爱酷跑","material":"https:\/\/oss.99huyu.cn\/game_admin\/production\/material\/232021061160c31130c357a.png"}},{"path":"?wxgamecid=CCBgAAoXkpQY8Pvx3p6z5P","channel_game_name":"女孩向前冲","channel_game_appid":"wx5d69d9b5e3ccf1d3","plan_name":"女孩向前冲","originality":{"id":37991,"copywriting":"女孩向前冲","material":"https:\/\/oss.99huyu.cn\/game_admin\/production\/material\/23202109096139c16759929.jpg"}},{"path":"?wxgamecid=CCBgAAoXkpQY8Pvx3p6z5P","channel_game_name":"女孩向前冲","channel_game_appid":"wx5d69d9b5e3ccf1d3","plan_name":"女孩向前冲","originality":{"id":37992,"copywriting":"女孩向前冲","material":"https:\/\/oss.99huyu.cn\/game_admin\/production\/material\/23202109096139c184d6693.jpg"}}],"share":[{"id":220,"share_img":"https:\/\/oss.99huyu.cn\/game_admin\/production\/material\/620210806610cfbf971d56.jpg","share_content":"只有1%的人能这样滑冰！"}]}}
            return e;
        });
    }
    void 0 === window.JJSdkConf && console.error("jiujiu_sdk_conf.js必须放置在jiujiu_sdk.js、jiujiu_pull_sdk.js之前");
    for (var n = {
        JJGameConfigs: function JJGameConfigs() {
            return e("GET", window.JJSdkConf.req_domain + "/game/configs", {
                version: window.JJSdkConf.version,
                app_key: window.JJSdkConf.app_key
            });
        },
        JJGameConfigByKeys: function JJGameConfigByKeys(n) {
            return e("GET", window.JJSdkConf.req_domain + "/get/configs/by/keys", {
                version: window.JJSdkConf.version,
                app_key: window.JJSdkConf.app_key,
                config_key: n
            });
        },
        JJGameShares: function JJGameShares() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e("GET", window.JJSdkConf.req_domain + "/game/shares", {
                app_key: window.JJSdkConf.app_key,
                p_code: n
            });
        },
        JJGameAds: function JJGameAds() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e("GET", window.JJSdkConf.req_domain + "/ads", {
                app_key: window.JJSdkConf.app_key,
                position_id: n
            });
        },
        JJGetGameConfigAdShare: function JJGetGameConfigAdShare() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", o = {};
            return n && (o = n()), o.app_key = window.JJSdkConf.app_key, o.version = window.JJSdkConf.version, 
            void 0 === o.version ? void console.error("配置三合一接口必须小游戏传递版本号") : e("GET", window.JJSdkConf.req_domain + "/batch/configs", o);
        }
    }, o = [ "JJGameConfigs", "JJGameConfigByKeys", "JJGameShares", "JJGameAds", "JJGetGameConfigAdShare" ], i = o.length - 1; i >= 0; i--) {
        !function(n, e) {
            Object.defineProperty(window, n, {
                value: e,
                writable: !1,
                enumerable: !0,
                configurable: !0
            });
        }(o[i], n[o[i]]);
    }
}();