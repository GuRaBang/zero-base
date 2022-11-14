import styles from "./App.module.scss";
import { ErrorBoundary, Counter } from "components";

export default function App() {
  return (
    <div className={styles.App} lang="en">
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
    </div>
  );
}
