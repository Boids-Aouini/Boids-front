import { CREATE_SERVER, RETREIVE_SERVER_AS_LEADER } from './type';
import axios from "axios";

export const createServer = (newServer) => dispatch => {
    axios.post('http://localhost:4404/api/boidsServers/createServer', newServer,
        // make post request to make new server
        {
            headers: {
                'auth_token': localStorage.getItem('_____auth_______________token') // add token as a header
            }
        })
        .then(res => {
            let { server } = res.data.results;
            dispatch({ // dispatch new server to serversAsLeader redux's state
                type: CREATE_SERVER,
                server
            })
        })
        .catch(err => console.log(err)); // console error in case there is one
}

export const retreiveServerAsLeader = () => dispatch => {
    axios.get('http://localhost:4404/api/boidsServers/serversAsLeader',
        {
            headers: {
                'auth_token': localStorage.getItem('_____auth_______________token')
            }
        })
        .then(res => {
            let { servers } = res.data.results;
            console.log(servers);
            dispatch({
                serversAsLeader: servers,
                type: RETREIVE_SERVER_AS_LEADER
            })
        })
        .catch(err => console.log(err));
}