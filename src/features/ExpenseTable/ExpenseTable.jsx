import DateInput from "../../components/DateInput"
import useExpenseTable from "./expenseTableHooks"
import Title from "../../components/Title"
import styled from "styled-components"
import SubmitButton from "../../components/SubmitButton"
import ExpensesDataTable from "../../components/ExpensesDataTable"

import TotalSpendingCard from "../../components/TotalSpendingCard"
import AvgSpendingCard from "../../components/AvgSpendingCard"

import SpendingChart from "../../components/SpendingChart"

import { parseExpenseDateData } from "../../utils/ExpenseAnalytics"

const ExpenseTable = () => {
    const [startDate, endDate, data, {recordStartDate, recordEndDate, getAllWithinDateRange}] = useExpenseTable()
    
    return (
        <div>
            {data &&  console.log(parseExpenseDateData(data))}
            <ExpenseTableContainer>
                <TitleContainer>
                    <Title text={"View Expenses"}/>
                </TitleContainer>
                <DateContainer>
                    <DateInput label={"Start Date"} onChangeFn={recordStartDate}/>
                </DateContainer>
                <DateContainer>
                    <DateInput label={"End Date"} onChangeFn={recordEndDate}/>
                </DateContainer>
                <SubmitButtonContainer>
                    <SubmitButton text={"Submit"} onClickFn={getAllWithinDateRange}/>
                </SubmitButtonContainer>
                <AnalyticsCardContainer>
                    <TotalSpendingCardContainer>
                        {data && <TotalSpendingCard data={data}/>}
                    </TotalSpendingCardContainer>
                    {data && <AvgSpendingCard startDate={startDate} endDate={endDate} data={data}/>}
                </AnalyticsCardContainer>
                <ExpenseDataTableContainer>
                <SpendingChartContainer>
                    {data && <SpendingChart data={parseExpenseDateData(data)}/>}
                </SpendingChartContainer>
                {data && <ExpensesDataTable allData={data}/>}
                </ExpenseDataTableContainer>
        </ExpenseTableContainer>
        </div>
    )
}

const ExpenseTableContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    align-items:center;
    width:80%;
`
const TitleContainer = styled.div`
    margin-right:2em;
`
const DateContainer = styled.div`
    padding-right:2em;
`
const SubmitButtonContainer = styled.div`
    display:flex;
    margin-top:1em;
`

const AnalyticsCardContainer = styled.div`
    display:flex;
    flex-direction: row;
    margin-bottom:2em;
`
const TotalSpendingCardContainer = styled.div`
    margin-right:2em;
`

const ExpenseDataTableContainer = styled.div`
    width:100%;
`

const SpendingChartContainer = styled.div`
    width:100%;
    margin-top:1.5em;
    margin-bottom:1.5em;
`
export default ExpenseTable