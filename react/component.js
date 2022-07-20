import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'; 

  let [글제목, 글제목변경] = useState(['여자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0); 
  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={() => { 따봉변경(따봉+1) }}>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>
      {/* <Modal/> */}

      <Address></Address>

      <Img></Img>
      
    </div>
  );
}


// let Modal = () => {
//   return (

//   )
// }

function Modal(){
  return (
    <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

function Address(){
  return (
    <div className="add">
      <h4>주소</h4>
      <p>연락처</p>
    </div>
  )
}

function Img(){
  return (
    <div className="image">
        <h4>이름</h4>
        <p>날짜</p>
    </div>
  )
}

// html에서 앞이 대문자로 시작하면 컴포넌트임.

// 컴포넌트 만드는 법 (많은 div를 깔끔하게 축약할 때)
// 1. function 작명 (){}
// 2. return() 안에 html 담기
// 3. <함수명></함수명> 쓰기

// 컴포넌트 만들기 좋을 때
// 1. 반복적인 html 축약할 때
// 2. 큰 페이지들
// 3. 자주 변경되는 것들



export default App;
