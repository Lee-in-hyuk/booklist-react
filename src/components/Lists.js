import List from "./List";
export default function Lists({bookLists}){
    return(
        <table className="booktable">
            <thead>
                <tr>
                    <th>작성자</th>
                    <th>제목</th>
                    <th>연도</th>
                </tr>
            </thead>
            <tbody>

                {bookLists.map((b,index) => (<List b={b} key={index}/>))}
                
            </tbody>
        </table>
    );
}