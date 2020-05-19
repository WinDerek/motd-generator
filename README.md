# motd-generator

Generate the Message Of The Day file for Unix systems: `/etc/motd`.

## Usage

```shell
$ script -q /dev/null -c "node ." > motd
$ cat motd # Check if the output is as expected
```

Then you can move the generated file `motd` to `/etc/motd`.

> `script` is a utility program in Linux kernel and you do not need to install any other packages.
