import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('Notes') @observer
class Notesbody extends React.Component {

    NoteXML = ({content, id}, index) =>
        <li key={index} className="note__list--item">
            <div className="item--box" onClick={this.props.Notes.editNote}>
                <div className="item--content">{content}</div>
                <input className="item--input" type="text" onChange={this.props.Notes.changeNoteContent}></input>
                <div className="item--number">{index + 1}</div>
            </div>
            <button onClick={this.props.Notes.confirmChange}>Confirm</button>
            <button onClick={this.props.Notes.deleteNote}>Delete</button>
        </li>;

    render() {
    // const {BirdStore} = this.props;
        return (
            <React.Fragment>
                <ul className="note__list">
                    {
                        this.props.Notes.notes.map(this.NoteXML)
                    }
                </ul>
                <button className="add-note" onClick={this.props.Notes.addNote}>add note</button>
            </React.Fragment>
        );
    }
}

export default Notesbody;