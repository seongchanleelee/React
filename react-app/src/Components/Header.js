function Title(props) {
    return (
      <h1 style={{color: "tomato",}} onClick={() => alert("title clicked")}>{props.title}</h1>
    )
  }

export default Title;