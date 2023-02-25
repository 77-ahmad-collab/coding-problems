function timeConversion(s) {
    // Write your code here
  
    let [hourTobeSubtacted,newstr]=[0,s];
    if(s.includes("AM")){
    hourTobeSubtacted =  s.slice(0,2);

     if(+hourTobeSubtacted == 12) {
     newstr = s.replace(hourTobeSubtacted,"00");    
     }
     
    newstr =  newstr.replace("AM","")
     
    }
    if(s.includes("PM")){
    const pmFactor =12;
     hourTobeSubtacted =  s.slice(0,2);
      
      if(+hourTobeSubtacted != 12){
        const newVALUE = +hourTobeSubtacted + pmFactor;
        newstr = s.replace(hourTobeSubtacted,newVALUE)
          
      }
     newstr = newstr.replace("PM","")
     
    }

    return newstr

}

timeConversion("11:00:00PM")