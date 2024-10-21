// Write a function toCase that takes a string and returns that string in lowercase and uppercase with - as delimiter.

// Example: toCase('Mthatha') should return 'mthatha-MTHATHA'.

function toCase(x) {
    return x.toLowerCase() + '-' + x.toUpperCase();
}

// Write a function secondIndexOf, taking two strings and determining the second occurrence of the second string in the first string. If the search string does not occur twice, -1 should be returned.

// Example: secondIndexOf('White Rabbit', 'it') should return 10.

function secondIndexOf(s1, s2) {
    let firstIndex = s1.indexOf(s2);
    return s1.indexOf(s2, firstIndex + 1);
}

// Write a function secondIndexOf, taking two strings and determining the second occurrence of the second string in the first string. If the search string does not occur twice, -1 should be returned.

// Example: secondIndexOf('White Rabbit', 'it') should return 10.
function secondIndexOf(x, y) {
    let first = x.indexOf(y);
    return x.indexOf(y, first + 1);
}


