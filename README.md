# ToDoList-TrilhaNode

## Como rodar localmente
1. Verifique se que os sequintes encontram-se instalados na sua máquina:
    - NodeJs (versão 16)
    - Git 

Clone e instale:
  - Clone o repositório com o comando:
   
     ```bash
        git clone https://github.com/MariaAbritta/ToDoList-TrilhaNode
     ```

  - Navegue para  do diretório criado com:
     ```bash
        cd ToDoList-TrilhaNode
     ```
  - E por fim, instale as dependencias do projeto com o comando:
    ```bash
        sudo npm install
    ```
No seu editor de código, certigique de instalar:
  - express 

       `npm install express`
    
   - ejs
    
        `npm install ejs`
    
   - mongoose
    
        `npm install mongoose`
    
   - nodemon
    
        `npm install nodemon`
    
   - dotenv
    
        `npm install dotenv -D`
    

Para o Banco de dados:
    - Você precisará criar um arquivo .env, no formato do .env.example, para ter uma URL para um banco de dados MongoDB.
       
Com tudo isso instalado corretamente na sua aplicação, rode no terminal:
### `npm run dev`

## Explicando os requisitos feitos
- Para uma visualização melhor do funcionamento do back-end, acesse link do Heroku: https://todolist-abritta.herokuapp.com/ 
- Requisitos:
    1. RF01: Um usuário deve ser capaz de criar uma lista de tarefas, com a rota /list/ e o metodo POST.
       - Para uma maior personalização do meu código, mudei o nome da rota para /create/
       `routes.post("/create", TaskController.createTask);`
    2. RF02: Um usuário deve ser capaz de editar a descrição de suas listas de tarefas, com a rota /list/ e o método PATCH
       - Como eu não quis fazer uma atualização parcial dos dados por conta de uma melhor visualização e evitar eventuais erros no front-end, usei o método post para a alteração completa do dado cadastrado, porém a atualização continua sendo feita. Para uma maior personalização do meu código, mudei o nome da rota para /updateOne/.
       `routes.post("/updateOne/:id", TaskController.updateOneTask);`
    3. RF03: Um usuário deve ser capaz de excluir uma lista de tarefas, com a rota /list/ e o método DELETE
       - Para uma maior personalização do meu código, mudei o nome da rota para /deleteOne/. O método DELETE foi usado dentro da controller, usei o deleteOne para evitar a exclusão de dados não selecionados.
       `Task.deleteOne({ _id: req.params.id });`
    4. RF04: Ao excluir uma lista de tarefas, tarefas relacionadas a ela devem ser excluídas e tarefas que não são relacionadas a ela devem permanecer.
        - Da para visualizar isso perfeitamente no front, quando você confirma que quer deletar uma tarefa, apenas a selecionada é deletada.
    5. RF05: Um usuário deve ser capaz de visualizar todas as listas cadastradas, com a rota /lista/all e o método GET.
        - Da para visualizar isso perfeitamente no front, quando você abre a aplicação(o link), para um melhor style, decidir colocar essa rota no início, assim a pessoa consegue visualizar todas as tarefas adicionadas. Para uma maior personalização do meu código, mudei o nome da rota para /.
       `routes.get("/", TaskController.getAllTasks);`
