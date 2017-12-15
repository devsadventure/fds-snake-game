import {
  ROWS,
  COLS
} from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [{
      x: 3,
      y: 0
    },
    {
      x: 2,
      y: 0
    },
    {
      x: 1,
      y: 0
    },
    {
      x: 0,
      y: 0
    }
  ];
  // 먹이의 좌표
  this.fruit = {
    x: 5,
    y: 10
  };
  this.direction = "right";
}


SnakeGameLogic.prototype.up = function () {
  this.direction = "up";
  console.log('up');
}

SnakeGameLogic.prototype.down = function () {
  this.direction = "down";
  console.log('down');
}

SnakeGameLogic.prototype.left = function () {
  this.direction = "left";
  console.log('left');
}

SnakeGameLogic.prototype.right = function () {
  this.direction = "right";
  console.log('right');
}

SnakeGameLogic.prototype.nextState = function () {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  console.log(`nextState`);
  this.joints.pop();
  if (this.direction === 'right') {
    this.joints.unshift({
      x: this.joints[0].x + 1,
      y: this.joints[0].y
    });
  } else if (this.direction === 'left') {
    this.joints.unshift({
      x: this.joints[0].x - 1,
      y: this.joints[0].y
    });
  } else if (this.direction === 'down') {
    this.joints.unshift({
      x: this.joints[0].x,
      y: this.joints[0].y + 1
    });
  } else if (this.direction === 'up') {
    this.joints.unshift({
      x: this.joints[0].x,
      y: this.joints[0].y - 1
    });
  }
  return true;
}

export default SnakeGameLogic;
