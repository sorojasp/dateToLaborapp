let hollidaysChibchombia = require("colombia-holidays")
let dateFormat = require('date-format');/*
the files about this package is in : https://www.npmjs.com/package/dateformat
another package to handle date:
https://www.npmjs.com/package/date-and-time
*/ 

let DateDiff = require('date-diff');/* 
the files about this package is in : https://www.npmjs.com/package/date-diff
*/


let date1 = new Date(2015, 11, 1); // 2015-12-1
let date2 = new Date(2014, 0, 1); // 2014-01-1
let diff = new DateDiff(date1, date2);
console.log(` la diferencia en día entre ${date1} y ${date2}: ${diff.days()}`)

resultados=hollidaysChibchombia.getColombiaHolidaysByYear(2019)[6].holiday;

console.log(resultados.split("-"))

let objectDateToNumber=(date)=>{
    let year=parseInt(date.year)*10000;
    let month=parseInt(date.month)*100;
    let day=parseInt(date.day);
    return (year+month+day)
}



let getHolidays=(dateStart, dateFinish)=>{
    return new Promise((resolve,reject)=>{
   
        let Allhollydays=[];
        let yearFinish=parseInt(dateFinish.year);
        let yearStart=parseInt(dateStart.year);
        let year=yearStart;
        let numberDateStart=objectDateToNumber(dateStart);
        let numberDateFinish=objectDateToNumber(dateFinish);
       
        
        while (year<=yearFinish){
            let holiDaysYear=hollidaysChibchombia.getColombiaHolidaysByYear(year);
            let i=0;
            while(i<holiDaysYear.length){
                let dateToTest=(holiDaysYear[i].holiday).split("-");
                let yearToTest=parseInt(dateToTest[0])*10000;
                let monthToTest=parseInt(dateToTest[1])*100;
                let dayToTest=parseInt(dateToTest[2]);
                let numberDateToTest=yearToTest+  monthToTest+dayToTest;
                if((numberDateToTest>=numberDateStart)&&(numberDateToTest<=numberDateFinish)){
                    Allhollydays.push(numberDateToTest)
                }
          
                i++
            }
            
            
            
            year++;
        }
        
        if(Allhollydays==[]){
            reject("the month choosen for you not was hollidays");
        }else{
            resolve (Allhollydays);

        }
    }) 
}

let dateStart={
    year:1992,
    month:01,
    day:12
}//1992-1-12

let dateFinish={
    year:1996,
    month:05,
    day:12
}//1996-1-12

let hollydays=getHolidays(dateStart,dateFinish).then(result=>{
console.log(result+ " - resultado final de la función implementada")
}).catch(err=>{
    console.log(err)
})







