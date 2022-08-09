# localStorage Manager

## How it works?
This function runs JSON.stringify every time it sets a new key in your localStorage, and runs JSON.parse every time it gets a key from localStorage. It also enables multiple operations with just one call. For example, you can get multiple keys from your localStorage, with just one line and without worrying about JSON.parse for each one.

```javascript
const lS = require('lS');
```

------------

*The lS object has 3 functions: set, get, remove:*

### set:

The *set* function has two ways to be executed:

1. **Individual**:

In this case, the name of the key to save in localStorage will be mandatory a **string** or a **number** and the the value to save in your key will be mandatory.

Example:

```javascript
lS.set('email', 'test@test.com');
```
This will save in localStorage a key called "*email*" with the value being "*test@test.com*".

2. **Multiple**:

In this case, the function must receive only an **object**, containing at least two keys with their respective values.

Example:

```javascript
lS.set({
	name: 'Gabriel',
	age: 20,
});
```

This will save 2 different keys to your localStorage. The first with the key "*name*" and the value "*Gabriel*", and the second the key "*age*" with the value *20*.

------------

### get

The *get* function has two ways to be executed:

1. **Individual**:

In this case, the function must receive only a **string** or a **number** with the key of the localStorage you want to get.

Example:

```javascript
lS.get('email');
```
This will return the value of the "*email*" key stored in your localStorage. For example "*test@test.com*".

2. **Multiple**:

In this case, the function must receive only an **array**, containing at least two keys.

Example:

```javascript
lS.get(['name', 'age']);
```

This will return an **object** with at least two keys, each key being a key from the array you passed and their respective values.

Example:
```javascript
{
	name: "Gabriel",
	age: 20,
}
```

------------

### remove

The *remove* function has two ways to be executed:

1. **Individual**:

In this case, the function must receive only a **string** or a **number** being the key of the localStorage you want to remove.

Example:

```javascript
lS.remove('email');
```
This will remove the "*email*" key from your localStorage.

2. **Multiple**:

In this case, the function must receive only an **array**, containing at least two keys.

Example:

```javascript
lS.remove(['name', 'age']);
```

This will remove the "*name*" and "*age*" keys from your localStorage.


------------


------------


------------


# 🇧🇷 Gerenciador do localStorage

## Como funciona?
Essa função executa JSON.stringify toda vez que for definir uma nova chave no seu localStorage e executa JSON.parse toda vez que obtém uma chave de localStorage. Também possibilita várias operações com apenas uma chamada. Por exemplo, você pode pegar várias chaves do seu localStorage, com apenas uma linha e sem se preocupar com JSON.parse de cada uma.

------------

*O objeto lS possue 3 funções: set, get, remove:*

### set:

A função *set* tem duas maneiras de ser executada:

1. **Individual**:

Neste caso, a função receberá o nome da chave para salvar no localStorage que será obrigatoriamente uma **string** ou um **número** e o valor a ser salvo em sua chave será obrigatório.

Exemplo:

```javascript
lS.set('email', 'teste@teste.com');
```
Isso salvará no localStorage uma chave chamada "*email*" com o valor "*teste@teste.com*".

2. **Vários**:

Neste caso, o primeiro parâmetro é obrigatóriamente um **objeto**, contendo pelo menos duas chaves com seus respectivos valores, e o segundo parâmetro não é utilizado.

Exemplo:

```javascript
lS.set({
	nome: 'Gabriel',
	idade: 20,
});
```

Isso irá salvar 2 chaves diferentes no seu localStorage. a primeira com a chave "*nome*" e o valor "*Gabriel*", e a segunda com a chave "*idade*" e o valor *20*.

------------

### get

A função *get* tem duas maneiras de ser executada:

1. **Individual**:

Nesse caso, a função receberá obrigatoriamente uma **string** ou um **número** sendo a chave do localStorage que você deseja obter.

Exemplo:
```javascript
lS.get('email');
```
Isso retornará o valor da chave "*email*" armazenada em seu localStorage. Por exemplo "*teste@teste.com*".

2. **Vários**:

Nesse caso, a função receberá obrigatoriamente um **array** contendo pelo menos duas chaves.

Exemplo:

```javascript
lS.get(['name', 'age']);
```

Isso retornará um **objeto** com pelo menos duas chaves, sendo cada chave uma chave do array que você passou e seus respectivos valores.

Exemplo:
```javascript
{
	nome: "Gabriel",
	idade: 20,
}
```

------------

### remove

A função remove tem duas maneiras de ser executada:

1. **Individual**:

Nesse caso, a função receberá obrigatoriamente uma **string** ou um **número** sendo a chave do localStorage que você deseja remover.

Example:

```javascript
lS.remove('email');
```
Isso removerá a chave "*email*" do seu localStorage.

2. **Vários**:

Nesse caso, a função receberá obrigatoriamente um **array**, contendo pelo menos duas chaves.

Exemplo:

```javascript
lS.remove(['nome', 'idade']);
```

Isso removerá as chaves "*nome*" e "*idade*" do seu localStorage.
