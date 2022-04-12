import Root from './components/root';
import FilterContextProvider from './contexts/filter';
import MetadataContextProvider from './contexts/metadata';

function App() {
  return (
    <div className="App">
      <FilterContextProvider>
        <MetadataContextProvider>
          <Root />
        </MetadataContextProvider>
      </FilterContextProvider>
    </div>
  );
}

export default App;
