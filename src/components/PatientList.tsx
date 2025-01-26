import { usePatientStore } from "../store/store"
import { PatientDetail } from "./PatientDetail";


export default function PatientList() {

  const patients = usePatientStore(state => state.patientes);

  console.log(patients);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {
        patients.length === 0 ? (
          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes registrados</h2>
            <p className="text-xl text-center mt-5 mb-10">
              Comienza agregando pacientes {''}
              <span className="text-indigo-600 font-bold">
                y apareceran aquí.
              </span>
            </p>
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
            <p className="text-xl mt-5 mb-10">
              Administra a tus {''}
              <span className="text-indigo-600 font-bold">
                Pacientes y Citas
              </span>
              {patients.map(patient => (
                <PatientDetail
                  key={patient.id}
                  patient={patient}
                />
              ))}
            </p>
          </>
        )
      }

    </div>
  )
}
