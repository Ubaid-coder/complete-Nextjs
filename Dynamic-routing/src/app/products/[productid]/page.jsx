import React from 'react'

export default function page({params}) {
  console.log(params.productid);
  return (
    <>
    <h1>About product: {params.productid}</h1>
    </>
  )
}
