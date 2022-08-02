const model = [
  {
    type: 'title', value: 'Hello world from JavaScript',
  }, {
    type: 'text', value: 'here we go with some text',
  }, {
    type: 'columns', value: [
      '11111111111', '22222222222', '33333333333'],
  }];

const $site = document.querySelector('#site');

model.forEach(block => {
  let html = title(block);

  if (block.type === 'title') {
    html = '';

  } else if (block.type === 'text') {
    html = text(block);

  } else if (block.type === 'columns') {
    html = columns(block);
  }

  $site.insertAdjacentHTML('beforeend', html);
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
  const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
  return `
        <div class="row">
           ${html.join('')}
        </div>
  `;
}