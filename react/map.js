import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'; 

  let [글제목, 글제목변경] = useState(['여자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  // 게시글 별로 숫자 각각 올라가기 (array 사용하기)
  let [modal, setModal] = useState(false);

  // [1,2,3].map(function(a){
  //   console.log(a)
  //   return '1233211'
  // });
  

  return (
    <div className="App">
      {/* <div className="black-nav">
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
      </div> */}

      {
        글제목.map(function(a, i){
          return (
          // <div>안녕</div>
          <div className="list" key={i}>
            {/* <h4>{ a }</h4> */}
            {/* <h4 onClick={()=>{ setModal(!modal) }}>{ 글제목[i] }</h4> */}
            <h4>{ 글제목[i] } 
              <span onClick={()=>{
                let copy = [...따봉];
                copy[i]++;
                따봉변경(copy);
              }}>👍</span> { 따봉[i] } 
            </h4>
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }

      {/* key={i} => f12 눌렀을 때 warrning 뜰 때 사용하면 사라짐. */}
    
      {
        modal == true ? <Modal/> : null
      }

    </div>
  );
}


// map() 함수
// 1. 왼쪽 array 자료만큼 내부코드 실행
// 2. return 오른쪽에 있는걸 array로 담기
// 3. 유용한 파라미터 2개 사용가능 (function(a, i){}) / a, i = 파라미터


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
