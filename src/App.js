import Root from './components/root';
import FilterModalContextProvider from './contexts/filter-modal';

function App() {
  return (
    <div className="App">
      <FilterModalContextProvider>
        <Root />
      </FilterModalContextProvider>
    </div>
  );
}

export default App;
