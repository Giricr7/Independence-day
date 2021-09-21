
function counter(secs){
    timer.innerHTML=secs;
    setTimeout(()=>{
        timer.innerHTML= --secs;

        setTimeout(()=>{
            timer.innerHTML= --secs;
    
            setTimeout(()=>{
                timer.innerHTML= --secs;
        
                setTimeout(()=>{
                    timer.innerHTML= --secs;
            
                    setTimeout(()=>{
                        timer.innerHTML= --secs;
                
                        setTimeout(()=>{
                            timer.innerHTML= --secs;
                            setTimeout(()=>{
                                timer.innerHTML= --secs;
                        
                                setTimeout(()=>{
                                    timer.innerHTML= --secs;
                            
                                    setTimeout(()=>{
                                        timer.innerHTML= --secs;
                                
                                        setTimeout(()=>{
                                            timer.innerHTML= --secs;
                                    
                                            timer.innerHTML= 'Happy Independence Day';
                                           
                                    
                                        },1000)
                                
                                    },1000)
                            
                                },1000)
                                
                        
                            },1000)
                            
                    
                        },1000)
                
                    },1000)
                    
            
                },1000) 
        
            },1000)
    
        },1000)

    },1000)
}




var timer = document.getElementById('countdown');
counter(10);
