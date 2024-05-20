export default class CenaCarregamento extends Phaser.Scene{
    constructor(){
        super({
            key: 'CenaCarregamento'
        });
    }
    preload(){
        this.load.on('complete', () => {
            this.scene.start('CenaPorta');
        });

        //---------------------CenaPorta----------------------------------------
        this.load.image('cena1', 'Assets/cena1c.png');
        this.load.image('vazio', 'Assets/vazio.png');
        this.load.image('seta', 'Assets/seta.png');
        this.load.image('item', 'Assets/item.png');

        this.load.image('fotoPeq1','Assets/fotoPeq1.png');
        this.load.image('fotoPeq2','Assets/fotoPeq2.png');
        this.load.image('fotoPeq3','Assets/fotoPeq3.png');
        this.load.image('fotoPeq4','Assets/fotoPeq4.png');

        this.load.image('gaiola', 'Assets/cenaPorta/gaiola.png');
        this.load.image('plantaVerde', 'Assets/cenaPorta/plantaVerde.png' );

        // CenaGaiola
        this.load.image('cenaGaiola', 'Assets/cenaPorta/cenaGaiola.png');
        this.load.spritesheet('corvo-sprite', 'Assets/cenaPorta/corvo-sprite.png', {frameWidth: 300, frameHeight: 150});
        this.load.image('sprite-corvo', 'Assets/cenaPorta/sprite-corvo.png');
        this.load.image('ovo1', 'Assets/cenaPorta/ovo1.png')

        //cenaPlantaVerde
        this.load.image('cenaPlantaVerde', 'Assets/cenaPorta/cenaPlantaVerde.png')
        this.load.image('galho','Assets/cenaPorta/galho.png');
        this.load.image('galhoPeq','Assets/cenaPorta/galhoPeq.png');

        //--------------------CenaEstante-------------------------------------
        this.load.image('cena2', 'Assets/cena2c.png');
        this.load.image('portaRetrato', 'Assets/retratoClicavel.png')
        this.load.image('cenaMesa1', 'Assets/cenaEstante/cenaMesa1.png');
        this.load.image('mesa1', 'Assets/cenaEstante/mesa1.png');
        this.load.image('caixa1', 'Assets/cenaEstante/caixa1.png');
        this.load.image('livros', 'Assets/cenaEstante/livros.png')


        // CenaPortaRetrato
        this.load.image('fotoGrande1','Assets/fotoGrande1.png');
        this.load.image('fotoGrande2','Assets/fotoGrande2.png');
        this.load.image('fotoGrande3','Assets/fotoGrande3.png');
        this.load.image('fotoGrande4','Assets/fotoGrande4.png');
        this.load.image('fundoPortaRetrato', 'Assets/fundoPortaRetrato.png');
        this.load.image('chaveAmarela', 'Assets/chaveAmarela.png');

        // CenaMesa1

        // cenaCaixa1
        this.load.image('cenaCaixa1-fechada', 'Assets/cenaEstante/cenaCaixa1-fechada.png');
        this.load.image('cenaCaixa1-aberta', 'Assets/cenaEstante/cenaCaixa1-aberta.png');
        this.load.image('caixa-simb1', 'Assets/cenaEstante/caixa-simb1.png');
        this.load.image('caixa-simb2', 'Assets/cenaEstante/caixa-simb2.png');
        this.load.image('caixa-simb3', 'Assets/cenaEstante/caixa-simb3.png');
        this.load.image('caixa-simb4', 'Assets/cenaEstante/caixa-simb4.png');

        //cenaLivros
        this.load.image('cenaLivros', 'Assets/cenaEstante/cenaLivros.png');
        this.load.image('livro1','Assets/cenaEstante/livro1.png' );
        this.load.image('livro2','Assets/cenaEstante/livro2.png' );
        this.load.image('livro3','Assets/cenaEstante/livro3.png' );
        this.load.image('livro4','Assets/cenaEstante/livro4.png' );
        this.load.image('livro5','Assets/cenaEstante/livro5.png' );
        this.load.image('oUltElixir-dorso', 'Assets/cenaEstante/oUltElixir-dorso.png');
        this.load.image('oUltElixir-dorsoPeq', 'Assets/cenaEstante/oUltElixir-dorsoPeq.png');
        

        // ----------------------CenaEspelho--------------------
        // cenaEspelhoMesmo
        this.load.image('eldric', 'Assets/cenaEspelho/sprite-eldric.png');
        this.load.image('cenaEspelhoMesmo', 'Assets/cenaEspelho/cenaEspelhoMesmo.png');
        this.load.image('espelho', 'Assets/cenaEspelho/espelho.png');
        this.load.image('escondeEldric', 'Assets/cenaEspelho/escondeEldric.png');


        // -------------------- CenaRelogio---------------------
        this.load.image('pulpito', 'Assets/cenaRelogio/pulpito.png');
        this.load.image('cenaPulpito', 'Assets/cenaRelogio/cenaPulpito.png');
        this.load.image('mesa3', 'Assets/cenaRelogio/mesa3.png' )

        // CenaPulpito
        this.load.image('oUltElixir-0', 'Assets/cenaRelogio/oUltElixir-0.png');
        this.load.image('oUltElixir-1', 'Assets/cenaRelogio/oUltElixir-1.png' );
        this.load.image('oUltElixir-2', 'Assets/cenaRelogio/oUltElixir-2.png' );
        this.load.image('oUltElixir-3', 'Assets/cenaRelogio/oUltElixir-3.png' );
        this.load.image('oUltElixir-4', 'Assets/cenaRelogio/oUltElixir-4.png' );
        this.load.image('comida-corvo', 'Assets/cenaRelogio/comida-corvo.png' );
        this.load.image('comida-corvoPeq', 'Assets/cenaRelogio/comida-corvoPeq.png' );

        // CenaVela
        this.load.image('cenaVela', 'Assets/cenaRelogio/cenaVela.png' );
        this.load.image('vela', 'Assets/cenaRelogio/vela.png' );
        this.load.spritesheet('sprite-vela', 'Assets/cenaRelogio/sprite-vela.png', {frameWidth:13, frameHeight: 33});
        this.load.image('chaveCinza', 'Assets/cenaRelogio/chaveCinza.png' );
        this.load.image('chaveCinzaPeq', 'Assets/cenaRelogio/chaveCinzaPeq.png' );

        //CenaMesa3
        this.load.image('cenaMesa3', 'Assets/cenaRelogio/cenaMesa3.png' );
        this.load.image('gavetaAberta-cena4', 'Assets/cenaRelogio/gavetaAberta-cena4.png' );
        this.load.image('gavetaFechada-cena4', 'Assets/cenaRelogio/gavetaFechada-cena4.png' );




        

    }
}