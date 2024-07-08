import Titulo from "../Titulo";

const listaCategorias = [
    {
        id: 1,
        titulo: "Front End",
        cor: "var(--azul)",
    },
    {
        id: 2,
        titulo: "Back End",
        cor: "var(--verde)",
    },
    {
        id: 3,
        titulo: "Mobile",
        cor: "var(--amarelo)",
    },
]

const SessaoVideos = () => {
    return (
        <ul>
            {listaCategorias.map((categoria) => (
            <li key={categoria.id}>
                <Titulo cor={categoria.cor}>
                    {categoria.titulo}
                </Titulo>
            </li>
        ))}
        </ul>
    )
}

export default SessaoVideos;