import Row, { IRowProps } from "./Row";

export interface IHistoryProps { words: Array<IRowProps>}

function History(props: IHistoryProps) {
    return (
        <div className="history">
            {props.words.map((word: IRowProps, index: number) => <Row key={index} letters={word} />)}
        </div>
    )
}

export default History;