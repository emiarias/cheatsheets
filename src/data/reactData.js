export const reactCheatsheetData = [
  // --- Fundamentos de React ---
  {
    id: "react-componentes-funcionales",
    colClasses: "col-md-6",
    headerIcon: "⚛️",
    headerTitle: "Componentes Funcionales",
    codeLanguage: "javascript",
    codeSnippet: `import React from 'react';

// Un componente funcional es una función de JavaScript
// que devuelve JSX (la interfaz de usuario).
function MyComponent(props) {
  return (
    &lt;div&gt;
      &lt;h1&gt;Hola, {props.name}!&lt;/h1&gt;
      &lt;p&gt;Este es un componente funcional simple.&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default MyComponent;

// Uso:
// &lt;MyComponent name="Mundo" /&gt;
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
    codeLanguage: "javascript",
    codeSnippet: `// 1. Un solo elemento raíz:
// ✅ Correcto:
function App() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Hola&lt;/h1&gt;
      &lt;p&gt;Mundo&lt;/p&gt;
    &lt;/div&gt;
  );
}

// ✅ También correcto (Fragmento):
function AppFragment() {
  return (
    &lt;&gt;
      &lt;h1&gt;Hola&lt;/h1&gt;
      &lt;p&gt;Mundo&lt;/p&gt;
    &lt;/&gt;
  );
}

// 2. Insertar JS con llaves {}:
const user = { name: 'Juan', age: 30 };
function UserProfile() {
  return (
    &lt;p&gt;Nombre: {user.name}, Edad: {user.age}&lt;/p&gt;
  );
}

// 3. Atributos en camelCase:
function MyButton() {
  return &lt;button onClick={() => alert('Clic!')}&gt;Haz clic&lt;/button&gt;;
}

// 4. Clases CSS: usa className
function MyDiv() {
  return &lt;div className="my-class"&gt;Contenido&lt;/div&gt;;
}`,
    bodyContent: null,
    bodyText:
      "JSX te permite escribir HTML directamente en tu código JavaScript. Se compila a llamadas a <code>React.createElement()</code>. <br> Recuerda las reglas clave: un solo elemento raíz, usar llaves para JS, y <code>className</code> en lugar de <code>class</code>",
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
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🎁",
    headerTitle: "Props (Propiedades)",
    codeLanguage: "javascript",
    codeSnippet: `// 1. Pasar Props a un componente:
// &lt;Greeting name="Alicia" message="Bienvenida" /&gt;

// 2. Recibir Props en el componente hijo:
function Greeting(props) {
  return (
    &lt;h1&gt;{props.message}, {props.name}!&lt;/h1&gt;
  );
}

// 3. Desestructurar Props (práctica común):
function UserCard({ name, email }) {
  return (
    &lt;div&gt;
      &lt;h2&gt;{name}&lt;/h2&gt;
      &lt;p&gt;Email: {email}&lt;/p&gt;
    &lt;/div&gt;
  );
}

// Uso:
// &lt;UserCard name="Pedro" email="pedro@ejemplo.com" /&gt;

// 4. Props por defecto (si no se pasan):
function Button({ text = "Clic aquí" }) {
  return &lt;button&gt;{text}&lt;/button&gt;;
}
// Uso: &lt;Button /&gt; -&gt; "Clic aquí"
// Uso: &lt;Button text="Guardar" /&gt; -&gt; "Guardar"
`,
    bodyContent: null,
    bodyText:
      "Las Props son la forma de pasar datos de un componente padre a un componente hijo. Son de <strong> solo lectura </strong> y ayudan a mantener un flujo de datos unidireccional. La desestructuración es una forma limpia de acceder a ellas.",
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
    colClasses: "col-md-6 col-lg-4",
    headerIcon: "🔄",
    headerTitle: "Estado con `useState`",
    codeLanguage: "javascript",
    codeSnippet: `import { useState } from 'react';

function Counter() {
  // Declaración del estado: [valorActual, funciónActualizadora]
  const [count, setCount] = useState(0); // 0 es el valor inicial

  const increment = () => {
    // 1. Actualización simple:
    setCount(count + 1);
  };

  const decrement = () => {
    // 2. Actualización con función (para estados complejos o asíncronos):
    setCount(prevCount =&gt; prevCount - 1);
  };

  return (
    &lt;div&gt;
      &lt;p&gt;Contador: {count}&lt;/p&gt;
      &lt;button onClick={increment}&gt;Incrementar&lt;/button&gt;
      &lt;button onClick={decrement}&gt;Decrementar&lt;/button&gt;
    &lt;/div&gt;
  );
}

// Ejemplo con objeto en estado:
function UserForm() {
  const [user, setUser] = useState({ name: 'Ivanna', age: 25 });

  const updateName = () => {
    // Para objetos, siempre copia el objeto y actualiza la propiedad
    setUser({ ...user, name: 'Feliciana' });
  };

  return (
    &lt;div&gt;
      &lt;p&gt;Usuario: {user.name}, Edad: {user.age}&lt;/p&gt;
      &lt;button onClick={updateName}&gt;Cambiar Nombre&lt;/button&gt;
    &lt;/div&gt;
  );
}
`,
    bodyContent: null,
    bodyText:
      "<code>useState</code> es el Hook fundamental para añadir estado a tus componentes funcionales. Siempre usa la función actualizadora <code>setCount</code>) para cambiar el estado, y ten en cuenta que las actualizaciones son asíncronas. Para objetos o arrays, siempre crea una nueva copia.",
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
    colClasses: "col-md-12 col-lg-4",
    headerIcon: "🚀",
    headerTitle: "Efectos Secundarios con `useEffect`",
    codeLanguage: "javascript",
    codeSnippet: `import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() =&gt; {
    let interval = null;
    if (isActive) {
      interval = setInterval(() =&gt; {
        setSeconds(s =&gt; s + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    // Función de limpieza (se ejecuta al desmontar o antes de una nueva ejecución)
    return () =&gt; clearInterval(interval);
  }, [isActive]); // Array de dependencias: se re-ejecuta si 'isActive' cambia

  return (
    &lt;div&gt;
      &lt;p&gt;Tiempo: {seconds} segundos&lt;/p&gt;
      &lt;button onClick={() =&gt; setIsActive(!isActive)}&gt;
        {isActive ? 'Pausar' : 'Iniciar'}
      &lt;/button&gt;
      &lt;button onClick={() =&gt; { setSeconds(0); setIsActive(false); }}&gt;Reset&lt;/button&gt;
    &lt;/div&gt;
  );
}

// Ejemplo: Ejecutar solo una vez al montar (fetch de datos)
function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() =&gt; {
    async function fetchData() {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []); // Array de dependencias vacío: se ejecuta solo una vez al montar

  return (
    &lt;div&gt;
      {data ? &lt;p&gt;Datos cargados: {JSON.stringify(data)}&lt;/p&gt; : &lt;p&gt;Cargando...&lt;/p&gt;}
    &lt;/div&gt;
  );
}
`,
    bodyContent: null,
    bodyText:
      "<code>useEffect</code> te permite realizar 'efectos secundarios' (operaciones que interactúan con el mundo exterior o se ejecutan después del renderizado). Usa el array de dependencias para controlar cuándo se re-ejecuta el efecto, y la función de retorno para limpieza (ej. limpiar timers, cancelar suscripciones).",
    footerLinkInformation:
      "https://react.dev/reference/react/useEffect",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Fundamentos de React",
    order: 5,
  },
//   {
//     id: "react-hooks-esenciales",
//     colClasses: "col-md-6",
//     headerIcon: "🔗",
//     headerTitle: "Otros Hooks Esenciales",
//     codeLanguage: "javascript",
//     codeSnippet: `import React, { useContext, useRef, useMemo, useCallback } from 'react';

// // --- useContext: Acceder a un Contexto ---
// // (asume que un contexto 'ThemeContext' ya fue creado con React.createContext)
// // const ThemeContext = createContext('light');
// function ThemedComponent() {
//   // const theme = useContext(ThemeContext);
//   // return &lt;div style={{ background: theme === 'dark' ? 'black' : 'white' }}&gt;...&lt;/div&gt;;
//   return &lt;p&gt;Este es un ejemplo de useContext. (Requiere un Context.Provider)&lt;/p&gt;;
// }

// // --- useRef: Acceder a elementos DOM o valores mutables ---
// function TextInputWithFocusButton() {
//   const inputRef = useRef(null);

//   const focusInput = () =&gt; {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   return (
//     &lt;&gt;
//       &lt;input type="text" ref={inputRef} /&gt;
//       &lt;button onClick={focusInput}&gt;Foco en input&lt;/button&gt;
//     &lt;/&gt;
//   );
// }

// // --- useMemo: Memoizar valores computados ---
// // Solo recalcula si las dependencias cambian.
// function ExpensiveCalculation({ a, b }) {
//   const result = useMemo(() =&gt; {
//     console.log('Realizando cálculo costoso...');
//     return a * 2 + b * 3;
//   }, [a, b]); // Recalcula solo si 'a' o 'b' cambian

//   return &lt;p&gt;Resultado del cálculo: {result}&lt;/p&gt;;
// }

// // --- useCallback: Memoizar funciones ---
// // Previene re-creaciones de funciones en cada render si las dependencias no cambian.
// function ParentComponent() {
//   const [count, setCount] = useState(0);

//   // La función increment solo se recrea si 'count' cambia
//   const increment = useCallback(() =&gt; {
//     setCount(c =&gt; c + 1);
//   }, []); // Dependencias vacías: la función nunca cambia

//   return (
//     &lt;&gt;
//       &lt;button onClick={increment}&gt;Incrementar: {count}&lt;/button&gt;
//       &lt;ChildComponent onButtonClick={increment} /&gt; {/* Pasa la función memoizada */}
//     &lt;/&gt;
//   );
// }
// `,
//     bodyContent: null,
//     bodyText:
//       "React ofrece otros Hooks poderosos: &lt;code&gt;useContext&lt;/code&gt; para evitar el 'prop drilling', &lt;code&gt;useRef&lt;/code&gt; para interacciones directas con el DOM o mantener valores mutables sin re-renders, y &lt;code&gt;useMemo&lt;/code&gt;/&lt;code&gt;useCallback&lt;/code&gt; para optimizaciones de rendimiento, memoizando valores o funciones para evitar cálculos o re-renderizados innecesarios.",
//     footerLinkInformation:
//       "https://react.dev/reference/react",
//     footerLinkDemo: null,
//     footerPreview: null,
//     footerVideo: null,
//     section: "Hooks Avanzados",
//     order: 6,
//   },
  // --- Novedades Clave de React 19 ---
//   {
//     id: "react-19-actions",
//     colClasses: "col-md-12",
//     headerIcon: "⚡",
//     headerTitle: "Novedad 19: Actions (Acciones)",
//     codeLanguage: "javascript",
//     codeSnippet: `import { useFormStatus, useFormState } from 'react-dom'; // Nota: de react-dom

// // Componente para mostrar el estado del envío del formulario
// function SubmitButton() {
//   const { pending } = useFormStatus(); // Hook para saber si el form está enviándose
//   return (
//     &lt;button type="submit" disabled={pending}&gt;
//       {pending ? 'Enviando Datos...' : 'Enviar Formulario'}
//     &lt;/button&gt;
//   );
// }

// // Componente de formulario con una Action
// function MyFormWithAction() {
//   // useFormState: para manejar el estado del resultado de la acción
//   // [estadoActual, acciónEnlazada] = useFormState(funciónDeAcción, estadoInicial)
//   const [state, formAction] = useFormState(async (prevState, formData) =&gt; {
//     const name = formData.get('name');
//     console.log('Action ejecutada en el servidor/cliente con:', name);
//     // Simular una llamada a API asíncrona
//     await new Promise(resolve =&gt; setTimeout(resolve, 1500));
//     if (name === 'error') {
//         return 'Error: Nombre "error" no permitido.';
//     }
//     return \`¡Formulario enviado con nombre: \${name}!\`;
//   }, null); // Estado inicial null

//   return (
//     &lt;form action={formAction}&gt; {/* 'action' ahora acepta una función */}
//       &lt;label&gt;Nombre:&lt;/label&gt;
//       &lt;input type="text" name="name" placeholder="Tu nombre" required /&gt;
//       &lt;SubmitButton /&gt;
//       {state &amp;&amp; &lt;p&gt;{state}&lt;/p&gt;} {/* Muestra el resultado de la acción */}
//     &lt;/form&gt;
//   );
// }

// // Uso en tu App:
// // &lt;MyFormWithAction /&gt;
// `,
//     bodyContent: null,
//     bodyText:
//       "React 19 introduce &lt;strong&gt;Actions&lt;/strong&gt; para simplificar el manejo de envío de formularios y mutaciones de datos, especialmente útiles con React Server Components (RSC). Permiten ejecutar funciones directamente desde interacciones del DOM (ej. &lt;code&gt;&amp;lt;form action={myAction}&amp;gt;&lt;/code&gt;).&lt;br&gt;&lt;br&gt;Los nuevos Hooks &lt;code&gt;useFormStatus&lt;/code&gt; (para el estado pendiente) y &lt;code&gt;useFormState&lt;/code&gt; (para manejar el resultado y estado de la acción) son clave para integrarlas.",
//     footerLinkInformation:
//       "https://react.dev/reference/react-dom/components/form#providing-an-action-to-form",
//     footerLinkDemo: null,
//     footerPreview: null,
//     footerVideo: null,
//     section: "Novedades React 19",
//     order: 7,
//   },
//   {
//     id: "react-19-directives",
//     colClasses: "col-md-6",
//     headerIcon: "🛣️",
//     headerTitle: "Novedad 19: Directivas (`'use client'`, `'use server'`)",
//     codeLanguage: "javascript",
//     codeSnippet: `// --- archivo-cliente.js ---
// "use client"; // Esta directiva debe estar en la PRIMERA línea

// import { useState } from 'react';

// function ClientComponent() {
//   const [count, setCount] = useState(0); // Usa Hooks de cliente
//   return (
//     &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
//       Cliente: {count}
//     &lt;/button&gt;
//   );
// }
// export default ClientComponent;

// // --- archivo-servidor.js ---
// // Por defecto, todos los componentes son Server Components.
// // No se necesita "use server" para un componente, solo para funciones.

// async function ServerComponent() {
//   // console.log("Se ejecuta en el servidor");
//   const data = await fetch('https://api.example.com/server-data'); // Fetch en el servidor
//   const jsonData = await data.json();
//   return (
//     &lt;div&gt;
//       &lt;h1&gt;Datos del Servidor&lt;/h1&gt;
//       &lt;p&gt;{JSON.stringify(jsonData)}&lt;/p&gt;
//       {/* &lt;ClientComponent /&gt; // Puedes importar y renderizar componentes cliente */}
//     &lt;/div&gt;
//   );
// }

// // --- server-action-example.js ---
// "use server"; // Directiva para una función que se ejecuta en el servidor

// export async function submitFormData(formData) {
//   const name = formData.get('name');
//   console.log('Función de servidor ejecutada con:', name);
//   // Lógica de base de datos, acceso a archivos, etc.
//   return { status: 'success', message: 'Datos procesados en el servidor' };
// }
// `,
//     bodyContent: null,
//     bodyText:
//       "Las directivas &lt;code&gt;'use client'&lt;/code&gt; y &lt;code&gt;'use server'&lt;/code&gt; son fundamentales en el modelo de React Server Components (RSC) de React 19. &lt;br&gt;&lt;br&gt;&lt;code&gt;'use client'&lt;/code&gt; marca un archivo o componente como código que debe ejecutarse en el navegador. &lt;code&gt;'use server'&lt;/code&gt; se usa para funciones (Actions o Server Functions) que se ejecutarán en el servidor, permitiendo acceso a recursos de backend directamente desde el frontend.",
//     footerLinkInformation:
//       "https://react.dev/reference/react/use-client",
//     footerLinkDemo: null,
//     footerPreview: null,
//     footerVideo: null,
//     section: "Novedades React 19",
//     order: 8,
//   },
//   {
//     id: "react-patrones-renderizado-condicional",
//     colClasses: "col-md-6",
//     headerIcon: "❓",
//     headerTitle: "Renderizado Condicional",
//     codeLanguage: "javascript",
//     codeSnippet: `function UserGreeting(props) {
//   const isLoggedIn = props.isLoggedIn;

//   // 1. Con \`if\`
//   if (isLoggedIn) {
//     return &lt;h1&gt;Bienvenido de nuevo!&lt;/h1&gt;;
//   }
//   return &lt;h1&gt;Por favor, inicia sesión.&lt;/h1&gt;;
// }

// // 2. Con Operador Ternario (para expresiones más cortas)
// function AuthButton(props) {
//   return (
//     props.isLoggedIn ?
//       &lt;button&gt;Cerrar Sesión&lt;/button&gt; :
//       &lt;button&gt;Iniciar Sesión&lt;/button&gt;
//   );
// }

// // 3. Con Operador Lógico AND (&amp;&amp;) - si no hay \`else\`
// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     &lt;div&gt;
//       &lt;h1&gt;Hola!&lt;/h1&gt;
//       {unreadMessages.length &gt; 0 &amp;&amp;
//         &lt;h2&gt;
//           Tienes {unreadMessages.length} mensajes no leídos.
//         &lt;/h2&gt;
//       }
//     &lt;/div&gt;
//   );
// }

// // 4. Con elementos de React como variables
// function GreetingMessage(props) {
//   let message;
//   if (props.type === 'admin') {
//     message = &lt;p&gt;Bienvenido, Administrador!&lt;/p&gt;;
//   } else {
//     message = &lt;p&gt;Hola, Usuario!&lt;/p&gt;;
//   }
//   return &lt;div&gt;{message}&lt;/div&gt;;
// }
// `,
//     bodyContent: null,
//     bodyText:
//       "El renderizado condicional en React te permite mostrar diferentes elementos o componentes basados en ciertas condiciones. Las formas más comunes incluyen sentencias &lt;code&gt;if&lt;/code&gt;/&lt;code&gt;else&lt;/code&gt;, el operador ternario (&lt;code&gt;condicion ? verdadero : falso&lt;/code&gt;), y el operador lógico AND (&lt;code&gt;&amp;&amp;&lt;/code&gt;) para renderizado condicional simple sin &lt;code&gt;else&lt;/code&gt;.",
//     footerLinkInformation:
//       "https://react.dev/learn/conditional-rendering",
//     footerLinkDemo: null,
//     footerPreview: null,
//     footerVideo: null,
//     section: "Patrones Comunes",
//     order: 9,
//   },
//   {
//     id: "react-patrones-listas",
//     colClasses: "col-md-6",
//     headerIcon: "📋",
//     headerTitle: "Renderizado de Listas",
//     codeLanguage: "javascript",
//     codeSnippet: `function NumberList(props) {
//   const numbers = props.numbers;
//   return (
//     &lt;ul&gt;
//       {/* Usar map() para transformar el array de datos en un array de elementos React */}
//       {numbers.map((number, index) =&gt;
//         // Es crucial asignar una "key" única y estable a cada elemento de la lista.
//         // El 'index' solo es aceptable como último recurso y si la lista no cambia.
//         &lt;li key={number.id || index}&gt;
//           {number.text}
//         &lt;/li&gt;
//       )}
//     &lt;/ul&gt;
//   );
// }

// // Ejemplo de uso:
// // const myNumbers = [{id: 1, text: 'Uno'}, {id: 2, text: 'Dos'}];
// // &lt;NumberList numbers={myNumbers} /&gt;
// `,
//     bodyContent: null,
//     bodyText:
//       "Para renderizar listas de elementos en React, utiliza el método &lt;code&gt;.map()&lt;/code&gt; de los arrays. &lt;strong&gt;Es fundamental proporcionar una &lt;code&gt;key&lt;/code&gt; única y estable&lt;/strong&gt; a cada elemento de la lista para ayudar a React a identificar qué ítems han cambiado, sido añadidos o eliminados, mejorando el rendimiento y evitando errores.",
//     footerLinkInformation:
//       "https://react.dev/learn/rendering-lists",
//     footerLinkDemo: null,
//     footerPreview: null,
//     footerVideo: null,
//     section: "Patrones Comunes",
//     order: 10,
//   },
  {
    id: "react-herramientas-ecosistema",
    colClasses: "col-md-12 ",
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
      "Para iniciar proyectos, <strong>Vite</strong> es la herramienta más moderna y rápida. Las <strong>React DevTools</strong> son indispensables para depurar. Para la navegación, <strong>React Router</strong> es el estándar.<br> Ademas existen numerosas librerías de componentes UI para acelerar el desarrollo.",
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
    colClasses: "col-md-12",
    headerIcon: "⚡",
    headerTitle: "Consejos Rápidos",
    codeLanguage: "javascript",
    codeSnippet: `// 1. Inmutabilidad del Estado
// ❌ INCORRECTO: user.age = 31;
// ✅ CORRECTO:
setUser({ ...user, age: 31 });

// ✅ Para arrays:
const newItems = [...items, 'nuevoItem'];
setItems(newItems);

// 2. Fragmentos (&lt;&gt;&lt;/&gt;)
function MyComponent() {
  return (
    &lt;&gt; {/* Fragmento corto */}
      &lt;p&gt;Parte 1&lt;/p&gt;
      &lt;p&gt;Parte 2&lt;/p&gt;
    &lt;/&gt;
  );
}`,
    bodyContent: null,
    bodyText:
      "💡 Algunos consejos clave para desarrollar en React: siempre trata el estado como <strong>inmutable</strong>; utiliza <strong>Fragmentos</strong> para evitar envoltorios de DOM innecesarios.",
    footerLinkInformation:
      "https://react.dev/learn/thinking-in-react",
    footerLinkDemo: null,
    footerPreview: null,
    footerVideo: null,
    section: "Consejos y Buenas Prácticas",
    order: 12,
  },
];

// evita el 'prop drilling' usando la **Context API**; y considera implementar **Error Boundaries** para capturar errores de UI y mejorar la experiencia del usuario.