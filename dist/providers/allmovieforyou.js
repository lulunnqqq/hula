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
    var PROVIDER, DOMAIN, urlSearch, parseSearch, LINK_DETAIL, linkTvDetail, parseDetail, iframe, parseIframe, embedUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'RALLMOVIEFORYOU';
                DOMAIN = "https://allmovies.gg";
                urlSearch = "".concat(DOMAIN, "/?s=").concat(libs.url_slug_search(movieInfo, '+'));
                return [4, libs.request_get(urlSearch, {}, true)];
            case 1:
                parseSearch = _a.sent();
                LINK_DETAIL = '';
                libs.log({ urlSearch: urlSearch, length: parseSearch('article.TPost').length }, PROVIDER, 'SEARCH');
                parseSearch('article.TPost').each(function (key, item) {
                    var title = parseSearch(item).find('a h2.Title').text();
                    var href = parseSearch(item).find('a').attr('href');
                    var year = parseSearch(item).find('.MvIC .Yr').text();
                    var type = 'movie';
                    if (href.indexOf('/series/') != -1) {
                        type = 'tv';
                    }
                    libs.log({ title: title, href: href, year: year, type: type }, PROVIDER, 'SEARCH ITEM');
                    if (title && href && !LINK_DETAIL) {
                        if (libs.string_matching_title(movieInfo, title)) {
                            if (movieInfo.type == 'tv' && type == 'tv') {
                                LINK_DETAIL = href;
                            }
                            if (movieInfo.type == 'movie' && type == 'movie' && movieInfo.year == year) {
                                LINK_DETAIL = href;
                            }
                        }
                    }
                });
                libs.log(LINK_DETAIL, PROVIDER, "LINK DETAIL");
                if (!LINK_DETAIL) {
                    return [2];
                }
                if (movieInfo.type == 'tv') {
                    linkTvDetail = LINK_DETAIL.replace('/series/', '/episode/');
                    if (linkTvDetail[linkTvDetail.length - 1] == '/') {
                        linkTvDetail = linkTvDetail.slice(0, -1) + "-".concat(movieInfo.season, "x").concat(movieInfo.episode);
                    }
                    LINK_DETAIL = linkTvDetail;
                }
                libs.log(LINK_DETAIL, PROVIDER, "LINK DETAIL TV");
                return [4, libs.request_get(LINK_DETAIL, {}, true)];
            case 2:
                parseDetail = _a.sent();
                iframe = parseDetail('iframe').attr('src');
                libs.log(iframe, PROVIDER, "IFRAME DETAIL");
                if (!iframe) {
                    return [2];
                }
                return [4, libs.request_get(iframe, {}, true)];
            case 3:
                parseIframe = _a.sent();
                embedUrl = parseIframe('iframe').attr('src');
                libs.log(embedUrl, PROVIDER, "embedUrl");
                if (!embedUrl) {
                    return [2];
                }
                return [4, libs.embed_redirect(embedUrl, '', movieInfo, PROVIDER, callback, '')];
            case 4:
                _a.sent();
                return [2, true];
        }
    });
}); };
