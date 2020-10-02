// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="play-card">
//   <h1 data-target="play-card.output"></h1>
// </div>

import { Controller } from "stimulus"
import { Draggable } from "@shopify/draggable";


export default class extends Controller {
  connect() {
    console.log(this.element)
    new Draggable(this.element)
  }
}
