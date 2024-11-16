const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


function displaychapter() {

    if (input.value != '') {
        /*Get the value from the input*/
        var chapter = input.value;
        /*alert(chapter);*/

        /*add value to the list*/
        const li = document.createElement('li');
        li.textContent = chapter;


        /*add delete button*/
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        li.append(deleteButton);

        /*Add on the li element */
        list.append(li);
        input.focus();

        /*Clean input */
        input.value = "";

        /*Remove li element with a button*/
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });


    } else {
        alert("The field cannot be blank!")
        input.focus();
    }

}


button.addEventListener('click', displaychapter);