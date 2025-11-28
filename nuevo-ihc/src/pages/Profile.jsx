import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import MenuOverlay from '../components/MenuOverlay';
import { IoPencil, IoCheckmark, IoClose } from 'react-icons/io5';
import '../pages/Profile.css';

function FieldRow({ label, fieldKey, type = 'text', editingField, startEdit, draftValue, setDraftValue, saveEdit, cancelEdit, userData }) {
  return (
    <div className="flex items-start justify-between">
      <div className="w-[72%]">
        <div className="text-sm font-semibold text-gray-800">{label}</div>

        {editingField === fieldKey ? (
          <div className="mt-1 flex items-center gap-2">
            <input
              className="w-full rounded-md border px-3 py-2 text-gray-700"
              value={draftValue}
              onChange={(e) => setDraftValue(e.target.value)}
              type={type}
            />
            <button onClick={saveEdit} className="p-2 bg-teal-600 text-white rounded-md" aria-label="Guardar">
              <IoCheckmark />
            </button>
            <button onClick={cancelEdit} className="p-2 bg-gray-200 text-gray-700 rounded-md" aria-label="Cancelar">
              <IoClose />
            </button>
          </div>
        ) : (
          <div className="mt-1 text-gray-500">{userData[fieldKey]}</div>
        )}
      </div>

      {/* Edit button */}
      {editingField !== fieldKey && (
        <div className="w-[24%] flex items-center justify-end">
          <button
            onClick={() => startEdit(fieldKey)}
            className="p-2 hover:bg-gray-100 rounded-md"
            aria-label={`Editar ${label}`}
          >
            <IoPencil size={18} />
          </button>
        </div>
      )}
    </div>
  );
}

export default function Profile() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Datos de ejemplo (reemplazar por datos reales cuando estén disponibles)
  const initialUser = {
    username: 'UsuarioEjemplo',
    fullName: 'Nombre Completo',
    birthDate: '10 / 09 / 1999',
    country: 'Perú',
    avatarUrl: 'https://placehold.co/160x160/10b981/ffffff?text=U'
  };

  const [userData, setUserData] = useState(initialUser);
  const [editingField, setEditingField] = useState(null); // 'username' | 'fullName' | 'birthDate' | 'country' | null
  const [draftValue, setDraftValue] = useState('');

  const startEdit = (field) => {
    setEditingField(field);
    setDraftValue(userData[field] || '');
  };

  const cancelEdit = () => {
    setEditingField(null);
    setDraftValue('');
  };

  const saveEdit = () => {
    setUserData(prev => ({ ...prev, [editingField]: draftValue }));
    setEditingField(null);
    setDraftValue('');
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl overflow-hidden min-h-[80vh] flex flex-col relative">

        <TopBar
          onMenuToggle={() => setMenuOpen(!menuOpen)}
          title="Perfil"
        />

        <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        <div className="p-6 overflow-y-auto flex-grow bg-gray-50">
          <div className="flex flex-col items-center mb-8">
            <div className="avatar-wrap">
              <img src={userData.avatarUrl} alt="avatar" className="avatar-img" />
            </div>
          </div>

          <div className="space-y-6">
            <FieldRow
              label="Username"
              fieldKey="username"
              editingField={editingField}
              startEdit={startEdit}
              draftValue={draftValue}
              setDraftValue={setDraftValue}
              saveEdit={saveEdit}
              cancelEdit={cancelEdit}
              userData={userData}
            />

            <FieldRow
              label="Nombre Completo"
              fieldKey="fullName"
              editingField={editingField}
              startEdit={startEdit}
              draftValue={draftValue}
              setDraftValue={setDraftValue}
              saveEdit={saveEdit}
              cancelEdit={cancelEdit}
              userData={userData}
            />

            <FieldRow
              label="Fecha de nacimiento"
              fieldKey="birthDate"
              editingField={editingField}
              startEdit={startEdit}
              draftValue={draftValue}
              setDraftValue={setDraftValue}
              saveEdit={saveEdit}
              cancelEdit={cancelEdit}
              userData={userData}
            />

            <FieldRow
              label="País"
              fieldKey="country"
              editingField={editingField}
              startEdit={startEdit}
              draftValue={draftValue}
              setDraftValue={setDraftValue}
              saveEdit={saveEdit}
              cancelEdit={cancelEdit}
              userData={userData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
