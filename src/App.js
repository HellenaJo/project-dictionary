import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
    return (
        <div className="App">
            <div className="container">
                <header className="App-header">
                </header>
                <main>
                    <Dictionary defaultKeyword="cute" />
                </main>
                <footer className="App-footer">
                    Coded by {" "}
                    <a href="mailto:tessehellena@gmail.com">Hellena</a> {" "} and is open-sourced on {" "}
                    <a href="https://github.com/HellenaJo/dictionary-app" target="_blank" rel="noreferrer"> GitHub</a> .
                </footer>
            </div>
        </div>
    );
}