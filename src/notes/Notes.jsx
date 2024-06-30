import NotesHeading from "./NotesHeading";
import NotesList from "./NotesList";

function Notes() {
  return (
    <section className="mx-24 my-8 p-6 rounded-2xl shadow-custom border-2 border-blue-100 divide-y-2">
      <NotesHeading />
      <NotesList />
    </section>
  );
}

export default Notes;
