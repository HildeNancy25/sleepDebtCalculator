const getSleepHours = day =>{
    if (day === 'monday'){
        return 9;
    } else if (day === 'monday'){
        return 8;
    } else if (day === 'tuesday'){
        return 7;
    } else if (day === 'wednesday'){
        return 6;
    } else if (day === 'thursday'){
        return 9;
    } else if (day === 'friday'){
        return 5;
    } else if (day === 'saturday'){
        return 9;
    } else if (day === 'sunday'){
        return 10;
    } else {
        return 'invalid input';
    }
};
console.log("on Sunday you slept: " + getSleepHours('sunday') +' Hours.');

const getSleepActualHours = () =>{
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday')
    + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday')
    + getSleepHours('sunday');
    return getSleepActualHours;
};

const getIdealSleepHours = () => {
    const idealHours = 3;
    return idealHours * 7;
  };

console.log(getSleepActualHours());
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
    var actualSleepHours = getSleepActualHours();
    var idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours){
        console.log('you have the perfect amount of sleep');
    } else if (actualSleepHours > actualSleepHours){
        console.log("you had more sleep than needed");
    } else if (actualSleepHours < idealSleepHours){
        console.log('you should get more sleep');
    } else {
        console.log('your sleep debt is unknown.');
    }  
};
calculateSleepDebt();

  

