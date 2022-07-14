# Bem vindo ao projeto Mistery Letter

## Comentários
Digite um frase e ela é separada em palavras, em formato de carta, quando clicar em uma carta muda completamente o estilo da carta. É um projeto simples, mas que me dediquei muito em deixar bonito. 

---

## Instalação do projeto localmente:

1. No terminal, em um diretório de sua escolha, clonar o repositório:

```
git clone git@github.com:lucas-da-silva/trybe-mistery-letter.git
```

2. Dentro do reposítorio, basta abrir o arquivo index.html para visualizar o projeto no navegador. :rocket:

--- 

## Requisitos

# Requisitos Obrigatórios:

## 1 - Deve haver um `input` com o id=\"carta-texto\" onde a pessoa usuária poderá digitar o conteúdo da carta

Sua página deve conter um input com id="carta-texto"

## 2 - Deve haver um parágrafo com o id=\"carta-gerada\" onde a pessoa usuária verá o resultado de sua carta misteriosa

Sua página deve conter um parágrafo com id="carta-gerada"

## 3 - Deve haver um botão com id=\"criar-carta\" e ao clicar nesse botão, a carta misteriosa deve ser gerada

<details>
  <summary>Sua página deve conter um botão com id="criar-carta"</summary><br />

**Pontos importantes:**

* Cada palavra deve aparecer dentro de uma tag `span`.
* As tags `span` devem ser adicionadas como filhas do parágrafo que possui o id `carta-gerada`.

</details>

## 4 - Ao criar uma carta através do botão com id="criar-carta", o `input` com id="carta-texto" deve permanecer com o texto digitado

O input com o id="carta-texto" deve permanecer com o texto digitado

</details>

## 5 - Se a pessoa usuária não preencher o campo ou preencher com apenas espaços vazios adicionar a mensagem 'Por favor, digite o conteúdo da carta.'

Quando não houver texto, a mensagem "Por favor, digite o conteúdo da carta" deve aparecer em um parágrafo

## 6 - Crie a classe `newspaper`

<details>
  <summary>A classe <code>newspaper</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `background-color` com o valor `rgb(250, 235, 215)`
  - `font-family` com o valor `Times New Roman`
  - `font-weight` com o valor `700`

</details>

## 7 - Crie a classe `magazine1`.

<details>
  <summary>A classe <code>magazine1</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `background-color` com o valor `rgb(0, 128, 128)`
  - `color` com o valor `rgb(255, 255, 255)`
  - `font-family` com o valor `Verdana`
  - `font-weight` com o valor `900`
  - `text-transform` com o valor `uppercase`

</details>

## 8 - Crie a classe `magazine2`.

<details>
  <summary>A classe <code>magazine2</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `background-image` com a imagem `images/pink-pattern.png`
  - `color` com o valor `rgb(255, 0, 255)`
  - `font-family` com o valor `Verdana`
  - `font-weight` com o valor `900`

</details>

## 9 - Crie a classe `medium`.

<details>
  <summary>A classe <code>medium</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `font-size` com o valor `20px`
  - `padding` com o valor `8px`

</details>

## 10 - Crie a classe `big`.

<details>
  <summary>A classe <code>big</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `font-size` com o valor `30px`;
  - `padding` com o valor `10px`.

</details>

## 11 - Crie a classe `reallybig`.

<details>
  <summary>A classe <code>reallybig</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `font-size` com o valor `40px`;
  - `padding` com o valor `15px`.
  
</details>

## 12 - Crie a classe `rotateleft`.

<details>
  <summary>A classe <code>rotateleft</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `transform` com o valor `matrix(0.996195, -0.0871557, 0.0871557, 0.996195, 0, 0)`

</details>

## 13 - Crie a classe `rotateright`.

<details>
  <summary>A classe <code>rotateright</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `transform` com o valor `matrix(0.996195, 0.0871557, -0.0871557, 0.996195, 0, 0)`

</details>

## 14 - Crie a classe `skewleft`.

<details>
  <summary>A classe <code>skewleft</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `transform` com o valor `matrix(1, 0, 0.176327, 1, 0, 0)`;

</details>

## 15 - Crie a classe `skewright`.

<details>
  <summary>A classe <code>skewright</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `transform` com o valor `matrix(1, 0, -0.176327, 1, 0, 0)`;

</details>

## 16 - Adicione as classes de forma aleatória a fim de estilizar as palavras.

<details>
  <summary>Utilize o <code>Javascript</code> para atribuir as classes de forma aleatória</summary><br />

**Pontos importantes:**

* As classes devem ser adicionadas às tags `span` de forma **aleatória**.
* Sempre adicione mais de uma classe em uma palavra.
* Utilize as classes:
  - `newspaper`, `magazine1`, `magazine2` (Grupo estilo)
  - `medium`, `big`, `reallybig` (Grupo tamanho)
  - `rotateleft`, `rotateright` (Grupo rotação)
  - `skewleft`, `skewright` (Grupo inclinação)

* **Não** utilize mais de uma classe do mesmo grupo.
* Todas as palavras devem conter uma classe de cada grupo.
* Ou seja, se você utilizar as classes `magazine1`, `big`, `rotateleft` e `skewright` em uma palavra, as demais classes de cada grupo não devem ser usadas para essa mesma palavra. Por exemplo, do grupo estilo não seriam utilizadas as classes `newspaper` e `magazine2` pois a classe `magazine1` já está sendo utilizada.

</details>

## Requisitos Bônus:

## 17 - Com uma carta misteriosa gerada, adicione a possibilidade de alterar o estilo de uma palavra específica ao clicar nela

<details>
  <summary>Ao clicar na carta gerada, a classe dela é alterada</summary><br />

**Pontos importantes:**

* Ao clicar em uma palavra, um novo estilo **aleatório** deve ser aplicado.
* O número de mudanças deve ser ilimitado.

</details>

## 18 - Deve haver um parágrafo com o id=\"carta-contador\" onde existirá um contador de palavras

<details>
  <summary>Sua página deve conter um paragrafo com id="carta-contador" que conte quantas palavras foram geradas</summary><br />

**Pontos importantes:**

* Esse contador deve informar a quantidade de palavras presentes na carta misteriosa gerada.

</details>
