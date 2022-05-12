import { useEffect, useState } from "react";
import { Wrapper, Card } from "./Popular.styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };

  return (
    <>
      {popular.map((recipe) => {
        return (
          <Wrapper>
            <h3>Popular Picks</h3>

            <Splide>
              {popular.map((recipe) => {
                return (
                  <SplideSlide>
                    <Card>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} />
                    </Card>
                  </SplideSlide>
                );
              })}
            </Splide>
          </Wrapper>
        );
      })}
    </>
  );
}

export default Popular;
