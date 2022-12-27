// simple hash functions
// A hash function is any function that can be used
// to map data of arbitrary size to fixed - size
// values.The values returned by a hash function
// are called hash values, hash codes, digests, or
// simply hashes.The values are usually used to
// index a fixed - size table called a hash table
var simple_hash = function (str, max) {
    // max : number of buckets that we re using
    // in our hash table to store values
    // hash :
    var hash = 0;
    for (var i = 0; i < str.length; i += 1) {
        hash += str.charCodeAt(i);
    }
    return hash % max; // return the remainder
    // the number will always return between 0 - max
};
var Hash_table = /** @class */ (function () {
    // max number of buckets
    // in the buckets we can have colision
    function Hash_table(storage_limit) {
        this.storage_limit = storage_limit;
        this.storage = new Array(this.storage_limit);
    }
    // some utiliyy functions to observe the hash table
    Hash_table.prototype.print = function () {
        console.log(this.storage);
    };
    // METHODS
    Hash_table.prototype.add = function (key, value) {
        var index = simple_hash(key, this.storage_limit);
        if (!this.storage[index]) {
            // if storage in this index is empty/undefined
            this.storage[index] = [[key, value]];
            return;
        }
        // if exist there re already buckets on that index
        var inserted = false;
        for (var i = 0; i < this.storage[index].length; i += 1) {
            // checking if the key is already exist in
            //  our hash tabel
            if (this.storage[index][i][0] === key) {
                // replacing the already existing value
                this.storage[index][i][1] = value;
                inserted = true;
                return; // stoppng the loop and the method
            }
        }
        if (inserted === false) {
            // if there re no such key
            this.storage[index].push([key, value]);
            return;
        }
    };
    Hash_table.prototype.find_value = function (key) {
        // look_up
        var index = simple_hash(key, this.storage_limit);
        //
        if (!this.storage[index])
            return null;
        for (var i = 0; i < this.storage[index].length; i += 1) {
            if (this.storage[index][i][0] === key) {
                return this.storage[index][i][1];
            }
        }
        return null;
    };
    Hash_table.prototype.remove = function (key) {
        var index = simple_hash(key, this.storage_limit);
        //
        if (this.storage[index] === undefined)
            return null;
        // if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
        //   // delete this.storage[index];
        //   // this.storage.splice(index, 1);
        // }
        for (var i = 0; i < this.storage[index].length; i += 1) {
            if (this.storage[index][i][0] === key) {
                var tempVal = this.storage[index].splice(i, 1);
                return tempVal;
                // from what i researched (GOOGLED) delete is not
                //  recommended to use to delete an element in an
                // array
                // delete this.storage[index][i];
            }
        }
    };
    return Hash_table;
}());
var hash_table1 = new Hash_table(10);
hash_table1.add("key1", 999999);
hash_table1.add("key2", 999999);
hash_table1.add("key3", 999999);
hash_table1.add("key4", 999999);
hash_table1.add("key6", 999999);
hash_table1.add("key5", 999999);
hash_table1.add("key7", 999999);
hash_table1.add("key11111", "WHAT");
// hash_table1.add("key20", 999999);
// hash_table1.add("key21", 999999);
hash_table1.print();
hash_table1.add("key1", 9246);
hash_table1.add("key6", 1111);
console.log(hash_table1.remove("key1"));
hash_table1.print();
console.log(hash_table1.find_value("key6"));
