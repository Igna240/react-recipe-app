import React, { useEffect, useState } from "react";
import { Grid, Card } from "./Cuisine.styled";
import { motion } from "framer-motion";
import { link, useParams } from "react-router-dom";

function Cuisine() {
  let params = useParams();

  const [cuisine, setCuisine] = useState([]);

  useEffect(() => {
    getCuisine(params.type);
    console.log(cuisine);
  }, [params.type]);

  const getCuisine = async (name) => {
    const check = localStorage.getItem(name);

    if (check) {
      setCuisine(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
      );
      const data = await api.json();
      localStorage.setItem(name, JSON.stringify(data.results))
      setCuisine(data.results);
    }
  };

  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Card>
        );
      })}
    </Grid>
  );
}

export default Cuisine;
