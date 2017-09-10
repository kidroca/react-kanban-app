import React from 'react';
import LaneHeader from './LaneHeader';
import Notes from './Notes';

import connect from '../libs/connect';
import LaneActions from '../actions/LaneActions';
import NoteActions from '../actions/NoteActions';

const Lane = ({ lane, notes, LaneActions, NoteActions, ...props }) => {

  const activateNoteEdit = id => NoteActions.update({ id, editing: true });

  const editNote = (id, task) => NoteActions.update({ id, task, editing: false });

  const deleteNote  = (id, e) => {

    e.stopPropagation();

    LaneActions.detachFromLane({ laneId: lane.id, noteId: id });
    NoteActions.delete(id);
  };

  const laneNotes = lane.notes.map((noteId) => {

    return notes.find(note => note.id === noteId);
  });

  return (
    <div {...props}>

      <LaneHeader lane={lane} />

      <Notes notes={laneNotes}
             onNoteClick={activateNoteEdit}
             onEdit={editNote}
             onDelete={deleteNote} />
    </div>
  );
};

export default connect(
  ({notes}) => ({ notes }),
  { NoteActions, LaneActions }
)(Lane);
