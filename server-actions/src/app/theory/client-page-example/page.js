'use client'

import { fetchListofProduct } from "@/actions";
import { useEffect, useState } from "react";

function ClientPageExample() {

    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(false)
    
    async function getListOfProducts() {
        setloading(true);
        const data = await  fetchListofProduct();
        console.log(data);
        if(data) {
            setproducts(data);
            setloading(false);
        };
    }
    useEffect(() => {
      getListOfProducts();
    },[])

    if(loading) {
        return <h1>Loading...</h1>
    }
  return (
    <>
        <h1>This is the client page Example</h1>
    </>
  )
}

export default ClientPageExample;