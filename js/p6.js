const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  }, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
  }, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
  }];

  // Create a definition list tag
const listElement = document.createElement("dl");

// For each word, a <dt> tag is built containing both term and definition
words.forEach(word => {
  const dtEle = document.createElement("dt");
  const strongEl = document.createElement("strong");
  strongEl.textContent = word.term;
  const ddEle = document.createElement("dd");
  ddEle.textContent = word.definition;

  listElement.appendChild(strongEl);
  listElement.appendChild(dtEle);
  listElement.appendChild(ddEle);
});

// Lastly, the DOM is update with the definition list
document.getElementById("content").appendChild(listElement);