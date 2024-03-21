function calculate(temp, from, to) {
    let t, c;
    switch (from) {
        case 'C':
            switch (to) {
                case 'C':
                    t = temp;
                    c = 'C = C';
                    break;
                case 'F':
                    t = c2f(temp);
                    c = 'F = C * (9/5) + 32';
                    break;
                case 'K':
                    t = c2k(temp);
                    c = 'K = C + 273.15';
                    break;
                case 'R':
                    t = c2r(temp);
                    c = 'R = C * (9/5) + 32 + 459.67';
                    break;
                default:
                    t = "'to' invalido";
                    c = 'Error';
                    break;
            }
            break;
        case 'F':
            switch (to) {
                case 'C':
                    t = f2c(temp);
                    c = 'C = (F - 32) * 5/9';
                    break;
                case 'F':
                    t = temp;
                    c = 'F = F';
                    break;
                case 'K':
                    t = f2k(temp);
                    c = 'K = (F - 32) * 5/9 + 273.15';
                    break;
                case 'R':
                    t = f2r(temp);
                    c = 'R = F + 459.67';
                    break;
                default:
                    t = "'to' invalido";
                    c = 'Error';
                    break;
            }
            break;
        case 'K':
            switch (to) {
                case 'C':
                    t = k2c(temp);
                    c = 'C = K - 273.15';
                    break;
                case 'F':
                    t = k2f(temp);
                    c = 'F = K * (9/5) - 459.67';
                    break;
                case 'K':
                    t = temp;
                    c = 'K = K';
                    break;
                case 'R':
                    t = k2r(temp);
                    c = 'R = K * 9/5';
                    break;
                default:
                    t = "'to' invalido";
                    c = 'Error';
                    break;
            }
            break;
        case 'R':
            switch (to) {
                case 'C':
                    t = r2c(temp);
                    c = 'C = (R - 32 - 459.67) * 5/9';
                    break;
                case 'F':
                    t = r2f(temp);
                    c = 'F = R - 459.67';
                    break;
                case 'K':
                    t = r2k(temp);
                    c = 'K = R * 5/9';
                    break;
                case 'R':
                    t = temp;
                    c = 'R = R';
                    break;
                default:
                    t = "'to' invalido";
                    c = 'Error';
                    break;
            }
            break;
        default:
            t = "'from' invalido";
            c = 'error';
            break;
    }
    document.getElementById('conv').value = t;
    document.getElementById('formula1').innerHTML = c;
};

function c2f(c) {
    const fahrenheit = c * (9 / 5) + 32;
    return Math.round(fahrenheit * 100) / 100;
};

function c2k(c) {
    const kelvin = c + 273.15;
    return Math.round(kelvin * 100) / 100;
};

function c2r(c) {
    const rakine = (c + 273.15) * (9 / 5);
    return Math.round(rakine * 100) / 100;
};

function f2c(f) {
    const celsius = (f - 32) * 5 / 9;
    return Math.round(celsius * 100) / 100;
};

function f2k(f) {
    const kelvin = (f - 32) * 5 / 9 + 273.15;
    return Math.round(kelvin * 100) / 100;
};

function f2r(f) {
    const rankine = f + 459.67;
    return Math.round(rankine * 100) / 100;
};

function k2c(k) {
    const celsius = k - 273.15;
    return Math.round(celsius * 100) / 100;
};

function k2f(k) {
    const fahrenheit = k * (9 / 5) - 459.67;
    return Math.round(fahrenheit * 100) / 100;
};

function k2r(k) {
    const rankine = k * (9 / 5);
    return Math.round(rankine * 100) / 100;
};

function r2c(r) {
    const celsius = (r - 491.67) * 5 / 9;
    return Math.round(celsius * 100) / 100;
};

function r2f(r) {
    const fahrenheit = r - 459.67;
    return Math.round(fahrenheit * 100) / 100;
};

function r2k(r) {
    const kelvin = r * 5 / 9;
    return Math.round(kelvin * 100) / 100;
}; 