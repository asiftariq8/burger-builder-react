import React from 'react';

const INGREDIENTS = ['lettuce', 'cheese', 'patty', 'tomato'];

function IngredientControls({ addIngredient, removeIngredient, clearBurger }) {
    return (
        <div className="controls">
            {INGREDIENTS.map((item) => (
                <div key={item} className="control-row">
                    <button onClick={() => addIngredient(item)}>➕ {item}</button>
                    <button onClick={() => removeIngredient(item)}>➖</button>
                </div>
            ))}
            <button className="clear-btn" onClick={clearBurger}>🔄 Clear/reset burger</button>
        </div>
    );
}

export default IngredientControls;
