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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
    var PROVIDER, DOMAIN, userAgent, urlDetail, episodeData, ID_DETAIL, _i, _a, item, detail, htmlDetail, embedUrl, decode, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'HCatFlix';
                DOMAIN = "https://catflix.su";
                _b.label = 1;
            case 1:
                _b.trys.push([1, 7, , 8]);
                userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36';
                urlDetail = "".concat(DOMAIN, "/movie/").concat(libs.url_slug_search(movieInfo, '-'), "-").concat(movieInfo.tmdb_id, "/");
                if (!(movieInfo.type == "tv")) return [3, 3];
                return [4, libs.request_get("https://api.themoviedb.org/3/tv/".concat(movieInfo.tmdb_id, "/season/").concat(movieInfo.season, "?append_to_response=external_ids,images,videos,credits&language=en&api_key=56fe967269070acc229414a3bdeed3b5"), {}, false)];
            case 2:
                episodeData = _b.sent();
                ID_DETAIL = "";
                for (_i = 0, _a = episodeData.episodes; _i < _a.length; _i++) {
                    item = _a[_i];
                    if (item.episode_number == movieInfo.episode) {
                        ID_DETAIL = item.id;
                    }
                }
                libs.log({ ID_DETAIL: ID_DETAIL }, PROVIDER, "DETAIL");
                if (!ID_DETAIL) {
                    return [2];
                }
                urlDetail = "".concat(DOMAIN, "/episode/").concat(libs.url_slug_search(movieInfo, '-'), "-season-").concat(movieInfo.season, "-episode-").concat(movieInfo.episode, "/eid-").concat(ID_DETAIL);
                libs.log({ urlDetail: urlDetail }, PROVIDER, "URL DETAIL");
                _b.label = 3;
            case 3:
                libs.log({ urlDetail: urlDetail }, PROVIDER, "URL DETAIL");
                return [4, fetch(urlDetail, {
                        headers: {
                            'user-agent': userAgent,
                            "referer": DOMAIN
                        }
                    })];
            case 4:
                detail = _b.sent();
                return [4, detail.text()];
            case 5:
                htmlDetail = _b.sent();
                embedUrl = htmlDetail.match(/ *main_origin *\= *\"([^\"]+)/i);
                embedUrl = embedUrl ? embedUrl[1] : "";
                libs.log({ embedUrl: embedUrl }, PROVIDER, "EMBED URL");
                if (!embedUrl) {
                    return [2];
                }
                decode = libs.string_base64_decode(embedUrl);
                libs.log({ decode: decode }, PROVIDER, "DECODE");
                if (!decode) {
                    return [2];
                }
                return [4, libs.embed_redirect(decode, '', movieInfo, PROVIDER, callback, '')];
            case 6:
                _b.sent();
                return [3, 8];
            case 7:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 8];
            case 8: return [2];
        }
    });
}); };
