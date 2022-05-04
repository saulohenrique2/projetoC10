var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","c4e310e0-8174-4127-a46e-0cbcc94b488b","c4247e6c-400b-4ad8-8849-0e40d3a2fec3","e8febefd-2ed8-4d5e-9316-bc7129a79792","cf66b9b7-a2e7-4901-93ca-5579eabd2693","dee64b32-f929-482d-af1e-d74830297ed7","99e9d68a-8d4e-442a-b99a-32ca843c84e1","221f908f-f7f6-4a52-9116-0aeae340748d","514f0413-7e1c-43cc-97ba-f96245d5f414"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"sKdfuIrT05.pIw6swmDvZZIiPaxiycpc","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"UmIQjQWJ698HCN9eP8psziTYhNlwdQrl","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ei4F5nZY3yrQjE6QSLXngTRDskwz62Lx","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"c4247e6c-400b-4ad8-8849-0e40d3a2fec3":{"name":"aviao2","categories":["vehicles"],"frameCount":1,"frameSize":{"x":400,"y":204},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-05 19:46:48 UTC","pngLastModified":"2021-01-05 19:46:30 UTC","version":"AkPntWLk9HxNojWtwSRbTYfIufpDkzqi","sourceUrl":null,"sourceSize":{"x":400,"y":204},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/c4247e6c-400b-4ad8-8849-0e40d3a2fec3.png"},"e8febefd-2ed8-4d5e-9316-bc7129a79792":{"name":"alien1","categories":["retro"],"frameCount":1,"frameSize":{"x":299,"y":365},"looping":true,"frameDelay":3,"jsonLastModified":"2021-01-05 19:32:02 UTC","pngLastModified":"2021-01-05 19:31:54 UTC","version":"AJFOO2mOf.6fzqG9AwpOSuXKq65MpLsr","sourceUrl":"assets/api/v1/animation-library/gamelab/AJFOO2mOf.6fzqG9AwpOSuXKq65MpLsr/category_retro/retrocreature_13.png","sourceSize":{"x":299,"y":365},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/AJFOO2mOf.6fzqG9AwpOSuXKq65MpLsr/category_retro/retrocreature_13.png"},"cf66b9b7-a2e7-4901-93ca-5579eabd2693":{"name":"alien2","categories":["retro"],"frameCount":1,"frameSize":{"x":365,"y":365},"looping":true,"frameDelay":4,"jsonLastModified":"2021-01-05 19:31:07 UTC","pngLastModified":"2021-01-05 19:31:25 UTC","version":"B6mUms6yflHdiaD7nVfqAGRzs7rymc12","sourceUrl":"assets/api/v1/animation-library/gamelab/B6mUms6yflHdiaD7nVfqAGRzs7rymc12/category_retro/retrocreature_01.png","sourceSize":{"x":365,"y":365},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/B6mUms6yflHdiaD7nVfqAGRzs7rymc12/category_retro/retrocreature_01.png"},"dee64b32-f929-482d-af1e-d74830297ed7":{"name":"alien3","categories":["retro"],"frameCount":1,"frameSize":{"x":332,"y":365},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:31:21 UTC","pngLastModified":"2021-01-05 19:31:05 UTC","version":"yVdK6mSKgtCffa.HVc0fCFHqwZ2vvW5H","sourceUrl":"assets/api/v1/animation-library/gamelab/yVdK6mSKgtCffa.HVc0fCFHqwZ2vvW5H/category_retro/retrocreature_20.png","sourceSize":{"x":332,"y":365},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/yVdK6mSKgtCffa.HVc0fCFHqwZ2vvW5H/category_retro/retrocreature_20.png"},"99e9d68a-8d4e-442a-b99a-32ca843c84e1":{"name":"b","categories":["backgrounds"],"frameCount":1,"frameSize":{"x":400,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:38:56 UTC","pngLastModified":"2021-01-05 18:39:01 UTC","version":"GTrVmut4s5PswM6hx254yCcDWLNhhmVk","sourceUrl":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png","sourceSize":{"x":400,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png"},"221f908f-f7f6-4a52-9116-0aeae340748d":{"sourceSize":{"x":246,"y":205},"frameSize":{"x":246,"y":205},"frameCount":1,"frameDelay":12,"name":"net","sourceUrl":null,"size":9778,"version":"LFLSewXedh1DNZQiXOe.iJJXF47.QXOz","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/221f908f-f7f6-4a52-9116-0aeae340748d.png"},"514f0413-7e1c-43cc-97ba-f96245d5f414":{"name":"aviao","categories":["vehicles"],"frameCount":1,"frameSize":{"x":112,"y":75},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:46:22 UTC","pngLastModified":"2021-01-05 19:46:34 UTC","version":"zFVGNRWF8rd6TAAffIX0n_fD.xUmD7Wp","sourceUrl":"assets/api/v1/animation-library/gamelab/zFVGNRWF8rd6TAAffIX0n_fD.xUmD7Wp/category_vehicles/playerShip2_red.png","sourceSize":{"x":112,"y":75},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/zFVGNRWF8rd6TAAffIX0n_fD.xUmD7Wp/category_vehicles/playerShip2_red.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 b.setAnimation("b");
var hero = createSprite(200,345,200,345);
hero.shapeColor="red";

var enemy1 = createSprite(200,250,10,10);
enemy1.shapeColor="red";

var enemy2 = createSprite(200,150,10,10);
enemy2.shapeColor="red";

var enemy3 = createSprite(200,50,10,10);
enemy3.shapeColor="red";

var net = createSprite(200,10,200,40);
net.shapeColor="red";

var goal =0;
var death = 0;

hero.setAnimation("aviao");
hero.scale=.6;
enemy1.setAnimation("alien1");
enemy1.scale=.1;
enemy2.setAnimation("alien2");
enemy2.scale=.1;
enemy3.setAnimation("alien3");
enemy3.scale=.1;
net.setAnimation("net");
net.scale=.3;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);

playSound("assets/category_loops/faultering_desicion_loop1.mp3",true);


function draw() {
  
//plano de fundo(b);



createEdgeSprites();


hero.bounceOff(edges);

enemy1.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);

if(keyDown(UP_ARROW)){
  hero.y=hero.y-3;
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+3;
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-3;
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+3;
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_hits/retro_game_simple_impact_2.mp3");
  hero.x=200;
  hero.y=350;
  death = death+1;
  goal=goal-1;
  
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  hero.x=200;
  hero.y=345;
  goal=goal+1;
}

drawSprites();

textSize(20);
  fill("black");
  text("pontos:"+goal,300,350);
  

textSize(20);
  fill("red");
  text("mortes:"+death,20,350);
  
  if(hero.isTouching(net))
  text("você venceu,200,200");
  fill("black");
textSize(20);

}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
