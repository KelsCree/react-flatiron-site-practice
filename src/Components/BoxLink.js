import React from 'react'

export default function BoxLink(props) {
  return (
    <li className={props.isActive ? "active" : null}>
      <div className={props.isActive ? "box-link module-link active" : "box-link module-link"}>
        <a href={props.url} className={props.isActive ? "router-link-exact-active router-link-active" : null}>{props.displayLabel}</a>
      </div>
  </li>
  )
}