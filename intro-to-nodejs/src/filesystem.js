import { write } from 'node:fs';
import fs from 'node:fs/promises'
import path from 'node:path'

const readPjson = async () => {
  //const pjsonPath = new URL('./package.json', import.meta.url).pathname
  const pjsonPath = 'C://Users//EMMANUEL//OneDrive - University of Ghana//DCITS//js journey';
  //console.log(pjsonPath)
  console.log(JSON.parse(await fs.readFile(pjsonPath, 'utf-8')))
}

// const readPjson = async () => {
//   const pjsonPath = path.resolve(new URL('./package.json', import.meta.url).pathname.replace(/^\/|%20/g, '')); // Fix leading slash and spaces
//   console.log(pjsonPath); // Debugging: Log the resolved path
//   console.log(JSON.parse(await fs.readFile(pjsonPath, 'utf-8')));
// };

//readPjson();

const writeFile = async () => {
  const newFile = new URL('./demo.js', import.meta.url).pathname
  await fs.writeFile(newFile, 'console.log("yooooo!")')
}

writeFile();