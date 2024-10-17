import Day from "./Day";
import getArrDaysMonth from "./jsFunction";

export default function CardMonth({ date, dayActive }) {
  const
    monthName = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'][date.getMonth()],
    arrMonthDay = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    startShift = date.getDay() === 0 ? 7 : date.getDay(),
    days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  if (!dayActive && date.getMonth() === new Date().getMonth()) {
    dayActive = new Date().getDate();
  }
  let key = 0;

  return (
    <>
      <div className='month'>
        <div className='month-name'>{monthName}</div>
        <div className="week-day">
          {arrMonthDay.map(dayWeek => <span className="day" key={dayWeek}>{dayWeek}</span>)}
        </div>
        <div className="month-day">
          {getArrDaysMonth(startShift, days).map(num => <Day key={key++} num={num} dayActive={dayActive} />)}
        </div>
      </div>
    </>
  )
}


