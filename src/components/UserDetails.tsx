import React from 'react'
import { useNavigate, useParams } from 'react-router'
import useFetch from '../hooks/useFetch';

import { Button, Flex, Input } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,

} from '@chakra-ui/react'
import axios from 'axios';
const UserDetails = () => {
    let id: string | undefined = useParams().id;
    let details: any = useFetch(id);
    delete details.id;
    let navigate = useNavigate();
    let NameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(e.target.value);
        details[0].name = e.target.value;
    }
    let EmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(e.target.value);
        details[0].email = e.target.value;
    }
    let usernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(e.target.value);
        details[0].username = e.target.value;
    }
    let phoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(e.target.value);
        details[0].phone = e.target.value;
    }
    let streetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        details[0].address.street = e.target.value;
    }
    let cityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        details[0].address.city = e.target.value;
    }


    let submitAction = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(details);
        axios
            .put(`http://localhost:3004/users/${id} `, details[0])
            .then(function (response: any) {
                if (response.status === 200) {
                    alert('success');
                }
                console.log(response);

            })
            .catch(function (error: any) {
                console.log(error)
            });
    }

    let deleteUser = () => {
        axios
            .delete(`http://localhost:3004/users/${id} `)
            .then(function (response: any) {
                if (response.status === 200) {
                    alert('success');
                }
                console.log(response);
                navigate('/');
            })
            .catch(function (error: any) {
                console.log(error)
            });
    }
    return (
        <Flex >
            <form >
                <FormControl w={'30vw'}>
                    <FormLabel htmlFor='Name'>Name</FormLabel>
                    <Input id='Name' defaultValue={details[0]?.name} onChange={NameChange} />
                    <FormLabel htmlFor='Email'>Email</FormLabel>
                    <Input id='Email' defaultValue={details[0]?.email} onChange={EmailChange} />
                    <FormLabel htmlFor='username'>Username</FormLabel>
                    <Input id='username' defaultValue={details[0]?.username} onChange={usernameChange} />
                    <FormLabel htmlFor='phone'>Phone</FormLabel>
                    <Input id='phone' defaultValue={details[0]?.phone} onChange={phoneChange} />
                    <FormLabel htmlFor='address'>Address:</FormLabel>
                    <FormLabel htmlFor='street'>Street</FormLabel>
                    <Input id='street' defaultValue={details[0]?.address.street} onChange={streetChange} />
                    <FormLabel htmlFor='city'>city</FormLabel>
                    <Input id='city' defaultValue={details[0]?.address.city} onChange={cityChange} />
                    <Flex justifyContent='space-between' mt={'20px'}>
                        <Button bg={'blue1'} color='white' _hover={{ bg: 'blue.500' }} onClick={(e) => submitAction(e)}>Update</Button>
                        <Button bg={'red.400'} color='white' _hover={{ bg: 'red.500' }} onClick={() => deleteUser()}>Delete</Button>
                    </Flex>

                </FormControl >
            </form>
        </Flex >
    )
}

export default UserDetails