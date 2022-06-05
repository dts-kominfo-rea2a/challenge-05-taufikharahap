const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (arrayNama, callbackSort) => {
    let hasilArray = [];

    callbackSort(arrayNama);
    for (let index = 0; index < arrayNama.length; index++) {
        hasilArray.push(index + 1 + "." + " " + arrayNama[index]);
    }
    return hasilArray;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (arrayNama) => {
    return arrayNama.sort();
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (arrayNama) => {
    return arrayNama.reverse();
};

console.log(sorter(names, sortAscending));
console.log(sortAscending(names));
console.log(sortDescending(names));

// ! JANGAN DIMODIFIKASI
// (function main() {
//   console.log(sorter?.(names, sortAscending)?.join("\n"));
//   console.log(sorter?.(names, sortDescending)?.join("\n"));
// })();

// module.exports = {
//   sorter,
//   sortAscending,
//   sortDescending,
//   names,
// };
