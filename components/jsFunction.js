export default function getArrDaysMonth(startShift, days) {
  let res = [];
  for (let m = 2 - startShift; m <= days; m += 7) {
    for (let i = m; i < m + 7; i++) {
      let cell = String(i);
      if (i < 1 || i > days) cell = '';
      res.push(cell);
    }
  }
  
  return res;
}