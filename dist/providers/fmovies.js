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
    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    var md5Token, selfhost, PROVIDER, DOMAIN, urlSearch, parseSearch, LINK_DETAIL, filmId, serverIds, apiUrlEmbed, parseEmbedServer_1, apiUrlGetSeason, parseGetSeason_1, seasonId_1, apiUrlGetEpisode, episodeId_1, parseGetEpisode_1, urlGetEmbedTv, parseEmbedTv_1, apiGetLinkEmbed, _i, serverIds_1, serverIdItem, getLinkEmbedData;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                md5Token = function (name) {
                    return String(crypto.MD5(name).toString());
                };
                selfhost = function () { return __awaiter(_this, void 0, void 0, function () {
                    function encryptDesCbcPkcs7Padding(message, key, ivWords) {
                        var keyWords = crypto.enc.Utf8.parse(key);
                        console.log({
                            keyWords: keyWords
                        }, "HASH keyWords");
                        var encrypted = crypto.DES.encrypt(message, key, { iv: ivWords });
                        console.log({
                            encrypted: encrypted
                        }, "HASH encrypted");
                        return crypto.enc.Base64.stringify(encrypted.ciphertext);
                    }
                    var timestamp, query, key, iv, ip, appKey, appId, apiUrl, hashQuery, getVerify, body, encodedWord, encoded, body, searchData;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                timestamp = Date.now();
                                query = "{\"childmode\": 1, \"app_version\": 11.5, \"appid\": \"com.tdo.showbox\", \"module\": \"Home_list_type_v2\", \"channel\": \"Website\", \"page\": 1, \"lang\": \"en\", \"type\": \"all\", \"pagelimit\": \"10\", \"expired_date\": ".concat(timestamp, ", \"platform\": \"Android\"}");
                                key = "123d6cedf626dy54233aa1w6";
                                iv = "wEiphTn";
                                ip = 'https://152.32.149.160';
                                appKey = "moviebox";
                                appId = 'com.tdo.showbox';
                                apiUrl = "".concat(ip, "/api/api_client/index/");
                                hashQuery = encryptDesCbcPkcs7Padding(query, appKey, key);
                                console.log({
                                    hashQuery: hashQuery,
                                    abc: md5Token(appKey)
                                }, "HASH QUERY");
                                getVerify = function (str1, str2, str3) {
                                    return md5Token("".concat(md5Token(str2)).concat(str3).concat(str1));
                                };
                                body = "{\"app_key\": \"".concat(md5Token(appKey), "\", \"verify\": \"").concat(getVerify(hashQuery, appKey, key), "\", \"encrypt_data\": \"").concat(hashQuery, "\"}");
                                encodedWord = crypto.enc.Utf8.parse(body);
                                encoded = crypto.enc.Base64.stringify(encodedWord);
                                console.log({
                                    encoded: encoded
                                }, 'BASE64 ENCODE NEW SOURCE');
                                body = qs.stringify({
                                    data: encoded,
                                    appid: 27,
                                    platform: "android",
                                    version: 129,
                                    medium: "Website&token".concat(makeid(31))
                                });
                                return [4, libs.request_post(apiUrl, {
                                        'Platform': "android",
                                        "Accept": "charset=utf-8",
                                        'Content-Type': 'application/x-www-form-urlencoded'
                                    }, body)];
                            case 1:
                                searchData = _a.sent();
                                console.log({
                                    searchData: searchData
                                }, 'SEARCH DATA NEW SOURCE');
                                return [2];
                        }
                    });
                }); };
                PROVIDER = 'FMOVIES';
                DOMAIN = "https://fmovies.ps";
                urlSearch = "".concat(DOMAIN, "/search/").concat(libs.url_slug_search(movieInfo));
                return [4, libs.request_get(urlSearch, {}, true)];
            case 1:
                parseSearch = _a.sent();
                LINK_DETAIL = '';
                libs.log({ urlSearch: urlSearch, length: parseSearch('.flw-item') }, PROVIDER, 'SEARCH');
                parseSearch('.flw-item').each(function (key, item) {
                    var title = parseSearch(item).find('.film-poster-ahref').attr('title');
                    var href = parseSearch(item).find('.film-poster-ahref').attr('href');
                    var year = parseSearch(item).find('.fdi-item').first().text();
                    var type = parseSearch(item).find('.fdi-type').text();
                    libs.log({ title: title, href: href, year: year, type: type }, PROVIDER, 'SEARCH ITEM');
                    if (title && href && !LINK_DETAIL && type) {
                        if (libs.string_matching_title(movieInfo, title)) {
                            if (movieInfo.type == 'tv' && type.toLowerCase() == 'tv') {
                                LINK_DETAIL = "".concat(DOMAIN).concat(href);
                            }
                            if (movieInfo.type == 'movie' && type.toLowerCase() == 'movie' && movieInfo.year == year) {
                                LINK_DETAIL = "".concat(DOMAIN).concat(href);
                            }
                        }
                    }
                });
                if (movieInfo.title == 'Wire Room' && movieInfo.type === 'movie' && movieInfo.year == 2022) {
                    LINK_DETAIL = 'https://fmovies.ps/movie/watch-wire-room-online-87096';
                }
                else if (movieInfo.title == 'The Lord of the Rings: The Rings of Power' && movieInfo.type == 'tv') {
                    LINK_DETAIL = 'https://fmovies.ps/tv/watch-the-lord-of-the-rings-the-rings-of-power-online-87087';
                }
                libs.log(LINK_DETAIL, PROVIDER, "LINK DETAIL");
                if (!LINK_DETAIL) {
                    return [2];
                }
                filmId = LINK_DETAIL.match(/-([0-9]+)$/i);
                filmId = filmId ? filmId[1] : '';
                libs.log(filmId, PROVIDER, "FILM ID");
                if (!filmId) {
                    return [2];
                }
                serverIds = [];
                if (!(movieInfo.type == 'movie')) return [3, 3];
                apiUrlEmbed = "".concat(DOMAIN, "/ajax/movie/episodes/").concat(filmId);
                return [4, libs.request_get(apiUrlEmbed, {}, true)];
            case 2:
                parseEmbedServer_1 = _a.sent();
                libs.log({ apiUrlEmbed: apiUrlEmbed, length: parseEmbedServer_1('.link-item').length }, PROVIDER, "LENGTH LINK ITEM");
                parseEmbedServer_1('.link-item').each(function (key, item) {
                    var serverId = parseEmbedServer_1(item).attr('data-linkid');
                    if (serverId) {
                        serverIds.push(serverId);
                    }
                });
                return [3, 7];
            case 3:
                if (!(movieInfo.type == 'tv')) return [3, 7];
                apiUrlGetSeason = "".concat(DOMAIN, "/ajax/v2/tv/seasons/").concat(filmId);
                return [4, libs.request_get(apiUrlGetSeason, {}, true)];
            case 4:
                parseGetSeason_1 = _a.sent();
                seasonId_1 = 0;
                libs.log({ apiUrlGetSeason: apiUrlGetSeason, length: parseGetSeason_1('.ss-item').length }, PROVIDER, "SEASSON INFO");
                parseGetSeason_1('.ss-item').each(function (key, item) {
                    var season = parseGetSeason_1(item).text();
                    var seasonDataId = parseGetSeason_1(item).attr('data-id');
                    if (season && seasonDataId) {
                        season = season.match(/([0-9.*]+)/i);
                        season = season ? season[1] : 0;
                        if (Number(season) == movieInfo.season) {
                            seasonId_1 = seasonDataId;
                        }
                    }
                });
                libs.log({ seasonId: seasonId_1 }, PROVIDER, 'SEASON ID');
                if (!seasonId_1) {
                    return [2];
                }
                apiUrlGetEpisode = "".concat(DOMAIN, "/ajax/v2/season/episodes/").concat(seasonId_1);
                episodeId_1 = 0;
                return [4, libs.request_get(apiUrlGetEpisode, {}, true)];
            case 5:
                parseGetEpisode_1 = _a.sent();
                libs.log({ apiUrlGetEpisode: apiUrlGetEpisode, length: parseGetEpisode_1('.eps-item').length }, PROVIDER, 'SEASON INFO');
                parseGetEpisode_1('.eps-item').each(function (key, item) {
                    var episode = parseGetEpisode_1(item).find('strong').text();
                    var episodeDataId = parseGetEpisode_1(item).attr('data-id');
                    libs.log({ episode: episode, episodeDataId: episodeDataId }, PROVIDER, 'EPISODE INFO');
                    if (episode && episodeDataId) {
                        episode = episode.match(/([0-9.]+)/i);
                        libs.log({ episode: episode }, PROVIDER, 'EPISODE PATTERN');
                        episode = episode ? episode[1] : 0;
                        if (episode == movieInfo.episode) {
                            episodeId_1 = episodeDataId;
                        }
                    }
                });
                libs.log(episodeId_1, PROVIDER, 'EPISODE ID');
                if (!episodeId_1) {
                    return [2];
                }
                urlGetEmbedTv = "".concat(DOMAIN, "/ajax/v2/episode/servers/").concat(episodeId_1);
                return [4, libs.request_get(urlGetEmbedTv, {}, true)];
            case 6:
                parseEmbedTv_1 = _a.sent();
                libs.log({ urlGetEmbedTv: urlGetEmbedTv, length: parseEmbedTv_1('.link-item').length }, PROVIDER, 'EMBED INFO');
                parseEmbedTv_1('.link-item').each(function (key, item) {
                    var serverId = parseEmbedTv_1(item).attr('data-id');
                    if (serverId) {
                        serverIds.push(serverId);
                    }
                });
                _a.label = 7;
            case 7:
                libs.log({ serverIds: serverIds }, PROVIDER, 'SERVER IDS');
                apiGetLinkEmbed = "".concat(DOMAIN, "/ajax/get_link/");
                _i = 0, serverIds_1 = serverIds;
                _a.label = 8;
            case 8:
                if (!(_i < serverIds_1.length)) return [3, 12];
                serverIdItem = serverIds_1[_i];
                return [4, libs.request_get(apiGetLinkEmbed + serverIdItem, {})];
            case 9:
                getLinkEmbedData = _a.sent();
                libs.log({ getLinkEmbedData: getLinkEmbedData }, PROVIDER, 'LINK EMBED DATA');
                if (!(getLinkEmbedData && getLinkEmbedData.link)) return [3, 11];
                return [4, libs.embed_redirect(getLinkEmbedData.link, '', movieInfo, PROVIDER, callback, '')];
            case 10:
                _a.sent();
                _a.label = 11;
            case 11:
                _i++;
                return [3, 8];
            case 12: return [2, true];
        }
    });
}); };
