# Controllers

Os controllers são responsáveis por receber as requisições do usuário, processar as informações e retornar as respostas adequadas. Eles atuam como intermediários entre as camadas de apresentação e de negócio da aplicação.

## Propósito

Os controllers têm como objetivo:

- Receber e validar as entradas do usuário
- Invocar os serviços apropriados para processar as solicitações
- Retornar as respostas ao usuário, seja com dados ou mensagens de erro
- Manter a lógica de apresentação separada da lógica de negócio

## Controllers Disponíveis

- `SolicitacaoController`: Gerencia as operações relacionadas à entidade `Solicitacao`.
