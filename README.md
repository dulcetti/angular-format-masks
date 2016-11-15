# format-masks
This is a AngularJS Component to format masks of CPF, CNPJ, CEP and brazilian phones.

The masks generally only work on HTML inputs. This component serve to format string of one external API and print on HTML in correct format.

## Instalation

Run the `npm install` command to execute the package instalation:

```
npm install format-masks
```

After this, the component will installed on folder node_modules/

## Configuration

Agora você precisa colocar o JS responsável por chamar o componente:

```html
<script src="/node_modules/format-masks/dist/faq.component.js"></script>
```

Agora adicione o componente no módulo Angular do seu projeto:

```javascript
angular.module('application', ['format.masks']);
```

## Aplicando no template

Agora é adicionar a tag na sua view:

```html
<format-masks></format-masks>
```

### Masks options

Você pode adicionar as seguintes máscaras:

* CPF
* CNPJ
* CEP
* Telefone

O componente possui um atributo **OBRIGATÓRIO** chamado mask-type, que você passa o tipo de máscara que você quer que o componente transforme:

```html
<format-masks maskt-type="cpf"></format-masks>
```

Os tipos são:

* cpf
* cnpj
* cep
* brazilian-phone

### Values

Depois do tipo você precisa passar o valor da máscara:

```html
<format-masks maskt-type="cpf" mask-value="11111111111"></format-masks>
```

Os valores só aceitam números e com seus respectivos valores máximos:

* cpf - 11 caracteres
* cnpj - 14 caracteres
* cep - 8 caracteres
* brazilian-phone - 8 ou 9 caracteres

Feito isso, sua string será formata com a máscara:

```html
111.111.111-11
```

## That's all folks

Qualquer dúvida, melhoria, sugestão, é só entrar em contato.
