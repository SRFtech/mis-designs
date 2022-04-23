import React from 'react'
import { 
    List, 
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DeleteButton,
 } from 'react-admin'

function PlayersList(props) {
  return (
    <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <DateField source='createdAt' />
            <TextField source='name' />
            <DateField source='birthDate' />
            <TextField source='gender' />
            <TextField source='medicalCondition' />
            <EditButton basePath='players' />
            <DeleteButton basePath='players' />
        </Datagrid>
    </List>
  )
}

export default PlayersList