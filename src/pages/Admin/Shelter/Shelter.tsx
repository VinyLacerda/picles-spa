import { useRef } from "react";
import { Button } from "../../../components/common/Button";
import { Panel } from "../../../components/layout/Panel";
import styles from "./Shelter.module.css"
import {Input} from "../../../components/common/Input"

export function Shelter() {
    const inputRef = useRef(null)

    function submit(event) {
        event.preventDefault()
        console.log(inputRef.current.value)
    }
    return (
        <Panel>
            <form className={styles.container}>
            <Input label="Nome" />
            <Button type={"submit"}>Salvar</Button>
            </form>
        </Panel>
    )
}