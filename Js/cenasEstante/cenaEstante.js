import {inicializaIventarios, updateIventario, chamaCena} from "../funcoesAuxiliares.js";

export default class cenaEstante extends Phaser.Scene{
    constructor(){
        super({
            key: 'CenaEstante'
        });
    }

    init(data) {
        this.inventario = data.inventario;
        this.gameState = data.gameState;
    }

    preload(){}
    
    create(){
        //this.inventario.push('alavanca');
        this.cameras.main.fadeIn(400, 0, 0, 0);
        this.add.image(450, 275, 'cena2' );

        //setas
        this.setaEsq = this.add.image(20, 275, 'seta');
        this.setaEsq.setInteractive();
        this.setaDir = this.add.image(790, 275, 'seta');
        this.setaDir.setInteractive();
        this.setaDir.angle = 180;

        //retrato
        this.portaRetrato = this.add.image(610,260, 'portaRetrato');
        this.portaRetrato.setInteractive();

        //livros
        this.livros = this.add.image(569, 317, 'livros');
        this.livros.setInteractive();

        //mesinha 
        this.mesa = this.add.image(195,393, 'mesa1');
        this.mesa.setInteractive();

        this.spritesInventario = [];
        inicializaIventarios(this);
        updateIventario(this);

        

        // Clique nas setas
        chamaCena(this.setaEsq, this, 'CenaPorta');

        chamaCena(this.setaDir, this, 'CenaEspelho');

        // Clique no porta retrato
        chamaCena(this.portaRetrato, this,'CenaRetrato');

        // Clique na mesinha
        chamaCena(this.mesa, this,'CenaMesa1');

        // Clique nos livros
        chamaCena(this.livros, this,'CenaLivros');

    }

    inicializaIventarios() {
        for (let i = 0; i < 6; i++) {
            let sprite = this.physics.add.image(835, 80 + (i * 80), 'seta').setDepth(1);
            this.spritesInventario[i] = sprite;
        }
    }

    updateIventario() {
        for (let i = 0; i < 6; i++) {
            if (this.inventario[i])
                this.spritesInventario[i].setTexture(this.inventario[i]);
            else 
                this.spritesInventario[i].setTexture('seta');
        }
    }

    update(){

    }
}