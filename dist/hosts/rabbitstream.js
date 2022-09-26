var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
hosts["rabbitstream"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var DOMAIN, HOST, headers, id, cookieHeader, setCookie, dynamicKey, urlDirect, parseDirect, source1, source2, source3, tracks, rank, _i, source1_1, item, directSizes, patternSize, directQuality, _a, patternSize_1, patternItem, sizeQuality;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                libs.log({ provider: provider }, provider, 'PROVIDER');
                DOMAIN = 'https://rabbitstream.net';
                HOST = 'Rabbitstream';
                headers = {
                    authority: 'rabbitstream.net',
                    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                    'accept-language': 'en-US,en;q=0.9',
                    'cache-control': 'max-age=0',
                    'referer': url,
                    'sec-ch-ua': '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"macOS"',
                    'sec-fetch-dest': 'document',
                    'sec-fetch-mode': 'navigate',
                    'sec-fetch-site': 'cross-site',
                    'sec-fetch-user': '?1',
                    'upgrade-insecure-requests': 1,
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36'
                };
                id = url.match(/embed\-[0-9]+\/([A-z0-9]+)/);
                id = id ? id[1] : '';
                libs.log({
                    id: id
                }, HOST, 'ID');
                if (!id) {
                    return [2];
                }
                return [4, axiosS.get(url, {
                        headers: headers
                    })];
            case 1:
                cookieHeader = _b.sent();
                setCookie = cookieHeader.headers['set-cookie'];
                libs.log({
                    a: cookieHeader.data,
                    headers: cookieHeader.headers,
                    setCookie: setCookie
                }, provider, 'SET COOKIE RABBIT');
                dynamicKey = '';
                if (!setCookie) {
                    dynamicKey = cookieHeader.data.match(/dynamicKey *\= *\'([A-z0-9]+)/i);
                    dynamicKey = dynamicKey ? dynamicKey[1] : '';
                }
                else {
                    setCookie = setCookie[0];
                    dynamicKey = setCookie.match(/dynamicKey\=([A-z0-9]+)/i);
                    dynamicKey = dynamicKey ? dynamicKey[1] : '';
                }
                libs.log({
                    dynamicKey: dynamicKey,
                }, provider, 'DYNAMIC KEY');
                if (!dynamicKey) {
                    return [2];
                }
                urlDirect = "".concat(DOMAIN, "/ajax/embed-4/getSources?id=").concat(id);
                return [4, libs.request_get(urlDirect, __assign(__assign({}, headers), { 'x-requested-with': 'XMLHttpRequest' }))];
            case 2:
                parseDirect = _b.sent();
                libs.log({
                    parseDirect: parseDirect
                }, HOST, "PARSE DIRECT");
                return [4, libs.embed_fmovies_id(parseDirect['sources'], dynamicKey, headers)];
            case 3:
                source1 = (_b.sent()) || [];
                libs.log({ source1: source1, tracks: tracks }, HOST, 'SOURCES_1');
                return [4, libs.embed_fmovies_id(parseDirect['sourcesBackup'], dynamicKey, headers)];
            case 4:
                source2 = (_b.sent()) || [];
                source3 = __spreadArray(__spreadArray([], source1, true), source2, true);
                tracks = parseDirect['tracks'] || [];
                libs.log({ source3: source3, tracks: tracks }, HOST, 'SOURCES');
                rank = 0;
                _i = 0, source1_1 = source1;
                _b.label = 5;
            case 5:
                if (!(_i < source1_1.length)) return [3, 8];
                item = source1_1[_i];
                if (!item.file) {
                    return [3, 7];
                }
                if (item.file.indexOf('thedaywestream') !== -1) {
                    return [3, 7];
                }
                if (item.file.indexOf('birdsystem') !== -1) {
                    return [3, 7];
                }
                return [4, libs.request_get(item.file, {})];
            case 6:
                directSizes = _b.sent();
                patternSize = directSizes.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ig);
                if (!patternSize) {
                    libs.embed_callback(item.file, provider, host, item.type, callback, ++rank, tracks);
                    return [3, 7];
                }
                directQuality = [];
                libs.log({ patternSize: patternSize }, provider, 'PATTERN SIZE');
                for (_a = 0, patternSize_1 = patternSize; _a < patternSize_1.length; _a++) {
                    patternItem = patternSize_1[_a];
                    sizeQuality = patternItem.match(/\/([0-9]+)\//i);
                    sizeQuality = sizeQuality ? sizeQuality[1] : 'HD';
                    directQuality.push({
                        file: patternItem,
                        quality: sizeQuality
                    });
                }
                libs.log({ directQuality: directQuality }, provider, 'DIRECT QUALITY');
                libs.embed_callback(item.file, provider, HOST, 'Hls', callback, ++rank, tracks, directQuality);
                _b.label = 7;
            case 7:
                _i++;
                return [3, 5];
            case 8: return [2];
        }
    });
}); };
