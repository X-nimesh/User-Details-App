import { Flex } from '@chakra-ui/react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { usersData } from '../Schemas/Schemas';
import PageNumber from './PageNumber';
import UserWidget from './UserWidget';

const Main = () => {
    const [PageNum, setPageNum] = useState<Number>(1)
    const [totalpagenum, settotalpagenum] = useState<Number>(1)

    const [user, setuser] = useState<usersData[]>([])
    useEffect(() => {
        let getUser = () => {
            axios({
                method: 'GET',
                url: `http://localhost:3004/users?_limit=3&_page=${PageNum} `
            })
                .then(function (response: any) {
                    settotalpagenum(Math.ceil(response.headers["x-total-count"] / 3));
                    setuser(response.data);
                })
                .catch(function (error: any) {
                    console.log(error)
                });
        }
        getUser();

    }, [PageNum])

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

            <PageNumber setPageno={setPageNum} page={PageNum} totalpage={totalpagenum} />

        </>
    )
}

export default Main