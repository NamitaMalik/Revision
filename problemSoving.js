/**
 * Created by namita on 5/19/16.
 */


function getMaxProfit(arr){

    var min = arr[0];
    var profit = 0;
    for(var i=1;i<arr.length;i++){
        if(min>arr[i]) {
            min = arr[i];
        }
                else if((arr[i] - min) > profit) {
                profit = arr[i] - min;
            }
        }
    return profit;
    }



var stock = [5,3,10,1,2];

console.log(getMaxProfit(stock));