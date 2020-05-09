export const referenceUrl = function (input) {
    let checkPlus = /[+]/;
    let checkSpace = /[ ]/
    if (checkPlus.test(input)) { input.replace('+', '%2B') }
    if (checkSpace.test(input)) { input.replace(' ', '%20') }

    return input;
}

export const extractReference = function (url) {
    url.replace('%2B', '+')
    url.replace('%20', ' ')
    return url
}