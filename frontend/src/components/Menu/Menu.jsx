import './Menu.css'

export default function Menu(){
    return(
        <header>
            <nav className='menu'>
                <a href="#oblepiha">Облепиха</a>
                <a href="#teaRecipes">Рецепты чая</a>
                <a href="#svoystva">Польза</a>
            </nav>
            <svg width="44" height="23" viewBox="0 0 44 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="21.5" x2="44" y2="21.5" stroke="#EC8A05" stroke-width="3"/>
                <line y1="11.5" x2="44" y2="11.5" stroke="#EC8A05" stroke-width="3"/>
                <line y1="1.5" x2="44" y2="1.5" stroke="#EC8A05" stroke-width="3"/>
            </svg>

        </header>
    )
}
