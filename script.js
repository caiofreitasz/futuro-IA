const perguntas = [
    {
        enunciado: "Imagine que estamos alguns anos no futuro. A Inteligência Artificial está presente no trabalho, nos estudos e no nosso dia a dia. Como você gostaria que ela fosse utilizada?",
        alternativas: [
            {
                texto: "Como uma ferramenta para aumentar a criatividade e ajudar as pessoas.",
                afirmacao: "Você imagina um futuro em que a IA amplia as capacidades humanas, ajudando pessoas a criar, aprender, resolver problemas e desenvolver novas ideias."
            },
            {
                texto: "Como uma tecnologia capaz de realizar a maior parte das tarefas sozinha.",
                afirmacao: "Você imagina um futuro com alto nível de automação, no qual a IA assume muitas tarefas e transforma profundamente a maneira como as pessoas trabalham e vivem."
            }
        ]
    },

    {
        enunciado: "No futuro, empresas poderão utilizar sistemas de IA para realizar diversas atividades. O que você considera mais importante?",
        alternativas: [
            {
                texto: "Usar a IA para automatizar tarefas repetitivas e deixar as pessoas focadas em atividades mais criativas.",
                afirmacao: "Você acredita que a automação pode liberar tempo para que as pessoas se concentrem em criatividade, estratégia, relacionamento e resolução de problemas."
            },
            {
                texto: "Manter pessoas supervisionando e tomando as decisões importantes.",
                afirmacao: "Você defende um futuro em que a IA auxilia o trabalho, mas as decisões importantes continuam sob responsabilidade humana."
            }
        ]
    },

    {
        enunciado: "Imagine que uma IA consiga analisar uma grande quantidade de informações em poucos segundos. Como essa capacidade poderia transformar a educação?",
        alternativas: [
            {
                texto: "Criando experiências de aprendizagem personalizadas para cada estudante.",
                afirmacao: "Você imagina uma educação mais personalizada, na qual a IA ajuda a adaptar explicações, exercícios e conteúdos ao ritmo e às necessidades de cada estudante."
            },
            {
                texto: "Permitindo que estudantes utilizem IA para encontrar respostas rapidamente.",
                afirmacao: "Você vê a IA como uma ferramenta de pesquisa e apoio aos estudos. Porém, aprender continuará dependendo de pensamento crítico e compreensão, e não apenas de obter respostas."
            }
        ]
    },

    {
        enunciado: "Com o avanço da IA, algumas profissões poderão mudar e novas profissões poderão surgir. Como você enxerga essa transformação?",
        alternativas: [
            {
                texto: "As pessoas precisarão aprender novas habilidades e trabalhar junto com a IA.",
                afirmacao: "Você acredita que o futuro do trabalho será marcado pela colaboração entre pessoas e sistemas de IA, tornando a aprendizagem contínua cada vez mais importante."
            },
            {
                texto: "A IA poderá substituir muitas tarefas realizadas atualmente por pessoas.",
                afirmacao: "Você reconhece que a automação pode transformar diversas profissões. Essa mudança também pode criar novas funções e exigir que as pessoas se preparem para novas formas de trabalho."
            }
        ]
    },

    {
        enunciado: "Agora pense em um futuro em que a IA seja capaz de tomar decisões cada vez mais complexas. O que deveria acontecer?",
        alternativas: [
            {
                texto: "A IA deve seguir regras e ser supervisionada por pessoas.",
                afirmacao: "Você acredita que sistemas avançados de IA precisam de limites, supervisão e responsabilidade humana para reduzir riscos e garantir que suas decisões sejam utilizadas de maneira segura."
            },
            {
                texto: "A IA deve ter liberdade para tomar decisões sempre que for mais eficiente.",
                afirmacao: "Você valoriza a eficiência da tecnologia, mas esse cenário também exige atenção aos riscos, aos erros e às consequências de deixar decisões importantes exclusivamente para sistemas automatizados."
            }
        ]
    },

    {
        enunciado: "Pensando no futuro da humanidade, qual cenário você gostaria de construir com a Inteligência Artificial?",
        alternativas: [
            {
                texto: "Um futuro em que humanos e IA trabalhem juntos para resolver grandes problemas.",
                afirmacao: "Você escolheu um futuro colaborativo, no qual a IA amplia as possibilidades humanas enquanto as pessoas continuam responsáveis por escolhas, valores e decisões."
            },
            {
                texto: "Um futuro em que a tecnologia assuma cada vez mais responsabilidades.",
                afirmacao: "Você imagina uma sociedade altamente automatizada, na qual a IA desempenha um papel central. Esse futuro exigirá cuidado com autonomia, segurança, ética e responsabilidade."
            }
        ]
    }
];


const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixaderesultados");
const textoResultado = document.querySelector(".texto-resultado");


let perguntaAtual = 0;

let resultados = [];


function mostraPergunta() {

    const pergunta = perguntas[perguntaAtual];

    caixaPerguntas.innerHTML = `
        <p>${pergunta.enunciado}</p>
    `;

    caixaAlternativas.innerHTML = "";

    pergunta.alternativas.forEach((alternativa) => {

        const botao = document.createElement("button");

        botao.classList.add("botao-alternativa");

        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {

            resultados.push(alternativa.afirmacao);

            proximaPergunta();

        });

        caixaAlternativas.appendChild(botao);

    });
}


function proximaPergunta() {

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        mostraPergunta();

    } else {

        mostraResultado();

    }
}


function mostraResultado() {

    caixaPerguntas.style.display = "none";

    caixaAlternativas.style.display = "none";

    caixaResultados.style.display = "block";


    let resultadoFinal = `
        <strong>O futuro está nas suas escolhas!</strong>

        <p>
            Durante esta atividade, você imaginou diferentes possibilidades
            para o futuro da Inteligência Artificial.
        </p>
    `;


    resultados.forEach((resultado, index) => {

        resultadoFinal += `
            <p>
                <strong>${index + 1}.</strong>
                ${resultado}
            </p>
        `;

    });


    resultadoFinal += `
        <p>
            A Inteligência Artificial pode transformar profundamente
            a maneira como trabalhamos, estudamos, criamos e nos
            relacionamos com a tecnologia.
        </p>

        <p>
            Mas o futuro da IA não depende apenas da tecnologia.
            Ele também depende das escolhas que fazemos sobre como
            desenvolver e utilizar essas ferramentas.
        </p>

        <p>
            <strong>
                A IA pode ser poderosa, mas as pessoas continuam
                sendo responsáveis pelas escolhas.
            </strong>
        </p>

        <p>
            Um futuro positivo depende de inovação, educação,
            criatividade, ética, segurança e pensamento crítico.
            Mais do que perguntar o que a IA será capaz de fazer,
            precisamos perguntar: o que queremos fazer com ela?
        </p>
    `;


    textoResultado.innerHTML = resultadoFinal;
}


mostraPergunta();
