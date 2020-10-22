const axios = require( 'axios' );

const getCommentersEmailIds = (name) => {
    return axios.get( `https://jsonplaceholder.typicode.com/users?username=${name}` )
                .then( response => {
                    let id = response.data[0].id;
                    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                }) 
                .then( response => {
                    let id = response.data[0].id;
                    return axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`); 
                })
                .then( response => {
                    let res = [];

                    response.data.forEach ( data => {
                        res.push(data.email);
                    })
                    return res;
                })
                .catch(error => {
                    console.log(error);
                });
}

getCommentersEmailIds( 'Bret' )
        .then( emails => {
            console.log(emails);
        });