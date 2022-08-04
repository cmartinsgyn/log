# Sistema
 Resumo: Angular 12.1.1, node 14.17
 Gerar npm install e todas bibliotecas serão baixadas

 # Caso use docker
  usar dockerfile:       
# ----------------------------------------------------
FROM node:14.17.1-alpine as node-angular-cli
#Linux setup
RUN apk update \
  && apk add --update alpine-sdk \
  && apk add bash \ 
  && apk del alpine-sdk \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache verify \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd

#Ver a versão adequada ao seu projeto...
RUN npm i -g @angular/cli@12.1.1

#gerador arquivo pdf
RUN npm i jspdf 
# ----------------------------------------------------
- Atualizar o npm
- setar o volume do container para a pasta do computador
- porta padrao: 4200
Obs: talves, para rodar o ng serve, necessite digitar o comando como no exemplo:
 ng serve --host 172.17.0.2 (que o id variável do container verificado com ifconfig)   

--- end docker --
   # Orientações Padrão

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
