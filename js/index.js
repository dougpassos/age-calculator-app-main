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

  const dataNow = new Date();
  const dataCalc = new Date(`${monthValue}/${dayValue}/${yearValue}`);
  const diffDataDays = Math.abs(
                              (dataNow.getTime() - dataCalc.getTime()) / (1000 * 60 * 60 * 24)
                              );
  const resultYears = diffDataDays / 365;
  const resultMounth = (diffDataDays % 365) / 30
  const resultDays = (diffDataDays % 365) % 30

 
  console.log(resultYears);
  console.log(resultMounth);
  console.log(resultDays);
  
  elementResultYear.innerHTML = Math.trunc(resultYears);
  elementResulMonths.innerHTML = Math.trunc(resultMounth);
  elementResulDay.innerHTML  = Math.trunc(resultDays);
}

