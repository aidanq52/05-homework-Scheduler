$('#date').text(moment().format('dddd[,] MMMM Do')).css('text-align','center').css('margin','0px')

var taskArray=["this is the task for 9am","this is the task for 10am","this is the task for 11am","this is the task for 12pm",
                "this is the task for 1pm", "this is the task for 2pm", "this is the task for 3pm", "this is the task for 4pm",
                "this is the task for 5pm"];

// $('#inputForm').attr("value", taskArray[0]);

// $('#submitForm').on('click', function(event){
//     event.preventDefault();

//     console.log(taskArray[0]);

//     var input = $('#inputForm').val().trim();

//     console.log(input);

//     taskArray[0] = input;

//     console.log(taskArray[0]);

//     localStorage.setItem('taskArray', JSON.stringify(taskArray));
//     JSON.parse(localStorage.getItem('taskArray'));

//     console.log(taskArray[0])

// });

// $('#inputForm2').attr("value", taskArray[1]);

// $('#submitForm2').on('click', function(event){
//     event.preventDefault();

//     console.log(taskArray[1]);

//     var input = $('#inputForm2').val().trim();

//     console.log(input);

//     taskArray[1] = input;

//     console.log(taskArray[1]);

//     localStorage.setItem('taskArray', JSON.stringify(taskArray));
//     JSON.parse(localStorage.getItem('taskArray'));

//     console.log(taskArray[1])

// });
i = 3;

$('.content-box').on('click', function(event){
    event.preventDefault()

    console.log(event.target.dataset.index);

    i = event.target.dataset.index

    console.log(taskArray[i]);

    updater();
})

function updater(i){

    console.log(taskArray[i]);

    console.log($('.entry').data-index[i].val().trim())

    // var input = $('.entry').data-index[i].val().trim();

    // console.log(input);

    // taskArray[0] = input;

    // console.log(taskArray[0]);

    // localStorage.setItem('taskArray', JSON.stringify(taskArray));
    // JSON.parse(localStorage.getItem('taskArray'));

    // console.log(taskArray[0])

};