import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'; 

  // useState('남자 코트 추천') 자료 잠깐 저장할 땐 변수
  let [글제목1, b] = useState('여자 코트 추천'); 
  // 나중에 가져다 쓰고 싶을 때 let [작명, 작명] = useState(보관할 자료)
  // 글제목 = state에 보관했던 자료, b = state 변경을 도와주는 함수
  
  let [글제목2, c] = useState('강남 우동맛집');
  let [글제목3, d] = useState('파이썬독학');
  // let [logo, setLogo] = useState('ReactBlog');
  // 사이트 로고의 경우 바뀌는 경우가 많지 않기 때문에 state로 쓰지않음.

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
      <div className="list">
        <h4>{ 글제목1 }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목2 }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목3 }</h4>
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