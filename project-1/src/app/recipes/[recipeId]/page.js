import RecipeId from "@/components/recipeId";

const fetchFood = async (id) => {
   try{
    const api = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await api.json();
    return data;
   }catch(err) {
    throw new Error(err);
   }
}
export default async function page({ params }) {
    const Dish = await fetchFood(params.recipeId);
    return <RecipeId Dish={Dish}/>
}
