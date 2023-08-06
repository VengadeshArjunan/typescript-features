function disp_details(id:number,name:string, mailid?:string){
    console.log(id);
    console.log(name);
    if(mailid!=undefined)
    console.log(mailid);
}
disp_details(1,'venki');
disp_details(2,'venki2','venki@yahoo.com');