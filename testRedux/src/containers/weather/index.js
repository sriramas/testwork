import React from 'react';
import { connect } from 'react-redux';
import {
  getTemp
} from '../../modules/temp'

const Weather = (props) => (
  <div>
    <h1>Weather Page {props.match.params.id}</h1>
     <div>
     	<button onClick={props.getTemp}>get Temp</button>
     	{props.isLoading ? <p> Loading</p> : null}
     </div>
  </div>
)

const mapStateToProps = ({temp}) => ({
	isLoading:temp.isLoading,
	temp:temp.temp
})
export default connect(
  mapStateToProps,
  {getTemp}
)(Weather)
