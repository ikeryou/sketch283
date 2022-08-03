import './style.css'
import { Contents } from './parts/contents';
import { Conf } from './core/conf';

const num = Conf.instance.LINE_NUM * 2;
for(let i = 0; i < num; i++) {
  const t = document.createElement('div');
  t.classList.add('l-text')
  document.body.append(t);
}

document.querySelectorAll('.l-text').forEach((val,i) => {
  new Contents({
    el:val,
    id:i,
  })
})



