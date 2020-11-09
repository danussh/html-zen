//reduce
let arr=[1,2],sum=0;
var reduce=(arr)=>{
    for(let i=0;i<arr.length;i++)
    {
        sum=sum + arr[i];
    }
    return sum;
}
console.log(reduce(arr));

//sum

var a=[1,2,3,4,5],tot=0
var s=(a)=>{
    for(var i=0;i<a.length;i++)
    {
          tot=tot + a[i];
    }
    return tot;
}
console.log(s(a))

//fillter

const vote=[{"name":"danussh","age":24},{"name":"akash","age":17}]

var fillter=(vote)=>{
    for(var i=0;i<vote.length;i++){
        if(vote[i].age>18)
        {
           return console.log(`${vote[i].name} can vote`)
        }
        else{
            console.log("cannot vote")
        }

    }
  
}
console.log(fillter(vote));

//find
let user=[{"name":"danussh","age":24},{"name":"akash","age":17}]
let find=(user)=>{
    for(var i=0;i<user.length;i++)
    {
        if(user[i].age>20)
        {
            return user[i].name;
        }
    }
   
}
console.log(find(user));

//chunk

let newarr = [1, 2, 3, 4, 5, 6, 7, 8]; 
var A=[];
var chunk=(newarr,x)=>{
for(var i=0;i<newarr.length;i=i+x){
A.push(newarr.slice(i,i+x))
}
return A;
}
console.log(chunk(newarr,4))
