function NumberToHours(number){
     
const hrs= String(Math.floor(number/60)).padStart(2,'0');
const min = String(number % 60).padStart(2,'0') ;

console.log(`${hrs}h:${min}m`);
}
NumberToHours(1);


// function secondsToHoursMinutes(seconds) {
//   const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
//   const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
//   const secs = String(seconds % 60).padStart(2, '0');

//   console.log(`${hrs}h:${mins}m:${secs}s`);
// }

// secondsToHoursMinutes(3661);    // 01h:01m:01s
