import React, { Component } from 'react';
// import './ListsContainer.css'
import axios from 'axios';
import MedicalRecord from './MedicalRecord';
import NewMedicalRecordForm from './NewMedicalRecordForm';
import EditMedicalRecordForm from './EditMedicalRecordForm';

class MedicalRecordsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      medical_records: [],
      editingMedicalRecordId: null
    }
    this.addNewMedicalRecord = this.addNewMedicalRecord.bind(this)
    this.removeMedicalRecord = this.removeMedicalRecord.bind(this)
    this.editingMedicalRecord = this.editingMedicalRecord.bind(this)
    this.editMedicalRecord = this.editMedicalRecord.bind(this)
  }

  componentDidMount() {
    axios.get('api/v1/medical_records')
      .then(response => {
        console.log(response)
        this.setState({
          medical_records: response.data
        })
      })
      .catch(error => console.log(error))
  }

  addNewMedicalRecord(title, excerpt) {
    axios.post('/api/v1/medical_records', { medical_record: { title, excerpt } })
      .then(response => {
        console.log(response)
        const medical_records = [...this.state.medical_records, response.data]
        this.setState({ medical_records })
      })
      .catch(error => {
        console.log(error)
      })
  }

  removeMedicalRecord(id) {
    axios.delete('/api/v1/medical_records/' + id)
      .then(response => {
        const medical_records = this.state.medical_records.filter(
          medical_record => medical_record.id !== id
        )
        this.setState({ medical_records })
      })
      .catch(error => console.log(error))
  }

  editingMedicalRecord(id) {
    this.setState({
      editingMedicalRecordId: id
    })
  }

  editMedicalRecord(id, title, excerpt) {
    axios.put('/api/v1/medical_records/' + id, {
        medical_record: {
        title,
        excerpt
      }
    })
      .then(response => {
        console.log(response);
        const medical_records = this.state.medical_records;
        medical_records[id - 1] = { id, title, excerpt }
        this.setState(() => ({
          medical_records,
          editingMedicalRecordId: null
        }))
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="medical_records-container">
        {this.state.medical_records.map(medical_record => {
          if (this.state.editingMedicalRecordId === medical_record.id) {
            return (
              <EditMedicalRecordForm
                medical_record={medical_record}
                key={medical_record.id}
                editMedicalRecord={this.editMedicalRecord}
              />
            )
          } else {
            return (
              <MedicalRecord
                medical_record={medical_record}
                key={medical_record.id}
                onRemoveMedicalRecord={this.removeMedicalRecord}
                editingMedicalRecord={this.editingMedicalRecord}
              />
            )
          }
        })}
        <NewMedicalRecordForm onNewMedicalRecord={this.addNewMedicalRecord} />
      </div>
    )
  }
}

export default MedicalRecordsContainer;