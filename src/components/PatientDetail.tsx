import { Patient } from '../types/index';
import { PatientDetailItem } from './PatientDetailItem';

type PatientDetailProps = {
    patient: Patient;
}

export const PatientDetail = ({ patient }: PatientDetailProps ) => {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">

        <PatientDetailItem label='id'           value={patient.id}/>
        <PatientDetailItem label='Nombre'       value={patient.name}/>
        <PatientDetailItem label='Propietario'  value={patient.caretaker}/>
        <PatientDetailItem label='Email'        value={patient.email}/>
        <PatientDetailItem label='Fecha Alta'   value={patient.date.toString()}/>
        <PatientDetailItem label='Síntomas'     value={patient.symptoms}/>

    </div>
  )
}
