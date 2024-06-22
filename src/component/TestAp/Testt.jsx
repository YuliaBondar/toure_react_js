// import React, { useState, useEffect } from 'react';

// const Testt = () => {
//   const [books, setBooks] = useState([]); // Используем useState для хранения данных из API

//   useEffect(() => {
//     const fetchData = async () => {
//       // Выполняем запрос к API
//       try {
//         const response = await fetch('https://667024390900b5f8724990a7.mockapi.io/api/topBook/Topbook');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setBooks(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData(); // Вызываем функцию fetchData при загрузке компонента
//   }, []);

//   // Проверяем, загружены ли данные из API, чтобы избежать ошибок при отображении
//   if (!books.length) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div> 
//       <h1>Top Books</h1>
//       {books.map((book) => (
//         <div key={book.id}>
//           <h2>{book.name}</h2>
//           <p>Author: {book.places}</p>
//           <p>Genre: {book.money}</p>
//           <img src="https://drive.google.com/file/d/1juR0sHjDs7Nz6p3ezyowFJuR3Y9m_xq2/view?usp=sharing" alt="cx"/>
//           <p>Published: {book.geo}</p>
          
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Testt;
