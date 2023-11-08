import { useEffect, useState } from "react";

export const useFetch = (query) => {

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(null)
    const [isError, setError] = useState(null)

    const hostname = 'localhost'
    const port = 3001
    useEffect(() =>{
        const Post = async () => {
            try {
                setLoading(true)
                await fetch(`http://${hostname}:${port}/requests`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: query
                })
            } catch(e) {
                console.error('Error posting query')
                setError(true)
            } finally {
                setLoading(false)
            }
            try {
                await fetch(`http://${hostname}:${port}/requests`, {
                    method: "GET",
                })
                .then(response => response.json())
                .then(data => {
                    setData(data)
                })
            } catch(e) {
                console.error('Error fetching query');
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        Post()
    }, [query])
    return {data, isError, isLoading}
}