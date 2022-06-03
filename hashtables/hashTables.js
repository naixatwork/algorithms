class HashTable {
    tableSize = 20000;
    table = new Array(this.tableSize);

    hashFunction = (string) => {
        let hash = 17;

        for (let i = 0; i < string.length; i++) {
            hash = (13 * hash * string.charCodeAt(i)) % this.tableSize
        }
        console.log(hash);
        return hash;
    }

    setItem = (key, value) => {
        const index = this.hashFunction(key);
        if (this.table[index]) {
            this.table[index].push([key, value])
        } else {
            this.table[index] = [[key, value]];
        }
    }

    getItem = (key) => {
        const index = this.hashFunction(key);
        console.log(index);
        if (!this.table[index]) {
            return null;
        }

        // O(n)
        return this.table[index].find(x => x[0] === key)[1];
    }
}

const myTable = new HashTable();

myTable.setItem("firstName", "anon");
myTable.setItem("lastName", "at somewhere");
myTable.setItem("age", 5);
myTable.setItem("dob", "1/2/3");
console.log(myTable.table);
console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));