function judgement() {
    var input = document.getElementById("num");
    var n = input.value;
    var span = document.getElementById("result1");
    if (isNaN(n)) {
        span.innerHTML = "Not a number, please re-enter the number";
    } else {
        if (n % 2 === 0)
            span.innerHTML = "It is an even number";
        else span.innerHTML = "It is odd";
    }
}