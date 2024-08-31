# Instruções para Configuração e Execução Local

Siga os passos abaixo para configurar e executar o script localmente em sua máquina:

### 1. Pré-requisitos

1. <strong>Node.js instalado</strong>: Certifique-se de que o Node.js está instalado em sua máquina. Você pode verificar se ele está instalado executando o seguinte comando no terminal:
```
node -v
```
Se o Node.js não estiver instalado, você pode baixar e instalá-lo [Aqui](https://nodejs.org/)

### 2. Passos para Configuração

1. <strong>Clone o repositório:</strong> Clone este repositório em sua máquina local usando o seguinte comando no prompt ou cmd:
```
git clone https://github.com/garreto9/MaisPraTi.git
```
2. <strong>Navegue até o diretório do projeto:</strong> Acesse o diretório do repositório clonado:
```
cd Turma-02/module01/exercises/ExerciseList-01
```
## Como Executar o script
1. <strong>Instale as dependências:</strong> Este script utiliza o módulo `prompt-sync` para capturar entradas do usuário no terminal. Caso não esteja incluído no repositório, instale-o com:
```
npm install prompt-sync
```
2. <strong>Execute o script:</strong> Execute o script com o comando:
```
node nome-do-arquivo.js
```
Onde `nome-do-arquivo.js` é o nome do arquivo que contém o código do exercício que deseja executar(ex: node exercise01.js).


# Instruções para Configuração e Execução no VS Code

## Pré-requisitos
- Node.js instalado no seu sistema.
- Visual Studio Code instalado.

## Passos para Configuração
1. <strong>Node.js instalado</strong>: Certifique-se de que o Node.js está instalado em sua máquina. Você pode verificar se ele está instalado executando o seguinte comando no terminal:
```
node -v
```
Se o Node.js não estiver instalado, você pode baixar e instalá-lo [Aqui](https://nodejs.org/)

### 2. Passos para Configuração

1. <strong>Clone o repositório:</strong> Clone este repositório em sua máquina local usando o seguinte comando no prompt ou cmd:
```
git clone https://github.com/garreto9/MaisPraTi.git
```


2. **Instalar Visual Studio Code**
   - Baixe e instale o Visual Studio Code a partir do site oficial.

3. **Instalar a Extensão `Code Runner` no VS Code**
   - Abra o VS Code.
   - Vá para a aba de extensões (ícone de quadrado no lado esquerdo ou `Ctrl+Shift+X`).
   - Pesquise por `Code Runner` e instale a extensão.

4. **Instalar `prompt-sync`**
   - Abra o terminal integrado no VS Code (`Terminal` > `New Terminal`).
   - Instale a biblioteca `prompt-sync` digitando:
     ```bash
     npm install prompt-sync
     ```
     Obs: Após clonar o repositório o prompt-sync ja vai estar instalado

## Como Executar o script
1. <strong> Abra o local do repositório no VS Code:</strong>: No VS Code vá no canto superior esquerdo, em `file`, depois em `open folder` e selecione a raiz do repositório clonado, no canto esquerdo do VS Code aparecerá os arquivos do repositório, vá até a pasta `exerciseList-01` dentro da pasta `exercises`

2. <strong>Abra o arquivo do exercício que deseja executar:</strong> Caso  tenha instalado a extensão `Code Runnner`, basta clicar em uma botão parecido com play próximo do canto superior direito do VS Code, caso não tenha instalado, abra o terminal com as teclas de atalho `CTRL + '` e Execute o seguinte comando no terminal:
```
node nome-do-arquivo.js
```
Onde `nome-do-arquivo.js` é o nome do arquivo que contém o código do exercício que deseja executar(ex: node exercise01.js).
