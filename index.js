function digitalRoot(n) {
    // ...
    
    let num =  n.toString()
    
    let result = 0
    
    while(num.length > 1){
        result = 0
        for(let i = 0; i < num.length; i++){
        result += Number(num[i])
            
        }
        num = result.toString()
        

    }

    num = result
    
    console.log(result)
    return result
    
    
  }


  digitalRoot(16)
  digitalRoot(456)