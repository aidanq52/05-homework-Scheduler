$('#date').text(moment().format('dddd[,] MMMM Do')).css('text-align','center').css('margin','0px')

var taskArray=["this is the task for 9am","this is the task for 10am","this is the task for 11am","this is the task for 12pm",
                "this is the task for 1pm", "this is the task for 2pm", "this is the task for 3pm", "this is the task for 4pm",
                "this is the task for 5pm"];

init()


//adding content from the text boxes to local storage
$('.save').on('click', function(event){

    event.preventDefault()

    var i = '';

    // console.log(event.target.dataset.index);

    i = event.target.dataset.index;

    // console.log(taskArray[i]);

    input = $('.entry').eq(i).val();

    // console.log(input);

    taskArray[i] = input;

    // console.log(taskArray[i]);

    localStorage.setItem("taskArray", JSON.stringify(taskArray));

    // var storedTaskArray = JSON.parse(localStorage.getItem("taskArray"));

    // console.log(storedTaskArray);

});


//writing the initiation function to pull things from local storage
function init(){
    var storedTaskArray = JSON.parse(localStorage.getItem("taskArray"));
    // console.log(storedTaskArray);

    if(storedTaskArray !== null){
        taskArray = storedTaskArray;
    }

    // console.log(taskArray);

    for(i=0;i<9;i++){

        var task = taskArray[i];

        // console.log(task);

        $('.entry').eq(i).val(task);

    }

};

//trying to figure out how to use moment API
// .format('dddd[,] MMMM Do')
// console.log(moment().format());
// console.log(moment());
// console.log()


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


