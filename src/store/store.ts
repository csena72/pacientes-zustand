
import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid';
import { Patient, DraftPatient} from '../types';

type PatientState = {
    patientes: Patient[];
    addPatient: (data: DraftPatient) => void;
}

const createPatient = (patient: DraftPatient): Patient => {
    return {
        id: uuidv4(),
        ...patient
    }
}

export const usePatientStore = create<PatientState>((set) => ({
    patientes: [],
    addPatient: (data) => {
        const newPatient = createPatient(data);
        set((state) => ({
            patientes: [...state.patientes, newPatient]
        }))
    }
}))