import React, { useState } from 'react';
import './styles/App.css';
import Burger from './components/Burger';
import IngredientControls from './components/IngredientControls';

// Image map
export const INGREDIENT_IMAGES = {
  lettuce: '/ingredients/lettuce.jpg',
  tomato: '/ingredients/tomato.jpg',
  onion: '/ingredients/onion.jpg',
  cheese: '/ingredients/cheese.jpg',
  patty: '/ingredients/meat.jpg',
};

// Order of stacking
const INGREDIENT_ORDER = ['lettuce', 'tomato', 'onion', 'cheese', 'patty'];

function App() {
  const [ingredientCounts, setIngredientCounts] = useState({
    lettuce: 0,
    tomato: 0,
    onion: 0,
    cheese: 0,
    patty: 0,
  });

  const addIngredient = (type) => {
    setIngredientCounts((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const removeIngredient = (type) => {
    setIngredientCounts((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] - 1),
    }));
  };

  const clearBurger = () => {
    setIngredientCounts({
      lettuce: 0,
      tomato: 0,
      onion: 0,
      cheese: 0,
      patty: 0,
    });
  };

  return (
    <div className="app">
      <h1>🍔 Burger Builder</h1>

      {/* Burger above controls */}
      <Burger
        ingredientCounts={ingredientCounts}
        ingredientOrder={INGREDIENT_ORDER}
        ingredientImages={INGREDIENT_IMAGES}
      />

      <IngredientControls
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        clearBurger={clearBurger}
        ingredientImages={INGREDIENT_IMAGES}
      />
    </div>
  );
}

export default App;
