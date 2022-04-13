## Examples of Generative Characters

Choose a word!

<select>
        <option value="zhuangpeople">Zhuang people</option>
        <option value="sawndip">Sawndip</option>
        <option value="zhuanglanguage">Zhuang language</option>
        <option value="hanchinese">Han Chinese</option>
        <option value="me">I, me</option>
        <option value="you">You</option>
        <option value="heaven">Heaven</option>
        <option value="earth">Earth</option>
        <option value="water">Water</option>
        <option value="mountain">Mountain</option>

</select>

Use your mouse to see the used Chinese characters

<script value="zhuangpeople">
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
  createCanvas(800, 600);
  background(180);
  colorMode(HSB, 100);
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
</script>
<script value=value="sawndip">
let chr01 = {
  character: "書",
  strokes: [
    "M 657 521 Q 672 572 685 601 L 710 646 Q 722 664 736 674 Q 755 692 740 711 Q 724 726 671 754 Q 652 763 630 755 Q 576 737 527 726 L 468 715 Q 395 705 317 701 Q 301 700 302 691 Q 303 682 322 675 Q 347 663 382 673 Q 425 680 469 686 L 523 694 Q 560 701 600 706 Q 628 712 638 700 Q 648 688 638 635 L 628 599 Q 618 566 608 536 C 599 507 648 492 657 521 Z",
    "M 685 601 Q 710 601 929 602 Q 950 602 955 611 Q 961 623 943 637 Q 886 682 817 664 Q 768 657 710 646 L 638 635 Q 583 629 520 620 L 471 614 Q 296 595 97 575 Q 75 574 91 555 Q 106 540 124 534 Q 146 528 163 533 Q 293 567 442 583 Q 455 586 472 586 L 519 591 Q 568 597 628 599 L 685 601 Z",
    "M 516 482 Q 579 489 659 494 Q 669 495 671 504 Q 671 510 657 521 C 635 540 635 540 608 536 Q 605 536 517 519 L 472 511 Q 384 498 311 491 Q 292 490 303 471 Q 310 462 319 459 Q 329 455 343 458 Q 392 468 472 477 L 516 482 Z",
    "M 512 379 Q 582 389 644 395 Q 669 398 661 412 Q 651 428 624 434 Q 594 440 513 421 L 470 412 Q 403 400 345 390 Q 327 386 347 370 Q 362 358 392 363 Q 431 369 468 373 L 512 379 Z",
    "M 510 319 Q 511 350 512 379 L 513 421 Q 514 452 516 482 L 517 519 Q 517 556 519 591 L 520 620 Q 520 650 522 678 Q 522 687 523 694 L 527 726 Q 528 745 541 793 Q 545 805 523 820 Q 486 839 461 843 Q 445 846 436 837 Q 429 830 437 813 Q 467 770 467 740 Q 467 728 468 715 L 469 686 Q 470 652 471 614 L 472 586 Q 472 550 472 511 L 472 477 Q 471 446 470 412 L 468 373 Q 467 345 466 313 C 465 283 509 289 510 319 Z",
    "M 466 313 Q 330 297 172 277 Q 153 276 167 259 Q 180 246 198 240 Q 217 236 234 239 Q 438 297 823 297 Q 842 297 847 306 Q 851 316 836 330 Q 787 369 750 360 Q 659 342 510 319 L 466 313 Z",
    "M 353 197 Q 340 203 307 209 Q 294 212 291 206 Q 284 200 293 183 Q 326 116 344 7 Q 348 -26 367 -48 Q 386 -70 391 -54 Q 395 -42 395 -26 L 392 6 Q 392 9 380 73 L 376 98 Q 367 147 365 166 C 362 194 362 194 353 197 Z",
    "M 607 -11 Q 608 -12 610 -14 Q 631 -47 649 -55 Q 659 -62 675 -41 Q 690 -16 718 118 Q 728 149 751 175 Q 764 188 753 202 Q 737 220 694 246 Q 678 255 608 239 Q 563 236 353 197 C 324 192 336 159 365 166 Q 453 188 607 206 Q 638 209 653 198 Q 666 188 664 168 Q 640 27 627 12 C 615 -15 601 -3 607 -11 Z",
    "M 380 73 Q 387 72 400 73 Q 509 89 590 98 Q 612 99 605 113 Q 595 126 571 132 Q 547 136 376 98 C 347 92 350 75 380 73 Z",
    "M 395 -26 Q 405 -29 419 -27 Q 480 -15 607 -11 C 637 -10 649 -8 627 12 Q 620 19 606 29 Q 590 39 559 32 Q 466 13 392 6 C 362 3 366 -20 395 -26 Z",
  ],
};

let chr02 = {
  character: "典",
  strokes: [
    "M 290 573 Q 266 586 241 590 Q 225 593 218 585 Q 211 578 220 563 Q 247 527 262 487 Q 275 447 314 281 C 321 252 362 256 356 285 Q 320 459 314 531 C 311 561 311 562 290 573 Z",
    "M 722 325 Q 762 491 802 553 Q 814 565 809 577 Q 802 595 740 625 Q 722 634 708 629 Q 662 622 614 612 L 565 604 Q 510 598 454 589 L 409 585 Q 351 579 290 573 C 260 570 284 527 314 531 Q 327 530 339 535 Q 373 542 412 548 L 455 555 Q 507 565 563 572 L 611 578 Q 675 596 704 578 Q 714 571 712 547 Q 699 453 665 318 C 658 289 715 296 722 325 Z",
    "M 596 431 Q 623 435 650 438 Q 672 439 665 453 Q 655 466 632 472 Q 619 475 600 472 L 556 465 Q 505 455 460 445 L 419 438 Q 388 434 360 428 Q 344 425 362 410 Q 375 400 405 404 Q 412 405 421 406 L 462 412 Q 508 419 552 425 L 596 431 Z",
    "M 454 589 Q 454 671 457 695 Q 461 720 445 733 Q 420 752 391 761 Q 375 767 366 760 Q 357 753 365 737 Q 401 662 409 585 L 412 548 Q 415 505 419 438 L 421 406 Q 424 355 427 292 C 428 262 472 266 470 296 Q 466 359 462 412 L 460 445 Q 456 506 455 555 L 454 589 Z",
    "M 614 612 Q 617 661 644 760 Q 648 770 629 787 Q 595 808 570 813 Q 554 817 546 809 Q 537 802 545 787 Q 570 744 569 716 Q 568 662 565 604 L 563 572 Q 559 520 556 465 L 552 425 Q 545 367 539 303 C 536 273 579 278 582 308 Q 589 372 596 431 L 600 472 Q 604 527 611 578 L 614 612 Z",
    "M 314 281 Q 223 275 128 266 Q 103 265 120 243 Q 156 207 201 217 Q 501 286 912 264 Q 913 265 916 264 Q 940 263 946 273 Q 953 286 934 304 Q 870 353 803 339 Q 766 335 722 325 L 665 318 Q 625 314 582 308 L 539 303 Q 526 303 514 301 Q 492 300 470 296 L 427 292 Q 391 291 356 285 L 314 281 Z",
    "M 359 195 Q 349 131 186 -2 Q 161 -18 192 -16 Q 267 -10 387 105 Q 388 108 439 154 Q 452 167 449 178 Q 446 193 417 202 Q 386 215 372 211 Q 363 210 359 195 Z",
    "M 610 173 Q 680 109 764 14 Q 782 -10 799 -15 Q 809 -16 817 -5 Q 832 10 818 59 Q 808 126 612 208 Q 602 215 600 200 Q 599 185 610 173 Z",
  ],
};

let Chr1 = {
  character: "書",
  definition: "book, letter, document; writing",
  pinyin: ["shū"],
  decomposition: "⿱聿曰",
  radical: "曰",
};

let Chr2 = {
  character: "典",
  definition: "law, canon; scripture, classic; documentation",
  pinyin: ["diǎn"],
  decomposition: "⿱曲八",
  radical: "八",
};

let zhuang = {
  pos: "name",
  word: "Sawndip",
  sound: "/θaɯ˨˦ ɗip˥/",
  meaning: [
    "Sawndip (the traditional Chinese character-derived script used to write the Zhuang language)",
  ],
};

let rule = 2;

let c1 = "black";
let c2 = "black";

function setup() {
  createCanvas(800, 600);
  background(180);
  colorMode(HSB, 100);
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
  text("Part-of-speech: " + zhuang.pos, width / 8 + 5, height / 5 + 90);
  text("Pronunciation: " + zhuang.sound, width / 8 + 5, height / 5 + 110);
  text("Decomposition: " + "⿱", width / 8 + 5, height / 5 + 130);
  if (rule == 1) {
    text("Rule: Semantic compound", width / 8 + 5, height / 5 + 150);
  } else if (rule == 2) {
    text("Rule: Phono-semantic compound", width / 8 + 5, height / 5 + 150);
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
  fill(100);
  stroke(20);
  rect(width / 2, height / 2 - 150, 300, 300);
  stroke(20, 30);
  line(width / 2, height / 2, width / 2 + 300, height / 2);
  line(width / 2 + 150, height / 2 - 150, width / 2 + 150, height / 2 + 150);

  translate(width / 2, height / 2 + 120);

  push();
  translate(0, -105);
  scale(0.3, -0.2);
  let ctx01 = drawingContext;
  ctx01.fillStyle = c1;
  ctx01.strokeStyle = c1;
  for (let j = 0; j < chr01.strokes.length; j++) {
    p = new Path2D(chr01.strokes[j]);
    ctx01.fill(p);
  }
  translate(0, -680);
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
  fill(100);
  stroke(20);
  if (
    mouseX > width / 2 &&
    mouseX < width / 2 + 300 &&
    mouseY > height / 2 - 150 &&
    mouseY < height / 2
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
    mouseX > width / 2 &&
    mouseX < width / 2 + 300 &&
    mouseY > height / 2 &&
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
</script>
  
