<template>
  <div>
    <div class="hero is-horizontal is-fullheight">
      <div class="hero-left">
        <section class="auth-banner section is-normal is-padded">
          <figure class="image is-logo is-vertical">
            <img src="@/assets/images/muffin-logo.png" alt="Muffin Logo">
          </figure>

          <h1 class="title is-size-1-desktop is-size-2-touch has-text-white">Create an Account</h1>

          <p class="has-text-grey-lighter is-size-3-desktop is-size-5-touch">
            Let’s get started with your <span class="has-text-white has-text-weight-bold">free account</span>. No credit card required.
          </p>
        </section>

        <section class="section is-normal is-padded is-black-ter is-stretched">
          <div class="content has-gaps is-size-4-desktop is-size-5-touch has-text-white">
            <p>
              <span class="badge is-dark"><i class="fas fa-fw fa-image"></i></span>
              &nbsp;
              Access posts tagging your business
            </p>

            <p>
              <span class="badge is-dark"><i class="fas fa-fw fa-handshake"></i></span>
              &nbsp;
              Obtain rights to share images
            </p>

            <p>
              <span class="badge is-dark"><i class="fas fa-fw fa-chart-pie"></i></span>
              &nbsp;
              Analyse your Instagram reach
            </p>
          </div>

          <div class="content">
            <p v-if="isConnected">
              <button class="button is-success is-large is-fullwidth has-text-weight-bold">
                <i class="far fa-check-circle"></i>
                &nbsp;
                Account Created
              </button>
            </p>

            <!--
              TODO: Optionally restyle the button. Not needed though.
            -->
            <div
              v-else
              class="fb-login-button"
              data-size="large"
              data-button-type="login_with"
              data-auto-logout-link="false"
              data-use-continue-as="true"
            ></div>

            <p class="has-text-grey-lighter is-size-7">
              By signing up you agree to Muffin <u>Terms and onditions</u> and <u>Privacy policy</u>
            </p>
          </div>
        </section>
      </div>

      <div class="hero-right" style="background-image: url(/img/auth-banner.jpg)"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {

  /**
   * Whether user approved Muffin.
   *
   * TODO: Load this from store.
   */
  public isConnected: boolean = false

}
</script>
