## react

### 먼저 vanila js를 이용하여 간단한 html 코드를 작성해보자


vanila js 에 대한 이해도

- 하나의 html태그를 선택하기 위한 js코드

  - id를 가지고 있다면 document.getElementById("id이름");
  - 아이디를 가지고 있지 않다면 document.querySelector("태그명")

- 하나의 태그에 이벤트를 설정하기 위한 js코드

  - ex) button.addEventListener("click", {함수명}) ==> click이란 이벤트를 할 시 함수가 적용되게 함

- counter를 script에 만들고 클릭시 숫자가 올라가는걸 확인 하고 싶다면

  - let counter = 0; 이라고 변수를 지정(let 으로 선언 해야함)
  - 클릭시 발생하는 함수 내에 counter= counter+1; 을 작성

- click 시 count 되는 수를 html로 변화를 보고싶을때

  - ```html
    <span>Total clicks: 0</span>
    ```

  - ```js
    // span태그를 querySelector로 선택
    const span = document.querySelector("span");
    ```

  - ```js
    function handleClick() {
            counter = counter +1;
            console.log("i have been clicked");
      		// span을 innerText를 이용하여 html을 업데이트 시켜줌
            span.innerText = `Total clicks: ${counter}`;
        }
    ```

### 이를 react와 reactdom을 이용하여 어려운 React 변환을 보도록한다. 이를 이해해야 react를 쉽게 사용할 때 이해하기 쉬움

react(어려운변환) 에 대한 이해도

- 위 코드와 동일한 코드를 만들기 위해 span태그를 만들어줌

  - ```js
    //createElement할시 함수 내 인자는 html태그 이름과 동일하게 지어야함
        //span 옆에 property를 설정할 수 있는데 id나 class, style등을 설정 할 수 있음 {id: "sexy-span"}
        // 세번째 argument로는 내용을 채울 수 있음
        const span = React.createElement("span", {id: "sexy-span", style: {color: "red"}}, "hello i am a span" );
    ```

- 만든 span태그를 html태그로 만들어 배치하기 위해 ReactDom.render()를 사용

  - ```html
    먼저 div에 id값을 root라는 이름으로 생성
    <div id="root"></div>
    ```

  - ```js
    // 이후 root를 getElementById를 이용하여 선택
    const root = document.getElementById("root");
    ```


  - ```js
    // render의 의미는 React element를 가지고 html로 만들어 배치한다는 것
    // span태그를 root위치에 둔다고 설정
    ReactDom.render(span, root)
    ```

- 이와 같이 vanila js로 만든 html과 다르게,  React는 js로 element를 만들고, html을 마지막에 설정 할 수 있다.(가장 큰 차이점)

- 다음으로 btn을 만들기 시작할 거임

- btn생성

  - ```js
    const btn = React.createElement("button", {}, "Click me");
    ```

- 기존의 span과 btn을 한번에 묶는 container라는 div태그를 생성

  - ```js
    // array([])를 사용하여 하나로 묶을 수 있음
    const container = React.createElement("div", null, [span, btn])
    ```

- ReactDOM.render를 사용하여 html에 렌더링 시켜줌

  - ```js
    ReactDOM.render(container, root)
    ```

- 생성된(React.createElement()로 생성된) 요소에 click이벤트나 onMouseEnter이벤트 등을 property에 넣을 수 있음

  - ```js
       const btn = React.createElement("button", {
            onClick: () => console.log("im clicked"),
        }, "Click me");
       ```


<hr>

### 위와 같은 어려운 React구현은 jsx를 통해 쉽게 표현 할 수 있다.

- 위와 같은 어려운 React구현은 사실 client(크롬)이 이해하는 코드이다 이를 babel을 이용하여 쉬운 코드로 바꾸어 줄 수 있음


- jsx란 리액트에 추가된 라이브러리 라고 생각하면됨

- createElement를 한줄로 요약 가능

  - ```js
    // 기존에 createElement와는 달리 html요소적으로 작성이 가능함
    // 함수를 사용할 땐 {} 안에 함수 내용을 작성

    const Title = <h3 id="title" onMouseEnter={() => console.log("mouse Enter")}>
             Hello I'm a title
             </h3>
    ```

  - ```js
    const Button = <button style={{backgroundColor: "tomato",}} onClick={() => console.log("im clicked")} >
            Click me
            </button>
    ```

- 기존에 div로 묶던 container라는 이름의 변수도 createElement를 풀어줄 수 있다.

  - ```js
    // 우선 기존의 Title과 Button을 함수 형태로 만들어 줌
    function Title() {
            return (
                <h3 id="title" onMouseEnter={() => console.log("mouse Enter")}>
             Hello I'm a title
             </h3>
            );
        }

    // 이는 arrow형태로 표현
    const Button = () => (<button style={{backgroundColor: "tomato",}} onClick={() => console.log("im clicked")} >
            Click me
            </button>)

    // 그 뒤 container에 html요소로 넣어주면 됨

        const Container = <div>
            <Title />
            <Button />
            </div>
    // 주의 해야 할 점은 <>요소로 시작점을 대문자로 해야함 --> <button> x <Button> o
    ```

- 핵심

  1. 기존 html언어와 동일 한 형태로 만들어 보기 쉬움
  2. 이를 함수화 시켜 여러개로 사용 가능함


### React(어렵게)를 통해 eventListener를 표출하는 방법

- 이전에 적용시켰던 클릭시 count가 올라가는 event를 활용하고 이를 html요소로 보여주고자 함

  - ```js
    <script type="text/babel">
        const root = document.getElementById("root");
        let counter = 0;
        function countUp() {
            counter = counter+1;
            render()

        }

        function render() {
            ReactDOM.render(<Container />, root)
        }

        
        const Container = () => (
            <div>
            <h3>Total clicks: {counter}</h3>
            <button onClick={countUp}>Click me</button>
            </div>)

        render()
    </script>
    ```

  - render라는 함수를 하나 만들고, 그 안에서 ReactDOM.render() 코드를 적용시킴(이는 초기 render시 count이므로 0으로 나옴)

  - 클릭시 countUp이란 함수를 적용시키고 또 그 함수 내에서 render()라는 함수를 불러서 매 클릭시마다 render를 시켜줌

  - 이는 비효율적인 방법!

  - ////////////////////////////////////////////////////////////////////////

  - 여기서 React의 가장 큰 장점은, vanila js 와 비교해 보면 바닐라js는 클릭시 div와 h3태그가 함께 변화하는걸 볼수 있음 but, react를 사용하면 {counter}요소 만 변화하여 변화 요소가 크게 줄어듬. (렌더링 되는 요소를 선택 할 수 있다는 뜻)

### 위와 동일한 코드를 조금 더 편하게 작성함(react의 최대장점을 이용)

- function에 data를 설정

  - ```js
    const data = React.useState()
    console.log(data)
    ```

- console.log(data)를 하였을때 나오는 결과값

  - ```
    (2) [undefined, ƒ]
    // 이에 undifined는 data이고, f는 data를 바꿀때 사용하는 function임
    ```

- React.useState()내에 값을 넣었을때 console.log변화

  - ```js
    const data = React.useState(0);
            console.log(data);
    (2) [0, ƒ]
    ```

- 위 data의 array에서 값을 꺼내는데, data[0], data[1]로 값을 꺼내도 되지만, 이를 더 편하게 하기 위해 array 값을 지정을 해줌

  - ```js
    const [counter, modifier] = React.useState(0);//여기는 default값
            console.log(counter);
            console.log(modifier)
    ```

  - 위 console.log의 결과값은 [0,f]에서 counter는 0이, modifier는 f가 출력되는걸 알 수 있음

- modifier라는 함수를 이용하여, 위에서 지정한 counter(data[0])값을 변환하는걸 확인해 봄

  - ```js
    const [counter, modifier] = React.useState(0);
            function onClick() {
                modifier(999)
            }
            console.log(counter)

    		return (
            
            <div>
            <h3>Total clicks: {counter}</h3>
            <button onClick={onClick}>Click me</button>
            </div>  
            )
    //onclick이란 함수가 적용되면, modifier() 함수의 인자로 counter가 변화하게 됨

    //console.log 값을 보면 counter = 0 이였다가, button을 누르면 counter가 999가 되는걸 확인 할 수 있음
    ```

  - modifier라는 함수는 이름을 원하는 형태로 바꿀 수 있고, 내부의 인자또한 원하는 변화를 부여 할 수있음

  - ```js
    const [counter, setCounter] = React.useState(0);
            function onClick() {
                setCounter(counter + 1);
            }
            console.log(counter)
    ```

- #### 이를 통해 eventListener, selectquery, rerender를 하지 않고, 매 순간 원하는 부분을 렌더링 시킬 수 있는 함수가 짜여짐 

  - render를 하는 함수를 따로 짜지 않아도 되는 이유는 React.useState()함수로 인해 가능한 거임
    - 이유는 useState에 있는 modifier함수가 state를 변경할 때 컴포넌트를 재생성하고 새로운 값으로 rerender를 하는것임!

### 앱의 state를 바꾸는 법

- state를 조정하는 modifier(우리예제에선 setCounter)의 인자를 또 다른 함수로 넣을 수 있다!

  - ```js
    //기존
    setCounter(counter + 1);
    // 하나의 함수에 current라는 인자를 불러들이고(current는 counter가 하나의 인자로 들어간 것임), 이 인자를 +1 시켜줌 
    setCounter((current) => current +1)

    // 위와 아래는 동일한 동작을 하는데, 아래와 같은 방법을 선호하는 이유는, 혹시 모를 다른 함수로 인한 값의 변환을 막아 안전하기 때문이다.
    // 또 현재의 값을 인자로 지닐 수 있기 때문에 변화에 덜 민감하다
    ```

  - ​





