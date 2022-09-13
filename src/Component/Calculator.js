import AmazingNumberButton from './AmazingNumberButton';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import BeautifulScreen from './BeautifulScreen';


function Calculator(){
    return(
        <div className="claculatorDiv" class='claculatorDiv'>
            <BeautifulScreen/>
            <GreatOperationButton/>
            <AmazingNumberButton/>
            <MagnificientEqualButton/>
        </div>
    )
}
export default Calculator;
