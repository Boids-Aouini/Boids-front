export const referenceUrl = function (input) {
    let checkPlus = /[+]/;
    let checkSpace = /[ ]/
    if (checkPlus.test(input)) { input.replace('+', '%2B') } // if input has + change it with %2B
    if (checkSpace.test(input)) { input.replace(' ', '%20') } // if input hase space change it with %20

    return input;
}

export const extractReference = function (url) {
    let checkPlus = /%2B/;
    let checkSpace = /%20/;
    if (checkPlus.test(url)) { url.replace('%2B', '+') } // if url has %2B return it to +
    if (checkSpace.test(url)) { url.replace('%20', ' ') } // if url has %20 return it to space
    return url
}