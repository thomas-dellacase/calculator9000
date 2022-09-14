import '../style/AmazingNumberButton.css';
function AmazingNumberButton(props){
    // function test(e){
    //     console.log(e.target.value)
    // }
    const createDigits = () => {
        const digits = [];
        for (let i = 0; i < 10; i++) {
        digits.push(
            <button onClick={props.Click} value={i} class="number">{i}</button>
        );
        }
        return digits;
    }

    return(
        <div className="amazing-number-button" class="amazing-number">
            {createDigits()}
        </div>
    );
}
export default AmazingNumberButton;