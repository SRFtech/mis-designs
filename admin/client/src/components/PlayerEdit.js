import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const PlayerEdit = (props) => {
  return (
    <Edit title='Edit Player' {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <DateInput label='Created' source='createdAt' />
            <TextInput source='name' />
            <DateInput label='Date of Birth' source='birthDate'/>
            <TextInput source='gender' />
            <TextInput multiline source='medicalCondition'/>
        </SimpleForm>
    </Edit>
  )
}

export default PlayerEdit