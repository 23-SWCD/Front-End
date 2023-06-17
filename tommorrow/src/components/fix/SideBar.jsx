import React, { useEffect, useRef, useState } from "react";
import img from "../../img/ladder.png";
import { ContainerDiv } from "./fixCss/SideBarCss";
import { SideBarDiv } from "./fixCss/SideBarCss";
const SideBar = ({ width = 280, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(width);
  const side = useRef();

  function handleClick(e) {
    e.stopPropagation();
    toggleMenu();
  }
  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition > 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(width);
      setOpen(false);
    }
  };

  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async (e) => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      await setX(width);
      await setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  });

  return (
    <SideBarDiv
      ref={side}
      style={{
        width: `${width}px`,
        height: "100%",
        transform: `translatex(${-xPosition}px)`,
      }}
    >
      <button onClick={handleClick}>
        {isOpen ? (
          <span>X</span>
        ) : (
          <img src={img} alr="contact open button" className="openBtn" />
        )}
      </button>
      <div className="content">{children}</div>
    </SideBarDiv>
  );
};

export default SideBar;
