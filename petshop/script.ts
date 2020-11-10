interface Petdetails{
    type:string;
    count:number;
   
}
// class avilable
class Petavailable {
    pets:Array<Petdetails>=[]; //empty array
   // Array<elemType>:
   constructor(availablePets:Array<Petdetails>){
    this.pets.push(...availablePets)
   }
   petdetails(){
       return this.pets
   }
   
   checkRequests(reqarray: Array<Petdetails>){
       for(var i=0;i<reqarray.length;i++)
       {
        let available;
         for(var j=0;j<this.pets.length;j++)
         {
            if (reqarray[i].type === this.pets[j].type)
             {
                available = this.pets[j].count;
                break;
            }

         }
         if (!available) {
            console.log(`${reqarray[i].type} is not available`);
        } else {
            console.log(
                `${reqarray[i].type} is available and the available count is ${available}`
            );
        }
       }
    }
}

let display =new Petavailable([
    {"type":"Dogs","count":3},
    {"type":"Cats","count":4},
    {"type":"loveBirds","count":6},
    {"type":"rabbits","count":2}
])


//request available
class Petrequest {
    request:Array<Petdetails>=[]; //empty array
   // Array<elemType>:
   constructor(req:Array<Petdetails>){
    this.request.push(...req)
    }
    requestdetails(){
        return this.request;
    }
    checkAvailability(){
         display.checkRequests(this.request)               
    }
       
}
let Req =new Petrequest([ 
    {"type":"chickens","count":12},
    {"type":"Dogs","count":2},
    {"type":"Cats","count":3}
])
Req.checkAvailability();
console.log("Details")

console.log("request details ") 
var a=Req.requestdetails()
console.log(a)

console.log("available details")
var b=display.petdetails()
console.log(b)
