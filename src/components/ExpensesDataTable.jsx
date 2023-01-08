import Table from 'react-bootstrap/Table';
import { parseDateFormat } from '../utils/Date';

const ExpensesDataTable = ({allData}) => {
    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Date</th>
                <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {allData.map(data => {
                    return (
                        <tr>
                        <td>{data.name}</td>
                        <td>{data.price}</td>
                        <td>{parseDateFormat(data.date)}</td>
                        <td>{data.category.name}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default ExpensesDataTable