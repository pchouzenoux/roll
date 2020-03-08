# Rolling dices

## Install

```sh
$ yarn install -g rolling-dices
```

## How to use

Basic roll
```sh
$ roll 1d10 + 3d6
Roll 1d10 + 3d6 = 14
```

Basic roll with detail
```sh
$ roll 1d10 + 3d6 --verbose
Roll 1d10 (6) + 3d6 (2, 2, 4) = 14
```

Include half and 5th
```sh
$ roll 1d10 + 3d6 --includeHalf --include5th
Roll 1d10 (6) + 3d6 (2, 2, 4) = 14
       Half   7
       5th    2
```