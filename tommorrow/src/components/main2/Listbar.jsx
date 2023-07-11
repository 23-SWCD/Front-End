import React, { useEffect, useRef, useState } from "react";

import { ListBarDiv } from "./pg_css/ListBarCss";

const Listbar = ({ width = 250, children, onclick }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-width);
  const side = useRef();

  function handleClick(e) {
    e.stopPropagation();
    toggleMenu();
  }
  // button 클릭 시 토글
  const toggleMenu = () => {
    onclick();
    if (xPosition < 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(-width);
      setOpen(false);
    }
  };

  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async (e) => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      await setX(-width);
      await setOpen(false);
      onclick();
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleClose);

    return () => {
      window.removeEventListener("click", handleClose);
    };
  });

  return (
    <ListBarDiv
      ref={side}
      style={{
        width: `${width}px`,
        height: "100%",
        transform: `translatex(${-xPosition}px`,
      }}
    >
      <button onClick={handleClick}>
        {isOpen ? <span>→</span> : <span>WorkList ←</span>}
      </button>
      <div className="content">{children}</div>
    </ListBarDiv>
  );
};

export default Listbar;
