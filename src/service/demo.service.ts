import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentModule } from 'src/app/app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  private readonly URL: string = 'https://69787246cd4fe130e3d8e494.mockapi.io/efewf/Demo';

  constructor(private http: HttpClient) { }

  createStudent(data: StudentModule):Observable<StudentModule> {
    return this.http.post<StudentModule>(this.URL, data);
  }

}
