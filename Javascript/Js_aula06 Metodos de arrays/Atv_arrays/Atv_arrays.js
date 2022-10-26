// Exercicio 2
var array1 = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995]
console.log(array1);


console.log(array1.length)


console.log(array1[6]);


var x = array1.toString();
console.log(typeof x)
console.log(typeof array1)
console.log(x)


var y = array1.join(" / ")
console.log(array1)
console.log(x)
console.log(y)


var z = array1.unshift("IOS")
console.log(array1)
console.log(z)

console.clear()
// Exercicio 3
var array2 = [
    ["HTML", 1993, "CSS", 1996],
    ["Bootstrap", 2011, "JS", 1995],
    ["React", 2013, "Java", 1995],
]
console.log(array2);

console.log(array2.length)

console.log(array2[2][1]);

array2[1][2] = "JavaScript"
console.log(array2)

delete array2[2][2]
console.log(array2)

var u = array2.push('pipoca');
console.log(array2)
console.log(u)