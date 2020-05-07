import { CREATE_SERVER } from './type';
import { axios } from "axios";

export const createServer = (newServer) => dispatch => {
    axios.post('http://localhost:4404/createServer', newServer,
        {
            headers: {
                'auth_token': localStorage.getItem('_____auth_______________token')
            }
        })
        .then(res => {
            let { name, id } = res.data.results;
            console.log('server created')
            dispatch({
                type: CREATE_SERVER,
                newServer: { name, id }
            })
        })
        .catch(err => console.log(err));
}