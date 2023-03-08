/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    if (s.length > t.length) return false;
    let beginning = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[beginning] === t[i]) {
            beginning++;
        }
    }
    return beginning === s.length;
};


console.log(isSubsequence("abc", "ahbgdc"));