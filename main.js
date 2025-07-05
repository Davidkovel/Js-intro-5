// Task 1

console.log("---------- Task 1 ---------")

class Marker {
  constructor(color, inkPercentage) {
    this.color = color;
    this.inkPercentage = inkPercentage;
  }

  print(text) {
    let output = '';
    let inkLeft = this.inkPercentage;
    
    for (const char of text) {
      if (inkLeft <= 0) {
        console.log(`Чорнило закінчилось! Виведено: ${output}`);
        return;
      }
      
      if (char !== ' ') {
        inkLeft -= 0.5;
        if (inkLeft >= 0) {
          output += char;
        }
      } else {
        output += char;
      }
    }
    
    console.log(`%c${output}`, `color: ${this.color}`);
    this.inkPercentage = inkLeft;
    console.log(`Залишилось чорнила: ${this.inkPercentage.toFixed(1)}%`);
  }
}

class RefillableMarker extends Marker {
  constructor(color, inkPercentage) {
    super(color, inkPercentage);
  }

  refill(inkAmount) {
    if (inkAmount <= 0) {
      console.log('Кількість чорнила для заправки має бути більше 0');
      return;
    }
    
    this.inkPercentage += inkAmount;
    if (this.inkPercentage > 100) {
      this.inkPercentage = 100;
    }
    console.log(`Маркер заправлено. Поточний рівень чорнила: ${this.inkPercentage.toFixed(1)}%`);
  }
}

const simpleMarker = new Marker('Yellow', 10);
simpleMarker.print('Hello World starlett ');

const refillMarker = new RefillableMarker('red', 5);
refillMarker.print('This is a test for refillable marker.');
refillMarker.refill(50);
refillMarker.print('Now I have more ink to print this longer text!');


// Task 2

console.log("----------- Task 2 -------")

class ExtendedDate extends Date {
  constructor(...args) {
    super(...args);
  }

  getDateText() {
    const months = [
      'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
      'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'
    ];
    
    const day = this.getDate();
    const month = months[this.getMonth()];
    
    return `${day} ${month}`;
  }

  isFutureOrPresent() {
    const now = new Date();
    return this >= now;
  }

  isLeapYear() {
    const year = this.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  getNextDate() {
    const nextDate = new ExtendedDate(this);
    nextDate.setDate(nextDate.getDate() + 1);
    return nextDate;
  }
}

const myDate = new ExtendedDate(2023, 5, 15);

console.log(`Result: ${myDate.getDateText()}`);

console.log(`Is date present or future: ${myDate.isFutureOrPresent()}`);

console.log(`Is year leap: ${myDate.isLeapYear()}`);

const nextDate = myDate.getNextDate();
console.log(`Next date: ${nextDate.getDateText()}`);

const today = new ExtendedDate();

console.log(`Сьогодні: ${today.getDateText()}`);
console.log(`Чи сьогодні майбутнє/поточне: ${today.isFutureOrPresent()}`);
console.log(`Чи поточний рік високосний: ${today.isLeapYear()}`);
console.log(`Завтра буде: ${today.getNextDate().getDateText()}`);


// Task 3

console.log('-------------- Task 3 -----------')

class Employee {
  constructor(id, name, position, department, salary) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.department = department;
    this.salary = salary;
  }
}

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    let html = `
      <h2> Task 3 </h2>
      <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th>ID</th>
            <th>Ім'я</th>
            <th>Посада</th>
            <th>Відділ</th>
            <th>Зарплата</th>
          </tr>
        </thead>
        <tbody>
    `;

    this.employees.forEach(employee => {
      html += `
        <tr>
          <td>${employee.id}</td>
          <td>${employee.name}</td>
          <td>${employee.position}</td>
          <td>${employee.department}</td>
          <td>${employee.salary.toLocaleString()} грн</td>
        </tr>
      `;
    });

    html += `
        </tbody>
      </table>
    `;

    return html;
  }
}

const bankEmployees = [
  new Employee(1, 'Шевченко Андрій', 'Директор', 'Керівництво', 50000)
];

const empTable = new EmpTable(bankEmployees);

const tableHtml = empTable.getHtml();

document.getElementById('task3').innerHTML = tableHtml;

console.log("HTML код таблиці:");
console.log(tableHtml);

// Task 4

console.log("-------- Task 4 ---------")

class Employee2 {
  constructor(id, name, position, department, salary) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.department = department;
    this.salary = salary;
  }
}

class EmpTable2 {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    let html = `
      <h2> Task 4 </h2>

      <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th>ID</th>
            <th>Ім'я</th>
            <th>Посада</th>
            <th>Відділ</th>
            <th>Зарплата</th>
          </tr>
        </thead>
        <tbody>
    `;

    this.employees.forEach(employee => {
      html += `
        <tr>
          <td>${employee.id}</td>
          <td>${employee.name}</td>
          <td>${employee.position}</td>
          <td>${employee.department}</td>
          <td>${employee.salary.toLocaleString()} грн</td>
        </tr>
      `;
    });

    html += `
        </tbody>
      </table>
    `;

    return html;
  }
}

class StyledEmpTable extends EmpTable2 {
  constructor(employees) {
    super(employees);
  }

  getStyles() {
    return `
      <style>
        .styled-table {
          width: 80%;
          margin: 20px auto;
          border-collapse: collapse;
          font-family: Arial, sans-serif;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .styled-table th {
          background-color: #4CAF50;
          color: white;
          text-align: left;
          padding: 12px;
        }
        .styled-table td {
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }
        .styled-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        .styled-table tr:hover {
          background-color: #f1f1f1;
        }
      </style>
    `;
  }

  getHtml() {
    const parentHtml = super.getHtml();
    const styledHtml = parentHtml.replace(
      '<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">',
      '<table class="styled-table">'
    );
    return this.getStyles() + styledHtml;
  }
}

var bankEmployees2 = [
  new Employee2(1, 'Шевченко Андрій', 'Директор', 'Керівництво', 50000)
];

const styledEmpTable = new StyledEmpTable(bankEmployees2);

const styledTableHtml = styledEmpTable.getHtml();

document.getElementById('task4').innerHTML = styledTableHtml;

console.log(styledTableHtml);