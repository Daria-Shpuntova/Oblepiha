import './App.css';
import HeaderWindow from "./components/HeaderWindow/HeaderWindow";
import TeaRecipes from "./components/TeaRecipes/TeaRecipes";
import { Routes, Route, useLocation } from 'react-router-dom';
import TeaRecipeItem from "./components/TeaRecipeItem/TeaRecipeItem";
import Oblepiha from "./components/Oblepiha/Oblepiha";
import Svoystva from "./components/Svoystva/Svoystva";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();
  const isSlugPage = location.pathname.includes('/tea_recipes/');

  return (
    <div className="App">
      <HeaderWindow showMenu={!isSlugPage} title={isSlugPage ? "Рецепты" : "ЧАЙ ИЗ ОБЛЕПИХИ"} />
        {isSlugPage ?   (
            <></>
        ) :(
        <Oblepiha />
        )}
      {isSlugPage ? (
        <>
          <Routes>
            <Route path="api/tea_recipes/:slug" element={<TeaRecipeItem />} />
          </Routes>
        </>
      ) : (
        <>
          <TeaRecipes />

          <Svoystva />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
