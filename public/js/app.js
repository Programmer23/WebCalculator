function quadcalc() {
    var a = parseInt($('#a_value').val());
    var b = parseInt($('#b_value').val());
    var c = parseInt($('#c_value').val());
    var x1 = (-b + Math.pow(((b*b) - 4*a*c), 1/2)) / (2*a);
    var x2 = (-b - Math.pow(((b*b) - 4*a*c), 1/2)) / (2*a);
    if(x1 != x2) {
        $('#output').html("Zeroes are: " + x1 + " and " + x2);}
    else{
        $('#output').html("Zero is: " + x1);
    }
}

function pythagorean(){
    var side1 = parseInt($('#leg1').val());
    var side2 = parseInt($('#leg2').val());
    var c_squared = Math.pow(side1, 2) + Math.pow(side2, 2);
    var hypotenuse_length = Math.pow(c_squared,0.5);
    $('#result').html("Length of hypotenuse: " + hypotenuse_length);
}

function factorial(){
    var n = parseInt($('#factorialcalc').val());
    for (count = 1; count <=n; count++){
        result = count*count
    }
    $('#factorial_result').html("The result is: " + result);
}

$('#quad').click(quadcalc);

$('#hypotenuse').click(pythagorean);

$('#factorialcalc').click(factorial);