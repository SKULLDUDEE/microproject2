 const output = document.querySelector('.output');

 function handleButtonClick(event) {
     const buttonText = event.target.textContent;

     if (buttonText === 'RESET') {
         output.value = '0';
     } else if (buttonText === 'DEL') {
         
         output.value = output.value.slice(0, -1);
     } else if (buttonText === '=') {
       
        output.value = eval(output.value);
     } else {
        output.value += buttonText;
     }
 }
 const buttons = document.querySelectorAll('.buttons button');
 buttons.forEach(button => {
     button.addEventListener('click', handleButtonClick);
 });
 
 buttons.forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button.textContent);
    });
});


document.addEventListener('keydown', (event) => {
    const key = event.key;

    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace'];

    if (validKeys.includes(key)) {
        event.preventDefault(); 
        if (key === 'Enter') {
            handleButtonClick({target: {textContent: '='}}); 
        } else if (key === 'Backspace') {
            handleButtonClick({target: {textContent: 'DEL'}});
        } else {
            handleButtonClick({target: {textContent: key}}); 
        }
    }
});
