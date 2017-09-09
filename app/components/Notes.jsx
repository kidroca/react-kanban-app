import React from 'react';

import Note from './Note';
import Editable from './Editable';

export default ({
  notes,
  onNoteClick = () => {},
  onEdit = () => {},
  onDelete = () => {}
}) => {

  const noteItems = notes.map(({id, editing, task}) => (
    <li key={id}>
      <Note className="note" onClick={onNoteClick.bind(null, id)}>
        <Editable editing={editing}
                  value={task}
                  onEdit={onEdit.bind(null, id)} />
        <button className="delete" onClick={onDelete.bind(null, id)}>x</button>
      </Note>
    </li>
  ));

  return <ul className="notes">{noteItems}</ul>;
}

