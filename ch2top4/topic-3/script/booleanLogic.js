// AND: Mencari false yg pertama muncul dan mengembalikan nilainya
// Jika tidak ada false, atau semuanya ture, maka akan mengambil nilai true terakhir
// false: null, undefined, 0, ""string kosong
// true: number selain 0, string,{} array kosong, [] object kosong
const a = true;
const b = true;
const c = true;
const d = true;
const e = a && b && c && d && 1 && "" && 80;
console.log(e);

// OR: Mencari true yg pertama muncul dan mengembalikan nilainya
const f = false;
const g = a || b || "def";
console.log("g", g);