import axios from 'axios';

export default {
    register: async (creds) => {
        axios.post('http://localhost:4404/register', creds)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));
    }
}