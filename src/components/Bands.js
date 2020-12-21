import React from 'react'
import Band from './Band'

class Bands extends React.Component{

    renderBand = () => {
        return this.props.bands.map(band => <Band deleteBand={this.props.deleteBand} band={band}/>)
    }
    render(){
        return(
            <div>
            {this.renderBand()}
            </div>
        )
    }
}

export default Bands