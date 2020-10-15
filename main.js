function icao() {

let input = document.getElementById("input").value;
input = input.toUpperCase();

let convert = {
    A: 'Alfa',
    B: 'Bravo',
    C: 'Charlie',
    D: 'Delta',
    E: 'Echo',
    F: 'Foxtrot',
    G: 'Golf',
    H: 'Hotel',
    I: 'India',
    J: 'Juliet',
    K: 'Kilo',
    L: 'Lima',
    M: 'Mike',
    N: 'November',
    O: 'Oscar',
    P: 'Papa',
    Q: 'Quebec',
    R: 'Romeo',
    S: 'Siera',
    T: 'Tango',
    U: 'Uniform',
    V: 'Victor',
    W: 'Whiskey',
    X: 'Xray',
    Y: 'Yankee',
    Z: 'Zulu',
    '1': "One",
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine',
    '0': 'Zero'
};

let divid = input.split("");
for (let i = 0; i <= divid.length; i++) {

if (divid[i] in convert) {

let result = (convert[divid[i]]);
document.getElementById("output").innerHTML += `${result +"&nbsp;"} `;

}

}

}