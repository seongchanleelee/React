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




### React if문

- 삼항연산자를 이용하여 표현을 해줌

  - ```js
       //flipped가 true라면 amount, false라면 Math.round(amount/60)을 출력
         <input value={flipped ? amount : Math.round(amount/60)} id="hours" placeholder="Hours" type="number" onChange={onChange} disabled={!flipped}/>
       ```

    ```

  - 위 예시는 flipped라는 함수가 변화하는 것에 따라 value를 바꾸어 주는 식이다

  - 이를 버튼에서도 적용가능!

  - ```
                             //flipped 되었다면 왼쪽 안되었다면 오른쪽
    <button onClick={onFlip}>{flipped ? "Turn back" : "Invert"}</button>
    ```

  - 



### 분할 정복

- 지금까지 만든 코드(시간,분 변환기)를  같은 html에 있는 컴포넌트에 추가한다.

  - ```js
    // 지금까지 만든 시간 변환기
    function MinutesToHours() {
            const [amount, setAmount] = React.useState(0);
            const [flipped, setFlipped] = React.useState(false);
            
            
            function onChange (event) {
                // setCounter(counter + 1);
                setAmount(event.target.value)
            }
            const reset = () => setAmount(0);
            const onFlip = () => {
                reset();
                setFlipped((current) => !current)
            };
            return (
            
            <div>
    
            <div>
                <label htmlfor="minutes">Minutes</label>
                <input
                value={flipped ? amount*60 : amount} //input의 value를 state의 값을 넣어줌 으로써 수정 가능
                placeholder="Minutes"
                type="number"
                // onChange함수를 둠으로써 input이 바뀔때마다 값이 변화함
                onChange={onChange}  disabled={flipped}/>     
                <h4>You want to convert {amount}</h4>
            </div>
            <div>
                <label htmlfor="hours">Hours</label>
                
                <input value={flipped ? amount : Math.round(amount/60)} id="hours" placeholder="Hours" type="number" onChange={onChange} disabled={!flipped}/>    
            </div>
    
            <button onClick={reset}>Reset</button>
            <button onClick={onFlip}>{flipped ? "Turn back" : "Invert"}</button>
    
            </div>  
            )
            }
    ```

  - ```js
    // 이를 하나의 컴포넌트 안에 html요소처럼 작성
        function App() {
            return (
            <div>
                <h1>Super Converter</h1>
                // 이부분
                <MinutesToHours />
            
            </div>  
            )
        }
    이걸 분할 정복 이라고 한다.
    ```

  - 물론 여러개의 components를 분할정복도 가능



### select

- 새로운 개념은 아니고, 버튼 클릭시 컴포넌트를 골라주 는 코딩을 짜 볼 것임.

- 우선 select시 value를 맞게 고르고 있는지 확인 작업

  - ```html
    우선 App에 return으로 html코드를 만들어줌	
    <div>
                <h1>Super Converter</h1>
                <select onChange={onSelect}>
                    <option value="0">Minutes & Hours</option>
                    <option value="1">Km & Miles</option>
                    </select>
            </div>  
    ```

  - ```js
    // 이후 onSelect 함수가 실행되면 event.target.value가 적절하게 나오는지 확인
    const [index, setIndex] = React.useState(0)
            const onSelect = (event) => {
                console.log(event.target.value)
    ```

- 다음은 select된 value들을 state에 넣어줌

  - ```js
    const onSelect = (event) => {
                console.log(event.target.value)
                // 위에 설정된 state를 변경하는 함수에 event.target.value를 인자로 적용시킴
                setIndex(event.target.value)
            }
    ```

- 이후 html로 변환시켜주기 위해 html코드에 js코드를 작성함

  - ```html
     <div>
                <h1>Super Converter</h1>
                <select onChange={onSelect}>
                    <option value="0">Minutes & Hours</option>
                    <option value="1">Km & Miles</option>
                    </select>
                    // 중괄호를 사용하면 js코드를 html코드에서 작성 가능!
                    // 이부분
                    // index가 0이면 MinutesToHours를 보여주고 아니면 null
                    {index ==="0" ? <MinutesToHours/>: null}
                    
            </div>  
     ```
    ```

  - 추가적으로 많은 index를 만들 수 있고, index값으로 그에 대한 html렌더링을 진행 할 수있다!
    ```

### Props

- Props는 부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있게 해주는 방법

- 예시로 코드를 작성해보자

  - ```js
    function Btn(props){
            console.log(props)
            return (
            // Save Changes라는 이름의 버튼을 만듬
                <button>Save Changes</button>
            )
        }     
        function App() {
            return (
            <div>
            // 버튼 두개를 컴포넌트에 보여줄건데 이 컴포넌트의 syndex(문구?는 내 마음대로 지정가능 아래 예시처럼 text나 x 이렇게 아무렇게
      		//이녀석들은 자동적으로 Btn이란 함수의 props라는 인자로 들어가게 되는데,
       		// 동작은 마치 Btn({text:"Save Changes", x: false})와 같이 동작함
       		// 이를 통해 props를 진행 할 예정
                <Btn text="Save Changes" x={false}/>
                <Btn text="Continue" y={7}/>
            </div>  
            )
        }
    ```

  - 이는 위 코드중 button의 글씨를 props를 이용해서 바꿀 예정인데 유용하게 사용됨

  - ```js
    function Btn(props){
    
            return (
             	// 이부분을 보면 알 수 있듯 props.text라는 값을 이름으로 보여 줄 수 있음
                <button>{props.text}</button>
            )
        }
    // 이는 아래와 같이 바꿀수 도 있음
    function Btn({ text }){
    
            return (
                <button>{text}</button>
            )
        }     
    ```

  - 이런 상속적인 부분은 style로도 사용 가능

  - ```js
    return (
                <button style={{
                    backgroundColor: "tomato",
                    color: "white",
                    fontSize: big ? 16 : 13
                }}>
                    {text}
                </button>
    
            )
    
    ```

  - 물론 함수나, 데이터에 대한 것도 부모에서 child함수에게 건내 줄 수 있고, 실행 시킬 수 도 있다.

  - ```js
    // 2. 함수에 인자로 넣어주어야됨
    function Btn({text, changeValue}) {
            console.log(text, "was rendered")
            return (
                // 3. 실제 실행되는 곳은 여기임
                
                    <button onClick={changeValue}>
                        {text}
                    </button>
            )
        }
        function App() {
            const [value, setValue] = React.useState("Save Changes")
            const changeValue = () => setValue("Revert Changes")
            return (
            <div>
                // 1. 이곳에 들어가는 신덱스는 props요소 이므로, 
                <Btn text={value} changeValue={changeValue}/>
                <Btn text="Continue"/>
            </div>  
            )
        }
    ```

  - 


### memo

- 어떠한 함수가 실행이 될 때, 전체적인 컴포넌트가 그려지는걸 볼 수 있음

- 이를 방지 하기 위해 memo(memorize)라는 개념을 활용 할 예정

  - ```js
    // 기존에 함수인 Btn을 memo함수로 감쌈으로써, 부모요소가 변할 때 child전체가 변하지 않고 부모요소에서 요청한 child함수를 지닌 component만 변화하는걸 볼 수 있음
    const MemorizedBtn = React.memo(Btn)
        function App() {
            const [value, setValue] = React.useState("Save Changes")
            const changeValue = () => setValue("Revert Changes")
            return (
            <div>
    
                <MemorizedBtn text={value} changeValue={changeValue}/>
                <MemorizedBtn text="Continue"/>
            </div>  
            )
        }
    ```

### PropType

- Props를 진행할 때, 나나, 팀원이 잘못된 형태, 다른타입의 데이터를 props할 때, 유용하게 사용됨

- props의 타입이 뭐고 어떤 모양이어야 하는지를 설명해줄 수 있음!

  - ```js
    // prop-types를 설치
    <script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
    ```

  - ```js
    // 기존함수의 props되는 요소의 타입을 보기위해 제작
        Btn.propTypes = {
            text: propTypes.string,
            fontSize: propTypes.number
        };
    // 위와 맞지 않은 형태의 데이터가 넘어온다면 콘솔창에 에러가 남
    // 콘솔창에 보고싶은 오류를 확인하기 위해 있는것임
    ```

  - ```
    Btn.propTypes = {
    		//만약 무조건 필요한 데이터라면, .isRequired를 사용
            text: propTypes.string.isRequired,
            fontSize: propTypes.number.isRequired,
        };
    ```



### 본격적 React

- 지금까지 script문을 긁어서 사용했었다

- 이제부턴 create-app을 하여 react를 사용할 예정

- 이에 장점은 components들을 파일 단위로 나눌 수 있기 때문에 분류가 편해지고, css또한 component를 위한 css 파일을 만들 수 있음

- 초기단계

  - ```
    node-v // node가 깔려있는지 확인
    npx // npx가 잘 작동하는지 확인
    npx create-react-app {폴더명} //폴더를 만듬
    
    ```

  - 만들어진 폴더는 많은 요소가 존재하는데 가볍게 얘기를 하자면

    - App.js는 초기 화면에 비추어 지는 html요소를 넣는 곳
    - index.js는 App.js와 같은 컴포넌트들을 html에 비추어 주기 위해 있는 요소
    - js파일들을 만들어 components들을 서로 props 할 수 있음




### Effect

- 이벤트가 발생할 시, function이 돌면서 전체적인 부분에 대해 변화를 주게 된다.

- 이런걸 막기위해, 이벤트 발생시 변경되는 컴포넌트만을 rerender시키고 싶을 때 사용

  - ```js
    function App() {
      const [counter, setValue] = useState(0);
      const onClick = () => setValue((prev) => prev + 1)
      console.log("i run all the time");
      // 이건 가볍게 변화하기 전 의 useEffect
      // const iRunOnlyOnlyOnce = () => {
      //   console.log("i run only once.")
      // }
      // useEffect( iRunOnlyOnlyOnce, [] )
        
      // 이건 가볍게 변화한 후의 useEffect
      useEffect(() => {
        console.log("call the api...")
      }, [])
    
      return (
        <div>
          <h1 className={styles.title}>Welcome back!</h1>
          <Button text={"Continue"} />
          <div>{counter}</div>
          <button onClick={onClick}>click me</button>
        </div>
      );
    }
    ```

  - 
