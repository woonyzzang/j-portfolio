import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export default class BaseRepository {
    private REST_API_URL = '/assets/api';

    constructor(private httpClient: HttpClient) {}

    // getJSON(url: string): Promise<any> {
    //     const result = this.httpClient.get(`${this.REST_API_URL}/${url}`);
    //
    //     return new Promise((resolve) => {
    //         result.subscribe((data) => resolve(data));
    //     });
    // }

    getJSON(url: string): Observable<any> {
        return this.httpClient.get(`${this.REST_API_URL}/${url}`);
    }

    // getCommentByParameter(): Observable<any> {
    //     const param1 = new HttpParams().set('userId', '1');
    //
    //     // https://jsonplaceholder.typicode.com/posts?userId=1
    //     return this.httpClient.get('https://jsonplaceholder.typicode.com/posts', {params: param1});
    // }
}

// Angular9 HTTP ajax: https://www.techiediaries.com/angular/angular-9-8-tutorial-by-example-rest-crud-apis-http-get-requests-with-httpclient/
// Angular9 REST API Model Design: https://www.youtube.com/watch?v=rdLJNGZvlAA
