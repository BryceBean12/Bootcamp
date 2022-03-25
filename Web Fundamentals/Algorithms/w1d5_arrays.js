var fruit1 = "apples";
var fruit2 = "oranges";

fruit2 = fruit1;

console.log(fruit2 + " and " + fruit1);

var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + " and " + fruit1);

var start = 0;
var end = 12;

while (start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}



var arr = ["a", "b", "c", "d", "e"];
var x = arr.length - 1
var newarr = []
var y = 0
while (x >= 0) {
    newarr[y] = arr[x]
    x = x - 1
    y = y + 1
}
console.log(newarr)
//you need to return the reversed array

console.log(reverse(["a", "b", "c", "d", "e"]))