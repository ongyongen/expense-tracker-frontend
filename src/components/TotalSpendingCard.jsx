import { Card } from "react-bootstrap"
import { calculateTotalSpent } from "../utils/ExpenseAnalytics"

const TotalSpendingCard = ({data}) => {
    return (
        <Card
            bg={"Primary".toLowerCase()}
            key={"Primary"}
            text={"Primary".toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '15vw' }}
            className="mb-2"
        >
        <Card.Header>Total Spent</Card.Header>
        <Card.Body>
            <Card.Title>${calculateTotalSpent(data)}</Card.Title>
        </Card.Body>
    </Card>

    )
}

export default TotalSpendingCard