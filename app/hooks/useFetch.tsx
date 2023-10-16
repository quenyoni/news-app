
import React from "react";
import { useState, useEffect } from "react";
import  axios from 'axios'


const useFetch = (breed) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null)

    useEffect(() => {

        const fetchData = async () => {

            const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)

            const json = await res.json()

            setData(json)

            
       
    }




    
        fetchData();


    },[breed])

return{data,loading,error}


};

export default useFetch;
