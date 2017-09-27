Calculator = function() {
    this.value = 0;
};

Calculator.prototype.add = function(num) {
    if(typeof(num) == "number") {
        if(this.value == 0) {
            this.value = num;
            } else {
                this.value += num;
            }
            } else { 
                alert("needs to be a number");
    }
};

Calculator.prototype.mult = function(num) {
    if(typeof(num) == "number") {
        if(this.value == 0) {
            this.value = num;
            } else {
                this.value *= num;
            }
            } else { 
                alert("needs to be a number");
    }
};

Calculator.prototype.sub = function(num) {
    if(typeof(num) == "number") {
        if(this.value == 0) {
            this.value = num;
            } else {
                this.value -= num;
            }
            } else { 
                alert("needs to be a number");
    }
};
Calculator.prototype.divd = function(num) {
    if(typeof(num) == "number") {
        if(this.value == 0) {
            this.value = num;
            } else {
                this.value /= num;
            }
            } else { 
                alert("needs to be a number");
    }
};