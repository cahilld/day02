/*
function multiplication_table(number) {
    for (var i=1; 1<=10; i++) {
        console.log(i*number);
    }
}

multiplication_table(6);
*/
/*
var x;
var y;
function max(x,y) {
    if (x>y) {console.log(x);}
        else if (x<y) {console.log(y);}
            else {console.log("x=y");}
}
max(2,2);
*/
var x;
var y;
var z;
function new_max(x,y,z) {
    if (x>y && x>z) {console.log(x);}
        else if (x<y && z<y) {console.log(y);}
        else if (z>x && z>y) {console.log(z);}
            else {console.log("either x y or z are equal");}
}
new_max(10,2,4);