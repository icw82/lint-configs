# Конфигурации линтеров

## Установка

В директории, где расположены проекты:

```shell
git clone git@github.com:icw82/kk-lint-configs.git
```

В этой же директории создать файлы:

```shell
touch .eslintrc.yml
touch .stylelintrc.yml
```

Заполнить содержимое ```.eslintrc.yml```:

```yml
extends:
  - ./kk-lint-configs/eslint/base.yml

overrides:
  - files:
    - '**/*.ts'
    - '**/*.tsx'
    extends:
      - ./kk-lint-configs/eslint/ts.yml
```

Заполнить содержимое ```.stylelintrc.yml```:

```yml
extends:
  - ./kk-lint-configs/stylelint/base.yml
```

## Использование
