let hollidaysChibchombia = require("colombia-holidays")
let dateFormat = require('date-format');/*
the files about this package is in : https://www.npmjs.com/package/dateformat
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



let getHolidays=(dateStart, dateFinish)=>{
   return new Promise ((resolve,reject)=>{
        let Allhollydays=[];
        let yearFinish=dateFinish.year;
        let monthFinish=dateFinish.month;
        let dayFinish=dateFinish.day;
        let year=dateStart.year; month=dateStart.month; day=dateStart.month;
        
        while (year<yearFinish){
            let holiDaysYear=hollidaysChibchombia.getColombiaHolidaysByYear(year);
            let i=0;
            while(month<)
            
            
            
            
            year++



        }
        


       

        if(Allhollydays==[]){
            reject("the month choosen for you not was hollidays");
        }else{
            resolve (Allhollydays);

        }
        
    })
}

/*
let hollydayOfMOnth=getHolidays().then(result=>{
console.log(result)
}).catch(err=>{
    console.log(err)
})

*/