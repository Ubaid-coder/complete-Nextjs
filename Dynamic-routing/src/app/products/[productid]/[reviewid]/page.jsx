import React from 'react'

export default function page({params}) {
  return (
    <>
    <h1>Reviews: {params.reviewid} for product: {params.productid}</h1>
    </>
  )
}
