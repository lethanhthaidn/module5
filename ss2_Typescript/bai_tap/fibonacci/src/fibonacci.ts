let i:number;
let fib:Array<number> = [0, 1];
let sum:number = 0;
for (i = 2; i <= 10; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
}
for (i = 0; i <= 10; i++) {
    sum += fib[i];
}
console.log("Tong 10 so fibonacci dau tien: ")
console.log(sum);

