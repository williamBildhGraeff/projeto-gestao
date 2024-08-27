# projeto-gestao
Projeto de gestão
A ideia do projeto é criar algo que posso gerir, inicialmente, doações.
De primeira a ideia seria criar uma tela de cadastro, na qual em casos de calamidade pública, onde o município receberá doações, os responsáveis pelo controle de doações, pudessem cadastrar as pessoas e os items que elas, fazendo assim um controle melhor e mais ágil. Hoje em dia isso é feito de forma manual, formando imensas filas, perda de dados pois são feitas em tabelas excel e o estravio de alguns produtos, com a gestão também poderemos ao máximo, se usado de forma correta, evitar os desvios, muitas vezes feitos por quem mais deveria ajudar.
O que podemos cadastrar:
Pessoa {
  id,
  nome,
  cpf,
  telefone,
  endereço
}

Item {
  id,
  Descrição,
  Doador
}

PessoaItem {
  PessoaId,
  Item { 
    itemId,
    Quantidade
  }
}



