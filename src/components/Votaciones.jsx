import { useState, Ref, useRef } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
const mailingLists = [
    { id: 1, title: 'Masculino' },
    { id: 2, title: 'Femenino ' },
]


const ENVIAR_DATOS = gql` 
   mutation enviarRespuestaUniforme($input: RespuestaInput!){
    enviarRespuestaUniforme(input: $input){
        respuesta
    }
   }
`

const stats = [
    { name: 'Opción', stat: 'A', 'activo': false },
    { name: 'Opción', stat: 'B', 'activo': false },
    { name: 'Opción', stat: 'C', 'activo': false },
    { name: 'Opción', stat: 'D', 'activo': false },
    { name: 'Opción', stat: 'E', 'activo': false },
    { name: 'Opción', stat: 'F', 'activo': false },

]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Votaciones = () => {
    const [guardarEncuesta, { data, loading, error }] = useMutation(ENVIAR_DATOS);

    const arrayDatos = [];
    const componentRef = useRef();

    const handlBackClick = () => {
        componentRef.current.scrollIntoView({ bahavior: 'smooth' })
    }
    const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])

    const addVoto = (elemento) => {
        let existe = arrayDatos.find(element => element === elemento);
        console.log(existe)
        if (existe) {
            let indice = arrayDatos.indexOf(existe);
            arrayDatos.splice(indice, 1);

        } else {
            if (arrayDatos.length === 4) {
                return
            }
            arrayDatos.push(elemento);

        }
    }

    const guardarDatos = async () => {
        console.log("Aqui", selectedMailingLists, arrayDatos);
        if (arrayDatos.length === 4) {
            try {
                await guardarEncuesta({
                    variables: {
                        input: {
                            sexo: selectedMailingLists.id === 1 ? "M" : "F",
                            opcionA: arrayDatos.find(element => element === "A") ? 1 : 0,
                            opcionB: arrayDatos.find(element => element === "B") ? 1 : 0,
                            opcionC: arrayDatos.find(element => element === "C") ? 1 : 0,
                            opcionD: arrayDatos.find(element => element === "D") ? 1 : 0,
                            opcionE: arrayDatos.find(element => element === "E") ? 1 : 0,
                            opcionF: arrayDatos.find(element => element === "F") ? 1 : 0,
                        }
                    }
                })
                console.log("data");
            } catch (e) {
                console.log(error)
            }
        } else {
            console.log("faltan items")
        }

    }

    console.log(data)

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            <div >
                <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists} onClick={handlBackClick} >
                    <RadioGroup.Label className="text-base text-3xl text-gray-900 font-bold ">Sexo</RadioGroup.Label>

                    <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4  ">
                        {mailingLists.map((mailingList) => (
                            <RadioGroup.Option
                                key={mailingList.id}
                                value={mailingList}
                                className={({ checked, active }) =>
                                    classNames(
                                        checked ? 'border-transparent' : 'border-gray-300',
                                        active ? 'ring-2 ring-indigo-500' : '',
                                        'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none'
                                    )
                                }
                            >
                                {({ checked, active }) => (
                                    <>
                                        <div className="flex-1 flex ">
                                            <div className="flex flex-col">
                                                <RadioGroup.Label as="span" className="block text-xl font-medium text-gray-900 font-bold">
                                                    {mailingList.title}
                                                </RadioGroup.Label>
                                            </div>
                                        </div>
                                        <CheckCircleIcon
                                            className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-indigo-600')}
                                            aria-hidden="true"
                                        />
                                        <div
                                            className={classNames(
                                                active ? 'border' : 'border-2',
                                                checked ? 'border-indigo-500' : 'border-transparent',
                                                'absolute -inset-px rounded-lg pointer-events-none'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>
            <div className="pt-12" ref={componentRef}>
                <h3 className="text-lg leading-6 font-medium text-gray-900 pt-12">Selecciona</h3>

                <div className="text-center">

                    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                        {stats.map((item) => (
                            <div key={item.stat}
                                onClick={() => {
                                    addVoto(item.stat)
                                }}
                                className="efectos px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
                            >
                                <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                                <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
 
                <button
                    type="button"
                    className=" mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 float-right"
                    onClick={guardarDatos}
                >
                    Aceptar
                </button>

            </div>
        </div>
    )
}
 
export default Votaciones
