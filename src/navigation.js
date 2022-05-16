window.addEventListener("hashchange", navigator, false);
window.addEventListener("DOMContentLoad", navigator, false);
function navigator() {
  if (location.hash.startsWith("#trends")) {
    trendsPage();
  } else if (location.hash.startsWith("#search=")) {
    searchPage();
  } else if (location.hash.startsWith("#movie=")) {
    moviesDetails();
  } else if (location.hash.startsWith("#category=")) {
    categoriesPage();
  } else {
    homePage();
  }
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function homePage() {
  footer.classList.remove("inactive");
  bodyContainer.classList.remove("body-detail--container");
  headerContainer.classList.add("header-container");
  headerSection.classList.remove("header-container--long");
  headerSection.classList.remove("header-movie--detail");
  headerSection.style.background = "";
  arrowBtn.classList.add("inactive");
  arrowBtn.classList.remove("header-arrow--white");
  headerTitle.classList.remove("inactive");
  headerCategoryTitle.classList.add("inactive");
  searchForm.classList.remove("inactive");

  trendingPreviewSection.classList.remove("inactive");
  categoriesPreviewSection.classList.remove("inactive");
  genericSection.classList.add("inactive");
  movieDetailSection.classList.add("inactive");

  getTrendingMoviesPreview();
  getCategoriesPreview();
}

function categoriesPage() {
  footer.classList.remove("inactive");
  bodyContainer.classList.remove("body-detail--container");
  headerContainer.classList.add("header-container");
  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";
  arrowBtn.classList.remove("inactive");
  headerTitle.classList.add("inactive");
  arrowBtn.classList.remove("header-arrow--white");
  headerCategoryTitle.classList.remove("inactive");
  searchForm.classList.add("inactive");

  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");
  genericSection.classList.remove("inactive");
  movieDetailSection.classList.add("inactive");

  const [categoryHash, categoryData] = location.hash.split("=");
  const [categoryId, categoryName] = categoryData.split("-");
  headerCategoryTitle.innerHTML = categoryName + " Movies";
  getMoviesByCategory(categoryId);
}

function moviesDetails() {
  footer.classList.add("inactive");
  bodyContainer.classList.add("body-detail--container");
  headerContainer.classList.remove("header-container");
  headerSection.classList.remove("header-container--long");
  headerSection.classList.add("header-movie--detail");
  headerSection.style.background = "";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.add("header-arrow--white");
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.add("inactive");
  searchForm.classList.add("inactive");

  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");
  genericSection.classList.add("inactive");
  movieDetailSection.classList.remove("inactive");

  const [categoryHash, movieId] = location.hash.split("=");

  getMoviesDetails(movieId);
}

function trendsPage() {
  footer.classList.remove("inactive");
  bodyContainer.classList.remove("body-detail--container");
  headerContainer.classList.add("header-container");
  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.remove("header-arrow--white");
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.remove("inactive");
  searchForm.classList.add("inactive");

  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");
  genericSection.classList.remove("inactive");
  movieDetailSection.classList.add("inactive");
  headerCategoryTitle.innerHTML = "Trendings";
  getTrendingMovies();
}

function searchPage() {
  footer.classList.remove("inactive");
  bodyContainer.classList.remove("body-detail--container");
  headerContainer.classList.add("header-container");
  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.remove("header-arrow--white");
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.add("inactive");
  searchForm.classList.remove("inactive");

  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");
  genericSection.classList.remove("inactive");
  movieDetailSection.classList.add("inactive");

  const [categoryHash, query] = location.hash.split("=");
  getMoviesBySearch(query);
}

searchFormBtn.addEventListener("click", () => {
  location.hash = "#search=" + searchFormInput.value;
});
trendingBtn.addEventListener("click", () => {
  location.hash = "#trends";
});
arrowBtn.addEventListener("click", () => {
  history.back();
});
navigator();
