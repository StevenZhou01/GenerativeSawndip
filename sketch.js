let chr01 = {
  character: "地",
  strokes: [
    "M 292 431 Q 376 461 382 466 Q 389 475 384 482 Q 377 492 349 495 Q 321 496 295 483 Q 294 483 294 482 L 244 459 Q 154 429 124 423 Q 91 413 117 401 Q 151 389 224 409 Q 233 412 245 415 L 292 431 Z",
    "M 286 229 Q 290 334 292 431 L 294 482 Q 294 599 315 684 Q 318 696 296 711 Q 259 730 232 734 Q 214 738 206 728 Q 199 721 207 704 Q 237 662 237 634 Q 241 550 244 459 L 245 415 Q 245 318 242 211 C 241 181 285 199 286 229 Z",
    "M 242 211 Q 190 190 134 167 Q 118 160 88 157 Q 75 154 74 143 Q 73 130 84 122 Q 109 109 146 93 Q 156 92 168 102 Q 195 129 346 223 Q 367 236 382 250 Q 394 260 393 269 Q 387 273 375 270 Q 332 251 286 229 L 242 211 Z",
    "M 473 369 Q 513 393 580 428 L 627 454 Q 675 482 738 514 Q 757 521 762 510 Q 772 494 735 332 Q 731 289 700 300 Q 681 306 661 310 Q 648 311 651 304 Q 657 294 719 240 Q 741 216 757 237 Q 791 280 798 343 Q 808 406 818 470 Q 825 504 853 535 Q 863 551 848 562 Q 829 572 780 579 Q 761 582 749 569 Q 724 545 630 489 L 583 463 Q 541 444 497 421 Q 485 417 475 411 L 432 391 Q 377 369 341 355 Q 328 352 328 343 Q 328 336 369 326 Q 394 319 415 334 Q 419 338 432 345 L 473 369 Z",
    "M 580 428 Q 565 263 574 233 Q 580 220 590 226 Q 612 250 617 331 Q 621 395 627 454 L 630 489 Q 643 699 658 753 Q 668 774 655 787 Q 639 803 609 819 Q 585 829 560 820 Q 547 811 562 794 Q 586 742 589 696 Q 593 597 583 463 L 580 428 Z",
    "M 973 161 Q 958 201 944 318 Q 944 334 937 338 Q 931 341 927 324 Q 905 201 885 162 Q 869 135 811 120 Q 682 86 560 140 Q 512 165 497 197 Q 476 234 473 300 Q 472 333 473 369 L 475 411 Q 478 472 487 539 Q 491 557 479 566 Q 466 579 442 586 Q 429 590 421 585 Q 414 581 420 563 Q 435 526 433 488 Q 432 436 432 391 L 432 345 Q 433 221 451 176 Q 460 139 493 108 Q 604 20 811 49 Q 836 55 862 62 Q 916 80 966 121 Q 985 136 973 161 Z",
  ],
};

let Chr1 = {
  character: "地",
  definition:
    "earth, ground, soil; land, region; structural particle used before a verb",
  pinyin: ["dì"],
  decomposition: "⿰土也",
  radical: "土",
};

let zhuang = {
  pos: "noun",
  word: "doem",
  sound: "/tom˨˦/",
  meaning: ["soil; earth; dirt"],
};

let rule = 4;

let c1 = "black";

function setup() {
  //let cnv = createCanvas(580, 400);
 // cnv.id("zl");
  //background(180);
 // colorMode(HSB, 100);
//  scale(0.8);
  displayInfo();
}

function displayInfo() {
  background(180);
 colorMode(HSB, 100);
  scale(0.8);
  stroke(20);
  strokeWeight(1);
  fill(60, 60, 70);
  rect(width / 8, height / 5 - 40, 250, 40); //1
  rect(width / 8, height / 5 + 230, 250, 40); //3

  fill(100);
  textSize(20);
  text("Generative Sawndip", width / 8 + 5, height / 5 - 15);
  text("Chinese Character", width / 8 + 5, height / 5 + 255);
  rect(width / 8, height / 5, 250, 170); //2
  rect(width / 8, height / 5 + 270, 250, 100); //4

  noStroke();
  textSize(13);
  fill(20);
  text("Word: " + zhuang.word, width / 8 + 5, height / 5 + 20);
  text(
    "Definition: " + zhuang.meaning,
    width / 8 + 5,
    height / 5 + 30,
    245,
    50
  );
  text("Part-of-speech: " + zhuang.pos, width / 8 + 5, height / 5 + 60);
  text("Pronunciation: " + zhuang.sound, width / 8 + 5, height / 5 + 80);
  text("Decomposition: " + "NA", width / 8 + 5, height / 5 + 100);
  if (rule == 1) {
    text("Rule: Semantic compound", width / 8 + 5, height / 5 + 150);
  } else if (rule == 2) {
    text("Rule: Phono-semantic compound", width / 8 + 5, height / 5 + 150);
  } else if (rule == 3) {
    text(
      "Rule: Character borrowed solely for pronunciations",
      width / 8 + 5,
      height / 5 + 110,
      245,
      30
    );
  } else if (rule == 4) {
    text(
      "Rule: Character borrowed solely for meanings",
      width / 8 + 5,
      height / 5 + 110,
      245,
      30
    );
  } else if (rule == 5) {
    text("Rule: Indicative ideogram", width / 8 + 5, height / 5 + 120);
  } else if (rule == 6) {
    text("Rule: Spell out the pronunciation", width / 8 + 5, height / 5 + 150);
  }
}

function displayCharacter() {
  scale(0.8);
  translate(200, 100);
  fill(100);
  stroke(20);
  rect(width / 2, height / 2 - 150, 300, 300);
  stroke(20, 30);
  line(width / 2, height / 2, width / 2 + 300, height / 2);
  line(width / 2 + 150, height / 2 - 150, width / 2 + 150, height / 2 + 150);

  translate(width / 2, height / 2 + 120);

  push();
  scale(0.2, -0.3);
  translate(280, 0);
  let ctx01 = drawingContext;
  ctx01.fillStyle = c1;
  ctx01.strokeStyle = c1;
  for (let j = 0; j < chr01.strokes.length; j++) {
    p = new Path2D(chr01.strokes[j]);
    ctx01.fill(p);
  }
  pop();
}

function draw() {
  scale(0.8);
  fill(100);
  stroke(20);
  if (
    mouseX > width / 2 &&
    mouseX < width / 2 + 300 &&
    mouseY > height / 2 - 150 &&
    mouseY < height / 2 + 150
  ) {
    rect(width / 8, height / 5 + 270, 250, 100);
    c1 = "red";
    noStroke();
    textSize(13);
    fill(20);
    text("Character: " + Chr1.character, width / 8 + 5, height / 5 + 290);
    text(
      "Definition: " + Chr1.definition,
      width / 8 + 5,
      height / 5 + 300,
      245,
      20
    );
    text("Pinyin: " + Chr1.pinyin, width / 8 + 5, height / 5 + 332);
  } else {
    c1 = "black";
    rect(width / 8, height / 5 + 270, 250, 100);
  }

  displayCharacter();
}
