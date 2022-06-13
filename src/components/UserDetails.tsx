import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useFetch from './useFetch';
import { usersData } from '../Schemas/Schemas';
import { Button, Flex, Input } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
const UserDetails = () => {
    // let id: string | undefined = '1';
    let id: string | undefined = useParams().id;
    let details = useFetch(id);

    console.log(details);
    // const [name, setname] = useState<any>()
    // let name = details[0]?.name;
    // setuserData(details);
    // setname(details[0].name);
    let NameChange: any = (e: any) => {
        e.preventDefault();
        console.log(e.target.value);
        details[0].name = e.target.value;
        // name = e.target.value;
        // setname(e.target.value);
        // details[0].name = e.target.value;
        console.log(details);
    }
    let submitAction = (e: any) => {
        console.log(e.target.value);
        // _userForm.current.reset();
    }

    return (
        <Flex >
            <form >
                {/* ref='_userForm' */}
                <FormControl w={'30vw'}>
                    <FormLabel htmlFor='Name'>Name</FormLabel>
                    <Input id='Name' defaultValue={details[0]?.name} onChange={NameChange} />
                    <FormLabel htmlFor='Email'>Email</FormLabel>
                    <Input id='Email' defaultValue={details[0]?.email} />
                    <FormLabel htmlFor='username'>Username</FormLabel>
                    <Input id='username' defaultValue={details[0]?.username} />
                    <FormLabel htmlFor='phone'>Phone</FormLabel>
                    <Input id='phone' defaultValue={details[0]?.phone} />
                    <Flex justifyContent='space-between' mt={'20px'}>
                        <Button bg={'blue1'} color='white' _hover={{ bg: 'blue.500' }} onClick={(e) => submitAction(e)}>Update</Button>
                        <Button bg={'red.400'} color='white' _hover={{ bg: 'red.500' }}>Delete</Button>
                    </Flex>

                </FormControl >
            </form>
        </Flex >
    )
}

export default UserDetails