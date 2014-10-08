ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	
	'game.entities.tile',
	
	'game.levels.first'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	init: function() {
		// Initialize your game here; bind keys etc.
		ig.input.bind(ig.KEY.MOUSE1, 'click');
		this.gravity = 100;
		
		this.loadLevel(LevelFirst);
		
		for(var y=0;y<7;y++){
			for(var x=0;x<8;x++){
				var randomIndex = Math.floor(Math.random() * 27);
				this.spawnEntity(EntityTile, x*50 + 100, y*50, { tileIndex: randomIndex});
			}
		}
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 600, 600, 1 );

});
