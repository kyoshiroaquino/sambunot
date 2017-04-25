var w = 800, h = 600;
var sound;
var game = new Phaser.Game(w, h, Phaser.CANVAS, '');
var player, bg, bg1, bg2;
var keyboard;
var bounds = 10000;

var basicGame = function(){

}

basicGame.prototype = {
	preload: function(){
			

			game.load.image('bg','img/clouds.png');
			game.load.image('bg1','img/mountainBlack.png');
			game.load.image('bg2','img/trees.png');
			game.load.spritesheet('soccer','img/soccer.png',150,150);
			game.load.spritesheet('stone','img/stone.png',130,130);



	},

	create: function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.world.setBounds(0,0,bounds,600);
		game.stage.backgroundColor = '#697e96';

		bg = game.add.tileSprite(0,game.height - game.cache.getImage('bg').height-50,bounds,game.height-50,'bg');
			bg1 = game.add.tileSprite(0,game.height-game.cache.getImage('bg1').height,bounds,game.height-50,'bg1');
				bg2 = game.add.tileSprite(0,game.height-game.cache.getImage('bg2').height,bounds,game.height-50,'bg2');
				


				player = game.add.sprite(600,520,'soccer');
				game.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN);
    			player.scale.x = 0.8;
    			player.scale.y = 0.8;

    				game.physics.enable(player);
    				player.body.collideWorldBounds = true;
    					

    					player.animations.add('walk',[30,31,32,33,34,31,32],10,true);

    			stone = game.add.sprite(200,490,'stone');
    			stone.fixedToCamera = true;
    			game.physics.enable(stone);
    			stone.body.collideWorldBounds = true;

    					stone.animations.add('roll',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],10,true);

						
    	
    
	},

	update: function(){
		keyboard = game.input.keyboard.createCursorKeys();
			if(keyboard.right.isDown){
				player.body.velocity.x = 80;
				bg.tilePosition.x -= 0.2;
				bg1.tilePosition.x -=0.6;
				bg2.tilePosition.x -=2;
				player.animations.play('walk');
				stone.animations.play('roll');
			}
			else{
				player.animations.stop();
				player.body.velocity.x = 0;
				player.frame = 0;
				stone.animations.stop();
				
			}
			
		
	}
}	

game.state.add("playergame", basicGame,true);
