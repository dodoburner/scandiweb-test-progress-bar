import { PureComponent } from 'react';
import { STEPS } from 'Route/Checkout/Checkout.config';
import "./ProgressBar.style"

class ProgressBar extends PureComponent {
  renderCheckpoints(stepIndex) {
    return STEPS.map((el, index) => {
      // I use the index of the current step to determine if a checkpoint is active and/or completed
      const isActive = stepIndex >= index ? 'active' : "";
      const isCompleted = index < stepIndex;

      // The last step renders only a progress line without the checkpoint
      if (index !== STEPS.length - 1) {
        return (
          <div className='step-container' key={el}>
            <div className={`line ${isActive}`}></div>
            <div className={`step ${isActive}`}>{isCompleted ? <span>&#10003;</span> : index + 1}</div>
          </div>
        )
      } else {
        return (
          <div className='step-container' key={el}>
            <div className={`line ${isActive}`}></div>
          </div>
        )
      }
    })
  }

  render() {
    // In checkout.config, I export all the checkout steps in an array to determine the number of checkpoints
    // and use the checkoutStep prop to determine the index of the current step
    const { checkoutStep } = this.props;
    const stepIndex = STEPS.indexOf(checkoutStep);

    return (
      <div id="progress-container">
        <div id="progress-bar">
          {this.renderCheckpoints(stepIndex)}
        </div>
      </div>
    )
  }
}

export default ProgressBar;