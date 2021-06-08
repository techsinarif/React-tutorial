import './App.css';
import axios from 'axios';

// Axios Interceptor
axios.interceptors.request.use((request) => {
  request.headers.Authorization = 'JWT_Authorization_Token';
  // TODO: do custom logics here. 
  return request;
});

axios.interceptors.response.use((response) => {
  // TODO: do custom logics here.
  return response;
})

function App() {
  const getUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((data) => {
      console.log(data);
    })
  }
  return (
    <div className="App">
      <h1>React axios interceptor example</h1>
      <button onClick={getUsers}>Get Users</button>
    </div>
  );
}

export default App;
