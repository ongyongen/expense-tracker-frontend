import { useFetchExpenseRecord } from "./expenseFormHooks";
import SubmitButton from "../../components/SubmitButton"
import TextInput from "../../components/TextInput";
import styled from "styled-components";
import Title from "../../components/Title";
import { useFetchCategory } from "../../services/categoryServiceHooks";
import DropdownInput from "../../components/DropdownInput";

import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const ExpenseForm = () => {

    const [name, price, category, data, error, loading, success, {recordName, recordPrice, recordCategory, createExpenseRecord} ] = useFetchExpenseRecord();

    const [catData, catError, catLoading, {getAll}] = useFetchCategory()
    
    return (
        <FormContainer>   
            <Title text={"Create a new expense record"}/>
            <TextInput label={"Name"} onChangeFn={(e) => recordName(e)}/>
            <TextInput label={"Price"} onChangeFn={(e) => recordPrice(e)}/>
            <DropdownInput allData={catData} buttonOnClickFn={getAll} itemOnClickFn={recordCategory} selectedInput={category}/>
            <SubmitButton text={"Create Expense Record"} onClickFn={createExpenseRecord}/>
            {success && <SuccessMessage text={"Successfully logged expense"}/>}
            {error !== null && <ErrorMessage text={"Error : Failed to log expense"}/>}
        </FormContainer>
    )
}

const FormContainer = styled.div`
    margin-top: 2em;
`
export default ExpenseForm

