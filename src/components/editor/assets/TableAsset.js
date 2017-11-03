import React from 'react';
import styles from './Assets.css';

class TableAsset extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    let asset=this.props.asset;
    let styles={'borderStyle':'solid', ...asset.style};
    let getColumns=() => {
      return(
        asset.value.map(function(row){
          return(
            <tr>
              {getRows(row)}
            </tr>
            )
        })
      )
    }

    let getRows=(row) => {
      return(
        row.map(function(value){
          return(
            <td onChange="" style={{'borderSpacing':'0', ...styles}}>
              {value}
            </td>
          )
        })
      )
    }

    return(
      <table style={{'borderSpacing':'0', 'padding':'0', ...this.props.styles}}>
        <tbody>
          {getColumns()}
        </tbody>
      </table>
    )
  }

  componentDidMount(){
    (function () {
      var thElm;
      var startOffset;
      Array.prototype.forEach.call(
        document.querySelectorAll("table td"),
        function (th) {
          th.style.position = 'relative';

          var grip = document.createElement('col-resizer');
          grip.innerHTML = "&nbsp;";
          grip.style.top = 0;
          grip.style.right = 0;
          grip.style.bottom = 0;
          grip.style.width = '5px';
          grip.style.position = 'absolute';
          grip.style.cursor = 'col-resize';
          grip.addEventListener('mousedown', function (e) {
            thElm = th;
            startOffset = th.offsetWidth - e.pageX;
          });

          th.appendChild(grip);
        });

      document.addEventListener('mousemove', function (e) {
        if (thElm) {
          thElm.style.width = startOffset + e.pageX + 'px';
        }
      });

      document.addEventListener('mouseup', function () {
        thElm = undefined;
      });
    })();
  }
}

export default TableAsset;
