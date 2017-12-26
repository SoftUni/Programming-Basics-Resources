function eurConverter() {
    let bgn = document.getElementById("bgn").value;
    document.getElementById("euro").value = (bgn * 1.95583 ).toFixed(2);
    // Integer arithmetic in floating point is exact, so decimal representation errors can be avoided 
    //by scaling. This is why we first multiply BGN currency by 100, convert it to USD cents and finally 
    //divide the cents by 100 to get USD dollars.
}