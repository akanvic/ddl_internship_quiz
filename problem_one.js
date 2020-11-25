
function simpleArraySum(ar, n) {
    if(n<=0){
        return 0;
    }
    else{
        return simpleArraySum(ar,n-1) + ar[n-1]
    }
}

//console.log(simpleArraySum([1,2,3,4,10,11],6));
