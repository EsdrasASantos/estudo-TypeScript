import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes:Negociacao[] = [];//<-atalho igual ->private negociacoes:Array<Negociacao> = [];

    adiciona(negociacao:Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[]{//<-atalho igual->lista():ReadonlyArray<Negociacao>
        return this.negociacoes;
    }
}