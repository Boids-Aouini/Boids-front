export default function (input) {
    let checkPlus = /[+]/;
    let checkSpace = /[ ]/
    if (checkPlus.test(input)) { input.replace('+', '%2B') }
    if (checkSpace.test(input)) { input.replace(' ', '+') }

    return input;
}