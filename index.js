
function receivesAFunction(functionName) {
    functionName();
}

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return function(){

    }
}
receivesAFunction(function(){
    console.log("I'm anonymous");
})