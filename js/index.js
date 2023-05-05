function calcIdade() {
  /**
   * 
  let dayValue = '04';
  let monthValue = '05';
  let yearValue = '1982';
  */
  let dayValue = document.getElementById("day").value;
  let monthValue = document.getElementById("month").value;
  let yearValue = document.getElementById("year").value;

  let elementResultYear = document.getElementById("years-result");
  let elementResulMonths = document.getElementById("months-result");
  let elementResulDay = document.getElementById("day-result");
 
  const [resultDays, resultMounth, resultYears] = calcularDiff(dayValue, monthValue, yearValue);

  console.log(resultYears);
  console.log(resultMounth);
  console.log(resultDays);
  
  elementResultYear.innerHTML = resultYears;
  elementResulMonths.innerHTML = resultMounth;
  elementResulDay.innerHTML  = resultDays;
}

function calcularDiff(day, month, year) {
  const dataNow = new Date();
  const dataCalc = new Date(`${month}/${day}/${year}`);
  const diffDataDays = Math.abs(
                              (dataNow.getTime() - dataCalc.getTime()) / (1000 * 60 * 60 * 24)
                              );
  const resultYears = Math.trunc(diffDataDays / 365);
  const resultMounth = Math.trunc((diffDataDays % 365) / 30);
  const resultDays = Math.trunc((diffDataDays % 365) % 30);
  return [resultDays, resultMounth, resultYears]
  
}
