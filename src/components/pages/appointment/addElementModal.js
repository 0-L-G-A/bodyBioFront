import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  createDiagnoze,
  createFinding,
  createLab,
} from 'store/actions/catalog';

const Modal = ({ isOpen, onClose, bodySystem }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    nameKey: '',
    type: '',
    bodySystemId: bodySystem?.id || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      nameKey: formData.nameKey,
      bodySystemId: formData.bodySystemId,
    };

    if (payload.nameKey.length) {
      switch (formData.type) {
        case 'lab':
          dispatch(createLab(payload));
          break;
        case 'finding':
          dispatch(createFinding(payload));
          break;
        case 'diagnoze':
          dispatch(createDiagnoze(payload));
          break;
        default:
          console.error('Add modal: Invalid type selected');
      }
    } else {
      console.error('Add modal: No name');
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
        <h2 className="text-xl font-bold mb-4">Додати елемент</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Назва:
            <input
              type="text"
              name="name"
              className="w-full border rounded p-2 mt-1"
              placeholder="Введіть назву"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-2">
            Name key:
            <input
              type="text"
              name="nameKey"
              className="w-full border rounded p-2 mt-1"
              placeholder="Введіть nameKey"
              value={formData.nameKey}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-2">
            Body system:
            <input
              type="text"
              name="bodySystemId"
              className="w-full border rounded p-2 mt-1"
              value={formData.bodySystemId}
              readOnly
            />
          </label>
          <label className="block mb-2">
            Type:
            <select
              name="type"
              className="w-full border rounded p-2 mt-1"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="" disabled>
                Виберіть тип
              </option>
              <option value="lab">Лабораторні дослідження</option>
              <option value="finding">Симптоми</option>
              <option value="diagnoze">Діагнози</option>
            </select>
          </label>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Додати
          </button>
        </form>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Modal;
