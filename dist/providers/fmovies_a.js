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
    var PROVIDER, DOMAIN, userAgent, LINK_DETAIL, genrandom, ji, li, gen, headers, urlSearch, parseSearch, SERVER_ID, tvid, tvInfoUrl, tvInfo, LINK_TV_1, parseTvInfo_1, movieId, movieInfoUrl, movieInfo_1, LINK_MOVIE_1, parseMovieInfo_1, tracks, subUrl, subsData, _i, subsData_1, subItem;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'AMOVIESTREAM_2';
                DOMAIN = "https://fmovies.to";
                userAgent = {};
                LINK_DETAIL = '';
                genrandom = function () {
                    for (var r = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", u = 62, o = 0; o < 6; o += 1) {
                        r += i.charAt(Math.floor(Math.random() * 62));
                    }
                    return r;
                };
                ji = function (t, n) {
                    for (var u, o = [], e = 0, c = "", f = 1543 + -5 * 1973 + 8578, s = -4132 + -3907 + 8039; s < f; s += -2 * -16 + -6317 + -2 * -3143) {
                        o[s] = s;
                    }
                    for (s = 0; s < f; s += 1) {
                        e = ((e + o[s]) + (t.charCodeAt(s % t.length))) % f,
                            u = o[s],
                            o[s] = o[e],
                            o[e] = u;
                    }
                    for (var e = s = 0, a = 0; a < n.length; a += 1) {
                        e = (e + o[s = (s + a) % f]) % f, u = o[s], o[s] = o[e], o[e] = u,
                            c += String.fromCharCode(n.charCodeAt(a) ^ o[(o[s] + o[e]) % f]);
                    }
                    return c;
                };
                li = function (t) {
                    for (r = 0; r < t.length; r++) {
                        if (255 < t.charCodeAt(r))
                            return null;
                    }
                    for (var n = "", r = -1 * 5867 + -2617 + 202 * 42; r < t.length; r += -1546 + 7 * -577 + 5588) {
                        var i = [void (-1371 + 6543 * 1 + -5172), void (1 * -2512 + -2 * -4171 + -2915 * 2), void (-1367 * 2 + 3086 + -32 * 11), void (-1319 * 1 + -4022 + -109 * -49)];
                        i[-6509 * -1 + 1126 + -509 * 15] = t.charCodeAt(r) >> -1217 * -6 + -4230 + -3070,
                            i[-4994 + 1732 + 251 * 13] = (7704 + 974 + -8675 & t.charCodeAt(r)) << -26 * 262 + 7502 + -1 * 686,
                            t.length > r + (-2857 * 1 + 1 * 9328 + 5 * -1294) && (i[6645 + 1 * -4421 + -2223] |= t.charCodeAt(r + (-80 * -78 + 1129 * -7 + 1664)) >> -470 * 17 + 7 * -1023 + 15155,
                                i[1 * 7066 + 707 * 1 + -7771] = (-1 * -3449 + -8851 + 1 * 5417 & t.charCodeAt(r + (34 * 21 + 3831 + -71 * 64))) << 16 * -93 + 2 * -4216 + 11 * 902),
                            t.length > r + (-44 * -130 + 2777 + -8495) && (i[3 * -87 + 4192 + -3929] |= t.charCodeAt(r + (656 + -11 * -738 + -8772)) >> 5616 + -583 * -8 + 5137 * -2,
                                i[-3562 + -1 * 6866 + 171 * 61] = 2604 + 1967 + -4508 & t.charCodeAt(r + (-3066 + -138 * -33 + 1 * -1486)));
                        for (var u = 3752 + -1 * -5311 + -19 * 477; u < i.length; u++)
                            "undefined" == typeof i[u] ? n += "=" : n += function (t) {
                                if (-1119 * -5 + -7978 + 2383 <= t && t < -9695 + 515 + -4 * -2311)
                                    return "eST4kCjadnvlAm5b1BOGyLJzrE90Q6oKgRfhV+M8NDYtcxW3IP/qp2i7XHuwZFUs"[t];
                            }(i[u]);
                    }
                    return n;
                };
                gen = function (title) {
                    var rand = genrandom();
                    var hash = li(ji(rand, title));
                    return rand + hash.replace(/=+$/, "");
                };
                headers = {
                    'user-agent': libs.request_getRandomUserAgent()
                };
                urlSearch = DOMAIN + "/search?vrf=" + gen(movieInfo.title) + "&keyword=" + movieInfo.title.trim().replace(/ /g, '+');
                return [4, libs.request_get(urlSearch, headers, true)];
            case 1:
                parseSearch = _a.sent();
                if (!!parseSearch) return [3, 3];
                urlSearch = DOMAIN + "/search?vrf=" + gen(movieInfo.title) + "&keyword=" + movieInfo.title.trim().replace(/ /g, '+');
                return [4, libs.request_get(urlSearch, headers, true)];
            case 2:
                parseSearch = _a.sent();
                _a.label = 3;
            case 3:
                if (!!parseSearch) return [3, 5];
                urlSearch = DOMAIN + "/search?vrf=" + gen(movieInfo.title) + "&keyword=" + movieInfo.title.trim().replace(/ /g, '+');
                return [4, libs.request_get(urlSearch, headers, true)];
            case 4:
                parseSearch = _a.sent();
                _a.label = 5;
            case 5:
                if (!!parseSearch) return [3, 7];
                urlSearch = DOMAIN + "/search?vrf=" + gen(movieInfo.title) + "&keyword=" + movieInfo.title.trim().replace(/ /g, '+');
                return [4, libs.request_get(urlSearch, headers, true)];
            case 6:
                parseSearch = _a.sent();
                _a.label = 7;
            case 7:
                if (!!parseSearch) return [3, 9];
                urlSearch = DOMAIN + "/search?vrf=" + gen(movieInfo.title) + "&keyword=" + movieInfo.title.trim().replace(/ /g, '+');
                return [4, libs.request_get(urlSearch, headers, true)];
            case 8:
                parseSearch = _a.sent();
                _a.label = 9;
            case 9:
                if (!!parseSearch) return [3, 11];
                urlSearch = DOMAIN + "/search?vrf=" + gen(movieInfo.title) + "&keyword=" + movieInfo.title.trim().replace(/ /g, '+');
                return [4, libs.request_get(urlSearch, headers, true)];
            case 10:
                parseSearch = _a.sent();
                _a.label = 11;
            case 11:
                libs.log({ length: parseSearch('.item').length }, PROVIDER, 'LENGTH SEARCH INFO');
                parseSearch('.item').each(function (key, item) {
                    var title = parseSearch(item).find('.title').text();
                    var year = parseSearch(item).find('.meta').html();
                    year = year.match(/([0-9]+)/i);
                    year = year ? year[1] : 0;
                    var href = parseSearch(item).find('.title').attr('href');
                    var type = parseSearch(item).find('.type').text();
                    libs.log({ title: title, year: year, href: href, type: type }, PROVIDER, 'MOVIE INFO');
                    if (title && href && !LINK_DETAIL && type) {
                        if (libs.string_matching_title(movieInfo, title, false)) {
                            if (movieInfo.type == 'tv' && type.toLowerCase() == 'tv') {
                                LINK_DETAIL = "" + DOMAIN + href;
                            }
                            if (movieInfo.type == 'movie' && type.toLowerCase() == 'movie' && movieInfo.year == year) {
                                LINK_DETAIL = "" + DOMAIN + href;
                            }
                        }
                    }
                });
                libs.log({ LINK_DETAIL: LINK_DETAIL }, PROVIDER, 'LINK DETAIl');
                if (!LINK_DETAIL) {
                    return [2];
                }
                SERVER_ID = '';
                if (!(movieInfo.type == 'tv')) return [3, 23];
                tvid = LINK_DETAIL.match(/.([A-z0-9]+)$/i);
                tvid = tvid ? tvid[1] : '';
                libs.log({ tvid: tvid }, PROVIDER, 'TV ID');
                if (!tvid) {
                    return [2];
                }
                tvInfoUrl = DOMAIN + "/ajax/film/servers?id=" + tvid + "&vrf=" + gen(tvid);
                return [4, libs.request_get(tvInfoUrl, headers, false)];
            case 12:
                tvInfo = _a.sent();
                if (!!tvInfo) return [3, 14];
                tvInfoUrl = DOMAIN + "/ajax/film/servers?id=" + tvid + "&vrf=" + gen(tvid);
                return [4, libs.request_get(tvInfoUrl, headers, false)];
            case 13:
                tvInfo = _a.sent();
                _a.label = 14;
            case 14:
                if (!!tvInfo) return [3, 16];
                tvInfoUrl = DOMAIN + "/ajax/film/servers?id=" + tvid + "&vrf=" + gen(tvid);
                return [4, libs.request_get(tvInfoUrl, headers, false)];
            case 15:
                tvInfo = _a.sent();
                _a.label = 16;
            case 16:
                if (!!tvInfo) return [3, 18];
                tvInfoUrl = DOMAIN + "/ajax/film/servers?id=" + tvid + "&vrf=" + gen(tvid);
                return [4, libs.request_get(tvInfoUrl, headers, false)];
            case 17:
                tvInfo = _a.sent();
                _a.label = 18;
            case 18:
                if (!!tvInfo) return [3, 20];
                tvInfoUrl = DOMAIN + "/ajax/film/servers?id=" + tvid + "&vrf=" + gen(tvid);
                return [4, libs.request_get(tvInfoUrl, headers, false)];
            case 19:
                tvInfo = _a.sent();
                _a.label = 20;
            case 20:
                if (!!tvInfo) return [3, 22];
                tvInfoUrl = DOMAIN + "/ajax/film/servers?id=" + tvid + "&vrf=" + gen(tvid);
                return [4, libs.request_get(tvInfoUrl, headers, false)];
            case 21:
                tvInfo = _a.sent();
                _a.label = 22;
            case 22:
                libs.log({ tvInfoUrl: tvInfoUrl, tvInfo: tvInfo }, PROVIDER, 'TV INFO');
                LINK_TV_1 = '';
                if (tvInfo.html) {
                    parseTvInfo_1 = cheerio.load(tvInfo.html);
                    libs.log({ length: parseTvInfo_1("a[data-kname=\"" + movieInfo.season + "-" + movieInfo.episode + "\"]").length }, PROVIDER, 'SEARCH TV');
                    parseTvInfo_1("a[data-kname=\"" + movieInfo.season + "-" + movieInfo.episode + "\"]").each(function (key, item) {
                        var href = parseTvInfo_1(item).attr('href');
                        var dataId = parseTvInfo_1(item).attr('data-id');
                        if (dataId) {
                            SERVER_ID = dataId;
                        }
                        if (href && !LINK_TV_1) {
                            LINK_TV_1 = href;
                        }
                    });
                    libs.log({ LINK_TV: LINK_TV_1 }, PROVIDER, 'LINK TV');
                    if (!LINK_TV_1) {
                        return [2];
                    }
                    LINK_DETAIL = "" + DOMAIN + LINK_TV_1;
                }
                else {
                    return [2];
                }
                return [3, 35];
            case 23:
                movieId = LINK_DETAIL.match(/.([A-z0-9]+)$/i);
                movieId = movieId ? movieId[1] : '';
                libs.log({ movieId: movieId }, PROVIDER, 'MOVIE ID');
                if (!movieId) {
                    return [2];
                }
                movieInfoUrl = DOMAIN + "/ajax/film/servers?id=" + movieId + "&vrf=" + gen(movieId);
                return [4, libs.request_get(movieInfoUrl, headers, false)];
            case 24:
                movieInfo_1 = _a.sent();
                if (!!movieInfo_1) return [3, 26];
                movieInfoUrl = DOMAIN + "/ajax/film/servers?id=" + movieId + "&vrf=" + gen(movieId);
                return [4, libs.request_get(movieInfoUrl, headers, false)];
            case 25:
                movieInfo_1 = _a.sent();
                _a.label = 26;
            case 26:
                if (!!movieInfo_1) return [3, 28];
                movieInfoUrl = DOMAIN + "/ajax/film/servers?id=" + movieId + "&vrf=" + gen(movieId);
                return [4, libs.request_get(movieInfoUrl, headers, false)];
            case 27:
                movieInfo_1 = _a.sent();
                _a.label = 28;
            case 28:
                if (!!movieInfo_1) return [3, 30];
                movieInfoUrl = DOMAIN + "/ajax/film/servers?id=" + movieId + "&vrf=" + gen(movieId);
                return [4, libs.request_get(movieInfoUrl, headers, false)];
            case 29:
                movieInfo_1 = _a.sent();
                _a.label = 30;
            case 30:
                if (!!movieInfo_1) return [3, 32];
                movieInfoUrl = DOMAIN + "/ajax/film/servers?id=" + movieId + "&vrf=" + gen(movieId);
                return [4, libs.request_get(movieInfoUrl, headers, false)];
            case 31:
                movieInfo_1 = _a.sent();
                _a.label = 32;
            case 32:
                if (!!movieInfo_1) return [3, 34];
                movieInfoUrl = DOMAIN + "/ajax/film/servers?id=" + movieId + "&vrf=" + gen(movieId);
                return [4, libs.request_get(movieInfoUrl, headers, false)];
            case 33:
                movieInfo_1 = _a.sent();
                _a.label = 34;
            case 34:
                libs.log({ movieInfoUrl: movieInfoUrl, movieInfo: movieInfo_1 }, PROVIDER, 'MOVIE INFO');
                LINK_MOVIE_1 = '';
                if (!movieInfo_1.html) {
                    return [2];
                }
                parseMovieInfo_1 = cheerio.load(movieInfo_1.html);
                libs.log({ length: parseMovieInfo_1('#episodes').length }, PROVIDER, 'MOVIE LENGTH');
                parseMovieInfo_1('#episodes').each(function (key, item) {
                    var href = parseMovieInfo_1(item).find('a.active').attr('href');
                    var dataId = parseMovieInfo_1(item).find('div.server').attr('data-id');
                    if (dataId) {
                        SERVER_ID = dataId;
                    }
                    if (href && !LINK_MOVIE_1) {
                        LINK_MOVIE_1 = href;
                    }
                });
                libs.log({ LINK_MOVIE: LINK_MOVIE_1 }, PROVIDER, 'LINK MOVIE');
                if (!LINK_MOVIE_1) {
                    return [2];
                }
                LINK_DETAIL = "" + DOMAIN + LINK_MOVIE_1;
                _a.label = 35;
            case 35:
                tracks = [];
                if (!SERVER_ID) return [3, 37];
                subUrl = DOMAIN + "/ajax/episode/subtitles/" + SERVER_ID;
                return [4, libs.request_get(subUrl, headers, false)];
            case 36:
                subsData = _a.sent();
                for (_i = 0, subsData_1 = subsData; _i < subsData_1.length; _i++) {
                    subItem = subsData_1[_i];
                    tracks.push({
                        file: subItem.file,
                        label: subItem.label,
                        kind: subItem.kind
                    });
                }
                _a.label = 37;
            case 37:
                libs.log({ LINK_DETAIL: LINK_DETAIL, tracks: tracks }, PROVIDER, 'END LINK DETAIL');
                callback({
                    callback: {
                        provider: PROVIDER,
                        host: PROVIDER,
                        url: LINK_DETAIL,
                        callback: callback,
                        beforeLoadScript: "var open = XMLHttpRequest.prototype.open;\n            XMLHttpRequest.prototype.open = function() {\n                this.addEventListener(\"load\", function() {\n                    var message = {\"status\" : this.status, \"responseURL\" : this.responseURL, \"responseText\": this.responseText, \"response\": this.response}\n                    \n                    window.ReactNativeWebView.postMessage(JSON.stringify({api: message, html: document.documentElement.innerHTML}));\n                });\n                open.apply(this, arguments);\n            };",
                        metadata: {
                            PROVIDER: PROVIDER,
                            DOMAIN: DOMAIN,
                            movieInfo: movieInfo,
                            userAgent: userAgent,
                            tracks: tracks,
                        }
                    }
                });
                return [2, true];
        }
    });
}); };
