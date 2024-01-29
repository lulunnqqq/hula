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
    var PROVIDER, DOMAIN, urlSearch, parseSearch, ID, _i, _a, item, FILM_ID, urlTvShow, parseTvShow, _b, _c, item, urlDetail, parseDetail, tracks, directQuality, _d, _e, item, trackUrl, item, quality, e_1;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                PROVIDER = 'CINEMATV';
                DOMAIN = "https://lmscript.xyz";
                _f.label = 1;
            case 1:
                _f.trys.push([1, 7, , 8]);
                urlSearch = "".concat(DOMAIN, "/v1/").concat(movieInfo.type == 'movie' ? 'movies' : "shows", "?filters[q]=").concat(libs.url_slug_search(movieInfo, '%20'));
                return [4, libs.request_get(urlSearch)];
            case 2:
                parseSearch = _f.sent();
                libs.log({ parseSearch: parseSearch }, PROVIDER, 'PARSE SEARCH');
                ID = "";
                for (_i = 0, _a = parseSearch.items; _i < _a.length; _i++) {
                    item = _a[_i];
                    if (movieInfo.imdb_id.replace('tt', '') == item.imdb_id || movieInfo.imdb_id == item.imdb_id) {
                        if (movieInfo.type == "movie") {
                            ID = item.id_movie;
                        }
                        else {
                            ID = item.id_show;
                        }
                        break;
                    }
                }
                libs.log({ ID: ID }, PROVIDER, "ID");
                if (!ID) {
                    return [2];
                }
                FILM_ID = "";
                if (!(movieInfo.type == "movie")) return [3, 3];
                FILM_ID = ID;
                return [3, 5];
            case 3:
                urlTvShow = "".concat(DOMAIN, "/v1/shows?expand=episodes&id=").concat(ID);
                return [4, libs.request_get(urlTvShow)];
            case 4:
                parseTvShow = _f.sent();
                libs.log({ parseTvShow: parseTvShow }, PROVIDER, 'PARSE TV SHOW');
                for (_b = 0, _c = parseTvShow.episodes; _b < _c.length; _b++) {
                    item = _c[_b];
                    if (item.episode == movieInfo.episode && item.season == movieInfo.season) {
                        FILM_ID = item.id;
                        break;
                    }
                }
                _f.label = 5;
            case 5:
                libs.log({ FILM_ID: FILM_ID }, PROVIDER, 'FILM ID');
                if (!FILM_ID) {
                    return [2];
                }
                urlDetail = "".concat(DOMAIN, "/v1/").concat(movieInfo.type == 'movie' ? 'movies' : "episodes", "/view?expand=streams,subtitles&id=").concat(FILM_ID);
                return [4, libs.request_get(urlDetail)];
            case 6:
                parseDetail = _f.sent();
                libs.log({ parseDetail: parseDetail }, PROVIDER, 'PARSE DETAIL');
                tracks = [];
                directQuality = [];
                for (_d = 0, _e = parseDetail.subtitles; _d < _e.length; _d++) {
                    item = _e[_d];
                    trackUrl = item.url;
                    if (_.startsWith(trackUrl, "/")) {
                        trackUrl = "".concat(DOMAIN).concat(trackUrl);
                    }
                    tracks.push({
                        file: trackUrl,
                        kind: 'captions',
                        label: item.language
                    });
                }
                for (item in parseDetail.streams) {
                    quality = item.match(/([0-9]+)/i);
                    quality = quality ? Number(quality[1]) : 720;
                    directQuality.push({
                        file: parseDetail.streams[item],
                        quality: quality
                    });
                }
                libs.log({ tracks: tracks, directQuality: directQuality }, PROVIDER, 'TRACKS DIRECT');
                if (!directQuality.length) {
                    return [2];
                }
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, tracks, directQuality);
                return [3, 8];
            case 7:
                e_1 = _f.sent();
                libs.log({ e: e_1 }, PROVIDER);
                return [3, 8];
            case 8: return [2, true];
        }
    });
}); };
