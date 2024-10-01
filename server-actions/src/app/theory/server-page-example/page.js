import { fetchListofProduct } from "@/actions";

export default async function ServerActionsExample() {


    const products = await fetchListofProduct();
    console.log(products);

    return (
        <>
            <div>Server actions example - server components</div>
            <ul>
              {
                products.map(item => <li key={item.id}>{item.title}</li>)
              }
            </ul>
        </>
    )
}