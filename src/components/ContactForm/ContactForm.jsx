import { useState } from 'react';
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactSlice';
import { addContact } from '../../redux/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (checkContact(name)) {
      return;
    }

    dispatch(addContact({ name, phone }));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const checkContact = name => {
    const checkName = name.toLowerCase();
    const isExist = contacts.find(
      item => item.name.toLowerCase() === checkName
    );
    if (isExist) {
      alert(`${name} is already exist`);
    }
    return isExist;
  };

  return (
    <form className="flex gap-4">
      <input
        type="text"
        placeholder="Insert name"
        class="appearance-none rounded-full nm-inset-gray-200 leading-5 px-8 py-4 flex-grow sm:w-1/3 focus:nm-inset-gray-300 focus:outline-none"
      />

      <input
        type="text"
        placeholder="Insert phone"
        class="appearance-none rounded-full nm-inset-gray-200 leading-5 px-8 py-4 flex-grow sm:w-1/3 focus:nm-inset-gray-300 focus:outline-none"
      />

      <button
        type="submit"
        className="rounded-full nm-flat-gray-200 hover:nm-flat-gray-200-lg leading-5 px-8 py-4 text-gray-600 font-bold  transition duration-200 ease-in-out transform hover:scale-110"
      >
        Add contact
      </button>
    </form>

    // <form onSubmit={handleSubmit} className={s.form} autoComplete="on">
    //   <input
    //     className={s.input}
    //     type="text"
    //     name="name"
    //     required
    //     placeholder="Enter Name"
    //     value={name}
    //     onChange={handleChange}
    //   />
    //   <input
    //     className={s.input}
    //     type="text"
    //     name="phone"
    //     required
    //     placeholder="Enter Phone"
    //     value={phone}
    //     onChange={handleChange}
    //   />
    //   <button className={s.btn}>Add contact</button>
    // </form>
  );
};

export default ContactForm;
