import { useFetchCategory } from "./categoryFormHooks"
import SubmitButton from "../../components/SubmitButton"
import TextInput from "../../components/TextInput";
import styled from "styled-components";
import Title from "../../components/Title";

const CategoryForm = () => {
    const [name, data, error, loading, {recordCategoryName, createCategory} ] = useFetchCategory();

    return (
        <FormContainer>
            <Title text={"Create a new category"}/>
            <TextInput label={"Category Name"} onChangeFn={(e) => recordCategoryName(e)}/>
            <SubmitButton text={"Create Category"} onClickFn={createCategory}/>
        </FormContainer>
    )
}

const FormContainer = styled.div`
    margin-top: 2em;
`
export default CategoryForm