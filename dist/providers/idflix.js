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
    var CryptoJSAesJson, PROVIDER, DOMAIN, urlSearch, parseSeach_1, id, headers, numes_2, _loop_1, _i, numes_1, nume, state_1, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                CryptoJSAesJson = {
                    'encrypt': function (value, password) {
                        return cryptoS.AES.encrypt(JSON.stringify(value), password, { format: CryptoJSAesJson }).toString();
                    },
                    'decrypt': function (jsonStr, password) {
                        var parseStr = JSON.parse(jsonStr);
                        var m = parseStr.m;
                        var newPass = "";
                        var r = password.split("\\x");
                        for (var _i = 0, _a = libs.string_atob(m.split("").reduce(function (t, e) { return e + t; }, "")).split("|"); _i < _a.length; _i++) {
                            var s = _a[_i];
                            newPass += "\\x" + r[parseInt(s) + 1];
                        }
                        libs.log({ newPass: newPass }, 'IDFLIX', 'NEWPASS');
                        return JSON.parse(cryptoS.AES.decrypt(jsonStr, newPass, { format: CryptoJSAesJson }).toString(cryptoS.enc.Utf8));
                    },
                    'stringify': function (cipherParams) {
                        var j = { ct: cipherParams.ciphertext.toString(cryptoS.enc.Base64) };
                        if (cipherParams.iv)
                            j.iv = cipherParams.iv.toString();
                        if (cipherParams.salt)
                            j.s = cipherParams.salt.toString();
                        return JSON.stringify(j).replace(/\s/g, '');
                    },
                    'parse': function (jsonStr) {
                        var j = JSON.parse(jsonStr);
                        var cipherParams = cryptoS.lib.CipherParams.create({ ciphertext: cryptoS.enc.Base64.parse(j.ct) });
                        if (j.iv)
                            cipherParams.iv = cryptoS.enc.Hex.parse(j.iv);
                        if (j.s)
                            cipherParams.salt = cryptoS.enc.Hex.parse(j.s);
                        return cipherParams;
                    }
                };
                PROVIDER = 'DIdFlix';
                DOMAIN = "https://netmovies.to";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 7, , 8]);
                urlSearch = "";
                if (movieInfo.type == 'movie') {
                    urlSearch = "".concat(DOMAIN, "/movie/").concat(libs.url_slug_search(movieInfo), "-").concat(movieInfo.year);
                }
                else {
                    urlSearch = "".concat(DOMAIN, "/episodes/").concat(libs.url_slug_search(movieInfo), "-").concat(movieInfo.season, "x").concat(movieInfo.episode);
                }
                libs.log({ urlSearch: urlSearch }, PROVIDER, "URL SEARCH");
                return [4, libs.request_get(urlSearch, {}, true)];
            case 2:
                parseSeach_1 = _a.sent();
                id = parseSeach_1("#player-option-1").attr("data-post");
                libs.log({ urlSearch: urlSearch, id: id }, PROVIDER, "URL SEARCH");
                headers = {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Referer": urlSearch
                };
                numes_2 = [];
                parseSeach_1('.dooplay_player_option').each(function (key, item) {
                    var n = parseSeach_1(item).attr("data-nume");
                    if (n) {
                        numes_2.push(n);
                    }
                });
                _loop_1 = function (nume) {
                    var body, urlAjaxEmbed, embedData, parseEmbed, scriptEval, unpack, fileHls, parseHls, qualityMatch, directQuality, _b, qualityMatch_1, item, quality;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                body = qs.stringify({
                                    action: "doo_player_ajax",
                                    post: id,
                                    nume: nume,
                                    type: movieInfo.type == 'movie' ? 'movie' : 'tv'
                                });
                                urlAjaxEmbed = "".concat(DOMAIN, "/wp-admin/admin-ajax.php");
                                return [4, libs.request_post(urlAjaxEmbed, headers, body)];
                            case 1:
                                embedData = _c.sent();
                                libs.log({ embedData: embedData, body: body, headers: headers, urlAjaxEmbed: urlAjaxEmbed }, PROVIDER, "EMBED DATA");
                                if (!embedData.embed_url) {
                                    return [2, { value: void 0 }];
                                }
                                if (embedData.embed_url.indexOf("play.netembed.xyz") == -1) {
                                    libs.embed_redirect(embedData.embed_url, '', movieInfo, PROVIDER, callback, "", [], {
                                        link_detail: urlSearch
                                    });
                                    return [2, "continue"];
                                }
                                return [4, libs.request_get(embedData.embed_url, {}, true)];
                            case 2:
                                parseEmbed = _c.sent();
                                scriptEval = '';
                                parseEmbed('script').each(function (key, item) {
                                    if (parseEmbed(item).text().indexOf('eval(') != -1) {
                                        scriptEval = parseEmbed(item).text();
                                    }
                                });
                                if (!scriptEval) {
                                    return [2, { value: void 0 }];
                                }
                                unpack = libs.string_unpack(scriptEval);
                                libs.log({ unpack: unpack }, PROVIDER, 'UNPACK');
                                fileHls = unpack.match(/file *\' *\: *\'([^\']+)/i);
                                fileHls = fileHls ? fileHls[1] : '';
                                if (!fileHls) {
                                    return [2, { value: void 0 }];
                                }
                                libs.log({ fileHls: fileHls }, PROVIDER, 'FILE HLS');
                                return [4, libs.request_get(fileHls, {})];
                            case 3:
                                parseHls = _c.sent();
                                qualityMatch = parseHls.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ig);
                                libs.log({ qualityMatch: qualityMatch }, PROVIDER, 'QUALITY MATCH');
                                directQuality = [];
                                for (_b = 0, qualityMatch_1 = qualityMatch; _b < qualityMatch_1.length; _b++) {
                                    item = qualityMatch_1[_b];
                                    if (item.indexOf("quality=") == -1) {
                                        continue;
                                    }
                                    quality = item.match(/quality=([0-9]+)/i);
                                    libs.log({ quality: quality }, PROVIDER, 'quality');
                                    quality = quality ? Number(quality[1]) : 720;
                                    if (isNaN(quality) && quality < 360) {
                                        quality = 720;
                                    }
                                    directQuality.push({
                                        file: item,
                                        quality: quality,
                                    });
                                }
                                if (directQuality.length == 0) {
                                    return [2, { value: void 0 }];
                                }
                                directQuality = _.sortBy(directQuality, ['quality'], ['desc']);
                                libs.log({ directQuality: directQuality }, PROVIDER, 'DIRECT QUALITY');
                                libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], directQuality);
                                return [2];
                        }
                    });
                };
                _i = 0, numes_1 = numes_2;
                _a.label = 3;
            case 3:
                if (!(_i < numes_1.length)) return [3, 6];
                nume = numes_1[_i];
                return [5, _loop_1(nume)];
            case 4:
                state_1 = _a.sent();
                if (typeof state_1 === "object")
                    return [2, state_1.value];
                _a.label = 5;
            case 5:
                _i++;
                return [3, 3];
            case 6: return [3, 8];
            case 7:
                e_1 = _a.sent();
                libs.log(e_1, PROVIDER, 'ERROR');
                return [3, 8];
            case 8: return [2, true];
        }
    });
}); };
