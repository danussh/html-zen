var div=document.createElement('div')
div.id="div";
var para=document.createElement('p')
var br=document.createElement('br')
para.innerHTML="DISPLAY COUNT 1 TO 10 and PRINT HAPPY BIRTHDAY"
div.append(para,br);
document.body.append(div);
var count=0;
setTimeout(function(){
    count=count+1;
   document.body.append(count + "..");
    setTimeout(function(){
        count=count+1;
        document.body.append(count + "..");
        setTimeout(function(){
            count=count+1;
            document.body.append(count + "..");
            setTimeout(function(){
                count=count+1;
                document.body.append(count + "..");
                setTimeout(function(){
                    count=count+1;
                    document.body.append(count + "..");
                    setTimeout(()=>{
                        count=count+1;
                        document.body.append(count + "..");
                        setTimeout(()=>{
                            count=count+1;
                            document.body.append(count + "..");
                            setTimeout(()=>{
                                count=count+1;
                                document.body.append(count + "..");
                                setTimeout(()=>{
                                    count=count+1;
                                    document.body.append(count + "..");
                                    setTimeout(()=>{
                                        count=count+1;
                                        document.body.append(count + "..");
                                        setTimeout(()=>{
                                            document.body.append(`Happy Birthday`);
                                        })
                                    },2000)
                        
                                },2000)
                        
                           },2000)
                        
                       },2000)

                    },2000)

                },2000)
            },2000)
        },2000)
    },2000)
},1000)
