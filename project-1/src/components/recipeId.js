import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'

function recipeId({ Dish }) {

    return (
        <>
            {
                Dish ?
                    <div className="card text-bg-dark">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={Dish.image} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{Dish.name}</h5>
                                    <p className="card-text">Ingredions</p>
                                    <ul className="list-group-numbered">
                                        {
                                            Dish?.ingredients.map((item, index) => {
                                                return (
                                                    <li key={index} className='list-group-item'>{item}</li>
                                                )
                                            })
                                        }
                                    </ul>

                                    <p className="card-text">Instructions</p>
                                    <ol className='list-group list-group-numbered'>
                                        {
                                            Dish?.instructions.map((item, index) => {
                                                return (
                                                    <li key={index}>{index + 1}. {item}</li>
                                                )
                                            })
                                        }
                                    </ol>

                                    <b><p className='card-text'>cookTimeMinutes<small className='text-body-secondary'>{Dish.cookTimeMinutes}</small></p></b>

                                </div>
                            </div>
                        </div>
                    </div>
                    : null
            }
            <Link
                href={'/recipes'}
                className='btn btn-primary'
            >Go Back</Link>
        </>
    )
}

export default recipeId