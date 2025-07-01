import { PageTemplate } from "../templates/PageTemplate.js";
import { pageTitle } from "../ui/pageTitle.js";
import { placeholder } from "../ui/placeholder.js";

export class PageMovies extends PageTemplate {
    main() {
        return `
            <main>
                ${pageTitle('Movies')}
                ${placeholder('Filter', [
            'filtravimas, pagal:',
            'tekstine paieska is pavadinimo ir apraso',
            'pagal trukme',
            'pagal kategorija',
            'ivertinimas',
        ])}
                ${placeholder('Movie list', [
            'korteliu sarasas:',
            'nuotrauka',
            'pavadinimas',
            'trumpas aprasas',
            'trukme',
            'ivertinimas (zvaigzdutes)',
            'nuoroda i vidini puslapi',
            'filmo kategorija',
        ])}
            </main>`;
    }
}