

function ageCalculator() {
  

    //     var currentDate = new Date();
    //     var dob = new Date(document.getElementById("input").value);
    //     var diff = new Date(currentDate - dob.getTime());
    // console.log(diff);
     
        // Example usage
    const dob = document.getElementById("input").value; // YYYY-MM-DD format
    const age = calculateAge(dob);
    console.log(`Aapki age hai: ${age.years} saal, ${age.months} mahine, ${age.days} din`);
    console.log(`Aapki Birthday ane me: ${age.birthDaysDiffInDays} Din Baqi hen`);
    
    
      result = `Aapki Age Hai: ${age.years} saal, ${age.months} Mahine, ${age.days} Din Hai. <br><br>`
      result += `Aapki Birthday Ane Me: ${age.birthDaysDiffInDays} Din Baqi Hen.`
        
        document.getElementById("empty").innerHTML = result;
        document.getElementById("input").value = ""
    
    
    }
    
    // function calculateAge(dob = '2023-03-24') {
    function calculateAge(dob) {
        const birthDate = new Date(dob);
        const today = new Date();
        // const today = new Date('2024-05-11');
    
        // console.log(today);
        
        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();
        let diffInDays = '';
        const remaingDaysDate = new Date(today.getFullYear()+'-'+ (birthDate.getMonth() + 1)+"-"+ birthDate.getDate())
    
        if( remaingDaysDate.getMonth() > months && remaingDaysDate.getDate() > days){
            const diffInMs   = remaingDaysDate - today ;
            diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
    
    }
    else{
        const remaingDaysDate = new Date(today.getFullYear() + 1 +'-'+ (birthDate.getMonth() + 1)+"-"+ birthDate.getDate())
            const diffInMs   =   remaingDaysDate - today ;
            diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24))
        }
        
        // Adjust for negative days
        if (days < 0) {
            months--;
            // Calculate the last day of the previous month
            const lastMonthDate = new Date(today.getFullYear(), today.getMonth(), 0);
            
            days += lastMonthDate.getDate();
        }
     
        
        // Adjust for negative months
        if (months < 0) {        
            years--;
            months += 12;
        }
    
        return {
            years: years,
            months: months,
            days: days,
            birthDaysDiffInDays : diffInDays
        };
    }
    
    
    
    
    
      
    