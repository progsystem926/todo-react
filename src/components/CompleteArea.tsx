import "./CompleteArea.scss";

type Props = {
  completeTodos: string[];
  onClickBack: (index: number) => void;
};

const CompleteArea: React.FC<Props> = (props) => {
  const { completeTodos, onClickBack } = props;

  return (
    <div className="complete-area">
      <p>完了したTODO</p>
      {completeTodos.map((todo, index) => (
        <div className="complete-todo" key={todo}>
          <p>・{todo}</p>
          <button onClick={() => onClickBack(index)}>戻す</button>
        </div>
      ))}
    </div>
  );
};

export default CompleteArea;
