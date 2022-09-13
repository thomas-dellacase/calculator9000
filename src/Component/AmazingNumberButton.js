import '../style/AmazingNumberButton.css';
function AmazingNumberButton(props){
    // function test(e){
    //     console.log(e.target.value)
    // }
    return(
        <div className="amazing-number-button" class="amazing-number">
            <button onClick={props.Click} value="1" className="amazing-number" class="number">1</button>
            <button onClick={props.Click} value="2" className="amazing-number"  class="number">2</button>
            <button onClick={props.Click} value="3" className="amazing-number"  class="number">3</button>
            <button onClick={props.Click} value="4" className="amazing-number"  class="number">4</button>
            <button onClick={props.Click} value="5" className="amazing-number"  class="number">5</button>
            <button onClick={props.Click} value="6" className="amazing-number"  class="number">6</button>
            <button onClick={props.Click} value="7" className="amazing-number"  class="number">7</button>
            <button onClick={props.Click} value="8" className="amazing-number"  class="number">8</button>
            <button onClick={props.Click} value="9" className="amazing-number"  class="number">9</button>
            <button onClick={props.Click} value="0" className="amazing-number"  class="number">0</button>
        </div>
    );
}
export default AmazingNumberButton;