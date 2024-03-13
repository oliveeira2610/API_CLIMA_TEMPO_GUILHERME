// Função para obter o nome do dia em extenso
function getDayName(day) {
    const daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return daysOfWeek[day];
  }

  // Função para atualizar o HTML com a data e o nome do dia
  function updateDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const dayName = getDayName(currentDate.getDay());
    const month = currentDate.getMonth() + 1; // Mês começa de 0, então somamos 1
    const year = currentDate.getFullYear();

    document.getElementById('dateDayname').textContent = dayName;
    document.getElementById('dateDay').textContent = `${day}/${month}/${year}`;
  }

  // Chamar a função de atualização quando a página for carregada
  window.onload = function() {
    updateDate();
  };        