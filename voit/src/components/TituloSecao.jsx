export default function TituloSecao(props) {
    const titulo = {
        fontSize: '32px',
        color: '#363940',
        fontWeight: '500',
    }
    return (
        <p style={titulo}>{props.titulo}</p>
    );
}