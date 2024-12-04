import { useEffect, useState } from 'react';
import FadeInText from "../FadeInText";


export default function Svoystva() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/svoystva/')
            .then(response => response.json())
            .then(data => {
                setRecipes(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <section className='section window2' style={{ backgroundImage: `url(../../surface.png)` }}>
            {recipes.length === 0 ? <p>No recipes found.</p> : (
                <div>
                    <h2>Полезные свойства</h2>
                    {recipes.map(recipe => (
                        <FadeInText key={recipe.id}>
                            <h3>{recipe.name}</h3>
                            <p>{recipe.text}</p>
                        </FadeInText>
                    ))}
                </div>
            )}
        </section>
    );
}