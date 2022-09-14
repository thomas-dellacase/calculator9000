import AmazingNumberButton from './AmazingNumberButton';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import BeautifulScreen from './BeautifulScreen';
import {useState} from 'react';


function Calculator(){
    const[operation,setOperation]=useState('');
    //const[operationResult,setOperationResult]=useState('');

    function Click(props){
        //console.log(e.target.value)
        let event = props.target.value;
        console.log(event)
        switch(event){
            case '=': 
            console.log('je suis dans egale')
            setOperation(operation+event)
                let test = eval(operation)
                setOperation(test)
                break;
            case 'C':
                setOperation('')
                break;
            default:
                setOperation(operation+event);
            break;
        }
    }


    return(
        <div className="claculatorDiv" class='claculatorDiv'>
            <BeautifulScreen operation={operation} Click={Click}/>
            <GreatOperationButton Click={Click}/>
            <AmazingNumberButton Click={Click}/>
            <MagnificientEqualButton Click={Click}/>
        </div>
    )
}
export default Calculator;
