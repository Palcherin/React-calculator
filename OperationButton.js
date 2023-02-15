
import {ACTIONS} from './App'

const digit=[]
export default function OperationButton({dispatch,operation}){
 return (
        <button onClick={()=> dispatch({type: ACTIONS.CHOOSE_OPERATION ,payload: {operation}})}>{digit}</button>
    )
 }