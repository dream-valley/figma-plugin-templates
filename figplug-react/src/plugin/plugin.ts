// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

import { UIMessage, MESSAGE_TYPES, DEFAULT_VALUES, hexToRgb, getDefaultColor } from '../common';

// This shows the HTML page in "ui.html".
figma.showUI(__html__, { width: 400, height: 300 });

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg: UIMessage) => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === MESSAGE_TYPES.CREATE_SHAPES) {
    // This plugin creates rectangles on the screen.
    const numberOfRectangles = msg.count;
    const color = msg.color ? hexToRgb(msg.color) : getDefaultColor();

    const nodes: SceneNode[] = [];
    for (let i = 0; i < numberOfRectangles; i++) {
      const rect = figma.createRectangle();
      rect.x = i * DEFAULT_VALUES.RECTANGLE_SPACING;
      rect.fills = [{ type: 'SOLID', color }];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};
