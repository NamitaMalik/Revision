/**
 * Created by namita on 6/10/16.
 */

var input = [
    {
        "item": "Dairy Milk",
        "quantity": 2
    },
    {
        "item": "5 Stars",
        "quantity": 5
    },
    {
        "item": "Milky Bar",
        "quantity": 7
    },
    {
        "item": "Dairy Milk",
        "quantity": 1
    },
    {
        "item": "Milky Bar",
        "quantity": 3
    }
];

function output(input){
    var obj = {};
    var newArray = [];
    input.forEach(function(value){
        if(obj[value.item]==undefined){
            obj[value.item]=value.quantity;
        }
        else{
            obj[value.item]=obj[value.item]+value.quantity
        }
    });
    for(var key in obj){
        newArray.push({"item":key,"quantity":obj[key]});
    }
    return newArray;
}

console.log(output(input));

var arr = [];

for(var i=0;i<=15;i++){
    arr.push((Math.random() * 15) + i/2);
}

console.log(arr);