// Function to dynamically add the provided card structure using jQuery
function addFeatureCard(imageSrc, title, description) {
  const cardContainer = $("<div>").addClass("col d-flex justify-content-center");
  const card = $("<div>").addClass("card object-fit").css("width", "18rem");
  const img = $("<img>").addClass("card-img-top h-75 object-fit-cover").attr({
    src: imageSrc,
    alt: title,
  });
  const cardBody = $("<div>").addClass("card-body");
  const cardTitle = $("<h5>").addClass("card-title").text(title);
  const cardText = $("<p>").addClass("card-text").text(description);
  const buttonContainer = $("<div>").addClass("d-flex justify-content-around");
  const moreInfoBtn = $("<a>")
    .addClass("btn btn-dark")
    .attr("href", "#")
    .text("More Info");
  const addToWishlistBtn = $("<a>")
    .addClass("btn btn-outline-secondary")
    .attr("href", "#")
    .text("Like");

  // Append elements to the card
  buttonContainer.append(addToWishlistBtn, moreInfoBtn);
  cardBody.append(cardTitle, cardText, buttonContainer);
  card.append(img, cardBody);

  // Append the card to the container
  cardContainer.append(card);
  $("#recipeContainer").append(cardContainer);
}

function addRankItem(rank, dish, points) {
  const row = $("<tr>");
  row.append(`<th scope="row">${rank}</th>`);
  row.append(`<td>${dish}</td>`);
  row.append(`<td>${points}</td>`);
  $("#rank-table").append(row);
}