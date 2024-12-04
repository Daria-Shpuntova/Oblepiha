import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TeaRecipes.css'
import FadeInText from "../FadeInText";

function TeaRecipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
    fetch('http://localhost:8000/api/tea_recipes/')
        .then(response => response.json())
        .then(data => {
            setRecipes(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
    <section id='teaRecipes' className='section'>
        <h2>Рецепты</h2>

        {recipes.length === 0 ? <p>No recipes found.</p> : (
            <div className='recipes'>
                {recipes.map((recipe) => (
                    <Link to={`/api/tea_recipes/${recipe.slug}`} key={recipe.slug}>
                        <FadeInText>
                            <div className={recipe.id % 2 === 0 ? 'fadeText' : 'fadeText reverse'}>

                            <div className='recipesImg' style={{backgroundImage: `url(/img/${recipe.img})`}}></div>
                                <p>{recipe.name}</p>
                            </div>
                        </FadeInText>
                    </Link>
                ))}
            </div>

        )}
    </section>
    );
}

export default TeaRecipes;
