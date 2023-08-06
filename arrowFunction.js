let book = "my experience in life";
let check = (book == "my experience in life")?
            () => console.log("auth is me"):
            () => console.log("am not auth");
check();

let result = (n1,n2)=>{
    let total = n1+n2;
    return total;
}

let calcvalue = result(12,15);
console.log(calcvalue);