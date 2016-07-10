# bem-tools-find-relations #
Bem tools plugin for find BEM entity relations


Инструмент для поиска зависимостей БЭМ сущьностей по заданным критериям

## Возможности ##

* Использование в качестве плагина к [bem-tools](https://github.com/bem/bem-tools)
* Возможность использования с помощью JS API

## Установка ##

Инструмент устанавливается как обычная npm-зависимость:
```
npm install bem-tools-find-relations
```

## Использование ##

### Использование с помощью CLI-интерфейса ###

```
./bin/bem find-relations --help
Tools to work with files written using the BEM methodology.
See https://bem.info for more info.

BEM Tool for find BEM entity relations

Usage:
    bem find-relations [OPTIONS] [ARGS]

Commands:
    completion : Shell completion

Options:
    -h, --help : Help
    -l LEVEL, --level=LEVEL : Name of level(s)
    -b BLOCK, --block=BLOCK : Name of block(s)
    -e ELEMENT, --element=ELEMENT : Name of element(s)
    -m MODIFIER, --mod=MODIFIER : Name of modifier(s)
```

Здесь:

* `-h`, `--help` - флаг, предназначенный для получения справочной информации по вызову команды.
* `-l`, `--level` - имя уровня(ей) переопределения блоков. Может быть использован несколько раз.
* `-b`, `--block` - имя блока(ов). Может быть использован несколько раз.
* `-e`, `--element` - имя элемента(ов) блока(ов). Может быть использован нескольео раз.
* `-m`, `--mod` - имя модификатора. Если указан также параметр элемента (`-e`, `--element`), то подразумевается выборка по модификаторам элементов блока. Если параметр элемента отсутствует, то будет произведена выборка по модификаторам блока.

### Использование инструмента с помощью JS API ###

`bem-tools-find-relations` так же может быть использован программно. Для этого нужно подключить зависимость
`bem-tools-find-relations` в модуль вашего проекта и передать параметры для поиска зависимостей БЭМ сущьности.

```
var bemToolsFindRelations = require('bem-tools-find-relations');

bemToolsFindRelations({
    levels: ['level1'],
    blocks: ['block1'],
    elements: ['elem1'],
    modifiers: ['mod1']
}).pipe(process.stdout); // здесь вместо `process.stdout` можно использовать ваш собственный stream.
```
Примечание: в передаваемом объекте с параметрами любые поля могут быть опущены в том случае, если критерий поиска по ним не является необходимым.

## Тестирование ##

Запуск тестов

```
npm run test
```