$(document).ready(function(){
    
    $('.botao').click(function(){
        var FIRST_PLACE_PRIZE = $('.first').val();
        var SECOND_PLACE_PRIZE = $('.second').val();
        var CHIP_TOTAL = $('.chip').val();
        var STACKS = [$('.sone').val(), $('.stwo').val(), $('.stree').val(), $('.sfour').val()];

        var p1st = STACKS.map(function (stack) {
            return stack / CHIP_TOTAL;
        });

        var p2nd = STACKS.map(function (stack, i) {
            return STACKS.reduce(function (prev, current, j) {
                if (i === j) {
                    return prev;
                }
                var sum = p1st[j] * stack / (CHIP_TOTAL - current);
                return prev + sum;
            }, 0);
        });

        var evs = [];
        for (var i = 0; i < STACKS.length; i++) {
            var expectedVal1st = FIRST_PLACE_PRIZE * p1st[i];
            var expectedVal2nd = SECOND_PLACE_PRIZE * p2nd[i];
            evs.push((expectedVal1st + expectedVal2nd).toPrecision(
                FIRST_PLACE_PRIZE.toString().length
            ));
        }

        console.log(evs); 
        $('.content').html(function(){
            return '<p class="one">'+evs[0] + '</p>' + '<p class="one">' + evs[1] + '</p>' + '<p class="one">' + evs[2] + '</p>' + '<p class="one">' + evs[3] + '</p>';
        });
    });
});