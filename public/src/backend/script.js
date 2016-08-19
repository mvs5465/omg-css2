     
     
      ///////////////////STATELESS APP SEEN HERE////////////////////////
            var TextAreaComponent = React.createClass({
                propTypes : {
                    text: React.PropTypes.string,
                },

                getDefaultProps : function() {
                    return {
                        text : '',
                    };
                },

                _textChangeEvent : function(ev) {
                    this.setState({
                        text : ev.target.value,
                    });
                },

                getInitialState : function() {
                    return {
                        text : this.props.text,
                    };
                },

                render : function () {
                    return React.DOM.div(null, 
                        React.DOM.textarea({
                            defaultValue : this.props.text,
                            value : this.state.text,
                            onChange: this._textChangeEvent,
                        }),
                        React.DOM.h3(null, this.state.text.length)
                    );
                }
            })

            ReactDOM.render(
                React.createElement(TextAreaComponent, {
                    text : "Default text",
                }),
                document.getElementById("react-app")
            );