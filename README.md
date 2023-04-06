# 1.Intro

**MERN STACK
- node.js(개발환경 총괄), mongoDB(DB), React(프론트), FireBase(유저 서비스), Express(서버) 

React: facebook, 유저 커뮤니티 규모가 크다
- UX가 뛰어나서 인상적인 사용자 경험을 제공해준다. 
- HTML 관리가 편해진다. 
- (구매, 클릭...) 전환률 향상에 도움을 준다. 
- 리액트 문법으로 IOS/Android 모바일 앱제작이 가능하다. 

**리액트 기반 개발 어플
- yahoo
- facebook
- discord
- instagram
- netflix
- CNN
- Dropbox

**React 시기 변화?
- 클래스 컴포넌트 기반 -> 함수형 컴포넌트 기반으로 개발이 쉬워짐

***
node -v 
- node 버전 확인 커맨드 
npm -v
- node package manager 라이브러리 버전 확인 커맨
***
ES7 React/Redux/graphQL/React-Native snippets 확장 설치
Prettier - Code Formatter 확장 설치 (자동 줄바꿈, 세미콜론, 정렬 등)

node 라이브러리 관리도구
-npm : 라이브러리 설치 후 계속 사용할 수 있게 저장
-npx : 라이브러리 한 번 사용 후 삭제

create-react-app <앱 이름>
리액트 : 클라이언트
익스프레스 : 서버

# 2. Component

컴포넌트 규칙
1. 컴포넌트의 이름은 반드시 영어 대문자로 시작하여야 한다.
2. 컴포넌트는 다른 컴포넌트가 사용할 수 있도록 export 해주어야 한다. 
3. 컴포넌트가 다른 컴포넌트를 사용하려면 import 하여야 한다. 
4. 컴포넌트가 하나의 태그 에 감싸져야 한다. <> </> 도 가능 

# 3. JSX
JSX 규칙
1. CamelCase 원칙
2. return 구문 안 js 사용 시, {}
---
ex. const Temp = 7; 
return {
...
  {Temp}
...
}
3. css, style : {{}} + object 사용
ex. <h1 classNam=""style={{clor:"red", ... , fontSize : "3rem"}}> 
---
js 작성
1. 가정문 : if-else, switch
#함수를 선언 
let flag = true;
function CheckFlag(Flag) {
  if(flag) {
    return "참입니다.";
  } else {
    return "거짓입니다.";
  }
}
return (
  ...
  {CheckFlag(flag)}
  ...
)
---
#return 내에서 사용- 삼항연산자
{flag ? "참입니다" : "거짓입니다."} 

2. 반복문 : for //map

let Arr = {1,2,3};

return (
  <div>
    <h1>Hello, React</h1>
    {Arr.map((element, idx) => {
      return <p>{element}</p>;
      })}
 ) //1,2,3 을 한 줄에 하나씩 출력
---
 let  Arr = {1,2,3};
 
 return (
  ... 
  {Arr.map((a,b) => {
    return (
      <div key={b}> //key속성은 변하지 않는 값인index로 설정하는 것을 추천!
        <p>{a}</p>
      </div>
      );
   })}; 

