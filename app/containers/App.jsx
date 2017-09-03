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
                <button onClick={this.addNote}>+</button>
                <Notes notes={notes} />
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
  }
}
