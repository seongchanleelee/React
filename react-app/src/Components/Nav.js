function Nav (props) {
    const lst = [

    ]
    for(let i =0; i<props.topics.length; i++) {
        let t = props.topics[i];
        lst.push(<li key={t.id}>
            <a id={t.id} href={"/read/" + t.id} onClick={(event) => {
                event.preventDefault();
                props.onChangeMode(event.target.id);
        }}>{t.title}</a></li>)
    }
    return (
        <>
        <ol>
            {lst}

        </ol>
        </>
    )
}
export default Nav;
