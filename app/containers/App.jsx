import React, { Component } from 'react';
import uuid from 'uuid';

import connect from '../libs/connect';
import Notes from '../components/Notes';
import NoteActions from '../actions/NoteActions';

class App extends Component {

  render() {

    const { notes } = this.props;

    return (
            <div>
              {this.props.test}
                <button onClick={this.addNote} className="add-note">+</button>
                <Notes notes={notes}
                       onNoteClick={this.activateNoteEdit}
                       onEdit={this.editNote}
                       onDelete={this.onDelete} />
            </div>
        );
  }

  addNote = () => {

    this.props.NoteActions.create({
      id: uuid.v4(),
      task: 'New Task'
    });
  };

  onDelete = (id, e) => {

    e.stopPropagation();
    this.props.NoteActions.delete(id);
  };

  activateNoteEdit = (id) => {

    const activated = {id, editing: true };
    this.props.NoteActions.update(activated);
  };

  editNote = (id, task) => {

    this.props.NoteActions.update({ id, task, editing: false });
  }
}

export default connect(({ notes }) => ({
  notes
}), {
  NoteActions
})(App);