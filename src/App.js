import React, { useState } from 'react';
import './styles/App.css';
import Burger from './components/Burger';
import IngredientControls from './components/IngredientControls';

function App() {
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (type) => {
    setIngredients([...ingredients, type]);
  };

  const removeIngredient = (type) => {
    const index = ingredients.lastIndexOf(type);
    if (index !== -1) {
      const updated = [...ingredients];
      updated.splice(index, 1);
      setIngredients(updated);
    }
  };

  const clearBurger = () => {
    setIngredients([]);
  };

  return (
    <div className="app">
      <h1>🍔 Burger Builder</h1>
      <IngredientControls
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        clearBurger={clearBurger}
      />
      <Burger ingredients={ingredients} />
    </div>
  );
}

export default App;
