import { useState } from "react";

export const useFetch = () => {

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)

    const hostname = 'localhost'
    const port = 3001

    const Post = async (query) => {
        setLoading(true)
        try {
            await fetch(`http://${hostname}:${port}/requests`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: query
            })
            fetch(`http://${hostname}:${port}/requests`, {
                method: "GET",
            })
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
        } catch(e) {
            console.error('Error posting query');
            setError(true)
            setLoading(false)
            return {data, Post, isError, isLoading};
        }
    }
    return {data, Post, isError, isLoading}
}