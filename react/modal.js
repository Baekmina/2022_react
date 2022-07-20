import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'; 

  let [글제목, 글제목변경] = useState(['여자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0); 
  let [modal, setModal] = useState(false);
  // true = 모달창 열림, false = 모달창 닫힘 (형식은 자유임.)
  

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
        <h4 onClick={()=>{ setModal(!modal) }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

      {
        //  조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        // null = 비어있는 html을 표현할 때 자주 사용 
        modal == true ? <Modal/> : null
      }

    </div>
  );
}

// 동적인 UI
// 1.html css로 미리 UI디자인
// 2.UI 현재 상태를 state로 저장
// 3.state에 따라서 UI가 어떻게 보일지 조건문 으로 작성



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



export default App;

