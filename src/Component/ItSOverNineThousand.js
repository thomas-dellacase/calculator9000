function ItsOver(props){
    if(props.result > 9000 ){
    return(
        <div className="Its-over">
            <h1>It's over 9000!!!!!</h1>
            <p>I'm vegeta and I'm trash.</p>
        </div>
    )
    }
}
export default ItsOver;