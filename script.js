// Seleção de elementos
const addButton = document.getElementById('add');
const deleteButton = document.getElementById('delete');
const refreshButton = document.getElementById('refresh');
const contactsList = document.getElementById('contacts-list');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');

// função onde aceita somente números no campo de telefone
phoneInput.addEventListener('input', () => {
    phoneInput.value = phoneInput.value.replace(/[^0-9]/g, '');
});


// Função para adicionar contato
addButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name === '' || phone === '') {
    alert('Por favor, preencha todos os campos!');
    return;
}

    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <span>${phone}</span>
    <span>${name}</span>
`;
contactsList.appendChild(listItem);

  // Limpar inputs
    nameInput.value = '';
    phoneInput.value = '';
});


// Função para deletar todos os contatos
deleteButton.addEventListener('click', () => {
    contactsList.innerHTML = '';
});

// Função para recarregar a página
refreshButton.addEventListener('click', () => {
    location.reload();
});
