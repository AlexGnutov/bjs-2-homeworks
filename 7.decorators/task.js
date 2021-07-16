function cachingDecoratorNew(func) {
  
  let queue = [];
    
  function wrapper(...args) {
    const hash = args.join('*');
     
    let slot = queue.find((elem) => elem.hash === hash);

    if (slot) {
      return ("Из кэша: " + slot.value);
    } else {
      if (!queue.length < 5) {
        queue.shift();
      }
      let result = func.call(this, ...args);
      queue.push({'hash': hash, 'value': result}); 
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
    func(...args);
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
    func(...args);
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