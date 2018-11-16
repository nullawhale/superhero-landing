function component() {
  let element = document.createElement('div');
  element.innerHTML = 'WebPack';
  return element;
}

document.body.appendChild(component());
