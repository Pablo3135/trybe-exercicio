function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
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
  function click(){
  let clickButton = document.querySelector("#btn-holiday");
  let mudandoDeCor = document.querySelectorAll(".holiday");
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'red';
    
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
    
click()