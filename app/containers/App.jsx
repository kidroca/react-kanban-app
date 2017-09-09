import React, { Component } from 'react';
import uuid from 'uuid';

import Notes from '../components/Notes';

const notes = [
  {
    id: uuid.v4(),
    task: 'Learn React'
  },
  {
    id: uuid.v4(),
    task: 'Do laundry'
  },
  {
    id: uuid.v4(),
    task: 'Купи шунка на баба'
  }
];

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {notes}
  }

  render() {

    const { notes } = this.state;

    return (
            <div>
                <button onClick={this.addNote} className="add-note">+</button>
                <Notes notes={notes}
                       onNoteClick={this.activateNoteEdit}
                       onEdit={this.editNote}
                       onDelete={this.onDelete} />
            </div>
        );
  }

  addNote = () => {

    const { notes } = this.state;
    const newNote = {
      id: uuid.v4(),
      task: 'New Task'
    };

    this.setState({notes: [...notes, newNote]})
  };

  onDelete = (id, e) => {

    e.stopPropagation();

    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  };

  activateNoteEdit = (id) => {

    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.editing = true;
      }

      return note;
    });

    this.setState({ notes });
  };

  editNote = (id, task) => {

    const notes = this.state.notes.map(note => {

      if (note.id === id) {
        note.editing = false;
        note.task = task;
      }

      return note;
    });

    this.setState({ notes });
  }
}
