let chr01 = {
  character: "亻",
  strokes: [
    "M 532 697 Q 460 531 279 320 Q 269 310 266 303 Q 262 291 277 294 Q 316 298 426 437 Q 436 450 449 465 L 472 494 Q 515 552 562 626 Q 592 678 618 705 Q 628 715 623 730 Q 619 743 589 768 Q 561 787 542 787 Q 523 786 531 762 Q 546 726 532 697 Z",
    "M 449 465 Q 473 399 475 391 Q 474 390 475 387 Q 481 239 453 119 Q 438 70 475 22 Q 476 19 480 16 Q 499 0 511 28 Q 526 70 526 118 Q 523 349 530 401 Q 537 429 527 440 Q 509 462 495 476 Q 485 486 472 494 C 447 511 439 493 449 465 Z",
  ],
};

let chr02 = {
  character: "查",
  strokes: [
    "M 534 624 Q 573 634 745 650 Q 757 647 767 662 Q 768 675 744 688 Q 699 715 638 694 Q 586 684 534 671 L 484 662 Q 421 653 363 647 Q 308 643 246 636 Q 213 633 238 613 Q 275 583 304 588 Q 364 600 437 610 L 534 624 Z",
    "M 534 671 Q 537 749 559 786 Q 566 796 553 810 Q 493 855 466 844 Q 451 840 458 824 Q 483 784 483 720 Q 483 690 484 662 L 483 578 Q 482 503 475 471 Q 474 455 480 438 Q 487 428 492 415 Q 502 399 518 408 Q 528 417 530 492 Q 526 537 528 592 L 534 671 Z",
    "M 437 610 Q 431 592 413 569 Q 359 499 299 451 Q 250 408 147 348 Q 128 336 145 333 Q 175 327 277 379 Q 349 428 402 478 Q 441 527 483 578 C 517 620 463 670 437 610 Z",
    "M 528 592 Q 721 384 770 371 Q 842 362 940 382 Q 959 385 961 390 Q 962 397 947 402 Q 895 421 833 440 Q 689 488 552 610 Q 542 619 534 624 C 510 642 498 624 528 592 Z",
    "M 350 338 Q 334 347 317 350 Q 310 353 306 347 Q 299 341 308 331 Q 338 286 349 184 Q 353 124 388 100 Q 389 100 391 99 Q 407 95 407 123 L 406 149 Q 405 168 397 190 Q 396 203 393 221 L 390 242 Q 386 275 386 301 Q 386 305 385 307 Q 385 308 386 309 C 386 320 377 324 350 338 Z",
    "M 581 135 Q 594 116 609 109 Q 619 102 634 123 Q 647 145 673 271 Q 682 302 704 327 Q 717 339 705 353 Q 689 369 647 394 Q 632 401 555 382 Q 548 382 443 358 Q 392 346 350 338 C 321 332 357 301 386 309 Q 455 330 575 350 Q 602 354 611 346 Q 623 333 621 318 Q 600 177 580 167 C 568 151 568 151 581 135 Z",
    "M 393 221 Q 397 218 558 238 Q 583 242 573 256 Q 563 271 535 276 Q 511 279 390 242 C 361 233 363 223 393 221 Z",
    "M 407 123 Q 411 123 419 123 Q 510 132 581 135 C 611 136 608 158 580 167 Q 577 168 574 169 Q 553 173 516 168 Q 458 158 406 149 C 376 144 377 123 407 123 Z",
    "M 183 32 Q 159 31 176 11 Q 191 -5 210 -12 Q 234 -19 252 -15 Q 483 34 849 12 Q 871 11 877 20 Q 884 33 866 49 Q 809 98 742 84 Q 565 60 183 32 Z",
  ],
};

let Chr1 = {
  character: "亻",
  definition: "man, person; people",
  pinyin: ["rén"],
  decomposition: "？",
  radical: "亻",
};

let Chr2 = {
  character: "查",
  definition: "to investigate, to examine, to look into",
  pinyin: ["chá"],
  decomposition: "⿱木旦",
  radical: "木",
};

let zhuang = {
  pos: "name",
  word: "Bouxcuengh",
  sound: "/pou˦˨ ɕuːŋ˧/",
  meaning: ["the Zhuang people"],
};

let rule = 2;

let c1 = "black";
let c2 = "black";

function setup() {
 createCanvas(580, 400);
  background(180);
  colorMode(HSB, 100);
  scale(0.8);
  displayInfo();
}

function displayInfo() {
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
  text("Decomposition: " + "⿰", width / 8 + 5, height / 5 + 100);
  if (rule == 1) {
    text("Rule: Semantic compound", width / 8 + 5, height / 5 + 150);
  } else if (rule == 2) {
    text("Rule: Phono-semantic compound", width / 8 + 5, height / 5 + 120);
  } else if (rule == 3) {
    text(
      "Rule: Character borrowed solely for pronunciations",
      width / 8 + 5,
      height / 5 + 150
    );
  } else if (rule == 4) {
    text(
      "Rule: Character borrowed solely for meanings",
      width / 8 + 5,
      height / 5 + 150
    );
  } else if (rule == 5) {
    text("Rule: Indicative ideogram", width / 8 + 5, height / 5 + 150);
  } else if (rule == 6) {
    text("Rule: Spell out the pronunciation", width / 8 + 5, height / 5 + 150);
  }
}

function displayCharacter() {
    scale(0.8);
   translate(200,100)
  fill(100);
  stroke(20);
  rect(width / 2, height / 2 - 150, 300, 300);
  stroke(20, 30);
  line(width / 2, height / 2, width / 2 + 300, height / 2);
  line(width / 2 + 150, height / 2 - 150, width / 2 + 150, height / 2 + 150);

  translate(width / 2, height / 2 + 120);

  push();
  scale(0.2, -0.3);
  translate(-100, 0);
  let ctx01 = drawingContext;
  ctx01.fillStyle = c1;
  ctx01.strokeStyle = c1;
  for (let j = 0; j < chr01.strokes.length; j++) {
    p = new Path2D(chr01.strokes[j]);
    ctx01.fill(p);
  }

  scale(1, 1);
  translate(500, 0);
  let ctx02 = drawingContext;
  ctx02.fillStyle = c2;
  ctx02.strokeStyle = c2;
  for (let j = 0; j < chr02.strokes.length; j++) {
    p = new Path2D(chr02.strokes[j]);
    ctx02.fill(p);
  }
  pop();
}

function draw() {
    scale(0.8);
  fill(100);
  stroke(20);
  if (
    mouseX > width / 2 &&
    mouseX < width / 2 + 100 &&
    mouseY > height / 2 - 150 &&
    mouseY < height / 2 + 150
  ) {
    rect(width / 8, height / 5 + 270, 250, 100);
    c1 = "red";
    c2 = "black";
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
    text("Pinyin: " + Chr1.pinyin, width / 8 + 5, height / 5 + 335);
  } else if (
    mouseX > width / 2 + 100 &&
    mouseX < width / 2 + 300 &&
    mouseY > height / 2 - 150 &&
    mouseY < height / 2 + 150
  ) {
    rect(width / 8, height / 5 + 270, 250, 100);
    c2 = "red";
    c1 = "black";
    noStroke();
    textSize(13);
    fill(20);
    text("Character: " + Chr2.character, width / 8 + 5, height / 5 + 290);
    text(
      "Definition: " + Chr2.definition,
      width / 8 + 5,
      height / 5 + 300,
      245,
      30
    );
    text("Pinyin: " + Chr2.pinyin, width / 8 + 5, height / 5 + 350);
  } else {
    c1 = "black";
    c2 = "black";
    rect(width / 8, height / 5 + 270, 250, 100);
  }

  displayCharacter();
}