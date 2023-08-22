const arr_buff = new ArrayBuffer(6);

// contigous memory --> ArrayBuffer

// ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00>, byteLength: 6 }
//The ArrayBuffer object is used
// to represent a generic raw binary data buffer.

// It is an array of bytes, often referred to in
// other languages as a "byte array".You cannot
// directly manipulate the contents of an
// ArrayBuffer; instead, you create one of the typed
//  array objects or a DataView object which
// represents the buffer in a specific format, and
//  use that to read and write the contents of the
// buffer.

//ArrayBuffer objects can be made resizable by including the maxByteLength option when calling the ArrayBuffer() constructor. You can query whether an ArrayBuffer is resizable and what its maximum size is by accessing its resizable and maxByteLength properties, respectively. You can assign a new size to a resizable ArrayBuffer with a resize() call. New bytes are initialized to 0.

// computer store stuff in bits
// 8 bits is different then 16 bits
// 16 bits require more space

const a8 = new Uint8Array(arr_buff);
console.log(arr_buff);
console.log(a8);
a8[0] = 45;
console.log(arr_buff);
console.log(a8);
a8[2] = 999;
console.log(arr_buff);
console.log(a8);

const a16 = new Uint16Array(arr_buff);
a16[2] = 0x4545;
console.log(arr_buff);
console.log(a16);
a16[2] = 0x5423;
console.log(arr_buff);
console.log(a16);
