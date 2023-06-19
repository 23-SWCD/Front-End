import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginDiv } from "../Style/UserCSS.js";
import { Link } from "react-router-dom";
function Login() {
  const [Email, setEmail] = useState("");
  const [PW, setPW] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");

  const user = useSelector((state) => state.user);
  let navigate = useNavigate();

  const SingInFunc = async (e) => {
    e.preventDefault();
    if (!(Email && PW)) {
      return alert("모든 값을 채워주세요.");
    }
    if (!(Email == "1111")) {
      return alert("비밀번호및 아이디가 틀렸습니다. ");
    }
  };

  useEffect(() => {
    if (user.accessToken) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setErrorMsg("");
    }, 5000);
  }, [ErrorMsg]);

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
          <label>이메일</label>
          <input
            type="email"
            value={Email}
            required
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <label>비밀번호</label>
          <input
            type="password"
            value={PW}
            required
            onChange={(e) => setPW(e.currentTarget.value)}
          />
          {ErrorMsg != "" && <p>{ErrorMsg}</p>}
          <button onClick={(e) => SingInFunc(e)}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              로그인
            </Link>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/register");
            }}
          >
            회원가입
          </button>
        </form>
      </LoginDiv>
    </div>
  );
}

export default Login;
