# Dataverse

## Índice

* [1. Preâmbulo](#1-preâmbulo)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Protótipo](#3-Protótipo)
* [4. Funcionalidades](#3-Funcionalidades)
* [5. Historia de usuário](#4-Historia-de-usuário)
* [6. Critérios de qualidade e aceitação](#6-Critérios-de-qualidade-e-aceitação)
* [7. Aprendizados](#8-aprendizados)


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

[*** print do site no celular***](https://raw.githubusercontent.com/lourdilene/SAP012-dataverse/main/mobile.png)

Design Desktop:

[*** print do site desktop***](https://raw.githubusercontent.com/lourdilene/SAP012-dataverse/main/desktop.png)

## 6. Critérios de qualidade e aceitação

### DoR

**Definition of Ready (DoR):**

1. **Requisitos Claros:** A user story deve ter requisitos claros e compreensíveis.
2. **Prioridade Estabelecida:** A user story deve ter uma prioridade clara dentro do backlog do projeto.
3. **Critérios de Aceitação Definidos:** Os critérios de aceitação devem ser estabelecidos e compreendidos por todos os membros da equipe.
4. **Assets Disponíveis:** Todos os ativos necessários, como imagens de capas de livros e informações sobre os livros de Agatha Christie, devem estar disponíveis.

### DoD

**Definition of Done (DoD):**

1. **Funcionalidades Implementadas:** Todas as funcionalidades descritas na user story foram implementadas.
2. **Testes Concluídos:** Testes foram realizados para garantir que a página funcione conforme esperado.
3. **Responsividade Verificada:** A página é responsiva em diferentes dispositivos e navegadores.
4. **Estilo Consistente:** O estilo da página é consistente e atende aos requisitos de design.
5. **Aprovação do Produto:** A página foi revisada pela equipe de desenvolvimento e aprovada.

### Acceptance Criteria

**Acceptance Criteria:**

1. **Listagem de Livros:** Uma lista visual dos principais livros de Agatha Christie deve ser exibida na página.
2. **Informações Disponíveis:** As informações dos livros, como título, ano de publicação e quantidade de páginas.
3. **Responsividade:** A página deve ser responsiva e se adaptar a diferentes tamanhos de tela.
4. **Estilo Coerente:** O layout e o estilo da página devem ser coesos e esteticamente agradáveis.
5. **Navegação Intuitiva:** A navegação entre os livros e a visualização das informações deve ser intuitiva para a leitora.


## 7. Aprendizados

* Teste e Técnicas de prompting
* Uso de flexbox
* Melhor entendimento da estrutura de testes.
* Responsividade usando a metodologia mobilefirst
* Git(Merge upstream, fetch upstream, log upstream, git checkout e pullrequest)
* Atualização do README através do Github (Issues)











