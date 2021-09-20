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
                urlSearch = DOMAIN + "/search/" + libs.url_slug_search(movieInfo) + ".html";
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
                        if (libs.string_matching_title(movieInfo, title)) {
                            if (movieInfo.type == "movie" && year == movieInfo.year) {
                                LINK_DETAIL = href;
                            }
                            if (movieInfo.type == 'tv') {
                                LINK_DETAIL = href;
                            }
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
                        beforeLoadScript: "var open = XMLHttpRequest.prototype.open;\n            XMLHttpRequest.prototype.open = function() {\n                this.addEventListener(\"load\", function() {\n                    var message = {\"status\" : this.status, \"responseURL\" : this.responseURL, \"responseText\": this.responseText, \"response\": this.response}\n                    \n                    window.ReactNativeWebView.postMessage(JSON.stringify(message));\n                });\n                open.apply(this, arguments);\n            };",
                        metadata: {
                            PROVIDER: PROVIDER,
                            DOMAIN: DOMAIN,
                            movieInfo: movieInfo,
                            userAgent: userAgent,
                        }
                    }
                });
                return [2];
        }
    });
}); };
