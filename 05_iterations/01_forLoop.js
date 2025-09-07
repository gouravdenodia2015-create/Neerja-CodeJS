//  FOR LOOP DEMO

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(i == 5)
    {
        //console.log("---- i = 5 ---");
        
    }
    //console.log(i);
    
}

//  NESTED FOR LOOP

for (let i = 0; i <= 10; i++) 
{
    for (let j = 0; j <= 10; j++)    
    {
        //console.log(`${i} * ${j} = ${i*j}`);
        
    }
    //console.log("-----------");
    
}


// BREAK STATEMENT

for (i = 1; i <= 20; i++)
{
    if ( i == 5)
    {
        //console.log(`5 Detected`);
        break;
        
    }
    //console.log(`Value of I =  ${i}`);
    
}


// CONTINUE STATEMENT

for (i = 1; i <= 20; i++)
{
    if ( i == 5)
    {
        //console.log(`5 Detected`);
        continue;
        
    }
    //console.log(`Value of I =  ${i}`);
    
}