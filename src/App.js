import Root from './components/root';
import FilterContextProvider from './contexts/filter';

function App() {
  return (
    <div className="App">
      <FilterContextProvider>
        <Root />
      </FilterContextProvider>
    </div>
  );
}

export default App;
