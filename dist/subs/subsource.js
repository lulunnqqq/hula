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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
subs.getResource = function (movieInfo, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var PROVIDER, DOMAIN, slug, headers, body, dataSearch, urlGetSub, _i, _a, item, linkDetail, title, arrLang, lang, subID, episode, slugGetSub, body_1, dataSub, token, newBody, newDataSub, urlDownload, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = "SubSource";
                DOMAIN = "https://subsource.net";
                _b.label = 1;
            case 1:
                _b.trys.push([1, 12, , 13]);
                slug = "".concat(libs.url_slug_search(movieInfo, "-"), "-").concat(movieInfo.year);
                if (movieInfo.type == "tv") {
                    slug = "".concat(libs.url_slug_search(movieInfo, "-"));
                }
                headers = {
                    "Content-type": "application/json",
                };
                body = { langs: [], movieName: slug };
                if (movieInfo.type == "tv") {
                    body.season = "season-".concat(movieInfo.season);
                }
                return [4, libs.request_post("https://api.subsource.net/api/getMovie", headers, body, false)];
            case 2:
                dataSearch = _b.sent();
                libs.log({ body: body, dataSearch: dataSearch }, PROVIDER, "== DATA SEARCH ==");
                if (!!dataSearch.success) return [3, 4];
                if (movieInfo.type == "tv") {
                    body = {
                        langs: [],
                        movieName: "".concat(libs.url_slug_search(movieInfo, "-"), "-").concat(movieInfo.year),
                        season: "season-".concat(movieInfo.season),
                    };
                }
                return [4, libs.request_post("https://api.subsource.net/api/getMovie", headers, body, false)];
            case 3:
                dataSearch = _b.sent();
                libs.log({ body: body, dataSearch: dataSearch }, PROVIDER, "== NEW DATA SEARCH ==");
                if (!dataSearch.success) {
                    return [2];
                }
                _b.label = 4;
            case 4:
                urlGetSub = "https://api.subsource.net/api/getSub";
                _i = 0, _a = dataSearch.subs;
                _b.label = 5;
            case 5:
                if (!(_i < _a.length)) return [3, 11];
                item = _a[_i];
                linkDetail = item.fullLink;
                title = item.releaseName;
                arrLang = item.lang.split("/");
                lang = arrLang[0];
                subID = item.subId;
                if (!linkDetail || !title || !lang) {
                    return [3, 10];
                }
                if (movieInfo.lang.toLowerCase().indexOf(lang.toLowerCase()) == -1) {
                    return [3, 10];
                }
                if (movieInfo.type == "tv") {
                    episode = "S".concat(movieInfo.season < 10 ? "0" + movieInfo.season : movieInfo.season, "E").concat(movieInfo.episode < 10 ? "0" + movieInfo.episode : movieInfo.episode);
                    if (title.indexOf(episode) == -1) {
                        return [3, 10];
                    }
                }
                linkDetail = "".concat(DOMAIN).concat(linkDetail);
                slugGetSub = slug;
                if (movieInfo.type == "tv") {
                    slugGetSub = "".concat(slug, "-season-").concat(movieInfo.season);
                }
                body_1 = {
                    movie: slugGetSub,
                    lang: lang.toLowerCase(),
                    id: subID,
                };
                return [4, libs.request_post(urlGetSub, headers, body_1, false)];
            case 6:
                dataSub = _b.sent();
                libs.log({ dataSub: dataSub, body: body_1, urlGetSub: urlGetSub }, PROVIDER, "== DATA SUB ==");
                token = dataSub.sub.downloadToken;
                if (!!token) return [3, 9];
                if (!(movieInfo.type == "tv")) return [3, 8];
                newBody = {
                    movie: "".concat(slugGetSub, "-").concat(movieInfo.year),
                    lang: lang.toLowerCase(),
                    id: subID,
                };
                return [4, libs.request_post(urlGetSub, headers, newBody, false)];
            case 7:
                newDataSub = _b.sent();
                libs.log({ dataSub: newDataSub, body: newBody, urlGetSub: urlGetSub }, PROVIDER, "== NEWDATA SUB ==");
                token = newDataSub.sub.downloadToken;
                _b.label = 8;
            case 8:
                if (!token) {
                    return [3, 10];
                }
                _b.label = 9;
            case 9:
                urlDownload = "https://api.subsource.net/api/downloadSub/".concat(token);
                libs.log({ urlDownload: urlDownload }, PROVIDER, "== URL DOWNLOAD ==");
                callback({
                    file: urlDownload,
                    kind: "Captions",
                    label: lang,
                    type: "download",
                });
                _b.label = 10;
            case 10:
                _i++;
                return [3, 5];
            case 11: return [2];
            case 12:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 13];
            case 13: return [2, true];
        }
    });
}); };
