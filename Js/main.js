
import CenaCarregamento from './cenaCarregamento.js';

import CenaPorta from        './cenasPorta/cenaPorta.js';
import CenaGaiola from       './cenasPorta/cenaGaiola.js'
import CenaPlantaVerde from  './cenasPorta/cenaPlantaVerde.js'

import CenaEstante from      './cenasEstante/cenaEstante.js';
import CenaLivros from       './cenasEstante/cenaLivros.js';
import CenaMesa1 from        './cenasEstante/cenaMesa1.js';
import CenaCaixa1 from       './cenasEstante/cenaCaixa1.js'
import CenaRetrato from      './cenasEstante/cenaRetrato.js';

import CenaEspelho from      './cenasEspelho/cenaEspelho.js';
import cenaEspelhoMesmo from './cenasEspelho/cenaEspelhoMesmo.js';

import CenaRelogio from      './cenasRelogio/cenaRelogio.js';
import CenaPulpito from      './cenasRelogio/cenaPulpito.js';
import CenaVela from         './cenasRelogio/cenaVela.js';
import CenaMesa3 from        './cenasRelogio/cenaMesa3.js'


const config = {
    type: Phaser.AUTO,
    width: 900,
    height: 550,
    parent: 'canvas',
    physics:{
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: false
        }
    },
    scene: [
        CenaCarregamento,
        CenaPorta,
        CenaGaiola,
        CenaPlantaVerde,
        CenaEstante,
        CenaLivros,
        CenaMesa1,
        CenaCaixa1,
        CenaRetrato,
        CenaEspelho,
        cenaEspelhoMesmo,
        CenaRelogio,
        CenaPulpito,
        CenaVela,
        CenaMesa3
    ]
}

const jogo = new Phaser.Game(config);