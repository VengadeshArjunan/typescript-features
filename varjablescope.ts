var global_num:number=12;
class Numbers{
    num_val:number=13;
    static sval = 10;
    Storenum():void{
        var local_num=14;
        console.log("local_num : "+local_num);
    }
}
console.log("global_num : "+global_num);
console.log("static num : "+Numbers.sval);
var obj1 = new Numbers();
console.log("class variable num : "+obj1.num_val);
obj1.Storenum();