import "./CounterButton.css";
import { Component, createRef } from "react";

const buttonType = {
  increase: {
    ariaLabel: "카운트 증가",
    d: "M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z",
  },
  decrease: {
    ariaLabel: "카운트 감소",
    d: "M0 12v1h23v-1h-23z",
  },
};

export class CounterButton extends Component {
  render() {
    const { type, ...props } = this.props;
    const { ariaLabel, d } = buttonType[type];
    return (
      <button
        className={`button ${type}Button`}
        type="button"
        aria-label={ariaLabel}
        title={ariaLabel}
        {...props}
      >
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d={d} />
        </svg>
      </button>
    );
  }
}

CounterButton.defaultProps = {
  type: "increase",
};
