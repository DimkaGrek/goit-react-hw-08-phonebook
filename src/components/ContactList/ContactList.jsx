import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from '../../redux/contactSlice';
import { selectFilter } from '../../redux/filterSlice';
import { deleteContact, fetchContacts } from '../../redux/operations';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    const filterLowCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowCase)
    );
  };
  const [isEdit, setIsEdit] = useState(false);

  const filteredContacts = getFilteredContacts();

  const getSortedContacts = filterContacts => {
    return filterContacts.sort((a, b) => b.id - a.id);
  };
  const sortedContacts = getSortedContacts(filteredContacts);

  return (
    <>
      <ul className="px-6 grid grid-cols-3 py-6 gap-6 container mx-auto">
        {sortedContacts.map(({ id, name, number }) => (
          <li
            key={id}
            className="nm-flat-gray-200-lg rounded-lg p-8 text-center max-w-sm w-full"
          >
            <p className="p-2">
              <span>Name: </span>
              {isEdit ? (
                <input
                  value="Dimkagrek Zinkovsky"
                  className="appearance-none text-center rounded-full nm-inset-gray-200 leading-5 mx-2 px-2 py-2 flex-grow w-2/3 focus:nm-inset-gray-300 focus:outline-none"
                />
              ) : (
                <span className="font-bold">{name}</span>
              )}
            </p>
            <p className="p-2">
              <span>Phone: </span>
              {isEdit ? (
                <input
                  value="068 701 60 66"
                  className="appearance-none text-center rounded-full nm-inset-gray-200 leading-5 mx-2 px-2 py-2 flex-grow w-2/3 focus:nm-inset-gray-300 focus:outline-none"
                />
              ) : (
                <span className="font-bold">{number}</span>
              )}
            </p>
            <div className="card-actions justify-end py-2">
              {isEdit ? (
                <button
                  className="w-12 h-12 flex justify-center items-center rounded-full nm-convex-gray-200-xs hover:nm-inset-gray-200-xs hover:font-semibold text-sm"
                  onClick={() => setIsEdit(false)}
                >
                  Save
                </button>
              ) : (
                <button
                  className="w-12 h-12 flex justify-center items-center rounded-full nm-convex-gray-200-xs hover:nm-inset-gray-200-xs hover:font-semibold text-sm"
                  onClick={() => setIsEdit(true)}
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => dispatch(deleteContact(id))}
                className="w-12 h-12 flex justify-center items-center rounded-full nm-convex-gray-200-xs text-red-500 hover:nm-inset-gray-200-xs hover:font-semibold text-sm"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
