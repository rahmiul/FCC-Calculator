function zero() {
    var calc = $('#calcid').val();
    var result = $('#resultid').val();
    if (calc === '0' || calc.indexOf('=') != -1) {
        $('#calcid').val($(this).val());
        $('#resultid').val($(this).val());
    } else if (['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(calc.substr(calc.length - 1)) != -1) {
        $('#calcid').val(calc + $(this).val());
        $('#resultid').val(result + $(this).val());
    } else if (['*', '/', '+', '-'].indexOf(calc.substr(calc.length - 1)) != -1) {
        $('#calcid').val(calc + $(this).val());
        $('#resultid').val($(this).val());
    }
}

function onetonine() {
    var calc = $('#calcid').val();
    var result = $('#resultid').val();
    if (calc === '0' || calc.indexOf('=') != -1) {
        $('#calcid').val($(this).val());
        $('#resultid').val($(this).val());
    } else if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].indexOf(calc.substr(calc.length - 1)) != -1) {
        $('#calcid').val(calc + $(this).val());
        $('#resultid').val(result + $(this).val());
    } else if (['*', '/', '+', '-'].indexOf(calc.substr(calc.length - 1) != -1)) {
        $('#calcid').val(calc + $(this).val());
        $('#resultid').val($(this).val());
    }
}

function decimal() {
    var calc = $('#calcid').val();
    var result = $('#resultid').val();
    if (calc.indexOf('=') != -1) {
        $('#calcid').val('0.');
        $('#resultid').val('0.');
    } else if (result.indexOf('.') != -1) {
        return;
    } else if (calc === '0' || ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].indexOf(calc.substr(calc.length - 1))) {
        $('#calcid').val(calc + $(this).val());
        $('#resultid').val(result + $(this).val());
    } else if (['*', '/', '+', '-'].indexOf(calc.substr(calc.length - 1)) != -1) {
        $('#calcid').val(calc + '0' + $(this).val());
        $('#resultid').val('0' + $(this).val());
    }
}

function operand() {
    var calc = $('#calcid').val();
    var result = $('#resultid').val();
    if (calc.indexOf('=') != -1) {
        $('#calcid').val(result + $(this).val());
        $('#resultid').val($(this).val());
    } else if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].indexOf(calc.substr(calc.length - 1)) != -1) {
        $('#calcid').val(calc + $(this).val());
        $('#resultid').val($(this).val());
    } else if (['*', '/', '+', '-'].indexOf(calc.substr(calc.length - 1))) {
        return;
    }
}

function clear() {
    $('#resultid').val('0');
    $('#calcid').val('0');
}

function evaluate() {
    var calc = $('#calcid').val();
    var result = $('#resultid').val();
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].indexOf(calc.substr(calc.length - 1))) {
        $('#calcid').val(calc + $(this).val() + Math.round(eval(calc) * 100) / 100);
        $('#resultid').val(Math.round(eval(calc) * 100) / 100);
    }
}

function clear() {
    $('#resultid').val('0');
    $('#calcid').val('0');
}

$(document).ready(function () {
    $('#clear').click(clear);
    $('#button0').click(onetonine);
    $('#button1').click(onetonine);
    $('#button2').click(onetonine);
    $('#button3').click(onetonine);
    $('#button4').click(onetonine);
    $('#button5').click(onetonine);
    $('#button6').click(onetonine);
    $('#button7').click(onetonine);
    $('#button8').click(onetonine);
    $('#button9').click(onetonine);
    $('#buttondiv').click(operand);
    $('#buttonmul').click(operand);
    $('#buttonmin').click(operand);
    $('#buttonplus').click(operand);
    $('#evaluate').click(evaluate);
    $('#decimal').click(decimal);
});