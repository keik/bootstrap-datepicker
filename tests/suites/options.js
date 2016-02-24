test('endDate', function(){
    var input = $('<input />')
                .appendTo('#qunit-fixture')
                .val('2012-10-26')
                .datepicker({
                    format: 'yyyy-mm-dd',
                    endDate: new Date(2012, 9, 26)
                }),
        dp = input.data('datepicker'),
        picker = dp.picker,
        target;

    input.focus();
    target = picker.find('.datepicker-days tbody td:nth(25)');
    ok(!target.hasClass('disabled'), 'Previous day is enabled');
    target = picker.find('.datepicker-days tbody td:nth(26)');
    ok(!target.hasClass('disabled'), 'Specified date is enabled');
    target = picker.find('.datepicker-days tbody td:nth(27)');
    ok(target.hasClass('disabled'), 'Next day is disabled');
});

test('endDate: with invalid range date', function(){
    var input = $('<input />')
                .appendTo('#qunit-fixture')
                .val('2012-10-26')
                .datepicker({
                    format: 'yyyy-mm-dd',
                    endDate: '275760-09-01'
                }),
        dp = input.data('datepicker'),
        picker = dp.picker,
        target;

    input.focus();
    target = picker.find('.datepicker-days tbody td:nth(25)');
    ok(!target.hasClass('disabled'), 'Previous day is enabled');
    target = picker.find('.datepicker-days tbody td:nth(26)');
    ok(!target.hasClass('disabled'), 'Specified date is enabled');
    target = picker.find('.datepicker-days tbody td:nth(27)');
    ok(target.hasClass('disabled'), 'Next day is disabled');
});
