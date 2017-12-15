import {
  ROWS,
  COLS
} from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0}
  ];
  // 먹이의 좌표
  this.fruit = {
    x: 3,
    y: 5
  };
  this.direction = 'right';
}

SnakeGameLogic.prototype.up = function () {
  console.log('up');
  this.direction = 'up';
}

SnakeGameLogic.prototype.down = function () {
  console.log('down');
  this.direction = 'down';
}

SnakeGameLogic.prototype.left = function () {
  console.log('left');
  this.direction = 'left';
}

SnakeGameLogic.prototype.right = function () {
  console.log('right');
  this.direction = 'right';
}

SnakeGameLogic.prototype.nextState = function () {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  console.log(`nextState`);

  // 아직 가지는 않았지만 가고 싶은 곳의 위치
  let newHead;
  if (this.direction === 'up'){
    newHead = {
      x: this.joints[0].x,
      y: this.joints[0].y-1
    }
  } else if (this.direction === 'down'){
    newHead = {
      x: this.joints[0].x,
      y: this.joints[0].y+1
    }
  } else if (this.direction === 'right') {
    newHead = {
      x: this.joints[0].x+1,
      y: this.joints[0].y
    }
  } else if (this.direction === 'left') {
    newHead = {
      x: this.joints[0].x-1,
      y: this.joints[0].y
    }
  }

  if (newHead.x === this.fruit.x && newHead.y === this.fruit.y){
    do {
      this.fruit.x = Math.floor(Math.random() * COLS);
      this.fruit.y = Math.floor(Math.random() * ROWS);
    }
    while(
      (this.joints.some(j => this.fruit.x === j.x && this.fruit.y === j.y)) ||
      (newHead.x === this.fruit.x && newHead.y === this.fruit.y)
    );
  } else {
    this.joints.pop();
  }

  if (
    // 벽에 부딪혔을 때
     newHead.x < 0 ||
     newHead.x >= COLS ||
     newHead.y < 0 ||
     newHead.y >= ROWS ||
     // 자기 몸에 부딪혔을 때
     this.joints.some(j => j.x === newHead.x && j.y === newHead.y)
    ){
      return false;
    }

  this.joints.unshift(newHead);
  return true;
}

export default SnakeGameLogic;
