import BaseCard from "./components/base/BaseCard";

function App() {
  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-3xl">
        <BaseCard>
          <p>Hello world!</p>
        </BaseCard>
      </div>
    </div>
  );
}

export default App;
