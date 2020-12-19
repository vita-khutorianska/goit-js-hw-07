//    <!-- Напиши скрипт, который для каждого элемента массива 
//     ingredients создаст отдельный li, 
//     после чего вставит все li за одну
//     операцию в список ul.ingredients.
//     Для создания DOM-узлов используй document.createElement()

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const ulIngredients = document.querySelector('#ingredients')
const createLi = ingredients.map(ingredient => {
  const liRef = document.createElement('li');
  liRef.textContent = ingredient;
  return liRef;
});
  ulIngredients.append(...createLi);