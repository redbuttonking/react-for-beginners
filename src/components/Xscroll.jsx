import React, { useRef } from 'react';
import style from '../styles/Xscroll.module.css';

function Xscroll({ content }) {
  const scrollContainerRef = useRef(null);

  const handleWheel = (event) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += event.deltaY;
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 600;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 600;
    }
  };

  return (
    <div className={style.scrollWrapper}>
      <button className={style.scrollButton} onClick={scrollLeft}>
        <i class="fa-solid fa-circle-left fa-2xl"></i>
      </button>
      <div className={style.scrollContainer} ref={scrollContainerRef} onWheel={handleWheel}>
        {content}
      </div>
      <button className={style.scrollButton} onClick={scrollRight}>
        <i class="fa-solid fa-circle-right fa-2xl"></i>
      </button>
    </div>
  );
}

export default Xscroll;
