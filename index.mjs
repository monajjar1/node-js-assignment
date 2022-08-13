import {readFile, writeFile} from 'fs/promises';
let template = await readFile(new URL('template.html', import.meta.url), 'utf8');

const data = {
    title: 'My New Post',
    body: 'This is my first post',
    links: '',// we need to get the links from the public
    scripts: ''// we need to get the links from the public
}

for (let key in data) {
    template = template.replace(`{${key}}`, data[key]);
}

await writeFile(new URL('./dist/index.html', import.meta.url), template);

console.log('index.html created');