/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nangular.module('cardApp', []).controller('MainCtrl', function MainCtrl($timeout) {\n\n  var vm = this;\n\n  function getId() {\n    var s = [];\n    var hexDigits = \"0123456789abcdef\";\n    for (var i = 0; i < 36; i++) {\n      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);\n    }\n    s[14] = \"4\";\n    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);\n    s[8] = s[13] = s[18] = s[23] = \"-\";\n    return s.join(\"\");\n  }\n\n  // Haste - deals direct damage when played\n  // Battleborn - available on turn 1\n  // Rage - attack all enemy cards\n  // Undead - heal 1 hp if health is 0 (dont combine)\n\n  vm.allCards = [\n    {\n      Id: getId(),\n      Available: 'sick',\n      Rules: ['Haste'],\n      Name: 'Bounty Hunter',\n      Ap: 5,\n      Hp: 2,\n      Desc: 'Attacks the enemy when hired',\n      Cost: 9,\n      Img: '../img/card.png'\n    },\n    {\n      Id: getId(),\n      Available: 'sick',\n      Rules: ['Rage'],\n      Name: 'Town Drunk',\n      Ap: 4,\n      Hp: 2,\n      Desc: 'Attacks all minions when hired',\n      Cost: 6,\n      Img: '../img/card.png'\n    },\n    {\n      Id: getId(),\n      Available: 'sick',\n      Rules: ['Undead'],\n      Name: 'Veteran',\n      Ap: 2,\n      Hp: 1,\n      Desc: 'Regain 1 Hp when at 0 Hp',\n      Cost: 3,\n      Img: '../img/card.png'\n    },\n    {\n      Id: getId(),\n      Available: 'sick',\n      Rules: ['Battleborn'],\n      Name: 'Guttersnipe',\n      Ap: 1,\n      Hp: 5,\n      Desc: 'Can attack immediately',\n      Cost: 2,\n      Img: '../img/card.png'\n    },\n    {\n      Id: getId(),\n      Available: 'sick',\n      Rules: ['Holy'],\n      Name: 'Cutthroat',\n      Ap: 2,\n      Hp: 4,\n      Desc: 'Immune to wounded attackers',\n      Cost: 3,\n      Img: '../img/card.png'\n    },\n    {\n      Id: getId(),\n      Available: 'sick',\n      Rules: [],\n      Name: 'Oarssman',\n      Ap: 5,\n      Hp: 5,\n      Desc: '',\n      Cost: 4,\n      Img: '../img/card.png'\n    },\n    {\n      Id: getId(),\n      Available: 'sick',\n      Rules: ['Smuggler'],\n      Name: 'Angry Farmboy',\n      Ap: 2,\n      Hp: 1,\n      Desc: 'Draw a random card when hiered',\n      Cost: 2,\n      Img: '../img/card.png'\n    },\n    {\n      Id: getId(), Available: 'sick',\n      Rules: [],\n      Name: 'Noble Knave',\n      Ap: 3,\n      Hp: 2,\n      Desc:'',\n      Cost: 5,\n      Img: '../img/card.png'\n    },\n    {\n      Id: getId(),\n      Available: 'sick',\n      Rules: ['Martyr'],\n      Name: 'Mad Cultist',\n      Ap: 0,\n      Hp: 2,\n      Desc: 'Heals all allies and is wounded',\n      Cost: 7,\n      Img: '../img/card.png'\n    },\n    {\n      Id: getId(),\n      Available: 'sick',\n      Rules: [],\n      Name: 'Meager Barkeep',\n      Ap: 2,\n      Hp: 5,\n      Desc: '',\n      Cost: 4,\n      Img: '../img/card.png'\n    },\n    {\n      Id: getId(),\n      Available: 'sick',\n      Rules: [],\n      Name: 'Restless Coachman',\n      Ap: 5,\n      Hp: 2,\n      Desc: '',\n      Cost: 6,\n      Img: '../img/card.png'\n    },\n    {\n      Id: getId(),\n      Available: 'sick',\n      Rules: ['Holy'],\n      Name: 'Weary Monk',\n      Ap: 1,\n      Hp: 6,\n      Desc: 'Immune to wounded attackers',\n      Cost: 4,\n      Img: '../img/card.png'\n    },\n    {\n      Id: getId(),\n      Available: 'sick',\n      Rules: ['Rage'],\n      Name: 'Shady Sellsword',\n      Ap: 2,\n      Hp: 6,\n      Desc: 'Attacks all minions when hired',\n      Cost: 8,\n      Img: '../img/card.png'\n    },\n    {\n      Id: getId(),\n      Available: 'sick',\n      Rules: [],\n      Name: 'Salty Captain',\n      Ap: 1,\n      Hp: 2,\n      Desc: '',\n      Cost: 1,\n      Img: '../img/card.png'\n    }\n  ];\n\n  vm.myDeck = [];\n  vm.myBoard = [];\n  vm.deckBuilt = false;\n  vm.player = {\n    HandCards: [],\n    Mana: 1,\n    Hp: 20,\n    Ap: 0\n  };\n\n  vm.enemy = {\n    HandCards: [],\n    Mana: 1,\n    Hp: 20,\n    Ap: 0\n  }\n\n  vm.enemyBoard = [];\n  vm.enemyDeck = [];\n  vm.activeTarget = {};\n  vm.isItMyTurn = true;\n  vm.fakeArr = [];\n\n  var newCard;\n\n  vm.randomDeck = randomDeck;\n  vm.confirm = confirm;\n  vm.basicAtk = basicAtk;\n  vm.setActiveTarget = setActiveTarget;\n  vm.addCardTo = addCardTo;\n\n  function randomDeck() {\n    vm.myDeck = [];\n    for (var i = 0; i < 30; i++) {\n      var randomCard = vm.allCards[Math.floor(Math.random()*vm.allCards.length)];\n      addCardTo(randomCard, vm.myDeck)\n    }\n    confirm();\n  }\n\n  function confirm() {\n    if (vm.myDeck.length >= 10 && vm.myDeck.length <= 30) {\n      vm.deckBuilt = true;\n    }\n    else {\n      return;\n    }\n    for (var i = 0; i < vm.allCards.length; i++) {\n      vm.enemyDeck.push(vm.allCards[i])\n    }\n\n    fakeEnemy();\n    for (var i = 0; i < 10; i++) {\n      var randomCard = vm.myDeck[Math.floor(Math.random()*vm.myDeck.length)];\n      addCardTo(randomCard, vm.player.HandCards, vm.myDeck)\n    }\n  }\n\n  function drawACard (deck, hand) {\n    var randomCard = deck[Math.floor(Math.random()*deck.length)];\n    addCardTo(randomCard, hand, deck);\n  }\n\n  function toOne(card, target) {\n    target.Hp = target.Hp - card.Ap;\n    card.Hp = card.Hp - target.Ap;\n  }\n\n  function toAll(card, targetArr) {\n    for (var i = 0; i < targetArr.length; i++) {\n      toOne(card, targetArr[i])\n    }\n  }\n\n  function basicAtk(card) {\n    if (vm.activeTarget.Hp && card.Available === true) {\n      enforceRulesOnAttack(card, vm.activeTarget);\n      toOne(card, vm.activeTarget)\n      card.Available = false;\n      if (vm.activeTarget.Hp<1) {\n        vm.activeTarget = {};\n      }\n    }\n  }\n\n  function enforceRulesOnPlay(card) {\n    if (card.Rules.length<1) {\n      return;\n    }\n\n    var user = {};\n    if (vm.isItMyTurn) {\n      user.attacker = vm.player;\n      user.targetPlayer = vm.enemy;\n    } else {\n      user.attacker = vm.enemy;\n      user.targetPlayer = vm.player;\n    }\n\n    for (var i = 0; i < card.Rules.length; i++) {\n      if (card.Rules[i] === \"Haste\") {\n        toOne(card, vm.enemy)\n      }\n      if (card.Rules[i] === \"Rage\") {\n        toAll(card, vm.enemyBoard)\n      }\n      if (card.Rules[i] === \"Battleborn\") {\n        card.Available = true;\n      }\n      if (card.Rules[i] === \"Smuggler\") {\n        if (user.attacker.HandCards.length<10) {\n          drawACard(vm.allCards, user.attacker.HandCards);\n        }\n      }\n      if (card.Rules[i] === \"Martyr\") {\n        for (var i = 0; i < vm.myBoard.length; i++) {\n          vm.myBoard[i].Hp = vm.myBoard[i].Hp + card.Hp;\n        }\n        card.Hp = 0;\n      }\n    }\n  }\n\n  function enforceRulesOnDeath(card) {\n    if (card.Rules.length<1)  {\n      return;\n    }\n    if (card.Rules[0] === \"Undead\") {\n      if (card.Hp == 0) card.Hp = 1;\n    }\n  }\n\n  function enforceRulesOnAttack(card, target) {\n    if (card.Rules.length<1 || !target) {\n      return;\n    }\n    if (target.Rules && target.Rules[0] === \"Holy\") {\n      if (card.Hp <= 0) {\n        vm.activeTarget = null;\n        card.Available = false;\n      }\n    }\n  }\n\n  function updateCardAvailability(board, status) {\n    for (var i = 0; i < board.length; i++) {\n      board[i].Available = status;\n    }\n  }\n\n  function setActiveTarget(newTarget) {\n    vm.activeTarget = newTarget;\n  }\n\n  function addCardTo(card, arr, removeFrom, mana, manaPool) {\n    if ((mana && manaPool) && (mana > manaPool || arr.length >= 4)) {\n      return;\n    }\n    if ((mana && manaPool) && (mana <= manaPool)){\n      manaPool = manaPool - mana;\n      enforceRulesOnPlay(card);\n    }\n\n    var newCard = angular.copy(card);\n    newCard.Id = getId();\n\n    if (arr.indexOf(newCard) == -1) {\n      arr.push(newCard);\n      if (removeFrom) {\n        removeFrom.splice(removeFrom.indexOf(card), 1);\n      }\n    }\n  }\n\n  function bringOutTheDead(board) {\n    for (var i = 0; i < board.length; i++) {\n      var card = board[i];\n\n      enforceRulesOnDeath(card)\n\n      if (card.Hp < 1) {\n        board.splice(board.indexOf(card), 1);\n      }\n    }\n  }\n\n  function endGame() {\n    if (vm.enemy.Hp < 1) {\n      alert('You won');\n    } else if (vm.player.Hp < 1) {\n      alert('You lost');\n    }\n  }\n\n  function fakeEnemy() {\n    if (vm.enemy.HandCards.length<1) {\n      for (var i = 0; i < 10; i++) {\n        drawACard(vm.enemyDeck, vm.enemy.HandCards);\n      }\n    }\n\n    if (vm.enemyBoard.length>0) {\n      updateCardAvailability(vm.enemyBoard, true);\n    }\n    for (var i = 0; i < vm.enemy.HandCards.length; i++) {\n      addCardTo(vm.enemy.HandCards[i], vm.enemyBoard, vm.enemy.HandCards, vm.enemy.HandCards[i].Cost,  vm.enemy.Mana);\n    }\n\n    $timeout(function () {\n      if (vm.enemyBoard.length > 0 && vm.myBoard.length && vm.enemyBoard[0].Available == true) {\n        vm.activeTarget = vm.myBoard[0];\n        basicAtk(vm.enemyBoard[0]);\n      } else if (vm.enemyBoard.length > 0) {\n        vm.activeTarget = vm.player;\n        basicAtk(vm.enemyBoard[0]);\n      }\n      vm.activeTarget = null;\n    }, 2000);\n\n  }\n\n  var round = 0;\n  vm.newRound = function () {\n    if (vm.isItMyTurn === false) {\n      return;\n    }\n    endGame();\n    if (round < 10 ) {\n      round++;\n    }\n\n    vm.activeTarget = null;\n\n    bringOutTheDead(vm.myBoard);\n    bringOutTheDead(vm.myBoard);\n\n    updateCardAvailability(vm.myBoard, false);\n    vm.isItMyTurn = false;\n\n    vm.enemy.Mana = round;\n\n    $timeout(function () {\n      fakeEnemy();\n    }, 3000);\n\n    $timeout(function () {\n\n      bringOutTheDead(vm.enemyBoard);\n      bringOutTheDead(vm.enemyBoard);\n      vm.isItMyTurn = true;\n      if (vm.myDeck.length > 0 && vm.player.HandCards.length < 10) {\n        drawACard(vm.myDeck, vm.player.HandCards);\n      }\n      updateCardAvailability(vm.myBoard, true);\n      vm.player.Mana = round;\n    }, 6000);\n\n  }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnY2FyZEFwcCcsIFtdKS5jb250cm9sbGVyKCdNYWluQ3RybCcsIGZ1bmN0aW9uIE1haW5DdHJsKCR0aW1lb3V0KSB7XG5cbiAgdmFyIHZtID0gdGhpcztcblxuICBmdW5jdGlvbiBnZXRJZCgpIHtcbiAgICB2YXIgcyA9IFtdO1xuICAgIHZhciBoZXhEaWdpdHMgPSBcIjAxMjM0NTY3ODlhYmNkZWZcIjtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM2OyBpKyspIHtcbiAgICAgIHNbaV0gPSBoZXhEaWdpdHMuc3Vic3RyKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDB4MTApLCAxKTtcbiAgICB9XG4gICAgc1sxNF0gPSBcIjRcIjtcbiAgICBzWzE5XSA9IGhleERpZ2l0cy5zdWJzdHIoKHNbMTldICYgMHgzKSB8IDB4OCwgMSk7XG4gICAgc1s4XSA9IHNbMTNdID0gc1sxOF0gPSBzWzIzXSA9IFwiLVwiO1xuICAgIHJldHVybiBzLmpvaW4oXCJcIik7XG4gIH1cblxuICAvLyBIYXN0ZSAtIGRlYWxzIGRpcmVjdCBkYW1hZ2Ugd2hlbiBwbGF5ZWRcbiAgLy8gQmF0dGxlYm9ybiAtIGF2YWlsYWJsZSBvbiB0dXJuIDFcbiAgLy8gUmFnZSAtIGF0dGFjayBhbGwgZW5lbXkgY2FyZHNcbiAgLy8gVW5kZWFkIC0gaGVhbCAxIGhwIGlmIGhlYWx0aCBpcyAwIChkb250IGNvbWJpbmUpXG5cbiAgdm0uYWxsQ2FyZHMgPSBbXG4gICAge1xuICAgICAgSWQ6IGdldElkKCksXG4gICAgICBBdmFpbGFibGU6ICdzaWNrJyxcbiAgICAgIFJ1bGVzOiBbJ0hhc3RlJ10sXG4gICAgICBOYW1lOiAnQm91bnR5IEh1bnRlcicsXG4gICAgICBBcDogNSxcbiAgICAgIEhwOiAyLFxuICAgICAgRGVzYzogJ0F0dGFja3MgdGhlIGVuZW15IHdoZW4gaGlyZWQnLFxuICAgICAgQ29zdDogOSxcbiAgICAgIEltZzogJy4uL2ltZy9jYXJkLnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgIElkOiBnZXRJZCgpLFxuICAgICAgQXZhaWxhYmxlOiAnc2ljaycsXG4gICAgICBSdWxlczogWydSYWdlJ10sXG4gICAgICBOYW1lOiAnVG93biBEcnVuaycsXG4gICAgICBBcDogNCxcbiAgICAgIEhwOiAyLFxuICAgICAgRGVzYzogJ0F0dGFja3MgYWxsIG1pbmlvbnMgd2hlbiBoaXJlZCcsXG4gICAgICBDb3N0OiA2LFxuICAgICAgSW1nOiAnLi4vaW1nL2NhcmQucG5nJ1xuICAgIH0sXG4gICAge1xuICAgICAgSWQ6IGdldElkKCksXG4gICAgICBBdmFpbGFibGU6ICdzaWNrJyxcbiAgICAgIFJ1bGVzOiBbJ1VuZGVhZCddLFxuICAgICAgTmFtZTogJ1ZldGVyYW4nLFxuICAgICAgQXA6IDIsXG4gICAgICBIcDogMSxcbiAgICAgIERlc2M6ICdSZWdhaW4gMSBIcCB3aGVuIGF0IDAgSHAnLFxuICAgICAgQ29zdDogMyxcbiAgICAgIEltZzogJy4uL2ltZy9jYXJkLnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgIElkOiBnZXRJZCgpLFxuICAgICAgQXZhaWxhYmxlOiAnc2ljaycsXG4gICAgICBSdWxlczogWydCYXR0bGVib3JuJ10sXG4gICAgICBOYW1lOiAnR3V0dGVyc25pcGUnLFxuICAgICAgQXA6IDEsXG4gICAgICBIcDogNSxcbiAgICAgIERlc2M6ICdDYW4gYXR0YWNrIGltbWVkaWF0ZWx5JyxcbiAgICAgIENvc3Q6IDIsXG4gICAgICBJbWc6ICcuLi9pbWcvY2FyZC5wbmcnXG4gICAgfSxcbiAgICB7XG4gICAgICBJZDogZ2V0SWQoKSxcbiAgICAgIEF2YWlsYWJsZTogJ3NpY2snLFxuICAgICAgUnVsZXM6IFsnSG9seSddLFxuICAgICAgTmFtZTogJ0N1dHRocm9hdCcsXG4gICAgICBBcDogMixcbiAgICAgIEhwOiA0LFxuICAgICAgRGVzYzogJ0ltbXVuZSB0byB3b3VuZGVkIGF0dGFja2VycycsXG4gICAgICBDb3N0OiAzLFxuICAgICAgSW1nOiAnLi4vaW1nL2NhcmQucG5nJ1xuICAgIH0sXG4gICAge1xuICAgICAgSWQ6IGdldElkKCksXG4gICAgICBBdmFpbGFibGU6ICdzaWNrJyxcbiAgICAgIFJ1bGVzOiBbXSxcbiAgICAgIE5hbWU6ICdPYXJzc21hbicsXG4gICAgICBBcDogNSxcbiAgICAgIEhwOiA1LFxuICAgICAgRGVzYzogJycsXG4gICAgICBDb3N0OiA0LFxuICAgICAgSW1nOiAnLi4vaW1nL2NhcmQucG5nJ1xuICAgIH0sXG4gICAge1xuICAgICAgSWQ6IGdldElkKCksXG4gICAgICBBdmFpbGFibGU6ICdzaWNrJyxcbiAgICAgIFJ1bGVzOiBbJ1NtdWdnbGVyJ10sXG4gICAgICBOYW1lOiAnQW5ncnkgRmFybWJveScsXG4gICAgICBBcDogMixcbiAgICAgIEhwOiAxLFxuICAgICAgRGVzYzogJ0RyYXcgYSByYW5kb20gY2FyZCB3aGVuIGhpZXJlZCcsXG4gICAgICBDb3N0OiAyLFxuICAgICAgSW1nOiAnLi4vaW1nL2NhcmQucG5nJ1xuICAgIH0sXG4gICAge1xuICAgICAgSWQ6IGdldElkKCksIEF2YWlsYWJsZTogJ3NpY2snLFxuICAgICAgUnVsZXM6IFtdLFxuICAgICAgTmFtZTogJ05vYmxlIEtuYXZlJyxcbiAgICAgIEFwOiAzLFxuICAgICAgSHA6IDIsXG4gICAgICBEZXNjOicnLFxuICAgICAgQ29zdDogNSxcbiAgICAgIEltZzogJy4uL2ltZy9jYXJkLnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgIElkOiBnZXRJZCgpLFxuICAgICAgQXZhaWxhYmxlOiAnc2ljaycsXG4gICAgICBSdWxlczogWydNYXJ0eXInXSxcbiAgICAgIE5hbWU6ICdNYWQgQ3VsdGlzdCcsXG4gICAgICBBcDogMCxcbiAgICAgIEhwOiAyLFxuICAgICAgRGVzYzogJ0hlYWxzIGFsbCBhbGxpZXMgYW5kIGlzIHdvdW5kZWQnLFxuICAgICAgQ29zdDogNyxcbiAgICAgIEltZzogJy4uL2ltZy9jYXJkLnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgIElkOiBnZXRJZCgpLFxuICAgICAgQXZhaWxhYmxlOiAnc2ljaycsXG4gICAgICBSdWxlczogW10sXG4gICAgICBOYW1lOiAnTWVhZ2VyIEJhcmtlZXAnLFxuICAgICAgQXA6IDIsXG4gICAgICBIcDogNSxcbiAgICAgIERlc2M6ICcnLFxuICAgICAgQ29zdDogNCxcbiAgICAgIEltZzogJy4uL2ltZy9jYXJkLnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgIElkOiBnZXRJZCgpLFxuICAgICAgQXZhaWxhYmxlOiAnc2ljaycsXG4gICAgICBSdWxlczogW10sXG4gICAgICBOYW1lOiAnUmVzdGxlc3MgQ29hY2htYW4nLFxuICAgICAgQXA6IDUsXG4gICAgICBIcDogMixcbiAgICAgIERlc2M6ICcnLFxuICAgICAgQ29zdDogNixcbiAgICAgIEltZzogJy4uL2ltZy9jYXJkLnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgIElkOiBnZXRJZCgpLFxuICAgICAgQXZhaWxhYmxlOiAnc2ljaycsXG4gICAgICBSdWxlczogWydIb2x5J10sXG4gICAgICBOYW1lOiAnV2VhcnkgTW9uaycsXG4gICAgICBBcDogMSxcbiAgICAgIEhwOiA2LFxuICAgICAgRGVzYzogJ0ltbXVuZSB0byB3b3VuZGVkIGF0dGFja2VycycsXG4gICAgICBDb3N0OiA0LFxuICAgICAgSW1nOiAnLi4vaW1nL2NhcmQucG5nJ1xuICAgIH0sXG4gICAge1xuICAgICAgSWQ6IGdldElkKCksXG4gICAgICBBdmFpbGFibGU6ICdzaWNrJyxcbiAgICAgIFJ1bGVzOiBbJ1JhZ2UnXSxcbiAgICAgIE5hbWU6ICdTaGFkeSBTZWxsc3dvcmQnLFxuICAgICAgQXA6IDIsXG4gICAgICBIcDogNixcbiAgICAgIERlc2M6ICdBdHRhY2tzIGFsbCBtaW5pb25zIHdoZW4gaGlyZWQnLFxuICAgICAgQ29zdDogOCxcbiAgICAgIEltZzogJy4uL2ltZy9jYXJkLnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgIElkOiBnZXRJZCgpLFxuICAgICAgQXZhaWxhYmxlOiAnc2ljaycsXG4gICAgICBSdWxlczogW10sXG4gICAgICBOYW1lOiAnU2FsdHkgQ2FwdGFpbicsXG4gICAgICBBcDogMSxcbiAgICAgIEhwOiAyLFxuICAgICAgRGVzYzogJycsXG4gICAgICBDb3N0OiAxLFxuICAgICAgSW1nOiAnLi4vaW1nL2NhcmQucG5nJ1xuICAgIH1cbiAgXTtcblxuICB2bS5teURlY2sgPSBbXTtcbiAgdm0ubXlCb2FyZCA9IFtdO1xuICB2bS5kZWNrQnVpbHQgPSBmYWxzZTtcbiAgdm0ucGxheWVyID0ge1xuICAgIEhhbmRDYXJkczogW10sXG4gICAgTWFuYTogMSxcbiAgICBIcDogMjAsXG4gICAgQXA6IDBcbiAgfTtcblxuICB2bS5lbmVteSA9IHtcbiAgICBIYW5kQ2FyZHM6IFtdLFxuICAgIE1hbmE6IDEsXG4gICAgSHA6IDIwLFxuICAgIEFwOiAwXG4gIH1cblxuICB2bS5lbmVteUJvYXJkID0gW107XG4gIHZtLmVuZW15RGVjayA9IFtdO1xuICB2bS5hY3RpdmVUYXJnZXQgPSB7fTtcbiAgdm0uaXNJdE15VHVybiA9IHRydWU7XG4gIHZtLmZha2VBcnIgPSBbXTtcblxuICB2YXIgbmV3Q2FyZDtcblxuICB2bS5yYW5kb21EZWNrID0gcmFuZG9tRGVjaztcbiAgdm0uY29uZmlybSA9IGNvbmZpcm07XG4gIHZtLmJhc2ljQXRrID0gYmFzaWNBdGs7XG4gIHZtLnNldEFjdGl2ZVRhcmdldCA9IHNldEFjdGl2ZVRhcmdldDtcbiAgdm0uYWRkQ2FyZFRvID0gYWRkQ2FyZFRvO1xuXG4gIGZ1bmN0aW9uIHJhbmRvbURlY2soKSB7XG4gICAgdm0ubXlEZWNrID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzMDsgaSsrKSB7XG4gICAgICB2YXIgcmFuZG9tQ2FyZCA9IHZtLmFsbENhcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp2bS5hbGxDYXJkcy5sZW5ndGgpXTtcbiAgICAgIGFkZENhcmRUbyhyYW5kb21DYXJkLCB2bS5teURlY2spXG4gICAgfVxuICAgIGNvbmZpcm0oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbmZpcm0oKSB7XG4gICAgaWYgKHZtLm15RGVjay5sZW5ndGggPj0gMTAgJiYgdm0ubXlEZWNrLmxlbmd0aCA8PSAzMCkge1xuICAgICAgdm0uZGVja0J1aWx0ID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm0uYWxsQ2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZtLmVuZW15RGVjay5wdXNoKHZtLmFsbENhcmRzW2ldKVxuICAgIH1cblxuICAgIGZha2VFbmVteSgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgdmFyIHJhbmRvbUNhcmQgPSB2bS5teURlY2tbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnZtLm15RGVjay5sZW5ndGgpXTtcbiAgICAgIGFkZENhcmRUbyhyYW5kb21DYXJkLCB2bS5wbGF5ZXIuSGFuZENhcmRzLCB2bS5teURlY2spXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0FDYXJkIChkZWNrLCBoYW5kKSB7XG4gICAgdmFyIHJhbmRvbUNhcmQgPSBkZWNrW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpkZWNrLmxlbmd0aCldO1xuICAgIGFkZENhcmRUbyhyYW5kb21DYXJkLCBoYW5kLCBkZWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvT25lKGNhcmQsIHRhcmdldCkge1xuICAgIHRhcmdldC5IcCA9IHRhcmdldC5IcCAtIGNhcmQuQXA7XG4gICAgY2FyZC5IcCA9IGNhcmQuSHAgLSB0YXJnZXQuQXA7XG4gIH1cblxuICBmdW5jdGlvbiB0b0FsbChjYXJkLCB0YXJnZXRBcnIpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhcmdldEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgdG9PbmUoY2FyZCwgdGFyZ2V0QXJyW2ldKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJhc2ljQXRrKGNhcmQpIHtcbiAgICBpZiAodm0uYWN0aXZlVGFyZ2V0LkhwICYmIGNhcmQuQXZhaWxhYmxlID09PSB0cnVlKSB7XG4gICAgICBlbmZvcmNlUnVsZXNPbkF0dGFjayhjYXJkLCB2bS5hY3RpdmVUYXJnZXQpO1xuICAgICAgdG9PbmUoY2FyZCwgdm0uYWN0aXZlVGFyZ2V0KVxuICAgICAgY2FyZC5BdmFpbGFibGUgPSBmYWxzZTtcbiAgICAgIGlmICh2bS5hY3RpdmVUYXJnZXQuSHA8MSkge1xuICAgICAgICB2bS5hY3RpdmVUYXJnZXQgPSB7fTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbmZvcmNlUnVsZXNPblBsYXkoY2FyZCkge1xuICAgIGlmIChjYXJkLlJ1bGVzLmxlbmd0aDwxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHVzZXIgPSB7fTtcbiAgICBpZiAodm0uaXNJdE15VHVybikge1xuICAgICAgdXNlci5hdHRhY2tlciA9IHZtLnBsYXllcjtcbiAgICAgIHVzZXIudGFyZ2V0UGxheWVyID0gdm0uZW5lbXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVzZXIuYXR0YWNrZXIgPSB2bS5lbmVteTtcbiAgICAgIHVzZXIudGFyZ2V0UGxheWVyID0gdm0ucGxheWVyO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FyZC5SdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNhcmQuUnVsZXNbaV0gPT09IFwiSGFzdGVcIikge1xuICAgICAgICB0b09uZShjYXJkLCB2bS5lbmVteSlcbiAgICAgIH1cbiAgICAgIGlmIChjYXJkLlJ1bGVzW2ldID09PSBcIlJhZ2VcIikge1xuICAgICAgICB0b0FsbChjYXJkLCB2bS5lbmVteUJvYXJkKVxuICAgICAgfVxuICAgICAgaWYgKGNhcmQuUnVsZXNbaV0gPT09IFwiQmF0dGxlYm9yblwiKSB7XG4gICAgICAgIGNhcmQuQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjYXJkLlJ1bGVzW2ldID09PSBcIlNtdWdnbGVyXCIpIHtcbiAgICAgICAgaWYgKHVzZXIuYXR0YWNrZXIuSGFuZENhcmRzLmxlbmd0aDwxMCkge1xuICAgICAgICAgIGRyYXdBQ2FyZCh2bS5hbGxDYXJkcywgdXNlci5hdHRhY2tlci5IYW5kQ2FyZHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY2FyZC5SdWxlc1tpXSA9PT0gXCJNYXJ0eXJcIikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLm15Qm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2bS5teUJvYXJkW2ldLkhwID0gdm0ubXlCb2FyZFtpXS5IcCArIGNhcmQuSHA7XG4gICAgICAgIH1cbiAgICAgICAgY2FyZC5IcCA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZW5mb3JjZVJ1bGVzT25EZWF0aChjYXJkKSB7XG4gICAgaWYgKGNhcmQuUnVsZXMubGVuZ3RoPDEpICB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjYXJkLlJ1bGVzWzBdID09PSBcIlVuZGVhZFwiKSB7XG4gICAgICBpZiAoY2FyZC5IcCA9PSAwKSBjYXJkLkhwID0gMTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbmZvcmNlUnVsZXNPbkF0dGFjayhjYXJkLCB0YXJnZXQpIHtcbiAgICBpZiAoY2FyZC5SdWxlcy5sZW5ndGg8MSB8fCAhdGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0YXJnZXQuUnVsZXMgJiYgdGFyZ2V0LlJ1bGVzWzBdID09PSBcIkhvbHlcIikge1xuICAgICAgaWYgKGNhcmQuSHAgPD0gMCkge1xuICAgICAgICB2bS5hY3RpdmVUYXJnZXQgPSBudWxsO1xuICAgICAgICBjYXJkLkF2YWlsYWJsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNhcmRBdmFpbGFiaWxpdHkoYm9hcmQsIHN0YXR1cykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJvYXJkW2ldLkF2YWlsYWJsZSA9IHN0YXR1cztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRBY3RpdmVUYXJnZXQobmV3VGFyZ2V0KSB7XG4gICAgdm0uYWN0aXZlVGFyZ2V0ID0gbmV3VGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ2FyZFRvKGNhcmQsIGFyciwgcmVtb3ZlRnJvbSwgbWFuYSwgbWFuYVBvb2wpIHtcbiAgICBpZiAoKG1hbmEgJiYgbWFuYVBvb2wpICYmIChtYW5hID4gbWFuYVBvb2wgfHwgYXJyLmxlbmd0aCA+PSA0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKG1hbmEgJiYgbWFuYVBvb2wpICYmIChtYW5hIDw9IG1hbmFQb29sKSl7XG4gICAgICBtYW5hUG9vbCA9IG1hbmFQb29sIC0gbWFuYTtcbiAgICAgIGVuZm9yY2VSdWxlc09uUGxheShjYXJkKTtcbiAgICB9XG5cbiAgICB2YXIgbmV3Q2FyZCA9IGFuZ3VsYXIuY29weShjYXJkKTtcbiAgICBuZXdDYXJkLklkID0gZ2V0SWQoKTtcblxuICAgIGlmIChhcnIuaW5kZXhPZihuZXdDYXJkKSA9PSAtMSkge1xuICAgICAgYXJyLnB1c2gobmV3Q2FyZCk7XG4gICAgICBpZiAocmVtb3ZlRnJvbSkge1xuICAgICAgICByZW1vdmVGcm9tLnNwbGljZShyZW1vdmVGcm9tLmluZGV4T2YoY2FyZCksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJyaW5nT3V0VGhlRGVhZChib2FyZCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjYXJkID0gYm9hcmRbaV07XG5cbiAgICAgIGVuZm9yY2VSdWxlc09uRGVhdGgoY2FyZClcblxuICAgICAgaWYgKGNhcmQuSHAgPCAxKSB7XG4gICAgICAgIGJvYXJkLnNwbGljZShib2FyZC5pbmRleE9mKGNhcmQpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbmRHYW1lKCkge1xuICAgIGlmICh2bS5lbmVteS5IcCA8IDEpIHtcbiAgICAgIGFsZXJ0KCdZb3Ugd29uJyk7XG4gICAgfSBlbHNlIGlmICh2bS5wbGF5ZXIuSHAgPCAxKSB7XG4gICAgICBhbGVydCgnWW91IGxvc3QnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmYWtlRW5lbXkoKSB7XG4gICAgaWYgKHZtLmVuZW15LkhhbmRDYXJkcy5sZW5ndGg8MSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGRyYXdBQ2FyZCh2bS5lbmVteURlY2ssIHZtLmVuZW15LkhhbmRDYXJkcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZtLmVuZW15Qm9hcmQubGVuZ3RoPjApIHtcbiAgICAgIHVwZGF0ZUNhcmRBdmFpbGFiaWxpdHkodm0uZW5lbXlCb2FyZCwgdHJ1ZSk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm0uZW5lbXkuSGFuZENhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhZGRDYXJkVG8odm0uZW5lbXkuSGFuZENhcmRzW2ldLCB2bS5lbmVteUJvYXJkLCB2bS5lbmVteS5IYW5kQ2FyZHMsIHZtLmVuZW15LkhhbmRDYXJkc1tpXS5Db3N0LCAgdm0uZW5lbXkuTWFuYSk7XG4gICAgfVxuXG4gICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHZtLmVuZW15Qm9hcmQubGVuZ3RoID4gMCAmJiB2bS5teUJvYXJkLmxlbmd0aCAmJiB2bS5lbmVteUJvYXJkWzBdLkF2YWlsYWJsZSA9PSB0cnVlKSB7XG4gICAgICAgIHZtLmFjdGl2ZVRhcmdldCA9IHZtLm15Qm9hcmRbMF07XG4gICAgICAgIGJhc2ljQXRrKHZtLmVuZW15Qm9hcmRbMF0pO1xuICAgICAgfSBlbHNlIGlmICh2bS5lbmVteUJvYXJkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdm0uYWN0aXZlVGFyZ2V0ID0gdm0ucGxheWVyO1xuICAgICAgICBiYXNpY0F0ayh2bS5lbmVteUJvYXJkWzBdKTtcbiAgICAgIH1cbiAgICAgIHZtLmFjdGl2ZVRhcmdldCA9IG51bGw7XG4gICAgfSwgMjAwMCk7XG5cbiAgfVxuXG4gIHZhciByb3VuZCA9IDA7XG4gIHZtLm5ld1JvdW5kID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh2bS5pc0l0TXlUdXJuID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRHYW1lKCk7XG4gICAgaWYgKHJvdW5kIDwgMTAgKSB7XG4gICAgICByb3VuZCsrO1xuICAgIH1cblxuICAgIHZtLmFjdGl2ZVRhcmdldCA9IG51bGw7XG5cbiAgICBicmluZ091dFRoZURlYWQodm0ubXlCb2FyZCk7XG4gICAgYnJpbmdPdXRUaGVEZWFkKHZtLm15Qm9hcmQpO1xuXG4gICAgdXBkYXRlQ2FyZEF2YWlsYWJpbGl0eSh2bS5teUJvYXJkLCBmYWxzZSk7XG4gICAgdm0uaXNJdE15VHVybiA9IGZhbHNlO1xuXG4gICAgdm0uZW5lbXkuTWFuYSA9IHJvdW5kO1xuXG4gICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgZmFrZUVuZW15KCk7XG4gICAgfSwgMzAwMCk7XG5cbiAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG5cbiAgICAgIGJyaW5nT3V0VGhlRGVhZCh2bS5lbmVteUJvYXJkKTtcbiAgICAgIGJyaW5nT3V0VGhlRGVhZCh2bS5lbmVteUJvYXJkKTtcbiAgICAgIHZtLmlzSXRNeVR1cm4gPSB0cnVlO1xuICAgICAgaWYgKHZtLm15RGVjay5sZW5ndGggPiAwICYmIHZtLnBsYXllci5IYW5kQ2FyZHMubGVuZ3RoIDwgMTApIHtcbiAgICAgICAgZHJhd0FDYXJkKHZtLm15RGVjaywgdm0ucGxheWVyLkhhbmRDYXJkcyk7XG4gICAgICB9XG4gICAgICB1cGRhdGVDYXJkQXZhaWxhYmlsaXR5KHZtLm15Qm9hcmQsIHRydWUpO1xuICAgICAgdm0ucGxheWVyLk1hbmEgPSByb3VuZDtcbiAgICB9LCA2MDAwKTtcblxuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);