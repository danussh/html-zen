interface Customerdetails{
    id:number;
    name:string;
    discount:number;
}
interface Accountdetails{
    balance:number;
}
interface Invoicedetails{
    amount:number;
}
class Customer{
    id:number;
    name:string;
    discount:number;

    constructor(custData:Customerdetails){
        this.id=custData.id;
        this.discount= custData.discount;
        this.name= custData.name;
    }

    getID():number{
        
        return this.id;
    }
    getName():string{
        return this.name;
    }
    getDiscount():number{
        return this.discount;
    }
    setDiscount(discount:number){
        this.discount=discount;
    }
    toString(id:number,name:string,discount:number):string{
        return `ID:${id}, Name:${name}, Discount:${discount}`
    }
}
class Invoice extends Customer{
    amount:number;
    constructor(custInfo:Customerdetails,invoiceInfo:Invoicedetails){
        super(custInfo)
        this.amount=invoiceInfo.amount;
    }
    getAmount():number{
        return this.amount
    }
    setAmount(amount:number){
        this.amount=amount;
    }
    getAmountAfterDiscount():number{
        console.log(`Discount given is: ${this.discount}`)
        let a=this.amount*this.discount
        console.log("The discounted amount:" +a)
        return (this.amount-a)
    }
    
    }

    class Account_cust extends Invoice{
        balance:number;
        customer:Customer
        constructor(custInfo:Customerdetails,invoiceInfo:Invoicedetails,acctInfo:Accountdetails){
            super(custInfo,invoiceInfo)
            this.balance=acctInfo.balance;
        }
        
        getBalance():number{
            return this.balance;
        }
        setBalance(balance:number){
        
            this.balance=balance;
        }
        deposit(amount:number){
        console.log(`Amount deposited is ${amount}`)
        this.balance+=amount;
        return this.balance ;
        }
        withdraw(amount:number){
            if(amount<this.balance){
                console.log(`Amount withawed is ${amount}`)
                this.balance-=amount;
                return this.balance;
            }else{
                console.log('insufficient balance')
            }
        }
        }
         
        let acct=new Account_cust(
            {id:123,
                name:"danussh",
                discount:0.5},
                {
                  amount:400  
                },
                 {
                    balance:6000
                }
        );
        document.write("Id:"+acct.getID());
        let br=document.createElement('br');
        document.body.append(br) 
        document.write("Name:"+acct.getName());
        let br1=document.createElement('br');
        document.body.append(br1) 
        document.write("Get balance"+acct.getBalance());
        let br3=document.createElement('br');
        document.body.append(br3) 
        document.write("Get discount"+acct.getDiscount());
        let br4=document.createElement('br');
        document.body.append(br4) 
        acct.setDiscount(0.2);
        acct.setBalance(1000);
        document.write("New Bal:"+acct.getBalance());
        let br5=document.createElement('br');
        document.body.append(br5) 
        document.write("Current bal after deposit:"+acct.deposit(1000));
        let br6=document.createElement('br');
        document.body.append(br6) 
        document.write("Current bal after withdrwal:"+acct.withdraw(500));
        acct.setAmount(1000);
        let br7=document.createElement('br');
        document.body.append(br7) 
        let c=acct.getAmountAfterDiscount();
        document.write('Amount after discount:'+c);
        let br9=document.createElement('br');
        document.body.append(br9) 
        document.write("Current bal after withdrwal:"+acct.withdraw(c));
        let br10=document.createElement('br');
        document.body.append(br10) 
        document.write("Current bal after deposit :"+acct.deposit(acct.getAmount()))      
        let br11=document.createElement('br');
        document.body.append(br11)  
