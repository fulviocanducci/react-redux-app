import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCounter } from "../../actions";
import Score from "../../components/Score";

function App(props: any) {
  const [local, setLocal] = useState<string>("0");
  const handleOnClickSetValue = () => {
    props.clickSetValue(+local || 0);
  };
  return (
    <div className="App">
      <Score />
      <div>Counter Local: {props.value}</div>
      <button onClick={props.clickIncrement}>Increment</button>
      <button onClick={props.clickDecrement}>Decrement</button>
      <div>
        <input value={local} onChange={(e) => setLocal(e.target.value)} />
        <button onClick={handleOnClickSetValue}>Set Value</button>
      </div>
    </div>
  );
}

const mapStateToProps = (store: any) => {
  return { value: store.counterReducer.value };
};

const clickIncrement = () => ({
  type: actionCounter.INCREMENT
});

const clickDecrement = () => ({
  type: actionCounter.DECREMENT
});

const clickSetValue = (value: number) => ({
  type: actionCounter.SETVALUE,
  value: value
});
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    { clickIncrement, clickDecrement, clickSetValue },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
