/* eslint-disable */
// 새터미널에서 warning(경고-무시해도됨) 메시지 뜰 때 지우는 방법

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'; 

  // useState('남자 코트 추천') 자료 잠깐 저장할 땐 변수
 
  // 나중에 가져다 쓰고 싶을 때 let [작명, 작명] = useState(보관할 자료)
  // 글제목 = state에 보관했던 자료, b = state 변경을 도와주는 함수
  // let [logo, setLogo] = useState('ReactBlog');
  // 사이트 로고의 경우 바뀌는 경우가 많지 않기 때문에 state로 쓰지않음.

  // let [글제목1, b] = useState('여자 코트 추천'); 
  // let [글제목2, c] = useState('강남 우동맛집');
  // let [글제목3, d] = useState('파이썬독학');

  let [글제목, 글제목변경] = useState(['여자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0); // 좋아요 갯수
  // 따봉변경 = state 변경 함수(새로운 state)

  // function 함수(){console.log(1);}
  

  // let num = [1, 2];

  // let [a, c] = [1, 2]; // 변수로 뺐을 때
  // let a = num[0];
  // let c = num[1]; // c = 2

  return (
    <div className="App">
      <div className="black-nav">
        {/* <h4 style={ {fontSize : '16px'} }>ReactBlog</h4> */}
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>정렬</button>

      <button onClick={() => { 

        // let arr = [1,2,3];

        // let copy = 글제목;
        let copy = [...글제목]; // 변경되지 않을 경우 ... 을 넣기
        copy[0] = '남자 코트 추천';
        // console.log(copy == 글제목);
        글제목변경(copy); 
        // 원본을 보존하기 위해서 독립적 카피본을 만들어 줌.
      }}>수정</button>

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
      <h4>{ post }</h4>
    </div>
  );
}
export default App;

// npm start (새터미널 -> react_01 루트가 있어야함)


// [문법]
// class 넣을 때는 className
// 변수꽂을 때는 = {} (데이터바인딩)
// style 넣을 때는 = {{이름 : '값'}}
// -는 마이너스로 인식하기 때문에 대문자로 작성

// [useState]
// 1.impory{useState}
// 2.useState(보관할 자료)
// 3.let[작명, 작명]
// <다른 데이터 값으로 변경할 때>
// useState = state를 쓰던 html은 자동으로 재렌더링됨. (변동시 자동으로 html에 반영되게 하고 싶으면 쓸 것)
// 변수(var,let,const)의 경우 변수와 html을 따로 따로 변경해주어야 함.