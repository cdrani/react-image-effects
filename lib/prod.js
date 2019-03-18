'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var imageEffects = function imageEffects(src) {
  return {
    pencil: {
      backgroundImage: "url(".concat(src, "), url(").concat(src, ")"),
      backgroundBlendMode: "difference",
      backgroundPosition: "calc(50% - 1px) calc(50% - 1px), calc(50% + 1px) calc(50% + 1px)",
      filter: "brightness(2) invert(1) grayscale(1)",
      boxShadow: "inset 0 0 0 1px black"
    }
  };
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background-image: ", ";\n    background-size: cover;\n    background-position: center;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ImageEffect = function ImageEffect(_ref) {
  var src = _ref.src,
      effect = _ref.effect;
  var Image = styled.img(_templateObject(), function (props) {
    return "url(".concat(props.src, ")");
  });
  var Effect = styled(Image)(function (props) {
    return imageEffects(src)[effect];
  });
  return React.createElement(Effect, {
    src: src
  });
};

ImageEffect.propTypes = {
  src: propTypes.string.isRequired,
  effect: propTypes.oneOf(['none', 'pencil', 'watercolor', 'emboss', 'colored-pencil', 'chalkboard', 'colored-chalkboard', 'airbrush', 'hallucination', 'flannel', 'low-ink-v', 'low-ink-h', 'collage', 'mosaic', 'photo-border', 'infrared', 'night-vision', 'warhol', 'selective-color', 'mirror-h', 'mirror-v'])
};
ImageEffect.defaultProps = {
  effect: 'none'
};

module.exports = ImageEffect;
