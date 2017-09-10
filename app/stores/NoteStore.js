import uuid from 'uuid';
import NoteActions from '../actions/NoteActions';

export default class NoteStore {

  constructor() {

    this.bindActions(NoteActions);

    this.notes = [
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
  }

  create(note) {

    this.setState({
      notes: [...this.notes, note]
    });
  }

  update(updatedNote) {

    this.setState({
      notes: this.notes.map((note) => {
        if (note.id === updatedNote.id) return { ...note, ...updatedNote };

        return note;
      })
    });

  }

  delete(id) {

    this.setState({
      notes: this.notes.filter(note => note.id !== id)
    });
  }
}