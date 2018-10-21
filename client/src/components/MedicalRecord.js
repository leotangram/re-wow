import React from 'react';

const MedicalRecord = ({ medical_record, onRemoveMedicalRecord = f => f, editingMedicalRecord = f => f }) =>

  <div className="single-medical_record" key={medical_record.id}>
    <h3>Registro Medico #{medical_record.id}</h3>
    <h4>Dueño</h4>
    <p>{medical_record.pet_owner_name}</p>
    <h4>Mascota</h4>
    <p>{medical_record.pet_name}</p>
    <h4>Tipo</h4>
    <p>{medical_record.pet_type}</p>
    <h4>Tamaño</h4>
    <p>{medical_record.size}</p>
    <h4>Descripción</h4>
    <p>{medical_record.description}</p>
    <h4>Vacuna</h4>
    <p>{medical_record.vaccination}</p>
    <h4>Fecha</h4>
    <p>{medical_record.date}</p>
    <button onClick={() => onRemoveMedicalRecord(medical_record.id)}>Eliminar</button>
    <button onClick={() => editingMedicalRecord(medical_record.id)}>Editar</button>
    <hr />
  </div>

export default MedicalRecord;