let pai = document.querySelector("#Estado-id")

function state() {
    let nomeState = ['escolha um Estado','AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG',
    'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC',
    'SE', 'SP', 'TO'];
    
    for(let i in nomeState){
        let option = document.createElement("option");
        pai.appendChild(option).innerText = nomeState[i];
        pai.appendChild(option).value = nomeState[i];
    }
}
state()
