import { useEffect, useState } from "react";
import { Wrapper, Card, Gradient} from "./Veggie.styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem('veggie')

    if(check){
        setVeggie(JSON.parse(check))
    }else{
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
        );
        const data = await api.json();
        localStorage.setItem('veggie', JSON.stringify(data.recipes))
        setVeggie(data.recipes);
    }

  };
  return (
    <>
      <Wrapper>
        <h3>Veggie Picks</h3>
        <Splide options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '5rem'
        }}>
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient/>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </>
  )
}

export default Veggie