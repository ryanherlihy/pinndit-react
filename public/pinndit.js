// 'use strict';
//
// import Alt from './alt';
// let alt = new Alt();
//
// export default alt;

'use strict';

var Alt = require('alt');
var alt = new Alt();

module.exports = alt;
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsRouterActions = require('./actions/RouterActions');

var _actionsRouterActions2 = _interopRequireDefault(_actionsRouterActions);

_actionsRouterActions2['default'].run();
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var PinnActions = (function () {
  function PinnActions() {
    _classCallCheck(this, PinnActions);
  }

  _createClass(PinnActions, [{
    key: 'newPinnDropped',
    value: function newPinnDropped(marker) {
      this.dispatch(marker);
    }
  }, {
    key: 'createNewEvent',
    value: function createNewEvent(eventData) {
      this.dispatch(eventData);
    }
  }, {
    key: 'updateOpenPinn',
    value: function updateOpenPinn(marker) {
      this.dispatch(marker);
    }
  }, {
    key: 'closeCreateEventWindow',
    value: function closeCreateEventWindow() {
      this.dispatch();
    }
  }, {
    key: 'addComment',
    value: function addComment(comment) {
      this.dispatch(comment);
    }
  }, {
    key: 'checkPinnTimeout',
    value: function checkPinnTimeout() {
      this.dispatch();
    }
  }]);

  return PinnActions;
})();

exports['default'] = _alt2['default'].createActions(PinnActions);
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _configRouter = require('../config/router');

var _configRouter2 = _interopRequireDefault(_configRouter);

var RouterActions = (function () {
  function RouterActions() {
    _classCallCheck(this, RouterActions);
  }

  _createClass(RouterActions, [{
    key: 'transitionTo',
    value: function transitionTo(route, params) {
      this.dispatch();
      _configRouter2['default'].transitionTo(route, params);
    }
  }, {
    key: 'goBack',
    value: function goBack() {
      this.dispatch();
      _configRouter2['default'].goBack();
    }
  }, {
    key: 'run',
    value: function run() {
      _configRouter2['default'].run(function (Handler) {
        _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById('content'));
      });
    }
  }]);

  return RouterActions;
})();

exports['default'] = _alt2['default'].createActions(RouterActions);
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Map = require('./Map');

var _Map2 = _interopRequireDefault(_Map);

var Component = _react2['default'].Component;

var App = (function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { id: 'app' },
        _react2['default'].createElement(_Map2['default'], null),
        _react2['default'].createElement(_reactRouter.RouteHandler, null)
      );
    }
  }]);

  return App;
})(Component);

exports['default'] = App;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Component = _react2['default'].Component;

var Comments = (function (_Component) {
  _inherits(Comments, _Component);

  function Comments(props) {
    _classCallCheck(this, Comments);

    _get(Object.getPrototypeOf(Comments.prototype), 'constructor', this).call(this, props);

    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  _createClass(Comments, [{
    key: 'handleCommentSubmit',
    value: function handleCommentSubmit() {
      var newComment = this.refs.commentBox.getDOMNode().value;

      this.props.addComment(newComment);

      this.refs.commentBox.getDOMNode().value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      var comments = this.props.comments.map(function (comment, index) {
        return _react2['default'].createElement(
          'li',
          {
            className: 'event-comment',
            key: index },
          'User',
          Math.ceil(Math.random() * 1000),
          ': ',
          comment
        );
      });

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'event-window-body' },
          _react2['default'].createElement(
            'div',
            { className: 'comments-section-head' },
            comments.length,
            ' Comments'
          ),
          _react2['default'].createElement(
            'div',
            { className: 'comments-heading' },
            _react2['default'].createElement('input', {
              className: 'input-comment',
              type: 'text',
              ref: 'commentBox',
              placeholder: 'Enter Comment' }),
            _react2['default'].createElement(
              'button',
              {
                className: 'button-comment-post',
                onClick: this.handleCommentSubmit },
              'Post'
            )
          ),
          _react2['default'].createElement(
            'ul',
            { className: 'comments-list' },
            comments
          )
        )
      );
    }
  }]);

  return Comments;
})(Component);

exports['default'] = Comments;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InfoWindow = require('./InfoWindow');

var _InfoWindow2 = _interopRequireDefault(_InfoWindow);

var _Overlay = require('./Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _storesPinnStore = require('../stores/PinnStore');

var _storesPinnStore2 = _interopRequireDefault(_storesPinnStore);

var _actionsPinnActions = require('../actions/PinnActions');

var _actionsPinnActions2 = _interopRequireDefault(_actionsPinnActions);

var _actionsRouterActions = require('../actions/RouterActions');

var _actionsRouterActions2 = _interopRequireDefault(_actionsRouterActions);

var Component = _react2['default'].Component;

var CreateEvent = (function (_Component) {
  _inherits(CreateEvent, _Component);

  function CreateEvent(props) {
    _classCallCheck(this, CreateEvent);

    _get(Object.getPrototypeOf(CreateEvent.prototype), 'constructor', this).call(this, props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  _createClass(CreateEvent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.getElementById('new-event-name').value = '';
      document.getElementById('new-event-desc').value = '';
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var newEventData = {
        eventName: document.getElementById('new-event-name').value.trim(),
        eventDesc: document.getElementById('new-event-desc').value.trim()
      };

      if (document.getElementById('new-event-name').value) {
        _actionsPinnActions2['default'].createNewEvent(newEventData);
        _actionsRouterActions2['default'].goBack();
      }
    }
  }, {
    key: 'handleCloseWindow',
    value: function handleCloseWindow() {
      _actionsRouterActions2['default'].goBack();
      // PinnActions.checkPinnTimeout();
    }
  }, {
    key: 'render',
    value: function render() {
      var content = _react2['default'].createElement(
        'form',
        null,
        _react2['default'].createElement('input', {
          type: 'text',
          ref: 'newEventName',
          id: 'new-event-name',
          placeholder: 'Event Name' }),
        _react2['default'].createElement('textarea', {
          ref: 'newEventDesc',
          id: 'new-event-desc',
          rows: '5',
          placeholder: 'Event Description' }),
        _react2['default'].createElement(
          'button',
          { type: 'button', className: 'btn btn-danger', onClick: this.handleSubmit },
          'Create Event'
        )
      );

      return _react2['default'].createElement(
        'div',
        { className: 'overlay', onClick: this.handleCloseWindow },
        _react2['default'].createElement(_InfoWindow2['default'], {
          open: this.props.open,
          content: content,
          heading: 'Create Event' })
      );
    }
  }], [{
    key: 'willTransitionFrom',
    value: function willTransitionFrom(transition, component) {
      _actionsPinnActions2['default'].closeCreateEventWindow();
    }
  }]);

  return CreateEvent;
})(Component);

exports['default'] = CreateEvent;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InfoWindow = require('./InfoWindow');

var _InfoWindow2 = _interopRequireDefault(_InfoWindow);

var _Overlay = require('./Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Comments = require('./Comments');

var _Comments2 = _interopRequireDefault(_Comments);

var _storesPinnStore = require('../stores/PinnStore');

var _storesPinnStore2 = _interopRequireDefault(_storesPinnStore);

var _actionsPinnActions = require('../actions/PinnActions');

var _actionsPinnActions2 = _interopRequireDefault(_actionsPinnActions);

var _actionsRouterActions = require('../actions/RouterActions');

var _actionsRouterActions2 = _interopRequireDefault(_actionsRouterActions);

var Component = _react2['default'].Component;

var Event = (function (_Component) {
  _inherits(Event, _Component);

  function Event(props) {
    _classCallCheck(this, Event);

    _get(Object.getPrototypeOf(Event.prototype), 'constructor', this).call(this, props);

    this.state = _storesPinnStore2['default'].getState().openPinn;
    this.onChange = this.onChange.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
  }

  _createClass(Event, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesPinnStore2['default'].listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesPinnStore2['default'].unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleAddComment',
    value: function handleAddComment(comment) {
      _actionsPinnActions2['default'].addComment(comment);
    }
  }, {
    key: 'handleCloseWindow',
    value: function handleCloseWindow() {
      _actionsRouterActions2['default'].goBack();
      // PinnActions.checkPinnTimeout();
    }
  }, {
    key: 'render',
    value: function render() {
      var content = _react2['default'].createElement(
        'div',
        { className: 'container-fluid' },
        _react2['default'].createElement(
          'div',
          { className: 'row' },
          _react2['default'].createElement(
            'div',
            { className: 'section-head' },
            'Event Description'
          ),
          _react2['default'].createElement(
            'p',
            null,
            this.state.eventData.eventDesc ? this.state.eventData.eventDesc : 'No Description'
          )
        )
      );

      return _react2['default'].createElement(
        'div',
        { className: 'overlay', onClick: this.handleCloseWindow },
        _react2['default'].createElement(_InfoWindow2['default'], {
          comments: _react2['default'].createElement(_Comments2['default'], {
            comments: this.state.eventData.eventComments,
            addComment: this.handleAddComment }),
          content: content,
          heading: this.state.eventData.eventName })
      );
    }
  }]);

  return Event;
})(Component);

exports['default'] = Event;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Comments = require('./Comments');

var _Comments2 = _interopRequireDefault(_Comments);

var Component = _react2['default'].Component;

var InfoWindow = (function (_Component) {
  _inherits(InfoWindow, _Component);

  function InfoWindow() {
    _classCallCheck(this, InfoWindow);

    _get(Object.getPrototypeOf(InfoWindow.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(InfoWindow, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.stopPropagation();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'event-window', onClick: this.handleClick },
        _react2['default'].createElement(
          'div',
          { className: 'event-window-heading' },
          this.props.heading
        ),
        _react2['default'].createElement(
          'div',
          { className: 'event-window-body' },
          this.props.content
        ),
        _react2['default'].createElement(
          'div',
          { className: 'event-window-comments' },
          this.props.comments
        )
      );
    }
  }]);

  return InfoWindow;
})(Component);

exports['default'] = InfoWindow;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CreateEvent = require('./CreateEvent');

var _CreateEvent2 = _interopRequireDefault(_CreateEvent);

var _storesPinnStore = require('../stores/PinnStore');

var _storesPinnStore2 = _interopRequireDefault(_storesPinnStore);

var _actionsPinnActions = require('../actions/PinnActions');

var _actionsPinnActions2 = _interopRequireDefault(_actionsPinnActions);

var _actionsRouterActions = require('../actions/RouterActions');

var _actionsRouterActions2 = _interopRequireDefault(_actionsRouterActions);

var Component = _react2['default'].Component;

var Map = (function (_Component) {
  _inherits(Map, _Component);

  function Map() {
    _classCallCheck(this, Map);

    _get(Object.getPrototypeOf(Map.prototype), 'constructor', this).call(this);

    this.state = _storesPinnStore2['default'].getState();
    this.map;

    this.onChange = this.onChange.bind(this);

    this.initialize = this.initialize.bind(this);
    this.addMarker = this.addMarker.bind(this);
    this.centerMapView = this.centerMapView.bind(this);
  }

  _createClass(Map, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('map mount');
      _storesPinnStore2['default'].listen(this.onChange);
      this.initialize();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesPinnStore2['default'].unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'initialize',
    value: function initialize() {
      var _this = this;

      var mapOptions = {
        center: { lat: 42.154, lng: -71.223 },
        zoom: 15,
        disableDefaultUI: true
      };

      this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

      var pinnControl = document.createElement('div');
      var pinnImage = document.createElement('img');
      pinnImage.src = '../../app/images/pinn.png';
      pinnImage.className = 'pinn-control';
      pinnImage.draggable = false;
      pinnControl.appendChild(pinnImage);
      this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(pinnControl);

      google.maps.event.addListener(this.map, 'click', function (e) {
        _this.addMarker(e.latLng);
      });
    }
  }, {
    key: 'addMarker',
    value: function addMarker(coords) {
      var _this2 = this;

      var marker = new google.maps.Marker({
        position: coords,
        map: this.map
      });

      this.centerMapView(coords);
      _actionsPinnActions2['default'].newPinnDropped(marker);
      _actionsRouterActions2['default'].transitionTo('create-event');

      google.maps.event.addListener(marker, 'click', function () {
        _this2.centerMapView(coords);
        _actionsPinnActions2['default'].updateOpenPinn(marker);
        _actionsRouterActions2['default'].transitionTo('event', { id: _this2.state.openPinn.getPosition() });
      });
    }
  }, {
    key: 'centerMapView',
    value: function centerMapView(center) {
      this.map.panTo(center);
      this.map.setZoom(15);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('div', {
        id: 'map-canvas' });
    }
  }]);

  return Map;
})(Component);

exports['default'] = Map;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsPinnActions = require('../actions/PinnActions');

var _actionsPinnActions2 = _interopRequireDefault(_actionsPinnActions);

var _actionsRouterActions = require('../actions/RouterActions');

var _actionsRouterActions2 = _interopRequireDefault(_actionsRouterActions);

var Component = _react2['default'].Component;

var Overlay = (function (_Component) {
  _inherits(Overlay, _Component);

  function Overlay(props) {
    _classCallCheck(this, Overlay);

    _get(Object.getPrototypeOf(Overlay.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Overlay, [{
    key: 'handleCloseWindow',
    value: function handleCloseWindow() {
      _actionsRouterActions2['default'].goBack();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('div', {
        className: 'overlay',
        onClick: this.handleCloseWindow });
    }
  }]);

  return Overlay;
})(Component);

exports['default'] = Overlay;
module.exports = exports['default'];
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var router = undefined;

module.exports = {
  makePath: function makePath(to, params, query) {
    return router.makePath(to, params, query);
  },

  makeHref: function makeHref(to, params, query) {
    return router.makeHref(to, params, query);
  },

  transitionTo: function transitionTo(to, params, query) {
    router.transitionTo(to, params, query);
  },

  replaceWith: function replaceWith(to, params, query) {
    router.replaceWith(to, params, query);
  },

  goBack: function goBack() {
    router.goBack();
  },

  run: function run(render) {
    router.run(render);
  }
};

router = _reactRouter2['default'].create({
  routes: _routes2['default'],
  location: _reactRouter2['default'].HistoryLocation
});
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('../components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsCreateEvent = require('../components/CreateEvent');

var _componentsCreateEvent2 = _interopRequireDefault(_componentsCreateEvent);

var _componentsEvent = require('../components/Event');

var _componentsEvent2 = _interopRequireDefault(_componentsEvent);

var Component = _react2['default'].Component;
exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { handler: _componentsApp2['default'] },
  _react2['default'].createElement(_reactRouter.Route, { name: 'create-event', handler: _componentsCreateEvent2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { name: 'event', path: 'event/:id', handler: _componentsEvent2['default'] })
);
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsPinnActions = require('../actions/PinnActions');

var _actionsPinnActions2 = _interopRequireDefault(_actionsPinnActions);

var PinnStore = (function () {
  function PinnStore() {
    _classCallCheck(this, PinnStore);

    this.bindListeners({
      onCreateNewEvent: _actionsPinnActions2['default'].CREATE_NEW_EVENT,
      onUpdateOpenPinn: _actionsPinnActions2['default'].UPDATE_OPEN_PINN,
      onNewPinnDropped: _actionsPinnActions2['default'].NEW_PINN_DROPPED,
      onCloseCreateEventWindow: _actionsPinnActions2['default'].CLOSE_CREATE_EVENT_WINDOW,
      onAddComment: _actionsPinnActions2['default'].ADD_COMMENT,
      onCheckPinnTimeout: _actionsPinnActions2['default'].CHECK_PINN_TIMEOUT
    });

    this.pinns = [];
    this.newPinn;
    this.openPinn = {
      eventData: {
        eventName: '',
        eventDesc: '',
        eventComments: []
      }
    };
  }

  _createClass(PinnStore, [{
    key: 'onNewPinnDropped',
    value: function onNewPinnDropped(marker) {
      this.newPinn = marker;
    }
  }, {
    key: 'onCreateNewEvent',
    value: function onCreateNewEvent(eventData) {
      this.newPinn.eventData = eventData;
      this.newPinn.eventData.eventComments = [];
      this.newPinn.eventData.dropTime = Date.now();
      this.pinns.push(this.newPinn);
      this.newPinn = null;
    }
  }, {
    key: 'onUpdateOpenPinn',
    value: function onUpdateOpenPinn(marker) {
      this.openPinn = marker;
    }
  }, {
    key: 'onCloseCreateEventWindow',
    value: function onCloseCreateEventWindow() {
      if (this.newPinn) {
        this.newPinn.setMap(null);
        this.newPinn = null;
      }
    }
  }, {
    key: 'onAddComment',
    value: function onAddComment(comment) {
      this.openPinn.eventData.eventComments = [comment].concat(this.openPinn.eventData.eventComments);
    }
  }, {
    key: 'onCheckPinnTimeout',
    value: function onCheckPinnTimeout() {
      var _this = this;

      if (this.openPinn) {
        var pinnAge = Date.now() - this.openPinn.eventData.dropTime;
        console.log(pinnAge, this.pinns);
        if (pinnAge > 4000) {
          this.pinns = this.pinns.filter(function (pinn) {
            return pinn.getPosition() !== _this.openPinn.getPosition();
          });
          this.openPinn.setMap(null);
          this.openPinn = null;
        }
      }
    }
  }]);

  return PinnStore;
})();

exports['default'] = _alt2['default'].createStore(PinnStore);
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsRouterActions = require('../actions/RouterActions');

var _actionsRouterActions2 = _interopRequireDefault(_actionsRouterActions);

var _PinnStore = require('./PinnStore');

var _PinnStore2 = _interopRequireDefault(_PinnStore);

var RouteStore = (function () {
  function RouteStore() {
    _classCallCheck(this, RouteStore);

    this.bindListeners({
      onTransitionTo: _actionsRouterActions2['default'].TRANSITION_TO,
      onGoBack: _actionsRouterActions2['default'].GO_BACK
    });
  }

  _createClass(RouteStore, [{
    key: 'onTransitionTo',
    value: function onTransitionTo() {
      this.waitFor(_PinnStore2['default']);
    }
  }, {
    key: 'onGoBack',
    value: function onGoBack() {
      this.waitFor(_PinnStore2['default']);
    }
  }]);

  return RouteStore;
})();

exports['default'] = _alt2['default'].createStore(RouteStore);
module.exports = exports['default'];