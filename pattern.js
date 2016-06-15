/*function firstPattern(n) {
    var str = "";
    for(var j=1; j<=n; j++){
    for (var i = 1; i <= n; i++) {
        str += '*';
        }
        str += '\n';
    }
    return str;
}

console.log(firstPattern(5));

function secondPattern(n){
    var str = "";
    for(var i=1;i<=n;i++){
        str += '*';
        for(var j=1;j<=i-1;j++){
            str += '*';
        }
        str += '\n';
    }
    return str;
}

console.log(secondPattern(5));*/

function thirdPattern(n){
    var str = "";
    for(var i=n-1;i<=n-1;i--){
        str += "*";
        /*for(var j=1;j<=n;j++){
            str+= '*';
        }*/
    }
    str += '\n';
    return str;
}

console.log(thirdPattern(5));