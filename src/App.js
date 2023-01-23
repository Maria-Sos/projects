import './App.css';
import AllRouters from "./routers/AllRouters";
import BasicMenu from "./pages/BasicMenu";


function App() {

  return (
	<div>
	  <BasicMenu/>
	  <div className="App">
		<AllRouters/>
	  </div>
	</div>
  )
	;
}

export default App;
