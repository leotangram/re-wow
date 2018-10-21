import React, { Component } from 'react';

class EditMedicalRecordForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: this.props.medical_record.id,
      pet_owner_name: this.props.medical_record.pet_owner_name,
      pet_name: this.props.medical_record.pet_name,
      pet_type: this.props.medical_record.pet_type,
      size: this.props.medical_record.size,
      description: this.props.medical_record.description,
      vaccination: this.props.medical_record.vaccination,
      // date: this.props.medical_record.date,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { id, title, excerpt } = this.state;
    this.props.editMedicalRecord(id, title, excerpt);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="pet_owner_name"
          type="text"
          placeholder="Nombre Dueño"
          value={this.state.pet_owner_name}
          onChange={this.handleChange} />
        <input name="pet_name"
          type="text"
          placeholder="Nombre Mascota"
          value={this.state.pet_name}
          onChange={this.handleChange} />
        <input name="pet_type"
          type="text"
          placeholder="Tipo de Mascota"
          value={this.state.pet_type}
          onChange={this.handleChange} />
        <input name="size"
          type="text"
          placeholder="Tamaño"
          value={this.state.size}
          onChange={this.handleChange} />
        <input name="description"
          type="textarea"
          placeholder="Descripción"
          value={this.state.description}
          onChange={this.handleChange} />
        <input name="vaccination"
          type="text"
          placeholder="Vacuna"
          value={this.state.vaccination}
          onChange={this.handleChange} />
        {/* <input name="date"
          type="datetime"
          placeholder="Vacuna"
          value={this.state.vaccination}
          onChange={this.handleChange} /> */}
        <button>Update Medical Record</button>
      </form>
    )
  }
}

export default EditMedicalRecordForm;