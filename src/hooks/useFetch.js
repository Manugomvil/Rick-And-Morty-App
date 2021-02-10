import {useState, useEffect} from "react";

const useFetch = (url,inicialState) =>{
    const [data, setData] = useState(inicialState)
    const [isError, setError] = useState(false)
    const [isLoading, setLoading] = useState(true)
    useEffect(()=>{
        const fetchResources = async() =>{
            try{
                setLoading(true)
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
                setLoading(false)
            }catch(e){
                setLoading(false)
                setError(true)
            }
            
        }
        fetchResources()
    },[url])
    return {data, isLoading, isError}
}
export default useFetch