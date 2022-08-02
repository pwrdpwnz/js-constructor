const model = [
  {
    type: 'title', value: 'Hello world from JavaScript',
  }, {
    type: 'text', value: 'here we go with some text',
  }, {
    type: 'columns', value: [
      '11111111111', '22222222222', '33333333333'],
  }];

//create massive

const $site = document.querySelector('#site');

//create constant

model.forEach(block => {
  /* Метод forEach() выполняет функцию callback один раз для каждого элемента,
   находящегося в массиве в порядке возрастания. Она не будет вызвана для удалённых или пропущенных элементов массива.
   Однако, она будет вызвана для элементов, которые присутствуют в массиве и имеют значение undefined.
   */
  let html = title(block);

  if (block.type === 'title') {
    html = '';

  } else if (block.type === 'text') {
    html = text(block);

  } else if (block.type === 'columns') {
    html = columns(block);
  }

  $site.insertAdjacentHTML('beforeend', html);
  /* insertAdjacentHTML() разбирает указанный текст как HTML или XML и вставляет
   полученные узлы (nodes) в DOM дерево в указанную позицию. Данная функция
   не переписывает имеющиеся элементы, что предотвращает дополнительную
   сериализацию и поэтому работает быстрее, чем манипуляции с innerHTML.
   */
});

function title(block) {
  return `
      <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>
      `;
}

function text(block) {
  return `
        <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
    `;
}

function columns(block) {
  const html = block.value.map(item => `<div class="col-sm">${item}</div>`);
  return `
        <div class="row">
           ${html.join('')}
        </div>
  `;
}

// add branch develop to GitHub