function disp_details(id:number,name:string, mailid?:string){//optional
    console.log(id);
    console.log(name);
    if(mailid!=undefined)
    console.log(mailid);
}
disp_details(1,'venki');
disp_details(2,'venki2','venki@yahoo.com');

function emp(emp_no:number,...roles:string[]){//rest
    return roles.join(",");
}
var emp_dtl:string = emp(123,"ab","cd","ef");
console.log(emp_dtl);

function calculate_discount(price?:number, rate:number=0.50){
    if(price != undefined){
        var discount = price * rate;
        console.log(discount);
    }
}
calculate_discount(1000);
calculate_discount(1000,0.30);