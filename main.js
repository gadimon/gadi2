function sumNum(list) {
    var temp = 0;
    for (var i = 0; i < list.length; i++) {
        temp += list[i];
    }
    return temp;
}
var arr = [1, 2, 3, 4, 5, 6];
console.log(sumNum(arr));
