import React from 'react';

function IngredientControls({ addIngredient, removeIngredient, clearBurger, ingredientImages }) {
    // Filter out 'onion' if it's in the ingredientImages object
    const ingredients = Object.keys(ingredientImages).filter(type => type !== 'onion');

    return (
        <div className="controls">
            <h2>Customize Your Burger 🍴</h2>

            <div className="controls-table small">
                {ingredients.map((type) => (
                    <div className="control-row" key={type}>
                        <img src={ingredientImages[type]} alt={type} className="control-img" />
                        <span className="ingredient-label">
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </span>
                        <div className="buttons">
                            <button className="btn add" onClick={() => addIngredient(type)}>+</button>
                            <button className="btn remove" onClick={() => removeIngredient(type)}>-</button>
                        </div>
                    </div>
                ))}
            </div>

            <button className="btn clear" onClick={clearBurger}>Clear Burger</button>
        </div>
    );
}

export default IngredientControls;
