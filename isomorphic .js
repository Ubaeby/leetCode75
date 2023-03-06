var isIsomorphic = function(s, t) {
    
    if (s.length !== t.length) {
        return false;
    }

    let array1 = [];
    let array2 = [];

    for (let i = 0; i < s.length; i++) {
        if (array1[s[i]] != array2[t[i]]) {
            return false;
        }
        array1[s[i]] = i + 1;
        array2[t[i]] = i + 1;
    }
    return true;   
};

console.log(isIsomorphic("egg", "add"));