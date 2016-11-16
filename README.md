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

Now you need put the JS file responsible to call the component:

```html
<script src="/node_modules/format-masks/dist/format-masks.component.js"></script>
```

Add the component at AngularJS module of your project:

```javascript
angular.module('application', ['format.masks']);
```

## Apply on template

Now is add the tag on your view:

```html
<format-masks></format-masks>
```

### Masks options

You need add one of the follows mask types:

* CPF
* CNPJ
* CEP
* Brazilian Phone

The component have a **REQUIRED** attribute calls mask-type, you pass the mask type you need the component transform on the value:

```html
<format-masks maskt-type="cpf"></format-masks>
```

The types:

* cpf
* cnpj
* cep
* brazilian-phone

### Values

After type you need pass the value of mask:

```html
<format-masks maskt-type="cpf" mask-value="11111111111"></format-masks>
```

The values only accepts numbers and with your respectives maxlengths:

* cpf - 11 chars
* cnpj - 14 chars
* cep - 8 chars
* brazilian-phone - 8 or 9 chars

After this, your string will format with the mask selected:

```html
111.111.111-11
```

## That's all folks

Any doubt, improvement or suggestion, contact me.

Cheers ;)
