import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Note } from '../../model/note.model';
import { NotesServices } from '../../services/notes.service';

@Component({
  selector: 'app-notes',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit{
 
  ngOnInit(): void {
      this.loadNotes();
  }

  notes:Note[] =[];
  loading = true;


  private noteService = inject(NotesServices);

  loadNotes(): void{
    this.noteService.getAllNotes().subscribe({next:(data)=>{
        this.notes = data;
        this.loading = false;
      },
      error:() =>{
        alert('failed to Load notes');
        this.loading = false;
      }
    });
  }

  download(fileName: string) {
    this.noteService.downloadfiles(fileName).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();
    });
}

}
