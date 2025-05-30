// PassaporteDigitalApp.jsx
import React, { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const postos = [
  { id: "posto01", nome: "Diogolândia", local: "Pavilhão 1", descricao: "Embarca numa viagem mágica pelo reino da criatividade! Poderás explorar uma exposição cheia de cor, imaginação e talento dos pequenos grandes exploradores desde a Pré até ao 1.º Ciclo. Cada paragem é uma surpresa — desde castelos de papel até mares de ideias! Vem descobrir onde a imaginação dos nossos alunos ganha vida!" },
  { id: "posto02", nome: "Escola Fixa de Trânsito", local: "Campo junto ao Pavilhão 1", descricao: "Transforma-te num verdadeiro explorador da estrada! Onde as regras de segurança ganham vida entre curvas divertidas, sinais misteriosos e cruzamentos cheios de ação! Prepara-te para acelerar o conhecimento e travar só para aprender — sempre com SEGURANÇA e um sorriso na cara!" },
  { id: "posto03", nome: "Palco das Maravilhas", local: "Campo com coberto", descricao: "O coração da festa do Dia Diogo Cão, com apresentações únicas dos nossos artistas do Pré-Escolar, 1.º, 2.º e 3.º Ciclos: dança, teatro e performances criativas!" },
  { id: "posto04", nome: "Receção", local: "Entrada da escola", descricao: "Aqui começa a tua jornada — recebes todas as informações importantes e levantas a tua senha de almoço. Passaporte carimbado? Vamos embarcar!" },
  { id: "posto05", nome: "Zona Lazer Run & Circuito Ativo", local: "Campo 1", descricao: "No Lazer Run, testa a tua pontaria e concentração com desafios de mira. No Circuito Ativo, mexe o corpo com jogos que desafiam o equilíbrio e agilidade!" },
  { id: "posto06", nome: "APEAEEDC - Insufláveis", local: "Campo 2", descricao: "Com o apoio da associação de pais, os insufláveis garantem diversão sem fim — saltos, gargalhadas e energia a rodos!" },
  { id: "posto07", nome: "Ciência Viva", local: "CN4", descricao: "Explora o mundo da Físico-Química com experiências e descobertas onde a ciência ganha vida fora dos livros!" },
  { id: "posto08", nome: "Tec & Futuro", local: "Sala XXI", descricao: "Desde robótica a impressão 3D, mergulha na inovação e vê como a tecnologia transforma o nosso dia a dia!" },
  { id: "posto09", nome: "Educação Visual & Ateliers", local: "ET3, EV3 e Sala 12", descricao: "Dá asas à imaginação com pintura, construção, desenho e muita criatividade!" },
  { id: "posto10", nome: "Espaço das Línguas", local: "Sala 11", descricao: "Exposições criativas em várias línguas, feira do livro usado e jogos linguísticos divertidos!" },
  { id: "posto11", nome: "Matemática – 2.º Ciclo", local: "Sala 10", descricao: "Desafios com lógica, jogos e enigmas para mostrar que a matemática pode ser divertida!" },
  { id: "posto12", nome: "Matemática – 3.º Ciclo", local: "Tenda à frente do CN3", descricao: "Explora a lógica e estratégia com problemas intrigantes e jogos matemáticos!" },
  { id: "posto13", nome: "Ciências Naturais", local: "CN3", descricao: "Observa experiências, mexe em materiais e compreende o mundo que nos rodeia!" },
  { id: "posto14", nome: "Posto Erasmus", local: "Sala 13", descricao: "Conhece os projetos, culturas e aprendizagens trazidas pelo Erasmus+!" },
  { id: "posto15", nome: "Fico na Escola", local: "CN2", descricao: "Feira com criações dos alunos, crepes e atelier de croché. Um espaço de partilha e talento!" },
  { id: "posto16", nome: "Religião e Moral", local: "Sala 7", descricao: "Espaço para partilhar valores como o respeito, a empatia e a solidariedade através de dinâmicas e trabalhos criativos." },
  { id: "posto17", nome: "Cidadania", local: "Sala 8", descricao: "Projetos e atividades que promovem igualdade, inclusão e participação ativa na comunidade." },
  { id: "posto18", nome: "Ciências Sociais e Humanas", local: "Sala 9", descricao: "Viagem no tempo e no espaço com exposições sobre história, geografia e sociedade." },
  { id: "posto19", nome: "Centro de Apoio à Aprendizagem", local: "Sala 5", descricao: "Jogos sensoriais, tecnologias de apoio e Teatro Sensorial às 10h30. Inclui a mágica sala Snoezelen!" },
  { id: "posto20", nome: "Diogo Cão Space Center", local: "Recreio Pavilhão 2", descricao: "Às 15h15, lançamento de foguetes de água! Uma atividade divertida onde a física entra em órbita!" },
  { id: "posto21", nome: "Avenida da Alimentação", local: "Coberto e Barraquinhas", descricao: "Frutas, snacks e bebidas para reabastecer energias ao longo da tua exploração!" },
  { id: "posto22", nome: "Biblioteca", local: "Biblioteca", descricao: "Cantinho mágico com leituras partilhadas, contos animados e surpresas literárias!" },
  { id: "posto23", nome: "Refeitório", local: "Refeitório", descricao: "Paragem obrigatória para uma refeição saborosa e cheia de boa disposição!" },
  { id: "posto24", nome: "Palco Harmonia - Sottovoce", local: "Polivalente", descricao: "Docentes e não docentes celebram o Dia Diogo Cão com música e união!" }
];

function App() {
  return <div>Passaporte Digital App</div>;
}

export default App;
