export const shortChannelName = (name) => {
    if (name.length > 10) {
        let result = '';
        for (let i = 0; i < 7; i++) {
            let character = name[i];
            result += character;
        }
        result += '...'
        return result;
    }
    else return name
}