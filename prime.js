let n = 23;
let count = 0;
for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
                count++;
        }

}
if (count == 1) {
        console.log('prime number')
} else {
        console.log('Not a prime number')
}