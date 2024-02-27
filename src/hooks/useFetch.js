import { useEffect, useState } from 'react'

const useFetch = (api) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await fetch(api);
        const data = await response.json();
        setData(data)
        setLoading(false)
    }
    useEffect(() => {
        getData()
    }, [api]);
    
    return { data, loading }
}

export default useFetch