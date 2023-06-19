import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { LoginDiv } from "../Style/UserCSS.js";

function Register() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PW, setPW] = useState("");
  const [PWConfirm, setPWConfirm] = useState("");
  const [Flag, setFlag] = useState(false);
  const [NameCheck, setNameCheck] = useState(false);
  const [NameInfo, setNameInfo] = useState("");

  const user = useSelector((state) => state.user);
  let navigate = useNavigate();

  useEffect(() => {
    if (user.accessToken) {
      navigate("/");
    }
  }, []);

  const RefisterFunc = async (e) => {
    setFlag(true);
    e.preventDefault();
    if (!(Name && Email && PW && PWConfirm)) {
      return alert("모든 값을 채워주세요!");
    }
    if (PW != PWConfirm) {
      return alert("비밀번호와 비밀번호 확인 값은 같아야 합니다.");
    }
    if (NameCheck) {
      return alert("닉네임 중복검사를 진행해 주세요.");
    }
    alert("회원가입이 완료되었습니다.");
  };

  const NameCheckFunc = async (e) => {
    e.preventDefault();
    if (!Name) {
      return alert("닉네임을 입력해주세요");
    }

    let body = {
      dispalyName: Name,
    };

    await axios.post("/api/user/namecheck", body).then((response) => {
      if (response.data.success) {
        if (response.data.check) {
          setNameCheck(true);
          setNameInfo("사용가능한 닉네임입니다.");
        } else {
          setNameInfo("사용불가능한 닉네임입니다.");
        }
      }
    });
  };

  return (
    <div
      style={{
        width: "100%",
        paddingTop: "12%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <LoginDiv>
        <form>
          <label>닉네임</label>
          <input
            type="name"
            value={Name}
            onChange={(e) => setName(e.currentTarget.value)}
            disabled={NameCheck}
          />
          {NameInfo}
          <button onClick={(e) => NameCheckFunc(e)}>닉네임 중복검사</button>
          <label>이메일</label>
          <input
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <label>비밀번호</label>
          <input
            type="password"
            value={PW}
            minLength={8}
            onChange={(e) => setPW(e.currentTarget.value)}
          />
          <label>비밀번호확인</label>
          <input
            type="password"
            value={PWConfirm}
            minLength={8}
            onChange={(e) => setPWConfirm(e.currentTarget.value)}
          />
          <button disabled={Flag} onClick={(e) => RefisterFunc(e)}>
            <Link
              to="/Login"
              style={{ textDecoration: "none", color: "white" }}
            >
              회원가입
            </Link>
          </button>
        </form>
      </LoginDiv>
    </div>
  );
}

export default Register;
