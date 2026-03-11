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
    function getRandomBytes(size) {
        return Array.from({ length: size }, function () {
            return Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        }).join('');
    }
    var DOMAIN, PROVIDER, urlData, key, headers, directEncrypt, dataDirectEncrypt, decrypt, dataDecrypt, _i, _a, item, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                DOMAIN = "https://themoviedb.hexa.su";
                PROVIDER = 'QHexaWatch';
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                urlData = "".concat(DOMAIN, "/api/tmdb/movie/").concat(movieInfo.tmdb_id, "/images");
                if (movieInfo.type == 'tv') {
                    urlData = "".concat(DOMAIN, "/api/tmdb/tv/").concat(movieInfo.tmdb_id, "/season/").concat(movieInfo.season, "/episode/").concat(movieInfo.episode, "/images");
                }
                key = getRandomBytes(32);
                headers = {
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
                    "Referer": "https://hexa.su/",
                    "Accept": "plain/text",
                    "X-Api-Key": key,
                };
                return [4, fetch(urlData, {
                        method: "GET",
                        headers: headers
                    })];
            case 2:
                directEncrypt = _b.sent();
                return [4, directEncrypt.text()];
            case 3:
                dataDirectEncrypt = _b.sent();
                libs.log({ dataDirectEncrypt: dataDirectEncrypt, key: key }, PROVIDER, 'DATA ENCRYPT');
                return [4, fetch('https://enc-dec.app/api/dec-hexa', {
                        headers: {
                            "content-type": "application/json",
                        },
                        method: "POST",
                        body: JSON.stringify({
                            text: dataDirectEncrypt,
                            key: key
                        })
                    })];
            case 4:
                decrypt = _b.sent();
                return [4, decrypt.json()];
            case 5:
                dataDecrypt = _b.sent();
                libs.log({ dataDecrypt: dataDecrypt }, PROVIDER, 'DATA DECRYPT');
                if (dataDecrypt.status != 200 || !dataDecrypt.result || !dataDecrypt.result.sources.length) {
                    return [2];
                }
                for (_i = 0, _a = dataDecrypt.result.sources; _i < _a.length; _i++) {
                    item = _a[_i];
                    if (item.server != "alpha" || !item.url) {
                        continue;
                    }
                    libs.embed_callback(item.url, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ file: item.url, quality: 1080 }], {
                        "Referer": "https://hexa.su/",
                        "Origin": "https://hexa.su",
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
                    }, {
                        type: "m3u8",
                    });
                }
                return [3, 7];
            case 6:
                e_1 = _b.sent();
                libs.log(e_1, PROVIDER, 'ERROR');
                return [3, 7];
            case 7: return [2, true];
        }
    });
}); };
