import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class JackpotsService {

    getJackpots(): any {
        return [
            {
                "game": "NEJACKANDTHEBEANSTALK",
                "amount": 109633
            },
            {
                "game": "LEPABLOPICASSOSLOT",
                "amount": 52624
            },
            {
                "game": "NEFLOWERS",
                "amount": 32890
            },
            {
                "game": "NESTARBURST",
                "amount": 164450
            },
            {
                "game": "NEALIENS",
                "amount": 93971
            },
            {
                "game": "NETHEWISHMASTER",
                "amount": 54817
            },
            {
                "game": "XGMONEYSPINNER",
                "amount": 32890
            },
            {
                "game": "BSTHEEXTERMINATOR",
                "amount": 46986
            },
            {
                "game": "NYXSUPERMAN",
                "amount": 15298
            },
            {
                "game": "NYXTHEFLASH",
                "amount": 131560
            },
            {
                "game": "NYXWONDERWOMAN",
                "amount": 54817
            }
        ]
    }
}