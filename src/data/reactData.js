export const reactCheatsheetData = [
  // --- Fundamentos de React ---
  {
    id: "react-componentes-funcionales",
    colClasses: "col-md-6",
    headerIcon: "⚛️",
    headerTitle: "Componentes Funcionales",
    codeLanguage: "jsx",
    codeSnippet: `import React from 'react';

// Un componente funcional es una función de JavaScript
// que devuelve JSX (la interfaz de usuario).
function MyComponent(props) {
  return (
    <div>
      <h1>Hola, {props.name}!</h1>
      <p>Este es un componente funcional simple.</p>
    </div>
  );
}

export default MyComponent;

// Uso:
// <MyComponent name="Mundo" />
`,
    bodyContent: null,
    bodyText:
      "Los componentes funcionales son la forma moderna y preferida de construir la UI en React. Son más concisos y permiten usar Hooks para gestionar el estado y los efectos secundarios.",
    footerLinkInformation:
      "https://react.dev/learn/your-first-component",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Fundamentos de React",
    order: 1,
  },
  {
    id: "react-jsx",
    colClasses: "col-md-6",
    headerIcon: "✨",
    headerTitle: "JSX (JavaScript XML)",
    codeLanguage: "jsx",
    codeSnippet: `// 1. Un solo elemento raíz:
// ✅ Correcto:
function App() {
  return (
    <div>
      <h1>Hola</h1>
      <p>Mundo</p>
    </div>
  );
}

// ✅ También correcto (Fragmento):
function AppFragment() {
  return (
    <>
      <h1>Hola</h1>
      <p>Mundo</p>
    </>
  );
}

// 2. Insertar JS con llaves {}:
const user = { name: 'Juan', age: 30 };
function UserProfile() {
  return (
    <p>Nombre: {user.name}, Edad: {user.age}</p>
  );
}

// 3. Atributos en camelCase:
function MyButton() {
  return <button onClick={() => alert('Clic!')}>Haz clic</button>;
}

// 4. Clases CSS: usa className
function MyDiv() {
  return <div className="my-class">Contenido</div>;
}
`,
    bodyContent: null,
    bodyText:
      "JSX te permite escribir HTML directamente en tu código JavaScript. Se compila a llamadas a <code>React.createElement()</code>. Recuerda las reglas clave: un solo elemento raíz, usar llaves para JS, y <code>className</code> en lugar de <code>class</code>.",
    footerLinkInformation:
      "https://react.dev/learn/writing-markup-with-jsx",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Fundamentos de React",
    order: 2,
  },
  {
    id: "react-props",
    colClasses: "col-md-6",
    headerIcon: "🎁",
    headerTitle: "Props (Propiedades)",
    codeLanguage: "jsx",
    codeSnippet: `// 1. Pasar Props a un componente:
// <Greeting name="Alicia" message="Bienvenida" />

// 2. Recibir Props en el componente hijo:
function Greeting(props) {
  return (
    <h1>{props.message}, {props.name}!</h1>
  );
}

// 3. Desestructurar Props (práctica común):
function UserCard({ name, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
    </div>
  );
}

// Uso:
// <UserCard name="Pedro" email="pedro@ejemplo.com" />

// 4. Props por defecto (si no se pasan):
function Button({ text = "Clic aquí" }) {
  return <button>{text}</button>;
}
// Uso: <Button /> -> "Clic aquí"
// Uso: <Button text="Guardar" /> -> "Guardar"
`,
    bodyContent: null,
    bodyText:
      "Las Props son la forma de pasar datos de un componente padre a un componente hijo. Son de <strong>solo lectura</strong> y ayudan a mantener un flujo de datos unidireccional. La desestructuración es una forma limpia de acceder a ellas.",
    footerLinkInformation:
      "https://react.dev/learn/passing-props-to-a-component",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Fundamentos de React",
    order: 3,
  },
  {
    id: "react-estado-usestate",
    colClasses: "col-md-6",
    headerIcon: "🔄",
    headerTitle: "Estado con `useState`",
    codeLanguage: "jsx",
    codeSnippet: `import React, { useState } from 'react';

function Counter() {
  // Declaración del estado: [valorActual, funciónActualizadora]
  const [count, setCount] = useState(0); // 0 es el valor inicial

  const increment = () => {
    // 1. Actualización simple:
    setCount(count + 1);
  };

  const decrement = () => {
    // 2. Actualización con función (para estados complejos o asíncronos):
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}

// Ejemplo con objeto en estado:
function UserForm() {
  const [user, setUser] = useState({ name: 'Ana', age: 25 });

  const updateName = () => {
    // Para objetos, siempre copia el objeto y actualiza la propiedad
    setUser({ ...user, name: 'María' });
  };

  return (
    <div>
      <p>Usuario: {user.name}, Edad: {user.age}</p>
      <button onClick={updateName}>Cambiar Nombre</button>
    </div>
  );
}
`,
    bodyContent: null,
    bodyText:
      "<code>useState</code> es el Hook fundamental para añadir estado a tus componentes funcionales. Siempre usa la función actualizadora (<code>setCount</code>) para cambiar el estado, y ten en cuenta que las actualizaciones son asíncronas. Para objetos o arrays, siempre crea una nueva copia.",
    footerLinkInformation:
      "https://react.dev/reference/react/useState",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Fundamentos de React",
    order: 4,
  },
  {
    id: "react-efectos-useeffect",
    colClasses: "col-md-6",
    headerIcon: "🚀",
    headerTitle: "Efectos Secundarios con `useEffect`",
    codeLanguage: "jsx",
    codeSnippet: `import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    // Función de limpieza (se ejecuta al desmontar o antes de una nueva ejecución)
    return () => clearInterval(interval);
  }, [isActive]); // Array de dependencias: se re-ejecuta si 'isActive' cambia

  return (
    <div>
      <p>Tiempo: {seconds} segundos</p>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Pausar' : 'Iniciar'}
      </button>
      <button onClick={() => { setSeconds(0); setIsActive(false); }}>Reset</button>
    </div>
  );
}

// Ejemplo: Ejecutar solo una vez al montar (fetch de datos)
function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []); // Array de dependencias vacío: se ejecuta solo una vez al montar

  return (
    <div>
      {data ? <p>Datos cargados: {JSON.stringify(data)}</p> : <p>Cargando...</p>}
    </div>
  );
}
`,
    bodyContent: null,
    bodyText:
      "<code>useEffect</code> te permite realizar 'efectos secundarios' (operaciones que interactúan con el mundo exterior o se ejecutan después del renderizado). Usa el array de dependencias para controlar cuándo se re-ejecuta el efecto, y la función de retorno para limpieza (ej. limpiar timers, cancelar suscripciones). Un array vacío <code>[]</code> lo ejecuta solo una vez al montar.",
    footerLinkInformation:
      "https://react.dev/reference/react/useEffect",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Fundamentos de React",
    order: 5,
  },
  {
    id: "react-hooks-esenciales",
    colClasses: "col-md-6",
    headerIcon: "🔗",
    headerTitle: "Otros Hooks Esenciales",
    codeLanguage: "jsx",
    codeSnippet: `import React, { useContext, useRef, useMemo, useCallback } from 'react';

// --- useContext: Acceder a un Contexto ---
// (asume que un contexto 'ThemeContext' ya fue creado con React.createContext)
// const ThemeContext = createContext('light');
function ThemedComponent() {
  // const theme = useContext(ThemeContext);
  // return <div style={{ background: theme === 'dark' ? 'black' : 'white' }}>...</div>;
  return <p>Este es un ejemplo de useContext. (Requiere un Context.Provider)</p>;
}

// --- useRef: Acceder a elementos DOM o valores mutables ---
function TextInputWithFocusButton() {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Foco en input</button>
    </>
  );
}

// --- useMemo: Memoizar valores computados ---
// Solo recalcula si las dependencias cambian.
function ExpensiveCalculation({ a, b }) {
  const result = useMemo(() => {
    console.log('Realizando cálculo costoso...');
    return a * 2 + b * 3;
  }, [a, b]); // Recalcula solo si 'a' o 'b' cambian

  return <p>Resultado del cálculo: {result}</p>;
}

// --- useCallback: Memoizar funciones ---
// Previene re-creaciones de funciones en cada render si las dependencias no cambian.
function ParentComponent() {
  const [count, setCount] = useState(0);

  // La función increment solo se recrea si 'count' cambia
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Dependencias vacías: la función nunca cambia

  return (
    <>
      <button onClick={increment}>Incrementar: {count}</button>
      <ChildComponent onButtonClick={increment} /> {/* Pasa la función memoizada */}
    </>
  );
}
`,
    bodyContent: null,
    bodyText:
      "React ofrece otros Hooks poderosos: <code>useContext</code> para evitar el 'prop drilling', <code>useRef</code> para interacciones directas con el DOM o mantener valores mutables sin re-renders, y <code>useMemo</code>/<code>useCallback</code> para optimizaciones de rendimiento, memoizando valores o funciones para evitar cálculos o re-renderizados innecesarios.",
    footerLinkInformation:
      "https://react.dev/reference/react",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Hooks Avanzados",
    order: 6,
  },
  // --- Novedades Clave de React 19 ---
  {
    id: "react-19-actions",
    colClasses: "col-md-12",
    headerIcon: "⚡",
    headerTitle: "Novedad 19: Actions (Acciones)",
    codeLanguage: "jsx",
    codeSnippet: `import { useFormStatus, useFormState } from 'react-dom'; // Nota: de react-dom

// Componente para mostrar el estado del envío del formulario
function SubmitButton() {
  const { pending } = useFormStatus(); // Hook para saber si el form está enviándose
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Enviando Datos...' : 'Enviar Formulario'}
    </button>
  );
}

// Componente de formulario con una Action
function MyFormWithAction() {
  // useFormState: para manejar el estado del resultado de la acción
  // [estadoActual, acciónEnlazada] = useFormState(funciónDeAcción, estadoInicial)
  const [state, formAction] = useFormState(async (prevState, formData) => {
    const name = formData.get('name');
    console.log('Action ejecutada en el servidor/cliente con:', name);
    // Simular una llamada a API asíncrona
    await new Promise(resolve => setTimeout(resolve, 1500));
    if (name === 'error') {
        return 'Error: Nombre "error" no permitido.';
    }
    return \`¡Formulario enviado con nombre: \${name}!\`;
  }, null); // Estado inicial null

  return (
    <form action={formAction}> {/* 'action' ahora acepta una función */}
      <label>Nombre:</label>
      <input type="text" name="name" placeholder="Tu nombre" required />
      <SubmitButton />
      {state && <p>{state}</p>} {/* Muestra el resultado de la acción */}
    </form>
  );
}

// Uso en tu App:
// <MyFormWithAction />
`,
    bodyContent: null,
    bodyText:
      "React 19 introduce <strong>Actions</strong> para simplificar el manejo de envío de formularios y mutaciones de datos, especialmente útiles con React Server Components (RSC). Permiten ejecutar funciones directamente desde interacciones del DOM (ej. <code>&lt;form action={myAction}&gt;</code>).<br><br>Los nuevos Hooks <code>useFormStatus</code> (para el estado pendiente) y <code>useFormState</code> (para manejar el resultado y estado de la acción) son clave para integrarlas.",
    footerLinkInformation:
      "https://react.dev/reference/react-dom/components/form#providing-an-action-to-form",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Novedades React 19",
    order: 7,
  },
  {
    id: "react-19-directives",
    colClasses: "col-md-6",
    headerIcon: "🛣️",
    headerTitle: "Novedad 19: Directivas (`'use client'`, `'use server'`)",
    codeLanguage: "javascript",
    codeSnippet: `// --- archivo-cliente.js ---
"use client"; // Esta directiva debe estar en la PRIMERA línea

import { useState } from 'react';

function ClientComponent() {
  const [count, setCount] = useState(0); // Usa Hooks de cliente
  return (
    <button onClick={() => setCount(count + 1)}>
      Cliente: {count}
    </button>
  );
}
export default ClientComponent;

// --- archivo-servidor.js ---
// Por defecto, todos los componentes son Server Components.
// No se necesita "use server" para un componente, solo para funciones.

async function ServerComponent() {
  // console.log("Se ejecuta en el servidor");
  const data = await fetch('https://api.example.com/server-data'); // Fetch en el servidor
  const jsonData = await data.json();
  return (
    <div>
      <h1>Datos del Servidor</h1>
      <p>{JSON.stringify(jsonData)}</p>
      {/* <ClientComponent /> // Puedes importar y renderizar componentes cliente */}
    </div>
  );
}

// --- server-action-example.js ---
"use server"; // Directiva para una función que se ejecuta en el servidor

export async function submitFormData(formData) {
  const name = formData.get('name');
  console.log('Función de servidor ejecutada con:', name);
  // Lógica de base de datos, acceso a archivos, etc.
  return { status: 'success', message: 'Datos procesados en el servidor' };
}
`,
    bodyContent: null,
    bodyText:
      "Las directivas <code>'use client'</code> y <code>'use server'</code> son fundamentales en el modelo de React Server Components (RSC) de React 19. <br><br><code>'use client'</code> marca un archivo o componente como código que debe ejecutarse en el navegador. <code>'use server'</code> se usa para funciones (Actions o Server Functions) que se ejecutarán en el servidor, permitiendo acceso a recursos de backend directamente desde el frontend.",
    footerLinkInformation:
      "https://react.dev/reference/react/use-client",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Novedades React 19",
    order: 8,
  },
  {
    id: "react-patrones-renderizado-condicional",
    colClasses: "col-md-6",
    headerIcon: "❓",
    headerTitle: "Renderizado Condicional",
    codeLanguage: "jsx",
    codeSnippet: `function UserGreeting(props) {
  const isLoggedIn = props.isLoggedIn;
  // 1. Con 'if'
  if (isLoggedIn) {
    return <h1>Bienvenido de nuevo!</h1>;
  }
  return <h1>Por favor, inicia sesión.</h1>;
}

// 2. Con Operador Ternario (para expresiones más cortas)
function AuthButton(props) {
  return (
    props.isLoggedIn ?
      <button>Cerrar Sesión</button> :
      <button>Iniciar Sesión</button>
  );
}

// 3. Con Operador Lógico AND (&&) - si no hay 'else'
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hola!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          Tienes {unreadMessages.length} mensajes no leídos.
        </h2>
      }
    </div>
  );
}
  // 4. Con elementos de React como variables
function GreetingMessage(props) {
  let message;
  if (props.type === 'admin') {
    message = <p>Bienvenido, Administrador!</p>;
  } else {
    message = <p>Hola, Usuario!</p>;
  }
  return <div>{message}</div>;
}`,
    bodyContent: null,
    bodyText:
      "El renderizado condicional en React te permite mostrar diferentes elementos o componentes basados en ciertas condiciones. Las formas más comunes incluyen sentencias <code>if</code>/<code>else</code>, el operador ternario (<code>condicion ? verdadero : falso</code>), y el operador lógico AND (<code>&&</code>) para renderizado condicional simple sin <code>else</code>.",
    footerLinkInformation:
      "https://react.dev/learn/conditional-rendering",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Patrones Comunes",
    order: 9,
  },
  {
    id: "react-patrones-listas",
    colClasses: "col-md-6",
    headerIcon: "📋",
    headerTitle: "Renderizado de Listas",
    codeLanguage: "jsx",
    codeSnippet: `function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {/* Usar map() para transformar el array de datos en un array de elementos React */}
      {numbers.map((number, index) =>
        // Es crucial asignar una "key" única y estable a cada elemento de la lista.
        // El 'index' solo es aceptable como último recurso y si la lista no cambia.
        <li key={number.id || index}>
          {number.text}
        </li>
      )}
    </ul>
  );
}

// Ejemplo de uso:
// const myNumbers = [{id: 1, text: 'Uno'}, {id: 2, text: 'Dos'}];
// <NumberList numbers={myNumbers} />
`,
    bodyContent: null,
    bodyText:
      "Para renderizar listas de elementos en React, utiliza el método <code>.map()</code> de los arrays. <strong>Es fundamental proporcionar una <code>key</code> única y estable</strong> a cada elemento de la lista para ayudar a React a identificar qué ítems han cambiado, sido añadidos o eliminados, mejorando el rendimiento y evitando errores.",
    footerLinkInformation:
      "https://react.dev/learn/rendering-lists",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Patrones Comunes",
    order: 10,
  },
  {
    id: "react-herramientas-ecosistema",
    colClasses: "col-md-6",
    headerIcon: "🛠️",
    headerTitle: "Herramientas y Ecosistema",
    codeLanguage: "bash",
    codeSnippet: `# Crear un nuevo proyecto React con Vite (recomendado)
npm create vite@latest my-react-app -- --template react

# Instalar dependencias
cd my-react-app
npm install

# Iniciar el servidor de desarrollo
npm run dev

# Instalar React Router (para navegación)
npm install react-router-dom

# Ejemplo de instalación de una librería UI (Material UI)
npm install @mui/material @emotion/react @emotion/styled

# Abrir React DevTools en el navegador (extensión)
# (Buscar 'React Developer Tools' en tu tienda de extensiones)
`,
    bodyContent: null,
    bodyText:
      "El ecosistema de React es vasto. Para iniciar proyectos, **Vite** es la herramienta más moderna y rápida. Las **React DevTools** son indispensables para depurar. Para la navegación, **React Router** es el estándar de facto. Existen numerosas librerías de componentes UI para acelerar el desarrollo.",
    footerLinkInformation:
      "https://react.dev/learn/start-a-new-react-project",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Herramientas y Ecosistema",
    order: 11,
  },
  {
    id: "react-consejos-rapidos",
    colClasses: "col-md-6",
    headerIcon: "⚡",
    headerTitle: "Consejos Rápidos",
    codeLanguage: "jsx",
    codeSnippet: `// 1. Inmutabilidad del Estado
// ❌ INCORRECTO: user.age = 31;
// ✅ CORRECTO:
setUser({ ...user, age: 31 });

// ✅ Para arrays:
const newItems = [...items, 'nuevoItem'];
setItems(newItems);

// 2. Fragmentos (<></>)
function MyComponent() {
  return (
    <> {/* Fragmento corto */}
      <p>Parte 1</p>
      <p>Parte 2</p>
    </>
  );
}

// 3. Prop Drilling (y solución con Context API)
// Situación: pasar props a muchos niveles de profundidad
// Solución: Usar React Context API (o librerías de estado global)
// import React, { createContext, useContext } from 'react';
// const ThemeContext = createContext('light');
// function App() {
//   return (
//     <ThemeContext.Provider value="dark">
//       <DeeplyNestedComponent />
//     </ThemeContext.Provider>
//   );
// }
// function DeeplyNestedComponent() {
//   const theme = useContext(ThemeContext);
//   return <p>Tema actual: {theme}</p>;
// }

// 4. Error Boundaries (para capturar errores de UI)
// (Requiere un componente de clase o una librería)
/*
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary capturó un error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Algo salió mal.</h1>;
    }
    return this.props.children;
  }
}
// Uso: <ErrorBoundary><MyProblematicComponent /></ErrorBoundary>
*/
`,
    bodyContent: null,
    bodyText:
      "Algunos consejos clave para desarrollar en React: siempre trata el estado como **inmutable**; utiliza **Fragmentos (`<></>`)** para evitar envoltorios de DOM innecesarios; evita el 'prop drilling' usando la **Context API**; y considera implementar **Error Boundaries** para capturar errores de UI y mejorar la experiencia del usuario.",
    footerLinkInformation:
      "https://react.dev/learn/thinking-in-react",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Consejos y Buenas Prácticas",
    order: 12,
  },
];