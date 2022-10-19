import React from "react";
import Loading from "../Loading";
import { useParams, Link } from "react-router-dom";
///////////////////////
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false); // use state bina import kiye bhi use kar skte  hain
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    //isek andar bhi function ban sakte h fetch kar skte hain
    setLoading(true);
    async function getCocktail() {
      // geting drinks data by id
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();

        //ab fetch hone ke bad data hoto kya kare na ho to kya kare
        if (data.drinks) {
          // jo arrary as a output mil raha he wo ek object he jiska name drinks hain
          //ab data he to usko destructure karna he sath hi me ek readeble name bhi denge
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
          } = data.drinks[0]; // esa is liye kyu ki api me ek cockail ki sai detail ko array banke 0 indec me object bana je store kiya gaya hain
          //ingredents a ek array bana rahe taki jis drink me jitne ingredients ho utne hi use kare
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };

          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);
  ////////////////////
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name}></img>
          <div className="drink-info">
            <p>
              <span className="drink-data">name :</span> {name}
            </p>
            <p>
              <span className="drink-data">category :</span> {category}
            </p>
            <p>
              <span className="drink-data">info :</span> {info}
            </p>
            <p>
              <span className="drink-data">glass :</span> {glass}
            </p>
            <p>
              <span className="drink-data">instructons :</span> {instructions}
            </p>
            <p>
              <span className="drink-data">ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null;
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default SingleCocktail;
