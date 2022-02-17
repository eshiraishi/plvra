export interface ITileProps {
    value: string,
    color: string
}

function Tile(props: ITileProps) {
    return (
        <span className={`tile bg-${props.color}`}>
            {props.value}
        </span>
    );
}

export default Tile;