'use client'

import { useEffect, useState } from "react"

const DataPage = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchData(){
            // i changed the end of the http from 1 to posts and /todos after com/ was removed.. //
            let data = await fetch('https://jsonplaceholder.typicode.com/posts')
            data = await data.json()
            setProduct(data)
        }
        fetchData()
    }, [])

  return (
    <div>
       <p>DataPage Client</p>

       <ul>
        {product?.map((p) => (
            <>
            <li className="border m-5 px-4 py-2" key={p.id}>{p.title}</li>
            </>
        ))}
      </ul> 
    </div>
  )
}

export default DataPage