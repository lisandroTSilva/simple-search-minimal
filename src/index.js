import "./styles.css";

const search = (seletor) => {
  const search = document.querySelector(seletor);
  let time = 0;

  search.addEventListener("keyup", (e) => {
    clearTimeout(time);

    time = setTimeout(() => {
      const ref = document.querySelector(search.dataset.ref);
      const elements = ref.querySelectorAll(search.dataset.searchIn);
      elements.forEach((el) => {
        el.classList.remove("hide-search");
        if (
          !el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          el.classList.add("hide-search");
        }
      });
    }, 300);
  });
};

search("#pesquisa");
