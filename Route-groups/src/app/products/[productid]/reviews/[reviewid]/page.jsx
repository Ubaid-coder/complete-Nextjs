import { notFound } from "next/navigation"


export default function page({ params }) {
  if (parseInt(params.productid) > 100) {
    notFound()
  }

  return (
    <>
      <h1>Reviews: {params.reviewid} for product: {params.productid}</h1>
    </>
  )
}
