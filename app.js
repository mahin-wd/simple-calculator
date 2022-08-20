
document.getElementById('all-buttons').addEventListener('click', function(event){
    const number = event.target.innerText;
    const input = document.getElementById('calc-screen');
    const previousNumber = input.value;
    const newNumber = previousNumber + number;

    if(isNaN(number)){
        if(number === 'C'){
            input.value = '';
        }
        else if(number === '<' ){
            const newString = previousNumber + '';
            const sliceString = newString.split('');
            const popString = sliceString.pop();
            const delNumber = sliceString.join('');

            input.value = delNumber;
        }
    }
    else{
        input.value = newNumber;
    }
    return newNumber
})
