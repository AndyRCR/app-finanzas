import React from 'react'
import { Select, MenuItem } from "@material-ui/core";
import { useFetch } from "../../../hooks/useFetch";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    select: {
        marginTop: '16px',
        marginBottom: '8px',
        backgroundColor: 'white'
    }
}))

const SelectList = ({ title, url, handleChange, idtitle}) => {
    const classes = useStyles()
    const { data } = useFetch(url)

    if(!data) return null

    let idTitle = idtitle
    let selectTitle = title

    let options = []
    for(let i = 0; i < data.length; i++){
        options.push([data[i][idTitle],data[i][title]])
    }

    return (
        <>
        <Select
            displayEmpty
            key={selectTitle}
            id={selectTitle}
            defaultValue=''
            fullWidth
            variant='outlined'
            name={selectTitle}
            onChange={handleChange}
            className={classes.select}
        >
            <MenuItem value='' selected>Tipo de {selectTitle}</MenuItem>
            {data && options.map( (el) => <MenuItem value={el[0]}>{el[1]}</MenuItem>)}
        </Select>
        </>
    );
};

export default SelectList;