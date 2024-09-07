import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length) {
      contacts.pop();
      await writeContacts(contacts);
      console.log('Removing last contact is successful');
    }
    console.log('Contacts list is empty');
  } catch (error) {
    console.error('Error removing last contact', error);
    throw error;
  }
};

removeLastContact();
