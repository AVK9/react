import * as dateFns from 'date-fns';
import { useState } from 'react';

const formatOfYear = 'yyy';
const formatOfManth = 'MMM';
const formatOfWeek = 'eee';
const formatOfDay = 'd';


const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectDate, setSelectDate] = useState(new Date());
    const today = new Date();

    const firstDay = dateFns.startOfMonth(currentDate);
    const lastDay = dateFns.lastDayOfMonth(currentDate);
    const startDate = dateFns.startOfWeek(firstDay);
    const endDate = dateFns.lastDayOfWeek(lastDay);
    const totalDate = dateFns.eachDayOfInterval({ start: startDate, end: endDate });

    const weeks = (date => {
        const weeks = [];
        for (let day = 1; day <= 7; day++) {
            weeks.push(date[day]);
        }
        return weeks
    })(totalDate);

    const isToday = (day) => dateFns.isSameDay(day, today);
    const isSelectedDate =day => dateFns.isSameDay(day, selectDate)

  return (
      <div>
          <div style={{display:'flex', justifyContent: 'space-arround', margin:"1 rem 0"}} >
            <button class="bg-red-500 w-20 text-white" onClick={()=>setCurrentDate(dateFns.subMonths(currentDate, 1))} >last</button>
          <span class="text-white">{ dateFns.format(currentDate, formatOfManth)}{ dateFns.format(currentDate, formatOfYear)}</span>
          <button class="bg-red-500 w-20 text-white" onClick={()=>setCurrentDate(dateFns.addMonths(currentDate, 1))} >next</button>
</div>
          <div class="text-white">Month Year</div>
          <div style={{display:'grid', gridTemplateColumns: 'repeat(7, 1fr', gap: '1rem'}}>
              {weeks.map(week => <span>{ dateFns.format(week, formatOfWeek)}</span>)}
              {totalDate.map(date => <div><div class="w-12 h-12 rounded-full bg-slate-400 flex items-center justify-center"><span style={{
                  color:
                      !dateFns.isSameMonth(date, currentDate)
                          ? 'gray' : isSelectedDate(date) ? 'blue'
                              : isToday(date) ? 'green' : dateFns.isWeekend(date, currentDate) ? 'red' : ''
              }}
              onClick={()=> setSelectDate(date)}>
                  
                  {dateFns.format(date, formatOfDay)}
                  </span></div>100%</div>)}
          </div>
    </div>
  )
}
//!dateFns.isSameMonth(date, currentDate) ?
export default Calendar