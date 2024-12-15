import BaseCard from "./components/base/BaseCard";
import BaseButton from "./components/base/BaseButton";

function App() {
  const handleClick = () => {
    console.log("new task");
  };

  return (
    <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-3xl">
        <BaseCard>
          <BaseCard.Header>
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
              <div className="ml-4 mt-2">
                <h3 className="text-base font-semibold text-gray-900">
                  Task List
                </h3>
              </div>
              <div className="ml-4 mt-2 shrink-0">
                <BaseButton onClick={handleClick}>New Task</BaseButton>
              </div>
            </div>
          </BaseCard.Header>
          <BaseCard.Content>
            <p>Hello world!</p>
          </BaseCard.Content>
        </BaseCard>
      </div>
    </main>
  );
}

export default App;
