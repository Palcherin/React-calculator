
import { useReducer } from "react"
import "./index.css"
import DigitButton from './Digitbutton'
import evaluate from './evaluate'
import OperationButton from "./OperationButton"

export const ACTION={
  ADD_DIGIT:'add_digit',
  CLEAR:'clear',
  CHOOSE_OPERATION:'choose_operation',
  DELETE_DIGIT:'delete_digit',
  EVALUATE:'evaluate'
}






const INTEGER_FORMATTER= new Intl.NumberFormat("en-us",{
  maximumFractionDigits:0,
})
function formatOperand(operand){
  if(operand==null)return
  const[integer,decimal]=operand.split(",")
  if(decimal==null) return INTEGER_FORMATTER.format(integer)

}
function App(){
  const[{currentOperand,previousOperand, operation }, dispatch]=useReducer(reducer,{})

 ({type:ACTION.ADD_DIGIT, payload: {digit:1}})
  return(
<div className="calculator-grid">
  <div className="output">
    <div className="previous-operand">{formatOperand(previousOperand)} {operation}</div>
    <div className="current-operand">{formatOperand(currentOperand)}</div>
  </div>
  <button className="span-two" onClick={()=>dispatch({type: ACTION.CLEAR})}>AC</button>
  <button className="span-two" onClick={()=>dispatch({type: ACTION.DELETE_DIGIT})}>DEL</button>
  <OperationButton operation="/"></OperationButton>
  <DigitButton digit="0" dispatch />
  <DigitButton digit="1" dispatch />
  <DigitButton digit="2" dispatch />
  <DigitButton digit="3" dispatch />
  <OperationButton operation="*"></OperationButton>
  <DigitButton digit="4" dispatch />
  <DigitButton digit="5" dispatch />
  <DigitButton digit="6" dispatch />
  <OperationButton operation="+"></OperationButton>
  <DigitButton digit="7" dispatch />
  <DigitButton digit="8" dispatch />
  <DigitButton digit="9" dispatch />
  <OperationButton operation="-"></OperationButton>
  <DigitButton digit="." dispatch />
  <DigitButton digit="0" dispatch />
  <button className="span-two" onClick={()=>dispatch({type: ACTION.EVALUATE})}>=</button>
</div>
  )
}
export default App