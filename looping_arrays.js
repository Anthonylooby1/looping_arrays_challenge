//#1
function getLoop(arr) {
    
    var output = [];

    for(var i = 1; i <= arr.length; i++) {
        output.push(i);
    }
    console.log(output);
    return arr;

}
getLoop([1,2,3,4,5]);






// #3
function findBig(arr) {

    

    for(var i = 0; i <= arr.length; i++) {
        if(arr[i] > 5) {
             console.log(arr[i])
        } 
        
        else if(arr[i] < 5) {
            console.log("No Dice");
        }
    }
    return arr[i];
}

findBig([1,26,4,32,2,11])

