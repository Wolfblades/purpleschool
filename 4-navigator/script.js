let addressLat = 10;
let addressLong = 12;
let positionLat = 20;
let positionLong = 25;

let distance = Math.sqrt(Math.pow(addressLat - positionLat, 2) + Math.pow(addressLong - positionLong, 2));
console.log(Math.round(distance));