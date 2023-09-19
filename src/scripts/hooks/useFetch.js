import { useState } from "react";

export const useFetch = () => {

    const [data, setData] = useState([])
    const port = 3001

    const Post = async (query) => {
        try {
            await fetch(`http://localhost:${port}/requests`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: query
            })

        } catch(e) {
            console.error('Error posting query', e);
            return {data, Post};
        }
        try {
            fetch(`http://localhost:${port}/requests`, {
                method: "GET",
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
        } catch (e) {
            console.error('Error fetching data', e);
            return {data, Post};
        }
    }
    return {data, Post}
}