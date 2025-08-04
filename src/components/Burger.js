import React from 'react';

function Burger({ ingredientCounts, ingredientOrder, ingredientImages }) {
  // Build the stack array based on order and count
  const stack = [];

  ingredientOrder.forEach((ingredient) => {
    const count = ingredientCounts[ingredient] || 0;
    for (let i = 0; i < count; i++) {
      stack.push(ingredient);
    }
  });

  return (
    <div className="burger">
      <div className="bun-top">
        <img src="/ingredients/top.jpg" alt="Top Bun" className="bun-img" />
      </div>

      <div className="stack">
        {stack.length === 0 ? (
          <div className="placeholder">Add ingredients to build your burger</div>
        ) : (
          stack.map((item, index) => (
            <div key={index} className="ingredient">
              <img
                src={ingredientImages[item]}
                alt={item}
                className="ingredient-img"
              />
            </div>
          ))
        )}
      </div>

      <div className="bun-bottom">
        <img src="/ingredients/bottom.jpg" alt="Bottom Bun" className="bun-img" />
      </div>
    </div>
  );
}

export default Burger;
