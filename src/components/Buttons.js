export default function Buttons({onButton}){
    return(
        <div className="buttonDiv" onClick={onButton}>
            <button className="btn" data-key="year" data-value="2021년">2021년도</button>
            <button className="btn" data-key="year" data-value="2020년">2020년도</button>
            <button className="btn" data-key="year" data-value="2019년">2019년도</button>
            <button className="btn" data-key="year" data-value="2018년">2018년도</button>
        </div>
    );
}