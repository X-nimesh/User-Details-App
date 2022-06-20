import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
const PageNumber: React.FC<{ setPageno: (arg: Number) => Number | void, totalpage: Number, page: Number }> = (props) => {
    let { setPageno, totalpage, page } = props;
    // const [pageNum, setpageNum] = useState(1)
    let i = [];
    for (let j = 1; j <= totalpage; j++) {
        i.push(j)
    }
    return (
        <Flex gap={'10px'}
            mt='50px' >

            {i.map((i: number, index: number) =>
                <Button key={Math.random()} p={'2px 10px'}
                    color={page === i ? 'white' : 'black'}
                    borderRadius='10px'
                    onClick={() => setPageno(i)}
                    bg={page === i ? 'blue1' : 'white'}
                    border='1px black.600 solid'
                >
                    <Text>{i}</Text>
                </Button>
            )}

        </Flex>
    )
}

export default PageNumber