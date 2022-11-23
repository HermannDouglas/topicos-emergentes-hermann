# topicos-emergentes
Repositório da disciplina Tópicos Emergentes em Desenvolvimento Web

# Como inciar a aplicação

## Back-end
```
cd back-end
mvn package
java -jar target\sgcmapi.jar
```
Ou
```
cd back-end
mvn spring-boot:run
```
A aplicação vai iniciar no endereço https://localhost:9000, com acesso local a base de dados MySQL, por meio da porta padrão 3306, além de usuário e senha "root".

## Front-end
Para iniciar a aplicação, é necessário também instalar as dependências do projeto.
```
cd front-end
npm install
ng serve --ssl
```
A aplicação vai iniciar no endereço https://localhost:4200.

# Sites de referência

- Storytelling com Dados: https://www.storytellingwithdata.com/
- Talend Open Studio for Data Integration User Guide: https://help.talend.com/r/en-US/8.0/studio-user-guide-open-studio-for-data-integration
- Ajuda do Looker Studio: https://support.google.com/looker-studio

# Ferramentas

- **Talend Open Studio for Data Integration**
  - Ferramenta ETL.
  - https://www.talend.com/lp/open-studio-for-data-integration/
- **Looker Studio (Google Data Studio)**
  - Ferramenta de visualização de dados.
  - https://datastudio.google.com/
- **Free MySQL Hosting**
  - Serviço que oferece uma instância de banco de dados MySQL.
  - https://www.freemysqlhosting.net/
- **MySQL**
  - Verificar se o MySQL está funcionando:
    - Tutorial para resetar a senha de root, caso necessário: https://dev.mysql.com/doc/mysql-windows-excerpt/8.0/en/resetting-permissions-windows.html
    - Tentar acessar com senha em branco ou senha igual ao nome de usuário (root).
    - Para tentar conectar no MySQL, no prompt de comandos digite:
      - ```mysql -u root -p```
  - Se necessário, realizar a instalação:
    - Link para download: https://dev.mysql.com/downloads/file/?id=512698
    - [Tutorial de instalação](https://github.com/webacademyufac/frameworks-back-end/blob/main/tutoriais/mysql/mysql.md)
  - Criar o banco de dados ```sgcm```:
    - No prompt de comandos digite:
      - ```mysql -u root -p```
    - Ao conectar no MySQL, execute a seguinte instrução SQL:
      - ```CREATE DATABASE sgcm;```
  - Importar dados: 
    - No prompt de comandos digite:
      - ```mysql -u root -p sgcm < sql\sgcm.sql```
- **Visual Studio Code**
  - https://code.visualstudio.com/Download
  - **Extension Pack for Java (Extensão do VS Code)**
    - https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack
  - **Spring Boot Extension Pack (Extensão do VS Code)**
    - https://marketplace.visualstudio.com/items?itemName=pivotal.vscode-boot-dev-pack
  - **Thunder Client (Extensão do VS Code)**
    - https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client
  - **XML (Extensão do VS Code)**
    - https://marketplace.visualstudio.com/items?itemName=redhat.vscode-xml
  - **Angular Language Service (Extensão do VS Code)**
    - https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack
- **Git**
  - https://git-scm.com/downloads
- **JDK 11**
  - Para verificar se o JDK está corretamente instalado e configurado, digite no prompt de comandos:
    - ```javac -version```
  - Se necessário, realizar a instalação e configuração:
    - Link para download: https://www.oracle.com/br/java/technologies/javase/jdk11-archive-downloads.html
    - Criar a variável de ambiente JAVA_HOME configurada para o diretório de instalação do JDK. Exemplo: “C:\Program Files\Java\jdk-11.0.13”.
    - Adicionar “%JAVA_HOME% bin” na variável de ambiente PATH.
    - Tutorial de configuração: https://mkyong.com/java/how-to-set-java_home-on-windows-10/
- **Maven**
  - Para verificar se o Maven está corretamente instalado e configurado, digite no prompt de comandos:
    - ```mvn -version```
  - Se necessário, realizar a instalação e configuração:
    - Link para download: https://dlcdn.apache.org/maven/maven-3/3.8.6/binaries/apache-maven-3.8.6-bin.zip
    - Adicionar o diretório de instalação do Maven na variável de ambiente PATH. Exemplo: “C:\apache-maven\bin”.
    - Tutorial de instalação: https://mkyong.com/maven/how-to-install-maven-in-windows/
- **Node.js (e npm)**
  - Versão 14.15 ou superior.
  - Para verificar a versão do Node.js, no prompt de comandos digite:
    - ```node --version```
  - Link para download (escolha a versão LTS): https://nodejs.org/en/download/
- **Angular CLI:**
  - Versão 14.0 ou superior.
  - Para verificar a versão do Angular CLI, no prompt de comandos digite:
    - ```ng --version``` ou ```ng version```
  - Tutorial de instalação: https://angular.io/guide/setup-local
  - Para instalar o Angular CLI, no prompt de comandos digite:
    - ```npm install -g @angular/cli```

# SGCM - Diagrama de Classes

![SGCM_Diagrama_Classes](SGCM_Diagrama_Classes.png)

# SGCM - Diagrama Entidade Relacionamento

![SGCM_DER](sgcmDER.svg)
