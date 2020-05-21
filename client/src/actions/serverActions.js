import { CREATE_SERVER, RETREIVE_SERVER_AS_LEADER } from './type';
import axios from "axios";

export const createServer = (newServer) => dispatch => {
    return axios.post('http://localhost:4404/api/boidsServers/createServer', newServer,
        // make post request to make new server
        {
            headers: {
                'auth_token': localStorage.getItem('_____auth_______________token') // add token as a header
            }
        })
        .then(res => {
            let { server } = res.data.results;
            return dispatch({ // dispatch new server to serversAsLeader redux's state
                type: CREATE_SERVER,
                server
            })
        })
        .catch(err => console.log(err)); // console error in case there is one
}

export const retreiveServerAsLeader = () => dispatch => {
    axios.get('http://localhost:4404/api/boidsServers/serversAsLeader',
        // retreive all servers that logged in user is a leader
        {
            headers: {
                'auth_token': localStorage.getItem('_____auth_______________token') // add token as a header
            }
        })
        .then(res => {
            let { servers } = res.data.results;
            dispatch({ // dispatch servers to add it to serversAsLeader redux's state
                serversAsLeader: servers,
                type: RETREIVE_SERVER_AS_LEADER
            })
        })
        .catch(err => console.log(err)); // console error in case there is one
}