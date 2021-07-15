function cachingDecoratorNew(func) {
  
    let stack = [];
    let cache = {};

    function wrapper(...args) {
      const hash = args.join('*');
      
      if (hash in cache) {
        //console.log("Из кэша: " + cache[hash]);
        return ("Из кэша: " + cache[hash]);
      } else {
        if (!stack.length < 5) {
          delete cache[stack[0]];
          stack.shift();
        }
        stack.push(hash);          
        let result = func.call(this, ...args);
        cache[hash] = result;
        //console.log("Вычисляем: " + result);
        return ("Вычисляем: " + result);
      }
    }

  return wrapper;
}

////////////////////////////////////////////////////////

function debounceDecoratorNew(func, ms) {
  
  let canGo = true;

  return function(...args) {
    if (!canGo) {
      console.log("проигнорировано");
      return;
    } 
    canGo = false;
    func(args);
    setTimeout(() => canGo = true, ms);
  }
}

/*
const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);

setTimeout(upgradedSendSignal); // Сигнал отправлен
setTimeout(upgradedSendSignal, 1000); // проигнорировано так как от последнего вызова прошло менее 2000мс
setTimeout(upgradedSendSignal, 2100); // проигнорировано аналогично
setTimeout(upgradedSendSignal, 3600); // проигнорировано аналогично
setTimeout(upgradedSendSignal, 4200); // проигнорировано аналогично
setTimeout(upgradedSendSignal, 5000); // Сигнал отправлен
setTimeout(upgradedSendSignal, 6250);
*/

//////////////////////////////////////////////////////////////
function debounceDecorator2(func, ms) {
  
  let canGo = true;
  wrapper.count = 0;

  function wrapper (...args) {
    if (!canGo) {
      console.log("проигнорировано");
      return;
    } 
    canGo = false;
    func(args);
    wrapper.count += 1;
    setTimeout(() => canGo = true, ms);
  }

  return wrapper;
}

/*
const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecorator2(sendSignal, 2000);

setTimeout(upgradedSendSignal); // Сигнал отправлен
setTimeout(upgradedSendSignal, 1000); // проигнорировано так как от последнего вызова прошло менее 2000мс
setTimeout(upgradedSendSignal, 2100); // проигнорировано аналогично
setTimeout(upgradedSendSignal, 3600); // проигнорировано аналогично
setTimeout(upgradedSendSignal, 4200); // проигнорировано аналогично
setTimeout(upgradedSendSignal, 5000); // Сигнал отправлен
setTimeout(upgradedSendSignal, 6250);
setTimeout(() => console.log(upgradedSendSignal.count), 10000);
*/