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
    var PROVIDER, DOMAIN, urlSearch, extractDirectV2, parseSearch_1, LINK_DETAIL_1, TV_LINK_DETAIL, filmId, apiUrlEmbed, parseEmbedServer, _i, _a, item, err_1;
    var _this = this;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'FMOVIES';
                DOMAIN = "https://cinetaro.buzz";
                urlSearch = "".concat(DOMAIN, "/search?keyword=").concat(libs.url_slug_search(movieInfo, '+'));
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                extractDirectV2 = function (linkV2) { return __awaiter(_this, void 0, void 0, function () {
                    var id, domain, dataEmbed, htmlEmbed, k, apiUrlGetLinkEmbed, parseGetLinkEmbed, sources, parseTrack, isEncrypted, tracks, _i, parseTrack_1, trackItem, lang, parseLang, key, pKey, deSource, parseDesource, rank, _a, parseDesource_1, item;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                id = linkV2.match(/e\-1\/([A-z0-9]+)/i);
                                id = id ? id[1] : '';
                                libs.log({ id: id }, PROVIDER, 'ID');
                                if (!id) {
                                    return [2];
                                }
                                domain = libs.url_extractHostname(linkV2);
                                libs.log({ domain: domain }, PROVIDER, "DOMAIN");
                                return [4, fetch(linkV2, {
                                        headers: {
                                            "Referer": linkV2,
                                            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
                                        }
                                    })];
                            case 1:
                                dataEmbed = _b.sent();
                                return [4, dataEmbed.text()];
                            case 2:
                                htmlEmbed = _b.sent();
                                k = htmlEmbed.match(/nonce\=\"([^\"]+)/i);
                                if (!k) {
                                    k = htmlEmbed.match(/\_gg\_fb\" *content\=\"([^\"])/i);
                                }
                                if (!k) {
                                    k = htmlEmbed.match(/\_xy\_ws *\= *\"([^\"]+)/i);
                                }
                                if (!k) {
                                    k = htmlEmbed.match(/data-dpi\=\"([^\"]+)/i);
                                }
                                if (!k) {
                                    k = htmlEmbed.match(/\_is\_th *\: *([A-z0-9]+)/i);
                                }
                                if (k) {
                                    k = k ? k[1] : '';
                                }
                                if (!k) {
                                    k = htmlEmbed.match(/\_lk\_db *\= *\{x\: *\"([^\"]+)\"\, *y\: *\"([^\"]+)\"\, *z\: *\"([^\"]+)/i);
                                    if (k) {
                                        k = k[1] + k[2] + k[3];
                                    }
                                }
                                libs.log({ k: k }, PROVIDER, 'K');
                                if (!k) {
                                    return [2];
                                }
                                apiUrlGetLinkEmbed = "https://".concat(domain, "/embed-1/v3/e-1/getSources?id=").concat(id, "&_k=").concat(k);
                                return [4, libs.request_get(apiUrlGetLinkEmbed, {
                                        "Referer": linkV2,
                                        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
                                        "X-Requested-With": "XMLHttpRequest"
                                    })];
                            case 3:
                                parseGetLinkEmbed = _b.sent();
                                libs.log({ parseGetLinkEmbed: parseGetLinkEmbed }, PROVIDER, 'PARSE GET LINK EMBED');
                                sources = parseGetLinkEmbed.sources;
                                parseTrack = parseGetLinkEmbed.tracks || [];
                                isEncrypted = parseGetLinkEmbed.encrypted;
                                tracks = [];
                                for (_i = 0, parseTrack_1 = parseTrack; _i < parseTrack_1.length; _i++) {
                                    trackItem = parseTrack_1[_i];
                                    lang = trackItem.label;
                                    if (!lang) {
                                        continue;
                                    }
                                    libs.log({ lang: lang, trackItem: trackItem }, PROVIDER, "TRACK ITEM");
                                    parseLang = lang.match(/([A-z0-9]+)/i);
                                    parseLang = parseLang ? parseLang[1].trim() : '';
                                    if (!parseLang) {
                                        continue;
                                    }
                                    tracks.push({
                                        file: trackItem.file,
                                        kind: 'captions',
                                        label: parseLang
                                    });
                                }
                                return [4, libs.request_get("https://raw.githubusercontent.com/yogesh-hacker/MegacloudKeys/refs/heads/main/keys.json")];
                            case 4:
                                key = _b.sent();
                                pKey = key.rabbit;
                                libs.log({ pKey: pKey }, PROVIDER, "PKEY");
                                if (!pKey) {
                                    return [2];
                                }
                                deSource = sources;
                                parseDesource = [];
                                if (isEncrypted) {
                                    deSource = decryptOpenssl(sources, pKey);
                                    libs.log({ deSource: deSource }, PROVIDER, "DESOURCE 1");
                                    if (!deSource) {
                                        return [2];
                                    }
                                    libs.log({ deSource: deSource }, PROVIDER, 'DE SOURCE');
                                    parseDesource = JSON.parse(deSource);
                                }
                                else {
                                    parseDesource = sources;
                                }
                                libs.log({ deSource: deSource }, PROVIDER, "deSource");
                                if (!parseDesource || !parseDesource.length) {
                                    return [2];
                                }
                                rank = 0;
                                for (_a = 0, parseDesource_1 = parseDesource; _a < parseDesource_1.length; _a++) {
                                    item = parseDesource_1[_a];
                                    if (!item.file) {
                                        continue;
                                    }
                                    if (item.file.indexOf("akmzed") != -1) {
                                        continue;
                                    }
                                    libs.embed_callback(item.file, PROVIDER, PROVIDER, 'Hls', callback, ++rank, tracks, [{ "file": item.file, "quality": 1080 }], {
                                        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
                                        "referer": "https://".concat(domain, "/"),
                                        "origin": "https://".concat(domain),
                                    });
                                }
                                return [2];
                        }
                    });
                }); };
                return [4, libs.request_get(urlSearch, {}, true)];
            case 2:
                parseSearch_1 = _b.sent();
                LINK_DETAIL_1 = '';
                TV_LINK_DETAIL = [];
                libs.log({ urlSearch: urlSearch, length: parseSearch_1('.flw-item') }, PROVIDER, 'SEARCH');
                parseSearch_1('.flw-item').each(function (key, item) {
                    var title = parseSearch_1(item).find('.film-poster-ahref').attr('title');
                    var href = parseSearch_1(item).find('.film-poster-ahref').attr('href');
                    var year = parseSearch_1(item).find('.fdi-item').last().text();
                    var type = parseSearch_1(item).find('.fdi-item').first().text();
                    libs.log({ title: title, href: href, year: year, type: type }, PROVIDER, 'SEARCH ITEM');
                    if (title && href && !LINK_DETAIL_1 && type) {
                        if (libs.string_matching_title(movieInfo, title)) {
                            if (movieInfo.type == 'tv' && type.toLowerCase() == 'tv series') {
                                var tvLinkDetail = href;
                                if (_.startsWith(tvLinkDetail, '/')) {
                                    tvLinkDetail = "".concat(DOMAIN).concat(href);
                                }
                                LINK_DETAIL_1 = tvLinkDetail;
                            }
                            if (movieInfo.type == 'movie' && type.toLowerCase() == 'movie' && movieInfo.year == year) {
                                LINK_DETAIL_1 = _.startsWith(href, '/') ? "".concat(DOMAIN).concat(href) : href;
                            }
                        }
                    }
                });
                libs.log(LINK_DETAIL_1, PROVIDER, "LINK DETAIL");
                if (!LINK_DETAIL_1) {
                    return [2];
                }
                filmId = LINK_DETAIL_1.match(/details\/([A-z0-9]+)/i);
                filmId = filmId ? filmId[1] : '';
                libs.log(filmId, PROVIDER, "FILM ID");
                if (!filmId) {
                    return [2];
                }
                apiUrlEmbed = "".concat(DOMAIN, "/src/ajax/server.php?episodeId=").concat(filmId, "-").concat(movieInfo.type == 'movie' ? 'movie' : "".concat(movieInfo.season, "-").concat(movieInfo.episode));
                return [4, libs.request_get(apiUrlEmbed)];
            case 3:
                parseEmbedServer = _b.sent();
                libs.log({ parseEmbedServer: parseEmbedServer }, PROVIDER, "PARSE EMBED SERVER");
                if (!parseEmbedServer || !parseEmbedServer.softsub) {
                    return [2];
                }
                for (_i = 0, _a = parseEmbedServer.softsub; _i < _a.length; _i++) {
                    item = _a[_i];
                    if (item.embedUrl.indexOf("streameeeeee") != -1) {
                        extractDirectV2(item.embedUrl);
                    }
                }
                return [3, 5];
            case 4:
                err_1 = _b.sent();
                return [3, 5];
            case 5: return [2, true];
        }
    });
}); };
