
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { Patient, DraftPatient} from '../types';

type PatientState = {
    patientes: Patient[];
    activeId: Patient['id'];
    addPatient: (data: DraftPatient) => void;
    deletePatient: (id: Patient['id']) => void;
    getPatientById: (id: Patient['id']) => void;
}

const createPatient = (patient: DraftPatient): Patient => {
    return {
        id: uuidv4(),
        ...patient
    }
}

export const usePatientStore = create<PatientState>()(
    devtools((set) => ({
        patientes: [],
        activeId: '',
        addPatient: (data) => {
            const newPatient = createPatient(data);
            set((state) => ({
                patientes: [...state.patientes, newPatient]
            }))
        },
        deletePatient: (id) => set((state) => ({
            patientes: state.patientes.filter(patient => patient.id !== id)
        })),
        getPatientById: (id) => set(() => ({
            activeId: id
        }))
    })
))