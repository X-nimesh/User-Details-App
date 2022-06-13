import { Avatar, Box, Button, Flex, Spacer, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { usersData } from '../Schemas/Schemas';
import PageNumber from './PageNumber';
import usePagechange from './usePagechange';
import UserWidget from './UserWidget';

const Main = () => {
    const [PageNum, setPageNum] = useState(1)
    const [TotalDataNum, setTotalDataNum] = useState(1)
    const [user, setuser] = useState<usersData[]>([{
        id: 1,
        name: 'Nimesh',
        email: 'string',
        phone: "string",
        address: "string",
        username: "string",
    }])
    useEffect(() => {
        getUser();
        // console.log(PageNum);

    }, [PageNum])

    let getUser = () => {
        axios({
            method: 'GET',
            url: `http://localhost:3004/users?_limit=3&_page=${PageNum} `
        })
            .then(function (response: any) {
                // console.log(response.headers["x-total-count"]);
                setTotalDataNum(response.headers["x-total-count"]);
                setuser(response.data);
            })
            .catch(function (error: any) {
                console.log(error)
            });
    }
    // console.log(TotalDataNum);

    return (
        <>
            <Flex w={'100%'} direction={'row'}
                justify='center'
                gap='30px'
                wrap='wrap'>
                {user.map((user: usersData, key: number) =>

                    <UserWidget key={key} user={user} />
                )}
            </Flex>

            <PageNumber setPageno={setPageNum} totaldata={TotalDataNum} />

        </>
    )
}

export default Main