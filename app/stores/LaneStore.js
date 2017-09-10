import LaneActions from '../actions/LaneActions';

export default class LaneStore {

  constructor() {

    this.bindActions(LaneActions);

    this.lanes = [];
  }

  create(lane) {

    lane.notes =  lane.notes || [];

    this.setState({
      lanes: [...this.lanes, lane]
    });
  }

  attachToLane({laneId, noteId}) {

    let attachSuccess = false;

    const lanes = this.lanes.map((lane) => {

      lane = detachIfAlreadyAttached({ lane, noteId });

      if (lane.id === laneId) {

        lane.notes = [...lane.notes, noteId];
        attachSuccess = true;
      }

      return lane;
    });

    this.setState({ lanes });

    if (!attachSuccess) {
      console.warn(`Attach failed, lane (id: ${laneId}) was not found`);
    }
  }

  detachFromLane({laneId, noteId}) {

    const lanes = this.lanes.map((lane) => {

      if (lane.id === laneId) {

        lane = detachIfAlreadyAttached({ lane, noteId });
      }

      return lane;
    });

    this.setState({ lanes });
  }
}

function detachIfAlreadyAttached({lane, noteId}) {

  if (lane.notes.includes(noteId)) {

    lane.notes = lane.notes.filter(id => id !== noteId);
  }

  return lane;
}
