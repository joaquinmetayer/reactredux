// useSelector: Este hook se utiliza para seleccionar datos específicos del estado global de Redux.
// Permite acceder a partes específicas del estado sin tener que suscribirse a todo el estado.
// Esto es útil para optimizar el rendimiento de los componentes, ya que solo se volverán a renderizar cuando las partes específicas del estado que están seleccionando cambien.

// useDispatch: Este hook se utiliza para obtener la función de despacho (dispatch) del store de Redux. 
// El dispatch es la manera en que se envían acciones al store para que se procesen y actualicen el estado.
// Puedes usar useDispatch para obtener el dispatch y luego llamarlo con las acciones que desees despachar.

// Reducer:
// Un reducer es una función pura que especifica cómo cambia el estado de la aplicación en respuesta a una acción. Recibe el estado actual y una acción, y devuelve un nuevo estado.
// Los reducers en Redux son responsables de actualizar el estado global de la aplicación en función de las acciones despachadas por los componentes.
// Un reducer típicamente se implementa como un switch statement que maneja diferentes tipos de acciones y devuelve el nuevo estado correspondiente.

// Store:
// El store en Redux es un objeto que contiene el estado global de la aplicación, los reducers que definen cómo cambia el estado y métodos que permiten despachar acciones y suscribirse a cambios en el estado.
// El store actúa como un "único origen de verdad" para el estado de la aplicación. Todos los componentes acceden al estado a través del store y actualizan el estado mediante la despacho de acciones.

// Un "slice" se refiere a una porción del estado global de la aplicación junto con sus reducers y action creators asociados. Los slices son una forma de organizar y modularizar la lógica relacionada con el estado en Redux.
// Un slice se crea utilizando la función createSlice de @reduxjs/toolkit, y esta función toma un objeto que especifica:
// - name: Un nombre para identificar el slice.
// - initialState: El estado inicial del slice.
// - reducers: Un objeto que contiene funciones llamadas "reducers" que definen cómo cambia el estado en respuesta a acciones.