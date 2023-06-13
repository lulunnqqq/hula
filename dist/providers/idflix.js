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
    var PROVIDER, DOMAIN, urlSearch, parseSeach, id, headers, body, urlAjaxEmbed, embedData, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'DIdFlix';
                DOMAIN = "https://77.105.142.75";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                urlSearch = "";
                if (movieInfo.type == 'movie') {
                    urlSearch = "".concat(DOMAIN, "/movie/").concat(libs.url_slug_search(movieInfo), "-").concat(movieInfo.year);
                }
                else {
                    urlSearch = "".concat(DOMAIN, "/episode/").concat(libs.url_slug_search(movieInfo), "-season-").concat(movieInfo.season, "-episode-").concat(movieInfo.episode);
                }
                libs.log({ urlSearch: urlSearch }, PROVIDER, "URL SEARCH");
                return [4, libs.request_get(urlSearch, {}, true)];
            case 2:
                parseSeach = _a.sent();
                id = parseSeach("#dooplay-ajax-counter").attr("data-postid");
                libs.log({ urlSearch: urlSearch, id: id }, PROVIDER, "URL SEARCH");
                headers = {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Referer": urlSearch
                };
                body = qs.stringify({
                    action: "doo_player_ajax",
                    post: id,
                    nume: 1,
                    type: movieInfo.type == 'movie' ? 'movie' : 'tv'
                });
                urlAjaxEmbed = "".concat(DOMAIN, "/wp-admin/admin-ajax.php");
                return [4, libs.request_post(urlAjaxEmbed, headers, body)];
            case 3:
                embedData = _a.sent();
                libs.log({ embedData: embedData }, PROVIDER, "EMBED DATA");
                if (!embedData.embed_url) {
                    return [2];
                }
                return [4, libs.embed_redirect(embedData.embed_url, '', movieInfo, PROVIDER, callback, undefined, [])];
            case 4:
                _a.sent();
                return [3, 6];
            case 5:
                e_1 = _a.sent();
                libs.log(e_1, PROVIDER, 'ERROR');
                return [3, 6];
            case 6: return [2, true];
        }
    });
}); };
