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

- #2.5 JSX부터 듣기