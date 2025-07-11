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
hosts["closeload"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    function dc_hello(_0x37934e) {
        var _0x574858 = libs.string_atob(_0x37934e), _0x26fd7a = _0x574858["split"]("")["reverse"]()["join"](""), _0x4099d3 = libs.string_atob(_0x26fd7a), _0xa4155d = _0x4099d3["split"]("|")[0x1];
        return _0xa4155d;
    }
    var DOMAIN, HOST, parseDetail_1, script_1, unpacker, varName, parseDirect, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                DOMAIN = 'https://closeload.top';
                HOST = 'closeload';
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, libs.request_get(url, {
                        Referer: "https://ridomovies.tv/"
                    }, true)];
            case 2:
                parseDetail_1 = _a.sent();
                script_1 = "";
                parseDetail_1("script").each(function (key, item) {
                    var text = parseDetail_1(item).text();
                    if (text.indexOf("eval(") != -1) {
                        script_1 = text;
                    }
                });
                libs.log({ script: script_1 }, provider, 'SCRIPT');
                if (!script_1) {
                    return [2];
                }
                unpacker = libs.string_unpacker_v2(script_1);
                varName = unpacker.match(/dc_hello\(\"([^\"]+)/i);
                varName = varName ? varName[1] : '';
                libs.log({ varName: varName }, provider, 'VarName_1');
                if (!varName) {
                    return [2];
                }
                parseDirect = dc_hello(varName);
                libs.log({ parseDirect: parseDirect }, provider, 'ParseDirect');
                if (!parseDirect) {
                    return [2];
                }
                libs.embed_callback(parseDirect, provider, HOST, 'Hls', callback, 1, [], [{ file: parseDirect, quality: 1080 }], {
                    Referer: url,
                }, {
                    type: "m3u8",
                });
                return [3, 4];
            case 3:
                e_1 = _a.sent();
                libs.log({ e: e_1 }, HOST, "ERROR");
                return [3, 4];
            case 4: return [2];
        }
    });
}); };
