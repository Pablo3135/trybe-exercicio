function createDaysOfTheWeek() {
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
    
  // exercicio 1

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  function day(){
  
  const days = document.querySelector("#days");
    
  for( let i in dezDaysList){
        let dayWeeks = dezDaysList[i];
        let dayItem = document.createElement("li")

        if(dayWeeks === 24 | dayWeeks === 31){
            dayItem.className = "holiday day"
            dayItem.innerHTML = dayWeeks
            days.appendChild(dayItem)
        }else if(dayWeeks === 4 | dayWeeks === 11){
            dayItem.className = "friday day"
            dayItem.innerHTML = dayWeeks
            days.appendChild(dayItem)
        }else if(dayWeeks === 18){
            dayItem.className = "friday day"
            dayItem.innerHTML = dayWeeks
            days.appendChild(dayItem)
        }else if(dayWeeks === 25){
            dayItem.className = "friday holiday day"
            dayItem.innerHTML = dayWeeks
            days.appendChild(dayItem)
        }else {
            dayItem.className = "day"
            dayItem.innerHTML = dayWeeks
            days.appendChild(dayItem)
        }
    }
  }
  day()

//exercicio 2

  function createHoliday(buttonholiday){
      let btnHoliday = document.querySelector(".buttons-container")
      let newButton = document.createElement("button")
      let newButtonId = "btn-holiday"

      newButton.innerHTML = buttonholiday
      btnHoliday.appendChild(newButton)
      newButton.id = newButtonId
  }

  createHoliday("feriados")

  // Exercicio 3
  function click(backgroundColor, setNewColor){
  let clickButton = document.querySelector("#btn-holiday");
  let mudandoDeCor = document.querySelectorAll(".holiday");
  
    clickButton.addEventListener("click", function(){
        for(let i in mudandoDeCor){
            if(mudandoDeCor[i].style.backgroundColor === setNewColor){
                mudandoDeCor[i].style.background = backgroundColor
            } else {
                mudandoDeCor[i].style.background = setNewColor;
            }
        }
    })
  };
    
click('rgb(238,238,238)', 'red')

//Exercicio 4 

function friday(friday){
    let buttonContainer= document.querySelector(".buttons-container");
    let frydayButton = document.createElement("button");
    let fridayId = "btn-friday";
    
    frydayButton.innerHTML = friday
    frydayButton.id = fridayId
    buttonContainer.appendChild(frydayButton)
};

friday("Sexta-feira")

// exercicio 5

function fryday( dezFriday, newFriday){
    let buttonContainer = document.querySelector("#btn-friday") 
    let clickButton = document.querySelectorAll(".friday")
     
    buttonContainer.addEventListener("click", function() {
        for(let i in clickButton){
            if(clickButton[i].innerHTML !== newFriday){
                    clickButton[i].innerHTML = newFriday
            } else {
                clickButton[i].innerHTML = dezFriday[i]
            }
        }
    })
}

fryday([4, 11, 18, 25], "Sextou",)

function dayMouseOver(){
    let day = document.querySelector("#days")
    
    day.addEventListener("mouseover", function(event){
        event.target.style.fontSize = "30px"
        event.target.style.fontWeigth = "600"
    })
}

dayMouseOver()

function dayMouseOut(){
    let day = document.querySelector("#days")
    
    day.addEventListener("mouseout", function(event){
        event.target.style.fontSize = "20px"
        event.target.style.fontWeigth = "200"
    })
}
dayMouseOut()

function texto(inputText) {
    let text = document.querySelector(".my-tasks")
    let textName = document.createElement("span")
    textName.innerHTML = inputText
    text.appendChild(textName)
}
texto("Projeto")

function cor(color) {
    let pai = document.querySelector(".my-tasks")
    let filho = document.createElement("div")
    
    filho.className = "task"
    filho.style.background = color
    pai.appendChild(filho)
}

cor("green")

function setTasksClass(){
    let selectedTask= document.getElementsByClassName("task selected");
    let myTasks = document.querySelector(".task");
    
    myTasks.addEventListener("click", function(event) {
        if(selectedTask.length === 0) {
            event.target.className = "task selected";
        } else {
            event.target.className = "task";
        }
    });
};
setTasksClass();

function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();
