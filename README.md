debouncer factory
=============

## Debouncer Factory
Factory function which returns debounce function.
## Installation
    $ npm install debouncer-factory
## Example
    
    window.liveSearch = Debouncer(function(word) {
        console.log('request sent', word);
    }, 1000);
    liveSearch('Baku');
## License
MIT
[![travis-build](https://img.shields.io/travis/ElmirMahmudov/debouncer.svg?style=flat-square)](https://travis-ci.com/ElmirMahmudov/debouncer)
![MIT License](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)
