
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { Patient, DraftPatient} from '../types';

type PatientState = {
    patientes: Patient[];
    activeId: Patient['id'];
    addPatient: (data: DraftPatient) => void;
    deletePatient: (id: Patient['id']) => void;
    getPatientById: (id: Patient['id']) => void;
    updatePatient: (data: DraftPatient) => void;
}

const createPatient = (patient: DraftPatient): Patient => {
    return {
        id: uuidv4(),
        ...patient
    }
}

export const usePatientStore = create<PatientState>()(
    devtools(
    persist((set) => ({
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
        })),
        updatePatient: (data) => set((state) => ({
            patientes: state.patientes.map(patient => patient.id === state.activeId ? { ...data, id: state.activeId } : patient),
            activeId: ''
        }))
    }), {
        name: 'patient-storage',
        //storage: createJSONStorage(() => sessionStorage), // ---> Se puede usar sessionStorage
    })
))