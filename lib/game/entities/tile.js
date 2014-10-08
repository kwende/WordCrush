ig.module(
    'game.entities.tile'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityTile = ig.Entity.extend({
        gravityFactor: 10,
        settings: null,
        size: {x:50, y:50},
        animSheet: new ig.AnimationSheet('media/letters.png', 50, 50),
        init: function(x,y,settings){
            this.vel.y = 600;
            this.settings = settings; 
            this.collides = ig.Entity.COLLIDES.ACTIVE;
            
            var tileIndex = settings.tileIndex;
            this.addAnim('idle', 1, [tileIndex]); 
            
            console.log('in new tile, tile index is ' + tileIndex);
            
            this.parent(x,y,settings);
        },
    })
})