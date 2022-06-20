import { Avatar, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { usersData } from '../Schemas/Schemas'

const UserWidget: React.FC<{ user: usersData }> = (props) => {
    let { user } = props;
    // console.log("log : user", user)
    return (
        <Flex bg='white'
            direction='column'
            p='80px 40px'
            align='center'
            borderRadius={'20px'}
            w='20%'
            gap='20px'
            _hover={
                {
                    boxShadow: '0px 0px 20px rgba(0,0,0,0.2)',
                    transition: 'box-shadow 0.3s ease-in-out'
                }
            }
        >
            <Avatar size='2xl' src={'https://picsum.photos/200/300?random' + Math.random()} />
            <Text>{user.name}</Text>
            <NavLink to={`profile/${user.id}`}>
                <Button bg={'blue1'} p={'1px 30px'} color='white'>View Profile</Button>
            </NavLink>
        </Flex >
    )
}
export default UserWidget