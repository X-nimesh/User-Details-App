import axios from 'axios';
import React, { useEffect } from 'react'
import { usersData } from '../Schemas/Schemas';

const useFetch = (id: string | undefined) => {
    const [user, setuser] = React.useState<usersData[]>([]
    )
    useEffect(() => {
        let getUser = () => {
            axios({
                method: 'GET',
                url: `http://localhost:3004/users?id=${id} `
            })
                .then(function (response: any) {

                    setuser(response.data);

                })
                .catch(function (error: any) {
                    console.log(error)
                });
        }
        if (id) {
            getUser();
        }
    }, [id])

    console.log(id);

    // console.log(user);
    return (user)
}

export default useFetch