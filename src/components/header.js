import React from "react";
import {Link} from "gatsby"


const headerItems = [
  {'home': '/'},
  {'random thing': '/randomthing'},
  {'about': '/about'},
  {'exit': 'http://duckduckgo.com'},
]

export default () => {
  return <div className="header">
    { headerItems.map( (item, inx) => {
      return (
        <div key={inx} className="headerNavButton">
          <Link to={Object.values(item)[0]}>{ Object.keys(item)[0] }</Link>
        </div>
      )
    }) }
  </div>
}
