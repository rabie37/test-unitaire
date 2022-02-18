var calculator = function(){
    var total,
    firstN,
    secondN;
    return {
        add: function(firstN, secondN) {
            total = firstN + secondN
            return total;
        },
        substract: function(firstN, secondN) {
            total = firstN - secondN
            return total;
        },
        divide: function(firstN, secondN) {
            total = firstN / secondN;
            return total;
        },
        multiply: function(firstN, secondN) {
            total = firstN * secondN;
            return total;
        },
        total: function(){
            return total;
        }
    }
}
module.exports = calculator();