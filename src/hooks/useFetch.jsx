import { useEffect, useState } from "react";
// import { makeRequest } from "../makeRequest";
import { callPrivateApi } from "../lib/Apiendpoint";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await callPrivateApi(url, 'get');
                let newdata = Object.assign({}, ...res.data)
                setData(newdata);
            } catch (err) {
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;