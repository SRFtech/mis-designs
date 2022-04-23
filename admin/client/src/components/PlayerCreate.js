import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const PlayerCreate = (props) => {
  return (
    <Create title='Add a Player' {...props}>
        <SimpleForm>
            <DateInput label='Created' source='createdAt' />
            <TextInput source='name' />
            <DateInput label='Date of Birth' source='birthDate'/>
            <TextInput source='age' />
            <TextInput source='gender' />
            <TextInput multiline source='medicalCondition'/>
            <TextInput source='name' />
            <TextInput source='phoneNumber' />
            <TextInput source='role' />
        </SimpleForm>
    </Create>
  )
}

export default PlayerCreate