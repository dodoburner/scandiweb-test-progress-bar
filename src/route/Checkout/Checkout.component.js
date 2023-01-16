import { PureComponent } from "react";
import ContentWrapper from 'Component/ContentWrapper';
import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import ProgressBar from "Component/ProgressBar/ProgressBar.component";
import "./Checkout.override.style";

class Checkout extends SourceCheckout {
  // I'm adding the ProgressBar to the render method and pass the checkoutStep as a prop
  render() {
    return (
      <main block="Checkout">
            <ProgressBar checkoutStep={this.props.checkoutStep} />
            <ContentWrapper
              wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
              label={ __('Checkout page') }
        >
                { this.renderSummary(true) }
                <div block="Checkout" elem="Step">
                    { this.renderTitle() }
                    { this.renderGuestForm() }
                    { this.renderStep() }
                    { this.renderLoader() }
                </div>
                <div>
                    { this.renderSummary() }
                    { this.renderPromo() }
                    { this.renderCoupon() }
                </div>
            </ContentWrapper>
        </main>
    );
  }
}

export default Checkout;