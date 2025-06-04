import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <main className="max-w-[1280px] mx-auto p-8 text-center">
      <Header />
      <section className="flex flex-wrap justify-center gap-5 px-5 py-10">
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </section>
    </main>
  );
}

export default App;
