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
    "night-vision": {
      backgroundImage: "url(".concat(src, "), radial-gradient(#0F0, #000), repeating-linear-gradient(transparent 0, rgba(0, 0, 0, 0.1) 2.5px, transparent 5px)"),
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundBlendMode: "overlay"
    },
    pencil: {
      backgroundImage: "url(".concat(src, "), url(").concat(src, ")"),
      backgroundBlendMode: "difference",
      backgroundPosition: "calc(50% - 1px) calc(50% - 1px), calc(50% + 1px) calc(50% + 1px)",
      filter: "brightness(2) invert(1) grayscale(1)",
      boxShadow: "inset 0 0 0 1px black"
    },
    emboss: {
      backgroundImage: "url(".concat(src, "), url(").concat(src, "), url(").concat(src, ")"),
      backgroundBlendMode: "difference, screen",
      backgroundPosition: "calc(50% - 1px) calc(50% - 1px), calc(50% + 1px) calc(50% + 1px), center",
      filter: "brightness(2) invert(1) grayscale(1)"
    },
    flannel: {
      backgroundImage: "url(".concat(src, "), url(").concat(src, "), url(").concat(src, ")"),
      backgroundPosition: "center",
      backgroundSize: "100%, 100000% 100%, 100% 100000%",
      backgroundBlendMode: "overlay"
    },
    collage: {
      backgroundImage: "url(".concat(src, "), url(").concat(src, "), url(").concat(src, "), url(").concat(src, "), url(").concat(src, "), url(").concat(src, ")"),
      backgroundSize: "200%, 80%, 60%, 50%, 40%, 100%",
      backgroundPosition: "50%, 80%, 30%, 0",
      backgroundBlendMode: "overlay",
      backgroundRepeat: "no-repeat"
    },
    "low-ink-h": {
      backgroundImage: "url(".concat(src, "), url(").concat(src, "), url(").concat(src, ")\n"),
      backgroundSize: "100% 100%, 10000% 100%",
      backgroundBlendMode: "screen, overlay"
    },
    "low-ink-v": {
      backgroundImage: "url(".concat(src, "), url(").concat(src, "), url(").concat(src, ")"),
      backgroundSize: "100% 100%, 100% 1000%",
      backgroundBlendMode: "screen, overlay"
    },
    airbrush: {
      position: "relative",
      overflow: "hidden",
      "::after": {
        display: "block",
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "inherit",
        filter: "brightness(1.5) saturate(100) blur(5px) contrast(5)",
        mixBlendMode: "multiply"
      }
    },
    warhol: {
      backgroundImage: "linear-gradient(#14EBFF 0, #14EBFF 50%, #FFFF70 50%, #FFFF70 100%), linear-gradient(#FF85DA 0, #FF85DA 50%, #AAA 50%, #AAA 100%), url(".concat(src, ")"),
      backgroundSize: "50% 100%, 50% 100%, 50% 50%",
      backgroundPosition: "top left, top right",
      backgroundRepeat: "no-repeat, no-repeat, repeat",
      backgroundBlendMode: "color"
    },
    mosaic: {
      backgroundImage: "url(".concat(src, "), url(").concat(src, ")"),
      backgroundSize: "cover, 5% 5%",
      backgroundPosition: "center",
      backgroundBlendMode: "overlay"
    },
    chalkboard: {
      backgroundImage: "url(".concat(src, "), url(").concat(src, ")"),
      backgroundBlendMode: "difference",
      backgroundPosition: "calc(50% - 1px) calc(50% - 1px), calc(50% + 1px) calc(50% + 1px)",
      filter: "brightness(1.5) grayscale(1)"
    }
  };
};

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 600px;\n    height: 300px;\n    background-image: ", ";\n    background-size: cover;\n    background-position: center;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ImageEffect = function ImageEffect(_ref) {
  var url = _ref.url,
      effect = _ref.effect;
  var Image = styled.div(_templateObject(), function (props) {
    return "url(".concat(props.url, ")");
  });
  var effectObject = imageEffects(url)[effect];
  var Effect = styled(Image)(_templateObject2(), effectObject);
  return React.createElement(Effect, {
    url: url
  });
};

ImageEffect.propTypes = {
  url: propTypes.string.isRequired,
  effect: propTypes.oneOf(["none", "pencil", "watercolor", "emboss", "colored-pencil", "chalkboard", "colored-chalkboard", "airbrush", "hallucination", "flannel", "low-ink-v", "low-ink-h", "collage", "mosaic", "photo-border", "infrared", "night-vision", "warhol", "selective-color", "mirror-h", "mirror-v"])
};
ImageEffect.defaultProps = {
  effect: "none"
};

module.exports = ImageEffect;
