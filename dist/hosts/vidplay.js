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
hosts["vidplay"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var DOMAIN, HOST, subParse, t, subs, headers, id, vidplay_request, hashMovie, urlEmbed, dataEmbed, rank, _i, _a, embedItem, embedData, patternQuality, directQuality, _b, patternQuality_1, patternItem, sizeQuality, urlDirect, urlDirect, e_1;
    var _this = this;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                DOMAIN = 'https://vidplay.online';
                HOST = 'Vidplay';
                subParse = url.match(/\&sub\.info\=([^\&]+)/i);
                subParse = subParse ? decodeURIComponent(subParse[1]) : '';
                t = url.match(/\?t\=([^\&]+)/i);
                t = t ? t[1] : '';
                libs.log({ subParse: subParse, t: t }, HOST, 'SUBPARSE');
                subs = [];
                if (!subParse) return [3, 2];
                return [4, libs.request_get(subParse)];
            case 1:
                subs = _c.sent();
                libs.log({ subs: subs }, HOST, 'SUBTITLE');
                _c.label = 2;
            case 2:
                headers = {
                    'Referer': url,
                    'user-agent': libs.request_getRandomUserAgent()
                };
                id = url.match(/\/e\/([^\?]+)/i);
                id = id ? id[1] : '';
                if (!id) {
                    return [2];
                }
                libs.log({ id: id }, provider, 'ID vidplay');
                vidplay_request = function (sourceId) {
                    if (sourceId === void 0) { sourceId = ''; }
                    return __awaiter(_this, void 0, void 0, function () {
                        var fuToken, keys, parse, enc, hash, a, i;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    fuToken = "VnRRtqMY6oDNpdJwXu9gRTjGJ_IYkghBZOUkdTmVlXK1S_Qup1j6SN462GyUR37DlLQ=";
                                    return [4, libs.request_get("https://keys4.fun")];
                                case 1:
                                    keys = _a.sent();
                                    keys = keys.vidplay.keys;
                                    parse = function (r) { for (r = ''.concat(r), t = 0; t < r.length; t++)
                                        if (255 < r.charCodeAt(t))
                                            return null; for (var o = '', t = 0; t < r.length; t += 3) {
                                        var e = [void 0, void 0, void 0, void 0];
                                        e[0] = r.charCodeAt(t) >> 2, e[1] = (3 & r.charCodeAt(t)) << 4, r.length > t + 1 && (e[1] |= r.charCodeAt(t + 1) >> 4, e[2] = (15 & r.charCodeAt(t + 1)) << 2), r.length > t + 2 && (e[2] |= r.charCodeAt(t + 2) >> 6, e[3] = 63 & r.charCodeAt(t + 2));
                                        for (var n = 0; n < e.length; n++)
                                            o += void 0 === e[n] ? '=' : function (r) { if (0 <= r && r < 64)
                                                return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'[r]; }(e[n]);
                                    } return o; };
                                    enc = function (r, o) { for (var e, t = [], f = 0, n = '', a = 0; a < 256; a++)
                                        t[a] = a; for (a = 0; a < 256; a++)
                                        f = (f + t[a] + r.charCodeAt(a % r.length)) % 256, e = t[a], t[a] = t[f], t[f] = e; for (var a = 0, f = 0, h = 0; h < o.length; h++)
                                        e = t[a = (a + 1) % 256], t[a] = t[f = (f + t[a]) % 256], t[f] = e, n += String.fromCharCode(o.charCodeAt(h) ^ t[(t[a] + t[f]) % 256]); return n; };
                                    hash = parse(enc(keys[1], enc(keys[0], sourceId))).replace(/\//g, '_'), a = [fuToken];
                                    for (i = 0; i < hash.length; i++)
                                        a.push(fuToken.charCodeAt(i % fuToken.length) + hash.charCodeAt(i));
                                    return [2, "mediainfo/".concat(a.join(','))];
                            }
                        });
                    });
                };
                return [4, vidplay_request(id)];
            case 3:
                hashMovie = _c.sent();
                urlEmbed = "".concat(DOMAIN, "/").concat(hashMovie, "?t=").concat(t);
                return [4, libs.request_get(urlEmbed, headers, false)];
            case 4:
                dataEmbed = _c.sent();
                libs.log({ urlEmbed: urlEmbed, dataEmbed: dataEmbed }, provider, 'DATA EMBED mcloud');
                if (!dataEmbed || !dataEmbed.result) {
                    return [2];
                }
                rank = 0;
                _i = 0, _a = dataEmbed.result.sources;
                _c.label = 5;
            case 5:
                if (!(_i < _a.length)) return [3, 10];
                embedItem = _a[_i];
                _c.label = 6;
            case 6:
                _c.trys.push([6, 8, , 9]);
                if (!embedItem.file) {
                    return [3, 9];
                }
                return [4, libs.request_get(embedItem.file, headers)];
            case 7:
                embedData = _c.sent();
                libs.log({
                    embedData: embedData
                }, provider, 'EMBED PARSE DATA');
                if (!embedData) {
                    return [3, 9];
                }
                patternQuality = embedData.match(/hls\/([0-9]+)\/[0-9]+\.m3u8/ig);
                libs.log({ patternQuality: patternQuality, file: embedItem.file }, provider, 'PATTERN QUALITY');
                if (!patternQuality) {
                    libs.embed_callback(embedItem.file, provider, provider, 'Hls', callback, ++rank, config.subs ? config.subs : [], [{ file: embedItem.file, quality: 1080 }]);
                    return [3, 9];
                }
                directQuality = [];
                for (_b = 0, patternQuality_1 = patternQuality; _b < patternQuality_1.length; _b++) {
                    patternItem = patternQuality_1[_b];
                    sizeQuality = patternItem.match(/([0-9]+)/i);
                    sizeQuality = sizeQuality ? sizeQuality[1] : 'HD';
                    if (embedItem.file.indexOf("list.m3u8#.mp4") != -1) {
                        urlDirect = embedItem.file.replace('list.m3u8#.mp4', patternItem);
                        libs.log({ urlDirect: urlDirect, sizeQuality: sizeQuality }, provider, 'URL DIRECR REPLACE');
                        directQuality.push({
                            file: urlDirect,
                            quality: sizeQuality
                        });
                    }
                    else if (embedItem.file.indexOf("list.m3u8") != -1) {
                        urlDirect = embedItem.file.replace('list.m3u8', patternItem);
                        libs.log({ urlDirect: urlDirect, sizeQuality: sizeQuality }, provider, 'URL DIRECR REPLACE');
                        directQuality.push({
                            file: urlDirect,
                            quality: sizeQuality
                        });
                    }
                }
                if (!directQuality.length) {
                    return [2];
                }
                libs.embed_callback(directQuality[0].file, provider, provider, 'Hls', callback, ++rank, subs, directQuality, {
                    referer: "".concat(metadata.domain, "/"),
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'cross-site',
                }, {
                    is_end_webview: true,
                    url_webview: metadata.url_webview || ''
                });
                return [3, 9];
            case 8:
                e_1 = _c.sent();
                libs.log({ e: e_1 }, provider, "ERROR LOOP");
                return [3, 9];
            case 9:
                _i++;
                return [3, 5];
            case 10: return [2];
        }
    });
}); };
