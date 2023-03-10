// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list');// список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления

// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`;

// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);

fruitsList.innerHTML = '';


/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек


const display = () => {

for (let i = 0; i < fruits.length; i++) {

  const li = document.createElement("li");
  const newLi = fruitsList.appendChild(li);
  
  
  const div = document.createElement("div");
  div.className = "fruit __ info";
  newLi.appendChild(div);

  li.className = "fruit__item";
    if (i==0) {
      li.classList.add("fruit_violet");
    }
    if (i==1) {
      li.classList.add("fruit_green");
    }if (i==2) {
      li.classList.add("fruit_carmazin");
    }if (i==3) {
      li.classList.add("fruit_yellow");
    }if (i==4) {
      li.classList.add("fruit_lightbrown");     
    }
    
for (k = 0; k < Object.keys(fruits[i]).length; k++) {
        
  const div2 = document.createElement("div");
  const divindex = div.appendChild(div2);
        const objKey = Object.keys(fruits[i])[k];
        const objVal = Object.values(fruits[i])[k];
        const textContent = divindex.appendChild(document.createTextNode((objKey + ':' + objVal)));
    }
   
    }
  }
  // TODO: очищаем fruitsList от вложенных элементов,
  // чтобы заполнить актуальными данными из fruits

  
    // TODO: формируем новый элемент <li> при помощи document.createElement,
    // и добавляем в конец списка fruitsList при помощи document.appendChild
  

// первая отрисовка карточек
display();

/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// перемешивание массива

const shuffleFruits = () => {
let result = [];
  

// ATTENTION: сейчас при клике вы запустите бесконечный цикл и браузер зависнет
  while (fruits.length > 0) {
  
  let elFruits=getRandomInt(0, fruits.length -1);
   console.log(elFruits);
   result.push(fruits[elFruits]);
   console.log(result);
   fruits.splice(elFruits,1);
    console.log(fruits)
   }
   
   // TODO: допишите функцию перемешивания массива
    //
    // Подсказка: находим случайный элемент из fruits, используя getRandomInt
    // вырезаем его из fruits и вставляем в result.
    // ex.: [1, 2, 3], [] => [1, 3], [2] => [3], [2, 1] => [], [2, 1, 3]
    // (массив fruits будет уменьшатся, а result заполняться)
  

    if (fruits = result) {
       alert("Порядок не изменился.");
      } else {
          return shuffleFruits();
      }
  
 }  


shuffleButton.addEventListener('click', () => {
  fruitsList.innerHTML = shuffleFruits();    
  display();
  
});


/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
const maxweight = document.querySelector('.maxweight__input').values;
const minweight = document.querySelector('.minweight__input').values;


const filterFruits = () => {
 

  //if(maxweight !=='')
  //    return arrNew;

 // if(minweight !=='') {
   //   return arrNew;
 // }
  
 fruits.filter((item) => {
  let arrNew = [];
   
 
   (item[2]>=minweight & item[2]<=maxweight) 

   fruits.splice(item,1);
   arrNew.push(item);
   

  return arrNew;
  })  
           
  }        

          

  // TODO: допишите функцию
  filterButton.addEventListener('click', () => {
  filterFruits();
  display();
});






/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  return a === 'male' ? true : false;
};
  // TODO: допишите функцию сравнения двух элементов по цвету
//};

const sortAPI = {
  bubbleSort(arr, comparation) {
    // TODO: допишите функцию сортировки пузырьком
  },

  quickSort(arr, comparation) {
    // TODO: допишите функцию быстрой сортировки
  },

  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
  },
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
});

sortActionButton.addEventListener('click', () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  // TODO: создание и добавление нового фрукта в массив fruits
  // необходимые значения берем из kindInput, colorInput, weightInput
  display();
});
