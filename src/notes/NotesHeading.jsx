import AddNewNoteBtn from "./AddNewNoteBtn";

function NotesHeading() {
  return (
    <header className="flex justify-between items-center pb-4">
      <div>
        <h1 className="sm:text-lg text-md font-semibold text-blue-100">My Notes</h1>
        <p className="md:text-base text-xs text-blue-100">
          Click on any notes to go to specific
          timestamp in the video.
        </p>
      </div>
      <AddNewNoteBtn />
    </header>
  );
}

export default NotesHeading;
