function appendToResult(value) {
    const result = document.getElementById("result");
    result.value += value;
}

function clearResult() {
    document.getElementById("result").value = '';
}

function calculateResult() {
    const result = document.getElementById("result");
    const calculation = result.value;
    const name = document.getElementById("userName").value || "Desconocido";
    try {
        const output = eval(calculation);
        saveToHistory(calculation, output, name);
        result.value = output;
    } catch (error) {
        alert("Error en la operación");
        clearResult();
    }
}

function saveToHistory(calculation, output, name) {
    const historyList = document.getElementById('history');
    const timestamp = new Date().toLocaleString();
    const li = document.createElement('li');
    li.textContent = `${calculation} = ${output} (Realizado por: ${name} a las ${timestamp})`;
    historyList.appendChild(li);
}

function clearHistory() {
    document.getElementById('history').innerHTML = '';
}
