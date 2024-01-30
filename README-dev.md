# Dataverse

## Índice

* [1. Preâmbulo](#1-preâmbulo)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Protótipo](#3-Protótipo)
* [4. Funcionalidades](#3-Funcionalidades)
* [5. Historia do usuário](#4-Historia-do-usuário)
* [6. Critérios de aceitação mínimos do projeto](#6-Critérios-de-aceitação-mínimos-do-projeto)
* [6. Objetivos técnicas](#5-considerações-técnicas)
* [7. Objetivos de aprendizagem](#8-objetivos-de-aprendizagem)


***

## 1. Preâmbulo

Projeto desenvolvido através do bootcamp da Laboratória.

## 2. Resumo do projeto

Neste projeto construimos um site que permite visualizar um conjunto de dados gerados através de técnicas de prompting e ferramentas de inteligência artificial, como ChatGPT. E o site foi adaptado de acordo com as necessidades dos usuários.

Para gerar o conjunto de dados, utilizamos as capacidades da inteligência artificial, explorando o poder do prompting para moldar os dados de forma precisa. A ideia foi criar um arquivo javascript robusto que atenda às especificações desejadas.

Desenvolvemos um projeto de um site intuitivo, no qual as usuárias poderão visualizar, filtrar, ordenar e calcular estatísticas sobre o conjunto de dados. As estatísticas, como avaliação média dos livros, média dos números de páginas e tempo de leitura.

## 3. Protótipo

Desktop Landing Page e Design Mobile

![Desktop landing page](https://github.com/Laboratoria/SAP012-dataverse/assets/93541783/9c4b8ea3-c155-452d-af3c-7d25ff506278)  ![mobile](https://github.com/Laboratoria/SAP012-dataverse/assets/93541783/ebb6699d-52d5-4f4d-bd88-84ea1012ce71)


## 4. Funcionalidades

Este repositório contém a entrega final de um site completamente funcional que incorporou os requisitos definidos. Abaixo estão detalhadas as funcionalidades mínimas implementadas:

* A aplicação foi desenvolvida para permitir que a usuária visualize os dados de forma intuitiva, utilizando uma visualização em formato de cartões, escolhido como a forma mais apropriada. Cada um dos cartões é representado por um elemento `<li>`, e todos os cartões estão contidos em um elemento `<ul>`.

* O elemento `<ul>` foi estruturado como filho de um elemento com o atributo id configurado como "root". Esta organização é essencial para garantir a correta estrutura da aplicação.

* Os cartões foram projetados para destacar os valores das propriedades dos dados relevantes para a usuária, como nome, data, imagem, entre outros. Quando a usuária opta por filtrar ou ordenar os dados por uma propriedade específica, o cartão exibe o valor correspondente dessa propriedade.

* A interface do site foi construída com uma estrutura semântica, seguindo o padrão de microdados. Essa implementação inclui obrigatoriamente os atributos itemscope, itemtype, e o atributo itemprop.

Assim, este site atende plenamente às especificações e oferece uma experiência completa e eficiente para a usuária, permitindo a visualização, filtragem, ordenação e cálculo de estatísticas dos dados de forma clara e organizada.


  Por exemplo, os seguintes dados correspondentes a The Witness for the Prosecution:

  ```json
     {
    "id": "1",
    "name": "The Witness for the Prosecution",
    "description":
      "In a captivating courtroom, the queen of crime weaves a renowned mystery novel full of surprises. This engaging puzzle, brimming with twists, turns, and captivating characters, keeps readers on the edge of their seats as Agatha Christie unravels an intricate plot. The courtroom setting adds a unique touch to the narrative, providing an exciting and unpredictable experience. Witness for the Prosecution is a compact masterpiece delving into the intricacies of the judicial system, blending the author's signature suspense with courtroom fascination, offering a compelling and mysterious read.",
    "shortDescription":
      "An engaging courtroom drama filled with mysteries and twists.",
    "imageUrl": "https://raw.githubusercontent.com/TaGoulart/SAP012-dataverse/main/src/images/books/1.jpg",
    "facts": {
     "authorBook": "Agatha Christie",
      "pagesBook": "234",
      "publicationBook": "1994",
     "readingTime": "23",
     "ratingsBook": "3.9",
      "typeBook": "theater"

    }
  },
  ```

* A aplicação calcula e exibe uma estatística dos dados. As propriedades calculadas de cada item, como média readingTime, ratingsBook e typeBook.

* A aplicação permite à usuária filtrar os dados. Foi utilizado um elemento `<select>`com um atributo de dados `data-testid="selecionar-filtro"`, e um atributo `name` com o nome da propriedade pela qual irá filtrar (por exemplo, se for filtrar por "tipo", o `<select>` terá `name="tipo"`. Os `<option>` deste `<select>` deverão ter no atributo `value` o valor do filtro (por exemplo, se for filtrar por tipo "movie", seria `<option value="Movie">Movie</option>`.

* A aplicação permite à usuária ordenar os dados.
  - Terá pelo menos um controle `<select>` para ordenar.
  - Se usar apenas um controle `<select>`, deve ter
    `data-testid="selecionar-ordenar"` e um atributo `name` com o nome da
    propriedade pela qual irá ordenar (por exemplo, se for ordenar por
    "num" seria `name="num"`). Este `<select>` terá dois `<option>`
    com `value` `asc` e `desc`, para ordenar de forma ascendente e descendente
    respectivamente (por exemplo, `<option value="asc">A - Z</option>`).
  - Uma alternativa é oferecer à usuária uma ordenação mais complexa.
    Pode implementar a ordenação por várias propriedades. Neste caso, seria com
    um `<select>` com um atributo de dados `data-testid="selecionar-ordenar"`,
    e que contenha filhos `<option>` com um `value` com o nome da propriedade
    pela qual irá ordenar. (Por exemplo, `<option value="nome">Nome</option>`).
    Além disso, você precisará de outro controle (`<radio>`,`<select>`, etc.)
    para indicar se a ordenação é ascendente ou descendente. Esse controle
    secundário terá um atributo `name="ordem-ordenacao"`, e terá valores
    `asc` e `desc`.

* As funcionalidades de ordenação devem opera sobre os dados filtrados.
  Por exemplo, se filtrar os livros do tipo que foram feitos filmes e depois os ordenar por
  nome de forma ascendente, a aplicação deve manter o filtro aplicado e
  ordenar os Pokémons do tipo livros que foram feitos filmes.

* A aplicação permitir à usuária reiniciar a aplicação, limpando
  filtros e ordenamentos, com um `<button>` com um atributo de dados
  `data-testid="botao-limpar"`.

* A aplicação é _responsiva_, sendo possivel visualizar sem problemas
  em diferentes tamanhos de tela: celulares, tablets e desktops.

## 5. Histórias de usuário

Leitora assídua e fã da Agatha Christie:

* Como leitora assídua gostaria de ordenar (crescente ou descendente) os livros por: data de publicação e números de páginas para escolher um livro mais facilmente.

* Como leitora assídua gostaria de filtrar os livros por: título e palavaras-chave para escolher um livro mais facilmente. 

* Como leitora assídua gostaria de visualizar as estatísticas dos livros por exemplo: média do numero das páginas, média de avaliacao, tempo de leitura por autor para escolher um livro mais facilmente.

 Design Mobile:

*** print do site no celular***

Design Desktop:

*** print do site desktop***



O _boilerplate_ contém uma estrutura de arquivos como ponto de partida, bem
como todas as configurações de dependências:

```text
.
├── README.md
├── package.json
├── src
|  ├── data 
|  |  └── dataset.js (O que você gerou com a IA)
|  ├── dataFunctions.js
|  ├── view.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.js
   └── dataFunctions.spec.js
   └── tests-read-only
```

### `src/index.html`

Como no projeto anterior, existe um arquivo `index.html`. Como já sabe,
este é o arquivo que será exibido para a usuária. Também é útil para indicar
quais scripts serão usados e para reunir tudo o que foi feito.

## 6. Considerações Técnicas

Foi implementada JavaScript(ES6), HTML e CSS. Neste projeto, não foi utilizado bibliotecas ou
frameworks, apenas JavaScript puro, exceto bibliotecas para criação de gráficos (charts); 

#### Geração dos dados

### `src/index.html`

Como no projeto anterior, existe um arquivo `index.html`. Como já sabe,
este é o arquivo que será exibido para a usuária. Também é útil para indicar
quais scripts serão usados e para reunir tudo o que foi feito.

### `src/main.js`

Recomendamos usar `src/main.js` para todo o seu código relacionado
à exibição dos dados na tela. Basicamente, nos referimos à
interação com o DOM. Operações como criação de nós, registro de
manipuladores de eventos (_event listeners_ ou _event handlers_).

Neste arquivo, você encontrará uma série de _imports_ prontos para _carregar_
as diferentes fontes de dados.

Por exemplo, os dados com os quais você irá trabalhar,
serão encontrados na seguinte linha:

```js
import data from './data/dataset.js';
```

### `src/dataFunctions.js`

O cerne deste projeto é a manipulação de dados por meio de arrays
e objetos.

Este arquivo conterá toda a funcionalidade relacionada a obter,
processar e manipular dados (suas funções). Por exemplo:

* `filterData(data, filterBy, value)`: esta função recebe três parâmetros.
  O primeiro parâmetro, `data`, fornece os dados.
  O segundo parâmetro, `filterBy`, indica qual campo dos dados se
  deseja filtrar.
  O terceiro parâmetro, `value`, indica o valor do campo que se deseja filtrar.

* `sortData(data, sortBy, sortOrder)`: esta função de classificação recebe
  três parâmetros.
  O primeiro parâmetro, `data`, fornece os dados.
  O segundo parâmetro, `sortBy`, indica qual campo dos
  dados se deseja ordenar.
  O terceiro parâmetro, `sortOrder`, indica se a ordenação deve ser ascendente
    ou descendente.

* `computeStats(data)`: a função de cálculo nos permitirá realizar cálculos
  estatísticos básicos para serem exibidos de acordo com os dados fornecidos;
  esta função deve usar o método reduce.

Essas funções devem ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independentes do DOM. Essas funções serão posteriormente utilizadas
no arquivo `src/main.js`, ao carregar a página, e sempre que a usuária
interagir (cliques, filtragens, ordenações, ...).

### `src/data`

Nesta pasta, estão os dados com os quais você trabalhará (os dados de exemplo
ou os dados que você gerará com a ajuda da inteligência artificial).

### `test/dataFunctions.spec.js`

Neste arquivo, você fará testes unitários das funções
implementadas no arquivo `dataFunctions.js`. (`filterBy`, `sortBy`, etc.)

### `test/data.js`

Neste arquivo, você pode construir e exportar dados "mock" para usar nos
testes. É mais fácil testar um array de 5 elementos do que um array de 24,
por isso você criará uma amostra dos dados que deseja testar. No mínimo,
você deve exportar uma variável chamada `data`, mas pode definir e exportar
mais se for necessário para seus testes.

### `src/view.js`

Para obter uma melhor separação de responsabilidades no código, este
arquivo deve conter todas as funções que serão usadas para renderizar
os elementos dinamicamente.

Pelo menos uma função é obrigatória:

* `renderItems(data)`: esta função recebe a matriz de dados para renderizar
  os elementos de cada item e deve retornar um elemento DOM ou
  uma string de HTML.

Lembre-se que todas as funções encontradas neste arquivo devem ser
exportadas para serem usadas em outros arquivos.

Recomendamos esta estrutura que é clara e
organizada para o projeto, pois facilita o entendimento da navegação e
escalabilidade do código. Além disso também segue o princípio de design de
[Separação de responsabilidades](https://dev.to/tamerlang/separation-of-concerns-the-simple-way-4jp2)
no código, onde cada arquivo e pasta
tem uma responsabilidade específica. A responsabilidade das funções em
`view.js` serve para criar partes do DOM com os dados.

Esta não é a única maneira de dividir seu código, você pode usar mais arquivos e
pastas, desde que a estrutura seja clara para seus colegas.

## 6. Critérios de aceitação mínimos do projeto

### Critérios de código

Com cada objetivo de aprendizagem, avaliamos se o código atende a alguns
critérios. Isso não exclui que você possa usar outras opções, por exemplo,
no caso dos seletores, sugerimos o uso de `querySelector`,
mas isso não impede o uso de `querySelectorAll` ou `getElementById` também.

Você pode executar os testes de cada grupo de objetivos
de aprendizagem individualmente com os seguintes comandos:

``` sh
npm run test:oas-html
npm run test:oas-css
npm run test:oas-web-api
npm run test:oas-js
npm run test:oas-prompting
npm run test:oas // Esto es para correr todos los tests de OAs
```

Nota: para que os testes funcionem corretamente, você precisa ter
instalado o `Node.js (LTS)` com versão 14.0.0 ou superior. Para verificar
a versão do node, execute `node -v` no terminal. Se o comando não
não retorna nenhuma versão, você precisa instalá-la, para isso você pode baixá-la
de seu [site oficial](https://nodejs.org/).

#### HTML

* **Uso de HTML semântico**

  - [ ] Possui um `<header>` com um `<h1>`
  - [ ] Possui um `<footer>`
  - [ ] Possui um `<main>` com um `<h2>`
  - [ ] Todos os elementos de controle (inputs, selects, radio, etc) possuem `<label>`
  - [ ] Usa `<ul>` para renderizar os dados
  - [ ] Os filhos de `<li>` usam os atributos de [microdados](https://recursivos.com/html/microdatos/) `itemscope` e `itemprop`

Nota: Tenha em mente que para ter tags `<ul>` e `<li>` em seu projeto,
É necessário que você já tenha dados criados, pois é a partir dos dados que você
irá criar as listas.

#### CSS

* **Uso de seletores CSS**

  - [ ] Uso de seletor de classe para os itens `<li>`
  - [ ] Uso de flexbox em sentido `row` e `column`
  - [ ] Uso de flexbox para o elemento que contém os itens
  - [ ] Uso de flexbox para o elemento que contém os inputs UI

#### Web APIs

* **Uso de seletores do DOM**

  - [ ] O aplicativo usa [`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
    para buscar os elementos do DOM

* **Manuseio de eventos do DOM (ouvintes, propagação, delegação)**

  - [ ] `addEventListener` com um callback que possui o parâmetro de `event`,
    permitindo o uso do objeto [`event`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_objects)
    com `event.target` ou `event.currentTarget`
  - [ ] O aplicativo registra [Event Listeners](https://developer.mozilla.org/en/docs/Web/API/EventTarget/addEventListener)
    para escutar `click`, `change`, `keyup`, dependendo do evento que
    deseja-se ouvir

* **Manipulação dinâmica do DOM**

  - [ ] O aplicativo atualiza o atributo [`innerHTML`](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML).
  - [ ] O aplicativo usa `createElement` e `appendChild`, ou strings de modelo
    para criar elementos

#### JavaScript

* **Variáveis (declaração, atribuição, escopo)**

  - [ ] O aplicativo declara variáveis com [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
    e [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
    de maneira adequada

* **Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**

  - [ ] O aplicativo usa o statement
    [`if..else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
      para avaliar condições

* **Uso de loops (while, for, for..of)**

  - [ ] O aplicativo usa o statement [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
    ou o método [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
    para iteração

* **Funções (parâmetros, argumentos, retorno)**

  No arquivo `dataFunctions.js`, define as seguintes funções:
  - [ ] uma função `sortBy` que possui 3 parâmetros (`data`, `sortBy`, `sortOrder`)
    e retorna a matriz ordenada
  - [ ] uma função `filterBy` que possui 3 parâmetros (`data`, `filterBy`, `value`)
    e retorna a matriz filtrada
  - [ ] uma função `computeStats` que possui pelo menos um parâmetro (`data`)
    e retorna um valor computado

  Mais sobre estes pontos na [seção dataFunctions.js](#src/dataFunctions.js)

* **Arrays (arrays)**

  - [ ] Uso de [Arrays](https://curriculum.laboratoria.la/pt/topics/javascript/04-arrays)
  - [ ] Uso de [Array.prototype.sort() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
    ou [Array.prototype.toSorted - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
  - [ ] Uso de [Array.prototype.forEach() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  - [ ] Uso de [Array.prototype.map() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  - [ ] Uso de [Array.prototype.filter() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  - [ ] Uso de [Array.prototype.reduce() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

* **Objetos**

  - [ ] Uso de notação de ponto para [acessar propriedades](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
  - [ ] Uso de notação de colchetes para [acessar propriedades](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)

* **Módulos ECMAScript (ES Modules)**

  - [ ] O aplicativo usa [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
    e [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
    para importar e exportar valores de um módulo JavaScript

#### Geração dos dados

O tema será de sua escolha, por exemplo, podem ser personagens importantes
na história, personagens inventados, países, filmes... etc.

No próximo projeto, com a ajuda da inteligência artificial, você deve fazer
com que a usuária possa conversar com os dados gerados. Por exemplo, se os
dados estiverem mostrando um país, a usuária poderia perguntar em que ano
foi fundado ou qual é a sua capital, etc. Leve isso em consideração ao
gerar seu conjunto de dados.

Estes dados serão salvos em um arquivo JavaScript. Este arquivo deve exportar
uma matriz com 24 objetos. E a estrutura de cada objeto deve ser a seguinte:

* `id`: Identificador único (não pode haver dois elementos com o mesmo `id`).
  Deve ser uma string de até 32 caracteres, em minúsculas, composta apenas
  por letras, números, sublinhados (`_`) ou hífens (`-`).
  Por exemplo: `"ada-lovelace"`.
* `name`: O nome do personagem, país, filme, etc.
* `shortDescription`: Breve descrição do elemento. Esta descrição deve
  ter no máximo 20 palavras.
* `description`: Descrição estendida do elemento. Esta descrição deve ter entre
  80 e 100 palavras. Ao mostrar este dado na tela, você pode truncá-lo para
  que não ocupe muito espaço.
* `imageUrl`: URL da imagem. Esta imagem será gerada por meio de alguma
  ferramenta baseada em inteligência artificial. Depois de gerar a imagem
  e salvá-la no seu repositório, você deverá adicionar a URL neste campo.
* `facts`: Um objeto com pelo menos **3** "fatos" ou "informações" sobre
  este elemento, no formato `"nome": "valor"`, por exemplo:

```json
  "facts": {
    "yearOfBirth": 1843,
    "placeOfBirth": "London, England",
    "mainField": "Computer Science",
  }
  ```

  Os _nomes das propriedades_ devem estar no formato _camelCase_.
  Por exemplo, **nenhum** dos seguintes nomes seria válido:

  ```json
  "facts": {
    "year_of_birth": 1843,
    "Place of Birth": "London, England",
    "MainField": "Computer Science",
  }
  ```

  Os _valores das propriedades_ só podem ser do tipo `number`, `boolean`
  ou uma `string` com no máximo 64 caracteres (essa **não** tem restrições
  quanto ao tipo de caracteres que podem conter).

  E, por último, tenha em mente duas coisas:

  1. Todos os elementos do conjunto de dados devem compartilhar as mesmas propriedades
  em `facts`, ou seja, se um elemento tem uma propriedade `anoDeNascimento`,
  o restante dos elementos do array também devem ter essa propriedade.
  2. Não é necessário que os nomes das propriedades estejam em inglês,
  `"localDeNascimento"` é um nome igualmente válido.

* `extraInfo`: E por último, um campo opcional livre, similar a `facts`. Se precisar,
  aqui você pode inserir qualquer outro tipo de informação no formato
  `"nome": "valor"`, mas sem restrições sobre o tipo de dado do valor. Por exemplo:

  ```json
  "extraInfo": {
    "imagePrompt": "Um texto muito, muito longo...",
    "writings": [
      "Vol. 1",
      "Vol. 2",
      "Vol. 3",
      "Vol. 4"
    ]
  }
  ```

Um exemplo de data, de acordo com os requisitos anteriores, poderia ser:

```js
export default [
  {
    "id": "ada-lovelace",
    "name": "Ada Lovelace",
    "shortDescription": "Pioneira da informática, foi a primeira programadora.",
    "description": "Uma visionária do século XIX...",
    "imageUrl": "URL_DA_IMAGEM_GERADA",
    "facts": {
      "yearOfBirth": 1843,
      "placeOfBirth": "London, England",
      "mainField": "Computer Science",
    }
  },
  //... 23 objetos más
]
```

A data gerada deve ser substituída pelo conteúdo deste arquivo:
`./src/data/dataset.js`.

**O tempo estimado que você deveria dedicar à geração desses
dados é de no máximo dois dias.** Se após esse tempo você não
tiver um conjunto de dados gerados, deverá usar os dados de exemplo
localizados em:
`./src/data/dataset.js`.

As URLs das imagens dentro do arquivo JavaScript devem vincular-se às imagens
para cada elemento da matriz.
Essas imagens podem ser geradas por inteligência
artificial ou imagens que você pode encontrar na web.
Para a geração de imagens, recomendamos usar o
[gerador de imagens do Bing](https://www.bing.com/create).
Assim que tiver a imagem, faça o download dela ou obtenha a URL,
para adicioná-la ao conjunto de dados.

Depois de ter o arquivo JavaScript completo, lembre-se de executar os testes
com `npm run test` para verificar se o arquivo está cumprindo o que foi
solicitado.

Uma vez que você delimitou seu campo de interesse e gerou o arquivo JavaScript
com a ajuda da inteligência artificial, dedique
tempo para compreender profundamente sua usuária e suas
necessidades específicas. A partir desse entendimento, você poderá projetar a
interface que facilite uma interação mais eficaz e uma compreensão mais
completa dos dados apresentados.

Nota: embora você perceba que não está utilizando todas as informações geradas em
sua interface, é necessário gerá-la completamente. No próximo projeto
você usará o conjunto de dados completo, especialmente ao permitir que o usuário
possa interagir através de chat com os dados gerados.

#### Prompt usado

Dentro do readme que você criará, deve incluir uma captura de tela
do seu prompt utilizado para gerar os dados. Se você usou vários prompts,
pode anexar todas as capturas que precisar.

#### Design de Interface de Usuário

##### Protótipo de alta fidelidade

Usando os wireframes ou esboços (_sketches_) da sua solução de interface como
base, o próximo passo é projetar sua Interface de Usuário
(UI - _User Interface_). Para isso, você deve aprender a utilizar
alguma ferramenta de design visual.
Nós recomendamos o [Figma](https://www.figma.com/), que é
uma ferramenta que funciona no navegador e, além disso, você pode criar
uma conta gratuitamente. No entanto, você é livre para usar outros editores
gráficos como Illustrator, Photoshop, etc.

O design deve representar o _ideal_ da sua solução. Digamos que é o que
você desejaria implementar se tivesse tempo ilimitado para trabalhar.
Além disso, seu design deve seguir os fundamentos de _visual design_.

Lembre-se de solicitar feedback do seu protótipo às suas colegas e/ou coaches.

#### Testes de usabilidade

Durante o desafio, você deverá realizar testes de usabilidade com diferentes usuárias,
e com base nos resultados, deverá iterar seus designs. Conte-nos
quais problemas de usabilidade você identificou nos testes e como os
melhorou em sua proposta final.

#### Implementação da Interface de Usuário (HTML/CSS/JS)

Depois de projetar sua interface de usuário, você deverá trabalhar em sua implementação.
**Não** é necessário construir a interface exatamente como você a projetou.
Seu tempo de hacking é limitado, então você terá que priorizar.

Revise [as funcionalidades](#3-funcionalidades) que o projeto requer da interface.

#### Testes unitários

O _boilerplate_ deste projeto não inclui Testes Unitários, então
você terá que escrevê-los para as funções responsáveis por _processar_,
_filtrar_ e _ordenar_ os dados, bem como _calcular_ estatísticas.
Este projeto utiliza o framework [Jest](https://jestjs.io/) para executar
os testes unitários, então recomendamos que consulte sua documentação.

Seus _testes unitários_ devem cobrir 70% das _declarações_
(_statements_), _funções_ (_functions_), _linhas_ (_lines_), e _ramificações_
(_branches_) do arquivo `src/dataFunctions.js` que contém suas funções e
está detalhado na seção de [Considerações técnicas](#src/data.js).

## 7. Edição Hacker

As seções chamadas _Edição Hacker_ são **opcionais**. Se você **concluiu**
tudo o que foi solicitado anteriormente e ainda tem tempo, tente completá-las.
Isso permitirá que aprofundar e/ou praticar mais sobre os objetivos de
aprendizado do projeto.

Recursos/características adicionais sugeridos:

* Visualizar a estatística calculada por meio de um gráfico. Para
  isso, recomendamos explorar bibliotecas de gráficos como
  [Chart.js](https://www.chartjs.org/)
  ou [Google Charts](https://developers.google.com/chart/).
* Cobertura de 100%

## 7. Objetivos de aprendizagem

Reflita e depois enumere os objetivos que quer alcançar e aplique no seu projeto. Pense nisso para decidir sua estratégia de trabalho.

### HTML

- [ ] **Uso de HTML semântico**

  <details><summary>Links</summary><p>

  * [HTML semântico](https://curriculum.laboratoria.la/pt/topics/html/html5/semantic-html)
  * [Semantics in HTML - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de seletores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/pt/topics/css/css/intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/pt_BR/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caixa (box model): borda, margem, preenchimento**

  <details><summary>Links</summary><p>

  * [Modelo de Caixa e Display](https://curriculum.laboratoria.la/pt/topics/css/css/boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [ ] **Uso de flexbox em CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#pt-br)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

### Web APIs

- [ ] **Uso de seletores de DOM**

  <details><summary>Links</summary><p>

  * [Modificando o DOM](https://curriculum.laboratoria.la/pt/topics/browser/dom/1-dom-methods-selection)
  * [Introdução ao DOM - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
  * [Locating DOM elements using selectors - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manipulação de eventos de DOM (listeners, propagação, delegação)**

  <details><summary>Links</summary><p>

  * [Introdução a eventos - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/removeEventListener)
  * [Objeto Event](https://developer.mozilla.org/pt-BR/docs/Web/API/Event)
</p></details>

- [ ] **Manipulação dinâmica de DOM**

  <details><summary>Links</summary><p>

  * [Introdução ao DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [ ] **Diferenciar entre tipos de dados primitivos e não primitivos**

- [ ] **Arrays (arranjos)**

  <details><summary>Links</summary><p>

  * [Arranjos](https://curriculum.laboratoria.la/pt/topics/javascript/arrays)
  * [Array - MDN](https://developer.mozilla.org//pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [ ] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos em JavaScript](https://curriculum.laboratoria.la/pt/topics/javascript/objects/objects)
</p></details>

- [ ] **Variáveis (declaração, atribuição, escopo)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de dados e operadores](https://curriculum.laboratoria.la/pt/topics/javascript/basics/values-variables-and-types)
  * [Variáveis](https://curriculum.laboratoria.la/pt/topics/javascript/basics/variables)
</p></details>

- [ ] **Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estruturas condicionais e repetitivas](https://curriculum.laboratoria.la/pt/topics/javascript/flow-control/conditionals-and-loops)
  * [Tomando decisões no seu código — condicionais - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Uso de laços (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Laços (Loops)](https://curriculum.laboratoria.la/pt/topics/javascript/flow-control/loops)
  * [Laços e iterações - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Funções (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funções (controle de fluxo)](https://curriculum.laboratoria.la/pt/topics/javascript/flow-control/functions)
  * [Funções clássicas](https://curriculum.laboratoria.la/pt/topics/javascript/functions/classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/pt/topics/javascript/functions/arrow)
  * [Funções — blocos reutilizáveis de código - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Testes unitários (unit tests)**

  <details><summary>Links</summary><p>

  * [Introdução ao Jest - Documentação oficial](https://jestjs.io/docs/pt-BR/getting-started)
</p></details>

- [ ] **Módulos de ECMAScript (ES modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descritivos (Nomenclatura e Semântica)**

- [ ] **Diferença entre expressões (expressions) e declarações (statements)**

### Controle de Versões (Git e GitHub)

- [ ] **Git: Instalação e configuração**

- [ ] **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Criação de contas e repositórios, configuração de chave SSH**

- [ ] **GitHub: Implantação com GitHub Pages**

  <details><summary>Links</summary><p>

  * [Site oficial do GitHub Pages](https://pages.github.com/)
</p></details>

- [ ] **GitHub: Colaboração pelo Github (branches | forks | pull requests | code review | tags)**

### Centrado no usuário

- [ ] **Desenhar e desenvolver um produto ou serviço colocando as usuárias no centro**

### Design de produto

- [ ] **Criar protótipos para obter feedback e iterar**

- [ ] **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**

### Pesquisa

- [ ] **Planejar e executar testes de usabilidade**

### AI Prompting

- [ ] **Dando Instruções**

  <details><summary>Links</summary><p>

  * [Dando Instruções | Learn Prompting: Your Guide to Communicating with AI](https://learnprompting.org/pt/docs/basics/instructions)
</p></details>

- [ ] **Few shot prompting**

  <details><summary>Links</summary><p>

  * [Few shot prompting | Learn Prompting: Your Guide to Communicating with AI](https://learnprompting.org/es/docs/basics/few_shot)
</p></details>

6. Vamos começar a codificar! :rocket:

### Conteúdo de Referência

#### Desenvolvimento Front-end

* [Tópicos no currículo da Laboratória](https://curriculum.laboratoria.la/pt/web-dev/topics)
  testes, arrays, objetos, funções, DOM no JavaScript do navegador.
* [Procurando elementos com querySelector*](https://javascript.info/searching-elements-dom)
* [Objeto de evento](https://javascript.info/introduction-browser-events#objeto-del-evento)
* [Array no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Array.sort no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
* [Array.toSorted no MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
* [Array.map no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [Array.filter no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* [Array.reduce no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
* [Array.forEach no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* [Object.keys no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
* [Object.entries no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
* [Atributos de dados](https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Howto/Use_data_attributes)
* [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
* [expressão vs declaração](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [Dados atômicos vs dados estruturados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [Módulos: Export](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
* [Módulos: Import](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
* [Diferença entre array e objetos](https://youtu.be/mJJloQY7A8Y)
* [Como percorrer um objeto?](https://youtube.com/01RHn23Bn_0)
* [`map`, `filter`, `sort` e `reduce` também são métodos para objetos](https://youtu.be/bUl1R2lQvKo)
* [Diferença entre expression e statements](https://youtu.be/wlukoWco2zk)
* [Diferença entre createElement e innerHTML](https://www.javascripttutorial.net/javascript-dom/javascript-innerhtml-vs-createelement/)
* [O que é o Escopo?](https://youtu.be/s-7C09ymzK8)

#### Ferramentas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Para perguntas sobre Git recomendamos ver este playlist](https://www.youtube.com/watch?v=F1EoBbvhaqU&list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)











