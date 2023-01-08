import { Card } from "react-bootstrap"
import { calculateAvgSpent } from "../utils/ExpenseAnalytics"

const AvgSpendingCard = ({startDate, endDate, data}) => {
    return (
        <Card
            bg={"Primary".toLowerCase()}
            key={"Primary"}
            text={"Primary".toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '15vw' }}
            className="mb-2"
        >
            <Card.Header>Average Spent</Card.Header>
            <Card.Body>
                <Card.Title>${calculateAvgSpent(startDate, endDate, data)}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default AvgSpendingCard