import { PureComponent } from 'react';
import { STEPS } from 'Route/Checkout/Checkout.config';
import "./ProgressBar.style"

class ProgressBar extends PureComponent {
  render() {
    // In checkout.config, I export all the checkout steps in an array to determine the number of checkpoints
    // and use the checkoutStep prop to determine the active checkpoint
    const { checkoutStep } = this.props;
    const active = STEPS.indexOf(checkoutStep);

    return (
      <div id="progress-container">
        <div id="progress-bar">
          {STEPS.map((el, index) => {
            const isActive = active >= index ? 'active' : "";
            const isCompleted = index < active;

            // The last step renders only a progress line without the checkpoint
            if (index !== STEPS.length - 1) {
              return (
                <div className='step-container'>
                  <div className={`line ${isActive}`}></div>
                  <div className={`step ${isActive}`} key={el}>{isCompleted ? <span>&#10003;</span> : index + 1}</div>
                </div>
              )
            } else {
              return (
                <div className='step-container'>
                  <div className={`line ${isActive}`}></div>
                </div>
              )
            }
          })}
        </div>
      </div>
    )
  }
}

export default ProgressBar;