import React from 'react';
import uuid from 'uuid';
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

  const addNote = (e) => {

    e.stopPropagation();

    const noteId = uuid.v4();

    NoteActions.create({
      id: noteId,
      task: 'New Task'
    });

    LaneActions.attachToLane({
      laneId: lane.id,
      noteId
    })
  };

  const laneNotes = lane.notes.map((noteId) => {

    return notes.find(note => note.id === noteId);
  });

  return (
    <div {...props}>
      <div className="lane-header">
        <div className="lane-add-note">
          <button onClick={addNote}>+</button>
        </div>

        <div className="lane-name">{lane.name}</div>
      </div>

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
