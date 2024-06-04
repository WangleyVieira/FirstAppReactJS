function Pessoa(props) {
    return (
        <div>
            <img scr={props.foto} alt={props.nome}></img>
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissao: {props.profissao}</p>
        </div>
    )
}

export default Pessoa