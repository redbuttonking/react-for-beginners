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

# 3. 프로젝트를 마치며...
