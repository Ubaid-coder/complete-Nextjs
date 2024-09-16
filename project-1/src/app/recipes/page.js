
import Recipe from "@/components/recipe";

const fetchListOfFoods = async () => {
    try {
        const api = await fetch('https://dummyjson.com/recipes');
        const result = await api.json();
        return result.recipes;
    } catch (err) {
        throw new Error(err);
    }
}
export default async function page() {
    const foods = await fetchListOfFoods();
    return <Recipe RecipeList={foods} />
}
