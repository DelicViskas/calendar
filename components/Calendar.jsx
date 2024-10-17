import { useState } from "react"
import CardMonth from "./CardMonth";

export default function Calendar() {
  const 
    [value, setValue] = useState(''),
    [dayActive, setDayActive] = useState(''),
    onClick = event => {
      const
        day = event.target.closest('.date')?.textContent;
      if(!day) return;
      setDayActive(day)
    };
  
  return (
    <div onClick={onClick}>
      <input value={value} onChange={event => {
        setValue(event.target.value);
        setDayActive();
      }} type="month" name="calendar" id="calendar" />
      {value && <CardMonth  date={new Date(value)} dayActive={dayActive}/>}
    </div>
  )
}