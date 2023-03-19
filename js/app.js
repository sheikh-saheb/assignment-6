const loadCategories =async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`
  const res = await fetch(url);
  const data = await res.json();
   displayNewsCategories(data.data.news_category)
}
const displayNewsCategories = (items) => {
  // console.log(items)
items.forEach(item => {
  //   console.log(item)
    const categoriesNews = document.getElementById('categories-news');
    const allNewsCategories = document.createElement('div');
    allNewsCategories.innerHTML = `
    <button onclick="categoriesNewsDetails('${item.category_id}')" class=" border border-0 bg-white fs-5">${item.category_name}</button>
    `
    
    categoriesNews.appendChild(allNewsCategories)
  });
};
loadCategories()