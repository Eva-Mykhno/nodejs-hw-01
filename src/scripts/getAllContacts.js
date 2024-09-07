import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const allContacts = await readContacts();
    return allContacts;
  } catch (error) {
    console.error('Error getting all contacts', error);
    throw error;
  }
};

console.log(await getAllContacts());
