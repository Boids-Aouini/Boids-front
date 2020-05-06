import { CREATE_SERVER } from './type';
import { axios } from "axios";

export const createServer = (newServer) => dispatch => {
    axios.post('http://localhost:4404/createServer', newServer)
        .then(res => {
            console.log('server created')
            dispatch({
                type: CREATE_SERVER
            })
        })
        .catch(err => console.log(err));
}