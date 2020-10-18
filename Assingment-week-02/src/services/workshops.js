import axios from 'axios';

export const fetchWorkshops = () => {
    return axios.get( `https://workshops-server.herokuapp.com/workshops` )
                .then(response => {
                    console.log( response.data );
                    return response.data;
                })
                .catch(error => {
                    console.log( error.message );
                });

};

export const fetchWorkshopById = ( id ) => {
    return axios.get( `https://workshops-server.herokuapp.com/workshops/${id}` )
                .then(response => {
                    return response.data;
                })
                .catch(error => {
                    console.log( error.message );
                });
};

export const fetchSessionById = ( id ) => {
    return axios.get(`https://workshops-server.herokuapp.com/workshops/${id}/sessions` )
                .then( response => {
                    return response.data;
                })
                .catch(error => {
                    console.log( error.message );
                });
}

export const upVote = ( id ) => {
    return axios.put(`https://workshops-server.herokuapp.com/sessions/${ id }/upvote`)
                .then( response => {
                    return response.data;
                })
                .catch(error => {
                    console.log( error.message );
                });
}

export const downVote = ( id ) => {
    return axios.put(`https://workshops-server.herokuapp.com/sessions/${ id }/downvote`)
                .then(response => response.data)
                .catch(error => {
                    console.log(error);
                });
}