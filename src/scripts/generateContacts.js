import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  const contactList = await readContacts();
  console.log(contactList);
  //   const contact = createFakeContact();

  // метод fill заповнює масив
  const newContacts = Array(number)
    .fill(0)
    .map(() => createFakeContact());
  await writeContacts([...contactList, ...newContacts]);
  //   console.log(contactList);
  // console.log(contact);
};

generateContacts(5);
