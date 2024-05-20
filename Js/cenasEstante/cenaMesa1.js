import {inicializaIventarios, updateIventario, chamaCena} from "../funcoesAuxiliares.js";

export default class cenaMesa1 extends Phaser.Scene{
    constructor(){
        super({
            key: 'CenaMesa1'
        });
    }

    init(data) {
        this.inventario = data.inventario;
        this.gameState = data.gameState;
    }
    preload(){}

    create(){
        this.add.image(450, 275, 'cenaMesa1');

        // caixa1
        this.caixa = this.add.image(532, 240, 'caixa1');
        this.caixa.setInteractive();

        this.spritesInventario = [];
        inicializaIventarios(this);
        updateIventario(this);

        // Logica da seta
        this.seta = this.add.image(450, 520, 'seta');
        this.seta.setInteractive();
        this.seta.angle = 270;

        chamaCena(this.seta, this, 'CenaEstante');
        chamaCena(this.caixa, this, 'CenaCaixa1');

    }

   
    update(){

    }

}