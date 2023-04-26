import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = { APIlist:[] }

  componentDidMount() {
    let url = "https://api.publicapis.org/entries?category=Animals";
    axios({
      method: 'get',
      url: url,
      responseType: 'json'
    }).then(resp => {
        let listOfEntries = resp.data.entries;
        let listOfEntriesAsArray = Object.entries(listOfEntries);
        let entryDetials = listOfEntriesAsArray.map((entryDetail)=>{
          return <tr><td style={{color: "red",border: "1px solid black"}}>{entryDetail[1]["API"]} </td>
          <td style={{color: "red",border: "1px solid black"}}> {entryDetail[1]["Link"]} </td>
          </tr>
        })
        this.setState({APIlist:<table style={{border: "1px solid black", margin: "30px"}}><tbody>{entryDetials}</tbody></table>})
      })
    .catch(err => {
        console.log(err.toString())
    });
  }

  render() {
    const colorStyle = { color:this.props.color,fontSize:this.props.size+"px"}
    return (
      <div style={colorStyle}>
      <h2>APIs List</h2>
      <br/>

      <div>

            {
            this.state.APIlist
            }
        </div>
        </div>
    );
  }
}

export default App;