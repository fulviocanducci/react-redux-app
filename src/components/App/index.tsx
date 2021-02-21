import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function App(props: any) {
  return (
    <div className="App">
      <div>{props.value}</div>
      <button onClick={props.clickIncrement}>Increment</button>
    </div>
  );
}

const mapStateToProps = (store: any) => {
  return { value: store.counterReducer.value };
};

export const clickIncrement = () => ({
  type: "INCREMENT"
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ clickIncrement }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
