import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../model/note.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   private baseUrl = '/api/NotesTaking';

  constructor(private http:HttpClient) { }

  getNotes(): Observable<Note[]>{
    return this.http.get<Note[]>(this.baseUrl);
  }


  DownloadFile(fileName:string)
  {
    return this.http.get(
       `/api/NotesTaking/download/${fileName}`,
       {responseType:'blob'}
    )
  }
}
