# 노마드 코더 ReactJS \_ 영화 웹 서비스

### 🔭Preview

<!-- <img src="img/ToDoList-img.jpg" width="800"> -->

### 👉 [link]() _다 만들면 링크 넣어야함_

# 1. 프로젝트 기능 설명

# 2. 프로젝트 기록

<!-- <details>

 <summary>자세히</summary> -->

## day 1 - 24.04.22 ~ 24.04.24 - 강의 start

> 왜? why? 리엑트를 사용하는가? \_ 노마드코더 왈

1. 대부분의 웹 사이트가 리엑트 기반으로 만들어져 있음(44%정도?)  
   (인스타그램, 넷플릭스, 에어비앤비, 페이스북 - - -)

2. 페이스북에서 리액트를 만들었고 지금까지 사용하고 있으며 우리가 무료로 사용할 수 있음.

3. 리엑트는 js와 비슷하게 생김(js를 할 줄 안다면 배우기 수월)

4. 많이 사용하다 보니 패키지, 라이브러리, 배우는 책 등등 규모가 큼

<details>

 <summary> ➕ 알아본 내용</summary>

5. 복잡한 UI를 component(컴포넌트)로 나누어 단순하게 개발 가능함.

6. 다른 라이브러리나 프레임워크도 함께 활용하기 쉬움.  
   \*라이브러리 : 특정 기능들이 있는 집합(코드), 그 기능들을 직접 호출해 사용할 수 있음.

7. 리엑트는 화면을 새로 띄우는게 아닌 그 부분(특정한)만 업데이트를 해주는 형식(빠른 로딩속도)

</details>
<!-- </details> -->

> component 만들기

- 리엑트에서 컴포넌트를 만드는 방법을 배움 (두가지 문법이 있음)

```js
<!-- 컴포넌트 예시 -->

// 1.
  const Title = ()=> (
    <h3 id="title" onMouseEnter={()=> console.log("mouse enter")}>
      hello i'm title
      </h3>
  );

// 2.
  function Title() {
    return (
      <h3 id="title" onMouseEnter={()=> console.log("mouse enter")}>
        hello i'm title
      </h3>
    )
  }

// 3.
  const Button = ()=> (
    <button
      style = {{backgroundColor:"tomato"}}
      onClick = {()=> console.log("im clicked")}
    >
      Click me!
    </button>
  );

```

> component 사용하기

- 만들어 놓은 component는 다른 곳에서 사용 할때는 첫글자는 대문자로 써야함  
  그러니 만들 때 <u>첫 글자를 대문자로 표기</u> 해야함

```js
// 1. 만들어 놓은 컨포넌트를 담아서
const Container = () => (
  <div>
    <Title />
    <Button />
    <Button />
  </div>
);

// 2. ReactDOM을 사용하여 rendering함
ReactDOM.render(<Container />, root); // root = <div>
```

> 리엑트JS의 특징

- 값을 변경할 때 JS 같은 경우 모든 값들을 바꿔야 하는데 리엑트JS는 해당 부분만 변경함  
  => 빠른 응답

## day 2 - 24.04.25 - 강의

> 리렌더링 (state의 값을 바꿨을 때)

- 값이 변경되거나 한 부분을 리랜더링을 해야 할 때 편리하게 해줄수가 있다.
- modifier함수 즉 setCounter를 가지고 state를 변경할때 (counter) component가 새로운 값을 가지고 리렌더링이 된다.
- 중요한건 모든 컴포넌트를 다시 만드는게 아닌 수정되는 부분만 딱 변경한다.  
  => ⭐<b>_리엑트의 장점_</b>⭐

```js
// 매번 render를 해줘야 함
ReactDOM.render(<App />, root);

// useState 사용
function App() {
  // useState(초기값,함수)
  const [counter, setCounter] = React.useState(0);

  // onClick함수를 호출해서 setCounter()를 호출. 즉 counter 값을 변경함
  const onClick = () => {
    // 1.
    // setCounter(counter + 1);

    // 2.  *가장 안전한 방법
    setCounter((current) => current + 1);
  };

  return (
    <div>
      <h3> 클릭수 = {counter} </h3>
      <button onClick={onClick}> 클릭 </button>
    </div>
  );
}
```

- state의 값을 현재 값에서 변경되는 경우(증가하거나 감소하거나 등등) 직접 쓰는것 보다 함수(current)를 사용해서 변경하는것이 매우 안전함

```js
// 현재 state의 값을 리엑트가 명확하게 알 수 있음
setCounter((current) => current + 1);
```

> JSX에서 HTML 작성시 주의 할 점

- class와 for 같이 이미 js에서 지정되어 있는 단어라 JSX에서 쓰이는 방법으로 써야함

```html
<!-- 오류 -->
<h1 class="hi">Super Converter</h1>
<label for="minuts">Minutes</label>
<input id="minuts" type="number" />

<!-- 올바른 표기 -->
<h1 className="hi">Super Converter</h1>
<label htmlFor="minuts">Minutes</label>
<input id="minuts" type="number" />
```

> input의 값을 받아오기 (event)

- event를 사용해서 해당 요소의 value를 가져올 수 있음

```js
const onChange = (evenet) => {
  setMinutes(evenet.target.value);
};

// input에 onChange를 통해 위 함수를 호출하여 값을 사용함
```

## day 3 - 24.04.30 - 강의

> useState 활용 해보기(실습)

<details>

 <summary> 열기 </summary>

```js
// Km 에서 mile로 mile에서 km로 변환하는 컴포넌트
const root = document.getElementById('root');

function MinutesToHours() {
  const [amount, setAmount] = React.useState();
  const [invert, setInvert] = React.useState(false);

  const onChange = (evenet) => {
    setAmount(evenet.target.value);
  };

  const onFlip = () => {
    reset();
    setInvert((current) => !current);
  };

  const reset = () => setAmount(0);

  return (
    <div>
      <div>
        <label htmlFor="minuts">Minutes</label>
        <input
          value={invert ? amount * 60 : amount}
          id="minuts"
          type="number"
          placeholder="Minutes"
          onChange={onChange}
          disabled={invert}
        />
      </div>

      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={invert ? amount : Math.round(amount / 60)}
          id="hours"
          type="number"
          placeholder="Hours"
          onChange={onChange}
          disabled={!invert}
        />
      </div>
      <button onClick={reset}>Reset!</button>
      <button onClick={onFlip}>invert</button>
    </div>
  );
}

function KmToMiles() {
  const [length, setLength] = React.useState();
  const [invert, setInvert] = React.useState(false);

  const onChange = (event) => {
    setLength(event.target.value);
  };

  const reset = () => {
    setLength(0);
  };

  const onInvert = () => {
    reset();
    setInvert((curren) => !curren);
  };

  return (
    <div>
      <div>
        <label htmlFor="Km">Km</label>
        <input
          value={invert ? length * 1.609344 : length}
          placeholder="Km"
          id="Km"
          type="number"
          onChange={onChange}
          disabled={invert}
        />
      </div>

      <div>
        <label htmlFor="Miles">Miles</label>
        <input
          value={invert ? length : length / 1.609344}
          placeholder="Miles"
          id="Miles"
          type="number"
          onChange={onChange}
          disabled={!invert}
        />
      </div>
      <button onClick={reset}>Reset!</button>
      <button onClick={onInvert}>Invert!</button>
    </div>
  );
}

function App() {
  const [index, setIndex] = React.useState('1');

  const onChange = (event) => {
    setIndex(event.target.value);
  };

  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onChange}>
        <option value="xx">Select your unit </option>
        <option value="0">Minutes to Hours</option>
        <option value="1">Km to Miles</option>
      </select>
      <hr />
      {index === 'xx' ? 'Pleas Selct Your Unit' : null}
      {index === '0' ? <MinutesToHours /> : null}
      {index === '1' ? <KmToMiles /> : null}
    </div>
  );
}

ReactDOM.render(<App />, root);
```

</details>

---

> props

- 부모 컴포넌트로부터 자식 컴포넌트에게 데이터를 보내는 것

```js
// props 사용방법 1 (이 방법을 많이 사용함)
function Btn({ text, onClick }) {
  // 코드 생략
  <button onClick={onclick}>{text}</button>;
}

// props 사용방법 2
function Btn(props) {
  // 코드 생략
  <button onClick={props.onClick}>{props.text}</button>;
}

function App() {
  const [value, setValue] = React.useState('기존 이름');
  const changeValue = () => setValue('바꾼이름');

  return (
    <div>
      <Btn text={value} onClick={changeValue} />
      <Btn text={value} />
    </div>
  );
}
```

⭐중요⭐

- props는 실제로 이벤트를 넣어주는게 아님 직접 컴포넌트에서 적용해주어야함
- 하나의 오브젝트로 여러가지를 받음
- props의 이름을 똑같이 써주어야 컴포넌트가 받아 쓸 수 있음

> React.memo()

- 부모 컴포넌트에 있는 state(상태) 값이 변경되어 자식 컴포넌트가 다시 그려질 때( re-render) 전체가 바뀌지만 React.memo() 함수를 사용하면 바뀐 자식 컴포넌트만 바뀌게 된다.  
  => 어플리케이션이 느려지는 원인을 잡아주기도 함

> PropType

- prop에 타입을 표시해준다 (구문은 옳게 작성했지만 타입이 틀려서 적용이 안 될 것을 방지)

```js
// 먼저 패키지를 설치해준다
<script src="https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.6.0/prop-types.js"></script>;

// 적용
Btn.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
};
```

## day 4 - 24.05.01 - 강의

> useEffect

- State가 변경될때 마다 컨포넌트 안에 있는 모든 코드들이 실행되는데  
  코드를 특정 조건에 실행하거나 딱 한번만 실행하게 할 때 사용됨
- uesEffect 안에 있는 코드들은 초기 렌더링이 됐을때 한번은 실행함

```js
// deps [] 가 비어있을때
useEffect(() => {
  console.log('2 나는 한번만 실행돼');
}, []);

// deps [] 에 값이 변하면
useEffect(() => {
  console.log('3 나는 keyword가 바뀌면 실행돼');
}, [keyword]);

useEffect(() => {
  console.log('4 나는 value가 바뀌면 실행돼');
}, [value]);

// deps [] 에 여러개가 있을때 하나라도 바뀌면
useEffect(() => {
  console.log('5 나는 keyword, value가 둘중 하나 라도 바뀌면 실행돼');
}, [keyword, value]);

// 응용
useEffect(() => {
  if (keyword !== '' && keyword.length > 5) console.log('6 나는 keyword가 5글자 이상으로 바뀌면 실행돼');
}, [keyword]);
```

⚡정리⚡  
react.js는 stat를 변화시킬 때 component가 재 실행된다. UI관점에서는 새로운 데이터가 들어올 때마다 자동으로 새로고침이 되어 좋은점이긴 하지만 가끔 어떤 특정 코드는 계속해서 실행되지 말아야 하는 것들이 있다. 그래서 useEffect를 사용하는것.

> 잘 쓰지는 않지만... Cleanup (useEffect) \_ 함수임 ㅇㅇ

```js
// 쓰이는 예시 코드

function Hello() {
  useEffect(() => {
    console.log('hi');
    return () => console.log('bye');
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowig] = useState(false);
  const onClick = () => setShowig((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'show'}</button>
    </div>
  );
}
```

- 컴포넌트가 없어질떄 (destroy) 무언갈 하고 싶을때 사용하는 방법 함수

## day 5 - 24.05.03 - 강의

> ...[ *배열* ]

- 기존의 배열을 풀어서 새로운 값을 넣고 배열로 만듦
- setToDos에서 currentArry는 현제 state 값임
- 따라서 기존의 state 값(toDos)에 새로운 값(todo)을 넣는것

```js
// 참고 코드
setToDos((currentArry) => [todo, ...currentArry]);
```

> map( _function_ )

- ()안에 함수를 배열의 값들을 하나씩 넣어서 실행함
- toDos의 item들을 각각 받아 html li태그에 값을 넣고 띄움

```js
<ul>
  {toDos.map((item, index) => (
    <li key={index}> {item}</li>
  ))}
</ul>
```

⭐ 리엑트에서 같은 컴포넌트의 list를 렌더할때 "key" 라는 prop을 넣어줘야 함

> useState 연습 \_ 간단한 ToDoList 만들기

<details>

 <summary> 열기 </summary>

```js
import React, { useEffect, useState } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === '') return;
    setToDos((currentArry) => [todo, ...currentArry]);
    setTodo('');
  };

  console.log(toDos);
  return (
    <div>
      <h1>My todo {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type="text" placeholder="Write your to do.."></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}> {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

</details>

## day 6 - 24.05.16 - 강의(다시 학습)

> 브랜치 삭제 (큰일났다..)

master에 여태 까지 했었던 공부 기록(readme)과 코드들을 합쳐줘야하는데 까먹고 브랜치를 삭제했다... 안그래도 사정이 있어서 다시 복습하려고 했는데 복습할 공책이 읍다..(readme) 다시... 재수강 해야겠다 .... 다시는 이런일 없기를

물론 브랜치 복구까지 시도를 했지만 공부만 하고 코딩만 하고 깃허브 데스크탑에서 커밋을 하지 않았다..... 다시는 이런일 없기를...ㅎ.....

> `fetch()` \_ api 요청

- api요청은 한번만 하면 되기 때문에 useEffect를 사용한다.
- state의 초기값을 꼭 넣어주기(`  const [coins, setCoins] = useState([]);` )

```js
function App() {
  const [loding, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);

  // 비트코인 api(정보)를 요청하고 사용
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers').then((response) =>
      response.json().then((json) => {
        setCoins(json);
        setLoding(false);
      })
    );
  }, []);

  return (
    <div>
      <h1>The Coin! {loding ? null : `${coins.length} coins`}</h1>
      {loding ? (
        <strong>Now Loding...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
```

> `react-router-dom`

<p> 페이지 이동을 할 때 사용한다. </p>
<p> a 태그를 사용하면 되지 않나 싶지만 그렇게 되면 전체가 새로고침 되기 때문에 여러가지 문제가 생길 수 있다. (화면 끊김, 로딩 속도 저하 ...) </p>
<p> 단일 페이지 어플리케이션 즉 <strong>SPA (Single Page Application)</strong>는 다수의 페이지를 하나의 페이지에서 특정 부분만 업데이트하는 방법 </p>

```js
// 먼저 import 해주기
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// <a> 태그와 같은 역할
import { Link } from 'react-router-dom';
```

```js
// 사용 예시
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movie/:id" element={<Detail />} />
  </Routes>
</Router>
```

⭐중요⭐

- 예전에는 `<Swich>`를 사용했지만 이제는 `<Routes>`를 사용
- `<Routes>` 속성 element 안에 컴포넌트를 넣음
- `<Routes>` path 속성에 해당 컴포넌트로 갈 URL를 넣어줌
- `path="/movie/:id"` = 동적 URL \_ `:`
  - URL에 변수 값을 넣어주는 것 (사용 할 수 있음 : `useParams`)

```js
// 중괄호로 묶어주면 그 값(:id)을 가져옴
const { id } = useParams();
```

## day 7 - 24.05.27 - 영화 정보 사이트 만들기 1

> 복습 및 css modul 학습

- src 폴더에 **styles** 라는 폴더를 만들어 준다.
- 만들고 싶은 css를 폴더에 만들어주는데 module화 하여 만들어준다  
  ⭐특징⭐  
  파일 이름에 .module 을 붙여준다. **ex)** _Movie.module.css_

- 해당 jsx파일에 import를 해준다.  
  `import style from '../styles/Movie.module.css';`

- 이후 jsx 파일에서 태그 안에 className 속성으로 style를 넣어 준다.

```js
import style from '../styles/Movie.module.css';

<div className="{style.bgc}"></div>;
```

## day 8 - 24.05.29 - 영화 정보 사이트 만들기 2

> home 화면 디자인

- 배치를 어찌 해야할지 고민중...
- css 적용은 완료 (import, module 등)
- flex-wrap으로 배치는 해놓은 상태
- 상단 메뉴 component 생성

> 이후 해야할 일

- home 화면 디자인 (메뉴,영화)
- 영화 detail 디자인 생각해서 초안 만들기

## day 9 - 24.05.30 - 영화 정보 사이트 만들기 3

> Meun.jsx PropTypes 적용

- text

> css module 생성

- Detail , Home , Movie , Menu

> 긴 문자 ...으로 생략 표현 하는방법

- css를 통해서 적용함

```css
.movieTitle {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

- Home에 나오는 영화 제목(긴)을 줄이게 만듦

>

> 이후 해야할 일

- Detail css로 정보들 배치 하기
- 영화 마다 번호 매겨주기 (1,2,3...)

## day 10 - 24.06.03 - 영화 정보 사이트 만들기 4

> 코드 구조를 변경 했음

```css
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
|   └── Movie.jsx
├── pages/
│   ├── Home.jsx
│   └── Detail.jsx
├── styles/
│   ├── ...(생략)
└── App.jsx

```

> 상단 바 (Header) 디자인 조정 (css)

- 링크 방문 후 색상 변경 none

> Link >> NavLink로 변경

- NavLink는 지금 활성화된 링크에 CSS 스타일을 적용할 수 있도록 해줌
- className에 삼항연산자를 적용해서 활성화 된 링크면 `style.activeLink` 아니라면 `style.navLink`를 적용해준다.

```js
<NavLink to={'/react-for-beginners'} className={({ isActive }) => (isActive ? style.activeLink : style.navLink)}>
  Home
</NavLink>
```

> 영화 데이터를 바꿈 \_ 넷플릭스 with themoviedb

- 넷플릭스 영화 데이터 API를 사용하고 싶어서 코드를 바꿈
- themoviedb의 가이드 데로 API를 요청하고 쿼리문에 따라서 원하는 데이터를 가져옴

```js
// Home.jsx
const getMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmI5YjM0MjNlYTlhNTk0ZjhkNWNhOWVjMTQxM2FkOSIsInN1YiI6IjY2NWQ5ZGQ0MTZkMmZhNjk2ZWRkODBlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.72BwyMmykV_qZqil2csMYEAPjT3pCjoPyOg1wiW4Kv4',
    },
  };

  const json = await (
    await fetch(
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc',
      options
    )
  ).json();
  setMovies(json.results);
  setLoding(false);
};
```

- 마찬가지로 Detail.jsx 도 바꾸어줌

```js
//Detail.jsx
const getMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmI5YjM0MjNlYTlhNTk0ZjhkNWNhOWVjMTQxM2FkOSIsInN1YiI6IjY2NWQ5ZGQ0MTZkMmZhNjk2ZWRkODBlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.72BwyMmykV_qZqil2csMYEAPjT3pCjoPyOg1wiW4Kv4',
    },
  };
  const json = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=ko-KR&api_key=a6b9b3423ea9a594f8d5ca9ec1413ad9`,
      options
    )
  ).json();
  console.log(json);
  setMovie(json);
  setLoding(false);
};
```

⭐중간 뜬금 느낀점⭐  
 API를 다룰줄은 알았지만 역시나 찾아보고 하는데에 있어서 눈알이 빠질뻔했다
역시 어려워...  
그래도 해내서 기분 좋음 ㅎㅅㅎ

> 이후 해야할 일

- detail.jsx 디자인 및 home.jsx 디자인
- header 메뉴 뭐 넣을지 고민하기

## day 11 - 24.06.04 - 영화 정보 사이트 만들기 5

> Search.jsx / SearchInfo.jsx 생성

- 영화 검색 기능을 넣음
- Search.jsx는 page 이고 SearchInfo.jsx는 검색기능이 있는 component
- 검색한 영화를 클릭하면 영화정보(Detail.jsx)로 감\_Link(react-router-dom)

> 이후 해야할 일

- detail.jsx 디자인 및 home.jsx 디자인
- header 메뉴 뭐 넣을지 고민하기
- SearchInfo.jsx 디자인

## day 12 - 24.06.05 - 영화 정보 사이트 만들기 6

> Movie.jsx 디자인 추가

- 영화 포스터를 나열하고 같은 위치에 영화 이름과 평점을 띄움
- 다음과 같은 구조로 만듦

```js
<div className={style.overlay}>
  <img src={IMG_URL + coverImg} alt="movie_cover_img" />
  <div className={style.info}>
    <h3>{title}</h3>
    <p>Rating:</p>
  </div>
</div>
```

## day 13 - 24.06.07 - 영화 정보 사이트 만들기 7

> 기본 배경 및 메뉴 스타일 적용

- 검은 배경 적용 (`glober.css`)
- 메뉴 bar 배치 수정(검색 아이콘 오른쪽 정렬)

> 영화 리스트 가로 스크롤 적용

```css
.movies {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  white-space: nowrap;
  padding-left: 5%;
  width: 90%;
}
```

> Detail.jsx 디자인 적용

- 해당 영화에 들어가면 뒷배경이 `backdrop_path`인 데이터임 \_ 흐린 배경
- 정보들과 배경들이 각각 position 맞춰 정렬되어 있음

# 3. 프로젝트를 마치며...
