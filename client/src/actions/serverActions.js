import { CREATE_SERVER } from './type';
import { axios } from "axios";

export const createServer = (newServer) => dispatch => {
    axios.post('http://localhost:4404/createServer', newServer)
        .then(res => {

        })
        .catch(err => console.log(err));
}