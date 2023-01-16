import { PureComponent } from 'react';

class ProgressBar extends PureComponent {
  render() {
    const { checkoutStep, steps } = this.props;
    return (
      <div id="progress">
        <div id="progress-bar"></div>
        <ul id="progress-num">
          {steps.map((el, index) => {
            if (index !== steps.length - 1) {
              return <li key={el.stepNumber} className="step">{el.stepNumber}</li>
            }
          })}
        </ul>
      </div>
    )
  }
}

export default ProgressBar;