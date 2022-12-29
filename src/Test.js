import styled from 'styled-components'
import Header from './components/Header';
import  { useFetchCategory, useCreateCategory, useUpdateCategory, useDeleteCategory } from "./services/categoryServiceHooks"
import SubmitButton from './components/SubmitButton';

const Test = () => {
    const [alldata, error, loading, {getAll} ] = useFetchCategory();
    const [alldata2, error2, loading2, {createNew} ] = useCreateCategory();
    const [alldata3, error3, loading3, {update} ] = useUpdateCategory();
    const [error4, loading4, {remove}] = useDeleteCategory();
    console.log(error4)
    return (
        <div>
            <Header/>
            <SubmitButton text={"helo"} onClickFn={getAll}/>
            <SubmitButton text={"create new"} onClickFn={() => createNew({"age":5})}/>
            <SubmitButton text={"update"} onClickFn={() => update(1, {"age":5})}/>
            <SubmitButton text={"delete"} onClickFn={() => remove(2)}/>
        </div>
    )
}




export default Test