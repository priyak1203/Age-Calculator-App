const alert = {
    msg : "",
    type: "",
}

// Check for leap year
const isLeapYear = (year) => {
    return (year % 100 === 0 ? year % 400 === 0 : year% 4 === 0 )
}



// To check the if the date is valid 
const checkValidDate = (day, month, year) => {

    // Check Max days of Feb
    if (month === 2 && day > 29) {
        alert.msg = 'Feb cannot have more than 29 days';
        return false
    }

    // Check for the leap year
    if (month === 2 && day === 29) {
        if (!isLeapYear(year)) {
            alert.msg = `${year} is not a leap year`;
            return false
            } 
              
        }
        
    
    // Check Max days for Apr, Jun , Sep and Nov 
    if (month === 4 || month === 6 || month === 9 || month === 11 ) {
        if (day > 30) {
            alert.msg = 'This month cannot have more than 30 days';
            return false
        }
    }

    return true;
}


const ageCalculator = (date) => {
    // Check if the date is valid 
    const dateArray = date.split("-");
    const dateDay = Number(dateArray[1]);
    const dateMonth = Number(dateArray[0]);
    const dateYear = Number(dateArray[2])
    if(!checkValidDate(dateDay, dateMonth, dateYear)) {
       alert.type ='danger';
        return alert;
    }

    // Generate date from given date of birth
    const dateOfBirth = new Date(date)

    // Extract year, month and date from birthdate
    const dobDay = dateOfBirth.getDate();
    const dobMonth = dateOfBirth.getMonth();
    const dobYear = dateOfBirth.getFullYear();

    // Generater Present Date
    const presentDate = new Date();

    if (dateOfBirth > presentDate) {
        alert.msg = 'Date is in the future';
        alert.type = 'danger'
        return alert;
    }

    // extract year , month and date from present date
    const presentDay = presentDate.getDate();
    const presentMonth = presentDate.getMonth();
    const presentYear = presentDate.getFullYear();

    
    // Calculate age of the person in  years, months and date
    let ageYear = presentYear - dobYear;
    let ageMonth = presentMonth - dobMonth;
    let ageDay = presentDay - dobDay;
    
 
    // Case where Birth month is greater than present month
    if (ageMonth < 0) {
        ageYear--;
        ageMonth = 12 + ageMonth;
    }

    // Case where Birth day is greater than present day
    if (ageDay < 0) {
       ageMonth--;
        const noOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let prevMonthDays = presentMonth === 0 ? noOfDays[11] : noOfDays[presentMonth-1];
        if (presentMonth === 2 ) {
            if(isLeapYear(presentYear)) {
                prevMonthDays++;
            }
        }
        ageDay = prevMonthDays + ageDay;
    
       if (ageMonth < 0) {
           ageMonth = 11;
           ageYear--;
       }
    }

    const message = `You are ${ageYear} ${ageYear > 1 ? 'years' : 'year'} ${ageMonth} ${ageMonth > 1 ? 'months' : 'month'} ${ageDay} ${ageDay > 1 ? 'days' : 'day'} old! `
    alert.msg = message;
    alert.type = 'success'
    return alert;
    
}

export default ageCalculator;