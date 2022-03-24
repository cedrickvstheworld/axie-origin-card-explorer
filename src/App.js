import Root from './components/root';
import FilterContextProvider from './contexts/filter';
import FilterModalContextProvider from './contexts/filter-modal';

function App() {
  return (
    <div className="App">
      <FilterContextProvider>
        <FilterModalContextProvider>
          <Root />
        </FilterModalContextProvider>
      </FilterContextProvider>
    </div>
  );
}

export default App;
