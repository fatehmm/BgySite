

export default function RowCol(props) {
    return (
        <tr>
            <td> {props.person.username}</td>
            <td> {props.person.sexNumber}</td>
        </tr>
    )
}