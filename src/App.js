//importamos hojas de estilo
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import FormularioTarea from "./components/FormularioTarea";

function App() {
    return (
        <>
            <section className="container w-75 my-5 py-5 border">
                <h1 className="display-5 text-center">Bienvenido</h1>
                <FormularioTarea />
            </section>
        </>
    );
}

export default App;
