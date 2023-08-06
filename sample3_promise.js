let promiseObject = new Promise(function(resolve, reject){
    ///resolve('Promise resolved');
    reject('Promise rejected');
});

promiseObject.then(
    function successResponse(response){
        console.log(response);
    }
).then(
   function successResponseAlternatie(response) {
        console.log("Multiple then block handling success response");
    }
)
.catch(
    function handleError(response){
        console.log(response);
    }
).finally(
    function defaultMessage(response){
        console.log("From finally block");
    }
);