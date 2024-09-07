import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  if (number <= 0) {
    return;
  }

  try {
    const contacts = await readContacts();
    for (let i = 0; i < number; i += 1) {
      contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
    console.log('Contacts generation is successful');
  } catch (error) {
    console.error('Generating error', error);
    throw error;
  }
};

generateContacts(5);
