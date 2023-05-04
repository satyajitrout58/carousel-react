import React, { useState, useEffect, Children } from "react";

const Carousol = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bullet, setBullet] = useState([]);

  const nextItem = () => {
    const index = currentIndex + 1 === children.length ? 0 : currentIndex + 1;
    setCurrentIndex(index);
    const bullets = Array(children.length).fill("◎");
    bullets[index] = "◉";
    setBullet(bullets);
  };

  const previous = () => {
    const index = currentIndex - 1 < 0 ? children.length - 1 : currentIndex - 1;
    console.log(currentIndex);
    setCurrentIndex(index);
    const bullets = Array(children.length).fill("◎");
    bullets[index] = "◉";
    setBullet(bullets);
  };

  useEffect(() => {
    const count = Children.count(children);
    const bullets = Array(count).fill("◎");
    bullets[0] = "◉";
    setBullet(bullets);
  }, []);

  useEffect(() => {
    const interVal = setInterval(nextItem, 2000);
    return () => {
      clearInterval(interVal);
    };
  }, [currentIndex]);

  return (
    <div className="carousel-content-wrapper">
      <div class="carousel-container">
        {bullet}
        {Children.toArray(children)[currentIndex]}
        <div>
          <button onClick={previous}>Previous</button>
        </div>
        <div>
          <button onClick={nextItem}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Carousol;
