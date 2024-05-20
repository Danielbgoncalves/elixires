import {inicializaIventarios, updateIventario, chamaCena} from "../funcoesAuxiliares.js";

export default class cenaEspelho extends Phaser.Scene{
    constructor(){
        super({
            key: 'CenaEspelho'
        });
    }


    init(data) {
        this.inventario = data.inventario;
        this.gameState = data.gameState;
    }

    preload(){
            this.load.image('cena3', 'Assets/cena3c.png');
    }
    
    create(){
        this.cameras.main.fadeIn(400, 0, 0, 0);
        this.add.image(450, 275, 'cena3' );
        this.setaEsq = this.add.image(20, 275, 'seta');
        this.setaEsq.setInteractive();
        this.setaDir = this.add.image(790, 275, 'seta');
        this.setaDir.setInteractive();
        this.setaDir.angle = 180;

        this.spritesInventario = [];
        inicializaIventarios(this);
        updateIventario(this);

        // Setas
        chamaCena(this.setaEsq, this, 'CenaEstante');
        chamaCena(this.setaDir, this, 'CenaRelogio');

        this.input.on('pointerdown', ()=> {
            let mouseX = this.input.activePointer.x;
            let mouseY = this.input.activePointer.y;
            /*let menorX = 809;
            let maiorX = 877;*/

           // console.log('x: ', mouseX, 'y: ', mouseY);
            if(mouseX > 110 && mouseX < 650 && mouseY > 180 && mouseY < 300 )
                this.scene.start('CenaEspelhoMesmo', {inventario: this.inventario, gameState: this.gameState});
        });

    }

    update(){

       

    }
}