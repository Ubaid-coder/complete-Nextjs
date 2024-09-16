'use client'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

function Recipe({ RecipeList }) {
    // State to manage the currently selected filter
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [filteredRecipes, setFilteredRecipes] = useState(RecipeList);

    // Filter recipes based on the selected filter
    const updateFilteredRecipes = (filter) => {
        if (filter === 'highRating') {
            setFilteredRecipes(RecipeList.filter(item => item.rating >= 4.5));
        } else {
            setFilteredRecipes(RecipeList);
        }
    };

    // Handle radio button change
    const handleFilterChange = (event) => {
        const value = event.target.value;
        setSelectedFilter(value);
        updateFilteredRecipes(value);
    };

    return (
        <>
            <h1 className="text-5xl font-bold text-blue-700 p-7">Recipe List</h1>

            <div className='mb-4'>
                <b>Filter recipes by rating:</b>
                <label className='ml-4'>
                    <input 
                        type="radio" 
                        name="rating" 
                        value="highRating"
                        checked={selectedFilter === 'highRating'}
                        onChange={handleFilterChange} 
                    /> 
                    4.5 and above
                </label>
                <label className='ml-4'>
                    <input 
                        type="radio" 
                        name="rating" 
                        value="all"
                        checked={selectedFilter === 'all'}
                        onChange={handleFilterChange} 
                    /> 
                    All
                </label>
            </div>

            <div className='flex gap-32 flex-wrap justify-center'>
                {
                    filteredRecipes && filteredRecipes.length > 0 ? 
                        filteredRecipes.map((recipe) => (
                            <div className="card hover:scale-105 transition-all" style={{ width: '18rem', }} key={recipe.id}>
                                <img src={recipe.image} className="img-fluid rounded-start" alt={recipe.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{recipe.name}</h5>
                                    <p className='card-text'>Rating: {recipe.rating}</p>
                                    <Link href={`/recipes/${recipe.id}`} className="btn btn-primary">Full Recipe</Link>
                                </div>
                            </div>
                        )) : 'Sorry, no recipes match the filter criteria.'
                }
            </div>
        </>
    )
}

export default Recipe;
