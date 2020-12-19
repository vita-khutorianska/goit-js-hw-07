const itemsRef = document.querySelectorAll("li.item")
console.log(`В списке ${itemsRef.length} категории.`);
itemsRef.forEach(item =>  {
  const titleRef = item.querySelector('h2');
  console.log(`Категория: ${titleRef.innerHTML}`);

  const subItemsFef = item.querySelectorAll('li');
  console.log(`Количество элементов: ${subItemsFef.length}`);
});