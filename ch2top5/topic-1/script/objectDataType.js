const stefhan = {
    name: "Stefhan Salim",
    address: {
        city: "Medan",
        province: "South Sumatera",
        contry: "Indonesia",
    },
    class: {
        id: 2,
        name: "Fullstack Web - 2",

    },
};

const ikmal = {
    name: "Hikmalul A'la",
    address: {
        city: "Cilacap",
        province: "Central Java",
        contry: "Indonesia",
    },
    class: {
        id: 2,
        name: "Fullstack Web - 2",

    },
}

console.log(stefhan);
console.log(ikmal);

ikmal.university = 'AMIKOM Purwokerto';
stefhan.fullname = 'Stefhan S.';

const describeStefhanV1 = 
    stefhan.fullname + 
    "is from " + 
    stefhan.address.city + 
    ", " + 
    stefhan.address.province + 
    " and he is student of " + 
    stefhan.class.name + "'s class";

const describeStefhanV2 = `${stefhan.fullname} is from ${stefhan.address.city}, ${stefhan.address.province} and he is student of ${stefhan.class.name} 's class`;

console.log(describeStefhanV1);
console.log(describeStefhanV2);