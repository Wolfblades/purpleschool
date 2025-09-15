let addressLat = 10;
let addressLong = 12;
let positionLat = 20;
let positionLong = 25;

let distance = Math.sqrt(Math.pow(positionLat, 2) + Math.pow(positionLong, 2)) + Math.sqrt(Math.pow(addressLat, 2) + Math.pow(addressLong, 2));
console.log(Math.round(distance));