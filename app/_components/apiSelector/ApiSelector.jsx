import styles from "./ApiSelector.module.css";

const ApiSelector = ({ apiChoice, setApiChoice }) => {
  const handleSelection = (event) => {
    setApiChoice(event.target.value);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Choose API:
        <select
          value={apiChoice}
          onChange={handleSelection}
          className={styles.select}
        >
          <option value="cohere">Cohere</option>
          <option value="openai">OpenAI</option>
        </select>
      </label>
    </div>
  );
};

export default ApiSelector;