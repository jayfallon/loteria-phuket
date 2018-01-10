import g from "glamorous"
import Link from "gatsby-link"

import styles from './about.module.scss'

export default ({ data }) => {
  return (
    <div>
      <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
        Amazing Pandas Eating Things
      </g.H1>
      <p className="amigo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti quia illo non dolore eos, quod sequi quasi porro maiores, libero nemo error inventore, officiis eveniet, aspernatur. Repellat, tempora, porro.</p>
    </div>
  )
}
