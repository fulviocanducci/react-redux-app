import { connect } from "react-redux";

function Score(props: any) {
  return <div>Counter Component: {props.value}</div>;
}

const mapToScore = (state: any) => {
  return { value: state.counterReducer.value };
};

export default connect(mapToScore)(Score);
