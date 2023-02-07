function filterNames() {
  let input = (
    document.getElementById("searchBar") as HTMLInputElement
  ).value.toLowerCase();
  const listItems = document.querySelectorAll("li");
  listItems.forEach((player) => {
    if (player.textContent?.toLowerCase().includes(input)) {
      player.style.display = "";
    } else {
      player.style.display = "none";
    }
  });
}

export default filterNames;
