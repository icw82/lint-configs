# Конфигурации линтеров

## Установка

В директории, где расположены проекты:

```shell
git@github.com:icw82/lint-configs.git
```

В этой же директории создать файлы:

```shell
touch .eslintrc.yml
touch .stylelintrc.yml
```

Заполнить содержимое ```.eslintrc.yml```:

```yml
extends:
  - ./lint-configs/eslint/base.yml

overrides:
  - files:
    - '**/*.ts'
    - '**/*.tsx'
    extends:
      - ./lint-configs/eslint/ts.yml
```

Заполнить содержимое ```.stylelintrc.yml```:

```yml
extends:
  - ./lint-configs/stylelint/base.yml
```

## Использование
