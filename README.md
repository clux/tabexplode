# tabexplode [![Dependency Status](https://david-dm.org/clux/tabexplode.png)](https://david-dm.org/clux/tabexplode)

Simple streaming CLI to pipe a list of URLs to and they will open in your browser

## Usage
Obtain a list of URLs somehow, say google's search API:

```bash
# pugbomb self
$ curl -sS "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=pug&rsz=8"
  | json responseData.results
  | json -a unescapedUrl
  | tabexplode

# gif search
$ curl -sS "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&as_filetype=gif&safe=off&q=gameofthrones%20sausage"
  | json responseData.results
  | json -a unescapedUrl
  | tabexplode
```

Note that these examples requires a globally installed [jsontool](https://npmjs.org/package/jsontool).

## Installation

```bash
$ npm install -g tabexplode
```

## Running tests

```bash
$ cat test.txt | tabexplode
```

## License
MIT-Licensed. See LICENSE file for details.
