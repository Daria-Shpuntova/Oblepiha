import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TeaRecipeItem.css'

const TeaRecipeItem = () => {
    const { slug } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`/api/tea_recipes/${slug}/`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, [slug]);

    if (!data) return <div>Loading...</div>;

    return (
        <section className='section'>
            <h2>{data.name}</h2>
            <div className='recipesItem'>
                <div className='recipesItemImg'>
                    <img src={`/img/${data.img}`} alt={data.name} />
                </div>
                <div className='recipesItemText'>
                    <h3>Ингредиенты</h3>
                    <p>{data.description}</p>
                    <h3>Приготовление</h3>
                    <p>{data.compound}</p>
                </div>
            </div>

        </section>
    );
};

export default TeaRecipeItem;
