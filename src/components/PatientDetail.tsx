import { toast } from 'react-toastify';
import { usePatientStore } from '../store/store';
import { Patient } from '../types/index';
import { PatientDetailItem } from './PatientDetailItem';

type PatientDetailProps = {
    patient: Patient;
}

export const PatientDetail = ({ patient }: PatientDetailProps ) => {

  const deletePatient = usePatientStore(state => state.deletePatient);
  const getPatientById = usePatientStore(state => state.getPatientById);

  const handleDelete = (id: string) => {
    deletePatient(id);
    toast.error('Paciente Eliminado Correctamente');
  }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">

        <PatientDetailItem label='id'           value={patient.id}/>
        <PatientDetailItem label='Nombre'       value={patient.name}/>
        <PatientDetailItem label='Propietario'  value={patient.caretaker}/>
        <PatientDetailItem label='Email'        value={patient.email}/>
        <PatientDetailItem label='Fecha Alta'   value={patient.date.toString()}/>
        <PatientDetailItem label='Síntomas'     value={patient.symptoms}/>

        <div className='flex flex-col lg:flex-row gap-3 justify-between mt-10'>
            <button
                type='button'
                className='bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer 
                    text-white font-bold uppercase py-2 px-4 rounded'
                onClick={() => getPatientById(patient.id)}
            >Editar
            </button>
            <button
                type='button'
                className='bg-red-600 hover:bg-red-700 hover:cursor-pointer 
                    text-white font-bold uppercase py-2 px-4 rounded'
                onClick={() => handleDelete(patient.id)}
            >Eliminar
            </button>
        </div>

    </div>
  )
}
