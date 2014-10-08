ig.module( 'game.levels.first' )
.requires( 'impact.image' )
.defines(function(){
LevelFirst=/*JSON[*/{
	"entities": [],
	"layer": [
		{
			"name": "collision",
			"width": 12,
			"height": 12,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 50,
			"foreground": false,
			"data": [
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1]
			]
		},
		{
			"name": "level",
			"width": 12,
			"height": 12,
			"linkWithCollision": true,
			"visible": 1,
			"tilesetName": "media/stone.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 50,
			"foreground": false,
			"data": [
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1]
			]
		}
	]
}/*]JSON*/;
LevelFirstResources=[new ig.Image('media/stone.png')];
});