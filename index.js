class Heroi {
    constructor(nome, idade, classe, ataque){
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
        this.ataque = this.definirAtaque();
    }

    definirAtaque() {
        let ataque = "";
        if (this.classe === "guerreiro") {
            ataque = "machado";
        } else if (this.classe === "mago") {
            ataque = "magia";
        } else if (this.classe === "monge") {
            ataque = "artes marciais";
        } else if (this.classe === "ninja") {
            ataque = "shurikin";
        }else {
            ataque = "ERROR!!!";
        }
        return ataque;
    }

    escrever(){
        console.log(`o herói ${this.nome} de classe ${this.classe} atacou usando ${this.ataque}`)
    }
}

let heroi1 = new Heroi ("Willy", "15", "monge");

heroi1.escrever();

let heroi2 = new Heroi ("Taylor", "33", "mago");
heroi2.escrever();

let heroi3 = new Heroi ("Tony", "23", "guerreiro");
heroi3.escrever();

let heroi4 = new Heroi ("Sev", "17", "ninja");
heroi4.escrever();
