var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
source.getResource = function (movieInfo, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var PROVIDER, DOMAIN, userAgent, urlSearch, parseSearch, csrfToken, LINK_DETAIL, parseTvDetail_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'M4UFREE';
                DOMAIN = "https://m4ufree.tv";
                userAgent = libs.request_getRandomUserAgent();
                urlSearch = DOMAIN + "/search/" + libs.url_slug_search(movieInfo, '-', true) + ".html";
                return [4, libs.request_get(urlSearch, {
                        'user-agent': userAgent,
                        origin: DOMAIN,
                        'x-requested-with': 'XMLHttpRequest',
                        'te': 'trailers',
                    }, true)];
            case 1:
                parseSearch = _a.sent();
                csrfToken = parseSearch('meta[name=csrf-token]').attr('content');
                LINK_DETAIL = "";
                libs.log({ length: parseSearch("div.imagecover").length, urlSearch: urlSearch, csrfToken: csrfToken }, PROVIDER, 'SEARCH');
                parseSearch("div.imagecover").each(function (keySearch, itemSearch) {
                    var title = parseSearch(itemSearch).find("a").attr("title");
                    if (title) {
                        var year = title.match(/\( *([0-9]+)/i);
                        year = year ? year[1] : 0;
                        title = title.replace(/\( *[0-9]+ *\)/i, "").trim();
                        var href = parseSearch(itemSearch).find("a").attr("href");
                        console.log(title, year, href, "--------- M4uFREE SEARCH INFO ---------");
                        if (libs.string_matching_title(movieInfo, title) && year == movieInfo.year) {
                            LINK_DETAIL = href;
                        }
                    }
                });
                libs.log(LINK_DETAIL, PROVIDER, 'LINK DETAIL');
                if (!LINK_DETAIL) {
                    return [2];
                }
                LINK_DETAIL = DOMAIN + "/" + LINK_DETAIL;
                if (!(movieInfo.type == "tv")) return [3, 3];
                return [4, libs.request_get(LINK_DETAIL, {}, true)];
            case 2:
                parseTvDetail_1 = _a.sent();
                parseTvDetail_1('.episode').each(function (key, item) {
                    var id = parseTvDetail_1(item).attr('idepisode');
                    var epiLInk = parseTvDetail_1(item).attr('epilink');
                    var season = parseTvDetail_1(item).attr('season');
                    var episode = parseTvDetail_1(item).attr('episode');
                    var rowname = parseTvDetail_1(item).attr('rowname');
                    libs.log({ id: id, epiLInk: epiLInk, season: season, episode: episode, rowname: rowname }, PROVIDER, 'TVSHOW MATCHING');
                    if (season == movieInfo.season && episode == movieInfo.episode) {
                        LINK_DETAIL = DOMAIN + "/tvshow/" + rowname + "-season-" + season + "-episode-" + episode + "-" + epiLInk + ".html";
                        libs.log(LINK_DETAIL, PROVIDER, 'LINK TV DETAIL');
                    }
                });
                _a.label = 3;
            case 3:
                callback({
                    callback: {
                        provider: PROVIDER,
                        host: PROVIDER,
                        url: LINK_DETAIL,
                        headers: {
                            'user-agent': userAgent
                        },
                        callback: callback,
                        beforeLoadScript: "var W=x;(function(U,S){var f=x,P=U();while(!![]){try{var Q=-parseInt(f('0x132'))/(0x1015+0x24ef+-0x3503)*(-parseInt(f('0x137'))/(-0x2d3*-0x7+0x67*-0x4+0x1*-0x1227))+parseInt(f('0x14a'))/(-0x20d1+-0x1172+0x3246)*(parseInt(f('0x116'))/(0x1652*-0x1+-0x2096+0x36ec))+-parseInt(f(0x12a))/(-0x205d+0x33f*0x5+0x1027)*(-parseInt(f(0x13b))/(-0x4*0x3fd+0xe*0x1+0xfec*0x1))+-parseInt(f('0x11d'))/(-0x1*0x214b+0xfb*0x1+0x2057)+-parseInt(f(0x14e))/(0x24e+-0xe59+-0xc13*-0x1)+-parseInt(f('0x114'))/(0x1c28+0x78c*-0x1+0x1493*-0x1)+-parseInt(f(0x121))/(0x1ee0+-0x3d2+-0xd82*0x2);if(Q===S)break;else P['push'](P['shift']());}catch(D){P['push'](P['shift']());}}}(K,0x192a0*0xd+-0x84d29*-0x3+-0x105f2*0x1e));var e=function(){var U=!![];return function(S,P){var Q=U?function(){var q=x;if(P){var D=P[q('0x14c')](S,arguments);return P=null,D;}}:function(){};return U=![],Q;};}(),r=e(this,function(){var d=x,S={};S[d(0x13f)]=d('0x122');var P=S;return r[d(0x112)]()[d('0x13a')](P['TLQYo'])['toString']()[d(0x12f)](r)[d('0x13a')](d(0x122));});function x(R,o){var r=K();return x=function(e,U){e=e-(-0xaf1+0x3*0xa3f+-0x11*0x11a);var S=r[e];return S;},x(R,o);}function K(){var j=['wQARJ','5|0|2|4|1|3','GoKUh','3859310Iroawb','stringify','zijTw','qBsfn','Udnte','constructor','HoQMj','WryET','24913qhWwEd','PRccL','response','length','rkBWt','142qLSmHE','__proto__','Uxtpg','search','6xrnODq','PHJGx','responseURL','BRbKP','TLQYo','IFhcF','addEventListener','PlSDV','error','exception','console','AyVGP','open','bind','postMessage','449529aLNjDN','VOGmP','apply','status','2747840EFuabU','info','toString','load','11157741gARXxR','responseText','40pdzZTQ','iHMmm','kVzmy','sujvA','ZeyZv','cTkca','suuNR','2846333Sflftk','KEDgY','{}.constructor(\"return this\")( )','uwkfL','10889480ojWrPH','(((.+)+)+)+$','prototype','ymwFW','hUxtS','ReactNativeWebView'];K=function(){return j;};return K();}r();var o=function(){var N=x,U={'HoQMj':N('0x113'),'IFhcF':function(P,Q){return P(Q);},'BRbKP':function(P,Q){return P+Q;},'ASHki':N(0x11f),'sujvA':N(0x129),'suuNR':N('0x118'),'AtyIi':function(P,Q){return P!==Q;},'wQARJ':N(0x142)},S=!![];return function(P,Q){var Y=N,D={'AyVGP':function(k,C){var Z=x;return U[Z(0x140)](k,C);},'KEDgY':function(k,C){var l=x;return U[l(0x13e)](k,C);},'ymwFW':U['ASHki'],'WryET':U[Y('0x119')],'cTkca':U[Y('0x11c')]};if(U['AtyIi'](U[Y(0x127)],U[Y('0x127')]))this[Y(0x141)](U[Y(0x130)],function(){var O=Y,i={};i[O('0x14d')]=this['status'],i[O('0x13d')]=this[O('0x13d')],i[O('0x115')]=this[O(0x115)],i['response']=this[O(0x134)];var w=i;k[O(0x126)][O('0x149')](C[O('0x12b')](w));}),m[Y('0x14c')](this,arguments);else{var m=S?function(){var s=Y;if(Q){if(D[s(0x131)]!==D[s('0x11b')]){var C=Q[s(0x14c)](P,arguments);return Q=null,C;}else{var t;try{t=D[s(0x146)](D,D[s(0x11e)]('return (function() '+D[s(0x124)],');'))();}catch(i){t=k;}return t;}}}:function(){};return S=![],m;}};}(),R=o(this,function(){var X=x,U={'wpVAy':function(w,I){return w!==I;},'PRccL':X(0x11a),'PHJGx':function(w,I){return w(I);},'Udnte':function(w,I){return w+I;},'zijTw':'return (function() ','rkBWt':X('0x11f'),'VOGmP':'log','BgUso':'warn','rOvJX':X(0x14f),'hUxtS':X('0x143'),'iHMmm':'table','qBsfn':'trace','Uxtpg':function(w,I){return w<I;},'moclK':X(0x128)},S=function(){var c=X,w;try{if(U['wpVAy'](c(0x11a),U[c(0x133)])){if(D){var L=v[c(0x14c)](t,arguments);return i=null,L;}}else w=U[c('0x13c')](Function,U[c(0x12e)](U[c('0x12e')](U[c('0x12c')],U[c('0x136')]),');'))();}catch(L){w=window;}return w;},P=S(),Q=P[X('0x145')]=P[X('0x145')]||{},D=[U[X('0x14b')],U['BgUso'],U['rOvJX'],U[X('0x125')],X('0x144'),U[X(0x117)],U[X(0x12d)]];for(var m=-0x371+0x780+-0x40f;U[X(0x139)](m,D[X(0x135)]);m++){var k=U['moclK']['split']('|'),C=0x18b0+-0x1293+-0x5*0x139;while(!![]){switch(k[C++]){case'0':var v=D[m];continue;case'1':i['toString']=t['toString'][X(0x148)](t);continue;case'2':var t=Q[v]||i;continue;case'3':Q[v]=i;continue;case'4':i[X('0x138')]=o[X(0x148)](o);continue;case'5':var i=o[X('0x12f')][X('0x123')][X('0x148')](o);continue;}break;}}});R();var open=XMLHttpRequest['prototype'][W('0x147')];XMLHttpRequest[W('0x123')]['open']=function(){var n=W,S={};S['uwkfL']=n('0x113');var P=S;this[n('0x141')](P[n('0x120')],function(){var H=n,Q={};Q[H(0x14d)]=this[H(0x14d)],Q[H(0x13d)]=this['responseURL'],Q[H('0x115')]=this[H(0x115)],Q[H(0x134)]=this[H('0x134')];var D=Q;window['ReactNativeWebView']['postMessage'](JSON[H('0x12b')](D));}),open[n('0x14c')](this,arguments);};",
                        metadata: {
                            PROVIDER: PROVIDER,
                            DOMAIN: DOMAIN,
                            movieInfo: movieInfo,
                            userAgent: userAgent,
                        }
                    }
                });
                return [2, true];
        }
    });
}); };
