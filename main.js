window.onload = function(){
document.getElementById("buttonAdd").onclick = function(){

    var name = document.getElementById("taskName").value;
    var desc = document.getElementById("taskDesc").value;
    var diff = document.getElementById("taskDiff").value;
    var myType = document.getElementById("taskMyType").value;

    var container = document.createElement("div");

    var myTime = (function(){
        var d=new Date();
        var day=d.getDate();
        var month=d.getMonth() + 1;
        var year=d.getFullYear();
        return{
            myNow: (day + "." + month + "." + year)
        }
    })();

    var taskName = document.createElement("p");
    taskName.innerHTML = name;
    taskName.id="txtTaskName";
    var taskDesc = document.createElement("p");
    taskDesc.innerHTML = desc;
    taskDesc.id = "txtTaskDesc";
    var taskDiff = document.createElement("p");
    taskDiff.innerHTML = diff + "/10";
    taskDiff.id = "txtTaskDiff";
    var taskMyType = document.createElement("p");
    taskMyType.innerHTML = myType;
    taskMyType.id = "txtTaskMyType";
    var taskMyTime = document.createElement("p");
    taskMyTime.innerHTML = myTime.myNow;
    taskMyTime.id = "txtTaskMyType";

    var editTaskName = document.createElement("input");
    editTaskName.type = "text";
    editTaskName.innerHTML = name;
    editTaskName.style.display = "none";
    editTaskName.id="editTaskName";

    var editTaskDesc = document.createElement("textarea");
    editTaskDesc.innerHTML=desc;
    editTaskDesc.id="editTaskDesc";
    editTaskDesc.style.display = "none";
//----------------create select-------------------------
    var editTaskDiff = document.createElement("select");
    editTaskDiff.innerHTML = diff;
    editTaskDiff.id="editTaskDiff";
    editTaskDiff.style.display = "none";

    for(var i=1; i<=10; i++){
        var myValue = document.createElement("option");
        editTaskDiff.appendChild(myValue);
        myValue.value = i;
        myValue.innerHTML = i;
    }
//-------------------------------------------------------

    var buttonDel = createButton("Delete","buttonDel",function(){
        document.getElementById("addInformation").removeChild(container);
    });

    var buttonEdit = createButton("Edit","buttonEdit",function(){
        editMode();
    });

    var buttonCancel = createButton("Cancel", "buttonCancel", function(){
        taskName.style.display = "inline";
        buttonSave.style.display = "none";
        buttonCancel.style.display = "none";
        editTaskName.style.display = "none";
        buttonEdit.style.display = "inline";
        buttonDel.style.display = "inline";
        editTaskDesc.style.display = "none";
        editTaskDiff.style.display = "none";
        taskDesc.style.display = "block";
        taskDiff.style.display = "inline";
    });

    var buttonSave = createButton("Save","buttonSave",function(){
        taskName.innerHTML = editTaskName.value;
        taskName.style.display = "inline";
        buttonSave.style.display = "none";
        buttonCancel.style.display = "none";
        editTaskName.style.display = "none";
        buttonEdit.style.display = "inline";
        buttonDel.style.display = "inline";
        editTaskDesc.style.display = "none";
        editTaskDiff.style.display = "none";
        taskDesc.style.display = "block";
        taskDesc.innerHTML = editTaskDesc.value;
        taskDiff.innerHTML = editTaskDiff.value + "/10";
        taskDiff.style.display = "inline";
        taskMyTime.innerHTML = myTime.myNow;
    });

    var buttonNotFixed = createButton("Not fixed", "buttonNotFixed", function(){
        notFixedMode();
    });
    var buttonInProgress = createButton("In progress", "buttonInProgress", function(){
        inProgressMode();
    });
    var buttonReadyForTest = createButton("Ready for test", "buttonReadyForTest", function(){
        readyForTestMode();
    });
    var buttonWontFixed = createButton("Fixed, won't fix", "buttonWontFixed", function(){
        wontFixedMode();
    });
    var notFixedMode = function(){
        container.style.background = "rgba(223, 233, 29, 0.20)";
    };
    var inProgressMode = function(){
        container.style.background = "rgba(233, 61, 53, 0.20)";
    };
    var readyForTestMode = function(){
        container.style.background = "rgba(45, 189, 104, 0.31)";
    };
    var wontFixedMode = function(){
        container.style.background = "rgba(80, 46, 233, 0.20)";
    };

    // Режим редактирования
    var editMode = function(){
        editTaskName.value = taskName.innerHTML;
        editTaskName.type = "text";
        editTaskName.innerHTML = name;
        editTaskName.style.display = "inline";
        taskName.style.display = "none";

        buttonSave.style.display = "inline";
        buttonEdit.style.display = "none";

        buttonCancel.style.display = "inline";
        buttonDel.style.display = "none";

        editTaskDesc.value = taskDesc.innerHTML;
        editTaskDesc.type = "text";
        editTaskDesc.innerHTML = desc;
        editTaskDesc.style.display = "inline";
        taskDesc.style.display = "none";

        editTaskDiff.value = taskDiff;
        editTaskDiff.style.display = "inline";
        taskDiff.style.display = "none";
    };

    buttonSave.style.display = "none";
    buttonCancel.style.display = "none";

    container.appendChild(buttonDel);
    container.appendChild(buttonEdit);
    container.appendChild(buttonCancel);
    container.appendChild(buttonSave);
    container.appendChild(taskName);
    container.appendChild(editTaskName);
    container.appendChild(taskDesc);
    container.appendChild(editTaskDesc);
    container.appendChild(taskDiff);
    container.appendChild(editTaskDiff);
    container.appendChild(taskMyType);
    container.appendChild(taskMyTime);
    container.appendChild(buttonWontFixed);
    container.appendChild(buttonNotFixed);
    container.appendChild(buttonReadyForTest);
    container.appendChild(buttonInProgress);

    document.getElementById("addInformation").appendChild(container);

    if ((desc == "") || name == ""){
        alert("Заповність всі поля!");
        document.getElementById("addInformation").removeChild(container);
    }

    emptyTaskForm();

};
};

function createButton(name, id, onclick){
    var button = document.createElement("button");
    button.id = id;
    button.innerHTML=name;
    button.onclick = onclick;

    return button;
}

function emptyTaskForm(){
    document.getElementById("taskName").value="";
    document.getElementById("taskDesc").value="";
    document.getElementById("taskDiff").value="Easy";
}