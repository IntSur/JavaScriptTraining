function animate(obj, destination, interval, callback) {// callback就是回调函数，当作形参传入了函数中
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
      var turnsslow = (destination - obj.offsetLeft) / 10;// Math.ceil消除了left非整数的问题
      turnsslow = turnsslow > 0 ? Math.ceil(turnsslow) : Math.floor(turnsslow);
      if (obj.offsetLeft == destination) {
        clearInterval(obj.timer);
        if (callback) {
          callback();
        }
      }
      obj.style.left = obj.offsetLeft + turnsslow + 'px';
    }, interval);
  }
