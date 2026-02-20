export default function scroll() {
  const divCharacter = document.getElementById("div-character");

  if (divCharacter) {
    divCharacter.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

