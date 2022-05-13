import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import {NavLink} from 'react-router-dom';
import {List, SLink} from './Category.styled'

function Category() {
  return (
    <List>
        <SLink to={'/cuisine/italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/american'}>
            <FaHamburger/>
            <h4>Amarican</h4>
        </SLink>
        <SLink to={'/cuisine/thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}

export default Category