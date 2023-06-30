import "./IncompleteArea.scss";

type Props = {
  incompleteTodos: string[];
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
};

const IncompleteArea: React.FC<Props> = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;

  return (
    <div className="incomplete-area">
      <p>未完了のTODO</p>
      {incompleteTodos.map((todo, index) => (
        <div className="incomplete-todo" key={todo}>
          <p>・{todo}</p>
          <button onClick={() => onClickComplete(index)}>完了</button>
          <button onClick={() => onClickDelete(index)}>削除</button>
        </div>
      ))}
    </div>
  );
};

export default IncompleteArea;
