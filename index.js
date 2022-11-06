const notes = [];

document.querySelector("form").onsubmit = (e) => {
  e.preventDefault();

  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const date = document.getElementById("date");

  console.log(title.value, description.value, date.value);

  if (
    !title.value &&
    title.value.trim() === "" &&
    !description.value &&
    description.value.trim() === "" &&
    !date.value &&
    date.value.trim() === ""
  ) {
    return console.log("invalid Inputs");
  }
  addNote(title.value, description.value, date.value);

  title.value="";
  description.value="";
  date.value="";
};

const addNote = (title, desc, date) => {
  const newNote = { title, desc, date, id: Date.now() };

  notes.push(newNote);
  displayNotes();
};

const displayNotes = () => {
  document.querySelectorAll("li").forEach((child) => child.remove());

  notes.forEach((note) => {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const div = document.createElement("div");
    const h5 = document.createElement("h5");
    const p = document.createElement("p");
    const caption = document.createElement("caption");
    const button = document.createElement("button");
    h5.innerText = note.title;
    p.innerText = note.desc;
    caption.innerText = note.date;
    button.innerText = "Delete";
    button.id = note.id;
    button.addEventListener("click", deleteNote);
    console.log(notes);
    div.appendChild(h5);
    div.appendChild(p);
    div.appendChild(caption);
    div.appendChild(button);
    li.appendChild(div);
    ul.appendChild(li);
    document.getElementById("notes").appendChild(ul);
  });
};

const deleteNote = (e) => {
  e.target.parentElement.parentElement.remove();
  const n1 = notes.filter((note) => note.id != e.target.id);
  notes.length = 0;

  n1.forEach((el) => {
    notes.push(el);
  });
};
