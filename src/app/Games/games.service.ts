import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IGames } from "./games";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GamesService {

    private gamesURL = 'http://stage.whgstage.com/front-end-test/games.php';

    constructor(private http: HttpClient) { }

    getGames(): Observable<IGames[]> {
        return this.http.get<IGames[]>(this.gamesURL).pipe(
            tap(data => console.log('All' + JSON.stringify(data))), catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An Error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code ${err.status}, error message is: ${err.message}`;
        }
        return throwError(errorMessage);
    }
}