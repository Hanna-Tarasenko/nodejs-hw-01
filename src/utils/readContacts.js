import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
// console.log(fs);

export const readContacts = async () => {
  //   const buffer = await fs.readFile(PATH_DB);
  //   const text = buffer.toString();
  //   console.log(text);
  const data = await fs.readFile(PATH_DB, 'utf-8');
  //   console.log(typeof data);
  return JSON.parse(data);
};

readContacts();
