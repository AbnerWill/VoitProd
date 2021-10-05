export default function Desconto(props) {
    return (
        <span style={{
            backgroundColor: '#F7386B',
            color: '#fff',
            padding: '5px 25px',
            borderRadius: '5px'
        }}>{props.desconto}</span>
    );
}