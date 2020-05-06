import React, { Component } from "react";


class List extends Component {
    render(){
        return(
            <div className="List">
                {this.props.returnList.map( mark =>
                    <ul key={mark.rank}>
                    <li>
                        {mark.city}-{mark.state}
                    </li>
                </ul>)
                } 
            </div>
          )
    
}
}

export default List