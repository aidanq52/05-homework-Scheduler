$('#date').text(moment().format('dddd[,] MMMM Do')).css('text-align','center').css('margin','0px')

var taskMatrix =   {entry1:    {hour: 9,
                                task: 'this is the task for 9'},
                    entry2:    {hour: 10,
                                task: "this is the task for 10"}
                
}

console.log(taskMatrix.entry1.task)

savedTask=[];

$('#submitForm').on('click', function(event){
    event.preventDefault();

    var input = $('#inputForm').val().trim();

    console.log(input);

    taskMatrix.entry1.task.replace('this is the task for 9', input);

    console.log(taskMatrix.entry1.task);

    localStorage.setItem('savedTask', JSON.stringify(savedTask));

    $('#inputForm').text(JSON.parse(localStorage.getItem('savedTask')));

    console.log(text(JSON.parse(localStorage.getItem('savedTask'))));

});
