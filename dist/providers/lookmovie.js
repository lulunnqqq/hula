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
    var PROVIDER, HOST, DOMAIN, PROXY, userAgent, LINK_DETAIL, urlSearchMovie, urlSearchTvshow, parseSearch, parseDetailTv_1, scriptTv_1, tvInfo, _i, _a, seasonItem, parseDetailMovie, linkRedirect;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'LOOKMOVIE';
                HOST = 'LookMovie';
                DOMAIN = "https://lookmovie.io";
                PROXY = "https://cors-anywhere.herokuapp.com/";
                userAgent = libs.request_getRandomUserAgent();
                LINK_DETAIL = '';
                urlSearchMovie = DOMAIN + "/movies/search/?q=" + libs.url_slug_search(movieInfo, '%20');
                urlSearchTvshow = DOMAIN + "/shows/search/?q=" + libs.url_slug_search(movieInfo, '%20');
                parseSearch = null;
                if (!(movieInfo.type == 'movie')) return [3, 2];
                return [4, libs.request_get(urlSearchMovie, {}, true)];
            case 1:
                parseSearch = _b.sent();
                return [3, 4];
            case 2: return [4, libs.request_get(urlSearchTvshow, {}, true)];
            case 3:
                parseSearch = _b.sent();
                _b.label = 4;
            case 4:
                libs.log({ length: parseSearch('.movie-item-style-2').length }, PROVIDER, 'SEARCH TOTAL');
                parseSearch('.movie-item-style-2').each(function (key, item) {
                    var title = parseSearch(item).find('.mv-item-infor a').text();
                    var href = parseSearch(item).find('.mv-item-infor a').attr('href');
                    var year = parseSearch(item).find('.year').text();
                    if (libs.string_matching_title(movieInfo, title) && !LINK_DETAIL) {
                        if (movieInfo.type == 'movie' && year == movieInfo.year) {
                            LINK_DETAIL = href;
                        }
                        else if (movieInfo.type == 'tv') {
                            LINK_DETAIL = href;
                        }
                    }
                });
                libs.log(LINK_DETAIL, PROVIDER, 'LINK DETAIL');
                if (!LINK_DETAIL) {
                    return [2];
                }
                LINK_DETAIL = "" + DOMAIN + LINK_DETAIL;
                if (!(movieInfo.type == 'tv')) return [3, 6];
                return [4, libs.request_get(LINK_DETAIL, {}, true)];
            case 5:
                parseDetailTv_1 = _b.sent();
                scriptTv_1 = '';
                parseDetailTv_1('script').each(function (key, item) {
                    var scriptData = parseDetailTv_1(item).text();
                    if (scriptData && scriptData.indexOf("window['show_storage']") != -1) {
                        scriptTv_1 = scriptData;
                    }
                });
                libs.log(scriptTv_1, PROVIDER, 'SCRIPT TV');
                if (!scriptTv_1) {
                    return [2];
                }
                tvInfo = {};
                scriptTv_1 = scriptTv_1.replace("window['show_storage']", "tvInfo");
                libs.log(scriptTv_1, PROVIDER, 'REPLACE SCRIPT TV');
                eval(scriptTv_1);
                libs.log(tvInfo, PROVIDER, 'TV INFO');
                if (!tvInfo.seasons) {
                    return [2];
                }
                for (_i = 0, _a = tvInfo.seasons; _i < _a.length; _i++) {
                    seasonItem = _a[_i];
                    if (seasonItem.season == movieInfo.season && seasonItem.episode == movieInfo.episode) {
                        LINK_DETAIL = LINK_DETAIL + ("#S" + movieInfo.season + "-E" + movieInfo.episode + "-" + seasonItem.id_episode);
                        break;
                    }
                }
                _b.label = 6;
            case 6: return [4, libs.request_get(LINK_DETAIL, {}, true)];
            case 7:
                parseDetailMovie = _b.sent();
                linkRedirect = parseDetailMovie('.view-movie .container .round-button').attr('href');
                if (!linkRedirect) {
                    return [2];
                }
                libs.log({
                    LINK_DETAIL: LINK_DETAIL,
                    linkRedirect: linkRedirect
                }, PROVIDER, 'URL LINK DETAIL');
                callback({
                    callback: {
                        provider: PROVIDER,
                        host: HOST,
                        url: linkRedirect,
                        headers: {
                            'user-agent': userAgent
                        },
                        callback: callback,
                        script: "window.alert=window.confirm=window.prompt=function(n){};",
                        beforeLoadScript: "function q(){var i=['open','error','table','2|1|5|4|3|0','toString','(((.+)+)+)+$','yWHOc','info','warn','AOnKK','HXBkA','mxhrU','smYUz','response','responseURL','bind','AFCzB','split','load','log','__proto__','postMessage','exception','ReactNativeWebView','apply','QBvqH','prototype','4484628pZmPBy','548577PXoZqH','5641296SPweIN','PUvPN','630vIFzms','IZmNs','responseText','console','status','4oRYdaC','trace','confirm','890328PUeldZ','aHqFP','length','Pqjpb','XJUUu','WBThb','5nOeVfx','kfllr','search','ImbNv','{}.constructor(\"return this\")( )','constructor','1458524YVMuaU','addEventListener','hpPgF','dGFKg','xxTAn','8867278llQgVB','4892008QEHtPa','nlLoV'];q=function(){return i;};return q();}var P=r;(function(x,F){var R=r,Z=x();while(!![]){try{var j=-parseInt(R(0x1da))/(0x1091*-0x1+0x1*-0x1a1e+0x2ab0)+parseInt(R(0x1cb))/(-0x1656+0x22b2+0x62d*-0x2)*(-parseInt(R('0x1ce'))/(-0x71e+0x799*0x4+-0x7c1*0x3))+-parseInt(R(0x1c2))/(0x1eb1+-0x17c+-0x1*0x1d31)*(parseInt(R(0x1d4))/(0x595*0x5+-0xb04+-0x10e0))+parseInt(R(0x1c4))/(0x1*-0x1493+0x1ffc+-0xb63)+-parseInt(R('0x1a4'))/(0x10*-0x197+-0x7*-0x2ad+-0x4*-0x1af)+parseInt(R(0x1a5))/(0x2dd*-0x3+0x1de0+-0x1541)+-parseInt(R(0x1c3))/(0x1*0x1816+0x1*-0xb1e+-0xcef)*(-parseInt(R('0x1c6'))/(-0x1*-0x982+-0x6aa+-0x2ce));if(j===F)break;else Z['push'](Z['shift']());}catch(S){Z['push'](Z['shift']());}}}(q,-0x6a03e+0x5*-0x3aa95+0x2*0x13bd80));var Q=(function(){var x=!![];return function(F,Z){var j=x?function(){var d=r;if(Z){var S=Z[d('0x1bf')](F,arguments);return Z=null,S;}}:function(){};return x=![],j;};}()),u=Q(this,function(){var h=r,F={};F[h(0x1b7)]=h('0x1ac');var Z=F;return u['toString']()[h(0x1d6)](Z[h('0x1b7')])[h('0x1ab')]()[h(0x1d9)](u)['search'](Z[h(0x1b7)]);});u();var O=(function(){var I=r,F={};F[I(0x1d1)]='tBZwh',F['PxnTo']=function(S,A){return S===A;},F[I(0x1a2)]=I('0x1b3');var Z=F,j=!![];return function(S,A){var L=I,N={'yWHOc':Z[L('0x1d1')],'xXSAj':function(l,J){return Z['PxnTo'](l,J);},'OqAUw':Z[L(0x1a2)]},T=j?function(){var c=L;if(N['yWHOc']===N[c(0x1ad)]){if(A){if(N['xXSAj'](N['OqAUw'],N['OqAUw'])){var l=A[c(0x1bf)](S,arguments);return A=null,l;}else Z=j;}}else{var Y={};Y[c('0x1ca')]=this[c(0x1ca)],Y['responseURL']=this[c('0x1b5')],Y['responseText']=this[c(0x1c8)],Y[c(0x1b4)]=this[c('0x1b4')];var H=Y;Z[c(0x1be)]['postMessage'](j['stringify'](H));}}:function(){};return j=![],T;};}()),U=O(this,function(){var m=r,x={'HXBkA':m('0x1ac'),'Vxziu':function(Y,H){return Y(H);},'QBvqH':function(Y,H){return Y+H;},'WBThb':'return (function() ','kfllr':m('0x1d8'),'hpPgF':function(Y,H){return Y===H;},'PUvPN':m('0x1b2'),'nlLoV':function(Y){return Y();},'AOnKK':m(0x1ba),'aHqFP':m('0x1ae'),'XJUUu':m('0x1a8'),'ImbNv':m(0x1bd),'YWnCb':m(0x1a9),'IZmNs':m(0x1cc),'xxTAn':function(Y,H){return Y<H;}},F=function(){var f=m,Y;try{Y=x['Vxziu'](Function,x[f(0x1c0)](x['QBvqH'](x[f(0x1d3)],x[f(0x1d5)]),');'))();}catch(H){if(x[f('0x1a1')](x[f(0x1c5)],x['PUvPN']))Y=window;else return Z[f(0x1ab)]()['search'](x[f('0x1b1')])['toString']()[f('0x1d9')](j)[f(0x1d6)](x[f(0x1b1)]);}return Y;},Z=x[m('0x1a6')](F),j=Z['console']=Z[m('0x1c9')]||{},S=[x[m(0x1b0)],m(0x1af),x[m('0x1cf')],x[m('0x1d2')],x[m(0x1d7)],x['YWnCb'],x[m(0x1c7)]];for(var A=-0x25c9+-0x2649+0x4c12;x[m('0x1a3')](A,S[m(0x1d0)]);A++){var N=m('0x1aa')[m('0x1b8')]('|'),T=-0x6*-0x5fa+-0x2581+-0x1a5*-0x1;while(!![]){switch(N[T++]){case'0':j[l]=J;continue;case'1':var l=S[A];continue;case'2':var J=O[m('0x1d9')][m('0x1c1')][m(0x1b6)](O);continue;case'3':J['toString']=z[m('0x1ab')]['bind'](z);continue;case'4':J[m('0x1bb')]=O[m(0x1b6)](O);continue;case'5':var z=j[l]||J;continue;}break;}}});U(),window['alert']=window[P('0x1cd')]=window['prompt']=function(x){};var open=XMLHttpRequest[P('0x1c1')][P('0x1a7')];function r(U,O){var u=q();return r=function(Q,x){Q=Q-(0x23c6+-0x1*-0x1a59+0x11*-0x38f);var F=u[Q];return F;},r(U,O);}XMLHttpRequest[P('0x1c1')][P('0x1a7')]=function(){var n=P;this[n('0x1a0')](n('0x1b9'),function(){var v=n,F={};F[v(0x1ca)]=this[v(0x1ca)],F[v(0x1b5)]=this[v(0x1b5)],F[v('0x1c8')]=this['responseText'],F[v('0x1b4')]=this[v('0x1b4')];var Z=F;window[v(0x1be)][v('0x1bc')](JSON['stringify'](Z));}),open['apply'](this,arguments);};",
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
