import BaseCard from "./components/base/BaseCard";

function App() {
  return (
    <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-3xl">
        <BaseCard>
          <BaseCard.Content>
            <p>Hello world!</p>
          </BaseCard.Content>
        </BaseCard>
      </div>
    </main>
  );
}

export default App;
