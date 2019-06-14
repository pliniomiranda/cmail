import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class HeaderDataService{
    atualizarTermoDeFiltro(novoValor: string) {
        this.valorDoFiltro.next(novoValor)
    }

    valorDoFiltro = new Subject<string>();

    constructor(){
        this.atualizarTermoDeFiltro('')
    }

    
}