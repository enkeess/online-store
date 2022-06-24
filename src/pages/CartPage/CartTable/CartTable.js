import { CartTableHead } from './CartTableHead'
import { CartTableItem } from './CartTableItem'

export const CartTable = (props) => {
	return(
		<ul>
			<CartTableHead/>
			<CartTableItem/>
			<CartTableItem/>
		</ul>
	)
}