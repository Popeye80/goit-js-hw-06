const categoriesList = categories.querySelectorAll('li.item');
const categoriesListArray = [...categoriesList];

const result = categoriesListArray
  .map(
    categories => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`,
  )
  .join('\n\n');

console.log(`Number of categories: ${categoriesList.length}`);
console.log(result);