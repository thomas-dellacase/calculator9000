import AmazingNumberButton from './AmazingNumberButton';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import BeautifulScreen from './BeautifulScreen';
import ItsOver from './ItSOverNineThousand';
import {useState} from 'react';


function Calculator(){
    const[operation,setOperation]=useState('');
    const[result,setResult]=useState('');

    function Click(props){
        //console.log(e.target.value)
        let event = props.target.value;
        console.log(event)
        switch(event){
            
            case '=': 
            console.log('je suis dans egale')
            setOperation(operation+event)
                let test = Function(`"use strict";return (${operation})`)();
                setOperation(test)

                if(test>9000){
                    setResult(test)
                }

                break;

            case 'C':
                setOperation('0')
                break;

            case 'del':
                let del = operation.substring(0,operation.length-1)
                setOperation(del)
                break;

            default:
                setOperation(operation+event);
            break;
        }
    }


    return(
        <div className="global-calculator">
            <ItsOver result={result}/>
            <div className="claculatorDiv" class='claculatorDiv'>
                <BeautifulScreen operation={operation} Click={Click}/>
                <GreatOperationButton Click={Click}/>
                <AmazingNumberButton Click={Click}/>
                <MagnificientEqualButton Click={Click}/>
            </div>
        </div>
    )
}
export default Calculator;
