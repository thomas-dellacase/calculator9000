function GreatOperationButton(props){
    return (
    <div className="great-operation-button">
        <button onClick={props.Click} value="+" class='operator'>+</button>
        <button onClick={props.Click} value="-" class='operator'>-</button>
        <button onClick={props.Click} value="*" class='operator'>*</button>
        <button onClick={props.Click} value="/" class='operator'>/</button>
        <button onClick={props.Click} value="C" class='operator'>C</button>
        <button onClick={props.Click} value="del" class='operator'>del</button>
    </div>
    );
}
export default GreatOperationButton;