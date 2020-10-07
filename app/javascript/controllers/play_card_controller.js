// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="play-card">
//   <h1 data-target="play-card.output"></h1>
// </div>

import { Controller } from "stimulus"
import { Droppable } from "@shopify/draggable";


export default class extends Controller {
  connect() {
    new Droppable(this.element, {
      dropzone: ".dropzone"
    })
  }
}
