function factorial(n){
    let product = 1;
    while (n > 1){
        product*= n;
        n--;
    }
    return product;
}
factorial(4) //returns 24