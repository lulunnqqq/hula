libs.string_matching_title = function (movieInfo, titleSearch) {
    return slugify(movieInfo.title, { lower: true, replacement: '+', remove: /[*+~.()'"!:@]/g }) == slugify(titleSearch, { lower: true, replacement: '+', remove: /[*+~.()'"!:@]/g });
};
libs.string_get_season_tvshow = function (title) {
    var season = title.toLowerCase().match(/\- *season *([0-9]+)/i);
    season = season ? season[1] : 0;
    return {
        new_title: title.toLowerCase().replace(/\- *season [0-9]+/i, "").trim(),
        season: season,
    };
};
libs.string_btoa = function (input) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var str = input;
    var output = '';
    for (var block = 0, charCode = void 0, i = 0, map = chars; str.charAt(i | 0) || (map = '=', i % 1); output += map.charAt(63 & block >> 8 - i % 1 * 8)) {
        charCode = str.charCodeAt(i += 3 / 4);
        if (charCode > 0xFF) {
            throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
        }
        block = block << 8 | charCode;
    }
    return output;
};
libs.string_atob = function (input) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var str = input.replace(/=+$/, '');
    var output = '';
    if (str.length % 4 == 1) {
        throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (var bc = 0, bs = 0, buffer = void 0, i = 0; buffer = str.charAt(i++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
        buffer = chars.indexOf(buffer);
    }
    return output;
};
