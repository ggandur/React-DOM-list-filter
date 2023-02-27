function filterNames() {
  let input = (
    document.getElementById("searchBar") as HTMLInputElement
  ).value.toLowerCase();
  const listItems = [
    ...(document.getElementsByClassName(
      "player_box"
    ) as HTMLCollectionOf<HTMLElement>),
  ];
  listItems.forEach((player) => {
    if (player.textContent?.toLowerCase().includes(input)) {
      player.style.display = "";
    } else {
      player.style.display = "none";
    }
  });
}

export default filterNames;
