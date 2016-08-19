///////////////////STATELESS APP SEEN HERE////////////////////////
var headers = ["OMG-CSS", "Round 1", "Round 2", "Round 3", "Final"];  
var data = [
    ["Functionality", 0, 5, 5, 20],
    ["DevOps", 1, 1, 1, 18],
    ["Agile", 1, 1, 1, 13],
    ["Business Value", 1, 1, 1, 9],
    ["Testing", 1, 1, 1, 11],
    ["UI/UX", 1, 1, 1, 14],
]; 

var headers2 = ["Osama-Who", "Round 1", "Round 2", "Round 3", "Final"];  
var data2 = [
    ["Functionality", 0, 5, 5, 20],
    ["DevOps", 1, 1, 1, 1],
    ["Agile", 1, 1, 1, 13],
    ["Business Value", 1, 1, 1, 14],
    ["Testing", 1, 1, 1, 14],
    ["UI/UX", 1, 1, 1, 14],
]; 

var Excel = React.createClass({
    getInitialState : function() {
        return {data : this.props.initialData, edit : null};
    },

    propTypes: {
      headers : React.PropTypes.arrayOf(
        React.PropTypes.string
      ),
      initialData: React.PropTypes.arrayOf(
        React.PropTypes.arrayOf(
          React.PropTypes.number
        )
      ),
    },

    _sort : function (event) {
      var column = event.target.cellIndex;
      var data = this.state.data.slice();
      data.sort(function(a,b){
        return a[column] < b[column];
      });
      this.setState({
        data : data,
      });
    },

    _showEditor: function(event) {
      this.setState({edit: {
        row: parseInt(event.target.dataset.row, 10),
        cell: event.target.cellIndex,
      }});
    },

    _save : function(event) {
      event.preventDeafult();
      var input = event.target.firstChild;
      var data = this.state.data.slice();
      data[this.state.edit.row][this.state.edit.cell] = input.value;
      this.setState({
        edit : null,
        data : data,
      })
    },

    render : function() {
        return (
            React.DOM.table({id : "table"},
                React.DOM.thead({onClick: this._sort},
                    React.DOM.tr(null,
                        this.props.headers.map(function(title, idx) {
                            return React.DOM.th({key: idx}, title);
                        })
                    )
                ),
                React.DOM.tbody({onDoubleClick: this._showEditor},
                    this.state.data.map(function(row, rowidx) {
                        return (
                            React.DOM.tr({key: rowidx}, 
                                row.map(function(cell, idx){
                                  var content = cell;
                                  //turn 'content' into an input if the idx and rowid match the ne being editd
                                  //otherwise just show the text content
                                  var edit = this.state.edit;
                                  if(edit && edit.row === rowidx && edit.cell === idx){
                                    content = React.DOM.form({onSubmit: this._save},
                                        React.DOM.input({
                                          type: 'text',
                                          defaultValue : content,
                                        })
                                    );
                                  }
                                    return React.DOM.td({
                                      key: idx,
                                      'data-row' : rowidx,
                                    }, content);
                                }, this)
                            )
                        );
                    }, this)
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Excel,{
        headers : headers,
        initialData : data,
    }),
    document.getElementById("react-app")
);

ReactDOM.render(
    React.createElement(Excel,{
        headers : headers2,
        initialData : data2,
    }),
    document.getElementById("react-app-2")
);

         /*   
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
            */