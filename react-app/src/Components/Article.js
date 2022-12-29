function Article(props) {
    return (
        <>
        <div>
            <h3>
                {props.title}
            </h3>
            <div>
                {props.body}
            </div>
        </div>
        </>
    )
}

export default Article;