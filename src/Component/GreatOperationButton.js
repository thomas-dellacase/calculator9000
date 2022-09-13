function GreatOperationButton(props){
    // function Click(e){
    //     console.log(e.target.value)
    // }
    return (
    <div className="great-operation-button">
        <button onClick={props.Click} value="+" class='operator'>+</button>
        <button onClick={props.Click} value="-" class='operator'>-</button>
        <button onClick={props.Click} value="*" class='operator'>*</button>
        <button onClick={props.Click} value="/" class='operator'>/</button>
        <button onClick={props.Click} value="C" class='operator'>C</button>
    </div>
    );
}
export default GreatOperationButton;