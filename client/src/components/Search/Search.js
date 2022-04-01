export class HashTable {
    constructor(size=53){
        this.keyMap = new Array(size)
    }
    _hash(key) {
    let total = 0
    let PRIME = 31
    for (let i = 0; Math.min(key.length, 100) > i; i++){
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total * PRIME + value) % this.keyMap.length
    }
  return total
}

set(key, value){
    let index = this._hash(key)
    if(!this.keyMap[index]){
        this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
}

get(key) {
     let index = this._hash(key)
        if(this.keyMap[index]) {
           for(let i = 0; this.keyMap[index].length > i; i++){
               if(this.keyMap[index][i][0] === key) {
                   return this.keyMap[index][i]
               }
           } 
        }  
        return undefined
    }

    values(){
        let valuesArr = []
        for(let i = 0; this.keyMap.length > i; i++) {
            if(this.keyMap[i]){
                for(let j = 0; this.keyMap[i].length > j; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                    valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        console.log(valuesArr)
    }

    keys(){
        let keysArr = []
        for(let i = 0; this.keyMap.length > i; i++) {
            if(this.keyMap[i]){
                for(let j = 0; this.keyMap[i].length > j; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                    keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        console.log(keysArr)
    }
}