function IsPrime() {
    var input = document.getElementById("num2");
    let x = input.value;
    let is_prime = true;
    var span2 = document.getElementById("result2");
    if (isNaN(x)) {
        span2.innerHTML = "Not a number, please re-enter the number";
    } else {
        if (x <= 1) is_prime = false;
        for (let j = 2; j * j <= x; j++) {
            if (x % j === 0) {
                is_prime = false;
                break;
            }
        }
        if (is_prime) {
            span2.innerHTML = "It is prime";
        } else {
            span2.innerHTML = "It is not prime";
        }
    }
}