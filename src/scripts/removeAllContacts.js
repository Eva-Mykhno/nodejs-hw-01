import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const allContacts = readContacts();
    allContacts.length = 0;
    await writeContacts([]);

    console.log('Removing is successful');
  } catch (error) {
    console.error('Error removing', error);
    throw error;
  }
};

removeAllContacts();
