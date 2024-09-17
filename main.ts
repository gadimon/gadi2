function sumNum(list: number[]) : number{
    let temp :number = 0; 
    for(let i = 0; i < list.length; i++){
        temp += list[i]
    }
    return temp
}

const arr: number[] = [1, 2, 3, 4, 5, 6]
console.log(sumNum(arr));
