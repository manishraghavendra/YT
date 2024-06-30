import { useNotes } from "../contexts/NotesContext";
import { usePlayer } from "../contexts/PlayerContext";
import { formatTime } from "../helpers/formattedDate";

function Timestamp({ note }) {
  const { player } = usePlayer();
  const { time } = useNotes();

  return (
    <p className="text-sm font-normal text-blue-100">
      Timestamp : {""}
      <span
        className="font-medium text-violet-300 cursor-pointer"
        onClick={() => player.seekTo(note?.timestamp)}
      >
        {formatTime(!note?.id ? time : note.timestamp)}
      </span>
    </p>
  );
}

export default Timestamp;
