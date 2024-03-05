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
console.log(getSleepHours('sunday') +' Hours.');

const getSleepActuelHours = () =>{
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday')
    + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday')
    + getSleepHours('sunday');
    return 
};

