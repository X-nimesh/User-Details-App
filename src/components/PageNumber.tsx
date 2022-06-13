import { Button, Flex, Text } from '@chakra-ui/react'
import React, { ReactEventHandler, useState } from 'react'
import usePagechange from '../components/usePagechange'
const PageNumber = (props: any) => {
    let { setPageno, TotalDataNum } = props;
    const [pageNum, setpageNum] = useState(1)

    // console.log("log : PageNumber : pageNum", pageNum)
    let i = [1, 2, 3, 4];
    let totalpagenum = Math.ceil(TotalDataNum / 3);
    // setpageNum(TotalDataNum / 3);

    // let { setpageNo } = usePagechange();
    // let clickHandle = (pageNo: number) => {
    //     setPageno(pageNo)
    // }

    return (
        <Flex gap={'10px'}
            mt='50px' >

            {i.map((i: number) =>
                <Button bg={'blue1'} color='white' p={'2px 10px'}
                    borderRadius='10px'
                    onClick={() => setPageno(i)}
                >
                    <Text>{i}</Text>
                </Button>
            )}

        </Flex>
    )
}

export default PageNumber