export const shortChannelName = (name) => {
    if (name.length > 13) {
        let result = '';
        for (let i = 0; i < 14; i++) {
            let character = name[i];
            result += character;
        }
        return result;
    }
    else return name
}