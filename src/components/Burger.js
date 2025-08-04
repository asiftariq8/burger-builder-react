import React from 'react';

const ingredientImages = {
    lettuce: '🥬',
    cheese: '🧀',
    patty: '🥩',
    tomato: '🍅',
    onion: '🧅'
};

function Burger({ ingredients }) {
    return (
        <div className="burger">
            <div className="bun-top">🥯 Top Bun</div>

            <div className="stack">
                {ingredients.length === 0 && (
                    <div className="placeholder">Add ingredients to build your burger</div>
                )}
                {ingredients.map((item, index) => (
                    <div key={index} className="ingredient">
                        {ingredientImages[item]} {item}
                    </div>
                ))}
            </div>

            <div className="bun-bottom">🥯 Bottom Bun</div>
        </div>
    );
}

export default Burger;
