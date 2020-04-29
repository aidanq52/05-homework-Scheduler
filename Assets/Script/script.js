$('#date').text(moment().format('dddd[,] MMMM Do')).css('text-align','center').css('margin','0px')

var taskArray=["this is the task for 9am","this is the task for 10am","this is the task for 11am","this is the task for 12pm",
                "this is the task for 1pm", "this is the task for 2pm", "this is the task for 3pm", "this is the task for 4pm",
                "this is the task for 5pm"];

init()

$('.content-box').on('click', function(event){

    event.preventDefault()

    var i = '';

    console.log(event.target.dataset.index);

    i = event.target.dataset.index;

    console.log(taskArray[i]);

    input = $('.entry').eq(i).val();

    console.log(input);

    taskArray[i] = input;

    console.log(taskArray[i]);

    localStorage.setItem("taskArray", JSON.stringify(taskArray));

    var storedTaskArray = JSON.parse(localStorage.getItem("taskArray"));

    console.log(storedTaskArray);

});

function init(){
    var storedTaskArray = JSON.parse(localStorage.getItem("taskArray"));
    console.log(storedTaskArray);

    if(storedTaskArray !== null){
        taskArray = storedTaskArray;
    }

    console.log(taskArray);

    for(i=0;i<8;i++){

        task = taskArray[i];

        console.log(task);

        console.log($('.entry').eq[i].attr("value"))
        $('.entry').eq[i].attr("value", task);

    }

};


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

// localStorage.removeItem("taskArray")
// localStorage.removeItem('taskMatrix')

// .format('dddd[,] MMMM Do')
// console.log(moment().format());
// console.log(moment());
// console.log()