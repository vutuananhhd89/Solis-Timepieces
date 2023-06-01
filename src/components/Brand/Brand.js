import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* <h4>SOLIS</h4> */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={127} 
        height={24}
        viewBox="0 0 127.67 23.36"
      >
        <path style="fill:#fefefe; stroke:none;" d="M0 0L0 335L750 335L750 0L0 0z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M105 62L105 63L108 63L105 62z"/>
        <path style="fill:#655f60; stroke:none;" d="M108 62L108 63L111 63L108 62z"/>
        <path style="fill:#3b3536; stroke:none;" d="M107 63L107 64L113 63L107 63z"/>
        <path style="fill:#221918; stroke:none;" d="M75 195L75 230L144 230C155.932 230 169.643 231.878 181 227.533C214.595 214.68 225.309 171.767 200.826 145.015C183.759 126.365 159.883 129 137 129C127.979 129 115.92 131.149 108.043 125.867C94.9784 117.105 102.568 101.007 116 98.4676C142.177 93.519 173.335 98 200 98L200 62L140 62C124.318 62 108.586 61.3198 94 68.0293C63.8637 81.8922 55.84 124.414 78.8843 148.251C96.4055 166.375 118.735 165 142 165C150.507 165 164.408 162.344 171.675 167.483C183.035 175.516 178.485 192.59 165.039 194.861C155.533 196.467 144.649 195 135 195L75 195z"/>
        <path style="fill:#3b3536; stroke:none;" d="M200 62L200 98L115 98L115 99L177 99L199.397 97.9722L201 89L200 62z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M359 62L344 78C348.996 74.4807 357.529 68.0703 359 62z"/>
        <path style="fill:#655f60; stroke:none;" d="M360 62L345 78C349.996 74.4807 358.529 68.0703 360 62z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M361 62L361 63C369.22 68.7905 380.727 78.8371 385 88L386 88L386 83L361 62M386 62L385 64L386 62z"/>
        <path style="fill:#3b3536; stroke:none;" d="M387 62L388 63L387 62z"/>
        <path style="fill:#221918; stroke:none;" d="M387 230L501 230L501 205C500.999 202.383 501.75 197.891 499.397 196.028C496.15 193.456 487.929 195 484 195L442 195C437.335 195 425.913 197.142 423.603 191.852C420.39 184.492 423 170.998 423 163L423 95C423 88.0263 426.347 69.1269 421.972 63.6034C420.255 61.4355 416.42 62.005 414 62C408.326 61.9883 388.372 58.8735 387.148 66.0586C384.26 83.0096 387 102.786 387 120L387 230z"/>
        <path style="fill:#3b3536; stroke:none;" d="M422 62L423 63L422 62z"/>
        <path style="fill:#655f60; stroke:none;" d="M423 62L423 193L424 193L424 102C424 90.5799 427.408 72.5038 423 62z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M424 62L424 194C448.408 194 478.27 189.35 502 195C498.394 190.873 487.217 193 482 193L425 193L425 102C425 90.5799 428.408 72.5038 424 62z"/>
        <path style="fill:#3b3536; stroke:none;" d="M502 62L503 63L502 62z"/>
        <path style="fill:#221918; stroke:none;" d="M502 230L538 230L538 62L512 62L503.028 63.6034L502 76L502 107L502 230z"/>
        <path style="fill:#655f60; stroke:none;" d="M538 62L538 115L539 115L539 106L540 106L540 108L541 108L540 77L538 62z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M539.333 62.6667L539.667 63.3333L539.333 62.6667M580 62L580 63L583 63L580 62z"/>
        <path style="fill:#655f60; stroke:none;" d="M583 62L583 63L586 63L583 62z"/>
        <path style="fill:#3b3536; stroke:none;" d="M582 63L582 64L589 63L582 63z"/>
        <path style="fill:#221918; stroke:none;" d="M541 111L540 111L540 109L539 109C539.024 116.112 541.256 123.194 543.275 130C553.343 163.928 587.958 165 617 165C625.113 165 637.573 162.685 644.999 166.318C656.342 171.868 656.415 188.086 644.91 193.467C631.482 199.747 606.723 195 592 195L550 195L550 230L618 230C633.032 230 647.942 231.366 662 225.038C691.595 211.715 697.925 169.206 676.819 146.04C659.419 126.941 636.519 129 613 129C603.753 129 591.109 131.284 583.043 125.867C571.166 117.888 577.275 101.107 590 98.4792C599.117 96.5966 609.712 98 619 98L675 98L675 62C643.666 62 606.211 56.4456 576 65.4398C556.271 71.3133 541.275 90.3523 541 111z"/>
        <path style="fill:#3b3536; stroke:none;" d="M675 62L675 98L615 98L584 100L584 101C604.188 95.3268 629.101 99 650 99C655.657 99 669.85 101.573 674.397 97.9722C676.75 96.1087 675.999 91.6168 676 89C676.004 80.9951 678.104 69.397 675 62z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M676 62L675 100L677 90L676 62M94 66L94 67L104 64L94 66z"/>
        <path style="fill:#655f60; stroke:none;" d="M104 63L104 64L107 64L104 63z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M201 63L200 100L201 100C203.565 91.3239 204.514 71.3741 201 63z"/>
        <path style="fill:#221918; stroke:none;" d="M360 63C356.525 67.0833 350.305 76.248 344.816 77.382C340.846 78.202 336.519 74.4673 333 73.0648C324.468 69.6644 315.158 67.1541 306 66.1736C287.909 64.2368 266.15 71.2697 252.001 82.4529C231.753 98.4568 216.016 127.369 220.325 154C222.259 165.958 230.039 177.662 231.492 189C232.41 196.156 221.252 199.823 219.256 205.996C217.512 211.391 234.116 226.216 238.745 228.664C245.985 232.494 250.846 214.409 258.424 215.647C264.068 216.569 270.484 221.326 276 223.34C285.351 226.755 297.119 227.774 307 226.83C348.067 222.906 380.821 188.824 380.821 147C380.821 131.12 373.573 119.773 369.63 105.17C367.807 98.4154 379.837 93.769 381.824 88C384.133 81.2965 364.997 66.5197 360 63z"/>
        <path style="fill:#3b3536; stroke:none;" d="M361 63C364.898 68.5338 382.264 80.1826 381.369 87C380.678 92.2593 372.038 97.687 369 102C373.192 99.0471 382.433 92.4702 383.079 87C383.885 80.1689 366.157 66.6327 361 63z"/>
        <path style="fill:#655f60; stroke:none;" d="M362 63L363 64L362 63M386 63L386 231L387 231L387 113C387 98.9617 391.406 75.883 386 63z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M577.667 63.3333L578.333 63.6667L577.667 63.3333z"/>
        <path style="fill:#655f60; stroke:none;" d="M579 63L579 64L582 64L579 63M101.667 64.3333L102.333 64.6667L101.667 64.3333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M103 64L104 65L103 64z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M289 65L289 66L312 66L289 65z"/>
        <path style="fill:#655f60; stroke:none;" d="M363 64L364 65L363 64z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M571 65L571 66L576 65L571 65z"/>
        <path style="fill:#655f60; stroke:none;" d="M576.667 64.3333L577.333 64.6667L576.667 64.3333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M578.667 64.3333L579.333 64.6667L578.667 64.3333z"/>
        <path style="fill:#655f60; stroke:none;" d="M98 65L99 66L98 65z"/>
        <path style="fill:#3b3536; stroke:none;" d="M99 65L100 66L99 65z"/>
        <path style="fill:#655f60; stroke:none;" d="M297 65L297 66L305 66L297 65z"/>
        <path style="fill:#3b3536; stroke:none;" d="M358 65L359 66L358 65z"/>
        <path style="fill:#655f60; stroke:none;" d="M364 65L365 66L364 65z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M385 65L385 79L386 79L385 65z"/>
        <path style="fill:#655f60; stroke:none;" d="M573.667 65.3333L574.333 65.6667L573.667 65.3333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M575 65L576 66L575 65z"/>
        <path style="fill:#655f60; stroke:none;" d="M95 66L96 67L95 66z"/>
        <path style="fill:#3b3536; stroke:none;" d="M96.6667 66.3333L97.3333 66.6667L96.6667 66.3333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M284 66L284 67L287 67L284 66z"/>
        <path style="fill:#655f60; stroke:none;" d="M287.667 66.3333L288.333 66.6667L287.667 66.3333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M289 66L289 67L293 67L289 66M308 66L308 67L316 68L308 66z"/>
        <path style="fill:#655f60; stroke:none;" d="M312.667 66.3333L313.333 66.6667L312.667 66.3333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M314 66L314 67L318 67L314 66z"/>
        <path style="fill:#655f60; stroke:none;" d="M365 66L366 67L365 66z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M569 66L570 67L569 66z"/>
        <path style="fill:#655f60; stroke:none;" d="M570.667 66.3333L571.333 66.6667L570.667 66.3333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M572 66L573 67L572 66z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M90 69L93 68L90 69z"/>
        <path style="fill:#655f60; stroke:none;" d="M93 67L94 68L93 67z"/>
        <path style="fill:#3b3536; stroke:none;" d="M94.6667 67.3333L95.3333 67.6667L94.6667 67.3333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M279.667 67.3333L280.333 67.6667L279.667 67.3333z"/>
        <path style="fill:#655f60; stroke:none;" d="M281 67L281 68L285 68L281 67z"/>
        <path style="fill:#3b3536; stroke:none;" d="M285 67L285 68L289 68L285 67z"/>
        <path style="fill:#655f60; stroke:none;" d="M316 67L316 68L319 68L316 67z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M319 67L319 68L322 68L319 67z"/>
        <path style="fill:#655f60; stroke:none;" d="M366 67L367 68L366 67z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M567 67L568 68L567 67z"/>
        <path style="fill:#655f60; stroke:none;" d="M568 67L565 69L565 70L569 68L568 67z"/>
        <path style="fill:#3b3536; stroke:none;" d="M569.667 67.3333L570.333 67.6667L569.667 67.3333z"/>
        <path style="fill:#655f60; stroke:none;" d="M91 68L92 69L91 68z"/>
        <path style="fill:#3b3536; stroke:none;" d="M92 68L93 69L92 68z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M270 70L270 71L278 69L270 70z"/>
        <path style="fill:#655f60; stroke:none;" d="M278.667 68.3333L279.333 68.6667L278.667 68.3333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M280 68L280 69L283 69L280 68M319 68L321 70L321 68L319 68z"/>
        <path style="fill:#655f60; stroke:none;" d="M321.667 68.3333L322.333 68.6667L321.667 68.3333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M323 68L323 69L333 72L333 71L323 68z"/>
        <path style="fill:#655f60; stroke:none;" d="M367 68L368 69L367 68z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M565 68L566 69L565 68z"/>
        <path style="fill:#3b3536; stroke:none;" d="M568 68L569 69L568 68z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M88 69L87 71L88 69z"/>
        <path style="fill:#655f60; stroke:none;" d="M88 71L91 70L88 71M275 69L276 70L275 69z"/>
        <path style="fill:#3b3536; stroke:none;" d="M276.667 69.3333L277.333 69.6667L276.667 69.3333M323 69L324 70L323 69z"/>
        <path style="fill:#655f60; stroke:none;" d="M324.667 69.3333L325.333 69.6667L324.667 69.3333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M354 69L355 70L354 69z"/>
        <path style="fill:#655f60; stroke:none;" d="M368 69L369 70L368 69z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M562 71L565 70L562 71z"/>
        <path style="fill:#3b3536; stroke:none;" d="M89 70L90 71L89 70z"/>
        <path style="fill:#655f60; stroke:none;" d="M272 70L273 71L272 70z"/>
        <path style="fill:#3b3536; stroke:none;" d="M273.667 70.3333L274.333 70.6667L273.667 70.3333M326 70L326 71L330 72L330 71L326 70z"/>
        <path style="fill:#655f60; stroke:none;" d="M328 70L329 71L328 70M369 70L370 71L369 70M563 70L558 75L564 71L563 70z"/>
        <path style="fill:#3b3536; stroke:none;" d="M564 70L565 71L564 70z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M85 71L76 80L85 71z"/>
        <path style="fill:#655f60; stroke:none;" d="M86 71L84 74L86 71z"/>
        <path style="fill:#3b3536; stroke:none;" d="M87 71L88 72L87 71z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M268 71L269 72L268 71z"/>
        <path style="fill:#655f60; stroke:none;" d="M267 72L267 73L271 72L267 72z"/>
        <path style="fill:#3b3536; stroke:none;" d="M271.667 71.3333L272.333 71.6667L271.667 71.3333z"/>
        <path style="fill:#655f60; stroke:none;" d="M330 71L331 72L330 71M370 71L371 72L370 71z"/>
        <path style="fill:#3b3536; stroke:none;" d="M563 71L564 72L563 71M86 72L87 73L86 72z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M262 74L262 75L267 73L262 74z"/>
        <path style="fill:#3b3536; stroke:none;" d="M269 72L270 73L269 72M331 72L332 73L331 72z"/>
        <path style="fill:#655f60; stroke:none;" d="M332.667 72.3333L333.333 72.6667L332.667 72.3333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M334 72L334 73L339 75L339 74L334 72z"/>
        <path style="fill:#3b3536; stroke:none;" d="M351 72L352 73L351 72z"/>
        <path style="fill:#655f60; stroke:none;" d="M371 72L372 73L371 72z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M559 72L560 73L559 72z"/>
        <path style="fill:#3b3536; stroke:none;" d="M561 72L562 73L561 72M85 73L86 74L85 73z"/>
        <path style="fill:#655f60; stroke:none;" d="M265 73L266 74L265 73z"/>
        <path style="fill:#3b3536; stroke:none;" d="M266.667 73.3333L267.333 73.6667L266.667 73.3333M329 73L330 74L329 73M334 73L335 74L334 73z"/>
        <path style="fill:#655f60; stroke:none;" d="M335 73L336 74L335 73z"/>
        <path style="fill:#3b3536; stroke:none;" d="M350 73L351 74L350 73z"/>
        <path style="fill:#655f60; stroke:none;" d="M372 73L373 74L372 73z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M558 73L559 74L558 73z"/>
        <path style="fill:#3b3536; stroke:none;" d="M560 73L561 74L560 73M83 74L84 75L83 74z"/>
        <path style="fill:#655f60; stroke:none;" d="M263 74L264 75L263 74z"/>
        <path style="fill:#3b3536; stroke:none;" d="M264 74L265 75L264 74M336 74L337 75L336 74z"/>
        <path style="fill:#655f60; stroke:none;" d="M337 74L338 75L337 74M373 74L374 75L373 74z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M557 74L554 76L554 77L557 74z"/>
        <path style="fill:#655f60; stroke:none;" d="M81 75L78 79L81 75z"/>
        <path style="fill:#3b3536; stroke:none;" d="M82 75L83 76L82 75z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M260 75L261 76L260 75z"/>
        <path style="fill:#655f60; stroke:none;" d="M261 75L262 76L261 75z"/>
        <path style="fill:#3b3536; stroke:none;" d="M262 75L263 76L262 75M338 75L340 77L338 75z"/>
        <path style="fill:#655f60; stroke:none;" d="M339 75L341 77L339 75z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M340 75L341 76L340 75z"/>
        <path style="fill:#3b3536; stroke:none;" d="M348 75L349 76L348 75z"/>
        <path style="fill:#655f60; stroke:none;" d="M374 75L375 76L374 75z"/>
        <path style="fill:#3b3536; stroke:none;" d="M557 75L558 76L557 75M81 76L82 77L81 76z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M258 76C248.898 82.6685 240.088 89.2663 234 99L250 83.4676L258 76z"/>
        <path style="fill:#655f60; stroke:none;" d="M259 76L258 78L259 76z"/>
        <path style="fill:#3b3536; stroke:none;" d="M260.667 76.3333L261.333 76.6667L260.667 76.3333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M341.667 76.3333L342.333 76.6667L341.667 76.3333z"/>
        <path style="fill:#655f60; stroke:none;" d="M375 76L376 77L375 76z"/>
        <path style="fill:#3b3536; stroke:none;" d="M556 76L557 77L556 76M80 77L81 78L80 77M259 77L260 78L259 77M341 77L342 78L341 77z"/>
        <path style="fill:#655f60; stroke:none;" d="M342.667 77.3333L343.333 77.6667L342.667 77.3333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M346 77L347 78L346 77z"/>
        <path style="fill:#655f60; stroke:none;" d="M376 77L377 78L376 77M554 77L555 78L554 77z"/>
        <path style="fill:#3b3536; stroke:none;" d="M555 77L556 78L555 77M79 78L80 79L79 78M257 78L258 79L257 78z"/>
        <path style="fill:#655f60; stroke:none;" d="M377 78L378 79L377 78z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M552 78L547 86L554 78L552 78z"/>
        <path style="fill:#3b3536; stroke:none;" d="M554 78L555 79L554 78M78 79L79 80L78 79z"/>
        <path style="fill:#655f60; stroke:none;" d="M255 79L256 80L255 79M378 79L379 80L378 79z"/>
        <path style="fill:#3b3536; stroke:none;" d="M553 79L554 80L553 79z"/>
        <path style="fill:#655f60; stroke:none;" d="M76 80L73 85L76 80z"/>
        <path style="fill:#3b3536; stroke:none;" d="M77 80L78 81L77 80z"/>
        <path style="fill:#655f60; stroke:none;" d="M253 80L252 82L253 80z"/>
        <path style="fill:#3b3536; stroke:none;" d="M254 80L255 81L254 80z"/>
        <path style="fill:#655f60; stroke:none;" d="M379 80L380 81L379 80M552 80L551 82L552 80z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M75 81L76 82L75 81z"/>
        <path style="fill:#3b3536; stroke:none;" d="M253 81L254 82L253 81z"/>
        <path style="fill:#655f60; stroke:none;" d="M380 81L381 82L380 81z"/>
        <path style="fill:#3b3536; stroke:none;" d="M552 81L553 82L552 81z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M74 82L75 83L74 82z"/>
        <path style="fill:#3b3536; stroke:none;" d="M76 82L77 83L76 82z"/>
        <path style="fill:#655f60; stroke:none;" d="M251 82L252 83L251 82M381 82L382 83L381 82M550 82L551 83L550 82z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M73 83L74 84L73 83z"/>
        <path style="fill:#3b3536; stroke:none;" d="M75 83L76 84L75 83z"/>
        <path style="fill:#655f60; stroke:none;" d="M249 83L246 87L249 83z"/>
        <path style="fill:#3b3536; stroke:none;" d="M250 83L251 84L250 83z"/>
        <path style="fill:#655f60; stroke:none;" d="M382 83L383 84L382 83z"/>
        <path style="fill:#3b3536; stroke:none;" d="M550 83L551 84L550 83M74 84L75 85L74 84M249 84L250 85L249 84M253 84L254 85L253 84z"/>
        <path style="fill:#655f60; stroke:none;" d="M383 84L384 85L383 84z"/>
        <path style="fill:#3b3536; stroke:none;" d="M549 84L550 85L549 84z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M72 85L69 91L70 91L72 85z"/>
        <path style="fill:#3b3536; stroke:none;" d="M73 85L74 86L73 85M248 85L249 86L248 85z"/>
        <path style="fill:#655f60; stroke:none;" d="M384 85L384 88L385 88L384 85M548 85L547 87L548 85M72 86L73 87L72 86z"/>
        <path style="fill:#3b3536; stroke:none;" d="M247 86L248 87L247 86M548 86L549 87L548 86M72 87L73 88L72 87z"/>
        <path style="fill:#655f60; stroke:none;" d="M245 87L246 88L245 87z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M546 87L542 96L543 96L546 87z"/>
        <path style="fill:#3b3536; stroke:none;" d="M547 87L548 88L547 87z"/>
        <path style="fill:#655f60; stroke:none;" d="M71 88L72 89L71 88M244 88L243 90L244 88M383 88L382 90L383 88M546 88L547 89L546 88z"/>
        <path style="fill:#3b3536; stroke:none;" d="M71 89L72 90L71 89M244 89L245 90L244 89z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M383 89L384 90L383 89z"/>
        <path style="fill:#3b3536; stroke:none;" d="M546 89L545 92L546 89z"/>
        <path style="fill:#655f60; stroke:none;" d="M70 90L71 91L70 90M242 90L241 92L242 90M381 90L378 94L381 90z"/>
        <path style="fill:#3b3536; stroke:none;" d="M538 90L538 94L539 94L538 90z"/>
        <path style="fill:#655f60; stroke:none;" d="M545 90L546 91L545 90M69.3333 91.6667L69.6667 92.3333L69.3333 91.6667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M242 91L243 92L242 91z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M381 91L382 92L381 91M68 92L67 96L68 96L68 92z"/>
        <path style="fill:#655f60; stroke:none;" d="M240 92L238 95L240 92z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M380 92L381 93L380 92z"/>
        <path style="fill:#655f60; stroke:none;" d="M544 92L545 93L544 92z"/>
        <path style="fill:#3b3536; stroke:none;" d="M69 93L70 94L69 93M240 93L241 94L240 93z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M379 93L380 94L379 93z"/>
        <path style="fill:#3b3536; stroke:none;" d="M544.333 93.6667L544.667 94.3333L544.333 93.6667z"/>
        <path style="fill:#655f60; stroke:none;" d="M68 94L69 95L68 94z"/>
        <path style="fill:#3b3536; stroke:none;" d="M239 94L240 95L239 94z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M377 94L377 96L379 94L377 94z"/>
        <path style="fill:#655f60; stroke:none;" d="M543 94L542 98L543 98L543 94z"/>
        <path style="fill:#3b3536; stroke:none;" d="M68.3333 95.6667L68.6667 96.3333L68.3333 95.6667M238 95L239 96L238 95z"/>
        <path style="fill:#655f60; stroke:none;" d="M376 95L377 96L376 95M67.3333 96.6667L67.6667 97.3333L67.3333 96.6667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M237 96L238 97L237 96z"/>
        <path style="fill:#655f60; stroke:none;" d="M375 96L373 99L375 96z"/>
        <path style="fill:#3b3536; stroke:none;" d="M543.333 96.6667L543.667 97.3333L543.333 96.6667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M66.3333 97.6667L66.6667 98.3333L66.3333 97.6667z"/>
        <path style="fill:#655f60; stroke:none;" d="M236 97L234 100L236 97z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M375 97L376 98L375 97M385 97L385 111L386 111L385 97z"/>
        <path style="fill:#3b3536; stroke:none;" d="M585 97L586 98L585 97M67.3333 98.6667L67.6667 99.3333L67.3333 98.6667z"/>
        <path style="fill:#655f60; stroke:none;" d="M200 98L201 99L200 98z"/>
        <path style="fill:#3b3536; stroke:none;" d="M236 98L237 99L236 98z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M374 98L375 99L374 98M541 98L540 104L541 104L541 98z"/>
        <path style="fill:#3b3536; stroke:none;" d="M542.333 98.6667L542.667 99.3333L542.333 98.6667z"/>
        <path style="fill:#655f60; stroke:none;" d="M675 98L676 99L675 98M66.3333 99.6667L66.6667 100.333L66.3333 99.6667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M111.667 99.3333L112.333 99.6667L111.667 99.3333z"/>
        <path style="fill:#655f60; stroke:none;" d="M113 99L113 100L200 100L173 99L113 99z"/>
        <path style="fill:#3b3536; stroke:none;" d="M235 99L236 100L235 99M292 100L292 101L305 100L292 100z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M372 99C369.374 105.365 372.538 109.116 375 115L376 115C374.196 108.751 370.695 105.349 374 99L372 99z"/>
        <path style="fill:#655f60; stroke:none;" d="M589 99L589 100L675 100L648 99L589 99z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M65 100L65 103L66 103L65 100z"/>
        <path style="fill:#3b3536; stroke:none;" d="M109 100L110 101L109 100z"/>
        <path style="fill:#655f60; stroke:none;" d="M110 100L111 101L110 100z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M111.667 100.333L112.333 100.667L111.667 100.333M233 100L226 113L227 113L233 100z"/>
        <path style="fill:#3b3536; stroke:none;" d="M234 100L235 101L234 100z"/>
        <path style="fill:#655f60; stroke:none;" d="M295 100L295 101L300 101L295 100z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M300 100L301 101L300 100z"/>
        <path style="fill:#655f60; stroke:none;" d="M301 100L301 101L306 101L301 100z"/>
        <path style="fill:#3b3536; stroke:none;" d="M306 100L306 101L309 101L306 100z"/>
        <path style="fill:#655f60; stroke:none;" d="M371 100L372 101L371 100M541 100L542 101L541 100M579 106L587 101L579 106z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M587 100L588 101L587 100z"/>
        <path style="fill:#3b3536; stroke:none;" d="M66.3333 101.667L66.6667 102.333L66.3333 101.667M107 101L103 106L107 101z"/>
        <path style="fill:#655f60; stroke:none;" d="M108 101L106 104L108 101z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M109.667 101.333L110.333 101.667L109.667 101.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M233 101L234 102L233 101z"/>
        <path style="fill:#3b3536; stroke:none;" d="M287.667 101.333L288.333 101.667L287.667 101.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M289 101L290 102L289 101z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M287 102L287 103L296 102L287 102z"/>
        <path style="fill:#fefefe; stroke:none;" d="M296 101.439C286.667 102.893 278.707 105.57 271.325 111.66C236.082 140.735 263.634 198.545 308 191.561C364.537 182.662 352.211 92.6813 296 101.439z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M306 101L306 102L314 103L306 101z"/>
        <path style="fill:#655f60; stroke:none;" d="M311.667 101.333L312.333 101.667L311.667 101.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M313 101L314 102L313 101z"/>
        <path style="fill:#655f60; stroke:none;" d="M370 101L371 102L370 101z"/>
        <path style="fill:#3b3536; stroke:none;" d="M541.333 101.667L541.667 102.333L541.333 101.667M582 101L583 102L582 101z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M585 101L586 102L585 101M108 102L109 103L108 102z"/>
        <path style="fill:#655f60; stroke:none;" d="M232 102L233 103L232 102z"/>
        <path style="fill:#3b3536; stroke:none;" d="M280 104L280 105L285 103L280 104z"/>
        <path style="fill:#655f60; stroke:none;" d="M285.667 102.333L286.333 102.667L285.667 102.333M314.667 102.333L315.333 102.667L314.667 102.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M316 102L316 103L321 105L321 104L316 102z"/>
        <path style="fill:#655f60; stroke:none;" d="M369 102L369 105L370 105L369 102z"/>
        <path style="fill:#3b3536; stroke:none;" d="M581 102L582 103L581 102z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M583 102L584 103L583 102z"/>
        <path style="fill:#655f60; stroke:none;" d="M65 103L65 107L66 107L65 103z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M107 103L108 104L107 103z"/>
        <path style="fill:#3b3536; stroke:none;" d="M232 103L233 104L232 103z"/>
        <path style="fill:#655f60; stroke:none;" d="M283 103L284 104L283 103z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M284.667 103.333L285.333 103.667L284.667 103.333M315.667 103.333L316.333 103.667L315.667 103.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M317 103L318 104L317 103z"/>
        <path style="fill:#3b3536; stroke:none;" d="M368 103L369 104L368 103M580 103L581 104L580 103z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M582 103L583 104L582 103M104 107L107 104L104 107z"/>
        <path style="fill:#655f60; stroke:none;" d="M231 104L232 105L231 104M281 104L282 105L281 104z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M282 104L283 105L282 104M318 104L318 105L323 107L323 106L318 104z"/>
        <path style="fill:#655f60; stroke:none;" d="M319 104L320 105L319 104z"/>
        <path style="fill:#3b3536; stroke:none;" d="M541 104L542 105L541 104z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M581 104L582 105L581 104z"/>
        <path style="fill:#655f60; stroke:none;" d="M104 105L105 106L104 105z"/>
        <path style="fill:#3b3536; stroke:none;" d="M231 105L232 106L231 105M278 105L279 106L278 105z"/>
        <path style="fill:#655f60; stroke:none;" d="M279 105L280 106L279 105z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M280 105L281 106L280 105z"/>
        <path style="fill:#655f60; stroke:none;" d="M322 105L323 106L322 105z"/>
        <path style="fill:#3b3536; stroke:none;" d="M369 105L370 106L369 105M578 105L577 109L578 109L578 105z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M580 105L581 106L580 105M64 106L64 123L65 123L64 106z"/>
        <path style="fill:#655f60; stroke:none;" d="M103 106L102 110L103 110L103 106M230 106L231 107L230 106z"/>
        <path style="fill:#3b3536; stroke:none;" d="M276 106L277 107L276 106z"/>
        <path style="fill:#655f60; stroke:none;" d="M277 106L278 107L277 106z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M278 106L279 107L278 106z"/>
        <path style="fill:#655f60; stroke:none;" d="M323 106L323 107L326 108L323 106z"/>
        <path style="fill:#3b3536; stroke:none;" d="M325 106L326 107L325 106M370 106L372 109L370 106M539 106L540 111L541 111L539 106z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M579 106L580 107L579 106z"/>
        <path style="fill:#3b3536; stroke:none;" d="M65 107L65 110L66 110L65 107M102 107L103 108L102 107z"/>
        <path style="fill:#655f60; stroke:none;" d="M229 107L230 108L229 107z"/>
        <path style="fill:#3b3536; stroke:none;" d="M274 107L259 124L260 124L274 107z"/>
        <path style="fill:#655f60; stroke:none;" d="M275 107L274 109L275 107z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M276 107L277 108L276 107M324 107L325 108L324 107z"/>
        <path style="fill:#3b3536; stroke:none;" d="M326 107L327 108L326 107z"/>
        <path style="fill:#655f60; stroke:none;" d="M371 107L372 108L371 107M578 107L579 108L578 107z"/>
        <path style="fill:#3b3536; stroke:none;" d="M101 108L101 112L102 112L101 108z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M103.333 108.667L103.667 109.333L103.333 108.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M229 108L230 109L229 108z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M275 108L276 109L275 108M325 108L325 109C332.63 113.809 338.425 120.715 342 129L343 129C340.421 120.237 333.464 111.584 325 108z"/>
        <path style="fill:#655f60; stroke:none;" d="M327 108L328 109L327 108z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M578.333 108.667L578.667 109.333L578.333 108.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M228 109L229 110L228 109z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M273.667 109.333L274.333 109.667L273.667 109.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M328 109L331 111L331 110L328 109z"/>
        <path style="fill:#3b3536; stroke:none;" d="M329 109L330 110L329 109z"/>
        <path style="fill:#655f60; stroke:none;" d="M372 109L373 110L372 109M577.333 109.667L577.667 110.333L577.333 109.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M102 110C102.02 116.917 103.228 121.711 109 126L102 110z"/>
        <path style="fill:#3b3536; stroke:none;" d="M228 110L229 111L228 110z"/>
        <path style="fill:#655f60; stroke:none;" d="M271 110L270 112L271 110z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M272 110L273 111L272 110z"/>
        <path style="fill:#3b3536; stroke:none;" d="M372 110L374 116L375 116L372 110z"/>
        <path style="fill:#655f60; stroke:none;" d="M227 111L228 112L227 111z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M271 111L272 112L271 111z"/>
        <path style="fill:#3b3536; stroke:none;" d="M331 111L332 112L331 111z"/>
        <path style="fill:#655f60; stroke:none;" d="M373 111L374 112L373 111z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M577 111C577.157 118.325 579.661 124.484 587 127L587 126C580.219 122.405 579.837 117.304 577 111z"/>
        <path style="fill:#655f60; stroke:none;" d="M101.333 112.667L101.667 113.333L101.333 112.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M227.333 112.667L227.667 113.333L227.333 112.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M269 112L270 113L269 112z"/>
        <path style="fill:#3b3536; stroke:none;" d="M332 112L333 113L332 112M576 112L576 116L577 116L576 112z"/>
        <path style="fill:#655f60; stroke:none;" d="M226 113L225 117L226 117L226 113z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M268.667 113.333L269.333 113.667L268.667 113.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M333 113L334 114L333 113M374 113L375 114L374 113z"/>
        <path style="fill:#3b3536; stroke:none;" d="M101 114L101 119L102 119L101 114z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M225 114L226 115L225 114z"/>
        <path style="fill:#655f60; stroke:none;" d="M267 114L263 119L267 114z"/>
        <path style="fill:#3b3536; stroke:none;" d="M334 114L335 115L334 114M226.333 115.667L226.667 116.333L226.333 115.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M267 115L268 116L267 115z"/>
        <path style="fill:#3b3536; stroke:none;" d="M335 115L336 116L335 115z"/>
        <path style="fill:#655f60; stroke:none;" d="M375.333 115.667L375.667 116.333L375.333 115.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M538 115L539 122L540 122L538 115z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M224 116L223 121L224 121L224 116M266 116L267 117L266 116z"/>
        <path style="fill:#3b3536; stroke:none;" d="M336 116L339 119L336 116z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M376 116L379 127L380 127L376 116z"/>
        <path style="fill:#3b3536; stroke:none;" d="M65 117L65 120L66 120L65 117M225 117L224 121L225 121L225 117z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M265 117L266 118L265 117z"/>
        <path style="fill:#655f60; stroke:none;" d="M336 117L337 118L336 117z"/>
        <path style="fill:#3b3536; stroke:none;" d="M375 117L376 122L377 122L375 117z"/>
        <path style="fill:#655f60; stroke:none;" d="M577.333 117.667L577.667 118.333L577.333 117.667M102.333 118.667L102.667 119.333L102.333 118.667M224 118L225 119L224 118z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M264 118L265 119L264 118z"/>
        <path style="fill:#655f60; stroke:none;" d="M337 118L338 119L337 118M376 118L377 119L376 118z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M263 119L264 120L263 119z"/>
        <path style="fill:#655f60; stroke:none;" d="M338 119L339 120L338 119M538 119L538 231L539 231L540 198L541 120L540 120L540 122L539 122L538 119z"/>
        <path style="fill:#3b3536; stroke:none;" d="M577 119L578 120L577 119z"/>
        <path style="fill:#655f60; stroke:none;" d="M65 120L65 124L66 124L65 120M103 120L104 121L103 120M262 120L261 122L262 120z"/>
        <path style="fill:#3b3536; stroke:none;" d="M339 120L341 122L339 120z"/>
        <path style="fill:#655f60; stroke:none;" d="M578 120L580 122L578 120z"/>
        <path style="fill:#3b3536; stroke:none;" d="M103 121L104 122L103 121z"/>
        <path style="fill:#655f60; stroke:none;" d="M223.333 121.667L223.667 122.333L223.333 121.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M262 121L263 122L262 121z"/>
        <path style="fill:#655f60; stroke:none;" d="M339 121L340 122L339 121M377.333 121.667L377.667 122.333L377.333 121.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M578 121L579 122L578 121z"/>
        <path style="fill:#655f60; stroke:none;" d="M104 122L107 125L104 122z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M222.333 122.667L222.667 123.333L222.333 122.667M261 122L260 125L261 122z"/>
        <path style="fill:#655f60; stroke:none;" d="M340 122L341 123L340 122z"/>
        <path style="fill:#3b3536; stroke:none;" d="M579 122L581 125L579 122M104 123L105 124L104 123M223 123L224 124L223 123z"/>
        <path style="fill:#655f60; stroke:none;" d="M260 123L261 124L260 123z"/>
        <path style="fill:#3b3536; stroke:none;" d="M341 123L342 124L341 123M377.333 123.667L377.667 124.333L377.333 123.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M540 123L541 130L542 130L540 123z"/>
        <path style="fill:#655f60; stroke:none;" d="M580 123L581 124L580 123z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M65 124L71 141L72 141L65 124z"/>
        <path style="fill:#3b3536; stroke:none;" d="M66.3333 124.667L66.6667 125.333L66.3333 124.667M105 124L106 125L105 124z"/>
        <path style="fill:#655f60; stroke:none;" d="M222 124L222 127L223 127L222 124M259 124L258 128L259 128L259 124M341 124L342 125L341 124M378.333 124.667L378.667 125.333L378.333 124.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M541 124L542 130L543 130L541 124z"/>
        <path style="fill:#655f60; stroke:none;" d="M581 124L582 125L581 124M107 125L108 126L107 125z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M221 125L221 128L222 128L221 125z"/>
        <path style="fill:#3b3536; stroke:none;" d="M258 125L259 126L258 125M342 125L343 128L344 128L342 125M582 125L583 126L582 125z"/>
        <path style="fill:#655f60; stroke:none;" d="M66.3333 126.667L66.6667 127.333L66.3333 126.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M108 126L109 127L108 126z"/>
        <path style="fill:#655f60; stroke:none;" d="M109 126L110 127L109 126z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M110.667 126.333L111.333 126.667L110.667 126.333M259 126L260 127L259 126z"/>
        <path style="fill:#655f60; stroke:none;" d="M342 126L343 127L342 126z"/>
        <path style="fill:#3b3536; stroke:none;" d="M378.333 126.667L378.667 127.333L378.333 126.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M541.333 126.667L541.667 127.333L541.333 126.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M583 126L584 127L583 126z"/>
        <path style="fill:#655f60; stroke:none;" d="M584 126L585 127L584 126z"/>
        <path style="fill:#3b3536; stroke:none;" d="M67 127L68 132L69 132L67 127M110 127L111 128L110 127z"/>
        <path style="fill:#655f60; stroke:none;" d="M111.667 127.333L112.333 127.667L111.667 127.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M113 127L113 128L169 128L151 127L113 127z"/>
        <path style="fill:#3b3536; stroke:none;" d="M222.333 127.667L222.667 128.333L222.333 127.667M257.333 127.667L257.667 128.333L257.333 127.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M379 127L379 130L380 130L379 127z"/>
        <path style="fill:#3b3536; stroke:none;" d="M585 127L586 128L585 127z"/>
        <path style="fill:#655f60; stroke:none;" d="M586.667 127.333L587.333 127.667L586.667 127.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M588 127L588 128L644 128L626 127L588 127z"/>
        <path style="fill:#3b3536; stroke:none;" d="M113 128L113 129L116 129L113 128z"/>
        <path style="fill:#655f60; stroke:none;" d="M116 128L116 129L170 129L152 128L116 128z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M170 128L170 129L175 129L170 128z"/>
        <path style="fill:#655f60; stroke:none;" d="M221.333 128.667L221.667 129.333L221.333 128.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M258 128L255 142L256 142L258 128z"/>
        <path style="fill:#655f60; stroke:none;" d="M343 128L344 132L345 132L343 128z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M380 128L380 132L381 132L380 128z"/>
        <path style="fill:#3b3536; stroke:none;" d="M538 128L539 129L538 128M588 128L588 129L591 129L588 128z"/>
        <path style="fill:#655f60; stroke:none;" d="M591 128L591 129L645 129L627 128L591 128z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M645 128L645 129L653 130L645 128z"/>
        <path style="fill:#3b3536; stroke:none;" d="M169 129L170 130L169 129M173 129L174 130L173 129z"/>
        <path style="fill:#655f60; stroke:none;" d="M174.667 129.333L175.333 129.667L174.667 129.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M176 129L177 130L176 129z"/>
        <path style="fill:#655f60; stroke:none;" d="M257 129L258 130L257 129z"/>
        <path style="fill:#3b3536; stroke:none;" d="M344 129L345 130L344 129M647.667 129.333L648.333 129.667L647.667 129.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M649.667 129.333L650.333 129.667L649.667 129.333M67 130L68 131L67 130z"/>
        <path style="fill:#3b3536; stroke:none;" d="M175 130L175 131L178 131L175 130z"/>
        <path style="fill:#655f60; stroke:none;" d="M178 130L178 131L182 132L182 131L178 130z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M180 130L181 131L180 130M220 130L220 133L221 133L220 130z"/>
        <path style="fill:#3b3536; stroke:none;" d="M221 130L220 140L221 140L221 130M256 130L257 131L256 130z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M343.333 130.667L343.667 131.333L343.333 130.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M379 130L379 133L380 133L379 130z"/>
        <path style="fill:#655f60; stroke:none;" d="M542 130L543 131L542 130z"/>
        <path style="fill:#3b3536; stroke:none;" d="M651.667 130.333L652.333 130.667L651.667 130.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M653.667 130.333L654.333 130.667L653.667 130.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M655 130L655 131L659 132L659 131L655 130z"/>
        <path style="fill:#3b3536; stroke:none;" d="M179 131L180 132L179 131z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M182 131L182 132L188 134L188 133L182 131z"/>
        <path style="fill:#655f60; stroke:none;" d="M256.333 131.667L256.667 132.333L256.333 131.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M542 131L545 139L546 139L542 131z"/>
        <path style="fill:#3b3536; stroke:none;" d="M543 131L544 132L543 131M654.667 131.333L655.333 131.667L654.667 131.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M656 131L657 132L656 131M68.3333 132.667L68.6667 133.333L68.3333 132.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M182 132L183 133L182 132z"/>
        <path style="fill:#655f60; stroke:none;" d="M183 132L184 133L183 132z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M344 132L344 135L345 135L344 132z"/>
        <path style="fill:#3b3536; stroke:none;" d="M345 132L346 133L345 132z"/>
        <path style="fill:#655f60; stroke:none;" d="M380 132L380 135L381 135L380 132M543 132L544 133L543 132z"/>
        <path style="fill:#3b3536; stroke:none;" d="M657 132L658 133L657 132z"/>
        <path style="fill:#655f60; stroke:none;" d="M658.667 132.333L659.333 132.667L658.667 132.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M660 132L660 133L668 137L668 136L660 132z"/>
        <path style="fill:#3b3536; stroke:none;" d="M185 133L186 134L185 133z"/>
        <path style="fill:#655f60; stroke:none;" d="M186 133L187 134L186 133M220.333 133.667L220.667 134.333L220.333 133.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M255 133L256 134L255 133z"/>
        <path style="fill:#655f60; stroke:none;" d="M345 133L345 136L346 136L345 133z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M381 133L382 154L383 154L381 133z"/>
        <path style="fill:#3b3536; stroke:none;" d="M544 133L545 134L544 133M660 133L660 134L664 136L664 135L660 133z"/>
        <path style="fill:#655f60; stroke:none;" d="M661 133L662 134L661 133z"/>
        <path style="fill:#3b3536; stroke:none;" d="M69 134L70 135L69 134M187 134L189 136L187 134z"/>
        <path style="fill:#655f60; stroke:none;" d="M188 134L190 136L188 134z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M189 134L190 135L189 134M219 134L219 159L220 159L219 134z"/>
        <path style="fill:#655f60; stroke:none;" d="M255.333 134.667L255.667 135.333L255.333 134.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M346 134L347 155L348 155L346 134z"/>
        <path style="fill:#655f60; stroke:none;" d="M544 134L545 135L544 134M663 134L664 135L663 134M69 135L70 136L69 135z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M190 135L190 136L200 143L190 135z"/>
        <path style="fill:#3b3536; stroke:none;" d="M254 135L255 136L254 135M380 135L380 144L381 144L380 135M538.333 135.667L538.667 136.333L538.333 135.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M664 135L665 136L664 135z"/>
        <path style="fill:#3b3536; stroke:none;" d="M70 136L71 137L70 136M190 136L193 138L193 137L190 136z"/>
        <path style="fill:#655f60; stroke:none;" d="M191 136L192 137L191 136z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M345 136L346 153L347 153L345 136z"/>
        <path style="fill:#3b3536; stroke:none;" d="M545 136L549 143L550 143L545 136M665 136L666 137L665 136z"/>
        <path style="fill:#655f60; stroke:none;" d="M666 136L667 137L666 136M70 137L71 138L70 137z"/>
        <path style="fill:#3b3536; stroke:none;" d="M254 137L254 140L255 140L254 137z"/>
        <path style="fill:#655f60; stroke:none;" d="M545 137L546 138L545 137z"/>
        <path style="fill:#3b3536; stroke:none;" d="M667 137L670 140L667 137z"/>
        <path style="fill:#655f60; stroke:none;" d="M668 137L679 147L668 137z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M669 137L670 138L669 137z"/>
        <path style="fill:#3b3536; stroke:none;" d="M71 138L73 140L71 138M193 138L195 140L193 138z"/>
        <path style="fill:#655f60; stroke:none;" d="M194 138L195 139L194 138M346.333 138.667L346.667 139.333L346.333 138.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M670 138L671 139L670 138z"/>
        <path style="fill:#655f60; stroke:none;" d="M71 139L72 140L71 139M195 139L196 140L195 139z"/>
        <path style="fill:#3b3536; stroke:none;" d="M538.333 139.667L538.667 140.333L538.333 139.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M546 139L548 141L546 139z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M671.667 139.333L672.333 139.667L671.667 139.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M72 140L74 143L72 140z"/>
        <path style="fill:#3b3536; stroke:none;" d="M196 140L197 141L196 140z"/>
        <path style="fill:#655f60; stroke:none;" d="M254 140L254 144L255 144L254 140M381 140L381 155L382 155L381 140z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M546 140L547 141L546 140M673 140L674 141L673 140z"/>
        <path style="fill:#3b3536; stroke:none;" d="M73 141L74 142L73 141z"/>
        <path style="fill:#655f60; stroke:none;" d="M197 141L198 142L197 141z"/>
        <path style="fill:#3b3536; stroke:none;" d="M253 141L253 152L254 152L253 141z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M547 141C550.044 148.858 557.573 155.3 565 159L565 158L547 141z"/>
        <path style="fill:#3b3536; stroke:none;" d="M671.667 141.333L672.333 141.667L671.667 141.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M674 141L675 142L674 141M72 142L73 143L72 142z"/>
        <path style="fill:#3b3536; stroke:none;" d="M74 142L77 146L74 142M198 142L199 143L198 142z"/>
        <path style="fill:#655f60; stroke:none;" d="M548 142L549 143L548 142z"/>
        <path style="fill:#3b3536; stroke:none;" d="M673 142L674 143L673 142z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M675 142L676 143L675 142M73 143L84 155L73 143z"/>
        <path style="fill:#3b3536; stroke:none;" d="M199 143L202 146L199 143z"/>
        <path style="fill:#655f60; stroke:none;" d="M200 143L201 144L200 143M549 143L550 144L549 143z"/>
        <path style="fill:#3b3536; stroke:none;" d="M674 143L675 144L674 143z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M676 143L677 144L676 143M201 144L206 149L201 144z"/>
        <path style="fill:#655f60; stroke:none;" d="M219 144L219 149L220 149L219 144z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M254 144L254 150L255 150L254 144z"/>
        <path style="fill:#3b3536; stroke:none;" d="M550 144L553 147L550 144M675 144L676 145L675 144z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M677 144L678 145L677 144z"/>
        <path style="fill:#655f60; stroke:none;" d="M75 145L76 146L75 145M550 145L551 146L550 145z"/>
        <path style="fill:#3b3536; stroke:none;" d="M676 145L677 146L676 145z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M678 145L679 146L678 145z"/>
        <path style="fill:#655f60; stroke:none;" d="M76 146L77 147L76 146M202 146L203 147L202 146M551 146L552 147L551 146z"/>
        <path style="fill:#3b3536; stroke:none;" d="M677 146L678 147L677 146z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M679 146L684 155L685 155L679 146z"/>
        <path style="fill:#655f60; stroke:none;" d="M77 147L78 148L77 147M203 147L206 150L203 147M552 147L553 148L552 147z"/>
        <path style="fill:#3b3536; stroke:none;" d="M678 147L679 148L678 147z"/>
        <path style="fill:#655f60; stroke:none;" d="M78 148L80 150L78 148z"/>
        <path style="fill:#3b3536; stroke:none;" d="M79 148L80 149L79 148M203 148L204 149L203 148z"/>
        <path style="fill:#655f60; stroke:none;" d="M553 148L555 150L553 148z"/>
        <path style="fill:#3b3536; stroke:none;" d="M554 148L555 149L554 148z"/>
        <path style="fill:#655f60; stroke:none;" d="M679 148L681 150L679 148z"/>
        <path style="fill:#3b3536; stroke:none;" d="M204 149L205 150L204 149M679 149L680 150L679 149z"/>
        <path style="fill:#655f60; stroke:none;" d="M80 150L81 151L80 150z"/>
        <path style="fill:#3b3536; stroke:none;" d="M81 150L81 152L83 152L81 150M205 150L206 151L205 150z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M206 150L208 152L206 150z"/>
        <path style="fill:#655f60; stroke:none;" d="M254 150L254 154L255 154L254 150z"/>
        <path style="fill:#3b3536; stroke:none;" d="M380 150L380 158L381 158L380 150z"/>
        <path style="fill:#655f60; stroke:none;" d="M555 150L557 152L555 150z"/>
        <path style="fill:#3b3536; stroke:none;" d="M556 150L557 151L556 150M680 150L681 151L680 150z"/>
        <path style="fill:#655f60; stroke:none;" d="M206 151L208 155L209 155L206 151z"/>
        <path style="fill:#3b3536; stroke:none;" d="M681 151L683 154L681 151z"/>
        <path style="fill:#655f60; stroke:none;" d="M82 152L83 153L82 152z"/>
        <path style="fill:#3b3536; stroke:none;" d="M206 152L207 153L206 152M252 152L253 153L252 152z"/>
        <path style="fill:#655f60; stroke:none;" d="M557 152L559 154L557 152z"/>
        <path style="fill:#3b3536; stroke:none;" d="M558 152L559 153L558 152z"/>
        <path style="fill:#655f60; stroke:none;" d="M682 152L683 153L682 152M83 153L85 155L83 153z"/>
        <path style="fill:#3b3536; stroke:none;" d="M84 153L85 154L84 153z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M208 153L209 154L208 153M255 153L257 163L258 163L255 153z"/>
        <path style="fill:#655f60; stroke:none;" d="M346 153L346 156L347 156L346 153z"/>
        <path style="fill:#3b3536; stroke:none;" d="M559 153L560 154L559 153M85 154L87 156L85 154M207 154L208 155L207 154M254 154L254 157L255 157L254 154z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M345 154L345 158L346 158L345 154z"/>
        <path style="fill:#3b3536; stroke:none;" d="M560 154L561 155L560 154z"/>
        <path style="fill:#655f60; stroke:none;" d="M683 154L684 157L685 157L683 154z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M85 155L86 156L85 155z"/>
        <path style="fill:#3b3536; stroke:none;" d="M208 155L210 158L208 155z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M209 155L212 163L213 163L209 155z"/>
        <path style="fill:#3b3536; stroke:none;" d="M220 155L221 163L222 163L220 155z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M381 155L381 160L382 160L381 155z"/>
        <path style="fill:#655f60; stroke:none;" d="M561 155L563 157L561 155z"/>
        <path style="fill:#3b3536; stroke:none;" d="M562 155L563 156L562 155M683 155L684 156L683 155z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M86 156L86 157L90 159L90 158L86 156z"/>
        <path style="fill:#655f60; stroke:none;" d="M87 156L88 157L87 156z"/>
        <path style="fill:#3b3536; stroke:none;" d="M88 156L89 157L88 156z"/>
        <path style="fill:#655f60; stroke:none;" d="M209 156L210 157L209 156z"/>
        <path style="fill:#3b3536; stroke:none;" d="M346 156L346 159L347 159L346 156M563 156L564 157L563 156z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M685 156L687 159L685 156z"/>
        <path style="fill:#655f60; stroke:none;" d="M89 157L89 158L93 160L93 159L89 157z"/>
        <path style="fill:#3b3536; stroke:none;" d="M90 157L91 158L90 157z"/>
        <path style="fill:#655f60; stroke:none;" d="M255.333 157.667L255.667 158.333L255.333 157.667M564 157L566 159L564 157z"/>
        <path style="fill:#3b3536; stroke:none;" d="M565 157L566 158L565 157M684 157L685 158L684 157M92 158L93 159L92 158z"/>
        <path style="fill:#655f60; stroke:none;" d="M210 158L211 159L210 158M220.333 158.667L220.667 159.333L220.333 158.667M345.333 158.667L345.667 159.333L345.333 158.667M380 158L380 162L381 162L380 158z"/>
        <path style="fill:#3b3536; stroke:none;" d="M566 158L566 159L569 160L566 158z"/>
        <path style="fill:#655f60; stroke:none;" d="M685 158L686 161L687 161L685 158z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M91 159L92 160L91 159z"/>
        <path style="fill:#3b3536; stroke:none;" d="M93 159L94 160L93 159M210 159L211 160L210 159M255 159L256 160L255 159z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M344.333 159.667L344.667 160.333L344.333 159.667M566 159L566 160L574 163L574 162L566 159z"/>
        <path style="fill:#655f60; stroke:none;" d="M567 159L568 160L567 159z"/>
        <path style="fill:#3b3536; stroke:none;" d="M685 159L686 160L685 159z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M92 160L92 161L99 163L99 162L92 160z"/>
        <path style="fill:#655f60; stroke:none;" d="M94 160L95 161L94 160z"/>
        <path style="fill:#3b3536; stroke:none;" d="M95 160L96 161L95 160z"/>
        <path style="fill:#655f60; stroke:none;" d="M211.333 160.667L211.667 161.333L211.333 160.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M219 160L220 163L221 163L221 160L219 160z"/>
        <path style="fill:#3b3536; stroke:none;" d="M345 160L345 162L347 160L345 160z"/>
        <path style="fill:#655f60; stroke:none;" d="M570 160L571 161L570 160z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M687 160L688 165L689 165L687 160z"/>
        <path style="fill:#655f60; stroke:none;" d="M97 161L98 162L97 161z"/>
        <path style="fill:#3b3536; stroke:none;" d="M98 161L99 162L98 161z"/>
        <path style="fill:#655f60; stroke:none;" d="M256 161L257 165L258 165L256 161M344.333 161.667L344.667 162.333L344.333 161.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M379.333 161.667L379.667 162.333L379.333 161.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M572 161L573 162L572 161z"/>
        <path style="fill:#3b3536; stroke:none;" d="M573 161L574 162L573 161M686.333 161.667L686.667 162.333L686.333 161.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M99.6667 162.333L100.333 162.667L99.6667 162.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M101 162L101 163L106 164L106 163L101 162M211 162L212 163L211 162z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M343 162C338.234 173.445 330.326 182.642 319 188L319 189C328.057 186.114 344.819 172.924 343 162M380 162L376 178L377 178L380 162z"/>
        <path style="fill:#655f60; stroke:none;" d="M574.667 162.333L575.333 162.667L574.667 162.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M576.667 162.333L577.333 162.667L576.667 162.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M687.333 162.667L687.667 163.333L687.333 162.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M100.667 163.333L101.333 163.667L100.667 163.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M102 163L103 164L102 163M212.333 163.667L212.667 164.333L212.333 163.667M221 163L222 169L223 169L221 163z"/>
        <path style="fill:#3b3536; stroke:none;" d="M256 163L257 164L256 163M344 163L345 164L344 163z"/>
        <path style="fill:#655f60; stroke:none;" d="M379 163L379 166L380 166L379 163z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M575.667 163.333L576.333 163.667L575.667 163.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M577.667 163.333L578.333 163.667L577.667 163.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M579.667 163.333L580.333 163.667L579.667 163.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M103 164L103 165C126.844 169.427 155.14 158.81 176 173C169.68 164.245 160.803 165 151 165C134.952 165 118.974 165.261 103 164z"/>
        <path style="fill:#655f60; stroke:none;" d="M107.667 164.333L108.333 164.667L107.667 164.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M109.667 164.333L110.333 164.667L109.667 164.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M213.333 164.667L213.667 165.333L213.333 164.667M258 164C260.853 173.882 268.774 182.61 278 187L278 186L258 164z"/>
        <path style="fill:#655f60; stroke:none;" d="M343 164L341 170L342 170L343 164z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M578 164L578 165L633 166L615 165L578 164z"/>
        <path style="fill:#655f60; stroke:none;" d="M582 164L582 165L585 165L582 164z"/>
        <path style="fill:#3b3536; stroke:none;" d="M585.667 164.333L586.333 164.667L585.667 164.333M687 164L688 172L689 172L687 164z"/>
        <path style="fill:#655f60; stroke:none;" d="M165.667 165.333L166.333 165.667L165.667 165.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M167.667 165.333L168.333 165.667L167.667 165.333M212.333 165.667L212.667 166.333L212.333 165.667M222 165L223 166L222 165M257 165L259 168L257 165z"/>
        <path style="fill:#655f60; stroke:none;" d="M633 165L634 166L633 165z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M634 165L634 166L638 166L634 165z"/>
        <path style="fill:#655f60; stroke:none;" d="M638 165L638 166L643 166L638 165z"/>
        <path style="fill:#3b3536; stroke:none;" d="M643 165L644 166L643 165z"/>
        <path style="fill:#655f60; stroke:none;" d="M688.333 165.667L688.667 166.333L688.333 165.667M169 166L170 167L169 166z"/>
        <path style="fill:#3b3536; stroke:none;" d="M170 166L171 167L170 166z"/>
        <path style="fill:#655f60; stroke:none;" d="M213.333 166.667L213.667 167.333L213.333 166.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M221.333 166.667L221.667 167.333L221.333 166.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M258 166L259 167L258 166z"/>
        <path style="fill:#3b3536; stroke:none;" d="M343 166L344 167L343 166M378 166L377 171L378 171L378 166z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M641 166L641 167L649 170L649 169L641 166z"/>
        <path style="fill:#655f60; stroke:none;" d="M644 166L645 167L644 166z"/>
        <path style="fill:#3b3536; stroke:none;" d="M645 166L645 167L649 169L645 166z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M689 166L690 175L691 175L689 166z"/>
        <path style="fill:#3b3536; stroke:none;" d="M171.667 167.333L172.333 167.667L171.667 167.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M214 167L214 192L215 192C216.391 184.51 217.691 173.943 214 167z"/>
        <path style="fill:#655f60; stroke:none;" d="M646 167L647 168L646 167M172 168L173 169L172 168z"/>
        <path style="fill:#3b3536; stroke:none;" d="M213 168L213 171L214 171L213 168z"/>
        <path style="fill:#655f60; stroke:none;" d="M259 168L260 169L259 168z"/>
        <path style="fill:#3b3536; stroke:none;" d="M342 168L343 169L342 168z"/>
        <path style="fill:#655f60; stroke:none;" d="M378.333 168.667L378.667 169.333L378.333 168.667M647 168L648 169L647 168M173 169L175 171L173 169z"/>
        <path style="fill:#3b3536; stroke:none;" d="M174 169L175 170L174 169z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M222 169L224 177L225 177L222 169z"/>
        <path style="fill:#3b3536; stroke:none;" d="M223 169L224 170L223 169M259 169L260 170L259 169M649 169L652 172L649 169z"/>
        <path style="fill:#655f60; stroke:none;" d="M223.333 170.667L223.667 171.333L223.333 170.667M260 170L261 171L260 170M340 170L341 171L340 170M649 170L652 176L653 176L649 170M689 170L689 173L690 173L689 170M175 171L176 172L175 171M214.333 171.667L214.667 172.333L214.333 171.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M260 171L261 172L260 171M340 171L338 176L339 176L340 171z"/>
        <path style="fill:#655f60; stroke:none;" d="M377.333 171.667L377.667 172.333L377.333 171.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M649 171L650 172L649 171z"/>
        <path style="fill:#3b3536; stroke:none;" d="M176 172L177 175L178 175L176 172M224.333 172.667L224.667 173.333L224.333 172.667M261 172L262 173L261 172z"/>
        <path style="fill:#655f60; stroke:none;" d="M339 172L340 173L339 172z"/>
        <path style="fill:#3b3536; stroke:none;" d="M376.333 172.667L376.667 173.333L376.333 172.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M650 172L651 173L650 172z"/>
        <path style="fill:#655f60; stroke:none;" d="M176 173L177 174L176 173z"/>
        <path style="fill:#3b3536; stroke:none;" d="M214.333 173.667L214.667 174.333L214.333 173.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M262 173L264 175L262 173M338 173L339 174L338 173z"/>
        <path style="fill:#3b3536; stroke:none;" d="M652 173L653 174L652 173M689 173L689 176L690 176L689 173z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M176.333 174.667L176.667 175.333L176.333 174.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M224 174L225 175L224 174z"/>
        <path style="fill:#3b3536; stroke:none;" d="M262 174L263 175L262 174z"/>
        <path style="fill:#655f60; stroke:none;" d="M376.333 174.667L376.667 175.333L376.333 174.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M651.333 174.667L651.667 175.333L651.333 174.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M177 175L177 178L178 178L177 175z"/>
        <path style="fill:#3b3536; stroke:none;" d="M225 175L227 178L225 175M263 175L264 176L263 175z"/>
        <path style="fill:#655f60; stroke:none;" d="M337 175L338 176L337 175z"/>
        <path style="fill:#3b3536; stroke:none;" d="M375.333 175.667L375.667 176.333L375.333 175.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M690 175L690 185L691 185L690 175z"/>
        <path style="fill:#3b3536; stroke:none;" d="M264.333 176.667L264.667 177.333L264.333 176.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M336 176L329 184L336 176z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M652 176C651.847 193.085 638.438 193 625 193L571 193C565.639 193 554.912 190.962 550.318 194.028C544.855 197.673 547.959 217.954 548.001 224C548.021 226.953 547.689 230.655 551.148 231.682C559.72 234.227 572.06 232 581 232L648 232L648 231L549 231L549 205C549.001 201.85 548.263 197.066 551.318 195.028C556.256 191.733 568.214 194 574 194L633 194C642.798 193.999 657.414 188.93 652 176z"/>
        <path style="fill:#3b3536; stroke:none;" d="M653.333 176.667L653.667 177.333L653.333 176.667M178 177L178 182L179 182L178 177z"/>
        <path style="fill:#655f60; stroke:none;" d="M225 177L226 180L227 180L225 177M265 177L266 178L265 177z"/>
        <path style="fill:#3b3536; stroke:none;" d="M336 177L337 178L336 177z"/>
        <path style="fill:#655f60; stroke:none;" d="M375 177L374 181L375 181L375 177z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M385 177L385 225L386 225C386 211.474 390.209 189.414 385 177M177 178L177 182L178 182L177 178M225.333 178.667L225.667 179.333L225.333 178.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M266 178L271 183L266 178z"/>
        <path style="fill:#3b3536; stroke:none;" d="M335 178L336 179L335 178M374 178L375 179L374 178z"/>
        <path style="fill:#655f60; stroke:none;" d="M653 178L653 181L654 181L653 178z"/>
        <path style="fill:#3b3536; stroke:none;" d="M266 179L267 180L266 179M334 179L335 180L334 179z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M375 179L376 180L375 179M226 180L230 189L231 189L226 180z"/>
        <path style="fill:#3b3536; stroke:none;" d="M227 180L228 181L227 180M267 180L268 181L267 180M333 180L334 181L333 180M373 180L372 183L373 180z"/>
        <path style="fill:#655f60; stroke:none;" d="M227 181L228 182L227 181z"/>
        <path style="fill:#3b3536; stroke:none;" d="M268 181L269 182L268 181M332 181L333 182L332 181z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M374 181C365.673 200.325 347.837 216.245 328 223L328 224C343.172 220.396 356.598 209.03 365.985 197C369.148 192.946 374.877 186.365 374 181z"/>
        <path style="fill:#3b3536; stroke:none;" d="M653 181L653 184L654 184L653 181z"/>
        <path style="fill:#655f60; stroke:none;" d="M177.333 182.667L177.667 183.333L177.333 182.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M228 182L229 183L228 182M269 182L270 183L269 182M331 182L332 183L331 182z"/>
        <path style="fill:#655f60; stroke:none;" d="M373 182L374 183L373 182M228 183L229 184L228 183M271 183L272 184L271 183z"/>
        <path style="fill:#3b3536; stroke:none;" d="M330 183L331 184L330 183z"/>
        <path style="fill:#655f60; stroke:none;" d="M372.333 183.667L372.667 184.333L372.333 183.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M176 184L168 192L168 193C172.081 191.609 176.64 188.8 176 184z"/>
        <path style="fill:#3b3536; stroke:none;" d="M177.333 184.667L177.667 185.333L177.333 184.667M214.333 184.667L214.667 185.333L214.333 184.667M229 184L230 185L229 184z"/>
        <path style="fill:#655f60; stroke:none;" d="M273 184L275 186L273 184M327 184L326 186L327 184z"/>
        <path style="fill:#3b3536; stroke:none;" d="M328 184L329 185L328 184M371 184L370 187L371 184z"/>
        <path style="fill:#655f60; stroke:none;" d="M652 184L653 185L652 184z"/>
        <path style="fill:#3b3536; stroke:none;" d="M689 184L689 187L690 187L689 184z"/>
        <path style="fill:#655f60; stroke:none;" d="M229 185L230 186L229 185z"/>
        <path style="fill:#3b3536; stroke:none;" d="M273 185L274 186L273 185M327 185L328 186L327 185M652 185L651 188L652 185z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M690 185C688.37 204.951 672.635 224.336 653 229L653 230C668.012 227.75 681.312 214.538 687.127 201C689.121 196.359 691.918 189.916 690 185z"/>
        <path style="fill:#655f60; stroke:none;" d="M176 186L177 187L176 186M214 186L214 189L215 189L214 186z"/>
        <path style="fill:#3b3536; stroke:none;" d="M230 186L232 188L230 186M275 186L275 187L279 189L279 188L275 186z"/>
        <path style="fill:#655f60; stroke:none;" d="M276 186L277 187L276 186M324 186L323 188L324 186z"/>
        <path style="fill:#3b3536; stroke:none;" d="M325 186L326 187L325 186z"/>
        <path style="fill:#655f60; stroke:none;" d="M371 186L372 187L371 186M651 186L652 187L651 186z"/>
        <path style="fill:#3b3536; stroke:none;" d="M213 187L212 194L213 194L213 187z"/>
        <path style="fill:#655f60; stroke:none;" d="M230 187L231 188L230 187M278 187L281 189L281 188L278 187z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M279 187L280 188L279 187z"/>
        <path style="fill:#3b3536; stroke:none;" d="M324 187L325 188L324 187z"/>
        <path style="fill:#655f60; stroke:none;" d="M370 187L371 188L370 187M689 187L689 190L690 190L689 187z"/>
        <path style="fill:#3b3536; stroke:none;" d="M175 188L176 189L175 188z"/>
        <path style="fill:#655f60; stroke:none;" d="M231 188C229.041 194.98 217.207 200.136 217.207 207C217.207 212.093 235.869 230.684 241 230.079C246.47 229.433 253.047 220.192 256 216C251.687 219.038 246.259 227.678 241 228.369C236.336 228.981 219.056 211.643 219.056 207C219.056 199.372 233.655 196.493 231 188z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M281 188L281 189L288 191L288 190L281 188z"/>
        <path style="fill:#655f60; stroke:none;" d="M321 188L322 189L321 188z"/>
        <path style="fill:#3b3536; stroke:none;" d="M322.667 188.333L323.333 188.667L322.667 188.333M369 188L367 192L368 192L369 188z"/>
        <path style="fill:#655f60; stroke:none;" d="M650 188L648 191L650 188z"/>
        <path style="fill:#3b3536; stroke:none;" d="M688 188L687 196L688 196L688 188z"/>
        <path style="fill:#655f60; stroke:none;" d="M174 189L173 191L174 189z"/>
        <path style="fill:#3b3536; stroke:none;" d="M232.333 189.667L232.667 190.333L232.333 189.667M280 189L280 190L284 191L284 190L280 189z"/>
        <path style="fill:#655f60; stroke:none;" d="M282 189L283 190L282 189z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M289 191L289 192C299.186 193.287 308.135 193.134 318 190L289 191z"/>
        <path style="fill:#655f60; stroke:none;" d="M316 190L316 191L320 190L316 190z"/>
        <path style="fill:#3b3536; stroke:none;" d="M320 189L321 190L320 189z"/>
        <path style="fill:#655f60; stroke:none;" d="M369 189L370 190L369 189z"/>
        <path style="fill:#3b3536; stroke:none;" d="M650 189L651 190L650 189M174 190L175 191L174 190z"/>
        <path style="fill:#655f60; stroke:none;" d="M284 190L285 191L284 190z"/>
        <path style="fill:#3b3536; stroke:none;" d="M318 190L319 191L318 190z"/>
        <path style="fill:#655f60; stroke:none;" d="M368.333 190.667L368.667 191.333L368.333 190.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M649 190L650 191L649 190M172 191L173 192L172 191z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M230 191L231 192L230 191z"/>
        <path style="fill:#3b3536; stroke:none;" d="M285.667 191.333L286.333 191.667L285.667 191.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M287.667 191.333L288.333 191.667L287.667 191.333M313.667 191.333L314.333 191.667L313.667 191.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M315.667 191.333L316.333 191.667L315.667 191.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M647 191L648 192L647 191M170 192L171 193L170 192z"/>
        <path style="fill:#3b3536; stroke:none;" d="M171 192L172 193L171 192z"/>
        <path style="fill:#655f60; stroke:none;" d="M213 192L212 197L213 197L213 192z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M229 192L230 193L229 192z"/>
        <path style="fill:#3b3536; stroke:none;" d="M231 192L232 193L231 192M288 192L288 193L291 193L288 192z"/>
        <path style="fill:#655f60; stroke:none;" d="M291.667 192.333L292.333 192.667L291.667 192.333M308 192L308 193L311 193L308 192z"/>
        <path style="fill:#3b3536; stroke:none;" d="M311.667 192.333L312.333 192.667L311.667 192.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M367 192L368 193L367 192M645 192L646 193L645 192z"/>
        <path style="fill:#3b3536; stroke:none;" d="M646.667 192.333L647.333 192.667L646.667 192.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M688.333 192.667L688.667 193.333L688.333 192.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M173 232L173 231L74 231L74 206C74.0002 202.899 73.1775 198.029 75.6034 195.603C79.6819 191.525 93.564 194 99 194L167 194C160.806 191.401 151.686 193 145 193L98 193C91.8215 193 80.8992 190.897 75.3179 193.742C72.402 195.229 73.0056 199.275 73 202C72.9883 207.653 69.9713 227.304 74.6034 230.972C79.4306 234.795 94.9658 232 101 232L173 232z"/>
        <path style="fill:#655f60; stroke:none;" d="M167.667 193.333L168.333 193.667L167.667 193.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M169.667 193.333L170.333 193.667L169.667 193.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M228 193L229 194L228 193z"/>
        <path style="fill:#3b3536; stroke:none;" d="M230 193L231 194L230 193M292 193L292 194L309 194L292 193z"/>
        <path style="fill:#655f60; stroke:none;" d="M366 193L367 194L366 193z"/>
        <path style="fill:#3b3536; stroke:none;" d="M423 193L424 194L423 193z"/>
        <path style="fill:#655f60; stroke:none;" d="M643 193L644 194L643 193z"/>
        <path style="fill:#3b3536; stroke:none;" d="M644.667 193.333L645.333 193.667L644.667 193.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M75 194L75 195L166 195L138 194L75 194z"/>
        <path style="fill:#3b3536; stroke:none;" d="M166.667 194.333L167.333 194.667L166.667 194.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M213.333 194.667L213.667 195.333L213.333 194.667M227 194L228 195L227 194z"/>
        <path style="fill:#3b3536; stroke:none;" d="M229 194L230 195L229 194M365 194L364 196L365 194M424 194L425 195L424 194z"/>
        <path style="fill:#655f60; stroke:none;" d="M425 194L425 195L482 195C487.51 195 497.681 192.88 501 198C502.384 191.837 487.821 194 484 194L425 194M550 194L550 195L641 195L613 194L550 194z"/>
        <path style="fill:#3b3536; stroke:none;" d="M641.667 194.333L642.333 194.667L641.667 194.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M74 195L75 196L74 195z"/>
        <path style="fill:#3b3536; stroke:none;" d="M161 195L162 196L161 195z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M226 195L227 196L226 195z"/>
        <path style="fill:#3b3536; stroke:none;" d="M228 195L229 196L228 195z"/>
        <path style="fill:#655f60; stroke:none;" d="M365 195L366 196L365 195z"/>
        <path style="fill:#3b3536; stroke:none;" d="M500 195L501 196L500 195z"/>
        <path style="fill:#655f60; stroke:none;" d="M549.333 195.667L549.667 196.333L549.333 195.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M74 196C74 203.382 70.4227 223.582 75.0278 229.397C78.3206 233.554 94.044 231 99 231L170 231L170 230L75 230L74 196M211.333 196.667L211.667 197.333L211.333 196.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M225 196L226 197L225 196z"/>
        <path style="fill:#3b3536; stroke:none;" d="M227 196L228 197L227 196z"/>
        <path style="fill:#655f60; stroke:none;" d="M364 196L365 197L364 196M687 196L688 197L687 196z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M212 197L210 203L211 203L212 197M224 197L225 198L224 197z"/>
        <path style="fill:#3b3536; stroke:none;" d="M226 197L227 198L226 197z"/>
        <path style="fill:#655f60; stroke:none;" d="M363 197L364 198L363 197z"/>
        <path style="fill:#3b3536; stroke:none;" d="M549 197L549 224L550 224L549 197M686 197L687 198L686 197z"/>
        <path style="fill:#655f60; stroke:none;" d="M211 198L212 199L211 198z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M223 198L224 199L223 198z"/>
        <path style="fill:#3b3536; stroke:none;" d="M225 198L226 199L225 198M362 198L351 208L351 209C355.392 206.952 360.821 202.862 362 198M501.333 198.667L501.667 199.333L501.333 198.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M686.333 198.667L686.667 199.333L686.333 198.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M222 199L223 200L222 199z"/>
        <path style="fill:#3b3536; stroke:none;" d="M224 199L225 200L224 199z"/>
        <path style="fill:#655f60; stroke:none;" d="M362 199L363 200L362 199M210 200L211 201L210 200z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M221 200L222 201L221 200z"/>
        <path style="fill:#3b3536; stroke:none;" d="M223 200L224 201L223 200z"/>
        <path style="fill:#655f60; stroke:none;" d="M361 200L362 201L361 200M501 200L501 225L502 225L501 200z"/>
        <path style="fill:#3b3536; stroke:none;" d="M685 200L686 201L685 200z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M220 201L221 202L220 201z"/>
        <path style="fill:#3b3536; stroke:none;" d="M222 201L223 202L222 201z"/>
        <path style="fill:#655f60; stroke:none;" d="M360 201L361 202L360 201M685 201L686 202L685 201z"/>
        <path style="fill:#3b3536; stroke:none;" d="M209 202L207 206L208 206L209 202z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M219 202L220 203L219 202z"/>
        <path style="fill:#3b3536; stroke:none;" d="M221 202L222 203L221 202z"/>
        <path style="fill:#655f60; stroke:none;" d="M359 202L360 203L359 202z"/>
        <path style="fill:#3b3536; stroke:none;" d="M684 202L682 206L683 206L684 202z"/>
        <path style="fill:#655f60; stroke:none;" d="M209 203L210 204L209 203z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M218 203L219 204L218 203z"/>
        <path style="fill:#3b3536; stroke:none;" d="M220 203L221 204L220 203z"/>
        <path style="fill:#655f60; stroke:none;" d="M358 203L359 204L358 203M684 203L685 204L684 203z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M209 204L210 205L209 204M217 204L218 205L217 204z"/>
        <path style="fill:#3b3536; stroke:none;" d="M219 204L220 205L219 204z"/>
        <path style="fill:#655f60; stroke:none;" d="M357 204L358 205L357 204M208 205L207 207L208 205z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M216 205L217 206L216 205z"/>
        <path style="fill:#3b3536; stroke:none;" d="M218 205L219 206L218 205z"/>
        <path style="fill:#655f60; stroke:none;" d="M356 205L357 206L356 205M683 205L684 206L683 205z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M208 206L209 207L208 206z"/>
        <path style="fill:#3b3536; stroke:none;" d="M217.333 206.667L217.667 207.333L217.333 206.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M355 206L356 207L355 206M682 206L681 209L682 206z"/>
        <path style="fill:#3b3536; stroke:none;" d="M206 207L207 208L206 207z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M207 207L208 208L207 207z"/>
        <path style="fill:#655f60; stroke:none;" d="M354 207L355 208L354 207z"/>
        <path style="fill:#3b3536; stroke:none;" d="M681 207L682 208L681 207z"/>
        <path style="fill:#655f60; stroke:none;" d="M206 208L205 210L206 208z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M216 208L217 209L216 208z"/>
        <path style="fill:#3b3536; stroke:none;" d="M218 208L219 209L218 208z"/>
        <path style="fill:#655f60; stroke:none;" d="M353 208L354 209L353 208z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M206 209L207 210L206 209M217 209L218 210L217 209z"/>
        <path style="fill:#655f60; stroke:none;" d="M351.667 209.333L352.333 209.667L351.667 209.333M680 209L681 210L680 209z"/>
        <path style="fill:#3b3536; stroke:none;" d="M204 210L202 213L204 210z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M205 210L206 211L205 210M218 210L219 211L218 210z"/>
        <path style="fill:#655f60; stroke:none;" d="M350 210L351 211L350 210z"/>
        <path style="fill:#3b3536; stroke:none;" d="M679 210L677 213L679 210z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M204 211L196 221L204 211M219 211L220 212L219 211z"/>
        <path style="fill:#3b3536; stroke:none;" d="M348 211L347 213L348 211z"/>
        <path style="fill:#655f60; stroke:none;" d="M349 211L350 212L349 211M679 211L680 212L679 211M203 212L204 213L203 212z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M220 212L221 213L220 212z"/>
        <path style="fill:#3b3536; stroke:none;" d="M222 212L223 213L222 212z"/>
        <path style="fill:#655f60; stroke:none;" d="M348 212L349 213L348 212M678 212L679 213L678 212M202 213L203 214L202 213z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M221 213L222 214L221 213z"/>
        <path style="fill:#3b3536; stroke:none;" d="M345 213L342 215L342 216L346 214L345 213z"/>
        <path style="fill:#655f60; stroke:none;" d="M346 213L347 214L346 213M677 213L678 214L677 213z"/>
        <path style="fill:#3b3536; stroke:none;" d="M200 214L199 216L201 216L200 214z"/>
        <path style="fill:#655f60; stroke:none;" d="M201 214L202 215L201 214z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M222 214L223 215L222 214z"/>
        <path style="fill:#3b3536; stroke:none;" d="M224 214L225 215L224 214M255 215L255 216L259 216L255 215z"/>
        <path style="fill:#655f60; stroke:none;" d="M345 214L346 215L345 214z"/>
        <path style="fill:#3b3536; stroke:none;" d="M675.333 214.667L675.667 215.333L675.333 214.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M676 214L677 215L676 214z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M223 215L224 216L223 215z"/>
        <path style="fill:#655f60; stroke:none;" d="M343 215L344 216L343 215M199 216L200 217L199 216z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M224 216L225 217L224 216z"/>
        <path style="fill:#3b3536; stroke:none;" d="M226 216L227 217L226 216M254 216L255 217L254 216z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M255 217L255 218L260 218L255 217z"/>
        <path style="fill:#655f60; stroke:none;" d="M259 216L259 217L263 219L263 218L259 216z"/>
        <path style="fill:#3b3536; stroke:none;" d="M260 216L261 217L260 216M340 216L339 218L340 216z"/>
        <path style="fill:#655f60; stroke:none;" d="M341 216L342 217L341 216z"/>
        <path style="fill:#3b3536; stroke:none;" d="M673 216L674 217L673 216z"/>
        <path style="fill:#655f60; stroke:none;" d="M674 216L675 217L674 216z"/>
        <path style="fill:#3b3536; stroke:none;" d="M197 217L194 221L197 217z"/>
        <path style="fill:#655f60; stroke:none;" d="M198 217L199 218L198 217z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M225 217L226 218L225 217z"/>
        <path style="fill:#3b3536; stroke:none;" d="M253 217L254 218L253 217M262 217L263 218L262 217z"/>
        <path style="fill:#655f60; stroke:none;" d="M340 217L341 218L340 217M673 217L674 218L673 217M197 218L198 219L197 218z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M226 218L227 219L226 218z"/>
        <path style="fill:#3b3536; stroke:none;" d="M252 218L253 219L252 218z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M254 218L255 219L254 218M261 218L262 219L261 218z"/>
        <path style="fill:#3b3536; stroke:none;" d="M263 218L263 219L268 221L268 220L263 218M337 218L338 219L337 218z"/>
        <path style="fill:#655f60; stroke:none;" d="M338 218L339 219L338 218z"/>
        <path style="fill:#3b3536; stroke:none;" d="M671 218L669 221L671 218z"/>
        <path style="fill:#655f60; stroke:none;" d="M672 218L673 219L672 218M196 219L197 220L196 219z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M227 219L228 220L227 219z"/>
        <path style="fill:#3b3536; stroke:none;" d="M251 219L252 220L251 219z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M253 219L254 220L253 219M262 219L262 220L268 222L268 221L262 219z"/>
        <path style="fill:#655f60; stroke:none;" d="M264 219L265 220L264 219z"/>
        <path style="fill:#3b3536; stroke:none;" d="M332 220L332 221L336 220L332 220z"/>
        <path style="fill:#655f60; stroke:none;" d="M336 219L337 220L336 219M671 219L672 220L671 219M195 220L196 221L195 220z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M228 220L229 221L228 220z"/>
        <path style="fill:#3b3536; stroke:none;" d="M250 220L251 221L250 220z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M252 220L253 221L252 220z"/>
        <path style="fill:#655f60; stroke:none;" d="M266 220L267 221L266 220M334 220L335 221L334 220M670 220L671 221L670 220M193 221L192 223L193 221z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M194 221L195 222L194 221M229 221L230 222L229 221z"/>
        <path style="fill:#3b3536; stroke:none;" d="M249 221L250 222L249 221z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M251 221L252 222L251 221z"/>
        <path style="fill:#655f60; stroke:none;" d="M268.667 221.333L269.333 221.667L268.667 221.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M270 221L270 222L276 224L276 223L270 221M330 221L331 222L330 221z"/>
        <path style="fill:#655f60; stroke:none;" d="M331.667 221.333L332.333 221.667L331.667 221.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M667 221L665 224L667 221z"/>
        <path style="fill:#655f60; stroke:none;" d="M668 221L669 222L668 221z"/>
        <path style="fill:#3b3536; stroke:none;" d="M191 222L192 223L191 222z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M193 222L194 223L193 222M230 222L231 223L230 222z"/>
        <path style="fill:#3b3536; stroke:none;" d="M232 222L233 223L232 222M248 222L249 223L248 222z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M250 222L251 223L250 222M269 222L269 223L273 224L273 223L269 222z"/>
        <path style="fill:#655f60; stroke:none;" d="M271 222L272 223L271 222z"/>
        <path style="fill:#3b3536; stroke:none;" d="M327.667 222.333L328.333 222.667L327.667 222.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M329 222L330 223L329 222M667 222L668 223L667 222M190 223L191 224L190 223z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M191.667 223.333L192.333 223.667L191.667 223.333M231 223L232 224L231 223z"/>
        <path style="fill:#3b3536; stroke:none;" d="M247 223L248 224L247 223z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M249 223L250 224L249 223z"/>
        <path style="fill:#655f60; stroke:none;" d="M273.667 223.333L274.333 223.667L273.667 223.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M325 223L326 224L325 223z"/>
        <path style="fill:#655f60; stroke:none;" d="M326.667 223.333L327.333 223.667L326.667 223.333M666 223L667 224L666 223z"/>
        <path style="fill:#3b3536; stroke:none;" d="M187 224L183 226L183 227L188 225L187 224z"/>
        <path style="fill:#655f60; stroke:none;" d="M188 224L187 226L188 224z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M188 226L191 224L188 226M232 224L233 225L232 224z"/>
        <path style="fill:#3b3536; stroke:none;" d="M234 224L235 225L234 224z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M248 224L249 225L248 224M274 224L274 225L284 227L284 226L274 224z"/>
        <path style="fill:#655f60; stroke:none;" d="M277.667 224.333L278.333 224.667L277.667 224.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M279 224L280 225L279 224M321.667 224.333L322.333 224.667L321.667 224.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M323.667 224.333L324.333 224.667L323.667 224.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M325.667 224.333L326.333 224.667L325.667 224.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M538 224L539 225L538 224z"/>
        <path style="fill:#655f60; stroke:none;" d="M549 224L551 231L549 224z"/>
        <path style="fill:#3b3536; stroke:none;" d="M663 224L664 225L663 224z"/>
        <path style="fill:#655f60; stroke:none;" d="M664 224L665 225L664 224z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M233 225L234 226L233 225M247 225L248 226L247 225z"/>
        <path style="fill:#655f60; stroke:none;" d="M280 225L280 226L283 226L280 225z"/>
        <path style="fill:#3b3536; stroke:none;" d="M283.667 225.333L284.333 225.667L283.667 225.333M316 225L316 226L319 226L316 225z"/>
        <path style="fill:#655f60; stroke:none;" d="M319 225L319 226L322 226L319 225z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M322 225L322 226L325 226L322 225z"/>
        <path style="fill:#3b3536; stroke:none;" d="M501 225L502 226L501 225M661 225L662 226L661 225z"/>
        <path style="fill:#655f60; stroke:none;" d="M662 225L663 226L662 225M185 226L186 227L185 226z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M186.667 226.333L187.333 226.667L186.667 226.333M234 226L235 227L234 226z"/>
        <path style="fill:#3b3536; stroke:none;" d="M236 226L237 227L236 226z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M246 226L247 227L246 226z"/>
        <path style="fill:#655f60; stroke:none;" d="M284 226L284 227L287 227L284 226z"/>
        <path style="fill:#3b3536; stroke:none;" d="M287 226L287 227L293 227L287 226M309 226L309 227L315 227L309 226z"/>
        <path style="fill:#655f60; stroke:none;" d="M315.667 226.333L316.333 226.667L315.667 226.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M317 226L317 227L321 227L317 226z"/>
        <path style="fill:#655f60; stroke:none;" d="M501 226L501 229L502 229L501 226z"/>
        <path style="fill:#3b3536; stroke:none;" d="M538.333 226.667L538.667 227.333L538.333 226.667M655 227L655 228L660 227L655 227z"/>
        <path style="fill:#655f60; stroke:none;" d="M660 226L661 227L660 226z"/>
        <path style="fill:#3b3536; stroke:none;" d="M181 227L182 228L181 227z"/>
        <path style="fill:#655f60; stroke:none;" d="M182 227L183 228L182 227z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M183.667 227.333L184.333 227.667L183.667 227.333M235 227L236 228L235 227z"/>
        <path style="fill:#3b3536; stroke:none;" d="M243 227L244 228L243 227z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M245 227L246 228L245 227M285 227L285 228L290 228L285 227z"/>
        <path style="fill:#655f60; stroke:none;" d="M290 227L290 228L296 228L290 227z"/>
        <path style="fill:#3b3536; stroke:none;" d="M296 227L296 228L306 228L296 227z"/>
        <path style="fill:#655f60; stroke:none;" d="M306 227L306 228L311 228L306 227z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M311 227L311 228L317 228L311 227M385 227L386 228L385 227z"/>
        <path style="fill:#655f60; stroke:none;" d="M657.667 227.333L658.333 227.667L657.667 227.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M178 228L179 229L178 228z"/>
        <path style="fill:#655f60; stroke:none;" d="M179.667 228.333L180.333 228.667L179.667 228.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M181.667 228.333L182.333 228.667L181.667 228.333M236 228L237 229L236 228z"/>
        <path style="fill:#3b3536; stroke:none;" d="M238 228L239 229L238 228z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M244 228L245 229L244 228M291 228L291 229L311 229L291 228z"/>
        <path style="fill:#3b3536; stroke:none;" d="M653 228L654 229L653 228z"/>
        <path style="fill:#655f60; stroke:none;" d="M654.667 228.333L655.333 228.667L654.667 228.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M173.667 229.333L174.333 229.667L173.667 229.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M175 229L175 230L178 230L175 229z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M178.667 229.333L179.333 229.667L178.667 229.333M237 229L238 230L237 229M243 229L244 230L243 229z"/>
        <path style="fill:#3b3536; stroke:none;" d="M387 230L387 231L538 231C526.314 226.096 505.694 229.943 493 229.999C457.668 230.156 422.332 230 387 230M647 229L647 230L650 230L647 229z"/>
        <path style="fill:#655f60; stroke:none;" d="M650 229L650 230L653 230L650 229M74 230L75 231L74 230M170 230L170 231L174 231L170 230z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M174 230L174 231L177 231L174 230M238 230L239 231L238 230M242 230L243 231L242 230z"/>
        <path style="fill:#655f60; stroke:none;" d="M501 230L502 231L501 230z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M539 230C524.575 234.264 505.049 231 490 231L386 231L386 232L503 232L531 232L539 230z"/>
        <path style="fill:#3b3536; stroke:none;" d="M551 230L551 231L645 231L616 230L551 230z"/>
        <path style="fill:#655f60; stroke:none;" d="M645 230L645 231L649 231L645 230z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M649 230L649 231L652 231L649 230M239 231L239 232L242 232L239 231M315 254L315 255L319 255L315 254M338 254L338 255L343 255L338 254M530 254L530 255L534 255L530 254M577 254L577 255L586 257L577 254M166.667 255.333L167.333 255.667L166.667 255.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M168 255L168 256L187 256L168 255z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M187 255L188 256L187 255M193.667 255.333L194.333 255.667L193.667 255.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M195 255L196 256L195 255z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M196 255L197 280L198 280C198 272.949 200.361 260.756 196 255M205.667 255.333L206.333 255.667L205.667 255.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M207.667 255.333L208.333 255.667L207.667 255.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M209 255L210 258L211 258L209 255M225.667 255.333L226.333 255.667L225.667 255.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M227 255L228 256L227 255z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M228 255L228 256L231 256L228 255M238.667 255.333L239.333 255.667L238.667 255.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M240 255L240 256L249 256L240 255z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M249 255L250 256L249 255z"/>
        <path style="fill:#655f60; stroke:none;" d="M250 255L250 256L254 256L250 255z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M254 255L254 259C255.813 257.444 255.813 256.556 254 255M262.667 255.333L263.333 255.667L262.667 255.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M264 255L265 256L264 255z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M265 255L266 282L279 284L280 284C277.262 279.776 271.57 281 267 281C267 273.749 269.478 260.911 265 255M284.667 255.333L285.333 255.667L284.667 255.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M286 255L287 256L286 255z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M287 255L288 256L287 255z"/>
        <path style="fill:#655f60; stroke:none;" d="M288 255L288 256L297 256L288 255z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M297 255L298 256L297 255z"/>
        <path style="fill:#655f60; stroke:none;" d="M298.667 255.333L299.333 255.667L298.667 255.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M300 255L300 259C301.813 257.444 301.813 256.556 300 255M312 255L313 256L312 255z"/>
        <path style="fill:#655f60; stroke:none;" d="M313.667 255.333L314.333 255.667L313.667 255.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M315 255L315 256L319 256L315 255z"/>
        <path style="fill:#655f60; stroke:none;" d="M319.667 255.333L320.333 255.667L319.667 255.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M321 255L322 256L321 255M331 261L332 261L337 256L331 261z"/>
        <path style="fill:#655f60; stroke:none;" d="M337.667 255.333L338.333 255.667L337.667 255.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M339 255L339 256L342 256L339 255z"/>
        <path style="fill:#655f60; stroke:none;" d="M342.667 255.333L343.333 255.667L342.667 255.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M344.667 255.333L345.333 255.667L344.667 255.333M362 255L364 259L364 255L362 255z"/>
        <path style="fill:#655f60; stroke:none;" d="M364.667 255.333L365.333 255.667L364.667 255.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M366 255L367 256L366 255z"/>
        <path style="fill:#655f60; stroke:none;" d="M367 255L367 256L379 256L367 255z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M379 255L380 256L379 255z"/>
        <path style="fill:#655f60; stroke:none;" d="M380 255L380 256L383 256L380 255z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M383 255L384 258L380 258L380 259L385 259L383 255M389 255C389 262.223 385.205 284.532 394 286L394 281L393 281L393 285L390 285L391 255L389 255z"/>
        <path style="fill:#655f60; stroke:none;" d="M391 255L392 256L391 255z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M392 255L393 280L394 280C394 273.981 396.669 259.08 392 255M401 255L401 277L402.545 284.824L405.941 280.981L406 262L405 262L405 285L402 285L403 255L401 255z"/>
        <path style="fill:#655f60; stroke:none;" d="M403 255L404 256L403 255z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M404 255L404 256L407 257L404 255M422 255L421 257L422 255z"/>
        <path style="fill:#655f60; stroke:none;" d="M423.667 255.333L424.333 255.667L423.667 255.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M425.667 255.333L426.333 255.667L425.667 255.333M434 255C434 262.637 431.225 276.815 434.603 283.682C436.193 286.912 451.287 287.813 452.079 283.83C452.902 279.685 441.235 281 439 281L439 272L450 272L450 271C445.928 271 430.469 273.737 439.603 280.972C442.389 283.179 448.643 282 452 282L452 285L435 285L436 255L434 255z"/>
        <path style="fill:#655f60; stroke:none;" d="M436 255L436 256L439 256L436 255z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M439 255L440 256L439 255z"/>
        <path style="fill:#655f60; stroke:none;" d="M440 255L440 256L451 256L440 255z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M451 255L452 256L451 255M458 255C458 263.38 455.944 274.811 458.317 282.847C460.751 291.091 463 276.084 463 274L472 274L472 273C462.38 273.007 462 276.008 462 285L459 285L460 255L458 255z"/>
        <path style="fill:#655f60; stroke:none;" d="M460 255L460 256L469 256L460 255z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M469 255L469 256L473 256L469 255M485 255C482.825 262.359 483.86 271.347 484.005 278.999C484.073 282.59 485.771 287.88 489 283L488 283L485 285L485 255z"/>
        <path style="fill:#655f60; stroke:none;" d="M486 255L487 256L486 255z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M487 255L488 281L489 281C489 274.83 491.772 259.17 487 255z"/>
        <path style="fill:#655f60; stroke:none;" d="M497 255L497 256L513 256L497 255z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M513 255L514 256L513 255M527 255L528 256L527 255z"/>
        <path style="fill:#655f60; stroke:none;" d="M528 255L528 256L531 256L528 255z"/>
        <path style="fill:#3b3536; stroke:none;" d="M531.667 255.333L532.333 255.667L531.667 255.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M533.667 255.333L534.333 255.667L533.667 255.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M535.667 255.333L536.333 255.667L535.667 255.333M546 255L546 268L547 268L548 255L546 255z"/>
        <path style="fill:#655f60; stroke:none;" d="M548 255L548 256L552 256L548 255z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M552 255L553 256L552 255z"/>
        <path style="fill:#655f60; stroke:none;" d="M553 255L553 256L562 256L553 255z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M562.667 255.333L563.333 255.667L562.667 255.333M574.667 255.333L575.333 255.667L574.667 255.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M576.667 255.333L577.333 255.667L576.667 255.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M578 255L578 256L581 256L578 255z"/>
        <path style="fill:#655f60; stroke:none;" d="M581 255L582 256L581 255M166.333 256.667L166.667 257.333L166.333 256.667z"/>
        <path style="fill:#221918; stroke:none;" d="M167 256L167 258L176 258L176 284L179 284L179 258L188 257L167 256z"/>
        <path style="fill:#3b3536; stroke:none;" d="M171 256L172 257L171 256M181 256L182 257L181 256z"/>
        <path style="fill:#655f60; stroke:none;" d="M193 256L193 280L194 280L193 256z"/>
        <path style="fill:#221918; stroke:none;" d="M194 256L194 284L197 284L197 256L194 256z"/>
        <path style="fill:#655f60; stroke:none;" d="M205 256L205 284L206 284L205 256z"/>
        <path style="fill:#221918; stroke:none;" d="M206 256L206 284L208 284L208 259L209 259C210.777 265.46 213.264 277.21 219 281L226 259L227 259C228.156 265.516 224.478 279.649 230 284L230 256C222.693 257.265 220.337 271.604 219 278L217 278L210 256L206 256z"/>
        <path style="fill:#655f60; stroke:none;" d="M225 256L226 257L225 256M238 256L239 285L240 285L238 256z"/>
        <path style="fill:#221918; stroke:none;" d="M239 256L239 284L255 284L255 283L242 283L242 270L253 270L253 269L242 269L242 258L255 257L239 256z"/>
        <path style="fill:#655f60; stroke:none;" d="M262 256L262 285L263 285L262 256z"/>
        <path style="fill:#221918; stroke:none;" d="M263 256L263 284L278 284L278 283C274.831 283 270.088 283.821 267.318 281.972C262.188 278.549 265 261.589 265 256L263 256z"/>
        <path style="fill:#3b3536; stroke:none;" d="M265 256L265 282L266 282L265 256z"/>
        <path style="fill:#655f60; stroke:none;" d="M284 256L284 284L285 284L284 256z"/>
        <path style="fill:#221918; stroke:none;" d="M285 256L285 284L301 284L301 283C297.592 283 292.289 283.955 289.318 281.972C279.162 275.195 293.735 270.001 299 270L299 269C294.762 269 279.761 265.409 289.318 259.028C292.343 257.008 297.505 258.033 301 257L285 256z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M310 256L308 259L310 256z"/>
        <path style="fill:#655f60; stroke:none;" d="M311 256L308 261L309 261L311 256z"/>
        <path style="fill:#3b3536; stroke:none;" d="M311 258L314 257L311 258z"/>
        <path style="fill:#221918; stroke:none;" d="M308 280C311.747 286.481 325.732 286.473 325.493 277.003C325.296 269.176 314.936 270.301 312.086 264.671C309.881 260.313 315.401 257.425 318.975 257.853C320.645 258.053 322.361 258.63 324 259C319.049 254.729 306.391 255.829 309.619 264.982C311.684 270.838 319.322 270.253 322.288 275.188C327.837 284.421 311.717 282.045 308 280z"/>
        <path style="fill:#3b3536; stroke:none;" d="M321 256L321 257L323 260L324 260L325 258L321 256z"/>
        <path style="fill:#655f60; stroke:none;" d="M322 256L323 257L322 256z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M323 256L324 257L323 256z"/>
        <path style="fill:#655f60; stroke:none;" d="M335 256L336 257L335 256z"/>
        <path style="fill:#3b3536; stroke:none;" d="M336 256L337 257L336 256z"/>
        <path style="fill:#221918; stroke:none;" d="M332 280L331 281C336.516 286.33 351.625 286.123 348.562 275.093C346.817 268.813 338.714 269.86 335.712 264.867C332.801 260.026 339.099 257.276 342.975 257.839C344.653 258.082 346.347 258.627 348 259C343.116 255.116 329.465 255.417 332.786 264.906C334.849 270.8 343.164 270.071 345.953 275.212C351.008 284.53 335.831 282.107 332 280z"/>
        <path style="fill:#3b3536; stroke:none;" d="M344 256L344 257L347 258L344 256z"/>
        <path style="fill:#655f60; stroke:none;" d="M346 256L349 259L346 256z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M347 256L348 257L347 256z"/>
        <path style="fill:#221918; stroke:none;" d="M363 256L363 257L372 257L372 284L374 284C374 274.289 369.841 258.156 383 258L383 256L363 256z"/>
        <path style="fill:#3b3536; stroke:none;" d="M383.333 256.667L383.667 257.333L383.333 256.667z"/>
        <path style="fill:#221918; stroke:none;" d="M390 256C390 262.89 386.932 279.713 393 284C390.993 275.568 390.993 264.432 393 256L390 256M402 256L402 284L404 284L404 260L413 281L415 281L416 277L413 278L406 256L402 256M422 256L420 265L421 265L423 259L424 259C424 265.019 421.331 279.92 426 284L425 256L422 256z"/>
        <path style="fill:#3b3536; stroke:none;" d="M425 256L425 283L426 283L425 256z"/>
        <path style="fill:#655f60; stroke:none;" d="M426 256L426 282L427 282L426 256z"/>
        <path style="fill:#221918; stroke:none;" d="M435 256L435 284L451 284L451 283C447.649 283 442.334 283.968 439.434 281.972C429.429 275.086 443.662 270.001 449 270L449 269C444.936 269 430.25 265.031 439.191 258.603C441.761 256.756 447.952 258 451 258L451 256L435 256z"/>
        <path style="fill:#3b3536; stroke:none;" d="M451 256L452 257L451 256z"/>
        <path style="fill:#221918; stroke:none;" d="M459 256L459 284C462.73 281.314 460.189 276.721 463.191 273.888C466.243 271.008 472.178 272.825 475.682 269.431C486.912 258.558 464.849 256 459 256z"/>
        <path style="fill:#3b3536; stroke:none;" d="M471 256L472 257L471 256z"/>
        <path style="fill:#655f60; stroke:none;" d="M472.667 256.333L473.333 256.667L472.667 256.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M474 256L475 257L474 256z"/>
        <path style="fill:#221918; stroke:none;" d="M485 256L485 284L488 284L488 256L485 256z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M496 256C496 262.449 492.971 279.275 497.028 284.397C502.474 291.273 523.723 281.118 507.005 281.001L501 281L501 272L512 272L512 271C507.928 271 492.469 273.737 501.603 280.972C504.389 283.179 510.643 282 514 282L514 285L497 285L496 256z"/>
        <path style="fill:#221918; stroke:none;" d="M497 256L497 284L514 284L514 283L500 283L499 271L511 270L511 269L500 269L499 259L513 258L513 256L497 256z"/>
        <path style="fill:#3b3536; stroke:none;" d="M513 256L514 257L513 256z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M525 256L526 257L525 256z"/>
        <path style="fill:#655f60; stroke:none;" d="M526 256L527 257L526 256z"/>
        <path style="fill:#3b3536; stroke:none;" d="M527 256L528 257L527 256z"/>
        <path style="fill:#221918; stroke:none;" d="M539 281C523.902 286.501 515.1 264.553 529.015 258.361C532.23 256.93 535.747 258.458 539 259C536.868 257.161 534.922 256.141 531.999 256.098C505.132 255.7 527.046 299.02 539 281z"/>
        <path style="fill:#3b3536; stroke:none;" d="M536 256L538 258L536 256z"/>
        <path style="fill:#655f60; stroke:none;" d="M537 256L540 259L537 256z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M538 256L539 257L538 256z"/>
        <path style="fill:#221918; stroke:none;" d="M547 256L547 284L564 284L564 283L550 283L550 270L561 270L561 269L550 269L550 258L563 258L563 256L547 256z"/>
        <path style="fill:#655f60; stroke:none;" d="M563 256L561 258L561 259L563 256z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M572 256L571 258L572 256z"/>
        <path style="fill:#655f60; stroke:none;" d="M573 256L571 259L573 256z"/>
        <path style="fill:#3b3536; stroke:none;" d="M574 256L573 258L574 256z"/>
        <path style="fill:#221918; stroke:none;" d="M570 281L570 282C575.572 284.921 591.416 286.294 587.381 275.043C585.322 269.3 577.648 269.765 574.662 264.893C571.969 260.498 577.051 257.383 580.975 257.853C582.645 258.053 584.362 258.63 586 259C581.104 254.412 568.195 255.811 571.608 264.958C573.718 270.611 581.147 270.622 584.377 275.209C588.335 280.83 580.175 283.291 576.005 282.401C573.973 281.968 572.053 281.348 570 281z"/>
        <path style="fill:#3b3536; stroke:none;" d="M583 256L584 257L583 256z"/>
        <path style="fill:#655f60; stroke:none;" d="M584 256L585 257L584 256z"/>
        <path style="fill:#3b3536; stroke:none;" d="M187 257L188 258L187 257M225 257L226 258L225 257M254 257L255 258L254 257M300 257L301 258L300 257M315 257L315 258L319 258L315 257z"/>
        <path style="fill:#655f60; stroke:none;" d="M324 257L325 258L324 257z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M325 257C321.155 262.11 313.634 254.921 311 264L312 264L325 257z"/>
        <path style="fill:#3b3536; stroke:none;" d="M334 257L335 258L334 257M339 257L339 258L343 258L339 257z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M348 257L349 258L348 257z"/>
        <path style="fill:#3b3536; stroke:none;" d="M363 257L364 258L363 257M371 257L372 258L371 257M392 257L392 283L393 283L392 257z"/>
        <path style="fill:#655f60; stroke:none;" d="M406 257L407 258L406 257M421 257L422 258L421 257z"/>
        <path style="fill:#3b3536; stroke:none;" d="M439 257L440 258L439 257z"/>
        <path style="fill:#655f60; stroke:none;" d="M451 257L452 258L451 257z"/>
        <path style="fill:#3b3536; stroke:none;" d="M474 257L475 258L474 257z"/>
        <path style="fill:#655f60; stroke:none;" d="M475 257L478 260L475 257z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M476 257L477 258L476 257z"/>
        <path style="fill:#655f60; stroke:none;" d="M513 257L514 258L513 257z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M523 257L524 258L523 257z"/>
        <path style="fill:#655f60; stroke:none;" d="M524 257L525 258L524 257z"/>
        <path style="fill:#3b3536; stroke:none;" d="M525 257L526 258L525 257M530 257L530 258L534 258L530 257z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M539 257L540 258L539 257z"/>
        <path style="fill:#3b3536; stroke:none;" d="M577 257L577 258L581 258L577 257M585 257L585 260L586 260L585 257z"/>
        <path style="fill:#655f60; stroke:none;" d="M586 257L587 258L586 257z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M587 257L585 260L585 261L587 257M166.667 258.333L167.333 258.667L166.667 258.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M168 258L169 259L168 258z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M169 258L170 259L169 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M170 258L171 259L170 258z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M171 258L171 259L174 259L171 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M174 258L175 285L176 285C176 277.55 178.595 264.065 174 258z"/>
        <path style="fill:#3b3536; stroke:none;" d="M175 258L176 259L175 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M179 258L180 259L179 258z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M180 258L181 259L180 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M181.667 258.333L182.333 258.667L181.667 258.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M183 258L183 259L186 259L183 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M186 258L187 259L186 258z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M187 258L188 259L187 258z"/>
        <path style="fill:#3b3536; stroke:none;" d="M210 258L211 259L210 258z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M224 258L225 259L224 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M242.667 258.333L243.333 258.667L242.667 258.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M244 258L244 259L253 259L244 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M253 258L254 259L253 258M288 258L289 259L288 258z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M289 258L289 259L297 259L289 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M297 258L298 259L297 258z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M298 258L299 259L298 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M299 258L300 259L299 258M313 258L314 259L313 258M320 258L321 259L320 258z"/>
        <path style="fill:#3b3536; stroke:none;" d="M321 258L322 259L321 258M333 258L334 259L333 258M336 258L337 259L336 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M337 258L338 259L337 258z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M338 258L338 259L343 259L338 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M343.667 258.333L344.333 258.667L343.667 258.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M345 258L348 260L348 259L345 258z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M349 258L350 259L349 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M364 258L365 259L364 258z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M365.667 258.333L366.333 258.667L365.667 258.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M367 258L368 259L367 258z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M368 258L369 259L368 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M369 258L369 259L372 259L369 258M375 258L375 259L378 259L375 258z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M378 258L379 259L378 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M379 258L380 259L379 258z"/>
        <path style="fill:#3b3536; stroke:none;" d="M406 258L407 259L406 258z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M407 258L408 259L407 258M420.333 258.667L420.667 259.333L420.333 258.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M421 258L422 259L421 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M438 258L439 259L438 258z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M439 258L440 259L439 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M440 258L441 259L440 258z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M441 258L441 259L449 259L441 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M449 258L450 259L449 258z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M450.667 258.333L451.333 258.667L450.667 258.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M462 258L463 259L462 258z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M462 270L463 270L463 259L470 259C461.559 255.497 462 264.149 462 270z"/>
        <path style="fill:#655f60; stroke:none;" d="M470 258L471 259L470 258z"/>
        <path style="fill:#3b3536; stroke:none;" d="M471.667 258.333L472.333 258.667L471.667 258.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M477 258L478 259L477 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M500.667 258.333L501.333 258.667L500.667 258.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M502 258L503 259L502 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M503.667 258.333L504.333 258.667L503.667 258.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M505 258L505 259L514 259L505 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M523 258L524 259L523 258z"/>
        <path style="fill:#3b3536; stroke:none;" d="M527 258L524 262L527 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M528 258L529 259L528 258z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M529 258L529 259L540 260L529 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M535 258L536 259L535 258M550 258L551 259L550 258z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M551 258L552 259L551 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M552 258L553 259L552 258z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M553 258L553 259L561 259L553 258M563 258L564 259L563 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M575 258L574 260L575 258z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M576 258L576 259L582 259L576 258z"/>
        <path style="fill:#655f60; stroke:none;" d="M582 258L583 259L582 258z"/>
        <path style="fill:#3b3536; stroke:none;" d="M583 258L584 259L583 258M208 259L209 260L208 259z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M211 259L212 260L211 259z"/>
        <path style="fill:#655f60; stroke:none;" d="M224 259L225 260L224 259z"/>
        <path style="fill:#3b3536; stroke:none;" d="M226 259L227 260L226 259z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M242 259L243 260L242 259z"/>
        <path style="fill:#3b3536; stroke:none;" d="M287 259L288 269L289 269L287 259z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M288 259L288 268L299 268L299 271L288 271L288 282L301 282L301 281L289 281L289 272C300.659 271.999 300.659 267.001 289 267L288 259z"/>
        <path style="fill:#3b3536; stroke:none;" d="M309 259L310 260L309 259z"/>
        <path style="fill:#655f60; stroke:none;" d="M312 259L313 260L312 259M322 259L323 260L322 259M324 259L325 260L324 259M332 259L333 260L332 259M335 259L336 260L335 259z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M336 259L337 260L336 259M344.667 259.333L345.333 259.667L344.667 259.333M348 259L346 260L346 261L348 259M371 259C371 265.663 370.879 272.338 371.005 278.999C371.036 280.662 370.884 285.664 373.83 285.079C378.202 284.21 376 262.847 376 259L375 259L375 285L372 285L371 259z"/>
        <path style="fill:#3b3536; stroke:none;" d="M374 259C374 266.051 376.361 278.244 372 284L372 285C377.193 281.633 376.258 264.382 374 259z"/>
        <path style="fill:#655f60; stroke:none;" d="M407.333 259.667L407.667 260.333L407.333 259.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M423 259L422 261L424 261L423 259M437 259L438 260L437 259z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M438 259C438.03 267.574 441.054 267.999 449 268L449 267L439 267L438 259z"/>
        <path style="fill:#3b3536; stroke:none;" d="M461 259L461 265L462 265L461 259z"/>
        <path style="fill:#fefefe; stroke:none;" d="M463 259L463 270C476.723 269.885 476.736 259.039 463 259z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M471 259L471 260L474 261L471 259z"/>
        <path style="fill:#655f60; stroke:none;" d="M473 259L474 260L473 259z"/>
        <path style="fill:#3b3536; stroke:none;" d="M476 259L477 260L476 259M499 259L500 260L499 259z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M500 259C500.032 268.125 503.801 268 512 268L512 267L501 267L500 259z"/>
        <path style="fill:#655f60; stroke:none;" d="M522 259L523 260L522 259z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M527.667 259.333L528.333 259.667L527.667 259.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M537.667 259.333L538.333 259.667L537.667 259.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M550 259L550 268L561 268L561 271C551.598 271.001 550.001 272.598 550 282L564 282L564 281L551 281L551 272L562 272C561.006 266.043 556.023 267.001 551 267L550 259M570 259L571 260L570 259M575 259L576 260L575 259M583 259L584 260L583 259z"/>
        <path style="fill:#655f60; stroke:none;" d="M584 259L585 260L584 259M586 259L587 260L586 259M208 260L208 268L209 268L208 260M211 260L212 261L211 260z"/>
        <path style="fill:#3b3536; stroke:none;" d="M224 260L225 261L224 260z"/>
        <path style="fill:#655f60; stroke:none;" d="M226.333 260.667L226.667 261.333L226.333 260.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M307 260L308 267L309 267L307 260z"/>
        <path style="fill:#655f60; stroke:none;" d="M311 260L312 261L311 260z"/>
        <path style="fill:#3b3536; stroke:none;" d="M332 260L333 261L332 260z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M335 260L335 264L336 264L335 260z"/>
        <path style="fill:#3b3536; stroke:none;" d="M404 260L404 262L406 260L404 260z"/>
        <path style="fill:#655f60; stroke:none;" d="M420 260L421 261L420 260z"/>
        <path style="fill:#3b3536; stroke:none;" d="M474 260L475 261L474 260M477 260L478 261L477 260z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M521 260L522 261L521 260M526 260L527 261L526 260z"/>
        <path style="fill:#655f60; stroke:none;" d="M570 260L571 261L570 260z"/>
        <path style="fill:#3b3536; stroke:none;" d="M573 260L574 261L573 260z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M574 260L575 261L574 260z"/>
        <path style="fill:#3b3536; stroke:none;" d="M209 261L210 262L209 261M211 261L212 262L211 261z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M223 261L224 262L223 261z"/>
        <path style="fill:#3b3536; stroke:none;" d="M227 261L227 267L228 267L227 261M308 261L308 265L309 265L308 261z"/>
        <path style="fill:#655f60; stroke:none;" d="M331 261L331 265L332 265L331 261z"/>
        <path style="fill:#3b3536; stroke:none;" d="M334 261L335 262L334 261z"/>
        <path style="fill:#655f60; stroke:none;" d="M405 261L406 262L405 261z"/>
        <path style="fill:#3b3536; stroke:none;" d="M407 261L408 262L407 261z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M408 261L409 262L408 261M419.333 261.667L419.667 262.333L419.333 261.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M420 261L421 262L420 261z"/>
        <path style="fill:#655f60; stroke:none;" d="M422 261L423 264L424 264L424 261L422 261M474 261L475 262L474 261z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M478 261L479 262L478 261z"/>
        <path style="fill:#3b3536; stroke:none;" d="M521 261L522 262L521 261z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M525 261L526 262L525 261M569 261L569 264L570 264L569 261z"/>
        <path style="fill:#3b3536; stroke:none;" d="M570.333 261.667L570.667 262.333L570.333 261.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M573 261L574 262L573 261z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M208 262L209 263L208 262M212 262L213 263L212 262z"/>
        <path style="fill:#655f60; stroke:none;" d="M223 262L224 263L223 262z"/>
        <path style="fill:#3b3536; stroke:none;" d="M225 262L226 263L225 262z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M226 262C225.327 268.029 225.131 275.938 226.148 281.941C227.019 287.083 230.39 284.662 231 281L230 281L230 285L227 285L226 262z"/>
        <path style="fill:#655f60; stroke:none;" d="M334 262L335 263L334 262M404.333 262.667L404.667 263.333L404.333 262.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M406 262L407 263L406 262z"/>
        <path style="fill:#655f60; stroke:none;" d="M408.333 262.667L408.667 263.333L408.333 262.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M421.333 262.667L421.667 263.333L421.333 262.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M422.333 262.667L422.667 263.333L422.333 262.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M437.333 262.667L437.667 263.333L437.333 262.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M474 262L475 263L474 262z"/>
        <path style="fill:#655f60; stroke:none;" d="M478 262L478 266L479 266L478 262z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M520 262L521 263L520 262z"/>
        <path style="fill:#655f60; stroke:none;" d="M524 262L525 263L524 262z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M573 262L574 263L573 262M209 263L210 264L209 263z"/>
        <path style="fill:#3b3536; stroke:none;" d="M210.333 263.667L210.667 264.333L210.333 263.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M212 263L213 264L212 263z"/>
        <path style="fill:#3b3536; stroke:none;" d="M223 263L224 264L223 263z"/>
        <path style="fill:#655f60; stroke:none;" d="M225 263L226 264L225 263z"/>
        <path style="fill:#3b3536; stroke:none;" d="M334 263L339 268L339 267L334 263z"/>
        <path style="fill:#655f60; stroke:none;" d="M406 263L407 264L406 263M419 263L420 264L419 263z"/>
        <path style="fill:#3b3536; stroke:none;" d="M520 263L521 264L520 263M523 263L524 264L523 263z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M524 263L525 264L524 263z"/>
        <path style="fill:#655f60; stroke:none;" d="M570 263L571 264L570 263M573 263L574 264L573 263z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M222 264L223 265L222 264z"/>
        <path style="fill:#655f60; stroke:none;" d="M311 264L313 266L311 264M335 264L336 265L335 264z"/>
        <path style="fill:#3b3536; stroke:none;" d="M404 264L402 284L402 285C406.842 281.861 406.078 268.952 404 264M408 264L409 265L408 264z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M409 264L410 265L409 264M418.333 264.667L418.667 265.333L418.333 264.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M419 264L419 269L420 269L419 264z"/>
        <path style="fill:#655f60; stroke:none;" d="M421 264L422 265L421 264z"/>
        <path style="fill:#fefefe; stroke:none;" d="M422.333 264.667L422.667 265.333L422.333 264.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M423 264C423 269.819 420.636 281.523 426 285L426 284L423 264M475 264L476 265L475 264z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M519 264L520 265L519 264z"/>
        <path style="fill:#655f60; stroke:none;" d="M523 264L524 265L523 264z"/>
        <path style="fill:#3b3536; stroke:none;" d="M570 264L571 265L570 264M573 264L574 265L573 264z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M574 264L577 267L574 264M210 265L211 266L210 265M213 265L214 266L213 265z"/>
        <path style="fill:#655f60; stroke:none;" d="M222 265L223 266L222 265z"/>
        <path style="fill:#3b3536; stroke:none;" d="M224 265L225 266L224 265z"/>
        <path style="fill:#655f60; stroke:none;" d="M308 265L309 266L308 265z"/>
        <path style="fill:#3b3536; stroke:none;" d="M311 265L312 266L311 265z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M331 265L332 266L331 265z"/>
        <path style="fill:#3b3536; stroke:none;" d="M332 265L333 266L332 265z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M336 265L337 266L336 265z"/>
        <path style="fill:#3b3536; stroke:none;" d="M407 265L408 266L407 265z"/>
        <path style="fill:#655f60; stroke:none;" d="M409 265L410 266L409 265z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M421 265L422 266L421 265z"/>
        <path style="fill:#3b3536; stroke:none;" d="M437.333 265.667L437.667 266.333L437.333 265.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M519.333 265.667L519.667 266.333L519.333 265.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M523 265L524 266L523 265z"/>
        <path style="fill:#655f60; stroke:none;" d="M570 265L571 266L570 265M574 265L575 266L574 265z"/>
        <path style="fill:#3b3536; stroke:none;" d="M211 266L213 268L211 266M213 266L214 267L213 266z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M221 266L222 267L221 266z"/>
        <path style="fill:#3b3536; stroke:none;" d="M222 266L223 267L222 266z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M224.333 266.667L224.667 267.333L224.333 266.667M230 266L231 267L230 266z"/>
        <path style="fill:#3b3536; stroke:none;" d="M309 266L312 269L309 266z"/>
        <path style="fill:#655f60; stroke:none;" d="M313 266L314 267L313 266z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M314 266L315 267L314 266z"/>
        <path style="fill:#655f60; stroke:none;" d="M332 266L335 269L332 266M337 266L338 267L337 266z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M338 266L339 267L338 266z"/>
        <path style="fill:#655f60; stroke:none;" d="M407 266L408 267L407 266z"/>
        <path style="fill:#3b3536; stroke:none;" d="M409.333 266.667L409.667 267.333L409.333 266.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M410.333 266.667L410.667 267.333L410.333 266.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M420 266L421 267L420 266z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M422 266L422 270L423 270L422 266M474 266L475 267L474 266M478.333 266.667L478.667 267.333L478.333 266.667M570 266L572 268L570 266z"/>
        <path style="fill:#3b3536; stroke:none;" d="M571 266L572 267L571 266z"/>
        <path style="fill:#655f60; stroke:none;" d="M575 266L576 267L575 266M211 267L212 268L211 267z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M214 267L215 268L214 267z"/>
        <path style="fill:#655f60; stroke:none;" d="M221 267L222 268L221 267z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M242 267L242 268L253 268L253 271L242 271C243.727 271.725 255.66 273.025 252.824 268.545C251.138 265.881 244.669 267 242 267z"/>
        <path style="fill:#655f60; stroke:none;" d="M309 267L310 268L309 267z"/>
        <path style="fill:#3b3536; stroke:none;" d="M314 267L315 268L314 267z"/>
        <path style="fill:#655f60; stroke:none;" d="M315 267L316 268L315 267z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M316.667 267.333L317.333 267.667L316.667 267.333M332 267L333 268L332 267z"/>
        <path style="fill:#655f60; stroke:none;" d="M339 267L340 268L339 267z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M340 267L341 268L340 267M407.333 267.667L407.667 268.333L407.333 267.667M417.333 267.667L417.667 268.333L417.333 267.667z"/>
        <path style="fill:#221918; stroke:none;" d="M418 267L416 276L417 276L418 267z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M420.333 267.667L420.667 268.333L420.333 267.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M438 267L438 268L449 271L450 271C449.018 266.418 441.982 268.071 438 267M474 267L475 268L474 267z"/>
        <path style="fill:#3b3536; stroke:none;" d="M475 267L476 268L475 267z"/>
        <path style="fill:#655f60; stroke:none;" d="M500 267L500 268L510 269L510 268L500 267z"/>
        <path style="fill:#3b3536; stroke:none;" d="M519 267L520 268L519 267M522 267L522 270L523 270L522 267M572 267L574 269L572 267M576 267L577 268L576 267z"/>
        <path style="fill:#655f60; stroke:none;" d="M577.667 267.333L578.333 267.667L577.667 267.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M579 267L580 268L579 267z"/>
        <path style="fill:#3b3536; stroke:none;" d="M208 268L206 284L206 285C210.491 282.088 209.919 272.574 208 268z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M211 268L212 269L211 268z"/>
        <path style="fill:#655f60; stroke:none;" d="M214.333 268.667L214.667 269.333L214.333 268.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M221.333 268.667L221.667 269.333L221.333 268.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M223 268L224 269L223 268z"/>
        <path style="fill:#3b3536; stroke:none;" d="M242 268L243 269L242 268z"/>
        <path style="fill:#655f60; stroke:none;" d="M243.667 268.333L244.333 268.667L243.667 268.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M245 268L246 269L245 268z"/>
        <path style="fill:#655f60; stroke:none;" d="M246 268L246 269L251 269L246 268z"/>
        <path style="fill:#3b3536; stroke:none;" d="M251 268L252 269L251 268z"/>
        <path style="fill:#655f60; stroke:none;" d="M252 268L253 269L252 268M289 268L289 269L299 269L289 268M310 268L311 269L310 268z"/>
        <path style="fill:#3b3536; stroke:none;" d="M316 268L317 269L316 268z"/>
        <path style="fill:#655f60; stroke:none;" d="M317.667 268.333L318.333 268.667L317.667 268.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M319 268L320 269L319 268M333 268L334 269L333 268z"/>
        <path style="fill:#3b3536; stroke:none;" d="M335 268L337 270L335 268M340 268L341 269L340 268z"/>
        <path style="fill:#655f60; stroke:none;" d="M341 268L342 269L341 268z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M342 268L342 269L347 271L347 270L342 268z"/>
        <path style="fill:#3b3536; stroke:none;" d="M408 268L409 269L408 268z"/>
        <path style="fill:#655f60; stroke:none;" d="M410 268L411 269L410 268z"/>
        <path style="fill:#3b3536; stroke:none;" d="M438 268L439 269L438 268M461.333 268.667L461.667 269.333L461.333 268.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M473 268L474 269L473 268M477 268L478 269L477 268z"/>
        <path style="fill:#3b3536; stroke:none;" d="M500 268L501 269L500 268M510 268L511 269L510 268z"/>
        <path style="fill:#655f60; stroke:none;" d="M511 268L511 271L512 271L511 268M546 268L546 271L547 271L546 268z"/>
        <path style="fill:#3b3536; stroke:none;" d="M550 268L551 269L550 268z"/>
        <path style="fill:#655f60; stroke:none;" d="M551 268L551 269L561 269L551 268M572 268L573 269L572 268z"/>
        <path style="fill:#3b3536; stroke:none;" d="M578.667 268.333L579.333 268.667L578.667 268.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M580 268L581 269L580 268z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M581 268L582 269L581 268z"/>
        <path style="fill:#3b3536; stroke:none;" d="M212 269L213 270L212 269z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M220 269L221 270L220 269M223 269L224 270L223 269M311 269L314 271L314 270L311 269z"/>
        <path style="fill:#655f60; stroke:none;" d="M312 269L313 270L312 269z"/>
        <path style="fill:#3b3536; stroke:none;" d="M319 269L320 270L319 269z"/>
        <path style="fill:#655f60; stroke:none;" d="M320 269L321 270L320 269z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M321 269L322 270L321 269M334.667 269.333L335.333 269.667L334.667 269.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M343 269L344 270L343 269M408 269L409 270L408 269z"/>
        <path style="fill:#3b3536; stroke:none;" d="M410 269L411 273L412 273L410 269z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M411 269L412 270L411 269z"/>
        <path style="fill:#3b3536; stroke:none;" d="M417 269L418 270L417 269z"/>
        <path style="fill:#655f60; stroke:none;" d="M419 269L420 270L419 269z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M470.667 269.333L471.333 269.667L470.667 269.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M472 269L473 270L472 269z"/>
        <path style="fill:#3b3536; stroke:none;" d="M476 269L473 271L473 272L477 270L476 269z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M477 269L478 270L477 269M573 269L576 271L576 270L573 269z"/>
        <path style="fill:#655f60; stroke:none;" d="M574 269L575 270L574 269z"/>
        <path style="fill:#3b3536; stroke:none;" d="M575 269L576 270L575 269M581 269L582 270L581 269z"/>
        <path style="fill:#655f60; stroke:none;" d="M582 269L583 270L582 269z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M583 269L584 270L583 269z"/>
        <path style="fill:#655f60; stroke:none;" d="M212 270L213 271L212 270z"/>
        <path style="fill:#3b3536; stroke:none;" d="M214 270L215 271L214 270z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M215 270L216 271L215 270z"/>
        <path style="fill:#655f60; stroke:none;" d="M220 270L221 271L220 270z"/>
        <path style="fill:#3b3536; stroke:none;" d="M222 270L223 271L222 270M227.333 270.667L227.667 271.333L227.333 270.667M242 270L242 271L248 271L242 270z"/>
        <path style="fill:#655f60; stroke:none;" d="M248 270L249 271L248 270z"/>
        <path style="fill:#3b3536; stroke:none;" d="M249 270L249 271L253 271L249 270M285.333 270.667L285.667 271.333L285.333 270.667M288 270L288 271L297 271L288 270z"/>
        <path style="fill:#655f60; stroke:none;" d="M297 270L298 271L297 270z"/>
        <path style="fill:#3b3536; stroke:none;" d="M298 270L299 271L298 270z"/>
        <path style="fill:#655f60; stroke:none;" d="M314 270L315 271L314 270z"/>
        <path style="fill:#3b3536; stroke:none;" d="M315 270L316 271L315 270M321 270L322 271L321 270z"/>
        <path style="fill:#655f60; stroke:none;" d="M322 270L326 274L322 270z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M323 270L324 271L323 270M336 270L336 271L340 272L340 271L336 270z"/>
        <path style="fill:#655f60; stroke:none;" d="M338 270L339 271L338 270z"/>
        <path style="fill:#3b3536; stroke:none;" d="M339 270L340 271L339 270z"/>
        <path style="fill:#655f60; stroke:none;" d="M345 270L346 271L345 270z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M408 270L410 277L411 277L408 270z"/>
        <path style="fill:#655f60; stroke:none;" d="M411 270L412 271L411 270z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M416 270L417 271L416 270z"/>
        <path style="fill:#3b3536; stroke:none;" d="M418 270L419 271L418 270z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M419.333 270.667L419.667 271.333L419.333 270.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M438 270L438 271L449 271L438 270z"/>
        <path style="fill:#655f60; stroke:none;" d="M462 270L462 271L471 271L462 270z"/>
        <path style="fill:#3b3536; stroke:none;" d="M471 270L472 271L471 270z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M476 270L477 271L476 270z"/>
        <path style="fill:#3b3536; stroke:none;" d="M499 271L499 272L511 271L499 271z"/>
        <path style="fill:#655f60; stroke:none;" d="M522 270L523 271L522 270z"/>
        <path style="fill:#3b3536; stroke:none;" d="M547.333 270.667L547.667 271.333L547.333 270.667M550 270L550 271L561 271L550 270z"/>
        <path style="fill:#655f60; stroke:none;" d="M576 270L577 271L576 270z"/>
        <path style="fill:#3b3536; stroke:none;" d="M577 270L578 271L577 270M583 270L584 271L583 270z"/>
        <path style="fill:#655f60; stroke:none;" d="M584 270L585 271L584 270z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M585 270L588 273L585 270M212 271L213 272L212 271z"/>
        <path style="fill:#655f60; stroke:none;" d="M215 271L216 272L215 271z"/>
        <path style="fill:#3b3536; stroke:none;" d="M220 271L221 272L220 271z"/>
        <path style="fill:#655f60; stroke:none;" d="M222 271L223 272L222 271z"/>
        <path style="fill:#3b3536; stroke:none;" d="M287 271L287 282L288 282L287 271z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M315 271L316 272L315 271z"/>
        <path style="fill:#655f60; stroke:none;" d="M316 271L317 272L316 271z"/>
        <path style="fill:#3b3536; stroke:none;" d="M317.667 271.333L318.333 271.667L317.667 271.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M324 271L325 272L324 271z"/>
        <path style="fill:#655f60; stroke:none;" d="M340 271L341 272L340 271z"/>
        <path style="fill:#3b3536; stroke:none;" d="M341 271L342 272L341 271M346 271L347 272L346 271z"/>
        <path style="fill:#655f60; stroke:none;" d="M347 271L349 273L347 271z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M348 271L349 272L348 271z"/>
        <path style="fill:#3b3536; stroke:none;" d="M409 271L410 272L409 271z"/>
        <path style="fill:#655f60; stroke:none;" d="M416 271L417 272L416 271M418.333 271.667L418.667 272.333L418.333 271.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M422 271L422 279L423 279L422 271z"/>
        <path style="fill:#655f60; stroke:none;" d="M438 271L439 272L438 271M474 271L475 272L474 271z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M475 271L476 272L475 271z"/>
        <path style="fill:#655f60; stroke:none;" d="M500 271L501 272L500 271z"/>
        <path style="fill:#3b3536; stroke:none;" d="M522.333 271.667L522.667 272.333L522.333 271.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M546 271L546 286L564 286L564 285L547 285L546 271z"/>
        <path style="fill:#655f60; stroke:none;" d="M550 271L551 272L550 271z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M577 271L578 272L577 271z"/>
        <path style="fill:#655f60; stroke:none;" d="M578 271L579 272L578 271z"/>
        <path style="fill:#3b3536; stroke:none;" d="M579 271L580 272L579 271M585 271L586 272L585 271M213 272L214 273L213 272M215 272L216 273L215 272z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M219 272L220 273L219 272M222 272L223 273L222 272M230 272L230 280L231 280L230 272M317 272L317 273L322 275L322 274L317 272z"/>
        <path style="fill:#655f60; stroke:none;" d="M319 272L320 273L319 272z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M325 272L326 273L325 272M341 272L342 273L341 272z"/>
        <path style="fill:#655f60; stroke:none;" d="M342 272L343 273L342 272z"/>
        <path style="fill:#3b3536; stroke:none;" d="M343 272L344 273L343 272z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M412 272L413 273L412 272M415.333 272.667L415.667 273.333L415.333 272.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M416 272L417 273L416 272M437 272L437 281L438 281L437 272M463 272L464 273L463 272M469.667 272.333L470.333 272.667L469.667 272.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M471.667 272.333L472.333 272.667L471.667 272.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M473.667 272.333L474.333 272.667L473.667 272.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M519 272L519 275L520 275L519 272z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M579 272L579 273C582.884 275.187 584.383 277.544 581 281L581 282C586.779 278.81 584.361 273.884 579 272z"/>
        <path style="fill:#655f60; stroke:none;" d="M581 272L582 273L581 272z"/>
        <path style="fill:#3b3536; stroke:none;" d="M586 272L587 273L586 272z"/>
        <path style="fill:#655f60; stroke:none;" d="M213 273L214 274L213 273z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M216 273L217 274L216 273z"/>
        <path style="fill:#655f60; stroke:none;" d="M219 273L220 274L219 273z"/>
        <path style="fill:#3b3536; stroke:none;" d="M221 273L222 274L221 273M321 273L322 274L321 273M324 273L325 274L324 273z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M343 273L346 276L343 273z"/>
        <path style="fill:#655f60; stroke:none;" d="M344 273L346 277L347 277L344 273z"/>
        <path style="fill:#3b3536; stroke:none;" d="M345 273L346 274L345 273M348 273L349 274L348 273z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M349 273L350 274L349 273z"/>
        <path style="fill:#3b3536; stroke:none;" d="M410 273L411 274L410 273z"/>
        <path style="fill:#655f60; stroke:none;" d="M412.333 273.667L412.667 274.333L412.333 273.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M417 273L418 274L417 273z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M418 273L419 274L418 273z"/>
        <path style="fill:#655f60; stroke:none;" d="M462 273L463 274L462 273M583 273L584 274L583 273M587 273L588 274L587 273z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M213 274L214 275L213 274z"/>
        <path style="fill:#3b3536; stroke:none;" d="M214 274L215 275L214 274z"/>
        <path style="fill:#655f60; stroke:none;" d="M216 274L217 275L216 274z"/>
        <path style="fill:#3b3536; stroke:none;" d="M219.333 274.667L219.667 275.333L219.333 274.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M221 274L222 275L221 274z"/>
        <path style="fill:#3b3536; stroke:none;" d="M227 274L227 280L228 280L227 274M322 274L323 279L324 279L322 274M325 274L326 275L325 274z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M326 274L326 277L327 277L326 274z"/>
        <path style="fill:#3b3536; stroke:none;" d="M346 274L347 275L346 274z"/>
        <path style="fill:#655f60; stroke:none;" d="M349 274L350 275L349 274M410 274L411 275L410 274z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M413 274L415 277L413 274z"/>
        <path style="fill:#655f60; stroke:none;" d="M415.333 274.667L415.667 275.333L415.333 274.667M417.333 274.667L417.667 275.333L417.333 274.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M461.333 274.667L461.667 275.333L461.333 274.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M523.333 274.667L523.667 275.333L523.333 274.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M584 274L585 275L584 274z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M588.333 274.667L588.667 275.333L588.333 274.667z"/>
        <path style="fill:#655f60; stroke:none;" d="M214 275L215 276L214 275z"/>
        <path style="fill:#3b3536; stroke:none;" d="M216 275L217 276L216 275z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M218 275L217 277L218 275M221 275L222 276L221 275z"/>
        <path style="fill:#655f60; stroke:none;" d="M322 275L323 276L322 275z"/>
        <path style="fill:#3b3536; stroke:none;" d="M349 275L349 279L350 279L349 275z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M350 275C349.445 279.978 347.4 282.661 343 285L343 286C347.884 284.324 352.103 280.457 350 275z"/>
        <path style="fill:#3b3536; stroke:none;" d="M412 275L413 276L412 275z"/>
        <path style="fill:#655f60; stroke:none;" d="M519 275L520 276L519 275z"/>
        <path style="fill:#3b3536; stroke:none;" d="M585 275L585 281L586 281L585 275z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M214 276L215 277L214 276z"/>
        <path style="fill:#655f60; stroke:none;" d="M218 276L219 277L218 276z"/>
        <path style="fill:#3b3536; stroke:none;" d="M220 276L221 277L220 276z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M322 276L319 281L319 282C321.756 280.487 323.001 279.137 322 276z"/>
        <path style="fill:#3b3536; stroke:none;" d="M411 276L412 277L411 276z"/>
        <path style="fill:#655f60; stroke:none;" d="M413 276L414 277L413 276z"/>
        <path style="fill:#3b3536; stroke:none;" d="M415.667 276.333L416.333 276.667L415.667 276.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M417 276L418 277L417 276M519 276L520 277L519 276z"/>
        <path style="fill:#655f60; stroke:none;" d="M523 276L524 277L523 276M588 276L588 279L589 279L588 276z"/>
        <path style="fill:#3b3536; stroke:none;" d="M215 277L216 278L215 277M217.667 277.333L218.333 277.667L217.667 277.333z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M220 277L221 278L220 277z"/>
        <path style="fill:#655f60; stroke:none;" d="M326 277L327 278L326 277z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M346 277L347 278L346 277z"/>
        <path style="fill:#655f60; stroke:none;" d="M411 277L412 278L411 277z"/>
        <path style="fill:#3b3536; stroke:none;" d="M413.667 277.333L414.333 277.667L413.667 277.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M416 277L417 278L416 277z"/>
        <path style="fill:#3b3536; stroke:none;" d="M520 277L521 278L520 277z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M524 277L525 280L526 280L524 277z"/>
        <path style="fill:#655f60; stroke:none;" d="M215 278L216 279L215 278z"/>
        <path style="fill:#3b3536; stroke:none;" d="M219 278L220 279L219 278z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M326 278L324 284L325 284L326 278z"/>
        <path style="fill:#655f60; stroke:none;" d="M346 278L344 282L346 278z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M411.333 278.667L411.667 279.333L411.333 278.667M416.333 278.667L416.667 279.333L416.333 278.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M461.333 278.667L461.667 279.333L461.333 278.667z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M520 278L521 279L520 278z"/>
        <path style="fill:#655f60; stroke:none;" d="M524 278L525 279L524 278z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M570 278C568.56 281.743 569.463 283.198 573 285L573 284L569 280L572 280L570 278M215 279L216 280L215 279z"/>
        <path style="fill:#3b3536; stroke:none;" d="M216 279L218 282L216 279z"/>
        <path style="fill:#655f60; stroke:none;" d="M219 279L220 280L219 279z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M307 279L309 284L307 279z"/>
        <path style="fill:#655f60; stroke:none;" d="M308 279L309 280L308 279z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M309 279L310 280L309 279z"/>
        <path style="fill:#3b3536; stroke:none;" d="M325 279L326 280L325 279z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M331 279L330 281L331 279z"/>
        <path style="fill:#655f60; stroke:none;" d="M332 279L334 281L332 279z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M333 279L334 280L333 279M345 279L346 280L345 279z"/>
        <path style="fill:#655f60; stroke:none;" d="M349 279L350 280L349 279z"/>
        <path style="fill:#3b3536; stroke:none;" d="M412 279L413 280L412 279M415 279L416 280L415 279M521 279L523 281L523 279L521 279z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M538 279L538 280L539 284L540 284L538 279z"/>
        <path style="fill:#655f60; stroke:none;" d="M570 279L569 281L570 279z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M588.333 279.667L588.667 280.333L588.333 279.667M193 280L194 281L193 280M219 280L216 281C217.452 282.904 219.445 282.567 219 280z"/>
        <path style="fill:#3b3536; stroke:none;" d="M239 280L240 281L239 280z"/>
        <path style="fill:#655f60; stroke:none;" d="M307 280L308 281L307 280z"/>
        <path style="fill:#3b3536; stroke:none;" d="M309 280L313 283L313 282L309 280z"/>
        <path style="fill:#655f60; stroke:none;" d="M310 280L312 282L310 280z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M311 280L312 281L311 280z"/>
        <path style="fill:#655f60; stroke:none;" d="M322 280L323 281L322 280M325 280L326 281L325 280z"/>
        <path style="fill:#3b3536; stroke:none;" d="M331 280L332 281L331 280z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M334 280L335 281L334 280z"/>
        <path style="fill:#3b3536; stroke:none;" d="M346 280L347 281L346 280z"/>
        <path style="fill:#655f60; stroke:none;" d="M393 280L394 281L393 280M412 280L414 282L412 280M415 280L416 281L415 280z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M521 280L522 281L521 280z"/>
        <path style="fill:#655f60; stroke:none;" d="M526 280L527 281L526 280M537 280L536 282L537 280z"/>
        <path style="fill:#3b3536; stroke:none;" d="M538 280L540 282L540 280L538 280M570.667 280.333L571.333 280.667L570.667 280.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M572 280L574 282L572 280z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M573 280L574 281L573 280z"/>
        <path style="fill:#655f60; stroke:none;" d="M584 280L585 281L584 280z"/>
        <path style="fill:#3b3536; stroke:none;" d="M587 280L588 281L587 280z"/>
        <path style="fill:#655f60; stroke:none;" d="M193 281L193 284L194 284L193 281z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M197 281L197 285L193 284L193 285C196.271 285.503 198.138 284.468 197 281z"/>
        <path style="fill:#655f60; stroke:none;" d="M218 281L219 282L218 281z"/>
        <path style="fill:#3b3536; stroke:none;" d="M227 281L230 285L230 284L227 281z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M242 281L242 282L256 282L242 281z"/>
        <path style="fill:#3b3536; stroke:none;" d="M307 281L308 282L307 281z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M312.667 281.333L313.333 281.667L312.667 281.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M321 281L322 282L321 281z"/>
        <path style="fill:#3b3536; stroke:none;" d="M324 281L322 284L324 281z"/>
        <path style="fill:#655f60; stroke:none;" d="M330 281L332 283L330 281z"/>
        <path style="fill:#3b3536; stroke:none;" d="M334 281L337 283L337 282L334 281z"/>
        <path style="fill:#655f60; stroke:none;" d="M335 281L336 282L335 281z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M336.667 281.333L337.333 281.667L336.667 281.333M343 281L344 282L343 281z"/>
        <path style="fill:#3b3536; stroke:none;" d="M345 281L346 282L345 281z"/>
        <path style="fill:#655f60; stroke:none;" d="M348 281L349 282L348 281z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M412 281L413 282L412 281z"/>
        <path style="fill:#3b3536; stroke:none;" d="M414 281L415 282L414 281z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M415 281L416 282L415 281M422 281C422.577 284.474 423.526 285.423 427 286L427 282L426 282L423 285L422 281z"/>
        <path style="fill:#655f60; stroke:none;" d="M438 281L438 282L452 283L452 282L438 281M488.333 281.667L488.667 282.333L488.333 281.667M500 281L502 283L500 281M522 281L523 282L522 281M527 281L528 282L527 281z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M528 281L529 282L528 281M531 282L531 283L536 282L531 282z"/>
        <path style="fill:#3b3536; stroke:none;" d="M537 281L538 282L537 281M569 281L570 282L569 281z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M574.667 281.333L575.333 281.667L574.667 281.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M583 281L584 282L583 281M587 281L585 284L587 281M242 282L242 283L256 283L242 282z"/>
        <path style="fill:#3b3536; stroke:none;" d="M266 282L267 283L266 282z"/>
        <path style="fill:#655f60; stroke:none;" d="M267 282L267 283L279 283L267 282M288 282L288 283L301 285C302.753 280.349 290.931 282 288 282z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M302.333 282.667L302.667 283.333L302.333 282.667z"/>
        <path style="fill:#3b3536; stroke:none;" d="M308 282L309 283L308 282z"/>
        <path style="fill:#655f60; stroke:none;" d="M313 282L313 283L316 283L313 282z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M316 282L317 283L316 282z"/>
        <path style="fill:#655f60; stroke:none;" d="M317 282L317 283L320 283L317 282z"/>
        <path style="fill:#3b3536; stroke:none;" d="M320 282L321 283L320 282z"/>
        <path style="fill:#655f60; stroke:none;" d="M324 282L325 283L324 282z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M330 282L331 283L330 282z"/>
        <path style="fill:#655f60; stroke:none;" d="M337 282L337 283L340 283L337 282z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M340 282L341 283L340 282z"/>
        <path style="fill:#655f60; stroke:none;" d="M341.667 282.333L342.333 282.667L341.667 282.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M343 282L344 283L343 282M347 282L348 283L347 282M390 282L393 285L393 284L390 282z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M413.667 282.333L414.333 282.667L413.667 282.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M438 282L439 283L438 282M461 282L459 284L459 285L461 282M500 282L501 283L500 282M502 282L503 283L502 282z"/>
        <path style="fill:#655f60; stroke:none;" d="M503 282L503 283L514 283L503 282M523 282L524 283L523 282z"/>
        <path style="fill:#3b3536; stroke:none;" d="M528 282L529 283L528 282z"/>
        <path style="fill:#655f60; stroke:none;" d="M529.667 282.333L530.333 282.667L529.667 282.333M534 282L535 283L534 282z"/>
        <path style="fill:#3b3536; stroke:none;" d="M535 282L536 283L535 282z"/>
        <path style="fill:#655f60; stroke:none;" d="M539 282L540 283L539 282M550 282L550 283L564 283L550 282M570 282L571 283L570 282z"/>
        <path style="fill:#3b3536; stroke:none;" d="M575 282L576 283L575 282z"/>
        <path style="fill:#655f60; stroke:none;" d="M576 282L577 283L576 282z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M577 282L578 283L577 282z"/>
        <path style="fill:#655f60; stroke:none;" d="M578 282L578 283L582 283L578 282z"/>
        <path style="fill:#3b3536; stroke:none;" d="M582 282L583 283L582 282z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M587 282L588 283L587 282z"/>
        <path style="fill:#3b3536; stroke:none;" d="M255 283L240 284L240 285L256 284L255 283M278 283L263 284L263 285L279 284L278 283z"/>
        <path style="fill:#655f60; stroke:none;" d="M309 283L310 284L309 283z"/>
        <path style="fill:#3b3536; stroke:none;" d="M310 283L311 284L310 283z"/>
        <path style="fill:#655f60; stroke:none;" d="M323 283L324 284L323 283z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M332 283L334 285L332 283z"/>
        <path style="fill:#3b3536; stroke:none;" d="M333 283L334 284L333 283z"/>
        <path style="fill:#655f60; stroke:none;" d="M346 283L347 284L346 283z"/>
        <path style="fill:#3b3536; stroke:none;" d="M451 283L436 284L436 285L452 284L451 283z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M524 283L526 285L524 283z"/>
        <path style="fill:#655f60; stroke:none;" d="M525 283L526 284L525 283z"/>
        <path style="fill:#3b3536; stroke:none;" d="M537 283L538 284L537 283z"/>
        <path style="fill:#655f60; stroke:none;" d="M538 283L539 284L538 283M571 283L572 284L571 283z"/>
        <path style="fill:#3b3536; stroke:none;" d="M572 283L573 284L572 283M584 283L585 284L584 283z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M586 283L587 284L586 283z"/>
        <path style="fill:#3b3536; stroke:none;" d="M176 284L176 285L179 285L176 284M194.667 284.333L195.333 284.667L194.667 284.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M196 284L197 285L196 284z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M205 284L209 286L209 285L205 284z"/>
        <path style="fill:#655f60; stroke:none;" d="M208 284L209 285L208 284M227 284L228 285L227 284z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M238 284C241.413 287.906 251.07 286 256 286L256 285L238 284z"/>
        <path style="fill:#655f60; stroke:none;" d="M255 284L256 285L255 284M278 284L279 285L278 284z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M284 284C287.413 287.906 297.07 286 302 286L302 285L284 284z"/>
        <path style="fill:#3b3536; stroke:none;" d="M285 284L285 285L301 285L285 284z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M310 284L311 285L310 284z"/>
        <path style="fill:#655f60; stroke:none;" d="M311 284L312 285L311 284z"/>
        <path style="fill:#3b3536; stroke:none;" d="M312.667 284.333L313.333 284.667L312.667 284.333M319.667 284.333L320.333 284.667L319.667 284.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M321 284L322 285L321 284z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M322 284L323 285L322 284z"/>
        <path style="fill:#655f60; stroke:none;" d="M334.667 284.333L335.333 284.667L334.667 284.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M336 284L337 285L336 284M343 284L344 285L343 284z"/>
        <path style="fill:#655f60; stroke:none;" d="M344 284L345 285L344 284M374 284L375 285L374 284M390 284L391 285L390 284M404 284L405 285L404 284M423 284L424 285L423 284M435 284L436 285L435 284M451 284L452 285L451 284M461 284L462 285L461 284z"/>
        <path style="fill:#3b3536; stroke:none;" d="M485 284L485 285L488 285L485 284M497 284L497 285L514 285L497 284z"/>
        <path style="fill:#655f60; stroke:none;" d="M526.667 284.333L527.333 284.667L526.667 284.333z"/>
        <path style="fill:#3b3536; stroke:none;" d="M528 284L529 285L528 284M535 284L536 285L535 284z"/>
        <path style="fill:#655f60; stroke:none;" d="M536 284L537 285L536 284z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M537 284L538 285L537 284z"/>
        <path style="fill:#655f60; stroke:none;" d="M547 284L548 285L547 284z"/>
        <path style="fill:#3b3536; stroke:none;" d="M548 284L548 285L562 285L548 284z"/>
        <path style="fill:#655f60; stroke:none;" d="M562 284L563 285L562 284z"/>
        <path style="fill:#3b3536; stroke:none;" d="M563 284L564 285L563 284z"/>
        <path style="fill:#655f60; stroke:none;" d="M573 284L574 285L573 284z"/>
        <path style="fill:#3b3536; stroke:none;" d="M574.667 284.333L575.333 284.667L574.667 284.333M582 284L583 285L582 284z"/>
        <path style="fill:#655f60; stroke:none;" d="M583 284L584 285L583 284z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M584.667 284.333L585.333 284.667L584.667 284.333M175 285L175 286L179 286L175 285M262 285L262 286L279 286L262 285M312.667 285.333L313.333 285.667L312.667 285.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M314 285L314 286L319 286L314 285z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M319.667 285.333L320.333 285.667L319.667 285.333M335 285L335 286L338 286L335 285z"/>
        <path style="fill:#655f60; stroke:none;" d="M338 285L338 286L343 286L338 285z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M527.667 285.333L528.333 285.667L527.667 285.333z"/>
        <path style="fill:#655f60; stroke:none;" d="M529 285L529 286L534 286L529 285z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M534.667 285.333L535.333 285.667L534.667 285.333M574 285L574 286L577 286L574 285z"/>
        <path style="fill:#655f60; stroke:none;" d="M577 285L577 286L581 286L577 285z"/>
        <path style="fill:#a8a3a3; stroke:none;" d="M581.667 285.333L582.333 285.667L581.667 285.333z"/>
      </svg>
    </div>
  );
};

export default Brand;
