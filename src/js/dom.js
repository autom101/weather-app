import magnify from "../img/magnify.svg";

const createSearch = () => {
  const searchForm = document.createElement("form");
  searchForm.setAttribute("action", "");
  searchForm.setAttribute("id", "search-form");

  const searchLabel = document.createElement("label");
  searchLabel.setAttribute("for", "city");
  searchLabel.textContent = "City Name: ";

  const searchContainer = document.createElement("div");
  searchContainer.classList.add("search-container");

  const searchInput = document.createElement("input");
  searchInput.setAttribute("id", "city");
  searchInput.setAttribute("name", "city");
  searchInput.setAttribute("maxLength", "85");

  const searchSubmit = document.createElement("button");
  searchSubmit.setAttribute("type", "submit");

  const searchIcon = document.createElement("img");
  searchIcon.src = magnify;
  searchIcon.classList.add("search-icon");

  searchSubmit.appendChild(searchIcon);

  searchForm.appendChild(searchLabel);
  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchSubmit);

  searchForm.appendChild(searchContainer);

  document.body.appendChild(searchForm);
};

const createDom = () => {
  createSearch();
};

export default createDom;