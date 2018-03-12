import {observable, action, computed, toJS} from 'mobx';
// DB
import { DatabaseConfig } from '../config/config';
import firebase from 'firebase';

class NotesStore {
    @observable newNoteContent;
    @observable notes = [{content: 'Welcome to the application, press on note to edit', id: undefined}];
    @observable isEditing = false;

    createObjectId = () => {
        for (let i = 0; i < this.notes.length; i++) {
            this.notes[i].id = i;
        }
    }

    @action addNote = () => {
        this.notes.push({content: '', id: undefined});
        this.createObjectId();
    }

    @action editNote = itemClickedOn => {
        if (this.isEditing === false) {
            this.isEditing = true;
            itemClickedOn.target.parentNode.parentNode.className = 'note__list--item editing';
        }
    }

    @action changeNoteContent = e => {
        this.newNoteContent = e.target.value;

        let noteId = e.currentTarget.parentNode.childNodes[2].innerHTML - 1;
        for (let note of this.notes) {
            if (note.id === noteId) {
                note.content = this.newNoteContent;
                console.log(toJS(this.notes));
            }
        }
    }

    @action confirmChange = confirmButton => {
        confirmButton.target.parentNode.className = 'note__list--item';
        
        this.isEditing = false;
    }

    @action deleteNote = noteToDelete => {
        noteToDelete.target.parentNode.className = 'note__list--item';
        this.isEditing = false;
        this.newNoteContent = '';
        
        let thisNoteId = noteToDelete.target.parentNode.childNodes[0].childNodes[2].innerHTML;
        this.notes.splice(thisNoteId - 1, 1);
        this.createObjectId();
        console.log(toJS(this.notes));
    }
}

const Notes = window.Notes = new NotesStore();
export default Notes;