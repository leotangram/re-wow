import React from 'react';

const NewMedicalRecordForm = ({ onNewMedicalRecord = f => f }) => {
  let pet_owner_name, pet_name, pet_type, size, description, vaccination, date
  const submit = e => {
    e.preventDefault()
    onNewMedicalRecord(pet_owner_name.value, pet_name.value, pet_type.value, size.value, description, vaccination, date)
    pet_owner_name.value = ''
    pet_name.value = ''
    pet_type.value = ''
    size.value = ''
    description.value = ''
    vaccination.value = ''
    date.value = ''
    pet_owner_name.focus()
  }

  return (
    <div>
      <h3>Nuevo Registro</h3>   
    <form onSubmit={submit}>
      <input ref={input => pet_owner_name = input}
        type="text"
        placeholder="Dueño" required />
      <input ref={input => pet_name = input}
        type="text"
        placeholder="Mascota" required />
      <input ref={input => pet_type = input}
        type="text"
        placeholder="Tipo" required />
      <input ref={input => size = input}
        type="text"
        placeholder="Tamaño" required />
      <input ref={input => description = input}
        type="textarea"
        placeholder="Descripción" required />
      <input ref={input => vaccination = input}
        type="text"
        placeholder="Vacuna" required />
      <input ref={input => date = input}
        type="date"
        placeholder="Fecha" required />
      <button>Add List</button>
    </form>
    </div>
  )
}

export default NewMedicalRecordForm;