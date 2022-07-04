import { useSelector } from 'react-redux'
import { CartTableHead } from './CartTableHead'
import { CartTableItem } from './CartTableItem'

export const CartTable = (props) => {
	const cartItems = useSelector(state => state.cart.items);

	return(
		<ul>
			<CartTableHead/>
			{cartItems.map(item => (
				<CartTableItem {...item} key={item.id}/>
			))}
		</ul>
	)
}