import {ROWS, COLS} from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [{x: 2, y: 0}, {x: 1, y: 0}, {x: 0, y: 0}];
  // 먹이의 좌표
  this.fruit = {x: 5, y: 10};
}

SnakeGameLogic.prototype.up = function() {
  console.log('up');
  for(let i of this.joints){
    i.y--;
  }
}

SnakeGameLogic.prototype.down = function() {
  console.log('down');
  for (let i of this.joints) {
    i.y++;
  }
}

SnakeGameLogic.prototype.left = function() {
  console.log('left');
  for (let i of this.joints) {
    i.x--;
  }
}

SnakeGameLogic.prototype.right = function() {
  console.log('right');
  for (let i of this.joints) {
    i.x++;
  }
}

SnakeGameLogic.prototype.nextState = function() {
    // 한 번 움직여야 할 타이밍마다 실행되는 함수
    // 게임이 아직 끝나지 않았으면 `true`를 반환
    // 게임이 끝났으면 `false`를 반환
    console.log(`nextState`);
  for (let i of this.joints) {
    i.x++;
  }
    return true;
}

export default SnakeGameLogic;
