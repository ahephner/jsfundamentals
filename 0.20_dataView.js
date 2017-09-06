//provides low-level interface for reading and writing multiple number types in an arraybuffer

//syntax
//new DateView(buffer [, byteOffset [,byteLength]]);

//example

var littleEndian = (function(){
	var buffer = new ArrayBuffer(2);
	new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
		//Int16Array uses the platform's endianness. 
		return new Int16Array(buffer) [0] ===256;
	})();
console.log(littleEndian);