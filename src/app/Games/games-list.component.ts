import { Component, OnInit } from "@angular/core";
import { IGames } from "./games";
import { GamesService } from "./games.service";
import { JackpotsService } from "./jackpots.service";

@Component({
    selector: 'app-games',
    templateUrl: './games-list.component.html',
    styleUrls: ['./games-list.component.css'],
})

export class GamesListComponent implements OnInit {

    _listFilter: string = '';

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredGames = this.listFilter ? this.filterGames(this.listFilter) : this.games;
    }

    filteredGames: IGames[] = [];
    games: IGames[] = [];
    errorMessage: string = '';
    jackpots = this.jackpotsService.getJackpots();

    constructor(private gamesService: GamesService, private jackpotsService: JackpotsService) {

        this.listFilter = 'new';
    }

    ngOnInit(): void {
        this.gamesService.getGames().subscribe({
            next: games => {
                this.games = games;
                this.filteredGames = this.games;
            },
            error: err => this.errorMessage = err
        });

    }

    setListFilter(filter: string): void {
        this.listFilter = filter;
    }

    filterGames(filterBy: string): IGames[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.games.filter((game: IGames) => game.categories.includes(filterBy));
    }



}