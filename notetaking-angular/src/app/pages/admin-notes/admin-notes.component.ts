import { Component, inject, OnInit } from '@angular/core';
import { Note } from '../../model/note.model';
import { NotesServices } from '../../services/notes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-notes',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-notes.component.html',
  styleUrl: './admin-notes.component.css'
})
export class AdminNotesComponent implements OnInit{


notes: Note[]=[];

noteForm: any = {
    notesname: '',
    weekdays: '',
    dtDate: '',
    description: ''
  };

  selectedFile: File | null = null;

  private noteservice = inject(NotesServices);

  ngOnInit(): void {
     this.LoadNotes();
  }

LoadNotes()
{
  this.noteservice.getAllNotes().subscribe(
    {
      next:data => this.notes = data,
      error:() => alert('Failed to load resources')
    });
}

onFileChange(event:any)
{
  this.selectedFile = event.target.files[0];
}

 addNote() {
    if (!this.selectedFile) {
      alert('Please select a document');
      return;
    }

    const formData = new FormData();
    formData.append('notesname', this.noteForm.notesname);
    formData.append('weekdays', this.noteForm.weekdays);
    formData.append('dtDate', this.noteForm.dtDate);
    formData.append('description', this.noteForm.description);
    formData.append('file', this.selectedFile);

    this.noteservice.upoadNote(formData).subscribe({
      next: () => {
        alert('Note added successfully');
        this.noteForm = {};
        this.selectedFile = null;
        this.LoadNotes();
      },
      error: () => alert('Failed to add note')
    });
  }


  download(fileName: string) {
    this.noteservice.downloadfiles(fileName).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();
    });
  }

  deleteNote(id:Number)
  {
    if(!confirm('Are you sure you want to delete thsi note?')) return;

    this.noteservice.deleteNote(id).subscribe({
       next: () => {
        alert('Note deleted');
        this.LoadNotes();
      },
      error: () => alert('Delete failed')
    });
  }
}
