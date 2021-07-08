//Задача 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
        this.fix = function() {
            this.state = this.state * 1.5;
        }
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//Задача 2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
        
        this.addBook = function(book) {
            if (book.state > 30) {
                this.books.push(book);
            }
        }

        this.findBookBy = function(type, value) {
            return this.books.find(book => (book[type] === value)) || null;        
        }

        this.giveBookByName = function(bookName) {
            let bookIndex = this.books.findIndex(book => (book.name === bookName));
            if (bookIndex > -1) {
                return this.books.splice(bookIndex, 1)[0];        
            } else {
                return null;
            }
        }
    }
}

//Задача 3

class Student {
    constructor(name) {
        this.name = name;
        this.marksList = {};
        
        this.addSubject = function(subject) {
            this.marksList[subject] = [];
        }
       
        this.addGrade = function(mark, subject) {
            if (mark > 5 || mark < 1) {
                return console.log("Ошибка, оценка должна быть числом от 1 до 5");
            } 
            if (!this.marksList[subject]) {
                this.addSubject(subject);
            }                
            this.marksList[subject].push(mark);
        }
       
        this.getAverageBySubject = function(subject) {
            if (!this.marksList[subject]) {
                return console.log("Несуществующий предмет");
            }
            let subjectMarks = this.marksList[subject];
            return +((subjectMarks.reduce((acc, x) => acc + x) / subjectMarks.length).toFixed(2));
        }
        
        this.getAverage = function() {
            let subjectsList = Object.keys(this.marksList);
            let sum = 0;
            subjectsList.forEach(subject => {
                sum += this.getAverageBySubject(subject);
            })
            return +(sum / subjectsList.length).toFixed(2);           
        }
    }
}

