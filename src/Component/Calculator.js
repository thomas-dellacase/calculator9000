import AmazingNumberButton from './AmazingNumberButton';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import BeautifulScreen from './BeautifulScreen';
import {useState} from 'react';


function Calculator(){
    const[operation,setOperation]=useState('');

    function Click(props){
        //console.log(e.target.value)
        let event = props.target.value;
        console.log(event)
        switch(event){

            default:setOperation(operation+event);
            break;
        }
    }

    return(
        <div className="claculatorDiv" class='claculatorDiv'>
            <BeautifulScreen operation={operation}/>
            <GreatOperationButton Click={Click}/>
            <AmazingNumberButton Click={Click}/>
            <MagnificientEqualButton/>
        </div>
    )
}
export default Calculator;
