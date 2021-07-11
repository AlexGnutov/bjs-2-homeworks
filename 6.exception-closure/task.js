//Задача №1
function parseCount(string) {
    let value = parseInt(string);
    if (isNaN(value)) {
        throw new Error('Невалидное значение');
    }
    return value;
}

function validateCount(value) {
    try {
        return parseCount(value);         
    } catch(e) {
        return e;
    } 
}

//Задача №2
class Triangle {
    constructor(a, b, c) {
        if ((a + b - c <= 0) || (a + c - b <= 0) || (b + c - a <= 0)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter() {
        return (this.a + this.b + this.c);
    }
    getArea() {
        let hP = this.getPerimeter() / 2;
        return +(Math.sqrt(hP * (hP - this.a) * (hP - this.b) * (hP - this.c)).toFixed(3));
    }
}

function getArea() {
    return "Ошибка! Треугольник не существует";
}
function getPerimeter() {
    return "Ошибка! Треугольник не существует";
}

const wrongTriangle = {getArea, getPerimeter}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return wrongTriangle;
    }
}




