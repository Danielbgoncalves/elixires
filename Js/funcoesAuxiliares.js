export function chamaCena(objeto, cenaOrigem, cenaDestino){
    objeto.on('pointerdown',()=>{
        cenaOrigem.cameras.main.fadeOut(200, 0, 0, 0, (camera, progress)=> {
            if (progress > 0.9) {
                cenaOrigem.scene.start(cenaDestino, {inventario: cenaOrigem.inventario, gameState: cenaOrigem.gameState});
            }
        }, cenaOrigem);
        
    });
}

export function inicializaIventarios(cena) {
    for (let i = 0; i < 6; i++) {
        let sprite = cena.physics.add.image(835, 80 + (i * 80), 'seta').setDepth(1);
        cena.spritesInventario[i] = sprite;
    }
}

export function updateIventario(cena) {
    for (let i = 0; i < 6; i++) {
        if (cena.inventario[i])
            cena.spritesInventario[i].setTexture(cena.inventario[i]);
        else 
            cena.spritesInventario[i].setTexture('seta');
    }
}

export function setasLaterais(cena){
    cena.setaEsq = cena.add.image(100, 275, 'seta');
    cena.setaEsq.setInteractive();
    cena.setaEsq.setVisible(false);
    cena.setaDir = cena.add.image(710, 275, 'seta');
    cena.setaDir.setInteractive();
    cena.setaDir.setVisible(false);
    cena.setaDir.angle = 180;
}

export function verificaCliqueNoInventario(cena, mouseX, mouseY, menorX, maiorX){
    if(mouseX > menorX && mouseX < maiorX){
        if( mouseY > 48 && mouseY < 116)
            cena.itemClicado = cena.inventario[0];
        else if (mouseY > 48 + 76*1 && mouseY < 116 + 76*1)
            cena.itemClicado = cena.inventario[1];
        else if (mouseY > 48 + 76*2 && mouseY < 116 + 76*2)
            cena.itemClicado = cena.inventario[2];
        else if (mouseY > 48 + 76*3 && mouseY < 116 + 76*3)
            cena.itemClicado = cena.inventario[3];
        else if (mouseY > 48 + 76*4 && mouseY < 116 + 76*4)
            cena.itemClicado = cena.inventario[4];
        else if (mouseY > 48 + 76*5 && mouseY < 116 + 76*5)
            cena.itemClicado = cena.inventario[5];
        else cena.itemClicado = 0;
    }
}