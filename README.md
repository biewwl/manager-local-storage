# localStorage Manager

## How it works?
This function runs JSON.stringify every time it sets a new key in your localStorage, and runs JSON.parse every time it gets a key from localStorage. It also enables multiple operations with just one call. For example, you can get multiple keys from your localStorage, with just one line and without worrying about JSON.parse for each one.

------------

*The "lS" function can receive 3 parameters:*



1.  **Method**: a string, which can be one of 3 options: "s", "g", "r".

- The "s" option refers to **"localStorage.setItem"**.

- Option "g" refers to **"localStorage.getItem"**.

- The "r" option refers to **"localStorage.removeItem"**;

2. **ListOrKey**: an array, an object or a string.

3. **Value** (optional): is only used in individual setItem cases. It's the value you want to set in your localStorage.

### setItem:

The *setItem* function has two ways to be executed:

1. **Individual**:

In this case, the second parameter, (the name of the key to save in localStorage) will be mandatory a **string** and the third parameter (the value to save in your key) will be mandatory.

Example:

```javascript
lS('s', 'email', 'test@test.com');
```
This will save in localStorage a key called "*email*" with the value being "*test@test.com*".

2. **Multiple**:

In this case, the second parameter is necessarily an **object**, containing at least two keys with their respective values, and the third parameter is not used.

Example:

```javascript
lS('s', {
	name: 'Gabriel',
	age: 20,
});
```

This will save 2 different keys to your localStorage. The first with the key "*name*" and the value "*Gabriel*", and the second the key "*age*" with the value *20*.

------------

### getItem

The *getItem* function has two ways to be executed:

1. **Individual**:

In this case, the second parameter is a **string** or a **number** with the key of the localStorage you want to get.

Example:

```javascript
lS('g', 'email');
```
This will return the value of the "*email*" key stored in your localStorage. For example "*test@test.com*".

2. **Multiple**:

In this case, the second parameter is an **array**, containing at least two keys.

Example:

```javascript
lS('g', ['name', 'age']);
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

### removeItem

The *removeItem* function has two ways to be executed:

1. **Individual**:

In this case, the second parameter is a **string** or a **number** being the key of the localStorage you want to remove.

Example:

```javascript
lS('r', 'email');
```
This will remove the "*email*" key from your localStorage.

2. **Multiple**:

In this case, the second parameter is an **array**, containing at least two keys.

Example:

```javascript
lS('r', ['name', 'age']);
```

This will remove the "*name*" and "*age*" keys from your localStorage.


------------


------------


------------


# 🇧🇷 Gerenciador do localStorage

## Como funciona?
Essa função executa JSON.stringify toda vez que for definir uma nova chave no seu localStorage e executa JSON.parse toda vez que obtém uma chave de localStorage. Também possibilita várias operações com apenas uma chamada. Por exemplo, você pode pegar várias chaves do seu localStorage, com apenas uma linha e sem se preocupar com JSON.parse de cada uma.

------------

*A função "lS" pode receber 3 parâmetros:*



1. **Method**: uma string, que pode ser uma das 3 opções: "s", "g", "r".

- A opção "s" refere-se a **"localStorage.setItem"**.

- A opção "g" refere-se a **"localStorage.getItem"**.

- A opção "r" refere-se a **"localStorage.removeItem"**;

2. **ListOrKey**: um array, um objeto ou uma string.

3. **Value** (opcional): é usado apenas em casos individuais de *setItem*. É o valor que você deseja definir em seu localStorage.

### setItem:

A função *setItem* tem duas maneiras de ser executada:

1. **Individual**:

Neste caso, o segundo parâmetro (o nome da chave para salvar no localStorage) será obrigatoriamente uma **string** e o terceiro parâmetro (o valor a ser salvo em sua chave) será obrigatório.

Exemplo:

```javascript
lS('s', 'email', 'teste@teste.com');
```
Isso salvará no localStorage uma chave chamada "*email*" com o valor "*teste@teste.com*".

2. **Vários**:

Neste caso, o segundo parâmetro é necessariamente um **objeto**, contendo pelo menos duas chaves com seus respectivos valores, e o terceiro parâmetro não é utilizado.

Exemplo:

```javascript
lS('s', {
	nome: 'Gabriel',
	idade: 20,
});
```

This will save 2 different keys to your localStorage. The first with the key "*nome*" and the value "*Gabriel*", and the second the key "*idade*" with the value *20*.

------------

### getItem

A função *getItem* tem duas maneiras de ser executada:

1. **Individual**:

Nesse caso, o segundo parâmetro é uma **string** ou um **número** com a chave do localStorage que você deseja obter.

Exemplo:
```javascript
lS('g', 'email');
```
Isso retornará o valor da chave "*email*" armazenada em seu localStorage. Por exemplo "*teste@teste.com*".

2. **Vários**:

Nesse caso, o segundo parâmetro é um **array**, contendo pelo menos duas chaves.

Exemplo:

```javascript
lS('g', ['name', 'age']);
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

### removeItem

A função removeItem tem duas maneiras de ser executada:

1. **Individual**:

Nesse caso, o segundo parâmetro é uma **string** ou um **número** sendo a chave do localStorage que você deseja remover.

Example:

```javascript
lS('r', 'email');
```
Isso removerá a chave "*email*" do seu localStorage.

2. **Vários**:

Nesse caso, o segundo parâmetro é um **array**, contendo pelo menos duas chaves.

Exemplo:

```javascript
lS('r', ['nome', 'idade']);
```

Isso removerá as chaves "*nome*" e "*idade*" do seu localStorage.
