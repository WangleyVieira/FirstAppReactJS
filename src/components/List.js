import Item from "./Item"
function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Honda" ano_lancamento={1990}/>
                <Item marca="Toyota" ano_lancamento={1992}/>
                <Item/>
                {/* <Item marca={1}/> */}
            </ul>
        </>
    )
}

export default List