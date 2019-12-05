
function numberscurrentmonth() {
    var date = new Date();
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

function getTheDay(date) {
    switch (date) {
        case 0:
            return 'S';
            break;
        case 1:
            return 'M';
            break;
        case 2:
            return 'T';
            break;
        case 3:
            return 'W';
            break;
        case 4:
            return 'T';
            break;
        case 5:
            return 'F';
            break;
        case 6:
            return 'S';
            break;

    }
};
function getTheMonth(month) {
    switch (month) {
        case 0:
            return 'January'
            break;
        case 1:
            return 'February'
            break;
        case 0:
            return 'January'
            break;
        case 2:
            return 'March'
            break;
        case 3:
            return 'April'
            break;
        case 4:
            return 'May'
            break;
        case 5:
            return 'June'
            break;
        case 6:
            return 'July'
            break;
        case 7:
            return 'August'
            break;
        case 8:
            return 'September'
            break;
        case 9:
            return 'October'
            break;
        case 10:
            return 'November'
            break;
        case 11:
            return 'December'
            break;
    }
};

function addingTask(day, task, obj){
    // var toPush = {id: null, task: null};
    //     toPush.id = day;
    //     toPush.task = task;
    //     obj.push(toPush);
    //     obj.fill(toPush,day-1,day);
    obj[day]=task;
}

function returnTask(day, obj){
    return obj[day];
}

function changeTheme(id){
    $('.date .number.active').css('background', id);
    $('.date .number.used').css('borderColor', id);
    $('.contenedor').css('background',id);
}
$(document).ready(function () {

    // VARIABLES
    var daysgrid = $('.day-grid .date'), 
    themeBtn = $('.theme'), 
    numberCal =  $('.date-grid .date .number'),
    i = 0,
    j = 1,
    date = new Date(),
    calendar = new Array(30),
    // task = {days: calendar},
    task = {
        '1' : null,
        '2' : null,
        '3' : null,
        '4' : null,
        '5' : null,
        '6' : null,
        '7' : null,
        '8' : null,
        '9' : null,
        '10' : null,
        '11' : null,
        '12' : null,
        '13' : null,
        '14' : null,
        '15' : null,
        '16' : null,
        '17' : null,
        '18' : null,
        '19' : null,
        '20' : null,
        '21' : null,
        '22' : null,
        '23' : null,
        '24' : null,
        '25' : null,
        '26' : null,
        '27' : null,
        '28' : null,
        '29' : null,
        '30' : null,
        '31' : null,
    };

    // Cheking if the theme-selector if active
    if($('.theme-selector').hasClass('active')){
        themeBtn.css('display','none');
    }

    //Adding the date to the date-grid
    for(j = 0; j < numberscurrentmonth(); j++)
    { 
        var numbers = document.querySelectorAll('.date-grid .date .number');
        numbers[j].innerHTML = j+1;
    }
    $('.date-grid .date .number').each(function(){
        if($(this).text() == ""){

            $(this).parent().css('diplay','none');
        }
    })

    //Adding the current month
    $('.month').text(getTheMonth(date.getMonth()));

    //Adding the current year
    $('.year').text(date.getFullYear());

    //Add the days to the day-grid
    daysgrid.each(function () {
        var otherDate = new Date(date.getFullYear(), date.getMonth(), i + 1);
        $(this).text(getTheDay(otherDate.getDay()));
        i++;
    });

    //Open the text-area and activate the date
    numberCal.click(function () {
        if($(this).hasClass('used')){
            $('.selected-date .days').text(getTheMonth(date.getMonth()).slice(0,3));
            $('.selected-date .circle').text($(this).text());
            $('.show-task h3').text(returnTask($(this).text(), task));
            $('.show-day,.calendario').fadeToggle();
            $('.show-day,.calendario').toggleClass('active');
            themeBtn.toggle();
        }
        else{

        if (numberCal.not(this).hasClass('active')) {

            $('.text-area').removeClass('active');
            numberCal.removeClass('active');
        }
        $(this).toggleClass('active');
        $(this).parents('.row').find('.text-area').toggleClass('active');
        if($(this).parents('.row').find('.text-area').hasClass('active')){
            $(this).parents('.row').find('.text-area').find('form').delay(500).fadeIn();

        }
        else{
            $(this).parents('.row').find('.text-area').find('form').fadeOut();
        }     
    }
    });

    //Change the color
    $('.color-circle').click(function(){
        if($('.color-circle').not(this).hasClass('active')) {
            $('.color-circle').removeClass('active');
        }

        $(this).addClass('active');
        $('body').removeClass().addClass($(this).attr('id'));
    });

    // Clicking in config
    $('.conf').click(function(){
        if($('.calendario').hasClass('active')){
         alert('Buy the Pro Version to see more advantages');
        }
        else if($('.show-day').hasClass('active')){
            $('.show-day,.calendario').fadeToggle();
            $('.show-day,.calendario').toggleClass('active');
            themeBtn.toggle();
        }
        else{
            $('.theme-selector,.calendario').toggleClass('active');
            $('.theme-selector,.calendario').fadeToggle();
            
        themeBtn.toggle();
        }
       
    });

    //Going to the theme color picker
    themeBtn.click(function(){
        $('.theme-selector,.calendario').toggleClass('active');
        $('.theme-selector,.calendario').fadeToggle();
        themeBtn.toggle();
    });

    $('.send').click(function(event){
        event.preventDefault();
        var day = $('.date-grid .date .number.active').text();
        addingTask($('.date-grid .date .number.active').text(),$(this).prev().val(),task);
        // console.log(task[day]);
         $('.date-grid .date .number.active').removeClass('active').addClass('used');
         $(this).parents('.row').find('.text-area').find('form').fadeOut();
         $('.text-area').removeClass('active');
        
    });



});