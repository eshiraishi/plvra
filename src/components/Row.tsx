import Tile, { ITileProps } from './Tile';

export interface IRowProps {letters: Array<ITileProps>};

export function RowBuilder(word: string) {
    return word.split("").map((letter: string)=>{{value: letter; color: "white"}});
}

function Row(props: IRowProps) {
    return (
        <div className="row">
            {props.letters.map((tile: ITileProps, index: number) => <Tile key={index} value={tile.value} color={tile.color}/>)}
        </div>
    );
}

export default Row;