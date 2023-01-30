const myButton = document.querySelector('#valider');

myButton.addEventListener('click', () => {
    let nom = document.querySelector('#nom').value;
    let prenom = document.querySelector('#prenom').value;
    let result = document.querySelector('#result');
    result.textContent = `Bonjour ${prenom} ${nom}`
})

