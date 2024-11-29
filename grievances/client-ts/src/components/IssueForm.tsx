import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import React, { useState } from 'react'

const IssueForm = () => {
    const [issueDetails, setIssueDetails] = useState<{
        fname: string,
        lname: string,
        issueTitle: string,
        issueDesc: string,
        dated: string
    }>({
        fname: "",
        lname: "",
        issueTitle: "",
        issueDesc: "",
        dated: new Date().toDateString()
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setIssueDetails({ ...issueDetails, [name]: value })
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(issueDetails)
    }
    return (
        <form onSubmit={handleSubmit} className='w-full sm:w-auto'>
            <h2 className='text-2xl font-light my-4'>Add new Grievance</h2>
            <div className='flex flex-col gap-3'>
                <div className='grid grid-cols-2 gap-2'>
                    <InputText placeholder='First name' name={"fname"} value={issueDetails.fname} onChange={handleChange} required autoComplete='off'/>
                    <InputText placeholder='Last name' name={"lname"} value={issueDetails.lname} onChange={handleChange} required autoComplete='off'/>
                </div>
                <InputText placeholder='Title of the issue' name={"issueTitle"} value={issueDetails.issueTitle} onChange={handleChange} required autoComplete='off'/>
                <InputTextarea placeholder='Issue Description' name={"issueDesc"} value={issueDetails.issueDesc} onChange={handleChange} required autoComplete='off'/>
                <Button type='submit' label='Submit' className='self-start' />
            </div>
        </form>
    )
}

export default IssueForm
