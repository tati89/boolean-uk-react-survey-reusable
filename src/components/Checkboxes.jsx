import Checkbox from "./Checkbox"


function Checkboxes({checkBoxList, handleCheckboxGroupChange, isItChecked}) {
    return(
       <ul>
           <li>
           {checkBoxList.map((item, i) => (

             <Checkbox key={i} name={item.name} value={item.value} onChange={handleCheckboxGroupChange} type="checkbox" checked={isItChecked? isItChecked.includes(item.value) : ""} >{item.text}</Checkbox>
           ))}
         </li>
    </ul>
    )
}

export default Checkboxes