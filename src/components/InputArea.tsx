import "./InputArea.scss";

type Props = {
  inputTodo: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
};

const InputArea: React.FC<Props> = (props) => {
  const { inputTodo, onChange, onClick } = props;

  return (
    <div className="input-area">
      <input placeholder="Todoを入力" value={inputTodo} onChange={onChange} />
      <button onClick={onClick} disabled={!inputTodo}>
        入力
      </button>
    </div>
  );
};

export default InputArea;
