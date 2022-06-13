import React, { useEffect, useState } from 'react'

const usePagechange = () => {
    const [pageNo, setpageNo] = useState<number>(2)
    useEffect(() => {
        console.log(pageNo);
    }, [pageNo])
    return { setpageNo, pageNo }
};


export default usePagechange