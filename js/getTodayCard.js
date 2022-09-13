const todayCards = document.querySelector("#today-cards");

export function getTextCard(cardArray) {
  const getCard = JSON.parse(localStorage.getItem(cardArray));

  const card = document.createElement("div");
  const cardEmoji = document.createElement("img");
  const cardText = document.createElement("p");
  const cardAuthor = document.createElement("p");
  const saveBtn = document.createElement("button");

  card.setAttribute("id", "today-card");
  cardEmoji.setAttribute("id", "emoji");
  cardText.setAttribute("id", "text");
  cardAuthor.setAttribute("id", "author");
  saveBtn.setAttribute("id", "save-btn");

  cardEmoji.setAttribute("src", `${getCard.emoji}`);

  cardText.style.fontFamily = `${getCard.font}`;
  cardText.innerText = getCard.text;

  cardAuthor.style.fontFamily = `${getCard.font}`;
  cardAuthor.innerText = getCard.author;

  saveBtn.innerText = "저장하기";

  todayCards.append(card);
  card.append(cardEmoji, cardText, cardAuthor, saveBtn);
}
