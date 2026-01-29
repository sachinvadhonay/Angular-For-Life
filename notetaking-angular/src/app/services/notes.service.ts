import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../model/note.model';

@Injectable({
  providedIn: 'root'
})

export class NotesServices{
private http = inject(HttpClient);
private baseurl = '/api/NotesTaking';

getAllNotes(): Observable<Note[]>{
    return this.http.get<Note[]>(this.baseurl);
}

downloadfiles(fileName: string)
{
  return this.http.get(`/api/NotesTaking/DownloadDocument/${fileName}`,{ responseType: 'blob' });
}

upoadNote(formData:FormData)
{
 return this.http.post(
  `${this.baseurl}/UploadNoteWithDetails`,formData
 );
}


deleteNote(id:Number)
{
   return this.http.delete(`${this.baseurl}/${id}`);
}
}

