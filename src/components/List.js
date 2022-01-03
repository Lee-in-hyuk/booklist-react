export default function List({b}){
    return(
        <tr>
            <td>{b.writer}</td>
            <td>{b.title}</td>
            <td>{b.year}</td>
        </tr>
    );
}