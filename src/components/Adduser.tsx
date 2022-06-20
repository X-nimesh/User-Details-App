import { Button, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import axios from 'axios';
import { useFormik } from 'formik'
import * as Yup from 'yup'
// interface formData {
//     name: string;
//     email: string;
//     username: string;
//     phone: string;
//     street: string;
//     city: string;

// }
const Adduser = () => {
    // const [details, setdetails] = useState([])
    // let NameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault();
    //     console.log(e.target.value);
    //     details[0].name = e.target.value;
    // }
    // let EmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault();
    //     console.log(e.target.value);
    //     details[0].email = e.target.value;
    // }
    // let usernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault();
    //     console.log(e.target.value);
    //     details[0].username = e.target.value;
    // }
    // let phoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault();
    //     console.log(e.target.value);
    //     details[0].phone = e.target.value;
    // }
    // let streetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault();
    //     details[0].address.street = e.target.value;
    // }
    // let cityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault();
    //     details[0].address.city = e.target.value;
    // }
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            username: '',
            phone: '',
            address: {
                street: '',
                city: ''
            }
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name is required')
                .max(15, 'Name is too long'),
            email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
            username: Yup.string()
                .required('Username is required'),
            phone: Yup.string()
                .required('Phone is required'),
            address: Yup.object({
                street: Yup.string()
                    .required('Street is required'),
                city: Yup.string()
                    .required('City is required')
            })
        }),
        onSubmit: (values) => {
            postUser();
        }
    })
    // console.log(formik.values.address.street);
    // console.log(formik.values.address.city);

    let postUser = () => {
        axios
            .post('http://localhost:3004/users', formik.values)
            // .post('http://localhost:5000/api/users', {
            //     name: formik.values.name,
            //     email: formik.values.email,
            //     username: formik.values.username,
            //     phone: formik.values.phone,
            //     address: {
            //         street: formik.values.street,
            //         city: formik.values.city
            //     }
            // })
            .then(res => {
                console.log(res);
                res.status === 201 ? alert('User added successfully') : alert('User not added');
            }
            )
            .catch((err: any) => {
                console.log(err);
            }
            )
    }
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <FormControl w={'30vw'} mb='60px'>
                    <div>
                        <FormLabel htmlFor='name'>Name</FormLabel>
                        <Input id='name'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name ? <Text color='red' >{formik.errors.name}</Text> : null}
                    </div>
                    <div>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <Input id='email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? <Text color='red' >{formik.errors.email}</Text> : null}
                    </div>
                    <div>
                        <FormLabel htmlFor='username'>Username</FormLabel>
                        <Input id='username'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.username && formik.errors.username ? <Text color='red' >{formik.errors.username}</Text> : null}
                    </div>
                    <div>
                        <FormLabel htmlFor='phone'>Phone</FormLabel>
                        <Input id='phone'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.phone && formik.errors.phone ? <Text color='red' >{formik.errors.phone}</Text> : null}
                    </div>
                    <div>
                        <FormLabel htmlFor='address'>Address:</FormLabel>
                        <FormLabel htmlFor='street'>Street</FormLabel>
                        <Input id='address.street'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.address?.street && formik.errors.address?.street ? <Text color='red' >{formik.errors.address?.street}</Text> : null}
                    </div>
                    <div>
                        <FormLabel htmlFor='city'>city</FormLabel>
                        <Input id='address.city'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.address?.city && formik.errors.address?.city ? <Text color='red' >{formik.errors.address?.city}</Text> : null}
                    </div>
                    <Flex justifyContent='center' mt={'20px'}>
                        <Button type='submit' bg={'blue1'} color='white' _hover={{ bg: 'blue.500' }}>Add User</Button>
                    </Flex>

                </FormControl >
            </form>
        </>
    )
}

export default Adduser