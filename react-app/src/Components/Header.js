function Title(props) {
    return (
      <h1 style={{color: "tomato",}}><a href="/22" onClick={(event) => {
        event.preventDefault();
        props.onChangeMode();
      }
      }>{props.title}</a></h1>
    )
  }

export default Title;