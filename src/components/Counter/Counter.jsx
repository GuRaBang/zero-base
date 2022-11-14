import { Component, createRef } from "react";
import "./Counter.css";
import { CounterButton } from "components";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.current,
    };
  }

  render() {
    const { value } = this.state;

    return (
      <div
        role="timer"
        aria-live="polite"
        aria-atomic="true"
        aria-describedby="counter-awkd"
        className="counter"
      >
        <span id="counter-awkd" className="a11yHidden">
          카운트 증가 또는 감소 버튼을 눌러, 카운트 값을 변경할 수 있습니다.
        </span>
        <CounterButton type="decrease" onClick={this.handleDecreaseValue} />
        <output
          className="output"
          contentEditable
          suppressContentEditableWarning={true}
          onKeyDown={this.handleEditValue}
        >
          {value}
        </output>
        <CounterButton type="increase" onClick={this.handleIncreaseValue} />
      </div>
    );
  }

  componentDidMount() {
    this.controlButton();
  }

  componentDidUpdate() {
    this.controlButton();
  }

  controlButton() {
    const { value } = this.state;
    const { min, step, max } = this.props;
    console.log(value + step > max);
    if (value + step > max)
      document.querySelector(".increaseButton").disabled = true;
    else document.querySelector(".increaseButton").disabled = false;

    if (value - step < min)
      document.querySelector(".decreaseButton").disabled = true;
    else document.querySelector(".decreaseButton").disabled = false;
  }

  handleEditValue = (e) => {
    const { max, min } = this.props;
    if (e.key === "Enter") {
      e.preventDefault();
      if (
        isNaN(+e.target.value) ||
        +e.target.value > max ||
        +e.target.value < min
      ) {
        window.alert(`${min}과 ${max} 사이의 숫자를 입력해 주세요.`);
        window
          .getSelection()
          .selectAllChildren(document.querySelector(".output"));
        return;
      }

      this.setState(() => ({ value: +e.target.value }));
      e.target.blur();
      e.target.nextSibling.focus();

      return;
    }
  };

  handleIncreaseValue = (e) => {
    if (e.target.closest("button").disabled) return;
    const { step } = this.props;
    this.setState(({ value }) => ({ value: value + step }));
  };

  handleDecreaseValue = (e) => {
    if (e.target.closest("button").disabled) return;
    const { step } = this.props;
    this.setState(({ value }) => ({ value: value - step }));
  };
}

Counter.defaultProps = {
  min: 0,
  max: 10,
  step: 1,
  current: 0,
};
